const leapYears = function(year) {

    //More succinct conditional logic solution
    return(year % 4 == 0 && (year % 100 != 0 || year % 400 ==0))

    //Inital nested ifs solution
    // if (year % 4 != 0){
    //     return false;
    // }

    // if (year % 100 == 0){
    //     if (year % 400 == 0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // return true;

};

// Do not edit below this line
module.exports = leapYears;
