$(document).ready(function(){
    // Activates the carousel on the homepage
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
    
    // Activates the selector on the forms
    $('select').formSelect();
    var ingredientCount = 1;
    var stepCount = 1
    if ($('.ingredient-field').length > 1) {
        $('#remove-ingredient-btn').attr('disabled', 'false');
    }
    
    // Add ingredient button
    $('#add-ingredient-btn').click(function(){
        $('#ingredient-adder').append('<div class="ingredient-field">\
            <div class="input-field col s12 m3">\
                <input id="quantity-' + ingredientCount + '" name="quantity-' + ingredientCount + '" type="number" step="0.01" class="validate">\
                <label for="quantity-' + ingredientCount + '">Quantity (*)</label>\
            </div>\
            <div class="input-field col s12 m2">\
                <input value="" id="measure_unit-' + ingredientCount + '" name="measure_unit-' + ingredientCount + '" type="text" class="validate" required>\
                <label for="measure_unit">Measure Unit (*)</label>\
            </div>\
            <div class="input-field col s12 m6">\
                <input value="" id="ingredient_name-' + ingredientCount + '" name="ingredient_name' + ingredientCount + '" type="text" class="validate" required>\
                <label for="ingredient_name-' + ingredientCount + '">Ingredient Name (*)</label>\
            </div>\
        </div>');
        if ($('.ingredient-field').length > 1) {
            $('#remove-ingredient-btn').css('visibility', 'visible');
        }
        ingredientCount ++;
    });
    
    // Remove ingredeint button
    $('#remove-ingredient-btn').click(function(){
        if ($('.ingredient-field').length > 1) {
            $('.ingredient-field').last().remove();
            ingredientCount --; 
        }
    });
    
    // Add step button
    $('#add-step-btn').click(function(){
        $('#step-adder').append('<div class="input-field col s12">\
            <div class="step-field">\
                <input value="" id="new-step-' + stepCount + '" name="step-' + stepCount + '" type="text" class="validate" required>\
                <label for="step-' + stepCount + '">Steps</label\
            </div>\
        </div>');
        stepCount ++;
        console.log(stepCount);
    });
    
    // Remove step button
    $('#remove-step-btn').click(function(){
        if ($('.step-field').length > 1) {
            $('.step-field').last().remove();
            stepCount --;
            console.log(stepCount);
        }
    });
    
    // Activates delete confirmation modal
    $('.modal').modal();
    
    // COLLECTING THE ADDED STEPS - ATTEMPT 1
    // function getNewSteps() {
    //     // I'll collect all the steps that start with 'new' as these
    //     // are created when the user clicks on the add new step button
    //     var stepsArray = [];
    //     $('input'[id^='new-step']).each(function(i) {
    //         stepsArray.push($(this).val());
    //     });
    //     console.log(stepsArray);
    // }
    
    // COLLECTING THE ADDED STEPS - ATTEMPT 2
    // $('#add-step-btn').on('click', function() {
    //     var inputTagStep = ($('#step-adder').find('input'));
    //     console.log(inputTagStep);
    // });
    // $('#remove-step-btn').on('click', function() {
    //     PENDING - Get the remove button to get rid of deleted inputs
    //     if ($('.step-field').length > 1) {
    //         var inputTagStep = ($('#step-adder').find('inputstep-field').last().remove());
    //         console.log(inputTagStep);
    //     }
    // });
    
    // COLLECTING THE ADDED STEPS - ATTEMPT 3
    $('#step-adder').on('change', function() {
        var inputTagStep = ($('#step-adder').find('input'));
        console.log('you changed an input');
        console.log(inputTagStep);
        $(inputTagStep).each(function(){
            console.log($(this).val());
        });

    });
});