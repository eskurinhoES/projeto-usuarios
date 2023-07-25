let montadoras = ["Fiat : Uno", "VolksWaggen : Gol", "GM : Monza"];
montadoras.forEach(function(index, value){
    console.log(index, value)
})

class celular {
    constructor(){
        this.cor = "Prata";
        
    }
    ligar(){
        console.log("Uma ligação.");
        return "Ligando"
    }
}

let objeto = new celular();
console.log(objeto)
console.log(objeto.ligar())