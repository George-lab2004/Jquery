// $("section").animate({width:"100%"},1000);
// $("section").animate({height:"100vh"},2000, function () {
//     $("h1").fadeIn(1000, function () {
//         $(".col-md-4").slideDown(1000)
//     });

// });


  $(document).ready(function() {
    $('#toggleBtn').on('click', function() {
      $('#collapseContent').toggleClass('show').toggleClass('d-flex');
      $(this).toggleClass('move');
    });
  });
  // End of header start section2 
$(document).ready(function() {
  $("#sec2 h1").on('click', function() {
    // Toggle class on the corresponding paragraph
    $(this).next('p').slideToggle().toggleClass('d-none d-block');

    // Hide other paragraphs
    $("#sec2 p").not($(this).next('p')).slideUp().removeClass('d-block').addClass('d-none');

    // Toggle height adjustment of the .content if necessary
    $("#sec2 .content").toggleClass('height');
  });
});
// start countdown
let CountDown = new Date("Dec 11, 2024 23:59:59").getTime();
        let counter = setInterval(() => {
            let dateNow = new Date().getTime();
            let DateDiff = CountDown - dateNow;

            if (DateDiff <= 0) {
              clearInterval(counter);
              $(".days").html("0 D");
              $(".hours").html("0 H");
              $(".Mins").html("0 M");
              $(".Seconds").html("0 S")

            }else {

            let days = Math.floor(DateDiff / (1000 * 60 * 60 * 24));
            let day = days + " D";
            $(".days").html(day); 

            let hours = Math.floor((DateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let hour = hours + " H";
            $(".hours").html(hour); 

            let minutes = Math.floor((DateDiff % (1000 * 60 * 60)) / (1000 * 60));
            let minute = minutes + " M";
            $(".Mins").html(minute); 

            let seconds = Math.floor((DateDiff % (1000 * 60)) / (1000));
            let second = seconds + " S";
            $(".Seconds").html(second); 

            }

}, 1000)
  // start form msg
  $(document).ready(function() {
    const $textarea = $("textarea");
    const $chars = $("#chars");
    let number;
  
    function charcounter() {
      const text = $textarea.val();
      const textlength = text.length;
      number = 100 - textlength;
    }
  
    charcounter();
  
    $textarea.on("input", function() {
      charcounter();
  
      if (number <= 0) {
        $textarea.val($textarea.val().substring(0, 100));
        number = 0;  
      }
        $chars.html(number);

    });
  });
  
