# ClickyGame

## Purpose: ##

A React.js application using components to build the UI, manages component state, and responds to user events. 

## Description ##

Test your memory... Click on an image to 'visit' the city. Try to click on all cities without visiting twice. The application will increment your score for each image you click the first time. If you 'revisit' a city, your travels end... Game Over.

Link to app: [CityClickyGame](https://vdelariva.github.io/clickygame/)

**Frameworks**
* Bootstrap

## Developer's Notes: ##
* The only tricky part was loading the background image on the Header component and the favicon. My solution was to place the background image in the Header component folder and reference it from the CSS file. When placed in the public/assets/images folder the deployed version could not 'find' the image. I'm sure there's a better way, but this was the solution I ended with.
