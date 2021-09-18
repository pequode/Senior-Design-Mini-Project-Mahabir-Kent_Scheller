# Senior-Design-Mini-Project-Mahabir-Kent_Scheller

This project focuses on building an app made with REACT native js. The app showcases the integration of a few key concepts for front end development. 
The app functions as a barcode calorie counter. The user logins to verify identy with google login services and then can scan barcodes and get corisponding calorie information. This information is then sent to a database where their total calorie intake is recored. If the user wishes they may retrieve their calories information and read their total calorie intake. 

# NOTE:

`Due to an error on George's part some of Brain M's commits are missing. For much of the project(execpt in the crunch) the main code was implemented in such a way as to protect it from app-breaking changes. To accomplish this branches were made, worked on, then merged back into main. George ran into some issues with getting confused about which branches to work on so he deleted all of the merged branches. This also seems to have deleted the commit history. Because George would merge his code more often More of Brains commit Messages were lost. The minutes document in the `/docs` folder has a better account of what was contributed by each party.` 

## Javascript:
For both of the contributers in this projet javascript was fairly unfimilar. This proved to be a learning curve for much of the apps development because js allows for things to be defined in so many different ways.

## React Native:
Learning the React Native Framework, even a little, was also a large challenge. The combination of a new language and setting up a common enviornment proved to be more of an issue that was intially anticipated. 

## Agile:
For much of this project we experimented with agile flow on trello (https://trello.com/b/qGLcf2kC/snr-des-mini-proj) and breifly using github issue. However, during crunch time our development style regressed to waterfall. 

## API's:
A large part of this project had to do with understanding APIs. To accomplish our project we integrated the following API's with each other:
- Google Firebase-database
- Google Firebase-authentication
- USDA Api
- Barcode scanning API
- React Native Navigation

## Github Workflow
For this project we used a more expansive set of Github's features than either of us had used in the past. This included use of github actions, `.gitignore`,github issues, Branches and Merging.  Although The project was very difficult, these tools helped with a lot of integration issue and allowed us to develop more features.
### Github Secrets
Our implementation of github secrets was infiorior to say the least. While we did create a github secret for our FDA API key we did not integrate it onto local development enviormnets. The only purpose our github secrets variable serves is to allow an automated check to make sure that the api key was not included. Addionally we had a few commits where our method of odviscating the api key failed and it was included. This is all not even to mention all of the firebase authentication material that is currently viewable on our app. 

## Beginings of CI/CD and automation
This project was also a good intro into the beginings of automation and the general dev-ops mindset, the agile sprints combined with the small automated testing suite helped make development easier, even if for just a short period at the end of the project.

 
