import Min from "./decorator/Min";

export default class Person {
   
    name:string;

    @Min(18)
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return this.name + "," + this.age;
    }

   
}