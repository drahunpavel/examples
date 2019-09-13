const path = require('path');
const fs = require('fs'); 

const p = path.join( //путь к файлу
    path.dirname(process.mainModule.filename), //директория
    'data',
    'card.json'
)

class Card {

    static async add(course){
        const card = await Card.fetch();
        
        //добавление курса в корзинну// или добавляю новый курс, или добавляю +1 уже к выбранному курсу
        const idx = card.courses.findIndex( c => c.id === course.id) //находит конкретный курс в корзине
        const condidate = card.courses[idx];
        
        //если condidate чему-то равен, значит такой курс уже есть
        if(condidate){
            condidate.count++;
            card.courses[idx] = condidate;
        }else{
            console.log('-----------', course)
            course.count = 1;
            card.courses.push(course);
        }

        //общая стоимость
        card.price += +course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), err => {
                if(err){    
                    reject(err)
                }else{
                    resolve()
                }
            })
        })
    };

    static async fetch(){ //получает данные из корзины

        return new Promise((resolve, reject) => {
            fs.readFile(p, 'utf-8', (err, content) => {
                if(err){
                    reject(err);
                }else{
                    resolve(JSON.parse(content))
                }
            })
        })
    };

    static async remove(id){
        const card = await Card.fetch();

        const idx = card.courses.findIndex( c => c.id === id) //находит конкретный курс в корзине
        const course = card.courses[idx];

        if(course.count === 1){
            card.courses = card.courses.filter(c => c.id !== id);
        }else{ //если количество равно единице, удаляем вообще, иначе уменьшаем на единицу
            card.courses[idx].count--;
        }

        card.price -= course.price;

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card), (err, content) => {
                if(err){
                    reject(err);
                }else{
                    resolve(card)
                }
            })
        })
    }

};

   

module.exports = Card;