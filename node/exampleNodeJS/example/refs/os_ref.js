const os = require('os');

console.log('--', os.platform())//платформа пк
console.log('--', os.arch())//архитектура процессора
// console.log('--', os.cpus())//общая информация по процессору
console.log('--', os.freemem())//свободная память
console.log('--', os.totalmem())//сколько всего памяти
console.log('--', os.homedir())//корневая директория
console.log('--', os.uptime())//сколько система в рабочем состоянии после загрузки пк (ms)
