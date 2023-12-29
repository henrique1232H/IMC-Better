import takeQuerySelector from "./takeQuery.js";

let takeQuery = takeQuerySelector()


const animationScreen = () => {
    takeQuery.screenError.classList.remove("hide");
    takeQuery.screenError.classList.add("animation-error")
    
    setTimeout(() => {
        takeQuery.screenError.classList.remove("animation-error");
        takeQuery.screenError.classList.add("hide")
    }, 4000)
    
}

export default animationScreen