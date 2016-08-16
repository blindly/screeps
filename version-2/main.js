var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');

var information = require('information');
var memoryClean = require('memory.clean');
var autoCreate = require('autocreate');

module.exports.loop = function() {

    information.run(Game, false);
    memoryClean.run(Game);
    autoCreate.run(Game, true);

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester' || creep.memory.role == 'alt_harvester') {
            roleHarvester.run(creep);
        }

        if (creep.memory.role == 'upgrader' || creep.memory.role == 'alt_upgrader') {
            roleUpgrader.run(creep);
        }

        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
