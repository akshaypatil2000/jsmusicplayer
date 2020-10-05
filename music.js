  const songs=[
    {
      name : "_Hum_Mar_Jayenge",
      title : "Hum_Mar_Jayenge",
      artist: "Tulsi Kumar & Arjit Singh",
      img : "aashiqui",
    },
    {
      name : "Ilahi",
      title : "Ilahi",
      artist: "Arjit Singh",
      img : "ilahi",
    },
    {
      name : "Lewis_Capaldi",
      title : "Someone You Loved",
      artist: "Lewis_Capaldi",
      img : "lewis",
    },
    {
      name : "Butterfly",
      title : "Banke tusi butterfly",
      artist: "Jass Manak",
      img : "jass_manak",
    },
    {
      name : "Halsey_&_Khalid",
      title : "Eastside",
      artist: "Halsey & Khalid",
      img : "eastside",
    },
    {
      name : "Pachtaoge",
      title : "Bada Pachtaoge",
      artist: "Arjit Singh",
      img : "arjit_singh",
    },
    {
      name : "Diwane_hum",
      title : "Diwane_hum_nahi_hote",
      artist: "Unknown",
      img : "diwane",
    },
    {
      name : "_Baaton_Ko_Teri__",
      title : "_Baaton_Ko_Teri__",
      artist: "Arjit Singh",
      img : "arjit_singh",
    },
    {
    name : "Friends",
    title : "Friends",
    artist: "Anne Marie",
    img : "anne_marrie1",
  },
    {
      name : "De_De_Pyaar",
      title : "De_De_Pyaar",
      artist: "Arman Malik",
      img : "arman_malik",
    },
    {
      name : "Let_me_love_you",
      title : "Let Me Love You",
      artist: "Justin Bieber",
      img : "justin_bieber",
    },
    {
      name : "Lost_Without_You",
      title : "Lost_Without_You",
      artist: "Ami Mishra",
      img : "halfgirlfriend",
    },
    {
      name : "Bad_girlfriend",
      title : "Bad Girlfriend",
      artist: "Anne Marie",
      img : "anne_marrie2",
    },
    {
      name : "Tum_hi_aana",
      title : "Tum hi Aana",
      artist: "Jubin Nautiyal",
      img : "marjaavaan",
    },
    {
      name : "Agar_tum_saath_ho",
      title : "Agar tum saath ho",
      artist: "Alka Yagnik, Arijit Singh",
      img : "agar_tum_saath_ho",
    },
    {
    name : "Seene_se_tere_sar_Ko",
    title : "Seene se tere sar Ko",
    artist: "Palak Muchhal",
    img : "sarko",
  },
  ];

      const music = document.querySelector('audio');
      const img = document.querySelector('img');
      const play = document.getElementById('play');
      const title = document.getElementById('title');
      const artist = document.getElementById('artist');
      const pre = document.getElementById('pre');
      const next = document.getElementById('next');
      const progress_div = document.getElementById('progress_div');

      let progress = document.getElementById('progress');
      let total_duration = document.getElementById('duration');
      let current_Time = document.getElementById('current_time');

      let isPlaying = false;
      const playMusic = () => {
        isPlaying=true;
        music.play();
        play.classList.replace('fa-play','fa-pause');
        img.classList.add("image");
      }

    const pauseMusic = () =>{
      isPlaying=false;
      music.pause();
      play.classList.replace('fa-pause','fa-play');
      img.classList.remove("image");
    }

  play.addEventListener("click",() =>{
      if(isPlaying){
        pauseMusic();
      }else{
        playMusic();
      }
  });

  const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "images/" + songs.img + ".jpg";
  };
    songsIndex = 0;
   //loadSong(songs[1]);
   const nextSong = () =>{
     songsIndex = (songsIndex + 1) % songs.length;
     loadSong(songs[songsIndex]);
     playMusic();
   };

   const preSong = () =>{
     songsIndex = (songsIndex - 1 + songs.length) % songs.length;
     loadSong(songs[songsIndex]);
     playMusic();
   };

   //progress js work
   music.addEventListener('timeupdate',(event) =>{
     const{currentTime,duration} = event.srcElement;
     /*console.log(event);*/
     let progress_time = (currentTime / duration) * 100;
     progress.style.width = `${progress_time}%`;

     //music duration
     let min_duration = Math.floor(duration / 60 );
     let sec_duration = Math.floor(duration % 60 );

     if(sec_duration < 10){
       sec_duration = `0${sec_duration}`;
     }
     let tot_duration = `${min_duration}:${sec_duration}`;

     if(duration){
     total_duration.textContent = `${tot_duration}`;
   }

   //current duration update
   let min_currentTime = Math.floor(currentTime / 60 );
   let sec_currentTime = Math.floor(currentTime % 60 );
   if(sec_currentTime < 10){
     sec_currentTime = `0${sec_currentTime}`;
   }
   let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
   current_Time.textContent = `${tot_currentTime}`;
   });

    progress_div.addEventListener('click', (event) => {
    const { duration } = music;
    let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    music.currentTime = move_progress;
    });

   music.addEventListener('ended',nextSong);
   next.addEventListener('click',nextSong);
   pre.addEventListener('click',preSong);
