const reverseString = function(string) {
    var length = string.length;
    var reversestring = '';
    for (var i=length-1; i>=0; i--) {
        reversestring += string[i];
    }
    return reversestring;
};

// Do not edit below this line
module.exports = reverseString;
