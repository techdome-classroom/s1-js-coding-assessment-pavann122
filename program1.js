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
            const topElement=stack.length ? stack.pop() :'#';
            if(bracketMap[char] !==topElement){
                return false;
            }
        }else{
            stack.push(char);
        }
    }
    return stack.length === 0;
    
};
console.log(isValid())

module.exports = { isValid };


