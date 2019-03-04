let currentDate = new Date();



global.date = currentDate;//происходит установка глобальной переменной date: global.date = currentDate;


// в модуле получаем глобальную переменную name, которая будет установлена из вне. При этом обратиться к глобальной переменной name мы можем через объект global: global.name, либо просто через имя name, так как переменная глобальная.

 
//бъект module.exports - это то, что возвращает функция require() при получении модуля.

module.exports.getMessage = function(){
    let hour = currentDate.getHours();
    if(hour >16)
        return "Добрый вечер, " + global.name;
    else if(hour >10)
        return "Добрый день, " + name;
    else
        return "Доброе утро, " + name;
}