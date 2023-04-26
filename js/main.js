// 모바일 넓이일때 gnb

const snbWrapLi = document.querySelectorAll('.snb_wrap>ul>li');
const snbsubul = document.querySelectorAll('.snb_wrap li div>ul');

function deactivateAllSubmenus() {
  for (let ul of snbsubul) {
    ul.classList.remove('on');
  }
}

function toggleSubmenu() {
  const mediaQuery = window.matchMedia('(min-width: 0px) and (max-width: 1023px)');

  for (let j = 0; j < snbWrapLi.length; j++) {
    snbWrapLi[j].addEventListener("click", (e) => {
      if (mediaQuery.matches) {
        e.preventDefault();
        if (snbsubul[j].classList.contains("on")) {
          snbsubul[j].classList.remove("on");
        } else {
          deactivateAllSubmenus();
          snbsubul[j].classList.add("on");
        }
      }
    });
  }
}

toggleSubmenu();

window.addEventListener('resize', toggleSubmenu);


// for (var j = 0; j < snbWrapLi.length; j++) {
//   snbWrapLi[j].addEventListener("click", (e) => {
//     const windowWidth = window.innerWidth;

//     if (windowWidth >= 836 && windowWidth <= 1023) {
//       e.currentTarget;
//       for (let i = 0; i < snbWrapLi.length; i++) {
        // if (snbsubul[i].classList.contains("on")) {
        //   snbsubul[i].classList.remove("on");
        // } else {
        //   snbsubul[i].classList.add("on");
        // }
//       }
//     }
//   });
// }




// gnb
const gnbMenu = document.querySelectorAll("nav.gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");

for(var i=0;i<gnbMenu.length;i++){
  gnbMenu[i].addEventListener("mouseover", e=>{
    e.currentTarget.classList.add("on") //e=li
    headerWrap.style.height = `${390+98}px`;
    var ht = e.currentTarget.children[1].offsetHeight; //높이값
    console.log(ht);
    
  })

  gnbMenu[i].addEventListener("mouseout", e=>{
    e.currentTarget.classList.remove("on");
    headerWrap.style.height = `98px`;
  })
}





//햄버거버튼 누르면 메뉴
  const $menuBtn = document.querySelector(".menu-btn");
  const snbwrap = document.querySelector(".snb_wrap");
  const dark = document.querySelector("#dark")
  let isMenuOpen = false;
  $menuBtn.addEventListener("click", () => {
    if (!isMenuOpen) {
      $menuBtn.classList.add("open");
      snbwrap.classList.add("on");
      dark.classList.add("on")
    } else {
      $menuBtn.classList.remove("open");
      snbwrap.classList.remove("on");
      dark.classList.remove("on")
    }
  
    isMenuOpen = !isMenuOpen;
  });

  
// 로딩바
const loadingBar = document.getElementById("loading-bar");
const pageIndicator = document.getElementById("page-indicator");
const prevBtn = document.getElementById("prev-btn");
const pausePlayBtn = document.getElementById("pause-play-btn");
const nextBtn = document.getElementById("next-btn");

let width = 0;
let currentPage = 1;
const totalPages = 2;
let isPaused = false;

function updatePageIndicator() {
  pageIndicator.textContent = currentPage.toString().padStart(2, "0") + "/0" + totalPages;
}

function fillLoadingBar() {
  width = 0;
  const interval = setInterval(() => {
    if (isPaused) {
      clearInterval(interval);
      return;
    }

    if (width >= 140) {
      clearInterval(interval);
      currentPage++;
      if (currentPage > totalPages) {
        currentPage = 1;
      }
      updatePageIndicator();
      setTimeout(fillLoadingBar, 1000);
    } else {
      width++;
      loadingBar.style.width = width + "px";
    }
  }, 17.5);
}

prevBtn.addEventListener("click", () => {
  currentPage--;
  if (currentPage < 1) {
    currentPage = totalPages;
  }
  updatePageIndicator();
});

pausePlayBtn.addEventListener("click", () => {
  isPaused = !isPaused;
  if (!isPaused) {
    fillLoadingBar();
  }
});

nextBtn.addEventListener("click", () => {
  currentPage++;
  if (currentPage > totalPages) {
    currentPage = 1;
  }
  updatePageIndicator();
});

updatePageIndicator();
fillLoadingBar();

//content1 그림슬라이드
// scripts.js
(function() {
  const slideContainer = document.querySelector('.slide-container');
  let currentSlide = 1;

  function slideTransition() {
    currentSlide = currentSlide === 1 ? 2 : 1;
    const translateX = currentSlide === 1 ? '0%' : '-50%';
    slideContainer.style.transform = `translateX(${translateX})`;
  }

  setInterval(slideTransition, 3000);
})();





//content2 롤링배너

const buttons = document.querySelectorAll(".buttons button")
console.log(buttons)
const bannerli = document.querySelector(".rollbanner li")
console.log(bannerli)
let clickCount = 0;

buttons[3].addEventListener("click", (e) => {
  e.preventDefault();
  clickCount = (clickCount + 1) % 3;
  bannerli.style.transform = `translateX(-1190 * ${clickCount}px)`;
});


  
// 그래프좌표표시
  document.addEventListener("mousemove", function(event) {
    var x = event.clientX;
    var crosshairX = document.getElementById("crosshairX");
    crosshairX.style.left = x-"510"/*<-이거 값조절해가면서 교차점 맞추시면 됩니다.*/ + "px"; 
    var y = event.clientY;
          // 수평선의 위치를 업데이트합니다.
          var line = document.getElementById("y-coordinate");
          line.style.top = y-"730"/*<-이거 값조절해가면서 교차점 맞추시면 됩니다.*/ + "px"; 
  });


//스크롤 작동
let sections = document.querySelectorAll("section");
let devHeight;
devHeight = window.innerHeight;
console.log(devHeight);

if (window.matchMedia("(min-width: 1023px)").matches) {
  window.addEventListener("resize", () => {
    devHeight = window.innerHeight;
    console.log(devHeight);
  });

  for (let i = 0; i < sections.length; i++) {
    sections[i].style.height = `${devHeight}px`;
  }

  for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("wheel", function (e) {
      if (e.deltaY < 0) { //scroll up
        let prev = e.currentTarget.previousElementSibling.offsetTop;
        console.log(prev);

        window.scroll({
          top: prev,
          left: 0,
          behavior: "smooth"
        });
        for (let i = 0; i < sections.length; i++) {
          if (prev >= i * devHeight && prev < (1 + i) * devHeight) {

          }
        }
      } else if (e.deltaY > 0) { //scroll down
        let next = e.currentTarget.nextElementSibling.offsetTop;
        console.log(next);
        window.scroll({
          top: next,
          left: 0,
          behavior: "smooth"
        });
        for (let i = 0; i < sections.length; i++) {
          if (next >= i * devHeight && next < (1 + i) * devHeight) {

          }
        }
      }
    });
  }
}

// .gnb li를 클릭할때 스크롤이 section 높이값만큼씩 움직이게
let lis = document.querySelectorAll(".scrollbar>li")

for (let k=0;k<lis.length;k++){
  lis[k].addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: devHeight*k,
      left: 0,
      behavior : "smooth"
    })
  activation(k,lis)
    
  })
}

function activation(index, list){
  for(let el of list){
    el.classList.remove("on", "active");
  }
  list[index].classList.add("on","active");
}
