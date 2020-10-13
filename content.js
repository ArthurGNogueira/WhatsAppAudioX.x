const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');
    if(header){

        const divAxx = document.createElement("div");
        divAxx.innerHTML = `<div class="dropdown">
        <button class="dropbtn">x</button>
        <div class="dropdown-content">
        <a class="aa" href="#" onclick="audioRate(1)">1x</a>
        <a class="aa" href="#" onclick="audioRate(1.25)">1.25x</a>
        <a class="aa" href="#" onclick="audioRate(1.5)">1.5x</a>
        <a class="aa" href="#" onclick="audioRate(1.75)">1.75x</a>
        <a class="aa" href="#" onclick="audioRate(2)">2x</a>
        </div>
        </div>`;

        header.appendChild(divAxx);

        const btn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');
        btn.addEventListener('click', () =>{
            btn.classList.toggle('background-g');
            dropdownContent.classList.toggle('block');
        });
        console.log(header);
        clearInterval(interval);
    }
}, 1000);


document.addEventListener('DOMContentLoaded', function(){
    function audioRate(rate){
        console.log("rate");
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio) => {
            audio.playbackRate = rate
        });
    }
    audioRate(1);
})



