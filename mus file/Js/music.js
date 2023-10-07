const musicContainer = document.getElementById('audio-container'),
playBtn = document.getElementById('play'),
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');

const audio= document.getElementById('audio'),
progressContainer= document.getElementById('progress-container'),
progress= document.getElementById('progress'),
title = document.getElementById('title'),
cover =document.getElementById('cover');

const congs= ['2-qism','4-qism'];
let songIndex = 0
function loadSong(song) {
     title.innerText = song
     audio.src = `musics/${song}.m4a`
     cover.src = `style/${song}.jpg`
}
loadSong(congs[songIndex])
function playSong () { 
     musicContainer.classList.add('play')
     playBtn.querySelector('i.fas').classList.remove('fa-play')
     playBtn.querySelector('i.fas').classList.add('fa-pause')
     audio.play()
 }
 function pauseSong() {
     musicContainer.classList.remove('play');
     playBtn.querySelector('i.fas').classList.add('fa-play')
     playBtn.querySelector('i.fas').classList.remove('fa-pause')
     audio.pause()
 }
 function prevSong(){
     songIndex--;
    if (songIndex<0) songIndex = congs.length-1
    loadSong(congs[songIndex])
    playSong()
 }
 function nextSong(){
     songIndex++;

    if(songIndex>congs.length-1) songIndex = 0
    loadSong(congs[songIndex])
    playSong()
 }
 function updateProgress (e){
 const{duration ,currentTime} = e.srcElement;
 const progressPrecent =(currentTime/duration)*100;
 progress.style.width = `${progressPrecent}%`
 
 }
 function setProgress(e){
     const width = this.clientWidth
     const clickX = e.offsetX;
     const duration =audio.duration
     audio.currentTime= (clickX/width)*duration
 }
 playBtn.addEventListener('click', ()=>{
     const isPlaying = musicContainer.classList.contains('play')
   if(isPlaying){
     pauseSong()
   }else{
      playSong()    
     }
 })
 prevBtn.addEventListener('click' ,prevSong)
 nextBtn.addEventListener('click' ,nextSong)
 audio.addEventListener("timeupdate" , updateProgress)
 progressContainer.addEventListener("click", setProgress)
 audio.addEventListener('ended' ,nextSong)