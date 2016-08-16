var towers = {

    /** @param {Game} Game **/
    run: function(Game) {

        var tower_one = Game.getObjectById('1131173523f27d44c758f3d5');
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

    }
};

module.exports = towers;
