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
    // Play the music if it's ready and not already playing
    if (!isNaN(music.duration) && music.duration > 0 && music.paused) {
        music.play().catch(error => {
            console.error('Playback was interrupted:', error);
        });
    }
}

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        // Play the music when there is a user click
        music.play().catch(error => {
            console.error('Playback was interrupted:', error);
        });
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

    // Pause the current audio before changing the source
    music.pause();

    // Set the new music source
    music.src = song.path;

    // Load the metadata and update UI elements
    music.load();

    // Update UI elements after metadata is loaded
    music.onloadedmetadata = () => {
        // Update UI elements
        songName.innerHTML = song.name;
        artistName.innerHTML = song.artist;
        disk.style.backgroundImage = `url('${song.cover}')`;
        disk.style.transform = 'rotate(0deg)';
        currentTime.innerHTML = '00:00';
        seekBar.max = music.duration;

        // Update the song duration after metadata is loaded
        musicDuration.innerHTML = formatTime(music.duration);

        // Play the music if it's ready
        playMusic();
    };
};

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
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
        forwardBtn.click(); // Simulate a click on the forward button
    } else if (event.code === 'ArrowLeft') {
        backwardBtn.click(); // Simulate a click on the backward button
    }
});

// ... (your existing code)
