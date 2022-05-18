

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
var curr_color, prev_color;
var color_list = [
    "#EC87C0", "#48CFAD", "#FC6E51", //pink, torquoise, orange
    "#4FC1E9", "#AC92EC", "#ED5565", //aqua, purple, red
    "#A0D468", "#5D9CEC", "#FFCE54", //green, blue, yellow
    "#CFA400"
];

var distro_list = [
    "TEST", "FMALDALL", "FMALDDEBIAN", "FMALDARCH", "FMALDGENTOO", "FMALDREDHAT", "FMALDSUSE", "FMALDSLACK", "FMALDBSD", "FMALDOTHER"
];



function clicked(){

    var distrolink_list = [
        "gap", links, debianlinks, archlinks, gentoolinks, 
        redhatlinks, suselinks, slacklinks, bsdlinks, otherlinks
    ];
    
    var eoldistrolink_list = [
        "gap", EOLlinks, EOLdebianlinks, EOLarchlinks, EOLgentoolinks, 
        EOLredhatlinks, EOLsuselinks, EOLslacklinks, EOLotherlinks
    ];

    if (EOLToggle == 1){
        var chosentype = Math.floor((Math.random()*100)+ 1);
        chosentype <= 25 ? window.open(eoldistrolink_list[localStorage.distroToggle][Math.floor(Math.random()*eoldistrolink_list[localStorage.distroToggle].length)]) : window.open(distrolink_list[localStorage.distroToggle][Math.floor(Math.random()*distrolink_list[localStorage.distroToggle].length)])
    }
    else if(EOLToggle == 2){
        window.open(distrolink_list[localStorage.distroToggle][Math.floor(Math.random()*distrolink_list[localStorage.distroToggle].length)]);
    }
    else if(EOLToggle == 3){
        window.open(eoldistrolink_list[localStorage.distroToggle][Math.floor(Math.random()*eoldistrolink_list[localStorage.distroToggle].length)]);
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
        document.getElementById("FMALDBSD").style.backgroundColor = "#3D3D3D";
        
        if (localStorage.distroToggle == 1){
            document.getElementById("EOLon").style.backgroundColor = color_list[color];
            document.getElementById("EOLoff").style.backgroundColor = color_list[color];
            document.getElementById("EOLonly").style.backgroundColor = color_list[color];
            document.getElementById("random-button").style.backgroundColor = color_list[color];
            document.getElementById("BigTitle").style.color = color_list[color];
            document.getElementById("FMALDALL").style.backgroundColor = color_list[color];
        }
        else{
            document.getElementById("EOLon").style.backgroundColor = color_list[localStorage.distroToggle];
            document.getElementById("EOLoff").style.backgroundColor = color_list[localStorage.distroToggle];
            document.getElementById("random-button").style.backgroundColor=color_list[localStorage.distroToggle];
            document.getElementById("EOLonly").style.backgroundColor = color_list[localStorage.distroToggle];
            document.getElementById("BigTitle").style.color = color_list[localStorage.distroToggle];
            document.getElementById(distro_list[localStorage.distroToggle]).style.backgroundColor = color_list[localStorage.distroToggle]; 
        }

        if (localStorage.distroToggle == 8){
            document.getElementById("EOLon").style.backgroundColor = "white";
            document.getElementById("EOLoff").style.backgroundColor = "white";
            document.getElementById("EOLonly").style.backgroundColor = "white";
            document.getElementById("random-button").style.backgroundColor= "white";
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
        document.getElementById('random-button').style.borderColor = "white";
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
    var issues = "https://github.com/KripC2160/findmealinuxdistro/issues";
    window.open(issues);
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
    localStorage.distroToggle = 1;
    changeButtonColor();
}

function TOGGLEDEBIAN(){
    localStorage.distroToggle = 2;
    changeButtonColor();
}

function TOGGLEARCH(){
    localStorage.distroToggle = 3;
    changeButtonColor();   
}

function TOGGLEGENTOO(){
    localStorage.distroToggle = 4;
    changeButtonColor();   
}

function TOGGLEREDHAT(){
    localStorage.distroToggle = 5;
    changeButtonColor();   
}

function TOGGLESUSE(){
    localStorage.distroToggle = 6;
    changeButtonColor();   
}

function TOGGLESLACK(){
    localStorage.distroToggle = 7;
    changeButtonColor();   
}

function TOGGLEOTHER(){
    localStorage.distroToggle = 8;
    changeButtonColor();   
}

function TOGGLEBSD(){
    localStorage.distroToggle = 9;
    changeButtonColor();   
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
