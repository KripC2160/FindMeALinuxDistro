

//local storage variable
// looks bad, but I still don't know the true solution to localstorage issue so here we go
if (localStorage.getItem("EOLToggle") === null){
    localStorage.setItem("EOLToggle", 2);
}

if (localStorage.getItem("EOLToggle") == 2){
    localStorage.setItem("EOLToggle", 2);
}

if (localStorage.getItem("dmToggle") === null){
    localStorage.setItem("dmToggle", 'light');
}

if (localStorage.dmToggle === null){
    localStorage.setItem("dmToggle", 'light');
}

if (localStorage.getItem("distroToggle") === null){
    localStorage.setItem("distroToggle", 1);
}

if (localStorage.distroToggle === null){
    localStorage.setItem("distroToggle", 1);
}

// variables below 
var r = document.querySelector(":root");
var EOLToggle = localStorage.getItem("EOLToggle");
//var curr_toggle = localStorage.getItem("distroToggle");

//color palette from https://onaircode.com/html-css-color-palette-code-snippet/
var curr_color;
var prev_color;
var color_list = [
    "#ED5565", //red
    "#FC6E51", //orange
    "#FFCE54", //yellow
    "#A0D468", //green
    "#48CFAD", //aqua
    "#4FC1E9", // blue
    "#5D9CEC", //darkblue
    "#AC92EC", //purple
    "#EC87C0"]; //pink 

function clicked(){
    if (localStorage.distroToggle == 1){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLlinks[Math.floor(Math.random()*EOLlinks.length)]);
            }
            else{
                window.open(links[Math.floor(Math.random()*links.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(links[Math.floor(Math.random()*links.length)]);
        }
        else if(EOLToggle == 3){
            window.open(EOLlinks[Math.floor(Math.random()*EOLlinks.length)]);
        }   
    }
    if (localStorage.distroToggle == 2){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLdebianlinks[Math.floor(Math.random()*EOLdebianlinks.length)]);
            }
            else{
                window.open(debainlinks[Math.floor(Math.random()*debainlinks.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(debainlinks[Math.floor(Math.random()*debainlinks.length)]);
        }
        else if(EOLToggle ==3){
            window.open(EOLdebianlinks[Math.floor(Math.random()*EOLdebianlinks.length)]);
        }
    }
    if (localStorage.distroToggle == 3){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLarchlinks[Math.floor(Math.random()*EOLarchlinks.length)]);
            }
            else{
                window.open(archlinks[Math.floor(Math.random()*archlinks.length)]);
            }
        }
        else if(EOLToggle == 2) {
            window.open(archlinks[Math.floor(Math.random()*archlinks.length)]);
        }
        else if (EOLToggle ==3){
            window.open(EOLarchlinks[Math.floor(Math.random()*EOLarchlinks.length)]);
        }
    }
    if (localStorage.distroToggle ==4){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLgentoolinks[Math.floor(Math.random()*EOLgentoolinks.length)]);
            }
            else{
                window.open(gentoolinks[Math.floor(Math.random()*gentoolinks.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(gentoolinks[Math.floor(Math.random()*gentoolinks.length)]);
        }
        else if(EOLToggle == 3){
            window.open(EOLgentoolinks[Math.floor(Math.random()*gentoolinks.length)]);
        }    
    }
    if (localStorage.distroToggle == 5){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLredhatlinks[Math.floor(Math.random()*EOLredhatlinks.length)]);
            }
            else{
                window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(redhatlinks[Math.floor(Math.random()*redhatlinks.length)]);
        }
        else if(EOLToggle == 3){
            window.open(EOLredhatlinks[Math.floor(Math.random()*EOLredhatlinks.length)]);
        }
    }
    if (localStorage.distroToggle == 6){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLsuselinks[Math.floor(Math.random()*EOLsuselinks.length)]);
            }
            else{
                window.open(suselinks[Math.floor(Math.random()*suselinks.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(suselinks[Math.floor(Math.random()*suselinks.length)]);
        }
        else if(EOLToggle == 3){
            window.open(EOLsuselinks[Math.floor(Math.random()*EOLsuselinks.length)]);
        }
    }
    if (localStorage.distroToggle == 7){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);
    
            if (chosentype <= 25){
                window.open(EOLslacklinks[Math.floor(Math.random()*EOLslacklinks.length)]);
            }
            else{
                window.open(slacklinks[Math.floor(Math.random()*slacklinks.length)]);
            }
        }
        else if (EOLToggle == 2){
            window.open(slacklinks[Math.floor(Math.random()*slacklinks.length)]);
        }
        else if(EOLToggle == 3){
            window.open(EOLslacklinks[Math.floor(Math.random()*EOLslacklinks.length)]);
        }
    }
    if (localStorage.distroToggle == 8){
        if (EOLToggle == 1){
            var chosentype = Math.floor((Math.random()*100)+ 1);

            if (chosentype <= 25){
                window.open(EOLotherlinks[Math.floor(Math.random()*EOLotherlinks.length)]);
            }
            else{
                window.open(otherlinks[Math.floor(Math.random()*otherlinks.length)]);
            }
        }
        else if(EOLToggle == 2){
            window.open(otherlinks[Math.floor(Math.random()*otherlinks.length)]);
        }
        else if(EOLToggle ==3){
            window.open(EOLotherlinks[Math.floor(Math.random()*EOLotherlinks.length)]);
        }
    }
}

function changeButtonColor(){
    var color = Math.floor((Math.random() * 9) + 0);
    /*added this function so no identical colors will be there 
    everytime you load new random color*/
    if (color_list[color] == curr_color || color_list[color] == prev_color){
        changeButtonColor();
    }
    else{

        document.getElementById("FMALDOTHER").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDALL").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDDEBIAN").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDARCH").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDREDHAT").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSUSE").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDSLACK").style.backgroundColor = "#3D3D3D";
        document.getElementById("FMALDGENTOO").style.backgroundColor = "#3D3D3D";

        if (localStorage.distroToggle == 1){
            document.getElementById("EOLon").style.backgroundColor = color_list[color];
            document.getElementById("EOLoff").style.backgroundColor = color_list[color];
            document.getElementById("EOLonly").style.backgroundColor = color_list[color];
            document.getElementById("random-button").style.backgroundColor = color_list[color];
            document.getElementById("BigTitle").style.color = color_list[color];
            document.getElementById("FMALDALL").style.backgroundColor = color_list[color];
        }
        if (localStorage.distroToggle == 2){
            document.getElementById("EOLon").style.backgroundColor = color_list[1];
            document.getElementById("EOLoff").style.backgroundColor = color_list[1];
            document.getElementById("random-button").style.backgroundColor=color_list[1];
            document.getElementById("EOLonly").style.backgroundColor = color_list[1];
            document.getElementById("BigTitle").style.color = color_list[1];
            document.getElementById("FMALDDEBIAN").style.backgroundColor = "#FC6E51";
        }
        if (localStorage.distroToggle == 3){
            document.getElementById("EOLon").style.backgroundColor = color_list[5];
            document.getElementById("EOLoff").style.backgroundColor = color_list[5];
            document.getElementById("EOLonly").style.backgroundColor = color_list[5];
            document.getElementById("random-button").style.backgroundColor=color_list[5];
            document.getElementById("BigTitle").style.color = color_list[5];
            document.getElementById("FMALDARCH").style.backgroundColor = color_list[5];
        }
        if (localStorage.distroToggle == 4){
            document.getElementById("EOLon").style.backgroundColor = color_list[7];
            document.getElementById("EOLoff").style.backgroundColor = color_list[7];
            document.getElementById("EOLonly").style.backgroundColor = color_list[7];
            document.getElementById("random-button").style.backgroundColor=color_list[7];
            document.getElementById("BigTitle").style.color = color_list[7];
            document.getElementById("FMALDGENTOO").style.backgroundColor = "#AC92EC";
        }
        if (localStorage.distroToggle == 5){
            document.getElementById("EOLon").style.backgroundColor = color_list[0];
            document.getElementById("EOLoff").style.backgroundColor = color_list[0];
            document.getElementById("EOLonly").style.backgroundColor = color_list[0];
            document.getElementById("random-button").style.backgroundColor=color_list[0];
            document.getElementById("BigTitle").style.color = color_list[0];
            document.getElementById("FMALDREDHAT").style.backgroundColor = "#ED5565";
        }
        if (localStorage.distroToggle == 6){
            document.getElementById("EOLon").style.backgroundColor = color_list[3];
            document.getElementById("EOLoff").style.backgroundColor = color_list[3];
            document.getElementById("EOLonly").style.backgroundColor = color_list[3];
            document.getElementById("random-button").style.backgroundColor=color_list[3];
            document.getElementById("BigTitle").style.color = color_list[3];
            document.getElementById("FMALDSUSE").style.backgroundColor = "#A0D468";
        }
        if (localStorage.distroToggle == 7){
            document.getElementById("EOLon").style.backgroundColor = color_list[6];
            document.getElementById("EOLoff").style.backgroundColor = color_list[6];
            document.getElementById("EOLonly").style.backgroundColor = color_list[6];
            document.getElementById("random-button").style.backgroundColor=color_list[6];
            document.getElementById("BigTitle").style.color = color_list[6];
            document.getElementById("FMALDSLACK").style.backgroundColor = "#5D9CEC";
        }
        if (localStorage.distroToggle == 8){
            document.getElementById("EOLon").style.backgroundColor = "#FFF";
            document.getElementById("EOLoff").style.backgroundColor = "#FFF";
            document.getElementById("EOLonly").style.backgroundColor = "#FFF";
            document.getElementById("random-button").style.backgroundColor= "#FFF";
            if (localStorage.dmToggle == 'light'){
                document.getElementById("BigTitle").style.color = "white";
            }
            else if (localStorage.dmToggle == 'dark'){
                document.getElementById("BigTitle").style.color = "#3D3D3D";
            }
            document.getElementById("FMALDOTHER").style.backgroundColor = "#F5F7FA";
            document.getElementById("FMALDOTHER").style.color = "#3D3D3D";
        }
    }
    
        if (EOLToggle == 1){
            if (localStorage.distroToggle == 8){
                document.getElementById("EOLon").style.color = "#3D3D3D";
                document.getElementById("EOLonly").style.color = "white";
                document.getElementById("EOLoff").style.color = "white";
            }
            else{
                document.getElementById("EOLon").style.color = "white";
            }
            document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
            document.getElementById("EOLonly").style.backgroundColor = "#3D3D3D";
        }
        else if (EOLToggle == 2){
            if (localStorage.distroToggle == 8){
                document.getElementById("EOLoff").style.color = "#3D3D3D";
                document.getElementById("EOLonly").style.color = "white";
                document.getElementById("EOLon").style.color = "white";
            }
            else{
                document.getElementById("EOLoff").style.color = "white";
            }
            document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
            document.getElementById("EOLonly").style.backgroundColor = "#3D3D3D";
        }
        else if (EOLToggle == 3){
            if (localStorage.distroToggle == 8){
                document.getElementById("EOLonly").style.color = "#3D3D3D";
                document.getElementById("EOLoff").style.color = "white"
                document.getElementById("EOLon").style.color = "white"
            }
            else{
                document.getElementById("EOLonly").style.color = "white";
            }
            document.getElementById("EOLon").style.backgroundColor = "#3D3D3D";
            document.getElementById("EOLoff").style.backgroundColor = "#3D3D3D";
        }
        prev_color = curr_color;
        curr_color = color_list[color];

    if (localStorage.distroToggle != 8){
        document.getElementById("EOLon").style.color = "white";
        document.getElementById("EOLoff").style.color = "white";
        document.getElementById("FMALDOTHER").style.color = "white";
    }

    if(localStorage.dmToggle == 'dark'){
        document.getElementById('random-button').style.borderColor = "#4C4C4C";
        r.style.setProperty('--main-color', 'F0F0F0');
        r.style.setProperty('--main-text-color', '#1C1C1C');
        r.style.setProperty('--main-background', "#D4D4D4");
        r.style.setProperty('--main-bigtitle', 'white');
    }
    else{
        document.getElementById('random-button').style.borderColor = "#FFFFFF";
        r.style.setProperty('--main-color', '#1C1C1C');
        r.style.setProperty('--main-text-color', 'lightgrey');
        r.style.setProperty('--main-background', "#2D2D2D");
        r.style.setProperty('--main-bigtitle', '#1C1C1C');
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
    if (EOLToggle != 1){
        EOLToggle = 1;
        localStorage.setItem("EOLToggle", 1);
        changeButtonColor();
    }
}

function TOGGLEEOLOFF(){
    if (EOLToggle != 2){
        EOLToggle = 2;
        localStorage.setItem("EOLToggle", 2);
        changeButtonColor();
    }
}

function TOGGLEEOLONLY(){
    if (EOLToggle != 3){
        EOLToggle = 3;
        localStorage.setItem("EOLToggle", 3);
        changeButtonColor();
    }
}

//option buttons

function TOGGLEALL(){
    if (curr_color != 1){
        localStorage.distroToggle = 1;
        changeButtonColor();
    }
}

function TOGGLEDEBIAN(){
    if (localStorage.distroToggle != 2){
        localStorage.distroToggle = 2;
        changeButtonColor();
    }
}

function TOGGLEARCH(){
    if (localStorage.distroToggle != 3){
        localStorage.distroToggle = 3;
        changeButtonColor();   
    }
}

function TOGGLEGENTOO(){
    if (localStorage.distroToggle != 4){
        localStorage.distroToggle = 4;
        changeButtonColor();   
    }
}

function TOGGLEREDHAT(){
    if (localStorage.distroToggle != 5){
        localStorage.distroToggle = 5;
        changeButtonColor();   
    }
}

function TOGGLESUSE(){
    if (localStorage.distroToggle != 6){
        localStorage.distroToggle = 6;
        changeButtonColor();   
    }
}

function TOGGLESLACK(){
    if (localStorage.distroToggle != 7){
        localStorage.distroToggle = 7;
        changeButtonColor();   
    }
}

function TOGGLEOTHER(){
    if (localStorage.distroToggle != 8){
        localStorage.distroToggle = 8;
        changeButtonColor();   
    }
}

function dmchange(){
    if (localStorage.dmToggle == 'dark'){
        localStorage.setItem("dmToggle", 'light');
    }
    else if (localStorage.dmToggle == 'light'){
        localStorage.setItem("dmToggle", 'dark');
    }
    changeButtonColor();
}
