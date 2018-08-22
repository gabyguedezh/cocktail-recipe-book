import os
from flask import Flask, render_template, redirect, request, url_for, session
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.secret_key = "mix_and_shake_secret"
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

@app.route('/get_login', methods=['GET', 'POST'])
def get_login():
    logged_in = False
    if request.method == 'POST':
        session['username'] = request.form["username"]
        logged_in = True
        print('posted')
        print(session['username'])
        print(logged_in)
        # return redirect(url_for('get_my_recipes'))
        return render_template('login.html',
                               username=session['username'],
                               logged_in=logged_in)
    if request.method == 'GET' and session['username'] != "":
        logged_in = True
        print('are you logged in', logged_in)
        return render_template('login.html',
                               username=session['username'],
                               logged_in=logged_in)
    return render_template('login.html',
                           username=session['username'],
                           logged_in=logged_in)

@app.route('/get_my_recipes', methods=['GET', 'POST'])
def get_my_recipes():
    return render_template('my_recipes.html')

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)