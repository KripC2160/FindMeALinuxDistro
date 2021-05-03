
var EOLToggle = false;
var nLines = 0;
//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var color_list = [
    "#ED5565", 
    "#FC6E51", 
    "#FFCE54", 
    "#A0D468", 
    "#48CFAD", 
    "#4FC1E9", 
    "#5D9CEC", 
    "#AC92EC",
    "#EC87C0"]; 

function clicked(){
    changeButtonColor();
    if (EOLToggle == true){
        var chosentype = Math.floor((Math.random()*100)+ 1);

        if (chosentype <= 25){
            window.open(EOLlinks[Math.floor(Math.random()*EOLlinks.length)]);
        }
        else{
            window.open(links[Math.floor(Math.random()*links.length)]);
        }
    }
    else{
        window.open(links[Math.floor(Math.random()*links.length)]);
    }
}

function changeButtonColor(){
    var color = Math.floor((Math.random() * 9) + 0);
    //added this function so no identical colors will be there 
    //everytime you load new random color
    if (color_list[color] == curr_color){
        changeButtonColor();
    }
    else{
        document.getElementById("random-button").style.backgroundColor = color_list[color];
        document.getElementById("BigTitle").style.color = color_list[color];
        if (EOLToggle == true){
            document.getElementById("EOLon").style.background = color_list[color];
            document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
        }
        else if (EOLToggle == false){
            document.getElementById("EOLoff").style.backgroundColor = color_list[color];
            document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
        }
        curr_color = color_list[color];
    }
}

/*
function backgroundColor(){
    //var color = Math.floor((Math.random() * 9) + 0);
    //document.body.style.background = color_list[color];
}
*/

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