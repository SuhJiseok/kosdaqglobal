(function() {
  const slideContainer = document.querySelector('.slide-container');
  const prevBtn = document.getElementById('prevBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const nextBtn = document.getElementById('nextBtn');
  const loadingBar = document.querySelector('.loading-bar');
  const currentPage = document.querySelector('.current-page');
  let currentSlide = 1;
  let intervalId;

  function slideTransition(slideNum) {
    currentSlide = slideNum;
    const translateX = currentSlide === 1 ? '0%' : '-50%';
    slideContainer.style.transform = `translateX(${translateX})`;

    // 현재 페이지 업데이트
    currentPage.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide;

    // 로딩바 완료 후 페이지 이동
    if (loadingBar.style.width === '100%') {
      loadingBar.style.width = '0%';
      currentSlide = currentSlide === 1 ? 2 : 1;
      const translateX = currentSlide === 1 ? '0%' : '-50%';
      slideContainer.style.transform = `translateX(${translateX})`;
      currentPage.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
    }
  }
  
  function startSlider() {
    intervalId = setInterval(() => {
      slideTransition(currentSlide === 1 ? 2 : 1);
    }, 3000);
    loadingBarAnimation();
  }

  function stopSlider() {
    clearInterval(intervalId);
    clearInterval(loadingBarIntervalId);
  }

  let loadingBarIntervalId;
  function loadingBarAnimation() {
    let width = 0;
    loadingBar.style.width = '0%';
    clearInterval(loadingBarIntervalId);
    loadingBarIntervalId = setInterval(() => {
      if (width >= 100) {
        clearInterval(loadingBarIntervalId);
        setTimeout(() => {
          width = 0;
          loadingBar.style.width = '0%';
          loadingBarAnimation();
        }, 500);
      } else {
        width++;
        loadingBar.style.width = width + '%';
      }
    }, 30);
  }
  


  prevBtn.addEventListener('click', () => {
    stopSlider();
    slideTransition(currentSlide === 1 ? 2 : 1);
    loadingBarAnimation();
  });

  nextBtn.addEventListener('click', () => {
    stopSlider();
    slideTransition(currentSlide === 1 ? 2 : 1);
    loadingBarAnimation();
  });

  let isPlaying = true;
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopSlider();
    } else {
      startSlider();
    }
    isPlaying = !isPlaying;
  });

  startSlider();
})();
