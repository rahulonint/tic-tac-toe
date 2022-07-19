const winner = document.querySelector(".winner")

const common_box = document.querySelectorAll(".common-box")

const box0 = document.querySelector(".box1")
const box1 = document.querySelector(".box2")
const box2 = document.querySelector(".box3")

const box3 = document.querySelector(".box4")
const box4 = document.querySelector(".box5")
const box5 = document.querySelector(".box6")

const box6 = document.querySelector(".box7")
const box7 = document.querySelector(".box8")
const box8 = document.querySelector(".box9")


const playerx = document.querySelector(".playerx")
const playero = document.querySelector(".playero")
const reset = document.querySelector(".reset")
let count = 0
let content

function clicked(element) {
    element.addEventListener("click", () => {
        //----------------------------------------- when no player is selected-------------------------------------
        if (!element.classList.contains("selected")) {
            alert("Select Any Player")
        }
        // -----------------------------------------when player is selected------------------------------------
        else {
            if (element.textContent !== "") {
                element.textContent = element.textContent
            }
            else if (content === "X") {
                count++
                whose_chance(content)
                element.textContent = content
                whoIsWinner()
                content = "O"
            }
            else {
                count++
                whose_chance(content)
                element.textContent = content
                whoIsWinner()
                content = "X"
            }
        }
    })
}

// -----------------------------------------------buttons---------------------------------------------
playerx.addEventListener("click", () => {
    Array.from(common_box).forEach((item) => {
        item.classList.add("selected")
    })
    content = "X"
    button_color(content)
})
playero.addEventListener("click", () => {
    Array.from(common_box).forEach((item) => {
        item.classList.add("selected")
    })
    content = "O"
    button_color(content)
})

reset.addEventListener("click", () => {
    history.go()
})

// ---------------------------------row 1--------------------------------------------
clicked(box0)
clicked(box1)
clicked(box2)

// ---------------------------------row 2--------------------------------------------
clicked(box3)
clicked(box4)
clicked(box5)

// ---------------------------------row 3--------------------------------------------
clicked(box6)
clicked(box7)
clicked(box8)


// -------------------------------winning posibilities-------------------------------------
function whoIsWinner() {
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]
    const array = Array.from(common_box)

    const top_row_line = document.querySelector(".top-row-line")
    const center_row_line = document.querySelector(".center-row-line")
    const bottom_row_line = document.querySelector(".bottom-row-line")

    const left_column_line = document.querySelector(".left-column-line")
    const middle_column_line = document.querySelector(".middle-column-line")
    const right_column_line = document.querySelector(".right-column-line")

    // -----------------------------winning rows--------------------------------------------
    if (array[win[0][0]].textContent === array[win[0][1]].textContent && array[win[0][1]].textContent === array[win[0][2]].textContent) {
        winner.textContent = player(array[win[0][0]].textContent);
    }
    else if (array[win[1][0]].textContent === array[win[1][1]].textContent && array[win[1][1]].textContent === array[win[1][2]].textContent) {
        winner.textContent = player(array[win[1][0]].textContent);
    }
    else if (array[win[2][0]].textContent === array[win[2][1]].textContent && array[win[2][1]].textContent === array[win[2][2]].textContent) {
        winner.textContent = player(array[win[2][0]].textContent)
    }

    // -----------------------------winning columns---------------------------------------------
    else if (array[win[3][0]].textContent === array[win[3][1]].textContent && array[win[3][1]].textContent === array[win[3][2]].textContent) {
        winner.textContent = player(array[win[3][0]].textContent)
    }
    else if (array[win[4][0]].textContent === array[win[4][1]].textContent && array[win[4][1]].textContent === array[win[4][2]].textContent) {
        winner.textContent = player(array[win[4][0]].textContent)
    }
    else if (array[win[5][0]].textContent === array[win[5][1]].textContent && array[win[5][1]].textContent === array[win[5][2]].textContent) {
        winner.textContent = player(array[win[5][0]].textContent)
    }

    // --------------------------------winning diagonals---------------------------------
    else if (array[win[6][0]].textContent === array[win[6][1]].textContent && array[win[6][1]].textContent === array[win[6][2]].textContent) {
        winner.textContent = player(array[win[6][0]].textContent)
    }
    else if (array[win[7][0]].textContent === array[win[7][1]].textContent && array[win[7][1]].textContent === array[win[7][2]].textContent) {
        winner.textContent = player(array[win[7][0]].textContent)
    }

    // --------------------------------match draw-----------------------------------------------
    else {
        if (count === 9) {
            winner.textContent = "Match Draw"
            winner.style.display = "flex"
        }
    }
}

// ---------------------------------winner pop-up----------------------------------------------------
function player(value) {
    if (value === "X") {
        winner.style.display = "flex"
        return `Winner is ${playerx.textContent}`
    }
    else if (value === "O") {
        winner.style.display = "flex"
        return `Winner is ${playero.textContent}`
    }
}


// ----------------------------color for selected button-----------------------------------------------
function button_color(value) {
    if (value === "X") {
        playerx.classList.add("selected_button")
        playero.classList.remove("selected_button")
    }
    else {
        playero.classList.add("selected_button")
        playerx.classList.remove("selected_button")
    }
}

//----------------------------------who's going to play------------------------------------------------------
function whose_chance(value) {
    if (value === "X") {
        playero.classList.add("selected_button")
        playerx.classList.remove("selected_button")

    }
    else {
        playerx.classList.add("selected_button")
        playero.classList.remove("selected_button")
    }
}
