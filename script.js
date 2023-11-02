$(document).ready(function() {
    $(window).scroll(checkImg);
    checkImg();

    function checkImg() {
        if ($(window).scrollTop() > 170) {
            $('.second-animate').removeClass('show');
            $('.first-animate').removeClass('show');
        } else {
            $('.second-animate').addClass('show');
            $('.first-animate').addClass('show');
        }
    }

    $(window).scroll(checkImg1);
    checkImg1();

    function checkImg1() {
        if ($(window).scrollTop() > 1030) {
            $('.third-animate').removeClass('show');
        } else {
            $('.third-animate').addClass('show');
        }
    }

    $(window).scroll(checkImg2);
    checkImg2();

    function checkImg2() {
        if ($(window).scrollTop() > 1700) {
            $('.fourth-animate').removeClass('show');
            $('.fifth-animate').removeClass('show');
        } else {
            $('.fourth-animate').addClass('show');
            $('.fifth-animate').addClass('show');
        }
    }

    var buyButton =  $(".buyButton");

    var modal = $("#myModal");
    var span = $(".close");

    // Mouseover event listener
    buyButton.mouseover(function() {
        $(this).css("background-color", "#78D6C6");
    });

    buyButton.mouseout(function() {
        $(this).css("background-color", ""); // Remove the background-color property to revert to initial CSS
    });

    // Click event listener
    buyButton.click(function() {
        var audio = new Audio("purchase.mp3");
        audio.onended = function() {
            // Sound has finished playing, now show the alert
            modal.css("display", "block");
        };
        audio.play();
    });

    span.click(function() {
        modal.css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target.isSameNode(modal[0])) {
            modal.css("display", "none");
        }
    });
});