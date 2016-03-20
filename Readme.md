# A TYPO3 + gulp example
For a full description head over to https://usetypo3.com/typo3-and-gulp.html.

## Set up the example

### Requirements
Obviously you need nodeJS to run gulp. You also need composer to setup the TYPO3 installation.

### Installation

```bash
composer install
cd src
npm install
bower install
gulp build
```

Change the database connection of TYPO3 to your setup.
Create a root page and a sys_template on that page. Include the static template of the gulp_example extension.
