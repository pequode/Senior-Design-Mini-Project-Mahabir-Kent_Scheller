print("hello running Test Suite")
import os
import sys
directory = os.listdir("../../hello_world")
print(directory)
print(os.environ['API_KEY_USDA'])
print("if above is *** api aquired!!!!")
check = os.environ['API_KEY_USDA'];
print(len(check))
searchString = check
foundAPI=False
for fname in directory: # change directory as needed
    if searchString in fname:
        f = open(fname,'r')
        print('found string in file %s') %fname
        foundAPI=True
        break
    else:
        print('string not found in ' + str(fname))
if(foundAPI):
    print("Warring api key present")
    os.system("exit 1")
