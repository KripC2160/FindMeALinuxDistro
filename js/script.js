
var EOLToggle = false;
var curr_toggle = 0;
//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var color_list = [
    "#ED5565", //red
    "#FC6E51", //orange
    "#FFCE54", //yellow
    "#A0D468", //green
    "#48CFAD", //blue
    "#4FC1E9", // aqua
    "#5D9CEC", //darkblue
    "#AC92EC", //purple
    "#EC87C0"]; //pink 

function clicked(){
    //I regret going yandare mode but I have no choice ;(
    if (curr_toggle == 0){
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
    else if (curr_toggle == 1){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLdebianlinks[Math.floor(Math.random()*EOLdebianlinks.length)]);
            }
            else{
                window.open(debainlinks[Math.floor(Math.random()*debainlinks.length)]);
            }
        }
        else{
            window.open(debainlinks[Math.floor(Math.random()*debainlinks.length)]);
        }
    }
    else if (curr_toggle == 2){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLarchlinks[Math.floor(Math.random()*EOLarchlinks.length)]);
            }
            else{
                window.open(archlinks[Math.floor(Math.random()*archlinks.length)]);
            }
        }
        else{
            window.open(archlinks[Math.floor(Math.random()*archlinks.length)]);
        }
    }
    else if (curr_toggle == 3){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLgentoolinks[Math.floor(Math.random()*EOLgentoolinks.length)]);
            }
            else{
                window.open(gentoolinks[Math.floor(Math.random()*gentoolinks.length)]);
            }
        }
        else{
            window.open(gentoolinks[Math.floor(Math.random()*gentoolinks.length)]);
        }
    }
    else if (curr_toggle == 4){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLredhatlinks[Math.floor(Math.random()*EOLredhatlinks.length)]);
            }
            else{
                window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
            }
        }
        else{
            window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
        }
    }
    else if (curr_toggle == 5){
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
    else if (curr_toggle == 6){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLslacklinks[Math.floor(Math.random()*EOLslacklinks.length)]);
            }
            else{
                window.open(slacklinks[Math.floor(Math.random()*slacklinks.length)]);
            }
        }
        else{
            window.open(slacklinks[Math.floor(Math.random()*slacklinks.length)]);
        }
    }
    else if (curr_toggle == 7){
        if (EOLToggle == true){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLotherlinks[Math.floor(Math.random()*EOLotherlinks.length)]);
            }
            else{
                window.open(otherlinks[Math.floor(Math.random()*otherlinks.length)]);
            }
        }
        else{
            window.open(otherlinks[Math.floor(Math.random()*otherlinks.length)]);
        }
    }
    else if (curr_toggle == 8){
            window.open(EOLlinks[Math.floor(Math.random()*EOLlinks.length)]);
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
            document.getElementById("EOLon").style.backgroundColor = color_list[color];
            document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
        }
        else if (EOLToggle == false){
            document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
            document.getElementById("EOLoff").style.backgroundColor = color_list[color];     
        }   
        curr_color = color_list[color];
    }

    if (curr_toggle == 8){
        document.getElementById("EOLon").style.disabled = true;
        document.getElementById("EOLoff").style.disabled = true;
        document.getElementById("EOLon").style.opacity = "30%";
        document.getElementById("EOLoff").style.opacity = "30%";
    }
    else{
        document.getElementById("EOLon").style.disabled = false;
        document.getElementById("EOLoff").style.disabled = false;
        document.getElementById("EOLon").style.opacity = "100%";
        document.getElementById("EOLoff").style.opacity = "100%";
    }

    //Couldn't solve it using switch. Screw it I'm going Yandere Dev Mode
    if (curr_toggle == 0){
        document.getElementById("FMALDALL").style.backgroundColor = color_list[color];
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 1){
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#FC6E51";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 2){
        document.getElementById("FMALDARCH").style.backgroundColor = "#4FC1E9";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 3){
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#AC92EC";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 4){
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#ED5565";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 5){
        document.getElementById("FMALDSUSE").style.backgroundColor = "#A0D468";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 6){
        document.getElementById("FMALDSLACK").style.backgroundColor = "#5D9CEC";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 7){
        document.getElementById("FMALDOTHER").style.backgroundColor = "#F5F7FA";
        document.getElementById("FMALDOTHER").style.color = "#3D3D3D";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEAD").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
    }
    else if (curr_toggle == 8){
        document.getElementById("FMALDDEAD").style.backgroundColor = "#656D78";
        document.getElementById("FMALDOTHER").style.color = "#3D3D3D";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";
    }

    if (curr_toggle != 7){
        document.getElementById("FMALDOTHER").style.color = "white";
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

function TOGGLEEOLON(){
    if (curr_toggle != 8){
        if (EOLToggle == false){
            EOLToggle = true;
            changeButtonColor();
        }
    }
}

function TOGGLEEOLOFF(){
    if (curr_toggle != 8){
        if (EOLToggle == true){
            EOLToggle = false;
            changeButtonColor();
        }
    }
}

//option buttons

function TOGGLEALL(){
    if (curr_color != 0){
        curr_toggle = 0;
        changeButtonColor();
    }
}

function TOGGLEDEBIAN(){
    if (curr_toggle != 1){
        curr_toggle = 1;
        changeButtonColor();
    }
}

function TOGGLEARCH(){
    if (curr_toggle != 2){
        curr_toggle = 2;
        changeButtonColor();   
    }
}

function TOGGLEGENTOO(){
    if (curr_toggle != 3){
        curr_toggle = 3;
        changeButtonColor();   
    }
}

function TOGGLEREDHAT(){
    if (curr_toggle != 4){
        curr_toggle = 4;
        changeButtonColor();   
    }
}

function TOGGLESUSE(){
    if (curr_toggle != 5){
        curr_toggle = 5;
        changeButtonColor();   
    }
}

function TOGGLESLACK(){
    if (curr_toggle != 6){
        curr_toggle = 6;
        changeButtonColor();   
    }
}

function TOGGLEOTHER(){
    if (curr_toggle != 7){
        curr_toggle = 7;
        changeButtonColor();   
    }
}

function TOGGLEDEAD(){
    if (curr_toggle != 8){
        curr_toggle = 8;
        changeButtonColor();   
    }
}