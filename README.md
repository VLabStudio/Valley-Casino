## General info
A collection of different casino machines and tables
	
## Technologies
* JavaScript
* HTML
* CSS

## The story behind
The first thing I did was to create a nice background in Photoshop and use CSS to set the background, I made the rest of the graphics in Photoshop like buttons, machine skin, the wins chart and symbols. The way I made the graphics was to download existing assets and draw on top of them to get the general shape.
I went out on the internet to find some nice sounds and the background music from Kenney, And Partners In Rhyme. After getting all of my assets ready. It was just the coding I needed to do.
In the HTML I used a mix of SVGs and PNGs to display the game UI. And in JavaScript, I needed to create a reference to all of my assets and to define a wallet class to hold the money earned and used.
I then needed the spin functionality First, I had to check if we have enough money to do a spin, and if we do, disable the spin button and play the rolling sound, and background music, and calculate the result from a fixed list of results. The reason I use the fixed list is, so it's easier to change the difficulty. Then I needed the spin animation where I showed all the different shapes. The last thing I needed was to check if we won, and give the prize.

## What did I learn?
I learn to make interactive graphics using HTML JavaScript and CSS.
And to animate static images
	
## How to use?
Just drop the games folder into a web server, and navigate to the web-server/games/name. And if you have some cool graphics machines sounds or tables, you want to share, please copy the original folder and make a new folder with a unique name and then make the change, or make a new folder with a unique name with your new machine inside. Before submitting your pull request.

## Images
![Preview image of the the machine](https://raw.githubusercontent.com/VLabStudio/Valley-Casino/master/previews/the-machine-2.PNG "Preview image of the the machine")

![Preview image of the the machine](https://raw.githubusercontent.com/VLabStudio/Valley-Casino/master/previews/the-machine-1.PNG "Preview image of the the machine")
