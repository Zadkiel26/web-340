//Import the "TeamManager" module from "team-manager.js".
const TeamManager = require('./team-manager');
//Import the "displayTeam" function from the "TeamManager" module.
const { displayTeam } = TeamManager;

//Getting the array of teams from the "TeamManager" module.
const teams = TeamManager.getTeams();

//Getting a single team from the "TeamManager" module.
const teamA = TeamManager.getTeam('Alabama');
const teamB = TeamManager.getTeam('Georgia');

//Displaying the array of teams in the console window
console.log('-- DISPLAYING TEAMS --');
//Looping through all the teams in the array and displaying the information of each team.
teams.forEach(team => {
    console.log(displayTeam(team));
});

//Displaying "teamA" in the console window
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(teamA));

//Displaying "teamB" in the console window
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(displayTeam(teamB));

