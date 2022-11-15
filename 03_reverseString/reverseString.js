const reverseString = function(text) {
    const stringArray = text.split("");
    stringArray.reverse();
    let reversedText = ''
    for (letter of stringArray) {
        reversedText += letter;
    };

    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
