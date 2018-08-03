Paws to Care Website README

What has been done so far:
-Created database with fake data for owners, animals, and notes
-Added custom css to make website look better
-Converted html pages to php
-Created one universal navbar
-Added login drop down menu
-Formatted checks and x's in tables
-Add pagination for tables

What still needs to be done:
-Add authentication for owners and admins
-Format notes for tables
-Create owners page (server side rendering)
-Create test suite using jasmine
-Finalize project



Authentication for the login bar was scheduled for milestone 1 but has been pushed back to the final product in exchange for formatting the x's and checks on the tables.

The current files are using username: tyler and password: 4321 to login to the database, should be changes as a final step.

The login dropdown menu still looks a little off, will continue to adjust it until it looks better.

Animal tables now are paginated to 10 animals a page. Page selection range is 5 pages with a dropdown that will select a page that is a multiple of 10. There are also previous and next buttons for single page navigation.


