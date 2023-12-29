const takeQuerySelector = () => {
    const screenError = document.querySelector(".screen-error");
    const modal = document.querySelector(".screen-modal");
    const form = document.querySelector("form");

    const firstInput = form.querySelector(".weight");
    const secondInput = form.querySelector(".height");


    const h2 = screenError.querySelector("h2");
    const h1 = modal.querySelector("h1");

    const buttonExit = modal.querySelector("button");


    return {
        screenError,
        modal,
        form,
        inputsForm: [firstInput, secondInput],
        buttonExit,
        h2,
        h1
    }

}

export default takeQuerySelector