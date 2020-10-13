const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');
    if(header){

        const divAxx = document.createElement("div");
        divAxx.innerHTML = `<div class="dropdown">
        <button class="dropbtn">
        <svg version="1.1" id="fastBtn" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 192.689 192.689" style="enable-background:new 0 0 192.689 192.689;" xml:space="preserve">
            <g>
                <g id="Double_Chevron_Right">
                    <path d="M188.527,87.755l-83.009-84.2c-4.692-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.54,75.61
                        l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179c4.704,4.74,12.319,4.74,17.011,0l82.997-84.2
                        C193.05,100.375,193.062,92.327,188.527,87.755z"/>
                    <path d="M104.315,87.755l-82.997-84.2c-4.704-4.74-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l74.528,75.61
                        l-74.54,75.61c-4.704,4.74-4.704,12.439,0,17.179s12.319,4.74,17.011,0l82.997-84.2C108.838,100.375,108.85,92.327,104.315,87.755
                        z"/>
                </g>
            </g>
        </svg>
        </button>
        <div class="dropdown-content">
        <a class="aa" href="#" id="1">1x</a>
        <a class="aa" href="#" id="1.25">1.25x</a>
        <a class="aa" href="#" id="1.5">1.5x</a>
        <a class="aa" href="#" id="1.75">1.75x</a>
        <a class="aa" href="#" id="2">2x</a>
        </div>
        </div>`;

        header.appendChild(divAxx);

        const btn = document.querySelector('.dropbtn');
        const dropdownContent = document.querySelector('.dropdown-content');
        btn.addEventListener('click', () =>{
            btn.classList.toggle('background-g');
            dropdownContent.classList.toggle('block');
        });

        const rates = document.querySelectorAll(".aa");
        rates.forEach((rateSelec) => {
            rateSelec.addEventListener('click', function (){
                audioRate(this.id);
                
            })
        });
        function audioRate(rate){
            const audios = document.querySelectorAll("audio");
                audios.forEach((audio) => {

                    audio.playbackRate = rate; 

                });
        }
        console.log(header);
        clearInterval(interval);
    }
}, 1000);




