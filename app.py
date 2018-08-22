import os
from flask import Flask, render_template, flash, redirect, request, url_for, session, abort
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
    # if request.method == 'POST':
    #     session['username'] = request.form["username"]
    #     print(session['username'])
    #     return render_template('dashboard.html',
    #                           username=session['username'])
    # return render_template('login.html')
    if request.form['password'] == 'password' and request.form['username'] == 'admin':
        session['logged_in'] = True
    else:
        flash('wrong password!')
    return home()
    
@app.route('/get_logout', methods=['POST'])
def get_logout():
        print('logged out')
        print(request.form["logout"])
        return redirect(url_for('get_home'))


@app.route('/get_my_recipes', methods=['GET', 'POST'])
def get_my_recipes():
    return render_template('my_recipes.html')


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
        port=int(os.environ.get('PORT')),
        debug=True)