//testing keyboardevent  for now
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio); // should log the keyevent object
    if (!audio) return; //stop the fn
    audio.currentTime = 0;

    audio.play();
    key.classList.add('playing');
});


