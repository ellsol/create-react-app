set -e

rm -rf db

if [ -z "$1" ]
  then
    echo "No argument supplied"
    exit 1
fi

npx create-react-app $1

cd $1
npm install
rm README.md
echo $1 > README.md

rm src/*

cp -r ../src/* src

npm i --save prop-types react-router-dom redux redux-logger socket.io-client

git init
git add -A
git commit -a -m "initial commit"
