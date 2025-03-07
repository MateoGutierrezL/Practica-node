const PI= 3.1415962;

function Sum(num1, num2) {
   return num1 + num2 
}

function Restar(num1, num2) {
    return num1 - num2
}

console.log(Sum(5,8))

function Dividir(num1, num2) {
    if (num2 == 0) {
        mostrarErrorDivision()    
    }else{
        return num1 / num2
    }
}

function mostrarErrorDivision() {
    console.log('Esta operacion es invalida, no se puede dividir por cero')
}

console.log(Dividir(6, 0))


module.exports = {
    Sum,
    Dividir,
    Restar,
    PI
}