console.log('Hallo vanuit JavaScript!');

document.addEventListener('DOMContentLoaded', function () {
  const contentSection = document.querySelector('#content');
  const designSection = document.querySelector('#design');

  const hideText = (section) => {
    const textElement = section.querySelector('.onder-avatar-tekst');
    if (textElement) {
      textElement.style.display = 'none';
    }
    section.removeEventListener('click', clickHandler);
  };

  const clickHandler = (event) => {
    const section = event.currentTarget;
    hideText(section);
  };

  contentSection.addEventListener('click', clickHandler);
  designSection.addEventListener('click', clickHandler);
});

function createCycler(containerId, mediaList) {
  const container = document.getElementById(containerId);
  let index = 0;

  function showMedia(i) {
    container.innerHTML = '';
    const media = mediaList[i];

    if (media.type === 'video') {
      const video = document.createElement('video');
      video.src = media.src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      container.appendChild(video);
    } else {
      const img = document.createElement('img');
      img.src = media.src;
      img.alt = `Media ${i}`;
      container.appendChild(img);
    }
  }

  container.addEventListener('click', () => {
    index = (index + 1) % mediaList.length;
    showMedia(index);
  });

  showMedia(index);
}

// Cycler 1 – Charlies
createCycler('cycler1', [
  { type: 'video', src: 'images/charliesantwerp (2).mp4' },
  { type: 'img', src: 'images/info_charlies.png' },
  { type: 'img', src: 'images/2.png' },
  { type: 'img', src: 'images/3.png' },
  { type: 'img', src: 'images/4.png' },
  { type: 'img', src: 'images/5.png' }
]);

// Cycler 2 – Diede
createCycler('cycler2', [
  { type: 'img', src: 'images/6.png' },
  { type: 'img', src: 'images/info_Diede.png' },
  { type: 'img', src: 'images/7.png' },
  { type: 'img', src: 'images/8.png' },
  { type: 'img', src: 'images/9.png' },
  { type: 'img', src: 'images/10.png' },
  { type: 'img', src: 'images/11.png' }
]);

// Cycler 3 – Birger
createCycler('cycler3', [
  { type: 'img', src: 'images/zwemlesbirger.png' },
  { type: 'img', src: 'images/info_Birger.png' }
]);

// Cycler 4 – Mipa
createCycler('cycler4', [
  { type: 'img', src: 'images/mipa.png' },
  { type: 'img', src: 'images/info_Mipa.png' }
]);


// Eerste cycler: video + afbeeldingen

// Pop-up openen en sluiten via zegel
document.addEventListener('DOMContentLoaded', function () {
  const zegel = document.getElementById('zegel');
  const popup = document.getElementById('contact-popup');
  const close = document.getElementById('close-popup');

  // Open popup
  zegel.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  // Sluit popup via kruisje
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Sluit popup bij klikken buiten het popupvenster
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// Simuleer form verzending
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Bedankt voor je berichtje! Ik neem snel contact met je op 🌸");
  document.getElementById('contact-popup').style.display = 'none';
});
