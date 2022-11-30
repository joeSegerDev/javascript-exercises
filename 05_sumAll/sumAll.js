const sumAll = function() {
    
    let total = 0;
    
    for (let i = arguments[0]; i <= arguments[1]; i++){
        total += i
    }

    return (total);

};

// Do not edit below this line
module.exports = sumAll;
