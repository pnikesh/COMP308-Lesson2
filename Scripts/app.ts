// //self exwcuting anonumus function
//     //IIFE - Immedeately Invoked Finction Expression
// let myGlobleVariable = 0;
    
// (function(){

//     let myFunctionVariable = 0;
    
//     function Start()  {
//         let startVariable = 0;
//         console.log(`%cApp Started...${startVariable}` ,"font-size: 20px; color: red");
//     }

//     window.addEventListener("load", Start);

// })();
module objects {
   
export abstract class Person  {
    // PRIVATE INSTANCE VARIABLES
    private _age: number;
    private _name: string;

    // PUBLIC PROPERTIES
    get age(): number {
        return this._age;
    }

    set age(newAge: number) {
        this._age = newAge;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    constructor(age: number, name:string) {
        this.age = age;
        this.name = name;
    }

    public saysHello():void {
        console.log(`${this.name} says Hello!`);
    }
    }

    export class Student extends objects.Person {
        // PRIVATE INSTANCE VARIABLES
        private _studentID: string;

        // PUBLIC PROPERTIES
        get studentID(): string {
            return this._studentID;
        }

        set studentID(newStudentID: string) {
            this._studentID = newStudentID;
        }

        constructor(age:number, name:string, studentID:string) {
            super(age, name);

            this.studentID = studentID;
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public studies(): void {
            console.log(`${this.name} with studentID: ${this.studentID} is studying.`)
        }
    }

}


/*
const person: objects.Person = new objects.Person(30, "Tom");
person.saysHello();
*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start() {
        const student: objects.Student = new objects.Student(20, "Nik", "P008490000");
        student.saysHello();
        student.studies();
    }

    window.addEventListener("load", Start);

})();
