set -e

if [ -z "$1" ]
  then
    echo "No argument supplied"
    exit 1
fi

npx create-react-app $1

cd $1
rm README.md
echo $1 > README.md
git init
git add -A
git commit -a -m "initial commit"


rm src/App.test.js
rm src/App.css
rm src/logo.svg
rm src/registerServiceWorker.js

mkdir -p src/ui/App
mkdir -p src/data/Api
mv src/App.js src/ui/App
