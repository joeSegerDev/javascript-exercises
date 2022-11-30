const sumAll = function() {
    
    const args = Array.from(arguments)

    for (let i = 0; i < args.length; i++){
        if (typeof args[i] != "number" || args[i] < 0){            
            return("ERROR");
        }

    }

    let large = Math.max(args[0], args[1]);
    let small = Math.min(args[0], args[1]);

    let total = 0;
    
    for (let i = small; i <= large; i++){
        total += i
    }

    return (total);

};

// Do not edit below this line
module.exports = sumAll;
