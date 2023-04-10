$(function() {

 // Search field filter
  $("#faq-search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#faqs .card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

// Search reset button
$("#search-reset").on("click", function(){
   // clear the search input
   $("#faq-search").val("");
   // Show all the cards
   $(".card").fadeIn().removeClass("d-none");
}); 

    // plus and x-mark toggler on opening/closing the accordions
$(".btn-link").on("click", function() {
      if ($(this).prev().find("p i").hasClass("fa-plus") && $(this).prev().find("i").hasClass("fa-rotate-45")) {
        $(this).prev().find("p i").removeClass("fa-rotate-45");
      } else {
        $(this).prev().find("p i").addClass("fa-rotate-45");
      }

    });


});
// document.ready