$(document).ready(function(){
            $('select').formSelect();
            var ingredientCount = 1;
            var stepCount = 1
            $('#add-ingredient-btn').click(function(){
                $('#ingredient-adder').append('<div class="ingredient-field">\
                    <div class="input-field col s12 m3">\
                        <input id="quantity-' + ingredientCount + '" type="number" step="0.01" class="validate">\
                        <label for="quantity-' + ingredientCount + '">Quantity (*)</label>\
                    </div>\
                    <div class="input-field col s12 m2">\
                        <input value="" id="measure_unit-' + ingredientCount + '" name="measure_unit" type="text" class="validate" required>\
                        <label for="measure_unit">Measure Unit (*)</label>\
                    </div>\
                    <div class="input-field col s12 m6">\
                        <input value="" id="ingredient_name-' + ingredientCount + '" name="ingredient_name" type="text" class="validate" required>\
                        <label for="ingredient_name-' + ingredientCount + '">Ingredient Name (*)</label>\
                    </div>\
                </div>');
                ingredientCount ++;
            });
            $('#remove-ingredient-btn').click(function(){
                 $('.ingredient-field').last().remove();
                 ingredientCount --;
            });
            $('#add-step-btn').click(function(){
                $('#step-adder').append('<div class="input-field col s12">\
                    <input value="" id="step-' + stepCount + '" name="step-' + stepCount + '" type="text" class="validate">\
                    <label for="step-' + stepCount + '">Steps</label\
                </div>');
                stepCount ++;
            });
        });