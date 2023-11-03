//Creating "Team" class.
class Team {
    //Creating the constructor for the "Team" class with 3 properties "name", "mascot", "playerCount".
    constructor(name, mascot, playerCount) {
        //Initializing the properties.
        this.name = name;
        this.mascot = mascot;
        this.playerCount = parseInt(playerCount); // parseInt() makes sure the value passed in is converted to an integer.
    }
}

//Export the Team class using Node's module system.
module.exports = Team; 