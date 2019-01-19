# Your Project's Name

Mix and Shake: 

A cocktail recipe book that allows you to save your personal
drinks collection and find new recipes according to different useful categories.

 
## UX
#### Scope

Scope 1 - Beta version. A fully functional cocktail recipe book in which users
can read, creat, edit and delvete cocktail recipes, as well as seeing different
attributes each recipe, and rate them.
In this version, an image placeholder will accompany all recipes, however, it
is intended to make it possible for users to upload their own images after
the beta phase. 
It was decided to launch before having this functionality as the recipe book
meets the basic requirements of the brief and most of the optional add-ons and
a decision was made that prolonging the launch until the image functionality 
was fully integrated would go against agile principles as the Minimum Viable 
Product has been achieved for this scope.

Scope 2 - Multimedia version. Users will be able to upload images and videos
to illustrate their recipes. It is plan to use AWS to host the multimedia 
elements due to the fact that Heroku, where the site has been deployed, doesn't.

##### User stories:
Example:
- As a user type, I want to perform an action, so that I can achieve a goal.

My user stories
- As a bartender, I want to save my own recipes, so I can craft a personal repertoire.
- As a cocktail enthusiast, I want to find highly rated recipes, so I can make high-quality drinks at home.
- As a person learning about mixology, I want to find recipes by cocktail type, spirit and other categories, so I can study specify styles.
- As a vegan, I want to search only through vegan friendly recipes, so I can find only drinks without animal products.
- As a gin lover, I want to find only gin-based recipes, so I can try my favourite spirits in different ways.
- As a statistics geek, I want to see charts that show me insights on the recipes I upload, so I can spot trends and discover my mixing style.

##### Mockups and wireframes

- See the [mockup](https://drive.google.com/file/d/1IBZhaEBv6aHc9tRcjJ0oM813mmQfHwVE/view?usp=sharing)
    - The mockup for this project was created with Balsamiq.
    - All of the key pages we included in the mockup.
- Alternatively, you can find the mockup uploaded as a PDF within the folder ASSETS/MOCKUP.

## Features


##### Existing features

Below, you'll read about the different parts of your project, described briefly.

- Reading featured cocktails: The highest rated recipes appear on the homepage.
- All cocktails: Users can freely browse through the whole repository of recipes.
- Sort: Users can sort recipes by rating or choose to see newset first.
- See a recipe: Users can see individual recipes with their own URLs.
- Rate a recipe: In the individual view of each recipe, users have the option to rate them one to five starts.
- Login: Users can create a username to access the private section, insights, and personal cocktail repo.
- My Dashboard: Loged users can see insights about the recipes they upload including number of uploads, recipes bu sirit, flavour, and cocktail type.
- Interactive graphs: Users can cross reference the graphs in their dashboard  section to get interesting insights.
- My recipes: Users can browse thourhg recipes they've created, sorting them out by rating or by newset first.
- My recipe cards: Each card on the my recipes section contains basic information about a recipe (name, description, rating, base spirit, cocktail type, flavour and date of creation). The cards also have links that allow users to open, edit or delete their recipes.
- Search: Users can search through the database by manipulating four selectors (base spirit, type, flavour and vegan) which are cross-referenceable.
- Results: Users will see the numbers of results of a query, and each result will have a link in the cocktail name, as well as a short description.
- Pagination: There is a pagination allowing users to easily navigathe through the search results.
- Add a cocktail form: Users can fill a form to add all the necessary information to add new cocktails to the database.
- Edit a cocktail form: Users can open an existing cocktail and make changes to it.
- Delete cocktail: Users can delete their own cocktails from the database.
- Add/Edit ingredients: This element of the form has three spaces, one for quantity, one for measurment and one for name of ingredient.
- Add/Edit steps: This element of the form has two spaces, one for number of the step and one for the action to perform.


##### Desired features

- It is intended to allow users to add images of their cocktails to enhance the experience of the recipe book.


## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Materializeccs](https://materializecss.com/)
    - The project uses a **Materializeccs** template for consistency or design and UX.

- [Font Awesome](https://fontawesome.com/)
    - The project uses **Font Awesome** for better design and styling.
    
- [Flask](http://flask.pocoo.org/)
    - The project uses **Flask** to bring the backend and frontend together.

- [MongoDB](https://mlab.com/welcome/)
    - The project uses a MongoDB database.
    

## Testing

User stories reviewed:
My user stories
- **As a bartender, I want to save my own recipes, so I can craft a personal repertoire.**
*Users can create a profile with the login functionality, which will allow them to have a personal cocktail book within the main collection of recipes, which they can access separatedly and edit when they wish.*
- **As a cocktail enthusiast, I want to find highly rated recipes, so I can make high-quality drinks at home.**
*The homepage of the site will always show the featured or highest rated recipes, but also, users can choose to sort the recipes in the ALL RECIPES section to see the highest rated first*
- **As a person learning about mixology, I want to find recipes by cocktail type, spirit and other categories, so I can study specify styles.**
*Users can filter recipes in the SEARCH section of the site, and they can combine filters to find specific styles they wish to explore*
- **As a vegan, I want to search only through vegan friendly recipes, so I can find only drinks without animal products.**
*Users can filter to see only vegan recipes on the search section.*
- **As a gin lover, I want to find only gin-based recipes, so I can try my favourite spirits in different ways.**
*Users can select specific base spirits on the search, also, each recipe indicates the base spirit*
- **As a statistics geek, I want to see charts that show me insights on the recipes I upload, so I can spot trends and discover my mixing style.**
*Users have access to graphs and insights in their dashboard*


For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant.
Below, a description of the manual tests run to ensure the site works.
*NOTE: A particularly useful form for describing your testing process is via scenarios*

1. See a recipe:
    1. Go to the ALL COCKTAILS page
    2. Click SEE RECIPE on all the cocktails visible.
    3. Click LOAD MORE
    4. Click SEE RECIPE in the next fou cocktails

2. Rate a recipe:
    1. Open a recipe
    2. Click on the star
    3. Make sure the thank you message appears as intended
    4. Check the database to make sure the average has been modified by the new vote to make sure it was registered

3. Add a recipe:
    1. Login
    2. Go to MY RECIPES
    3. Click ADD A COCKTAIL
    4. Attempt to submit an empty form: *Not allowed*
    5. Attempt to submit a half filled form: *Not Allowed*
    6. Attempt to submit a fully filled form: *Submission occurs*

4. Edit a recipe:
    1. Login
    2. Go to MY RECIPES
    3. Open edit mode on an existing recipe
    4. Empty a field and attempt to submit: *Not allowed*
    5. Empty a field, add new information and save the changes: *it works*

5. Delete a recipe:
    1. Login
    2. Go to MY RECIPES
    3. Click DELETE RECIPE
    4. When the modal appears, click CANCEL AND GO BACK: *nothing changed*
    5. When the modal appears, click CONFIRM DELETE: *Recipe is deleted*
    6. Confirm that the recipe has been deleted from the database

6. Search for a recipe:
    1. Go to SEARCH
    2. Use the BASE SPIRIT selector to find RUM recipes: *Works*
    3. Reset the search: *works*
    4. Use all filters to find recipes made with RUM, that are CLASSIC, CITRUS and VEGAN: *works*
    5. Click on a search result: *works*

7. Use pagination:
    1. Go to SEARCH
    2. Try to click PREVIOUS button on the first page: *not allowed*
    3. Try to click NEXT on the first page: *works*
    4. Try to click NEXT in the last page of a search: *not allowed*
    5. Try to click PREVIOUS after clicking NEXT successfully: *works*
    6. Try to click either PREVIOUS or NEXT on a query that has only one page of results: *not allowed*
    7. Try to use pagination buttons in a query that has more than one page of results: *works*

8. Login and out:
    1. Login with a new username and make sure it has zero recipes: *works*
    2. Create a recipe.
    2. Log out: *works*
    3. Login with the same username and make sure the created recipe has been stored properly: *works*

9. Use the dashboard:
    1. Click on the graphs of the dashboard to see different insights: *works*

##### Different screen sizes:

- The site is responsive and works best on a large to medium screen, horizontally displayed.
- On smaller screens, it works well enough, but there is a small amount of scrolling.
- The look and feel remains the same in different sizes, trying to evoke the theme, which is cocktails.
- Some text is shortened on very small screens to avoid unnecessary scrolling.
- The menu changes to a hamburger button on mobile for ease of use.

##### Bugs and Issues
- In the future, it would be ideal to improve the way users add ingredients to the form, as it's moderatedly complex and confused users might input the wrong infomation in a field (it has been suggested to use a selector for the measure unit and force the quantity field to be a number)
- The date of creation changes once a cocktail is edited and the date of modification becomes the new date of creation. It was decided that while undesirable, this was not enough of a problem to halt submission of the project.

## Deployment

Process to deploy the project to a hosting platform:

This project was deployed on Heroku under the name of [cocktail-recipe-book](https://cocktail-recipe-book.herokuapp.com/).
Both the deployed project on Heroku and the project ran from Cloud9 look identycal and behave identically.
- Different values for environment variables: 
Config Vars --> IP = 0.0.0.0, PORT = 5000
app.secret_key = "mix_and_shake_secret"
app.url_map.strict_slashes = False

- Separate git branch: Push to Heroku --> $ git push heroku master


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)
- Inspiration for the colour palette [HERE](https://www.pinterest.ie/pin/263882859399545467/)
- I used the [Rating Stars with Simple Jquery](https://codepen.io/depy/pen/vEWWdw) by Deepak Kamat to let users rate drinks
- [Text Shadow Generator](https://css3gen.com/text-shadow/)
- For load More cocktail cards, I used "Load more content with jQuery", a [PEN BY Mahmoud Elmahdi](https://codepen.io/elmahdim/pen/sGkvH)
- For the makeid() function, I used this [snippet from StackOverflow](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript) 
- For the sorting of the Featured Recipes in my index.html page, I used a [snippet by Rohan Kumar as seen on Stack Overflow](https://stackoverflow.com/questions/21600802/jquery-sort-list-based-on-data-attribute-value/21600865)

### Media
- The photos used in this site were obtained from sites with Creative Commons licences or belong to the public domain.
- Other images have been personally photographed by the developer, who owns all the rights of usage.

### Acknowledgements
Code Institute Tutors Nakita, Haley and Niel
Mentor Chris Zielinski
Code Insitute Alumni Andres Correa