all: deploy

deploy:
	composer install --no-dev --ignore-platform-reqs
	sh -c "cd src ; npm install"
	sh -c "cd src ; bower install"
	sh -c "cd src ; gulp build"
