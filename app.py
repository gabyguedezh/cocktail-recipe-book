import os
from flask import Flask, render_template, flash, redirect, request, url_for, session
from flask_pymongo import PyMongo
import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId


# MONGO_DBNAME = os.environ.get('MONGODB_NAME')
# MONGODB_URI = os.environ.get('MONGODB_URI')


app = Flask(__name__)
app.config['TESTING'] = True
app.testing = True
app.secret_key = "mix_and_shake_secret"

app.config['MONGO_DBNAME'] = 'cocktail_book'
app.config['MONGO_URI'] = 'mongodb://admin:cocktail_book123@ds125352.mlab.com:25352/cocktail_book'

mongo = PyMongo(app)

@app.route('/')
@app.route('/get_home')
def get_home():
    return render_template('index.html')


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
    for recipe in recipes:
        if recipe['recipe_url'] == recipe_url:
            cocktail = recipe
    return render_template('show_cocktail.html',
                           recipe = cocktail)


@app.route('/get_login', methods=['GET', 'POST'])
def get_login():
    logged_in = False
    if request.method == 'GET' and not 'username' in session:
        return render_template('login.html',
                               logged_in=logged_in)
    elif request.method == 'GET' and 'username' in session:
        logged_in = True
        return render_template('login.html',
                               username=session['username'],
                               logged_in=logged_in)
    if request.method == 'POST':
        session['username'] = request.form["username"]
        logged_in = True
        return render_template('login.html',
                              username=session['username'],
                              logged_in=logged_in)


@app.route('/get_logout')
def get_logout():
        print('logged out')
        session.clear()
        return redirect(url_for('get_home'))


@app.route('/get_my_recipes', methods=['GET', 'POST'])
def get_my_recipes():
    if not 'username' in session:
        return redirect('/get_login')
    return render_template('my_recipes.html',
                           username=session['username'],
                           recipes=mongo.db.recipes.find())


@app.route('/get_add_cocktail_form')
def get_add_cocktail_form():
    """
    This function renders the form that we'll use to fill the fields to 
    create a cocktail recipe
    """
    # measure_unit_list = []
    # measure_units = mongo.db.measure_units.find()
    # for unit in measure_units:
    #     if unit['measure_unit_name']:
    #         measure_unit_list.append(unit['measure_unit_name'])
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
    
 
    new_cocktail = { 'recipe_name': request.form['recipe_name'], 
    'recipe_description': request.form['recipe_description'],
    'recipe_url': request.form['recipe_name'].lower().replace(" ", "-"),
    'is_vegan': request.form['is_vegan'],
    'ingredients': {
        'ingredient': [{
                "quantity": request.form['quantity-0'],
                "measure_unit": request.form['measure_unit-0'],
                "ingredient_name": request.form['ingredient_name-0']
            }]
    },
    'base_spirit': request.form['base_spirit'],
    'cocktail_type': request.form['cocktail_type'],
    'flavour_profile': request.form['flavour_profile'],
    'author_name': session['username']
    }
    recipes.insert_one(new_cocktail)
    return redirect(url_for('get_my_recipes'))

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)