var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var information = require('information');
var cleaner = require('cleaner');
var dispatcher = require('dispatcher');

var towers = require('towers');

var time = require('time');

module.exports.loop = function() {

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }

        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    towers.run(Game, true);

    if (time.run(Game, 10) == 0) {
        dispatcher.run(Game, true);
    }

    if (time.run(Game, 100) == 0) {
        cleaner.run(Game);
    }

    if (time.run(Game, 10) == 5) {
        information.run(Game, true);
    }
}
