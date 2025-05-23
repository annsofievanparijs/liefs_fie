console.log('Hallo vanuit JavaScript!');
// Eerste cycler: video + afbeeldingen
const cycler1Media = [
    { type: 'video', src: "images/charliesantwerp (2).mp4" },
    { type: 'img', src: "images/2.png" },
    { type: 'img', src:  "images/3.png"},
    { type: 'img', src:  "images/4.png"},
    { type: 'img', src:  "images/5.png"},
  ];
  
  let cycler1Index = 0;
  const cycler1 = document.getElementById('cycler1');
  
  function toonMedia1(index) {
    cycler1.innerHTML = '';
    const media = cycler1Media[index];
  
    if (media.type === 'video') {
      const video = document.createElement('video');
      video.src = media.src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      cycler1.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = media.src;
      img.alt = `Afbeelding ${index}`;
      cycler1.appendChild(img);
    }
  }
  
  cycler1.addEventListener('click', () => {
    cycler1Index = (cycler1Index + 1) % cycler1Media.length;
    toonMedia1(cycler1Index);
  });
  
  // Init eerste media
  toonMedia1(cycler1Index);
  
  // Tweede cycler: alleen afbeeldingen
  const cycler2Media = [
    'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png'
  ];
  
  let cycler2Index = 0;
  const cycler2Img = document.getElementById('img2');
  
  document.getElementById('cycler2').addEventListener('click', () => {
    cycler2Index = (cycler2Index + 1) % cycler2Media.length;
    cycler2Img.src = cycler2Media[cycler2Index];
  });
