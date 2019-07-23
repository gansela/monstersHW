const mainBoard = document.querySelector("#main");
const genBtn = document.querySelector("#gen-btn")
genBtn.addEventListener("click", dontPush)


function dontPush() {
    for (let monster in monsters) {
        monsters[monster].x = getRndInteger(30, 400) + "px"
        monsters[monster].y = getRndInteger(30, 300) + "px"
    }
    draw()
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw() {
    clearDom()
    for (let monster in monsters) {
        mainBoard.append(monsters[monster].createCard())
    }
}


function clearDom() {
    mainBoard.innerHTML = ""
}


function moveUp(name) {
    monsters[name].y = `${parseInt(monsters[name].y) - 30}px`
}

function moveDown(name) {
    monsters[name].y = `${parseInt(monsters[name].y) + 30}px`
}

function moveRight(name) {
    monsters[name].x = `${parseInt(monsters[name].x) + 30}px`
}

function moveLeft(name) {
    monsters[name].x = `${parseInt(monsters[name].x) - 30}px`
}

function selectMonster(name) {
    clearSelected()
    monsters[name].selected = true
    document.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                moveLeft(name);
                draw()
                break;
            case 38:
                moveUp(name);
                draw()
                break;
            case 39:
                moveRight(name);
                draw()
                break;
            case 40:
                moveDown(name);
                draw()
                break;
        }
    };
}

function clearSelected() {
    for (let monster in monsters) {
        monsters[monster].selected = false
    }
}




// second part of the HTMLUnknownElement, is comented because its buggy


// Object.prototype.len = function () {
//     let q = 0
//     for(let obj in Object.keys(this)){
//         q++
//     }
//     q --
//     return q
// };
// x=monsters.len()
// console.log(x)

