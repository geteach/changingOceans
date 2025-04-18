function hideLayers() {
    var folderElems = document.getElementsByClassName("setFolders");
    var hideElems = document.getElementsByClassName("hidelink");
    for(var i=0; i<folderElems.length;i++) { folderElems[i].click(); }
    for(var i=0; i<hideElems.length;i++) { hideElems[i].click(); }
}

//Scans for Unchecked and Checked...sets overlays accordingly
function toggleSet() {
    let toggleOn = document.getElementsByClassName('layerToggle');
    for (let i = 0; i < toggleOn.length; i++) {
        if (toggleOn[i].checked) {
            document.getElementById(toggleOn[i].id + 'Show').click();

        } else {
            document.getElementById(toggleOn[i].id + 'Hide').click();
        }
    };
};

//Scans for Unchecked and Checked...sets overlays accordingly
function radioSet() {
    let radioToggleOn = document.getElementsByClassName('radioToggle');
    let hideElems = document.getElementsByClassName("hidelink");
    for (let i = 0; i < hideElems.length; i++) { hideElems[i].click(); }
    for (let i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            document.getElementById(radioToggleOn[i].id + 'Show').click();
        }
    };
    toggleSet();
};

function radioToggleSet() {
    let radioToggleOn = document.getElementsByClassName('radioToggle');
    for (let i = 0; i < radioToggleOn.length; i++) {
        if (radioToggleOn[i].checked) {
            radioToggleOn[i].click();
        }
        radioSet();
    };
};
//Toggle Buttons Eventlistern class=layerToggle
let toggleClick = document.getElementsByClassName("layerToggle");

for (let i = 0; i < toggleClick.length; i++) {
    toggleClick[i].addEventListener('click', toggleSet, false);
};

//Radio Button Eventlistern class=radioToggle
let radioToggleClick = document.getElementsByClassName("radioToggle");

for (let i = 0; i < radioToggleClick.length; i++) {
    radioToggleClick[i].addEventListener('click', radioToggleSet, false);
};

//Carousel script
function carousel() {
let slideIndex = 1;
let slideClass = document.getElementsByClassName('slideshow-container');
if (slideClass.length > 0) {
    showSlides(slideIndex);


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("activeSlide");
        }
    
        slides[slideIndex - 1].classList.add("activeSlide");
    }
    //Plus Carousel Eventlistern class=plusSlidesClass
    let plusSlidesClass = document.getElementsByClassName("plusSlidesClass");
    for (let i = 0; i < plusSlidesClass.length; i++) {
        plusSlidesClass[i].addEventListener('click', function () {
            plusSlides(1);
			changeOverlay();
        }, false);
    };
    //Minus Carousel Eventlistern class=minusSlidesClass
    let minusSlidesClass = document.getElementsByClassName("minusSlidesClass");
    for (let i = 0; i < minusSlidesClass.length; i++) {
        minusSlidesClass[i].addEventListener('click', function () {
            plusSlides(-1);
			changeOverlay();
        }, false);
    };
};

    function changeOverlay() {
        let LinkHide = document.getElementsByClassName('hidelink');
        for (let i = 0; i < LinkHide.length; i++) {
            LinkHide[i].click();
        }
    
        let mySlidesBlock = document.getElementsByClassName('mySlides');
        for (let n = 0; n < mySlidesBlock.length; n++) {
            if (mySlidesBlock[n].classList.contains("activeSlide")) {
                let overlayClick = mySlidesBlock[n].getAttribute('value');
                document.getElementById(overlayClick).click();
            }
        }
    };
};

//Video mediaPlay
let mediaPlay = document.getElementsByClassName("mediaPlay");
for (let i = 0; i < mediaPlay.length; i++) {
    mediaPlay[i].addEventListener('click', playPause, false);
};

let startTimeMS = 0;
let timerId;

function setOverlayDisplay(display) {
    let overlays = document.getElementsByClassName("playoverlay");
    for (let i = 0; i < overlays.length; i++) {
        overlays[i].style.display = display;
    }
};

function playPause() {
    const playIcon = document.getElementById('playIcon');
    const playButton = document.getElementById('playButton');
    if (playIcon.innerHTML !== '<i class="material-icons">play_arrow</i>') {
        getRemainingTime();
        playIcon.innerHTML = '<i class="material-icons">play_arrow</i>';
        playButton.innerHTML = 'Play';
        setOverlayDisplay("block");
    } else {
        playIcon.innerHTML = '<i class="material-icons">pause</i>';
        playButton.innerHTML = 'Pause';
        playTour();
        setOverlayDisplay("none");
    }
};

function playTour() {
    let videoI = document.getElementById("videoI");
    if (document.getElementById('playIcon').innerHTML !== '<i class="material-icons">play_arrow</i>') {
        startTimeMS = (new Date()).getTime();
        videoI.play();
    }

    videoI.onended = function() {
        videoI.load();
        document.getElementById('playIcon').innerHTML = '<i class="material-icons">play_arrow</i>';
        document.getElementById('playButton').innerHTML = 'Play';
        setOverlayDisplay("block");
    };
};

function getRemainingTime() {
    window.clearTimeout(timerId);
    document.getElementById("videoI").pause();
};

//Audio audioPlay
let audioPlay = document.getElementsByClassName("audioPlay");

for (let i = 0; i < audioPlay.length; i++) {
    audioPlay[i].addEventListener('click', playPauseAudio, false);
};

function playPauseAudio() {
    let audio = document.getElementById("audioI");
    let playIcon = document.getElementById("playIcon");
    let playButton = document.getElementById("playButton");

    if (!audio || !playIcon || !playButton) return; // Safety check

    const isPlaying = playIcon.innerHTML === '<i class="material-icons">pause</i>';

    if (!isPlaying) {
        playIcon.innerHTML = '<i class="material-icons">pause</i>';
        playButton.innerHTML = 'Pause';
        audio.play();
    } else {
        playIcon.innerHTML = '<i class="material-icons">play_arrow</i>';
        playButton.innerHTML = 'Play';
        audio.pause();
    }
    audio.onended = function () {
        playIcon.innerHTML = '<i class="material-icons">play_arrow</i>';
        playButton.innerHTML = 'Play';
    };
};