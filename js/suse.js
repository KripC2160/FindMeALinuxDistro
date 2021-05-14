var EOLToggle = false;
var nLines = 0;
//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var color_list = ["#A0D468"]; 


function clicked(){
    changeButtonColor();
    if (EOLToggle == true){
        var chosentype = Math.floor((Math.random()*100)+ 1);

        if (chosentype <= 25){
            window.open(EOLsuselinks[Math.floor(Math.random()*EOLsuselinks.length)]);
        }
        else{
            window.open(suselinks[Math.floor(Math.random()*suselinks.length)]);
        }
    }
    else{
        window.open(suselinks[Math.floor(Math.random()*suselinks.length)]);
    }
}

function changeButtonColor(){

    document.body.style.backgroundColor = "#A0D468"; 
    document.getElementById("BigTitle").style.color = "#FFFFFF";
    document.getElementById("random-button").style.backgroundColor = "#FFFFFF";
    document.getElementById("random-button").style.borderColor = "#8CC152";
    document.getElementById("smallerTitle").style.color = "#F1F1F1";
    document.getElementById("suggestions").style.color = "#FFFFFF";
    document.getElementById("creditsanddate").style.color = "#FFFFFF";

    if (EOLToggle == true){
        document.getElementById("EOLon").style.background = "#A0D468";
        document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
    }
    else if (EOLToggle == false){
        document.getElementById("EOLoff").style.backgroundColor = "#A0D468";
        document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
    }
}

function relocateGithubHome(){
    var githubhome = "https://github.com/KripC2160/findmealinuxdistro";
    window.open(githubhome);
}

function relocateGithub(){
    var github = "https://github.com/KripC2160/findmealinuxdistro/issues";
    window.open(github);
}

function toggleEOLon(){
    if (EOLToggle == false){
        EOLToggle = true;
        changeButtonColor();
    }
}

function toggleEOLoff(){
    if (EOLToggle == true){
        EOLToggle = false;
        changeButtonColor();
    }
}