const removeFromArray = function(array, ...manyMoreArgs) {
    array = array.filter(item => !manyMoreArgs.includes(item)) ;
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
