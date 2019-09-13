const uuid = require('uuid/v4')
const fs = require('fs');
const path = require('path');

//модель
class Course {
    constructor(title, price, img){
        this.title = title;
        this.price = price;
        this.img = img;
        this.id = uuid();
    }

    toJSON() {
        
        return {
            id: this.id,
            title: this.title,
            price: this.price,
            img: this.img
        }
    }

    async save(){
        const courses = await Course.getAll() //

        courses.push(this.toJSON());
        console.log('--courses', courses)

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'courses.json'),
                JSON.stringify(courses),
                (err, content) => {
                    if(err){
                        reject(err)
                    }else{
                        resolve()
                    };
                }
            )
        })
    };

    static getAll(){


        //весь асихронный запрос обертываем в промис
        return new Promise((resolve, reject) => {


            fs.readFile( //считываем данные с файла
                path.join(__dirname, '..', 'data', 'courses.json'),
                'utf-8',
                (err, content) => {
                    if(err){
                        reject(err)
                    }else{
                        console.log('content', content)
                        resolve(JSON.parse(content)) //хдесь получем стоку, поэтому парсим все
                    };
                }
            )
        })
    }

    static async getById(id){

        const courses = await Course.getAll();//образение ко всем параметрам курса

        return courses.find(c => c.id === id);
    };
};

module.exports = Course;