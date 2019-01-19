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