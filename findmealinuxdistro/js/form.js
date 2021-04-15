

var typeSelect = false;
var text = false;


/*
var form = document.getElementById('form');

function handleForm(event){
    event.preventDefault();
}
form.addEventListener('submit', handleForm);
*/

$(document).ready(function(){
    $(document).on("submit", '#form', function(){
        submitForm();
        return false;
    })
})



function textState(){
    if ($("textarea").val != ""){
        text = true;
    }
    else{
        text = false;
    }
}  

function buttonState(){
    if ($("select option:nth(0)").is(":selected")){
        typeSelect = false;
    }
    else{
        typeSelect = true;
    }
}

function submitForm(){
    if (text == true && typeSelect == true){
        
    }
    else{
        if (text == false && typeSelect == false){
            alert("Please select the type of suggestion and fill out the text box for further informations!");
        }
        else if (typeSelect == false){
            alert("Please select the type of suggestion to submit!");
        }
        else if (text == false){
            alert("Please provide more details to the suggestion");
        }
    }
}