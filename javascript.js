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

  function showIllustraties() {
    document.querySelectorAll('.fie-media').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = el.classList.contains('left') ? 'translateX(-30%)' : 'translateX(30%)';
    });
  }

  function hideIllustraties() {
    document.querySelectorAll('.fie-media').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(0)';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const zegel = document.getElementById('zegel');
    const popup = document.getElementById('popup');
    const close = document.querySelector('.popup .close');
  
    zegel.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  
    close.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    // Sluit popup bij klikken buiten het venster
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  });

  // Open en sluit pop-up
document.getElementById('zegel').addEventListener('click', function () {
  document.getElementById('contact-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function () {
  document.getElementById('contact-popup').style.display = 'none';
});

// Simuleer form verzending
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Bedankt voor je berichtje! Ik neem snel contact met je op 🌸");
  document.getElementById('contact-popup').style.display = 'none';
});

  

