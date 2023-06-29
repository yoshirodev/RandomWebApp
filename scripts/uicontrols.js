function showDebugConsole(){
  var x = document.getElementById("debugContainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showControls(){
  var x = document.getElementById("controlsContainer");
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