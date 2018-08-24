import os
from flask import Flask, render_template, flash, redirect, request, url_for, session
from flask_pymongo import PyMongo
from pymongo import MongoClient
from bson.objectid import ObjectId
# import app

MONGO_DBNAME = 'cocktail_book'
MONGODB_URI = 'mongodb://admin:cocktail_book123@ds125352.mlab.com:25352/cocktail_book'
# app.config['MONGO_DBNAME'] = 'cocktail_book'
# app.config['MONGO_URI'] = 'mongodb://admin:cocktail_book123@ds125352.mlab.com:25352/cocktail_book'

def get_mongo_dbname():
    MONGO_DBNAME = MongoClient(MONGO_DBNAME)
    return MONGO_DBNAME

def get_mongodb_uri():
    MONGODB_URI = MongoClient(MONGODB_URI)
    return MONGODB_URI

def get_secret_key():
    secret_key = app.secret_key
    app.secret_key = "mix_and_shake_secret"
    return secret_key