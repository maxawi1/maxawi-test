function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  scrollFunction();
};

const images = [
    { src: "./images/maxresdefault.webp", title: "US Open: Jack Draper advances to maiden Grand Slam quarter-final as he crushes Tomas Machac", url: "./SinglePage.html"},
    { src: "./images/p1.webp", title: "Scotland 2-3 Poland: Stoppage-time penalty sees Scots fall to defeat in Nations League opener", url: "./SinglePage.html"},
    { src: "./images/p2.webp", title: "Ben Stokes reviews the summer: 'Greatest' Joe Root, 'amazing'", url: "./SinglePage.html"},
    { src: "./images/p3.webp", title: "NFL 2024 expert predictions NFL team make their MVP.", url: "./SinglePage.html"},
    { src: "./images/p4.webp", title: "Angel Gomez: Details of the rise of England's new midfielder", url: "./SinglePage.html"}
];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      }
      
      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
      
      const imageElements = images.map(img => `
        <div class="swiper-slide">
          <a href="${img.url}" target="">
            <img src="${img.src}" alt="${img.title}">
            <div class="image-info">
              <h3>${img.title}</h3>
            </div>
          </a>
        </div>
      `).join("");
      
      document.querySelector('.swiper-wrapper').innerHTML = imageElements;
      
      const transitionTime = 5000;

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: transitionTime,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });


      window.onscroll = function() {scrollFunction()};

      