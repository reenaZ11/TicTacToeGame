let boxes = document.querySelectorAll(".box")
let turn0 = true;

boxes.forEach(box => {
    box.textContent = "";
});

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(turn0){
            box.textContent = "x";
            turn0 = false;
            
        }
        else{
            box.textContent = "o";
            turn0 = true;
            
        }
        box.disabled = true
        checkWinner();
    })
});

const checkWinner = () => {
    
}



