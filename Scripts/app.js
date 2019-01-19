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
            // PUBLIC PROPERTIES
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
            console.log(this.name + " says Hello!");
        };
        return Person;
    }());
    objects.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this.studentID = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentID", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._studentID;
            },
            set: function (newStudentID) {
                this._studentID = newStudentID;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        // PUBLIC METHODS
        Student.prototype.studies = function () {
            console.log(this.name + " with studentID: " + this.studentID + " is studying.");
        };
        return Student;
    }(objects.Person));
    objects.Student = Student;
})(objects || (objects = {}));
/*
const person: objects.Person = new objects.Person(30, "Tom");
person.saysHello();
*/
// IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        var student = new objects.Student(20, "Nik", "P008490000");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map