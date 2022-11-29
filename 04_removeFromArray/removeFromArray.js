const removeFromArray = function(numArray) {

    let index = numArray.indexOf(arguments[1]);
 
    numArray.splice(index,1);

    return(numArray);

};

// Do not edit below this line
module.exports = removeFromArray;
