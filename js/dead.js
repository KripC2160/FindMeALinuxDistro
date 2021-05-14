var nLines = 0;
//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var color_list = ["#656D78"]; 


function clicked(){
    var chosentype = Math.floor((Math.random()*100)+ 1);
    window.open(EOLlinks[Math.floor(Math.random()*EOLlinks.length)]);
}

function changeButtonColor(){

    document.body.style.backgroundColor = "#656D78"; 
    document.getElementById("BigTitle").style.color = "#FFFFFF";
    document.getElementById("random-button").style.backgroundColor = "#FFFFFF";
    document.getElementById("random-button").style.borderColor = "#434A54";
    document.getElementById("smallerTitle").style.color = "#F1F1F1";
    document.getElementById("suggestions").style.color = "#FFFFFF";
    document.getElementById("creditsanddate").style.color = "#FFFFFF";
}

function relocateGithubHome(){
    var githubhome = "https://github.com/KripC2160/findmealinuxdistro";
    window.open(githubhome);
}

function relocateGithub(){
    var github = "https://github.com/KripC2160/findmealinuxdistro/issues";
    window.open(github);
}