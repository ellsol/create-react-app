# Create React App

# Setup

## 1 Create Application

    npx create-react-app [projectname]

## 2 Initialize Git

    cd [projectname]
    rm README.md
    echo [projectname] > README.md
    git init
    git add -A
    git commit -a -m "initial commit"

1. Create Remote Git Repo "New Repository" -> "Create Repository"
2. Clipboard "...push existing Repository" and execute in terminal

## 3 Clean Up project

### Remove files

    rm src/App.test.js

    rm src/App.css

    rm src/logo.svg

    rm src/registerServiceWorker

### Delete Dependencies

1. delete dependencies to registerServiceWorker in index.js
2. delete dependencies to log.svg and App.css in App.js

### Create directory
Create ui/App and data/Api

    mkdir -p src/ui/App

    mdkir -p src/data/Api

### Move files

    mv src/App.js src/ui/App/index.js

and clean up dependencies

### Commit changes

    git add -A

    git commit -a -m "cleaned up directory"

    git push
