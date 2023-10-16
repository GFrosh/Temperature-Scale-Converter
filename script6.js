let button = document.getElementById('button');

function convert() {
    
    let inputValue = document.getElementById("input").value;
    
    let answer = (9/5) * inputValue + 32 - 273;
    
    let output = document.getElementById("answer");
    
    output.innerText = "The answer is " + answer;
    
    
    if (isNaN(inputValue)) { 
  
         alert("Not a Number!"); 
  
         output.innerText = "Invalid Entry!"; 
  
     }

}


button.onclick = convert;