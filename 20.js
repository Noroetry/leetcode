var ex1 =  "()"
var ex2 = "()[]{}"
var ex3 = "(]"
var ej = ex2;

var isValid = function(s) {
    // Objeto con los diferentes arrays de opciones
    var brackets = {
        openBr:  ['(', '[', '{'],
        closeBr:  [')', ']', '}'] 
    }
    // Objeto target, con el que apuntaremos a la apertura que queremos cerrar
    var target = {
        posArr: -1,
        posOpenBr: -1
    }
    for (let i = 0; i < s.length; i++){
        for (j = 0; j < brackets.openBr.length; j++){
            if (s[i] === brackets.openBr[j]){
                target.posOpenBr = j;
                target.posArr = i;
                console.log("Nuevo target: ", brackets.openBr[j]);
                break;
            }
            else if (s[i] === brackets.closeBr[j] && j === target.posOpenBr){
                console.log("Cerramos: ", brackets.closeBr[j]);
                break;
            }
            else {
                return false
            }
        } 
    }
return true;
};

console.log(isValid(ej));