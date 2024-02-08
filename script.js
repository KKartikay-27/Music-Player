var currentMusic = 0;

if (typeof currentMusic === 'undefined') {
    currentMusic = 0;
}

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

function playMusic() {
    if (music.src && !isNaN(music.duration) && music.duration > 0 && music.paused) {
        music.play().catch(error => {
            console.error('Playback was interrupted:', error);
        });
    }
}

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        playMusic();
    } else {
        music.pause();
    }

    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
    playBtn.style.outline = 'none';
});

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;

    music.pause();
    music.src = song.path;
    music.load();

    music.onloadedmetadata = () => {
        songName.innerHTML = song.name;
        artistName.innerHTML = song.artist;
        disk.style.backgroundImage = `url('${song.cover}')`;
        disk.style.transform = 'rotate(0deg)';
        currentTime.innerHTML = '00:00';
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
        playMusic();
    };
};

// ... (your existing code)

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        playBtn.style.outline = 'none';

        if (playBtn.classList.contains('pause')) {
            playMusic();
        } else {
            music.pause();
        }

        playBtn.classList.toggle('pause');
        disk.classList.toggle('play');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        forwardBtn.click();
    } else if (event.code === 'ArrowLeft') {
        backwardBtn.click();
    }
});
