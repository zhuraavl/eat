jQuery(document).ready(function ($) {
  'use strict';
  
  
  $("#phone").mask("(999) 999-99-99");
  
  
  
  $('[data-toggle="datepicker"]').datepicker({
    language: 'ru-RU',
    format: 'dd-mm-yyyy'
  });
  

  
  $("input#tomorrow").click(function () {
    $('[data-toggle="datepicker"]').datepicker('setDate', +1);
  });
  $("input#ponedelnik").click(function () {
    $('[data-toggle="datepicker"]').datepicker('setDate', '+' +(8 - new Date(),  getDay()));
  });
  
  
  $('.slider-features-style').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    vertical: true,
    dots: false,
    arrows: false
  });
  $('.original-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    vertical: true,
    dots: false,
    pauseOnHover: false,
    arrows: true
  });
  
  
  


$(".form-steps button.next").click(function () {
    event.preventDefault();
    if ($(this).prev().val().length == 0) {
      $(this).parent().addClass('red');
    } else {
      $(this).parent().removeClass("go-show");
      $(this).parent().addClass("go-out");
      $(this).parent().next().addClass("go-show");
    };

  });

  $(".form-steps button.back").click(function () {
  event.preventDefault();
    $(this).parent().removeClass("go-show");
    $(this).parent().addClass("go-out");
    $(this).parent().prev().addClass("go-show");
  });
  
  $('input[name=address]').keyup(function () {
    var lengthAdress = $(this).val().length;
    if (lengthAdress > 10) {
      $('span.okay').addClass('done');
    } else {
    };
    
  });









  var loader = function () {
    $('body').removeClass("load");
  };
  setTimeout(loader, 1000);




  $(".sms-call").click(function () {
    $(".sms-call").toggleClass("move");
    $(".modal-overlay").toggleClass("show");
  });






  // scroll top or down button
  $(".scroll-to-menu").click(function () {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $("#update-menu").offset().top
    }, 1000);

  });

  $(".scroll-to-form").click(function () {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: $("#form-in").offset().top
    }, 1000);

  });




});
jQuery(document).ready(function ($) {





  $("#call_send").click(function () {
    $('.has-error').removeClass('has-error');

    var err = false;

    var data = new FormData();
    var subject = $("#call_subject");
    var username = $("#call_username");
    var phone = $("#call_phone");

    if ($(username).val() == '') {
      err = true;
      $(username).parents('.form-item-modal:first').addClass('has-error');
    }
    if ($(phone).val() == '') {
      err = true;
      $(phone).parents('.form-item-modal:first').addClass('has-error');
    }

    data.append("action", "send_form");
    data.append('subject', $(subject).val());
    data.append('username', $(username).val());
    data.append('phone', $(phone).val());
    if (err == false) {
      jQuery.ajax({
        type: 'POST',
        url: '/send.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log(data);
          $('#call_ifcomplete').addClass('true');
          $('#call_modal').fadeOut("slow");
        },
        complete: function (data) {
          console.log("Complete ajax.");
        },
        error: function (data) {
          console.log("Error ajax.");
        }
      });
    } else {
      console.log("Ошибка формы.");
    }
    $('#call_username').click(function () {
      $(this).parent().removeClass('has-error');
    });
    $('#call_phone').click(function () {
      $(this).parent().removeClass('has-error');
    });
  });

  $(".form-item-submit input[type=submit]").click(function () {
    $('.has-error').removeClass('has-error');
    var err = false;
    var additional_field = false;
    var addition = $(".open-new-form");
    var data = new FormData();
    
    var subject = $("input[name=subject]");
    var username = $("input[name=username]");
    var phone = $("input[name=phone]");
    var dom = $("input[name=dom]");
    var ulitsa = $("input[name=ulitsa]");
    var kvartira = $("input[name=kvartira]");
    var comment = $('textarea[name=comment]');
    var calories = $('input[name=calories]:checked');
    var callme = $('input[name=callme]');
    var time = $('select[name=time] option:selected');
    var days = $('input[name=days]:checked');
    
    if (($(calories).val() == '' || $(calories).length == 0) && !$(addition).hasClass('active')) {
      err = true;
      $('#chois-ration').addClass('has-error');
    }

    data.append("action", "send_form");
    
    data.append('subject', $(subject).val());
    data.append('username', $(username).val());
    data.append('phone', $(phone).val());
    data.append('dom', $(dom).val());
    data.append('ulitsa', $(ulitsa).val());
    data.append('kvartira', $(kvartira).val());
    data.append('comment', $(comment).val());
    data.append('calories', $(calories).val());
    data.append('callme', $(callme).is(':checked'));
    data.append('time', $(time).text());
    data.append('days', $(days).val());
    
    if (err == false) {
      jQuery.ajax({
        type: 'POST',
        url: '/send.php',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log(data);
          $('#modal_send_ifcomplete').addClass('true');
          setTimeout(function () {
            $('#modal_send_ifcomplete').css({
              "opacity": "0",
              "visibility": "hidden"
            });
          }, 3500);
          $('html, body').animate({
            scrollTop: $(".hero").offset().top
          }, 2000);

          // reset input after send form
          $('input[type=checkbox]').prop("checked", false);
          $('input[type=radio]').prop("checked", false);
          $('input[type=text]').val('');
        },
        complete: function (data) {
          console.log("Complete ajax.");
        },
        error: function (data) {
          console.log("Error ajax.");
        }
      });
    } else {
      $('body, html').animate({
        scrollTop: $('#form-in').position().top
      }, 'slow');
      console.log("Ошибка формы.");
    }
  });
});

$('#call_username, #call_phone').click(function () {
  $(this).parent().removeClass('has-error');
});