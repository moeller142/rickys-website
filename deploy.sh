
#!/bin/bash

echo "~~~~~~~~~~~~~~~~~~~ STARTING DEPLOYMENT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
npm run build
cd build
cp index.html 200.html
surge . http://rick-feria-music.surge.sh/
echo "~~~~~~~~~~~~~~~~~~~ SUCCESSFUL DEPLOYMENT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

