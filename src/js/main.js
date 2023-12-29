import takeQuerySelector from "./takeQuery.js";
import checkIfInputsFormIsNumber from "./checkNumber.js";


const takeQuery = takeQuerySelector();


const resetInput = () => {
    takeQuery.inputsForm[0].value = "";
    takeQuery.inputsForm[1].value = "";
}



const closeModal = () => {
    takeQuery.buttonExit.addEventListener("click", () => {
        takeQuery.modal.classList.add("hide");

        resetInput();
    })

    addEventListener("keydown", (e) => {
        if(e.key === "Backspace") {
            takeQuery.modal.classList.add("hide");

            resetInput();
        }
    })
}


const result = () => {
    
    
    takeQuery.form.addEventListener("submit", (e) => {
        e.preventDefault()
        const takeNumber = checkIfInputsFormIsNumber();

        const resultCalc = Math.round(takeNumber[0] / (takeNumber[1] * takeNumber[1]));

        takeQuery.h1.innerHTML = `Seu IMC é de ${resultCalc}`;



        takeQuery.modal.classList.remove("hide");
        
        
 
    })
}

result();
closeModal()
