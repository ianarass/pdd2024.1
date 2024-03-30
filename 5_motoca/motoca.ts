import { Pessoa } from "./pessoa";

class Motoca {
    potencia:number = 1;
    time: number = 0;
    pessoa: Pessoa | null;

    constructor(potencia: number = 1) {
        this.pessoa = null; 
        this.time = 0;
        this.potencia = potencia;
    }

    inserir(pessoa: Pessoa): boolean {
        if(this.pessoa == null){
            this.pessoa = pessoa;
            return true;
        } 
        console.log("fail: busy motorcycle")
        return false;
    }
    
    remover() : Pessoa | null {
        if(this.pessoa !== null){
            let aux = this.pessoa;
            this.pessoa = null;
            return aux;
        }
        console.log ("fail: empty motorcycle")
        return null;
    }

    buzinar(): string {
            let buzina = "P";
            for (let i = 0; i < this.potencia; i++){
                buzina+= "e"; 
            }
            buzina+="m";
            return buzina;

        //return "P" + Array(this.potencia).fill("e").join("") + "m";
    }

    drive(time: number): void {
        
        if(this.time === 0){
            console.log("fail: buy time first");
            return
        }
        
        if(this.pessoa == null){
            console.log(this.pessoa.toString());
            console.log("fail: empty motorcycle");
            return
        }
        
        if(this.pessoa.getAge() > 10){
            console.log("fail: too old to drive");
            return
        }
        
        if(this.time < time){
            console.log("fail: time finished after" + this.time + "minutes");
            this.time = 0;
            return
        } 
        this.time -= time;
        
        // if(this.time === 0){
        //     console.log("fail: buy time first");
            
        // } else if(this.person == null){
        //     console.log("fail: empty motorcycle");
    
        // } else if(person.getAge() > 10){
        //     console.log("fail: too old to drive");
            
        // } else if(this.time < time){
        //     this.time -= time;
            
        // } else {
        //     console.log("fail: time finished after" + this.time + "minutes");
        //     this.time = 0;
        // }
    }

    comprarTempo(value: number) {
        this.time += value;
    }

    public toString(): string {
        let valor = this.pessoa === null ? "empty" : "" + this.pessoa;
        return `power:${this.potencia}, time:${this.time}, person:(${valor})`;
    }
}

export { Motoca };