import os
from flask import Flask, render_template, flash, redirect, request, url_for, session
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.objectid import ObjectId

app = Flask(__name__)
app.secret_key = "mix_and_shake_secret"
MONGODB_URI = os.environ.get('MONGODB_URI')  
MONGODB_NAME = os.environ.get('MONGODB_NAME')

mongo = PyMongo(app)

@app.route('/')
@app.route('/get_home')
def get_home():
    return render_template('index.html')


@app.route('/get_cocktails')
def get_cocktails():
    """
    This function shows all the updated recipes in the database
    EXAMPLE:
    def get_categories():
    return render_template('categories.html',
    categories=mongo.db.categories.find())
    """
    return render_template('cocktails.html')


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
    return render_template('my_recipes.html')


@app.route('/get_add_cocktail_form')
def get_add_cocktail_form():
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
    EXAMPLE:
    to_insert = [
    {"screen_name":"user1", "foobar":"foo"}, 
    {"screen_name":"user2", "foobar":"bar"}
]
    """
    recipes = mongo.db.recipes
    # recipe_name = {'recipe_name': request.form['recipe_name']}
    # recipe_description = {'recipe_description': request.form['recipe_description']}
    # is_vegan = {'is_vegan': request.form['is_vegan']}
    # base_spirit = {'base_spirit': request.form['base_spirit']}
    # cocktail_type = {'cocktail_type': request.form['cocktail_type']}
    # flavour_profile = {'flavour_profile': request.form['flavour_profile']}
    # author_name = {'author_name': request.form['author_name']}
    new_cocktail = (
        {'recipe_name': request.form['recipe_name']},
        {'recipe_description': request.form['recipe_description']}
        )
    with MongoClient(MONGODB_URI) as conn:          
        db = conn[MONGO_DBNAME]        
        coll = db['recipes']          
        coll.insert(new_cocktail)
    # recipes.insert(recipe_name, recipe_description)
        
    # recipes.insert_one(recipe_name)
    # recipes.insert_one(recipe_description)
    # recipes.insert_one(is_vegan)
    # recipes.insert_one(base_spirit)
    # recipes.insert_one(cocktail_type)
    # recipes.insert_one(flavour_profile)
    # recipes.insert_one(author_name)
    print('writing to database in my imaginary typewriter')
    return redirect(url_for('get_my_recipes'))

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)