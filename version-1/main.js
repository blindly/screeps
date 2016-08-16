var roleHarvester = require('role.harvester');
var roleAltHarvester = require('role.alt.harvester');

var roleUpgrader = require('role.upgrader');
var roleAltUpgrader = require('role.alt.upgrader');

var roleBuilder = require('role.builder');

var information = require('information');
var memoryClean = require('memory.clean');
var autoCreate = require('autocreate');

module.exports.loop = function() {

    information.run(Game, true);
    memoryClean.run(Game);
    autoCreate.run(Game, true);

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }

        if (creep.memory.role == 'alt_harvester') {
            roleAltHarvester.run(creep);
        }

        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }

        if (creep.memory.role == 'alt_upgrader') {
            roleAltUpgrader.run(creep);
        }

        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}
