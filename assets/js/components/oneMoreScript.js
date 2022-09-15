$(".quiz__right-time span").click(function() {
    $(".quiz__bg").addClass("active");
    $(".quiz__right-time_modal").addClass("active");
    $(".quiz__right").addClass("bord");
});
$(".quiz__right-modal__close").click(function() {
    $(".quiz__bg").removeClass("active");
    $(".quiz__right-time_modal").removeClass("active");
    $(".quiz__right").removeClass("bord");
});


window.addEventListener("click", (e) => {
    if( $(e.target).hasClass('today') || $(e.target).prev().hasClass('today') || $(e.target).prev().prev().hasClass('today')) {
        $(".quiz__left").addClass("active");
        $(".quiz__right").addClass("active");
        $(".quiz__freetime").addClass("active");
        $(".quiz__right-group").addClass("active");
        $(".quiz__right-calendar").addClass("active");
        $(".final__wrapper").addClass("active");
        if (screen.width < 992) {
            $(".quiz__right-calendar").addClass("hide");
        }
    }
    
})
$(".quiz__freetime-text").on("click", function() {
    $(this).parent().parent().find(".active").removeClass("active");
    $(this).addClass("active");
    $(this).next().addClass("active");
})

$(".quiz__freetime-btn").on("click", function() {
    $(".quiz").addClass("active");
    $(".quiz__left-date").addClass("active");
    $(".quiz__left-zone").addClass("active");
    $(".quiz__left-back").addClass("active");
    $(".forms").addClass("active");
    $(".quiz__right-group").addClass("hide");
    $(".quiz__right-time").addClass("hide");
})

$(".quiz__left-back").on("click", function() {
    $(".quiz").removeClass("active");
    $(".quiz__left-date").removeClass("active");
    $(".quiz__left-zone").removeClass("active");
    $(".quiz__left-back").removeClass("active");
    $(".forms").removeClass("active");
    $(".quiz__right-group").removeClass("hide");
    $(".quiz__right-time").removeClass("hide");
});


  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $("#tel").mask("+7(999) 999-9999");

  $("#button__guest").on("click", function() {
        $(".input__group_guest").slideToggle();
        $("#button__guest").slideToggle();
  })
  $(".forms__button_bottom").on("click", function() {
        $(".quiz__right").addClass("hide");
        $(".quiz__left-back").addClass("hide");
        $(".quiz").removeClass("active");
        $(".quiz").addClass("final");
  })


  $(".zone-selector__item").on("click", function() {
        $(this).parent().find(".zone-selector__item").addClass("test");
        $(this).removeClass("test");
        $(".zone-selector__item.test").remove();
        $(".zone-selector").addClass("active");
  })
  