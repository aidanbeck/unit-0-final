//Values, Data Types, and Operations: Values such as a player object or node object can keep track of where the player is, and where they can move from a given spot.
let player = {positionIndex: 20, hasKey: false, health: 100, timePlayedHours: 2.02 };
//using an object data type to keep track of paired player information.
console.log(player);

//Stringing Characters Together: The program will need to parse image file names. It could perhaps split a file like "lighthouse.png" to "lighthouse" and ".png" so that it may use "lighthouse" as the node's identifier.
let fileName = "lighthouse.png";
let splitUp = fileName.split(".");
//using .split() to access the name without the file extension.
console.log(splitUp);

//Control Structures and Logic: This will be important to detect if a player can enter a certain room, for example, it might require a certain item.
if (player.hasKey) {
    // ENTER ROOM
} else {
    console.log("You cannot enter this room, you do not have the key!");
}
//using a conditional to check if a player has the correct item

//Working with Loops: a wider game loop will be needed between each turn, taking in input and applying it to the game state.
let gameOn = false;
while (gameOn) {
    // DETECT PLAYER INPUT
    // MOVE TO ROOM
    // RENDER ROOM
    // console.log("game is on"); (commented out to test other systems)
}
//using a while loop to repeat actions

//Building arrays: The world could be compiled as a giant array of nodes, with each node object containing indexes to the nodes it connects to.
let world = [
    [1,2],
    [0],
    [0,3],
    [2]
]
//using array literals to define a 2d structure.
console.log(world[1]);

//Using Arrays: The node array could be modified to switch out nodes if a certain node changes state.\
world[1] = [0,3];
world[3] = [2,1]; //using indexes to access and modify array values
//^creates shortcut between room 1 and 3
console.log(world[1]);