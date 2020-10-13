let userName = function(name){
    if (typeof name === 'string') {        
        if (name.trim().length > 30) {
            return (name.substr(0, 30) + '...');
        
        } else {
            return name;
        }
    } else {
        return ('Вы ввели число')
    }
};
    

console.log(userName(' 123456789 '));



