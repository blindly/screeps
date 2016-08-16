var information = {

    /** @param {Game} Game **/
    run: function(Game, show) {

        if (show) {
            for (var name in Game.rooms) {
                var energyAvailable = Game.rooms[name].energyAvailable;
            }

            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
            var alt_harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'alt_harvester');

            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
            var alt_upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'alt_upgrader');

            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

            console.log("[U: " + upgraders.length + "] [H: " + harvesters.length + "] [B: " + +builders.length + "] [T: " + Object.keys(Game.creeps).length + "] [E: " + energyAvailable + "]");

            //console.log("[U: " + upgraders.length + "] [AU: " + alt_upgraders.length + "] [H: " + harvesters.length + "] [AH: " + alt_harvesters.length + "] [B: " + +builders.length + "] [T: " + Object.keys(Game.creeps).length + "] [E: " + energyAvailable + "]");
        }
    }
};

module.exports = information;
