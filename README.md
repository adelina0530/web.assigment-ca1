# Assignment 1 Starter Project
# Movie Collection Web App

## About the project

This project is a small web application made with **Node.js, Express and Handlebars**.  
It show a movie collection where movies are organised by categories.

The app was created for the **Web Application Development assignment**.

Users can see movie categories and open each category to view the movies inside.

---

## Pages in the application

### Home Page
The home page show a short introduction about the app and some app information.

### Movie Collection
This page show the movie categories like:
- Romance
- Action
- Serials
- Documentary

Each category can be clicked to see more details.

### Collection Details
This page show movies from the selected category.  
For every movie it display:
- movie title
- director
- year
- image

### About Page
This page show information about the app and the author.

It includes:
- app information
- author details
- location map

Some information is loaded from a **JSON file**.

---

## Technologies used

- Node.js
- Express.js
- Handlebars
- MVC architecture
- JSON data
- Fomantic UI

---

## Note about Collection Details page

At the beginning I try to make the **Collection Details** page open directly from the navigation bar.  
But I had some problems with the route and the id parameter, so the page was not working correct.

Because of this I decided to open the **Collection Details** page when the user click on a category in the Movie Collection page.

So now the flow is:

Movie Collection → click category → Collection Details page.

T



