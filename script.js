let button = document.getElementById('button');

function convert() {
    
    let inputValue = document.getElementById("input").value;
    
    let answer = (5/9) * (inputValue - 32);
    
    let output = document.getElementById("answer");
    
    output.innerText = "The answer is " + answer;
}


button.onclick = convert;