$(document).ready(function(){
    //Using jQuery to toggle the navigation menu

    $(".menu-toggle").click(function(){
        $(".menu-open").toggle(200);
        $(this).toggleClass("close-menu");
    })
});

// getting player controls
let playTrack, pauseTrack, prevTrack, nextTrack, volume, mute, vol;

playTrack = document.getElementById("play");
pauseTrack = document.getElementById("pause");
prevTrack = document.getElementById("prev");
nextTrack = document.getElementById("next");
volume = document.getElementById("volume");
mute = document.getElementById("vol-btn");
vol = 0;

let audioTrack = new Audio();
let i = 0;
let playlist = [
    "audio/Childish Gambino - Feels Like Summer.mp3",
    "audio/Jim Croce - Time in a bottle.mp3",
    "audio/Seal - Kiss From A Rose.mp3"
];
audioTrack.src = playlist[0];

//Looping thru loaded songs when last file plays
audioTrack.addEventListener('ended', function(){
    i = ++i < playlist.length ? i : 0;
    console.log(i);
    audioTrack.src = playlist[i];
    audioTrack.play();
});

// Next track function
function skipTrack(){
    i = ++i < playlist.length ? i : 0;
    console.log(i);
    audioTrack.src = playlist[i];
    audioTrack.play();
}

// Previous track function
function previousTrack(){
    if(i > 0){
        --i;
        console.log(i);
        audioTrack.src = playlist[i];
    }else if(i == 0){
        console.log(i);
        audioTrack.src = playlist[i];
    }
    audioTrack.play();
}

// Play/pause function
let playOrPauseTrack = function(){
    if (audioTrack.paused || audioTrack.ended){
        audioTrack.play();
        pauseTrack.style.display = "block";
        playTrack.style.display = "none";
    }else{
        audioTrack.pause();
        pauseTrack.style.display = "none";
        playTrack.style.display = "block";
    }
    console.log('play or pause clicked');
};

// Click event listeners 
playTrack.addEventListener("click", playOrPauseTrack);
pauseTrack.addEventListener("click", playOrPauseTrack);
nextTrack.addEventListener("click", skipTrack);
prevTrack.addEventListener("click", previousTrack);

// Volume Change & Mute functions
volume.addEventListener("change", function(){
    audioTrack.volume = this.value;
});

mute.addEventListener("click", function(){
    if (!audioTrack.muted){
        vol = volume.value;
    }
    audioTrack.muted = !audioTrack.muted;

    if (audioTrack.muted){
        volume.value = 0;
        mute.style.backgroundImage = "url(images/mute-icon.png)";
    }else{
        volume.value = vol;
        mute.style.backgroundImage = "url(images/volume-icon.png)";
    }
});