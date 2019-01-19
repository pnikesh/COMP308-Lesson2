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

module objects{
    export class Person {
        // Private instance variables
        private _age: number;
        private _name: string;
    
    
        // This are my public properties
        get age(): number{
            return this._age;
        }
    
        set age(newAge: number) {
            this._age = newAge;
        }
    
        get name(): string{
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
            console.log(`${this.name} says Hellooo!!!!!`);
        }
    
        
    }
    
        export class Students extends objects.Person{
        
            //private instance variables
            private _studentID: string;
    
            get studentID(): string{
                return this._studentID;
            }
    
             set studentID(newStudentID: string) {
                 this._studentID = newStudentID;
            
        }
    
    
            //piblic properties
            constructor(age:number, name:string, studentID:string) {
                super(age, name);
                
            }
        
            //private methods
    
            //public methods
            public studies(): void{
                console.log(`${this.name} with student Id ${this._studentID} studies in this college`);
            }
    
    }
    
    }
    let person: objects.Person;
    person = new objects.Person(23, "Nik");
    person.saysHello();
    

    //IIFE -- immediately invoked function expression
    (function(){
        function Start(){
             let student: objects.Students = new objects.Students(20, "Nik", "ewfew254");
            student.saysHello();
             student.studies();
        }

    window.addEventListener("load",Start);

})();



    let student: objects.Students = new objects.Students(20, "Nik", "ewfew254");
    student.saysHello();
    student.studies();