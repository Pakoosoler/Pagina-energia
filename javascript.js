$(document).ready(function() {
  $('.slide-nav').on('click', function(e) {
    e.preventDefault();
    // Obtener la diapositiva actual
    var current = $('.flex--active').data('slide');
    // Obtener el valor de data-slide del botón
    var next = $(this).data('slide');

    $('.slide-nav').removeClass('active');
    $(this).addClass('active');

    if (current === next) {
      return false;
    } else {
      $('.slider__warpper').find('.flex__container[data-slide="' + next + '"]').addClass('flex--preStart');
      $('.flex--active').addClass('animate--end');
      setTimeout(function() {
        $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
        $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
      }, 800);
    }
  });
});
