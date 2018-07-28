# Dev Env

a simple dev environment to build static websites

## Clone this repository into a new project
`$ git clone git@github.com:andrebrandaoo/dev-env.git my-project`

## Enter in your new project

`$ cd my-project`

## Remove git

`$ rm -rf ./git`

## Init git at your own repository

```
$ git init
$ git add .
$ git commit -m "my new project"
$ git remote add origin git@github.com:YOUR_NAME/YOUR_REPOSITORY.git
$ git push -u origin master
```

## Installing dependencies

`$ yarn install`

## Watching for changes

this will run at :8080 port as default

`$ yarn dev`

## Generating build files with images compressed

the build folder will be in ./dist
`$ yarn build`

## Directory struct

```
  my-project
  |-- src
  |   |-- assets
  |   |     |-- images
  |   |     |-- js
  |   |     |-- styles
  |   |-- components
  |   |   |-- application
  |   |   |   |-- header.pug
  |   |-- layout
  |   |     |-- application.pug
  |   |-- views
  |   |--   |-- index.pug
```

