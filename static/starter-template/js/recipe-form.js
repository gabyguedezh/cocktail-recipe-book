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
                <input value="" id="new-step-' + stepCount + '" name="step-' + stepCount + '" type="text" class="validate step-class" required>\
                <label for="step-' + stepCount + '">Step</label\
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
    
    // COLLECTING THE ADDED STEPS
    
    // PENDING - edit from on.change to when submiting, to avoid duplicating data from a field
    // SEND MY DYNAMIC FIELDS TO BACKEND
    // This function takes the array stored in stepsList and adds it to the data
    // that will be posted when clicking the submit button
    
    $("#submit-form-button").on('click', function(event) {
        event.preventDefault();
        var formUrl = $('#submit-form-button').data('url')
        
        // Getting the recipe name
        var recipeName = $('#recipe_name').val();
        console.log("Recipe name is: ", recipeName);
        // Getting the description
        var recipeDescription = $('#recipe_description').val();
        console.log("Recipe description is: ", recipeDescription);
        // Getting the vegan boolean
        var veganBoolean = $('#is_vegan').val();
        console.log("Is recipe vegan: ", veganBoolean);
        // Getting the recipe ingredients
        var ingredientsList = []
        var inputTagIngredient = ($('#ingredient-adder').find('input'));
        inputTagIngredient.each(function() {
            var jqthis = $(this);
            if ( jqthis.val != "" ) {
                ingredientsList.push(jqthis.val());
            }
        });
        console.log("ingredeint list is: ", ingredientsList);
        // Getting the recipe steps
        var stepsList = [];
        var inputTagStep = ($('#step-adder').find('input'));
        inputTagStep.each(function() {
            var jqthis = $(this);
            if ( jqthis.val() != "" ) {
                stepsList.push(jqthis.val());
            }
        });
        console.log("steps list is: ", stepsList);
        // Getting the base spirit selector
        var baseSpiritSelector = $('#base_spirit').val();
        console.log("Base spirit is: ", baseSpiritSelector);
        // Getting the cocktail type
        var cocktailTypeSelector = $('#cocktail_type').val();
        console.log("cocktail type is: ", cocktailTypeSelector);
        // Getting the flavour profile
        var flavourProfileSelector = $('#flavour_profile').val();
        console.log("flavour profile is: ", flavourProfileSelector);
        
        // This will take care of the POST
        // $.ajax({
        //     url: formUrl,
        //     // data: {'data': stepsList},
        //     data: JSON.stringify(stepsList, null, '\t'),
        //     type: 'POST',
        //     contentType: 'application/json;charset=UTF-8',
        //     success: function(response) {
        //         console.log('success', response);
        //     },
        //     error: function(error) {
        //         console.log('error', error);
        //     }
        // });
    });
});