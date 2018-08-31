$(document).ready(function() {

    // Load More button - START
    $(function() {
        $(".cocktail-card").slice(0, 8).show();
        $("#loadMore").on('click', function(e) {
            e.preventDefault();
            $(".cocktail-card:hidden").slice(0, 4).slideDown();
            if ($(".cocktail-card:hidden").length == 0) {
                $("#load").fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });
    
    // Load more button - END
    
    // https://codepen.io/elmahdim/pen/sGkvH
    // http://jsfiddle.net/brynner/QDttv/
    // https://stackoverflow.com/questions/14035180/jquery-load-more-data-on-scroll
    // https://www.w3schools.com/xml/ajax_intro.asp
    
    // Rating Stars Functionality and POST
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars button').on('mouseover', function() {
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
    
        // Now highbuttonght all the stars that's not after the current hovered star
        $(this).parent().children('button.star').each(function(e) {
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });
    
    }).on('mouseout', function() {
        $(this).parent().children('button.star').each(function(e) {
            $(this).removeClass('hover');
        });
    });


    /* 2. Action to perform on click */
    $('#stars button').on('click', function() {
        // Getting rating - START
        var formStarUrl = $(this).data('url');
        console.log('formStarUrl: ', formStarUrl);
        // Getting rating - END
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('button.star');
        
        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }
        
        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
        
        // JUST RESPONSE (Not needed)
        var recipe_rating = parseInt($('#stars button.selected').last().data('value'), 10);
        var msg = "";
        msg = "Thanks! You rated this " + recipe_rating + " stars.";
        responseMessage(msg);
        console.log('recipe_rating: ', recipe_rating);
        
        // POST rating with AJAX
        // This will take care of the POST for the rating stars
        $.ajax({
            url: formStarUrl,
            // data: {'data': steps},
            data: JSON.stringify({ recipe_rating }, null, '\t'),
            type: 'POST',
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                console.log('success. Return does nothing', response);
            },
            error: function(error) {
                console.log('error', error);
            }
        });
    });


    function responseMessage(msg) {
        $('.success-box').fadeIn(200);
        $('.success-box p.text-message').html("<span>" + msg + "</span>");
    }
});