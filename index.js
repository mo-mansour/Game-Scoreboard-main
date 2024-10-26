let homeScoreNum = 0
let guestScoreNum = 0

let homeScoreNumV = document.getElementById("home-score-num")
let guestScoreNumV = document.getElementById("guest-score-num")



function addOne() {
    homeScoreNum = homeScoreNum + 1
    homeScoreNumV.textContent = homeScoreNum
}

function addTwo() {
    homeScoreNum = homeScoreNum + 2
    homeScoreNumV.textContent = homeScoreNum
}

function addThree() {
    homeScoreNum = homeScoreNum + 3
    homeScoreNumV.textContent = homeScoreNum
}



function addOneGuest() {
    guestScoreNum = guestScoreNum + 1
    guestScoreNumV.textContent = guestScoreNum
}

function addTwoGuest() {
    guestScoreNum = guestScoreNum + 2
    guestScoreNumV.textContent = guestScoreNum
}

function addThreeGuest() {
    guestScoreNum = guestScoreNum + 3
    guestScoreNumV.textContent = guestScoreNum
}


function reset() {
    homeScoreNum = 0
    guestScoreNum = 0
    homeScoreNumV.textContent = 0
    guestScoreNumV.textContent = 0
}