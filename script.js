const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const btn_reset = document.querySelector("#reset");
const btn_search = document.querySelector("#search");

// define more constants and variables here

btn_toggle.onclick = () => {
  if(btn_toggle.innerText === "Show Calculation"){
    btn_toggle.innerText = "Show Author";
    author.innerText = "630610727length.value";
}else{
    btn_toggle.innerText= "Show Calculation";
    author.innerText = "630610727 Natcha Silakorn";
}
}

btn_search.onclick = () => {
  var characters = 0;
  for (var i = 0, length = string.length(); i < length; i++) {
  if (str.charAt(i) != ' ') {
    characters++;
  }
}
}


// more codes for Search and Reset buttons here
