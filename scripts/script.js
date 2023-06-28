
var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}


// Experimental codes

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const directionPos = [1, 0, -1];

function timedComponent_experimental(){
    let duration = 5;
    let time = duration * 60;
    const divmod = (x, y) => [Math.floor(x / y), x % y];

    async function TimerApp() {
        let timeInput = document.getElementById('inputTime').value;
        duration = 4;
        for (let remaining = duration; remaining >= 0; remaining--) {
            let [mins, secs] = divmod(remaining, 60);
            document.getElementById('timer').innerHTML = mins + ':' + secs;
            await sleep(1000);
        }
    }
    if (document.getElementById('timer').innerHTML <= "0:00"){
        TimerApp();
    }
    
    if (document.getElementById('timer').innerHTML >= "0:00"){
        const myTimeout = setTimeout(SetNewDir, 4000);
    }

    function SetNewDir(){
        result = getRandomItem(directionPos)
        myGamePiece.x += result;
        myGamePiece.y += result;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }    
}

function notify(notif){
    const notifList = document.getElementById("alertContainer");
    const notifItem = document.createElement("li");
    notifItem.classList.add("bot-message");
    notifItem.textContent = notif;
    notifList.appendChild(notifItem);

    if(notifList.childElementCount > 10){
        notifList.removeChild;
    }
}