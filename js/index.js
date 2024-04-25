const log = console.log.bind()
// Get the modal
var modal = document.getElementById("modal");
var body = document.getElementById('body');

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  body.style.overflowY = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Function to open the modal
function popRef() {
  modal.style.display = "block";
  body.style.overflowY = "hidden";
}
var slides = ['Student 1', 'Student 2', 'Student 3'];

var swiper = new Swiper('.sl-slider', {
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 0,
  allowTouchMove: false,
  initialSlide: 0,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.sl-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<a href="#' + slides[index].toLowerCase().replace(/ /g, '-') + '" class="' + className + ' pagination index' + index + '">' + slides[index] + '</a>';
    },
  },
});

// Function to scroll to the slide based on hash
function scrollToSlide(hash) {
  var slideIndex = slides.findIndex(function (slide) {
    return slide.toLowerCase().replace(/ /g, '_') === hash.replace('#', '');
  });
  if (slideIndex !== -1) {
    swiper.slideTo(slideIndex);
    setTimeout(function () {
      document.getElementById('s-slider').scrollIntoView();
    }, 500); // Adjust the delay as needed

    // Update pagination active state
    updatePaginationActiveState(slideIndex);
  }
}

// Check if URL has a hash that matches a slide when the page loads
window.onload = function () {
  var hash = window.location.hash;
  if (hash) {
    scrollToSlide(hash);
  }
};

// Click event for pagination links
$('.sl-pagination').on('click', 'a', function (event) {
  var slideIndex = $(this).index();
  var slideName = slides[slideIndex].replace(/ /g, '-'); // Replace spaces with hyphens
  var hash = `#${slideName}`;

  // Update the hash in the URL
  window.location.hash = hash;

  // Scroll to the #s-slider element
  document.getElementById('s-slider').scrollIntoView();

  // Wait for the scroll to finish before changing the slide
  setTimeout(function () {
    swiper.slideTo(slideIndex);
  }, 100);

  // Update pagination active state
  updatePaginationActiveState(slideIndex);
});

// Click event for custom dropdown links
$('.sl-dd-link').on('click', function (event) {
  var slideIndex = $(this).data('slide') - 1; // Adjusted to match the index starting from 0
  var slideName = slides[slideIndex].replace(/ /g, '-'); // Replace spaces with hyphens
  var hash = `#${slideName}`;

  // Update the hash in the URL
  window.location.hash = hash;

  // Wait for the hashchange event to trigger the slide change
});

// Hashchange event to slide to a hash's slide
$(window).on('hashchange', function () {
  var hash = window.location.hash;
  if (hash && slides.includes(hash.replace('#slide', '').replace(/_/g, ' '))) {
    var slideIndex = slides.indexOf(hash.replace('#slide', '').replace(/_/g, ' '));
    swiper.slideToLoop(slideIndex); // Use slideToLoop instead of slideTo

    // Update pagination active state
    updatePaginationActiveState(slideIndex);
  }
});

// Function to update pagination active state
function updatePaginationActiveState(slideIndex) {
  swiper.slideTo(slideIndex); // Slide to the specified index
}



// Get the image modal
var imageModal = document.getElementById("img-modal");

var blurb = imageModal.querySelector(".blurb");
var images = document.querySelectorAll(".image-container img");
var images2 = document.querySelectorAll(".ex-2-image-container img");
var images3 = document.querySelectorAll(".sl-i-c img");
var images4 = document.querySelectorAll(".sl-i-c-2 img");
var images5 = document.querySelectorAll(".sw-ig-c img");
var images6 = document.querySelectorAll(".pr-ul-c-c img");
var images7 = document.querySelectorAll(".pr-i-c img");
var images8 = document.querySelectorAll(".tp-i-c img");
var images9 = document.querySelectorAll(".sl-ig-c img");
var images10 = document.querySelectorAll(".sl-s-c-i-c img");
var images11 = document.querySelectorAll(".sa-i-c img");
var images12 = document.querySelectorAll(".ris img");
var images13 = document.querySelectorAll(".sl-wqi-c img");
var images14 = document.querySelectorAll(".tp-sai-c img");

// Get the close button for the image modal
var imageCloseButton = document.querySelector(".i-c");

// Loop through the images of the first exhibit to add click event listeners
images.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

// Loop through the images of the second exhibit to add click event listeners
images2.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images3.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images4.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images5.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images6.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images7.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images8.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images9.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images10.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images11.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images12.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images13.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});

images14.forEach(function (image) {
  image.addEventListener("click", function () {
    imageModal.style.display = "flex";
    imageModal.classList.add("show");
    imageModal.querySelector(".img").style.backgroundImage = "url(" + this.src + ")";
    document.body.style.overflow = "hidden"; // Disable body scroll
    // Get the custom attributes
    var blurbText = this.getAttribute("blurb"); // Get the blurb attribute value
    var widthValue = this.getAttribute("widthValue"); // Get the width attribute value

    // Set the blurb text
    var blurb = imageModal.querySelector(".blurb");
    blurb.innerHTML = blurbText;

    // Set the width of the modal
    var modalContainer = imageModal.querySelector(".i-m-c");
    modalContainer.style.width = widthValue;
  });
});


// Close the image modal when the close button is clicked
imageCloseButton.onclick = function () {
  imageModal.style.display = "none";
  document.body.style.overflow = ""; // Enable body scroll
  imageModal.classList.remove("show");
  // imageModal.querySelector(".i-m-c").style.width = "32rem";
};

// Close the image modal when the user clicks outside the modal
window.onclick = function (event) {
  if (event.target == imageModal) {
    imageModal.style.display = "none";
    document.body.style.overflow = ""; // Enable body scroll
    imageModal.classList.remove("show");
    // imageModal.querySelector(".i-m-c").style.width = "32rem";
  }
};

const hamburger = document.querySelectorAll(".hamburger");
const hamburger2 = document.querySelectorAll(".hamburger2");
const sidenav = document.querySelectorAll(".sidenav");
const sidenav2 = document.querySelectorAll(".sidenav2");

hamburger.forEach(hamburgerItem => {
  hamburgerItem.addEventListener('click', () => {
    hamburgerItem.classList.toggle("active");
    sidenav.forEach(menu => menu.classList.toggle("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});

document.querySelectorAll('.sidenav .sn-nav-link').forEach(link => {
  link.addEventListener("click", () => {
    hamburger.forEach(h => h.classList.remove("active"));
    sidenav.forEach(menu => menu.classList.remove("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});

document.querySelectorAll('.sidenav .sn-nn-link').forEach(link => {
  link.addEventListener("click", () => {
    console.log('hiihih')
    hamburger.forEach(h => h.classList.remove("active"));
    sidenav.forEach(menu => menu.classList.remove("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});


$(document).ready(function () {
  // Add click event listener to .sn-dd-nav-link elements
  $(".sn-dd-nav-link").click(function (event) {
    // Prevent default behavior (scrolling to hash)
    event.preventDefault();
      
    // Get the parent .sn-dd element
    var parentDropdown = $(this).closest('.sn-dd');
    
    // Check if the clicked dropdown is already open
    var isOpen = parentDropdown.hasClass('open');
    
    // Close all open dropdowns
    $('.sn-dd').removeClass('open');
    
    // If the clicked dropdown was not already open, open it
    if (!isOpen) {
      parentDropdown.addClass('open');
    }
    // If the dropdown is already open, scroll to its hash
    if (isOpen) {
      var hash = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
      hamburger.forEach(h => h.classList.remove("active"));
      sidenav.forEach(menu => menu.classList.remove("active"));
      hamburger2.forEach(h => h.classList.remove("active"));
      sidenav2.forEach(menu => menu.classList.remove("active"));
      $('body').toggleClass('no-scroll');
      $('.overlay').toggle();
    }
  });
});


$(document).ready(function () {
  // Add click event listener to all <a> tags inside elements with class .dd
  $(".sidenav2 .dd a").click(function (event) {

    // Remove 'active' class from hamburger and sidenav elements
    hamburger2.forEach(h => h.classList.remove("active"));
    sidenav2.forEach(menu => menu.classList.remove("active"));

    // Toggle 'no-scroll' class on body
    $('body').toggleClass('no-scroll');
    $(this).closest('.sn-dd').removeClass('open');
    // Toggle overlay
    $('.overlay').toggle();
  });
});

$(document).ready(function () {
  // Add click event listener to all <a> tags inside elements with class .dd
  $(".sidenav .dd a").click(function (event) {


    // Remove 'active' class from hamburger and sidenav elements
    hamburger.forEach(h => h.classList.remove("active"));
    sidenav.forEach(menu => menu.classList.remove("active"));

    // Toggle 'no-scroll' class on body
    $('body').toggleClass('no-scroll');

    $(this).closest('.sn-dd').removeClass('open');
    // Toggle overlay
    $('.overlay').toggle();
  });
});


hamburger2.forEach(hamburgerItem => {
  hamburgerItem.addEventListener('click', () => {
    hamburgerItem.classList.toggle("active");
    // hamburgerItem.classList.toggle('position');
    sidenav2.forEach(menu => menu.classList.toggle("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});

document.querySelectorAll('.sidenav2 .sn-nav-link').forEach(link => {
  link.addEventListener("click", () => {
    hamburger2.forEach(h => h.classList.remove("active"));
    sidenav2.forEach(menu => menu.classList.remove("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});

document.querySelectorAll('.sidenav2 .sn-nn-link').forEach(link => {
  link.addEventListener("click", () => {
    console.log('hiihih')
    hamburger2.forEach(h => h.classList.remove("active"));
    sidenav2.forEach(menu => menu.classList.remove("active"));
    $('body').toggleClass('no-scroll');
    $('.overlay').toggle();
  });
});


window.addEventListener('scroll', function () {
  var heroHeight = document.getElementById('hero').offsetHeight;
  var navbar = document.getElementById('navbar');

  if (window.pageYOffset > heroHeight) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var heroHeight = document.getElementById("hero").clientHeight; // Adjust to match your hero ID

  // Add scroll event listener
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > heroHeight) {
      navbar.classList.add("navbar-visible");
    } else {
      navbar.classList.remove("navbar-visible");
    }
  });
});

window.addEventListener('load', () => {
  const navigation = document.querySelector('.navigation');
  const heroSection = document.querySelector('.hero');

  function showNavbarOnLoad() {
    if (window.scrollY > heroSection.offsetHeight) {
      navigation.classList.add('navbar-visible');
    }
  }

  showNavbarOnLoad();

  window.addEventListener('scroll', () => {
    if (window.scrollY > heroSection.offsetHeight) {
      navigation.classList.add('navbar-visible');
    } else {
      navigation.classList.remove('navbar-visible');
    }
  });
});

// Optionally, you can add a dismiss button to hide the warning
$('.mobile-warning').append('<button class="dismiss-btn">Dismiss</button>');

$('.dismiss-btn').click(function() {
  $('.mobile-warning').hide();
});
