$(document).ready(function(){
            $('select').formSelect();
            var ingredientCount = 1;
            $("#add-ingredient-btn").click(function(){
                $("#ingredient-adder").append(
                '<div class="input-field col s12 m3">\
                    <input id="quantity-' + ingredientCount + '" type="number" step="0.01" class="validate">\
                    <label for="quantity-' + ingredientCount + '">Quantity (*)</label>\
                    <span class="helper-text">Up to two decimals</span>\
                </div>\
                <div class="input-field col s12 m3">\
                    <select id="measure_unit-' + ingredientCount + '" name="measure_unit" required>\
                        <option value="" disabled selected>Measure Unit</option>\
                        <option value="{{measure_units.0}}">{{measure_units.0}}</option>\
                        <option value="{{measure_units.1}}">{{measure_units.1}}</option>\
                        <option value="{{measure_units.2}}">{{measure_units.2}}</option>\
                        <option value="{{measure_units.3}}">{{measure_units.3}}</option>\
                        <option value="{{measure_units.4}}">{{measure_units.4}}</option>\
                        <option value="{{measure_units.5}}">{{measure_units.5}}</option>\
                        <option value="{{measure_units.6}}">{{measure_units.6}}</option>\
                        <option value="{{measure_units.7}}">{{measure_units.7}}</option>\
                    </select>\
                </div>\
                <div class="input-field col s12 m6">\
                    <input value="" id="ingredient_name-' + ingredientCount + '" name="ingredient_name" type="text" class="validate" required>\
                    <label for="ingredient_name-' + ingredientCount + '">Ingredient Name (Required)</label>\
                </div>');
                ingredientCount ++;
            });
        });