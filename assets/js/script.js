
// Bir sinif yaradirsiz ve o classin icerisinde plus, minus, multiply, divide functionlari olur. var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
// resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalilidi



class CustomMatch{
    constructor(number){
        this.Number=number
    }

    plus(num1) {
        return new CustomMatch ( this.Number + num1) 
    }
    
    minus (num2){
        return new CustomMatch (this.Number - num2)
    }

    multiply(num3){
        return new CustomMatch(this.Number * num3)
    }

    divide(num4){
        return new CustomMatch (this.Number / num4)
    }




}

var num = new CustomMatch(50)
var result = num.plus(6).minus(30).multiply(3).divide(2)

console.log(result);
