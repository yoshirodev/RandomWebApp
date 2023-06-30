
function showDebugConsole(){
  const x = document.getElementById("debugContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showControls(){
  const x = document.getElementById("controlsContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showCoordnates(){
  const x = document.getElementById("coordsDebug");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function deleteNotif(){
  const notifList = document.getElementById("alertContainer");
  notifList.innerHTML = null
}

function sendInput(){
  let userInput1 = document.getElementById('inputTime').value;
  notify(userInput1);
  userInput1 = " ";
}

function notify(notif){
  const notifList = document.getElementById("alertContainer");
  const notifItem = document.createElement("li");
  notifItem.classList.add("bot-message");
  notifItem.textContent = notif;
  notifList.appendChild(notifItem);
}