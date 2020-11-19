<h1>Paws to Care Website README</h1>

![Paws to Care Logo](images/logo.png)

<h2>About:</h2>

This is a semester long project for a Web Programming II course. This website demonstrates my skills with basic web development such as html/css/javascript and more advanced PHP and database programming showing full stack development. The website is a mock-up of a veterinary clinic where users can login and get information on their pets and faculty can access all information. Progress was tracked using milestones and one-on-one meetings with the instructor (client).

*Note:* The first version of the website used server-side rendering for the DB tables but was then later switched to client-side rendering to show the difference in loading speed for the webpages vs the tables on webpages.

<h2>Technologies and Features:</h2>

* jQuery
* bootstrap
* Jasmine Unit Testing
* PHP and DB integration
* User Login with Encryption and Salt
* Deployed using Docker



<h2>How to Implement:</h2>

Files should be placed in the appropriate location on the server. For apache it is usually /var/www/html or just /var/www. PHP 7.0 should be installed on the machine as well as mySQL 5.7. Included is a creation script for mySQL table creation called dbCreation.sql. It will create an admin tyler with password 4321 but this can be changed in the file. From there, migrate Paws to Care existing data to the database. Any further questions can be directed to me.

<h2>What has been done so far:</h2>

* Created database with fake data for owners, animals, and notes
* Added custom css to make website visually  pleasing
* Converted html pages to php
* Created one universal navbar
* Added login drop down menu
* Formatted checks and x's in tables
* Add pagination for tables
* Add authentication for owners and admins
* Format notes for tables
* Create owners page (server side rendering)
* Create test suite using jasmine
* Finalize project

<h2>What still needs to be done:</h2>

* All finished



<h2>Additional Notes:</h2>

The current database is using the admin account username: tyler and password: 4321 to login to the database, should be changes as a final step to a Paws to Care Employee.

Animals and Owner tables now are paginated to 10 animals a page. HTML selection dropdown element will select a page that is a multiple of 10. There are also previous and next buttons for single page navigation.

Website was developed and tested on a LAMP server(tested using docker). 
* Linux (debian)
* Apache2 server
* PHP 7.0
* mySQL 5.7


