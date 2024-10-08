const inputs = document.querySelectorAll(".input");

function addFocusClass(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;

    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) =>{
    input.addEventListener("focus", addFocusClass);
    input.addEventListener("blur", blurFunc);  
});