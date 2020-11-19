<h1>Paws to Care Website README</h1>

![Paws to Care Logo](images/logo.png)

<h2>Technologies Used:</h2>

* HTML/CSS (*jQuery, bootstrap*)/Javascript
* PHP 7.0
* mySQL 5.7


<h2>How to Implement:</h2>

Files should be placed in the appropriate location on the server. For apache it is usually /var/www/html or just /var/www. PHP 7.0 should be installed on the machine as well as mySQL 5.7. Included is a creation script for mySql table creation called dbCreation.sql. It will create an admin tyler with password 4321 but this can be changed in the file. From there, migrate Paws to Care existing data to the database. Any further questions can be directed to me.



<h2>What has been done so far:</h2>

* Created database with fake data for owners, animals, and notes
* Added custom css to make website look better
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


