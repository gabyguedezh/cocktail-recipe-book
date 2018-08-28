$(document).ready(function(){
            $('select').formSelect();
            var ingredientCount = 1;
            var stepCount = 1
            if ($('.ingredient-field').length > 1) {
                $('#remove-ingredient-btn').attr('disabled', 'false');
            }
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
            $('#remove-ingredient-btn').click(function(){
                if ($('.ingredient-field').length > 1) {
                    $('.ingredient-field').last().remove();
                    ingredientCount --; 
                }
            });
            $('#add-step-btn').click(function(){
                $('#step-adder').append('<div class="input-field col s12">\
                    <div class="step-field">\
                        <input value="" id="step-' + stepCount + '" name="step-' + stepCount + '" type="text" class="validate" required>\
                        <label for="step-' + stepCount + '">Steps</label\
                    </div>\
                </div>');
                stepCount ++;
            });
            $('#remove-step-btn').click(function(){
                if ($('.step-field').length > 1) {
                    $('.step-field').last().remove();
                    stepCount --; 
                }
            });
            
            // EDIT FORM FUNCTIONALITY SCRIPTS
            var veganSelect = "{{recipe.is_vegan}}";
            console.log(veganSelect);
            console.log('hello');
            $('#is_vegan').formSelect();
        });