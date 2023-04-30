const palindromes = function (string) {
    let newstring = string.replace(/[^a-z]/gi,''); //sift out non-alphabet
    newstring = newstring.toLowerCase();
    let wordlength = newstring.length // get string length

    //check the word is symmetry by compare the alphabets
    let index = wordlength-1; 
    for (var i=0; i<= index/2; i++){
        if (newstring[i] !== newstring[index-i]) {
            return false;
        }
    } 
    return true;
};

// Do not edit below this line
module.exports = palindromes;
