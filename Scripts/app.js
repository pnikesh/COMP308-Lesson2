//self exwcuting anonumus function
    //IIFE - Immedeately Invoked Finction Expression
let myGlobleVariable = 0;
    
(function(){

    let myFunctionVariable = 0;
    
    function Start()  {
        let startVariable = 0;
        console.log(`%cApp Started...${startVariable}` ,"font-size: 20px; color: red");
    }

    window.addEventListener("load", Start);

})();