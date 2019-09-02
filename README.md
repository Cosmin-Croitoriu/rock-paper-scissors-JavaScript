## Rock Paper Scissors - JavaScript

I am trying trough this project to refresh my knowledge of Vanilla Javascript, by doing something fun.
 The idea of the game is to have an interactive web page in which the user will play 'Rock Paper Scissors' against a computer, by clicking one of the 3 given options, the computer will select a random option as well; both results will be compared; a message will be displayed (if you lose or win)and a form of score will be kept. 
   I will try later on to addapt it for player vs player, by hosting it on a web page and connecting 2 
players to play remotely.
#### HTML elements and CSS styling


I started by creating the Html elements needed. I found and downloaded the appropriate icons (png files) for the Rock, Paper, Scissors. Then I have used CSS to style all the Html elements.

#### JavaScript
 
 I, initially, declared and assigned, without Jquery, all the element classes and ids from the index page. 
 Afterword I have created 3 methods, for each buttopn to test with 'console.log' if clicking the buttons will work, 
   then I incorporated all 3 into a 'main' function, 
   and instead of console.log, to call a 'game' function that will have as an argument the button that has been pressed as a string( "r", "p", "s"). 
 In a separate function I have created the computer random selection.
