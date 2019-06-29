# wp-react-boiler

## setup

- fork & clone repo into your chosen php dev environment's site folder (eg. `www/`, `htdocs/`)
- create a new db (w/ phpMyAdmin)
- copy & rename `wp-config-sample.php` to `wp-config.php`
- fill `wp-config.php` with your db name & credentials
- navigate to `http://localhost/wp-react-boiler/wp-admin/install.php` & follow on-screen the prompts to set up your admin account
- start your php dev env
- navigate into `www/` and install npm dependencies (`cd www && npm i`)
- locally serve up the client by running `npm start`
- visit http://localhost:3000/
