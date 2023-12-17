const takeQuerySelector = () => {
    const screenError = document.querySelector(".screen-error");
    const modal = document.querySelector(".screen-modal");
    const form = document.querySelector("form");

    const firstInput = form.querySelector(".weight");
    const secondInput = form.querySelector(".height");
    const buttonForm = form.querySelector("button");

    const h2 = screenError.querySelector("h2")

    const buttonExit = modal.querySelector("button")


    return {
        screenError,
        modal,
        form,
        inputsForm: [firstInput, secondInput, buttonForm],
        buttonExit,
        h2
    }

}

const messagesForScreenError = () => {
    return [
        "Digite somente números",
        "Nenhum dos campos está preenchidos",
        "O peso não está preenchido",
        "Altura não está preenchido"
    ]
}

const takeMessages = messagesForScreenError();


const takeQuery = takeQuerySelector();

const addBorderRed = () => {
    takeQuery.inputsForm[0].classList.add("borderRed");
    takeQuery.inputsForm[1].classList.add("borderRed");

}

const removeBorderRed = () => {
    takeQuery.inputsForm[0].classList.remove("borderRed");
    takeQuery.inputsForm[1].classList.remove("borderRed");
}


const animationScreen = () => {
    takeQuery.screenError.classList.remove("hide");
        takeQuery.screenError.classList.add("animation-error")
        addBorderRed();

        setTimeout(() => {
            takeQuery.screenError.classList.remove("animation-error");
            takeQuery.screenError.classList.add("hide")
        }, 4000)

}

const checkIfInputsFormIsNumber = () => {



    if(takeQuery.inputsForm[0].value === "" && takeQuery.inputsForm[1].value === "") {
        takeQuery.h2.innerHTML = takeMessages[1];

        animationScreen();
        
       return;
    } else {
        removeBorderRed()
    }


    if(takeQuery.inputsForm[0].value === "") {
        takeQuery.h2.innerHTML = takeMessages[2];

        animationScreen()

        addBorderRed();

        return;
    }

    if(takeQuery.inputsForm[1].value === "") {
        
        takeQuery.h2.innerHTML = takeMessages[3];

        animationScreen()

        return;
    }

    const FirstNumberInput = Number(takeQuery.inputsForm[0].value);
    const SecondNumberInput = Number(takeQuery.inputsForm[1].value);


    if(isNaN(FirstNumberInput) || isNaN(SecondNumberInput)) {
        animationScreen();
        return;
    }
    
}

const closeModal = () => {
    takeQuery.buttonExit.addEventListener("click", () => {
        takeQuery.modal.classList.add("hide");
    })
}

const result = () => {
    
    
    takeQuery.form.addEventListener("submit", (e) => {
        e.preventDefault()
        checkIfInputsFormIsNumber();

        takeQuery.modal.classList.remove("hide");


        
        
    })
}

result();
closeModal()
