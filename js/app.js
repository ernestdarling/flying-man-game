/* 
--- START OF PSEUDO CODE ---

OBJECTIVES
-----------
1. By default Game should wait for the user to click start
2. On Game start, obstacles should start moving from right to left both top and bottom
3. Player will move up and down to avoid the obstacles
4. User loses if he runs into an obstacle
5. User wins after 120 seconds and avoids all obstacles
6. After game is over, game status displays and user can restart game

INTERFACE
---------
1. On page load:
    a. Display canvas with just plaeyer
    b. Time displays 120sec
    c. Game status blank
    d. Game buttons shows play icon only
2. On game start:
    a. Start counting down 120 seconds on game clock
    b. Game status blank
    c. Game buttons show pause and end game
    d. Obstacles start moving from right to left top/botom
3. On collision:
    a. Reset game clockdd
    b. Game status shows: You Lose!
    c. Freeze game canvas
    d. Display restat game button only
4. On Time Elapse (Game Won):
    a. Game status shows: You win!
    b. Freeze game canvas
    c. Display restart game button only

LOGIC
-----
1. On page load display only player icon with everything else frozen
2. User click play button to start the game
3. On play button click:
    a. Start game countdown
    b. Start moving obstacles top and bottom at random intervals
    c. Check for collision 
    d. If user collided, stop game and display Game lost message
    e. If time expires, display Game won message

--- END OF PSEUDO CODE ---
*/