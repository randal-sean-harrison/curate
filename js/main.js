$(document).ready(function () {

   // Load header and add tooltips dyamically ------------------------
  $("header").load("header.html", function () {
    console.log("Header loaded.");
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Load footer -----------------------------------------------------
  $("footer").load("footer.html", function () {
    console.log("Footer loaded.");
  });

// Slow scroll to clicked link ------------------------------------
function scrollToElement(elementId) {
  const element = $('#' + elementId);
  const offsetTop = element.offset().top;
  const scrollHeight = Math.abs($(window).scrollTop() - offsetTop);
  const duration = Math.min(scrollHeight / 2, 750); // medium speed

  $('html, body').animate({
    scrollTop: offsetTop
  }, duration);
}

$('p[data-scroll-to]').on('click', function(event) {
  event.preventDefault();
  const elementId = $(this).data('scroll-to');
  scrollToElement(elementId);
});

// Scroll to top button --------------------------------------------
window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("topper").style.display = "block";
    } else {
      document.getElementById("topper").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  $("#topper").on("click", function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      400
    );
  });


});
// document.ready