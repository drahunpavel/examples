const fs = require('fs');
// import fs from 'fs';
const path = require('path');

//======================создание папки
// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if(err) throw new Error(err);


//     console.log('папка была создана')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     (err) => {
//         if(err) throw err
//         console.log('Файл был создан')


//         fs.appendFile(//добавление контента в файл
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'From file',
//             (err) => {
//                 if(err) throw err
//                 console.log('Файл был изменен')



//                 fs.readFile( //чтение файлов
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         if(err) throw err
//                         // console.log('--data', data, Buffer.from(data).toString())
//                         console.log('--data', data)
//                     }
//                 )
//             }
//         )
//     }
// )

// fs.readFile( //чтение файлов
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if(err) throw err
//         // console.log('--data', data, Buffer.from(data).toString())
//         console.log('--data', data)
//     }
// )

fs.rename(//переименовка файлов
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if(err) throw err

        console.log('Файл переименовали')
    }
)