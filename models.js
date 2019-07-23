class Monster {
    constructor(name, imageUrl) {
        this.id = `monsterNumber${Math.round(Math.random() * 100)}`;
        this.name = name;
        this.imageUrl = imageUrl
        this.x = "0px"
        this.y = "0px"
        this.selected = false

    }

    createCard() {
        const monsterCard = document.createElement("div");
        // monsterCard.width = 1500;
        // monsterCard.height = 1500;
        monsterCard.style.left = this.x;
        monsterCard.style.top = this.y;
        monsterCard.style.display = "inline-block"
        monsterCard.style.position = "relative"
        monsterCard.style.textAlign = "center"
        monsterCard.addEventListener("click", function () {
            selectMonster(monsternName.innerText)
            monsterCard.style.opacity = "1"
        })

        if (!this.selected){monsterCard.style.opacity = "0.8"}

        const monsterImg = document.createElement("img");
        monsterImg.src = this.imageUrl;
        monsterImg.width = 120;
        monsterImg.height = 120;
        monsterImg.style.border = "black solid 2px"
        const monsternName = document.createElement("h4")
        monsternName.innerText = this.name
        monsternName.style.backgroundColor = "yellow"

        const upBtn = document.createElement("button")
        upBtn.style.position = "relative"
        upBtn.style.top = "-180px"
        upBtn.style.left = "50px"
        upBtn.innerHTML = "^"
        upBtn.classList.add("btn", "btn-danger")
        upBtn.addEventListener("click", function () {
            moveUp(monsternName.innerText)
            draw()
        })

        const downBtn = document.createElement("button")
        downBtn.style.position = "relative"
        downBtn.style.top = "-10px"
        downBtn.style.left = "15px"
        downBtn.innerHTML = "v"
        downBtn.classList.add("btn", "btn-danger")
        downBtn.addEventListener("click", function () {
            moveDown(monsternName.innerText)
            draw()
        })

        const rightBtn = document.createElement("button")
        rightBtn.style.position = "relative"
        rightBtn.style.top = "-110px"
        rightBtn.style.left = "50px"
        rightBtn.innerHTML = ">"
        rightBtn.classList.add("btn", "btn-danger")
        rightBtn.addEventListener("click", function () {
            moveRight(monsternName.innerText)
            draw()
        })


        const leftBtn = document.createElement("button")
        leftBtn.style.position = "relative"
        leftBtn.style.top = "-110px"
        leftBtn.style.left = "-120px"
        leftBtn.innerHTML = "<"
        leftBtn.classList.add("btn", "btn-danger")
        leftBtn.addEventListener("click", function () {
            moveLeft(monsternName.innerText)
            draw()
        })

        monsterCard.append(monsterImg, monsternName, upBtn, downBtn, rightBtn, leftBtn);
        return monsterCard
    }
}
