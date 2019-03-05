(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });


    $('form').submit(function(e){
        e.preventDefault();
        $('div.spinner-wrapper').css('display', 'flex');
        var data = $('form').serializeArray();
        var name = data[0].value;
        var email = data[1].value;
        var phone = data[2].value;
        var message = data[3].value;
        
        $.ajax({
            url: '/mail.php',
            type: "POST",
            data: data,
            success: function(res) {
                console.log(res);
                $('div.spinner-wrapper').hide();
                $('div.form-message').fadeIn().css('display','flex').delay(3000).fadeOut();
                $("form")[0].reset();
            },error: function(err) {
                console.log(err)
            }
        })
           
        // var email_options = {name: name, email: email, phone: phone, message: message};

        // emailjs.send("gmail","portfolio", email_options).then(function(data){
        //     $('div.spinner-wrapper').hide();
        //     $('div.form-message').fadeIn().css('display','flex').delay(3000).fadeOut();
        //     $("form")[0].reset();
            
        // }).catch(function(err){
        //     console.log(err)
        // });
        
        
        
    });

    $('.message-close').click(function(){
        $('div.form-message').fadeOut(600);
    })

})(jQuery); // End of use strict
