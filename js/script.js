

var nLines = 0;
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
    window.open(links[Math.floor(Math.random()*links.length)]);
}

function changeButtonColor(){
    var color = Math.floor((Math.random() * 9) + 0);
    document.getElementById("random-button").style.background = color_list[color];
    document.getElementById("BigTitle").style.color = color_list[color];
}

function backgroundColor(){
    //var color = Math.floor((Math.random() * 9) + 0);
    //document.body.style.background = color_list[color];
}

function relocateGithubHome(){
    var githubhome = "https://github.com/KripC2160/findmealinuxdistro";
    window.open(githubhome);
}

function relocateGithub(){
    var github = "https://github.com/KripC2160/findmealinuxdistro/issues";
    window.open(github);
}
