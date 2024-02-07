const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backwards-btn');

playBtn.addEventListener('click', () =>{

    if(playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }

    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
    playBtn.style.outline = 'none';

})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    disk.style.transform = 'rotate(0deg)';
    
    
    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        console.log(music.duration);
        musicDuration.innerHTML = formatTime(music.duration);    
    },300);
}

setMusic(0);

//formatting time in minutes and seconds

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}



// seek-Bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);   
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        forwardBtn.click();
    } 
},500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

const playMusic =  () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.remove('play');
}


//forward and backward btn
forwardBtn.addEventListener('click',()=> {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
    playBtn.focus(); 
})

backwardBtn.addEventListener('click',() => {
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    }
    else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
    playBtn.focus(); 
})

// ... (your existing code)

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent default action (e.g., clicking a focused button)
        playBtn.style.outline = 'none';

        // Your play/pause logic here
        if (playBtn.classList.contains('pause')) {
            music.play();
        } else {
            music.pause();
        }

        playBtn.classList.toggle('pause');
        disk.classList.toggle('play');
    }
});
    
// Event listener for forward/backward on arrow key presses
let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.artist');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backwards-btn');

playBtn.addEventListener('click', () =>{

    if(playBtn.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }

    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
    playBtn.style.outline = 'none';

})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;

    disk.style.transform = 'rotate(0deg)';
    
    
    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        console.log(music.duration);
        musicDuration.innerHTML = formatTime(music.duration);    
    },300);
}

setMusic(0);

//formatting time in minutes and seconds

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}



// seek-Bar
setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);   
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
        forwardBtn.click();
    } 
},500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

const playMusic =  () => {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.remove('play');
}


//forward and backward btn
forwardBtn.addEventListener('click',()=> {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    }
    else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
    playBtn.focus(); 
})

backwardBtn.addEventListener('click',() => {
    if(currentMusic <= 0){
        currentMusic = songs.length -1;
    }
    else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
    playBtn.focus(); 
})

// ... (your existing code)

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent default action (e.g., clicking a focused button)
        playBtn.style.outline = 'none';

        // Your play/pause logic here
        if (playBtn.classList.contains('pause')) {
            music.play();
        } else {
            music.pause();
        }

        playBtn.classList.toggle('pause');
        disk.classList.toggle('play');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        playBtn.click(); // Simulate a click on the play button
    }
});
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        forwardBtn.click(); // Simulate a click on the forward button
    } else if (event.code === 'ArrowLeft') {
        backwardBtn.click(); // Simulate a click on the backward button
    }
});
