import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'cocktail_book'
app.config['MONGO_URI'] = 'mongodb://admin:cocktail_book123@ds125352.mlab.com:25352/cocktail_book'

mongo = PyMongo(app)

@app.route('/')
@app.route('/get_home')
def get_home():
    return render_template('index.html')

@app.route('/get_about')
def get_about():
    return render_template('about.html')

@app.route('/get_cocktails')
def get_cocktails():
    return render_template('cocktails.html')

@app.route('/get_my_recipes')
def get_my_recipes():
    return render_template('my_recipes.html')

@app.route('/get_login', methods=['GET', 'POST'])
def get_login():
    if request.method == 'POST':
        print('posted')
    return render_template('login.html')

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)