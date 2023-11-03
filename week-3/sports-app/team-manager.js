//Import the "Team" class from "team.js".
const Team = require('./team');

//Creating the array of teams.
const teams = [
    new Team('Alabama', "Crimson Tide", 54),
    new Team('LSU', 'Tigers', 54),
    new Team('Georgia', 'Bulldogs', 54),
    new Team('Texas', 'Longhorns', 54),
    new Team('USC', 'Trojans', 54)
];

//Function that returns the array of teams.
function getTeams() {
    return teams;
}

//Export the "getTeams" function using the Node.js module system.
module.exports.getTeams = getTeams;

//Function that returns a single team.
function getTeam(name) {
    return teams.find(team => team.name === name); 
}

//Export the "getTeam" function using the Node.js module system.
module.exports.getTeam = getTeam;

//Function that displays the teams in a formatted string.
function displayTeam(team) {
    return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}\n`;
}

//Export the "displayTeam" function using the Node.js module system.
module.exports.displayTeam = displayTeam;