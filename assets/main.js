AOS.init({

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

// Video Preview Section Functionality
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('playButton').addEventListener('click', function (event) {
      event.preventDefault();

      document.getElementById('playButton').style.display = 'none';
      document.querySelector('.video-overlay img').style.opacity = '0';

      document.getElementById('videoContainer').style.display = 'block';

      // Playing the video
      document.getElementById('projectVideo').play();
  });
});