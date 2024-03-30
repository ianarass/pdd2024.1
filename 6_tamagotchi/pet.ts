class Pet {
    private energyMax: number;
    private hungryMax: number;
    private cleanMax: number;

    private energy: number;
    private hungry: number;
    private clean: number;

    private diamonds: number;
    private age: number;
    private alive: boolean;

    public constructor(energy: number, hungry: number, clean: number) {
        this.energyMax = energy;
        this.hungryMax = hungry;
        this.cleanMax = clean;

        this.energy = energy;
        this.hungry = hungry;
        this.clean = clean;

        this.diamonds = 0;
        this.age = 0;
        this.alive = true;
    }
    
    // teste 1-> Energia/Max, Saciedade/Max, Limpeza/Max, Diamantes, Idade
    public setEnergy(value: number) {
        if(value <= 0){
            this.energy = 0;
            console.log("fail: pet morreu de fraqueza");
            this.alive = false;
        } else if (value > this.energyMax){
            this.energy =this.energyMax;
        } else{
        this.energy = value;
        }
    }

    public setHungry(value: number) {
        if(value <= 0){
            this.hungry = 0;
            console.log("fail: pet morreu de fome");
            this.alive = false;
        } else if (value > this.hungryMax){
            this.hungry =this.hungryMax;
        } else{
        this.hungry = value;
            
        }
     
    }

    public setClean(value: number) {
            if(value <= 0){
            this.clean = 0;
            this.alive = false;
            console.log("fail: pet morreu de sujeira");
            } else if (value > this.cleanMax){
                this.clean = this.cleanMax;
            } else{
                this.clean = value
            }
    }

    public setDiamonds(value: number) {
        this.diamonds = value;
    }
    public setAge(value: number) {
        this.age = value;
    }
    
    public toString(): string {
        return  `E:${this.energy}/${this.energyMax}` 
            + `, S:${this.hungry}/${this.hungryMax}` 
            + `, L:${this.clean}/${this.cleanMax}` 
            + `, D:${this.diamonds}, I:${this.age}`;
    }

    public getClean() {
        return this.clean;
    }
    public getHungry() {
        return this.hungry;
    }
    public getEnergy() {
        return this.energy;
    }

    public getCleanMax() {
        return this.cleanMax;
    }
    public getHungryMax() {
        return this.hungryMax;
    }
    public getEnergyMax() {
        return this.energyMax;
    }

    public getDiamonds() {
        return this.diamonds;
    }
    public getAge() {
        return this.age;
    }
    public isAlive() {
        return this.alive;
    }
}

export { Pet };