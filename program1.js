/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack=[];
    const bracketMap={
        ')':'(',
        '}':'{',
        ']':'['
    };
    for(let char of s){
        if (char in bracketMap){
            const topElement=stack.length ? stack.pop() :''
        }


    
    
};

module.exports = { isValid };


