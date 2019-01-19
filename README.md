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

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


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
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X