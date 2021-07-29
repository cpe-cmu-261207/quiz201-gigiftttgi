const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_reset = document.querySelector("#reset");

// define more constants and variables here

btn_toggle.onclick = () => {
  if(btn_toggle.innerText === "Show Calculation"){
    btn_toggle.innerText = "Show Author";
    author.innerText = "630610727"
}else{
    btn_toggle.innerText= "Show Calculation";
    author.innerText = "630610727 Natcha Silakorn";
}
}

// more codes for Search and Reset buttons here
