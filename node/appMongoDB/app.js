// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });

// mongoClient.connect(function(err, client){
      
//     //В качестве базы данных здесь используется "usersdb"
//     const db = client.db("usersdb");
//     //После подключения мы обращаемся к коллекции "users":
//     const collection = db.collection("users");

//     if(err) return console.log(err);

//     // let user = {name: "Tom", age: 23};
//     // для добавления одного документа - объекта user применяется метод insertOne()
//     // collection.insertOne(user, function(err, result){
          
//     //     if(err){ 
//     //         return console.log(err);
//     //     }
//     //     // В функции обратного вызова инспектируется добавленный объект с помощью свойства result.ops. 
//     //     // Причем это уже не просто объект user, а объект, который получен обратно из базы данных и который содержит идентификатор, установленный при добавлении
//     //     console.log(result.ops);
//     //     client.close();
//     // });

// // Как и insertOne, метод insertMany() в качестве первого параметра принимает добавляемые данные - массив объектов, а в качестве второго - функцию обратного вызова, которая выполняется при добавлении данных. 
// // При удачном добавлении второй параметр функции - results будет содержать добавленные данные.

//     // let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
//     // При добавлении набора объектов можно использовать метод insertMany().
//     // collection.insertMany(users, function(err, result){
          
//     //     if(err){ 
//     //         return console.log(err);
//     //     }
//     //     // В функции обратного вызова инспектируется добавленный объект с помощью свойства result.ops. 
//     //     // Причем это уже не просто объект user, а объект, который получен обратно из базы данных и который содержит идентификатор, установленный при добавлении
//     //     console.log(result);
//     //     client.close();
//     // });



//     // Для получения данных из коллекции применяется метод find():
//     // collection.find().toArray(function(err, results){
                 
//     //     console.log(results);
//     //     client.close();
//     // });

//     // дополнительно отфильтровать извлекаемые документы. 
//     // collection.find({name: "Tom"}).toArray(function(err, results){
                 
//     //     console.log(results);
//     //     client.close();
//     // });

//     // collection.find({name: "Tom", age: 23}).toArray(function(err, results){
             
//     //     console.log(results);
//     //     client.close();
//     // });


//     // Метод findOne() работает аналогично, только позволяет получить один документ:
//     // db.collection("users").findOne(function(err, doc){
              
//     //     console.log(doc);
//     //     client.close();
//     // });

//     // И также в методе findOne() можно применять фильтрацию:
//     // db.collection("users").findOne({name: "Bob"}, function(err, doc){
             
//     //     console.log(doc);
//     //     client.close();
//     // });


// //...................................................................... УДАЛЕНИЕ ОБЪЕКТОВ

//     // deleteMany(): удаляет все документы, которые соответствуют определенному критерию
//     // Удалим всех пользователей, у которых имя "Tom":
//     // db.collection("users").deleteMany({name: "Tom"}, function(err, result){
              
//     //     console.log(result);
//     //     client.close();
//     // });


//     // Метод deleteOne() аналогичен методу deleteMany() за тем исключением, что удаляет только один объект:
//     // db.collection("users").deleteOne({name: "Bob"}, function(err, result){
              
//     //     console.log(result);
//     //     client.close();
//     // });


//     // Метод findOneAndDelete() удаляет один документ по определенному критерию, но по сравнению с методом deleteOne() он возвращает удаленный документ:
//     // db.collection("users").findOneAndDelete({age: 21}, function(err, result){
              
//     //     console.log(result);
//     //     client.close();
//     // });

//     // Метод drop() удаляет всю коллекцию:
//     // db.collection("users").drop(function(err, result){
              
//     //     console.log(result);
//     //     client.close();
//     // });







//     //...................................................................... Обновление объектов

//     // Метод findOneAndUpdate() обновляет один элемент. Он принимает следующие параметры:
//     // Критерий фильтрации документа, который надо обновить
//     // Параметр обновления
//     // Дополнительные опции обновления, которые по умолчанию имеют значение null
//     // Функция обратного вызова, которая выполняется при обновлении

//     let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
//     const col = db.collection("users");

//     // col.insertMany(users, function(err, results){
             
//     //     col.findOneAndUpdate(
//     //         {age: 21}, // критерий выборки
//     //         { $set: {age: 25}}, // параметр обновления
//     //         {                           // доп. опции обновления    
//     //             returnOriginal: false   //вернет не старое значение, а новое
//     //         },
//     //         function(err, result){
                 
//     //             console.log(result);
//     //             client.close();
//     //         }
//     //     );
//     // });


//     // Метод updateMany() позволяет обновить все документы из коллекции, которые соответствуют критерию фильтрации:
//     // col.updateMany(
//     //     {name: "Sam"},              // критерий фильтрации
//     //     { $set: {name: "Bob"}},     // параметр обновления
//     //     function(err, result){
                  
//     //         console.log(result);
//     //         client.close();
//     //     }
//     // );



//     // Метод updateOne() аналогичен методу updateMany за тем исключением, что обновляет только один элемент. В отличие от метода findOneAndUpdate() он не возвращает измененный документ:
//     // col.updateOne(
//     //     {name: "Tom"}, 
//     //     { $set: {name: "Tom Junior", age:33}},
//     //     function(err, result){
                  
//     //         console.log(result);
//     //         client.close();
//     //     }
//     // );
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// рабочий вариант с монгоДБ

// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const objectId = require("mongodb").ObjectID;
   
// const app = express();
// const jsonParser = express.json();
 
// const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
 
// let dbClient;
 
// app.use(express.static(__dirname + "/public"));
 
// mongoClient.connect(function(err, client){
//     if(err) return console.log(err);
//     dbClient = client;
//     app.locals.collection = client.db("usersdb").collection("users");
//     app.listen(3000, function(){
//         console.log("Сервер ожидает подключения...");
//     });
// });
 
// app.get("/api/users", function(req, res){
        
//     const collection = req.app.locals.collection;
//     // Когда приходит GET-запрос к приложению, то возвращаем в ответ клиенту все документы из базы данных:
//     collection.find({}).toArray(function(err, users){
         
//         if(err) return console.log(err);
//         res.send(users)
//     });
     
// });


// app.get("/api/users/:id", function(req, res){
//         // Когда в записываешь что то в базу ему присваивается уникальный id. Чтобы найти экземпляр по id, нужно сравнить оба. 
//     const id = new objectId(req.params.id);
//     // Если в GET-запросе передается параметр id, то возвращаем только одного пользователя из базы данных по этому id:
//     const collection = req.app.locals.collection;
//     collection.findOne({_id: id}, function(err, user){
               
//         if(err) return console.log(err);
//         res.send(user);
//     });
// });
   
// // Когда приходит POST-запрос, с помощью парсера jsonParser получаем отправленные данные и по ним создаем объект, который добавляем в базу данных посредством метода insertOne():
// app.post("/api/users", jsonParser, function (req, res) {
       
//     if(!req.body) return res.sendStatus(400);
       
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const user = {name: userName, age: userAge};
//     //    Поскольку все взаимодействие будет идти с коллекцией users, то получаем ссылку на эту коллекцию в локальную переменную приложения app.locals.collection.
//     const collection = req.app.locals.collection;
//     collection.insertOne(user, function(err, result){
               
//         if(err) return console.log(err);
//         res.send(user);
//     });
// });
    
// // И в методе app.delete(), который срабатывает при получении запроса DELETE, вызываем метод findOneAndDelete() для удаления данных.
// app.delete("/api/users/:id", function(req, res){
        
//     const id = new objectId(req.params.id);
//     const collection = req.app.locals.collection;
//     collection.findOneAndDelete({_id: id}, function(err, result){
               
//         if(err) return console.log(err);    
//         let user = result.value;
//         res.send(user);
//     });
// });
   
// // При получении PUT-запроса также получаем отправленные данные и с помощью метода findOneAndUpdate() обновляем данные в БД.
// app.put("/api/users", jsonParser, function(req, res){
        
//     if(!req.body) return res.sendStatus(400);
//     const id = new objectId(req.body.id);
//     const userName = req.body.name;
//     const userAge = req.body.age;
       
//     const collection = req.app.locals.collection;
//     collection.findOneAndUpdate({_id: id}, { $set: {age: userAge, name: userName}},
//          {returnOriginal: false },function(err, result){
               
//         if(err) return console.log(err);     
//         const user = result.value;
//         res.send(user);
//     });
// });
 
// // прослушиваем прерывание работы программы (ctrl-c)
// // В конце работы скрипта мы можем закрыть подключение, сохраненное в переменную dbClient:
// process.on("SIGINT", () => {
//     dbClient.close();
//     process.exit();
// });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
// установка схемы
// это схема, которая описывает объект пользователя.
// const userScheme = new Schema({
//     name: String,
//     age: Number
// });
  

// const userScheme = new Schema({
//     name: String,
//     age: Number,
//     company: {
//         name: String,
//         employee: [String], // тип - массив строк
//         date: Date
//     }
// });

// Значение по умолчанию
// const userScheme = new Schema({
//     name: {
//         type: String,
//         default: "NoName"
//     },
//     age: {
//         type: Number,
//         default: 22
//     }
// });

// const userScheme = new Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength:3,
//         maxlength:20
//     },
//     age: {
//         type: Number,
//         required: true,
//         min: 1,
//         max:100
//     }
// }, { versionKey: false }//отключает версию документа
// );



// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);  

// Затем, используя эту схему, создаем модель пользователя:
// ервый параметр в методе mongoose.model указывает на название модели.
//  Mongoose затем будет автоматически искать в базе данных коллекцию, название которой соответствует названию модели во множественном числе. Например, в данном случае название модели "User".
// Второй параметр функции mongoose.model - собственно схема.
// const User = mongoose.model("User", userScheme);

// Далее мы можем создавать объекты этой модели:
// const user = new User({
//     name: "Bill",
//     age: 41
// });
// const user = new User({name: "Li"});    
// const user1 = new User(); // name - NoName, age - 22
// const user2 = new User({name: "Tom"}); // name - Tom, age - 22
// const user3 = new User({age:34}); // name - NoName, age - 34
  
// сохраняет текущий объект в базу данных:
// user.save(function(err){
//     mongoose.disconnect();  // отключение от базы данных
      
//     if(err) return console.log(err);
//     console.log("Сохранен объект", user);
// });

// второй способ сохранения объекта
// user.save()
// .then(function(doc){
//     console.log("Сохранен объект", doc);
//     mongoose.disconnect();  // отключение от базы данных
// })
// .catch(function (err){
//     console.log(err);
//     mongoose.disconnect();
// });

////////////////////////////////////////////////////////////////////////////// Получение данных
// ({}), то возвращаются все объекты
User.find({name: "Tom"}, function(err, docs){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(docs);
});

// Метод findOne() работает аналогично методу find, только возвращает один объект:
User.findOne({name: "Tom"}, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(doc);
});

// И метод findById() возвращает документ с определенным идентификатором:
const id = "588a0f8c9151d23ce47bf98d";
User.findById(id, function(err, doc){
    mongoose.disconnect();
    if(err) return console.log(err);
    console.log(doc);
});

// Для удаления применяется метод remove(). 
User.remove({age:33}, function(err, result){
    mongoose.disconnect();
    if(err) return console.log(err);

    console.log(result);
});

// Если же нам надо удалить один документ, то мы можем использовать метод findOneAndDelete():
// В отличие от метода remove здесь в функцию обратного вызова передается удаленный документ:
// User.findOneAndDelete({name:"Bill"}, function(err, doc){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Удален пользователь ", doc);
// });


// И частная разновидность этого метода - удаление по полю _id в виде метода findByIdAndDelete():
// var id = "588a0f8c9151d23ce47bf98d";
// User.findByIdAndDelete(id, function(err, doc){
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Удален пользователь ", doc);
// });

// User.updateOne({name: "Tom"}, {name: "Tom Smith"}, function(err, result){
     
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log(result);
// });

// Нередко для обновления используется фильтрация по _id. И на этот случай мы можем использовать метод findByIdAndUpdate():
// const id = "588b2d6fc7d95503980ecf99";
// User.findByIdAndUpdate(id, {name: "Sam", age: 25}, function(err, user){
     
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Обновленный объект", user);
// });

// Но по умолчанию передается старое состояние документа. Если же нам надо получить документ уже в измененном состоянии, то в метод findByIdAndUpdate необходимо передать еще один параметр:

// User.findByIdAndUpdate(id, {name: "Bilbo Baggins", age: 111}, {new: true}, function(err, user){
     
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Обновленный объект", user);
// });


// Если нам необходимо обновить и возвратить обновленный документ не только по id, а вообще по любому критерию, то можно использовать метод findOneAndUpdate:

// User.findOneAndUpdate({name: "Sam"}, {name: "Bill", age:24}, {new: true}, function(err, user){
     
//     mongoose.disconnect();
//     if(err) return console.log(err);
//     console.log("Обновленный объект", user);
// });







