function showP1() {
  document.getElementById("pp2").style.visibility = "hidden";
  document.getElementById("pp3").style.visibility = "hidden";
  document.getElementById("pp1").style.visibility = "visible";
}

function showP2() {
  document.getElementById("pp1").style.visibility = "hidden";
  document.getElementById("pp3").style.visibility = "hidden";
  document.getElementById("pp2").style.visibility = "visible";
}

function showP3() {
  document.getElementById("pp1").style.visibility = "hidden";
  document.getElementById("pp2").style.visibility = "hidden";
  document.getElementById("pp3").style.visibility = "visible";
}

function hideVideo2() {
  document.getElementById("videoBox2").style.visibility = "hidden";
  document.getElementById("videoBox1").style.visibility = "visible";
}

function hideVideo1() {
    document.getElementById("videoBox1").style.visibility = "hidden";
    document.getElementById("videoBox2").style.visibility = "visible";
  }