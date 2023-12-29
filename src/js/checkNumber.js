import takeQuerySelector from "./takeQuery.js";
import animationScreen from "./animationScreen.js";
import messagesForScreenError from "./messagesForScreenError.js";

const takeQuery = takeQuerySelector()


const checkIfInputsFormIsNumber = () => {
    const takeMessages = messagesForScreenError();

    let takeInputWeight = takeQuery.inputsForm[0].value;
    let takeInputHeight = takeQuery.inputsForm[1].value;


    if( takeInputWeight === "" && takeInputHeight === "") {
        takeQuery.h2.innerHTML = takeMessages[1];
        takeQuery.inputsForm[0].classList.add("borderRed");
        takeQuery.inputsForm[1].classList.add("borderRed");

        animationScreen();
        
        
       return;
    } else {
        takeQuery.inputsForm[0].classList.remove("borderRed");
        takeQuery.inputsForm[1].classList.remove("borderRed");
    }

    if(takeInputHeight.includes(",") && takeInputHeight.includes('m')) {
        takeInputHeight = takeInputHeight.replace(',', '.');
        takeInputHeight.replace('m', "");
    };

    if(takeInputWeight.includes(".") || takeInputWeight.includes(",")) {
        takeQuery.h2.innerHTML = takeMessages[4];

        animationScreen();

        return;
    }

    takeInputHeight.includes(',') ? takeInputHeight = takeInputHeight.replace(',', '.') : takeInputHeight; 

    takeInputHeight.includes("m") ? takeInputHeight = takeInputHeight.replace('m', "") : takeInputHeight
    

    takeInputWeight.includes("kg") ? takeInputWeight = takeInputWeight.replace("kg", "") : takeInputWeight;



    if(takeInputWeight === "") {
        takeQuery.h2.innerHTML = takeMessages[2];

        animationScreen();

        takeQuery.inputsForm[0].classList.add("borderRed");

        return;
    }

    if(takeInputHeight === "") {
        
        takeQuery.h2.innerHTML = takeMessages[3];

        animationScreen();

        takeQuery.inputsForm[1].classList.add("borderRed");

        return;
    }


    const FirstNumberInput = Number(takeInputWeight);
    const SecondNumberInput = Number(takeInputHeight);


    if(isNaN(FirstNumberInput) || isNaN(SecondNumberInput)) {

        takeQuery.h2.innerHTML = takeMessages[0];
        animationScreen();
        return;
    }

    return [FirstNumberInput, SecondNumberInput];
    
}


export default checkIfInputsFormIsNumber