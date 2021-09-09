#Install Guide
Linux
  - install Android studio (expo needed)
  - - https://reactnative.dev/docs/environment-setup
  - install nodejs
  - - curl -fsSL https://rpm.nodesource.com/setup_14.x | sudo bash -
  - - curl -fsSL https://deb.nodesource.com/test | bash -
  - add environment variable for React
  -- add below lines to $HOME/.bashrc
  - - export ANDROID_HOME=$HOME/Android/Sdk
  - - export PATH=$PATH:$ANDROID_HOME/emulator
  - - export PATH=$PATH:$ANDROID_HOME/tools
  - - export PATH=$PATH:$ANDROID_HOME/tools/bin
  - - export PATH=$PATH:$ANDROID_HOME/platform-tools
  -- source $HOME/.bash_profile
  - install reactnative
  - install npx
  - -npm install -g npx -  https://www.npmjs.com/package/npx
  - - npx react-native init AwesomeProject
  - npx react-native start

windows follow this tutorial ( https://www.youtube.com/watch?v=oZFCt69Bccc)
  - install Android studio (expo needed)
  - install nodejs 14.6
<<<<<<< HEAD
  --ADD to install guide here
  -  
=======
  - 
>>>>>>> e47fff3ff158e5b285b8a43cd81cd35c29b82ba1
