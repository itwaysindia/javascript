// get input element

const inputBox = document.getElementById('inputBox');


// Get all the button
const buttons = document.querySelectorAll('button');

// add event listeners to all button
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        const buttonValue = button.innerText;
        console.log(buttonValue);

        //handle different button types
        if(buttonValue == 'AC'){
            //clear the input box
            inputBox.value = '';
        }else if(buttonValue=='DEL'){
            //Delete the last character
            inputBox.value = inputBox.value.slice(0, -1);
        }else if(buttonValue === '='){
            //calculate the result
            inputBox.value = eval(inputBox.value);
        }else{
            inputBox.value += buttonValue;
        }
    });
}

);