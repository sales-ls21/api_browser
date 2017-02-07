# A Simple AngularJS User Interface for a Django RESTframework API

The task here was relatively simple: create a basic user interface to display the data in the API I created here: https://github.com/sales-ls21/musicAPI. 
###Instructions:
1. Fork or clone both this repo and the one containing the API, referenced above. 
2. Navigate first to the location of the manage.py file in the API folder. Go ahead and run python manage.py makemigrations, then python manage.py migrate.
3. Once those migrations are done, run python manage.py runserver to launch the API server. You can navigate to this in the browser if you'd like. 
  1. *IMPORTANT* This step has to be done for the user interface to display the results properly. If the API server is *not* running, no results will return.
4. Next, open another gitbash tab and navigate to the location where you cloned this repo. You'll need to install all the dependencies listed in the package.json file.
5. After that, go ahead and run your local server. 
6. Go ahead and test the user interface. It should return albums, songs, artists, and genres. If it does not, make sure the API server hasn't somehow stopped running. 
