// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('nav a');

//     // Add click event listener to each navigation link
//     navLinks.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();

//             // Remove 'active' class from all links
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });

//             // Add 'active' class to the clicked link
//             this.classList.add('active');

//             // Scroll to the target section smoothly
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Highlight the active link based on the current page
//     const currentPath = window.location.pathname;
//     const currentPage = currentPath.split('/').pop();

//     navLinks.forEach(link => {
//         const linkPath = link.getAttribute('href').split('/').pop();
//         if (linkPath === currentPage) {
//             link.classList.add('active');
//         }
//     });
// });
function zoomImage(img) {
    var overlay = document.getElementById('overlay');
    var zoomContainer = document.getElementById('zoom-container');
    var zoomedImage = document.getElementById('zoomed-image');
  
    overlay.style.display = 'block';
    zoomContainer.style.display = 'block';
    zoomedImage.src = img.src;
  
    document.body.style.overflow = 'hidden'; // Disable scrolling when zoomed
  }
  
  function closeZoom() {
    var overlay = document.getElementById('overlay');
    var zoomContainer = document.getElementById('zoom-container');
  
    overlay.style.display = 'none';
    zoomContainer.style.display = 'none';
  
    document.body.style.overflow = 'auto'; // Enable scrolling again
  }
  