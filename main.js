document.getElementById("box-0").addEventListener('option', addInput0)
document.getElementById('box-1').addEventListener('option', addInput1)
document.getElementById("box-2").addEventListener('option', addInput2)
document.getElementById('box-3').addEventListener('option', addInput3)
document.getElementById("box-4").addEventListener('option', addInput4)
document.getElementById('box-5').addEventListener('option', addInput5)
document.getElementById("box-6").addEventListener('option', addInput6)
document.getElementById('box-7').addEventListener('option', addInput7)
document.getElementById("box-8").addEventListener('option', addInput8)
document.getElementById("game").addEventListener('click', clearGame)

let myArray = []
function addInput0() {
    myArray[0] = document.getElementById("box-0").value 
    winCons()
}
function addInput1() {
    myArray[1] = document.getElementById("box-1").value 
    winCons()
}
function addInput2() {
    myArray[2] = document.getElementById("box-2").value 
    winCons()
}
function addInput3() {
    myArray[3] = document.getElementById("box-3").value 
    winCons()
}
function addInput4() {
    myArray[4] = document.getElementById("box-4").value 
    winCons()
}
function addInput5() {
    myArray[5] = document.getElementById("box-5").value 
    winCons()
}
function addInput6() {
    myArray[6] = document.getElementById("box-6").value 
    winCons()
}
function addInput7() {
    myArray[7] = document.getElementById("box-7").value 
    winCons()
}
function addInput8() {
    myArray[8] = document.getElementById("box-8").value 
    winCons()
}
function winCons() {
    if(myArray[0] === 'X' && myArray[1] === 'X' && myArray[2] == 'X') {
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[3] === 'X' && myArray[4] === 'X' && myArray[5] == 'X') {
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[6] === 'X' && myArray[7] === 'X' && myArray[8] == 'X') {
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[0] === 'X' && myArray[4] === 'X' && myArray[8] === 'X'){
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[0] === 'X' && myArray[3] === 'X' && myArray[6] === 'X'){
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[1] === 'X' && myArray[4] === 'X' && myArray[7] === 'X'){
        adocument.getElementById("output").innerText = "X wins this round"
    }else if(myArray[2] === 'X' && myArray[5] === 'X' && myArray[8] === 'X'){
        document.getElementById("output").innerText = "X wins this round"
    }else if(myArray[2] === 'X' && myArray[4] === 'X' && myArray[6] === 'X'){
        document.getElementById("output").innerText = "X wins this round"
    // Winners for O
    }else if(myArray[0] === 'O' && myArray[1] === 'O' && myArray[2] == 'O') {
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[3] === 'O' && myArray[4] === 'O' && myArray[5] == 'O') {
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[6] === 'O' && myArray[7] === 'O' && myArray[8] == 'O') {
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[0] === 'O' && myArray[4] === 'O' && myArray[8] === 'O'){
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[0] === 'O' && myArray[3] === 'O' && myArray[6] === 'O'){
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[1] === 'O' && myArray[4] === 'O' && myArray[7] === 'O'){
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[2] === 'O' && myArray[5] === 'O' && myArray[8] === 'O'){
        document.getElementById("output").innerText = "O wins this round"
    }else if(myArray[2] === 'O' && myArray[4] === 'O' && myArray[6] === 'O'){
        document.getElementById("output").innerText = "O wins this round"
    }
}

function clearGame() {
    location.reload()
    myArray.clear()
}