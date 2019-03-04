const express=require('express');

const app=express();
const bodyParser = require("body-parser");






// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
//Поскольку данные отправляются с помощью формы, то для создания парсера применяется функция urlencoded().
//extended: false указывает, что объект - результат парсинга будет представлять набор пар ключ-значение


// создаем парсер для данных в формате json
const jsonParser = express.json();

const hbs = require("hbs");



// Чтобы установить Handlebars в качестве движка представлений в Express, вызывается функция:
// app.set("view engine", "hbs");
//app.set("views", "your_directory");
app.set("view engine", "hbs");
app.set("views", "templates"); // установка пути к представлениям


// устанавливает каталог, где располагаются частичные представления.
hbs.registerPartials(__dirname + "/templates/partials");


hbs.registerHelper("getTime", function(){
     
    var myDate = new Date();
    var hour = myDate.getHours();
    var minute = myDate.getMinutes();
    var second = myDate.getSeconds();
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    return "Текущее время: " + hour + ":" + minute + ":" + second;
});





hbs.registerHelper("createStringList", function(array){
     
    var result="";
    for(var i=0; i<array.length; i++){
        result +="<li>" + array[i] + "</li>";
    }
    return new hbs.SafeString("<ul>" + result + "</ul>");
});


// app.use(express.static(__dirname + "/public"));
// app.use("/static",express.static(__dirname + "/public"));

// app.use("/", function(req, res){
     
//     res.send("<h1>Главная страница</h1>");
// });
//http://localhost:3000/static.html
///////////////////////////////////////////////////////////////////////////////////



app.get("/register", urlencodedParser, function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});




///////////////////////////////////////////////////////////////////////////////////

//router
// app.use("/products/create",function (request, response) {
//     response.send("Добавление товара");
//   });
//   app.use("/products/:id",function (request, response) {
//     response.send(`Товар ${request.params.id}`);
//   });
//   app.use("/products/",function (request, response) {
//     response.send("Список товаров");
//   });

//переписано то, что выше

// определяем Router
const productRouter = express.Router();
// определяем маршруты и их обработчики внутри роутера
productRouter.use("/create", function(request, response){
    response.send("Добавление товара");
  });
  productRouter.use("/:id", function(request, response){
    response.send(`Товар ${request.params.id}`);
  });
  productRouter.use("/", function(request, response){
    response.send("Список товаров");
  });

// сопотавляем роутер с конечной точкой "/products"
app.use("/products", productRouter);
// Здесь определен объект productRouter, который обрабатывает все запросы по маршруту "/products". Это главный маршрут. Однако в рамках этого маршрута может быть подмаршрут "/" со своим обработчиком, а также подмаршруты "/:id" и "/create", которые также имеют свои обработчики.


///////////////////////////////////////////////////////////////////////////////////
// JSON AJAX
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.json(`${request.body.userName} - ${request.body.userAge}`);
});
///////////////////////////////////////////////////////////////////////////////////

//параметры маршрута
app.get("/categories/:categoryId/products/:productId", function (request, response) {
    let catId = request.params["categoryId"];
    let prodId = request.params["productId"];
    response.send(`Категория: ${catId}  Товар: ${prodId}`);
});


// устанавливаем обработчик для маршрута "/"
app.get("/about", function(req, res){
    // res.send("<h1>О сайте</h1>");
    res.sendFile(__dirname + "/public/test.html");
});
app.get("/home/foo/bar", function(req, res){  
    // res.sendStatus(404) //not found
    res.status(404).send(`Ресурс не найден`);
    //200 - ok
});




app.use("/contact", function(request, response){

    // response.render("contact.hbs");

    response.render("contact.hbs", {
        title: "Мои контакты",
        emailsVisible: true,
        emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
        phone: "+1234567890"

    });
});



//пример переадресации
// app.use("/index",function (request, response) {
//     response.redirect("https://metanit.com")
// });

//http://localhost:3000/about?id=3&name=Tome
//можно передавать и массивы, и объекты
// Параметры строки запроса С помощью выражения request.query мы можем получить все параметры строки запрос в виде объекта javascript,
// app.use("/about", function(request, response){
//     let id = request.query.id;
//     let userName = request.query.name;
//     response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
// });




app.use("/", function(request, response){
     
    // response.send("Главная страница");
    response.render("home.hbs", {
        
        fruit: [ "apple", "lemon", "banana", "grape"]
    });
});



// let name = process.argv[2];
// let age = process.argv[3];
 
// console.log("name: " + name);
// console.log("age: " + age);

app.listen(3000,()=>{
    console.log('Server is running')
});