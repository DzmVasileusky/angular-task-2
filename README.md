# AngularTask

One of the goals of this task is to measure your understanding of ngrx and the redux pattern.
Use ngrx and create or modify appropriate actions, effects, reducers, and selectors.

You should [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the project, and [create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) once you are finished.

1. There is user profile page with dummy data and /profile route. Use the public API at [Random User Generator](https://randomuser.me/) ([Docs](https://randomuser.me/documentation)) to pull in a random user and populate the profile page.
Add a route `/profile/{id}` which should show the same page but populate user info by id (call https://randomuser.me/api?seed={id} to emulate id request).
Id type is string.
If Id is missing - fetch some random user as was descibed above.

2. Create new page `/home` with just a single component: users search field.
When user have added more then 3 characters in the input - make a request to random user API and pull 10 random users.
Show their name + surname in the dropdown. By clicking on the user from the list open `/profile/{id}` page. Calculate `id` as `firstnamelastname` or the user from the list. Example: `/profile/dzmitryvasileuski`
When user have changed the text inside the input - refresh the list with another 10 users.

Use NGRX to fetch and store data.

The UI is up to you, although it is recommended to use [Angular Material](https://material.angular.io/components/categories) components.

# Project details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8888/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Because this challenge is designed to evaluate your ability with NGRX, unit testing is not required. If you feel that adding unit tests helps, you can add any package you feel comfortable with.

## Linting

Run `ng lint` to execute [ESLint](https://github.com/typescript-eslint/typescript-eslint).

## Available routes:
home page (default route: `/`)
user profile page (route: `/profile`)


