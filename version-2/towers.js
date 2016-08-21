var towers = {

    /** @param {Game} Game **/
    run: function(Game, enableTowers) {

        if (enableTowers) {
            /*
            var tower_one = Game.getObjectById('57b5ab19c280d9554793c794');
            if (tower_one) {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < structure.hitsMax
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }

                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile) {
                    tower.attack(closestHostile);
                }
            }
            */

            for (var name in Game.rooms) {
                var towers = Game.rooms[name].find(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_TOWER
                });
                for (let tower of towers) {
                    var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                    if (target != undefined) {
                        tower.attack(target);
                    }
                }
            }
        }
    }
};

module.exports = towers;
