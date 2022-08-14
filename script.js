const FILD = document.querySelector(".field");
const NEWGAME = document.querySelector(".new-game");
const STOP = document.querySelector(".stop");
let sortArr = [];
let originArr = [];
let countArr = 0;
let count = 0;
const createCellTemplate = () => {
    const cell = {
        button: document.createElement("button")
    };
    cell.button.classList.add("btn-game");
    return cell;
}
function newGame() {
    removeCell ();
    makeRandom ();
    countArr = 0;
    count = 0;
    for (let i = 0; i < 16; i++) {
        const cell = createCellTemplate();
        let counter = originArr[i];
        sortArr.push(originArr[i])
        cell.button.id = counter;
        cell.button.innerText = counter;
        cell.button.setAttribute("onclick", "checkGame()");
        FILD.appendChild(cell.button);
    }
    sortCell ();
}
function removeCell () {
    originArr = [];
    sortArr = [];
    while (FILD.firstChild) {
        FILD.removeChild(FILD.firstChild);
    }

}
function sortCell () {
    sortArr.sort((a, b) => a - b);
}
function makeRandom () {
    originArr[0] = Math.floor(Math.random() * 50);
        for (let i=0; i<50; i++) {
            let number = Math.floor(Math.random() * 50);
            for (let el of originArr) {
                if (!originArr.includes(number)) {
                    originArr.push(number)
                }
            }
        }
}

function checkGame () {
    let btnNumber = event.target;
    count++
    console.log("arr = " + sortArr, "doljno = " +sortArr[countArr], "najal = " + btnNumber.id)
    if (sortArr[countArr] === Number(btnNumber.id)) {
        btnNumber.classList.add("true");
        countArr++;
    } else {
        btnNumber.classList.add("false");
        for (let i=0; i<sortArr.length; i++) {
            if (sortArr[i] === Number(btnNumber.id)) {
                sortArr.splice(i, 1)
            }
        }

    }
    btnNumber.setAttribute("disabled", "disabled");
    if (count===16) {
        if (countArr>8) {
            alert("Победа")
        } else {
            alert("Поражение")
        }
    }

}
function stopGame () {
    let cells = document.querySelectorAll(".btn-game");
    for (let cell of cells) {
        cell.setAttribute("disabled", "disabled");
    }
}

window.addEventListener("load", newGame);
NEWGAME.addEventListener("click", newGame);
STOP.addEventListener("click", stopGame);
