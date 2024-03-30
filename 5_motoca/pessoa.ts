class Pessoa {
    private age: number;
    private name: string;

    public constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    public getAge(): number {
        return this.age;
    }

    public getname(): string {
        return this.name;
    }

    public toString(): string {
        return `${this.name}:${this.age}`;
    }
}

export { Pessoa };