
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
    "audio/Jim Croce - Time in a bottle.mp3",
    "audio/Seal - Kiss From A Rose.mp3",
    "audio/Childish Gambino - Feels Like Summer.mp3"
];
audioTrack.src = playlist[0];

//Looping thru loaded songs when last file plays
audioTrack.addEventListener('ended', function(){
    i = ++i < playlist.length ? i : 0;
    audioTrack.src = playlist[i];
    audioTrack.play();
});

// Next track function
function skipTrack(){
    i = ++i < playlist.length ? i : 0;
    audioTrack.src = playlist[i];
    playOrPauseTrack();
}

// Previous track function
function previousTrack(){
    if(i > 0){
        --i;
        audioTrack.src = playlist[i];
    }else if(i == 0){
        audioTrack.src = playlist[i];
    }
    playOrPauseTrack();
    
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

// Playlist starts over and now playing image changes
let stationCards = document.getElementsByClassName("card-img");
let nowPlaying = document.getElementById("np-image")

for (let i = 0; i < stationCards.length; i++){
    let button = stationCards[i]
    button.addEventListener("click", stationCardClicked)
}

function stationCardClicked(event){
    let button = event.target
    var coverImage = button.src
    nowPlaying.style.backgroundImage = "url(" + coverImage + ")"
    audioTrack.src = playlist[0]
    playOrPauseTrack()
}
