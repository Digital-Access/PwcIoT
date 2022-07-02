const config = {
    videos: [
        "https://a.storyblok.com/f/117027/960x540/58b82fa92f/iot-tmt-challenge-aaux_esg-1.png",
        "https://a.storyblok.com/f/117027/960x540/8cb89ed0b4/iot-tmt-challenge-aaux_esg-2.png",
        "https://a.storyblok.com/f/117027/960x540/dcb2dc189d/iot-tmt-challenge-aaux_esg-3.png"
    ],
    next_button: "Next slide",
    previous_button: "Previous slide",
    progress_text: "Slide"
}

const nxtBtn = document.getElementById('nxtBtn');
const prevBtn = document.getElementById('prevBtn');
const video = document.getElementById('video');
const progress = document.getElementById('progress');
const total = document.getElementById('total');
const progressText = document.getElementById('progressText');
const navCntrl = document.getElementById('navCntrl');
const progressDetails = document.getElementById('progressDetails')

progressText.innerText = config.progress_text;
total.textContent = config.videos.length;
nxtBtn.textContent = config.next_button;
prevBtn.textContent = config.previous_button;
video.src = config.videos[0];

let i = 0;
progress.textContent = i + 1;
prevBtn.style.display = 'none'
navCntrl.style.justifyContent = 'flex-end'

let max = config.videos.length;
const nextVideo = () => {
    if (i < max - 1) {
        i++
        video.src = config.videos[i];
    }

    if(i === max -1){
        nxtBtn.style.display = 'none'
    }

    progress.textContent = i + 1;
    prevBtn.style.display = 'flex'
    navCntrl.style.justifyContent = 'space-between'
}

nxtBtn.addEventListener('click', nextVideo)


const prevVideo = () => {
    if (i != 0) {
        i--
        video.src = config.videos[i];
        nxtBtn.style.display = 'flex';
    } 

    if(i === 0){
        prevBtn.style.display = 'none'
        navCntrl.style.justifyContent = 'flex-end'
    }

    progress.textContent = i + 1;
}

prevBtn.addEventListener('click', prevVideo)

if (config.videos.length === 1 || config.videos[i] === "") {
    nxtBtn.style.display = 'none'
    prevBtn.style.display = 'none'
    navCntrl.style.justifyContent = 'center'
    navCntrl.style.padding = '1.25rem 0 1.25rem 0'
}
