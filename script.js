let currentMusic = 0;
        const audio = document.getElementById('audio');
        const seekBar = document.querySelector('.seek-bar');
        const songName = document.querySelector('.song-name');
        const artistName = document.querySelector('.artist');
        const disk = document.querySelector('.disk');
        const currentTime = document.querySelector('.current-time');
        const musicDuration = document.querySelector('.song-duration');
        const playBtn = document.querySelector('.play-btn');
        const forwardBtn = document.querySelector('.forward-btn');
        const backwardBtn = document.querySelector('.backwards-btn');

        const songs = [
            {
                name: 'Kinni Kinni',
                path: 'Assets/Music/Kinni Kinni.mp3',
                artist: 'Diljit Dosanjh',
                cover: 'Assets/Cover/Kinni Kinni.jpg'
            },
            {
                name: 'Softly',
                path: 'Assets/Music/Softly.mp3',
                artist: 'Karan Aujla',
                cover: 'Assets/Cover/Softly.jpg'
            },
            // Add more songs as needed
        ];

        function setMusic(i) {
            seekBar.value = 0;
            let song = songs[i];
            currentMusic = i;
            audio.src = song.path;
            songName.innerHTML = song.name;
            artistName.innerHTML = song.artist;
            disk.style.backgroundImage = `url('${song.cover}')`;
            disk.style.transform = 'rotate(0deg)';
            currentTime.innerHTML = '00:00';

            audio.load();
        }

        function playPause() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            playBtn.classList.toggle('pause');
            disk.classList.toggle('play');
            playBtn.style.outline = 'none';
        }

        function forward() {
            currentMusic = (currentMusic + 1) % songs.length;
            setMusic(currentMusic);
            audio.play();
        }

        function backward() {
            currentMusic = (currentMusic - 1 + songs.length) % songs.length;
            setMusic(currentMusic);
            audio.play();
        }

        playBtn.addEventListener('click', playPause);
        forwardBtn.addEventListener('click', forward);
        backwardBtn.addEventListener('click', backward);

        // Update song duration and current time
        audio.addEventListener('loadedmetadata', () => {
            seekBar.max = audio.duration;
            musicDuration.innerHTML = formatTime(audio.duration);
        });

        // Update current time during playback
        setInterval(() => {
            if (!audio.paused) {
                seekBar.value = audio.currentTime;
                currentTime.innerHTML = formatTime(audio.currentTime);
            }
        }, 500);

        // Seek bar change event
        seekBar.addEventListener('change', () => {
            audio.currentTime = seekBar.value;
        });

        function formatTime(time) {
            let min = Math.floor(time / 60);
            if (min < 10) {
                min = `0${min}`;
            }
            let sec = Math.floor(time % 60);
            if (sec < 10) {
                sec = `0${sec}`;
            }
            return `${min}:${sec}`;
        }
