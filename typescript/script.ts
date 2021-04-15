

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
    window.open(links[Math.floor(Math.random()*max)]);
}

function changeButtonColor(){
    var color = Math.floor((Math.random() * 9) + 0);
    document.getElementById("random-button").style.background = color_list[color];
}

function backgroundColor(){
    //var color = Math.floor((Math.random() * 9) + 0);
    //document.body.style.background = color_list[color];
}

var links = [
    "https://ubuntu.com/",
    "https://pop.system76.com/",
    "https://www.kali.org/",
    "https://tails.boum.org/",
    "https://www.debian.org/",
    "https://archlinux.org/",
    "https://www.gentoo.org/",
    "https://linuxmint.com/",
    "https://getfedora.org/",
    "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
    "https://os.gnome.org/",
    "https://manjaro.org/",
    "https://chromeenterprise.google/os/",
    "https://xubuntu.org/",
    "https://kubuntu.org/",
    "https://www.raspberrypi.org/software/",
    "https://archiveos.org/redstar/",
    "https://store.steampowered.com/steamos",
];
var max = links.length;