import os
from flask import Flask, render_template, flash, redirect, request, url_for, session, make_response, current_app
from flask_pymongo import PyMongo
import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId
import json
from datetime import datetime
from functools import update_wrapper

# MONGO_DBNAME = os.environ.get('MONGODB_NAME')
# MONGODB_URI = os.environ.get('MONGODB_URI')


app = Flask(__name__)
app.config['TESTING'] = True
app.testing = True
app.secret_key = "mix_and_shake_secret"

app.config['MONGO_DBNAME'] = 'cocktail_book'
app.config['MONGO_URI'] = 'mongodb://admin:cocktail_book123@ds125352.mlab.com:25352/cocktail_book'

mongo = PyMongo(app)

# # Jinja Custom Filter Datetime Object - START
# @app.template_filter('strftime')
# def _jinja2_filter_datetime(date, fmt=None):
#     date = dateutil.parser.parse(date)
#     native = date.replace(tzinfo=None)
#     format='%b %d, %Y'
#     return native.strftime(format)
# ## Jinja Custom Filter Datetime Object - END



@app.route('/')
@app.route('/get_home')
def get_home():
    return render_template('index.html',
                          recipes = mongo.db.recipes.find())

@app.route('/get_cocktails')
def get_cocktails():
    """
    This function shows all the updated recipes in the database
    """
    return render_template('cocktails.html',
                           recipes=mongo.db.recipes.find())


@app.route('/show_cocktail/<recipe_url>')
def show_cocktail(recipe_url):
    """
    This function takes you to the recipe page of a specific cocktail
    you've selected
    """
    
    cocktail = {}
    recipes = mongo.db.recipes.find()
    number_of_views = ''
    
    print(recipes)
    print('*************************')

    for recipe in recipes:
        if recipe['recipe_url'] == recipe_url:
            cocktail = recipe
            average_rating = recipe['average_rating']
            date_added = datetime.strptime(recipe['date_added'], '%Y-%m-%dT%H:%M:%S.%fZ').date()
                
            # number_of_views = int(recipe['number_of_views'])
            # print('number_of_views: ', number_of_views)

                
            print('average_rating when method is GET: ', average_rating)
            print('date_added:', date_added)
            print('number_of_views: ', number_of_views)
        
    return render_template('show_cocktail.html',
                           average_rating=average_rating,
                           recipe=cocktail,
                           date_added=date_added,
                           number_of_views=number_of_views)


@app.route('/update_recipe_rating/<recipe_id>', methods=['POST'])
def update_recipe_rating(recipe_id):
    """
    This function takes the new recipe_rating after clicking on the stars and
    updates the recipe_rating field in the open document
    """
    recipes = mongo.db.recipes
    
    this_recipe = mongo.db.recipes.find_one({'_id': ObjectId(recipe_id)})
    
    number_of_votes = int(this_recipe['number_of_votes'])
    print('number_of_votes is: ', number_of_votes)
    
    initial_recipe_rating = int(this_recipe['average_rating'])
    print('initial recipe rating is: ',  initial_recipe_rating)
    
    latest_recipe_rating = int(request.json['recipe_rating'])
    print('latest recipe rating posted is: ', latest_recipe_rating)
    
    # Calculating average
    
    average_rating = ((initial_recipe_rating * number_of_votes) + latest_recipe_rating) / (number_of_votes + 1)
    average_rating = round(average_rating, 2)
    
    print('average_rating is: ', average_rating)
    
    this_recipe['number_of_votes'] = str(number_of_votes + 1)
    
    this_recipe['average_rating'] = average_rating
    
    recipes.update({'_id': ObjectId(recipe_id)}, this_recipe)
    
    return ('', 204)
    

@app.route('/get_login', methods=['GET', 'POST'])
def get_login():
    """
    This function shows you the login form if you're not logged in, and takes
    you to your dashboard if you are logged in
    """
    
    logged_in = False
    if request.method == 'GET' and not 'username' in session:
        return render_template('login.html',
                               logged_in=logged_in)
    elif request.method == 'GET' and 'username' in session:
        logged_in = True
        recipes = mongo.db.recipes.find()
        
        recipes_dict = {}
        
        for i, recipe in enumerate(recipes):
            recipe.pop('_id', None)
            recipes_dict[i] = recipe
        
        recipes_dict = json.dumps(recipes_dict)

        return render_template('login.html',
                               username=session['username'],
                               logged_in=logged_in,
                               recipes=recipes_dict)
    if request.method == 'POST':
        session['username'] = request.form["username"]
        logged_in = True
        recipes=mongo.db.recipes.find()
        recipes_dict = {}
        
        for i, recipe in enumerate(recipes):
            recipe.pop('_id', None)
            recipes_dict[i] = recipe
        
        recipes_dict = json.dumps(recipes_dict)
            
        return render_template('login.html',
                              username=session['username'],
                              logged_in=logged_in,
                              recipes=recipes_dict)


@app.route('/get_logout')
def get_logout():
        print('logged out')
        session.clear()
        return redirect(url_for('get_home'))


@app.route('/get_my_recipes', methods=['GET', 'POST'])
def get_my_recipes():
    if not 'username' in session:
        return redirect('/get_login')
    else:
        recipes = mongo.db.recipes.find()
        return render_template('my_recipes.html',
                               username=session['username'],
                               recipes=recipes)


@app.route('/get_add_cocktail_form')
def get_add_cocktail_form():
    """
    This function renders the form that we'll use to fill the fields to 
    create a cocktail recipe, and pass to the front end the options for the
    selectors
    """
    if request.url.startswith('http://'):
        request.url = request.url.replace('http://', 'https://', 1)
    print('url when get_cocktail_form: ', request.url)
    return render_template('add_cocktail.html',
                           base_spirit=mongo.db.base_spirit.find(),
                           cocktail_type=mongo.db.cocktail_type.find(),
                           flavour_profile=mongo.db.flavour_profile.find(),
                           autor=mongo.db.author.find())


@app.route('/write_to_cocktail_database', methods=['POST'])
def write_to_cocktail_database():
    """ 
    This function takes the input from get_add_cocktail_form and writes it into
    our database. The it redirects to get_my_recipes, where you'll see your 
    recipe as the most recently added
    """
    recipes = mongo.db.recipes
    
    recipes.insert_one(request.json)
    
    return ('', 204)
    

@app.route('/delete_cocktail/<recipe_id>')
def delete_cocktail(recipe_id):
    """
    This function deletes a cocktail from the database
    """
    mongo.db.recipes.remove({'_id': ObjectId(recipe_id)})
    return redirect(url_for('get_my_recipes'))


@app.route('/get_edit_cocktail_form/<recipe_id>')
def get_edit_cocktail_form(recipe_id):
    """
    This function reopens the form and lets you rewrite on a recipe
    """
    this_recipe = mongo.db.recipes.find_one({'_id': ObjectId(recipe_id)})
    is_vegan = this_recipe['is_vegan']
    all_base_spirit = mongo.db.base_spirit.find()
    all_cocktail_type = mongo.db.cocktail_type.find()
    all_flavour_profile = mongo.db.flavour_profile.find()
    
    return render_template('edit_cocktail.html',
                           is_vegan=is_vegan,
                           base_spirit=all_base_spirit,
                           cocktail_type=all_cocktail_type,
                           flavour_profile=all_flavour_profile,
                           recipe=this_recipe)


@app.route('/update_edited_cocktail/<recipe_id>', methods=['POST'])
def update_edited_cocktail(recipe_id):
    """
    This recipe will rewrite the contents of a document according to the changes
    added when editing a cocktail
    """
    recipes = mongo.db.recipes
    
    recipes.update({'_id': ObjectId(recipe_id)}, request.json)
    
    return ('', 204)


@app.route('/get_search')
def get_search():
    recipes = mongo.db.recipes.find()
        
    recipes_dict = {}
    
    for i, recipe in enumerate(recipes):
        recipe.pop('_id', None)
        recipes_dict[i] = recipe
    
    recipes_dict = json.dumps(recipes_dict)

    return render_template('search.html',
                           recipes=recipes_dict)


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)