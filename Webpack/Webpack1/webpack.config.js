let path = require('path');

let config={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/',
    },
    devServer:{
        overlay:true, //выводит инфу об ошибке на экране
    },
    module:{//правила для преобразования файлов
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',  //если есть старые стандарты, то их не прогонять через бабель
            },
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }
        ]
    },
    // devtool: 'eval-sourcemap', //карта сайта, в консоле теперь верно показываются строки//нагружает итоговый файл
};

// module.exports=config;
module.exports=(env, options)=>{
    let development=options.mode='development'; 

    config.devtool = development ? 'eval-source-map':false //карта кода, false файл для продакшена, полная для дева

    return config;
};

//создаем объект и этот объект с конфигурацией передаем все параметры
//__dirname абсолютная ссылка на текущий файл
//publicPath относительная ссылка к папке, где находитс выходной файл, с этим работает браузерсинх