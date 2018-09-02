$(document).ready(function(){
    // Activates the carousel on the homepage
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,
    });
    
    // Activates the selector on the forms
    $('select').formSelect();
    var ingredientCount = 1;
    var stepCount = 1;
    
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
    
    // Remove ingredient button
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
                <input value="" id="step-' + stepCount + '" name="step-' + stepCount + '" type="text" class="validate step-class" required>\
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
    // This function takes the array stored in steps and adds it to the data
    // that will be posted when clicking the submit button
    
    $("#submit-form-button").on('click', function(event) {
        event.preventDefault();
        var formUrl = $('#submit-form-button').data('url')
        
        // Getting the recipe name
        var recipe_name = $('#recipe_name').val();
        // Getting the recipe url
        var recipe_url = $('#recipe_name').val()
        recipe_url = recipe_url.replace(/\s+/g, '-').toLowerCase();
        // console.log('recipe url is: ', recipe_url);
        // Getting the description
        var recipe_description = $('#recipe_description').val();
        // Getting the image - PENDING REAL IMAGE 
        var recipe_image = '../static/images/default-cocktail-image.png';
        // Getting the vegan boolean
        var is_vegan = $('#is_vegan').val();
        
        // Getting the recipe ingredients
        var ingredients = [];
        var inputTagIngredient = ($('#ingredient-adder').find('input'));
        // console.log('inputTagIngredient', inputTagIngredient);
        // Getting key values - START
        var inputsByThree = [], size = 3;
        while (inputTagIngredient.length > 0)
            inputsByThree.push(inputTagIngredient.splice(0, size));
        // console.log('inputsByThree: ', inputsByThree);
        // Creating a nested list with groups of three per sublist
        for(var i=0; i<inputsByThree.length; i++) {
            var inputBoxes = inputsByThree[i];
            var ingredient = {};
            for(var j=0; j<inputBoxes.length; j++) {
                var inputBox = inputBoxes[j];
                var value = $(inputBox).val();
                var key = $(inputBox).attr('id').split('-')[0]
                ingredient[key] = value;
                // console.log(key, value);
            }
            // console.log(ingredient);
            ingredients.push(ingredient);
        }
        // Getting the key values -END
        // console.log(ingredients);
        
        // Getting the recipe steps
        var steps = [];
        var stepInput = ($('#step-adder').find('input'));
        // console.log('stepInput: ', stepInput);
        // Getting key values - START
        var inputsByOne = [], sizeStep = 1;
        while (stepInput.length > 0)
            inputsByOne.push(stepInput.splice(0, sizeStep));
        // Creating a nested list with groups of one per sublist
        for(var k=0; k<inputsByOne.length; k++) {
            var inputStepBoxes = inputsByOne[k];
            var step = {};
            for(var l=0; l<inputStepBoxes.length; l++) {
                var inputStepBox = inputStepBoxes[l];
                var valueStep = $(inputStepBox).val();
                var keyStep = $(inputStepBox).attr('id').split('-')[0]
                step[keyStep] = valueStep;
                // console.log(keyStep, valueStep);
            }
            steps.push(step);
        }
        // Getting the key values -END
        // console.log('steps: ', steps);
        
        // Getting the base spirit selector
        var base_spirit = $('#base_spirit').val();
        // console.log("Base spirit is: ", baseSpiritSelector);
        // Getting the cocktail type
        var cocktail_type = $('#cocktail_type').val();
        // console.log("cocktail type is: ", cocktailTypeSelector);
        // Getting the flavour profile
        var flavour_profile = $('#flavour_profile').val();
        // console.log("flavour profile is: ", flavourProfileSelector);
        // Getting the author name
        var author_name = $('#author_name').val();
        // console.log("author_name: ", author_name);
        // Getting the initial recipe_rating
        var recipe_rating = "0";
        // Getting the initial rnumber_of_votes
        var number_of_votes = "0";
        
        var formData = ['form data includes: ', recipe_name, recipe_url, 
                        recipe_description, recipe_image, is_vegan, 
                        ingredients, steps, base_spirit, cocktail_type,
                        flavour_profile, author_name, recipe_rating, number_of_votes];
        console.log(formData);
        // This will take care of the POST for the add cocktail form
        $.ajax({
            url: formUrl,
            // data: {'data': steps},
            data: JSON.stringify({recipe_name,  recipe_url, recipe_description,
                                recipe_image, is_vegan, ingredients, steps,
                                base_spirit, cocktail_type, flavour_profile,
                                author_name, recipe_rating, number_of_votes}, null, '\t'),
            type: 'POST',
            contentType: 'application/json;charset=UTF-8',
            success: function(response) {
                console.log('success');
                // PENDING - The address is hardcoded, update before deployment
                window.location.href = "http://cocktail-recipe-book-gabyguedezh.c9users.io/get_my_recipes";
            },
            error: function(error) {
                console.log('error', error);
            }
        });
    });
});