const takeQuerySelector = () => {
    const screenError = document.querySelector(".screen-error");
    const modal = document.querySelector(".screen-modal");
    const form = document.querySelector("form");

    const firstInput = form.querySelector(".weight");
    const secondInput = form.querySelector(".height");
    const buttonForm = form.querySelector("button");

    const h2 = screenError.querySelector("h2");
    const h1 = modal.querySelector("h1")

    const buttonExit = modal.querySelector("button")


    return {
        screenError,
        modal,
        form,
        inputsForm: [firstInput, secondInput, buttonForm],
        buttonExit,
        h2,
        h1
    }

}

const messagesForScreenError = () => {
    return [
        "Digite somente números",
        "Nenhum dos campos estão preenchidos",
        "O peso não está preenchido",
        "Altura não está preenchido"
    ]
}

const takeMessages = messagesForScreenError();


const takeQuery = takeQuerySelector();


const removeBorderRed = () => {
    takeQuery.inputsForm[0].classList.remove("borderRed");
    takeQuery.inputsForm[1].classList.remove("borderRed");
}


const animationScreen = () => {
    takeQuery.screenError.classList.remove("hide");
        takeQuery.screenError.classList.add("animation-error")

        setTimeout(() => {
            takeQuery.screenError.classList.remove("animation-error");
            takeQuery.screenError.classList.add("hide")
        }, 4000)

}

const resetInput = () => {
    takeQuery.inputsForm[0].value = "";
    takeQuery.inputsForm[1].value = "";
}

const checkIfInputsFormIsNumber = () => {

    let takeInputWeight = takeQuery.inputsForm[0].value;
    let takeInputHeight = takeQuery.inputsForm[1].value;


    if( takeInputWeight === "" && takeInputHeight === "") {
        takeQuery.h2.innerHTML = takeMessages[1];
        takeQuery.inputsForm[0].classList.add("borderRed");
        takeQuery.inputsForm[1].classList.add("borderRed");

        animationScreen();
        
        
       return;
    } else {
        removeBorderRed()
    }

    if(takeInputHeight.includes(",") && takeInputHeight.includes('m')) {
        takeInputHeight = takeInputHeight.replace(',', '.');
        takeInputHeight.replace('m', "");
    };

    takeInputHeight.includes(',') ? takeInputHeight = takeInputHeight.replace(',', '.') : takeInputHeight; 

    takeInputHeight.includes("m") ? takeInputHeight = takeInputHeight.replace('m', "") : takeInputHeight
    

    takeInputWeight.includes("kg") ? takeInputWeight = takeInputWeight.replace("kg", "") : takeInputWeight;


    if(takeInputWeight === "") {
        takeQuery.h2.innerHTML = takeMessages[2];

        animationScreen()

        takeQuery.inputsForm[0].classList.add("borderRed");

        return;
    }

    if(takeInputHeight === "") {
        
        takeQuery.h2.innerHTML = takeMessages[3];

        animationScreen()

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

    return [FirstNumberInput, SecondNumberInput]
    
}

const closeModal = () => {
    takeQuery.buttonExit.addEventListener("click", () => {
        takeQuery.modal.classList.add("hide");

        resetInput();
    })
}

const result = () => {
    
    
    takeQuery.form.addEventListener("submit", (e) => {
        e.preventDefault()
        const takeNumber = checkIfInputsFormIsNumber();
        console.log(takeNumber[0], takeNumber[1])

        const resultCalc = Math.round(takeNumber[0] / (takeNumber[1] * takeNumber[1]));

        takeQuery.h1.innerHTML = `Seu IMC é de ${resultCalc}`;



        takeQuery.modal.classList.remove("hide");


        
        
    })
}

result();
closeModal()
