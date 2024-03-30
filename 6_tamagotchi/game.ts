import { Pet } from "./pet";

class Game {

    pet: Pet;

    public constructor(pet: Pet) {
        this.pet = pet;
    }
    //se estiver morto, avise e retorne false
    private testAlive(): boolean {
        if(!this.pet.isAlive()){
            console.log("fail: pet esta morto");
            return false;
        }
        return true;
    }
    
    public play() {
        if (!this.testAlive()){
            return;
        }
        
        this.pet.setEnergy(this.pet.getEnergy() - 2);
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setClean(this.pet.getClean() - 3);
        this.pet.setAge(this.pet.getAge() + 1);
        this.pet.setDiamonds(this.pet.getDiamonds() + 1);
        
    }
    public shower() {
         if (!this.testAlive()){
            return;
        }
        
        this.pet.setEnergy(this.pet.getEnergy() - 3);
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setClean(this.pet.getCleanMax());
        this.pet.setAge(this.pet.getAge() + 2);
    
    }
    
    public eat() {
         if (!this.testAlive()){
            return;
        }
        
        this.pet.setEnergy(this.pet.getEnergy() - 1);
        this.pet.setHungry(this.pet.getHungryMax());
        this.pet.setClean(this.pet.getClean() - 2);
        this.pet.setAge(this.pet.getAge() + 1);

    }
    
    public sleep() {
         if (!this.testAlive()){
            return;
        } 
        
        if(this.pet.getEnergy() >= this.pet.getEnergyMax()-3){
            console.log("fail: nao esta com sono");
            return
        }
        
        this.pet.setEnergy(this.pet.getEnergyMax());
        this.pet.setHungry(this.pet.getHungry() - 1);
        this.pet.setAge(this.pet.getAge() + 5);
        this.pet.setClean(this.pet.getClean());
    }
    
    public toString() {
        return this.pet.toString();
    }
}


export { Game };