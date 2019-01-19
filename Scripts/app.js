// //self exwcuting anonumus function
//     //IIFE - Immedeately Invoked Finction Expression
// let myGlobleVariable = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// (function(){
//     let myFunctionVariable = 0;
//     function Start()  {
//         let startVariable = 0;
//         console.log(`%cApp Started...${startVariable}` ,"font-size: 20px; color: red");
//     }
//     window.addEventListener("load", Start);
// })();
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this.age = age;
            this.name = name;
        }
        Object.defineProperty(Person.prototype, "age", {
            // This are my public properties
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says Hellooo!!!!!");
        };
        return Person;
    }());
    objects.Person = Person;
    var Students = /** @class */ (function (_super) {
        __extends(Students, _super);
        //piblic properties
        function Students(age, name, studentID) {
            return _super.call(this, age, name) || this;
        }
        Object.defineProperty(Students.prototype, "studentID", {
            get: function () {
                return this._studentID;
            },
            set: function (newStudentID) {
                this._studentID = newStudentID;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        //public methods
        Students.prototype.studies = function () {
            console.log(this.name + " with student Id " + this._studentID + " studies in this college");
        };
        return Students;
    }(objects.Person));
    objects.Students = Students;
})(objects || (objects = {}));
var person;
person = new objects.Person(23, "Nik");
person.saysHello();
//IIFE -- immediately invoked function expression
(function () {
    function Start() {
        var student = new objects.Students(20, "Nik", "ewfew254");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
var student = new objects.Students(20, "Nik", "ewfew254");
student.saysHello();
student.studies();
//# sourceMappingURL=app.js.map