const user = {
    name: 'Elena',
    age: 25
};

const user2 = {
    name: 'Igor'
}

// module.exports = user;

module.exports = {
    user: user,
    sayHi(){
        console.log('Hello')
    }
}