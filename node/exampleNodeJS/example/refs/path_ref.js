const path = require('path');
console.log('--',path.basename(__filename));
console.log('--',path.dirname(__filename)); //название папки исполняемого файла
console.log('--',path.extname(__filename)); //расширение файла
console.log('--',path.parse(__filename)); //полнная информация о файле

console.log('--',path.join(__dirname, 'test', 'second.html')); //генерирует\соединяет строки в один путь
console.log('--',path.resolve(__dirname, './test', 'second.html')); //
















