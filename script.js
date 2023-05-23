let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let directions = document.getElementById("directions");
let colors = document.getElementById("noc");
let text = document.getElementById("text");
let display = document.getElementById("display");
let body = document.getElementById("body");
let values;

const changeColors = () =>{
    if(colors.value == 3){
        color3.style.display = "block";
        color4.style.display = "none";
    }
    else if(colors.value == 4)
    {
        color3.style.display = "block";
        color4.style.display = "block";
    }
    else if(colors.value == 2){
        color3.style.display = "none";
        color4.style.display = "none";
    }
}

const change = () =>{
    if(colors.value == 2){
        values = `linear-gradient(${directions.value}, ${color1.value}, ${color2.value})`;
        //console.log(values);
        text.innerHTML = values;        
        display.style.background = values;
       // body.style.background = values;
    }
    else if(colors.value == 3){
        values = `linear-gradient(${directions.value}, ${color1.value}, ${color2.value}, ${color3.value})`
        //console.log(values);
        text.innerText = values;  
        display.style.background = values;
        //body.style.background = values;
    }
    else if(colors.value == 4){
        values = `linear-gradient(${directions.value}, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
        //console.log(values);
        text.innerText = values;
        display.style.background = values;
        //body.style.background = values;
    }

    var textToCopy = document.getElementById("text").innerText;

        // Create a temporary input element
        var tempInput = document.createElement("input");
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);

        // Select the text in the input element
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For mobile devices

        // Copy the selected text to the clipboard
        document.execCommand("copy");

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Optional: Provide feedback to the user
       console.log(textToCopy);
}
