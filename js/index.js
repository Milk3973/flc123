// Get the modal
var modal = document.getElementById("modal");
var body= document.getElementById('body')
// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  body.style.overflowY ="visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflowY ="visible";
  }
}

// Function to open the modal
function popRef() {
  modal.style.display = "block";
  body.style.overflowY ="hidden";
}

var slides = ['The Beginning Of The Year', 'The Middle Of The Year', 'The End-Of The Year'];
var swiper = new Swiper('.sl-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    initialSlide: 0,
    pagination: {
      el: '.sl-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<a href="#' + slides[index].toLowerCase() + '" class="' + className + ' pagination index' + index + '">' + slides[index] + '</a>';
      },
    },
  });
  
  $('.slide-link').on('click', function(event) {
    // event.preventDefault();
    var slideIndex = $(this).data('slide')-1;
    // var slideId = "#slide" + (slideIndex+1);
    // console.log(slideId);
    document.getElementById('#student_learning').scrollIntoView();
    swiper.slideTo(slideIndex);
  });
  
  // Check if URL has a hash that matches a slide
    var hash = window.location.hash;
    if (hash) {
      var slideIndex = parseInt(hash.replace('#slide', '')) - 1;
  
      swiper.slideTo(slideIndex);
  
      document.getElementById('#student_learning').scrollIntoView();
    }
  
    // Bind hashchange event to slide to a hash's slide
    $(window).on('hashchange', function() {
      var hash = window.location.hash;
      if (hash) {
        var slideIndex = parseInt(hash.replace('#slide', '')) - 1; 
        
        swiper.slideTo(slideIndex);
  
        document.getElementById('#student_learning').scrollIntoView();
      }
    });
