# EnrollmentUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server - how to run the app locally

This app utilizes feature Angular's feature modules which are lazily loaded. Enrollment is the default module. You might need node 12 and Angular 11 to avoid errors. Make sure you install npm and angular cli. Using a command line tool go to the root of the project(i.e. enrollment-ui folder) and run npm install to install all dependencies. Then run `ng serve` to spin dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. List of enrollees will appear. Number of results on the page can be changed from the dropdown below the table. Enter text in filter input above filter to filter the results. Click the pencil icon to open a dialog in order to edit name and activation status. Save button is disabled until name or activation status or both are changed. Click cancel to close the dialog. After making changes, click on save button to make the changes. A snackbar appears to indicate successful save and fresh list of enrollees is pulled. In case of an error, a snackbar appears with error code and error message.


## Running unit tests

Using a command line tool, go to the root of the project(i.e. enrollment-ui folder) and run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

