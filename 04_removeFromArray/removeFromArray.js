const removeFromArray = function(numArray) {

    for (let i = 1; i < arguments.length; i++){
        
        let index = numArray.indexOf(arguments[i]);
        
        if (index >=0){
            numArray.splice(index,1);
        }

    }

    return(numArray);    

};

// Do not edit below this line
module.exports = removeFromArray;
