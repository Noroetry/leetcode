var ex1 =  ["flower","flow","flight"];
var ex2 = ["dog","racecar","car"];
var ej = ex2;

var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    // Calculamos la longitud del array más grande
    var maxArr = 0;
    for (let i = 0; i < strs.length; i++){
        if (maxArr < strs[i].length) maxArr = strs[i].length;
    }
    if (maxArr <= 0) return "";
    // Recorremos todos los arrays a la vez
    // Cuando uno acabe, es el final, cuando alguno no coincida también
    for (let i = 0; i < maxArr; i++){
        for(let j = 0; j < strs.length; j++){
            if (j === 0) {
                lastValue = strs[j][i];
                console.log("Medimos ->", lastValue);
            }
            else {
                if (lastValue !== strs[j][i]){
                    if (j === 0) return "";
                    return strs[0].substring(0, i);
                }
            }
        }
    }
return strs[0].substring(0, i);
};

console.log(longestCommonPrefix(ej));