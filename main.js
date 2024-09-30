let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector("#newBtn");
let winner = document.querySelector("#winner");
let content = document.querySelector("#content");
let turn0 = true;
let winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.textContent = "";
});

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.textContent = "X";
            turn0 = false;
        } else {
            box.textContent = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let i = 0; i < winPosition.length; i++) {
        let pos1 = winPosition[i][0];
        let pos2 = winPosition[i][1];
        let pos3 = winPosition[i][2];

        if (
            boxes[pos1].textContent === boxes[pos2].textContent &&
            boxes[pos2].textContent === boxes[pos3].textContent &&
            boxes[pos1].textContent != ""
        ) {
            winner.textContent = `Congratulation! Winner is ${boxes[pos1].textContent}`;
            content.textContent = "Start a new game !";
            winner.style.display = "block"
            content.style.display = "block"
        }
    }
    if ([...boxes].every(box => box.textContent !== "")) {
        winner.textContent = "It's a draw!";
        content.textContent = "Start a new game!";
        winner.style.display = "block";
        content.style.display = "block";

        // Disable all boxes after a draw
        boxes.forEach(box => box.disabled = true);
    }
};



newGame.addEventListener("click", () => {
    winner.style.display = "none"
    content.style.display = "none"
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
    });
    turn0 = true
})