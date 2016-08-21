function generateBody(energy) {
    var numberOfParts = Math.floor(energy / 200);
    var body = [];
    body.push(TOUGH);
    for (let i = 0; i < numberOfParts; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(CARRY);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(MOVE);
    }

    return body;
}

var dispatcher = {

    /** @param {Game} Game **/
    /** @param {allowCreepCreation} allowCreepCreation **/

    run: function(Game, allowCreepCreation) {

        var roles = [{
            name: 'harvester',
            group: 'harvesters',
            priority: 1,
            max: 6,
            count: _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length
        }, {
            name: 'upgrader',
            group: 'upgraders',
            priority: 2,
            max: 5,
            count: _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader').length
        }, {
            name: 'builder',
            group: 'builders',
            priority: 3,
            max: 4,
            count: _.filter(Game.creeps, (creep) => creep.memory.role == 'builder').length
        }];

        var bigHarvestEnergy = 500;
        var creepEnergy = 300;
        var createBigHarvest = false;

        for (var name in Game.rooms) {
            var energyAvailable = Game.rooms[name].energyAvailable;
            if (energyAvailable >= creepEnergy) {
                for (var role in roles) {
                    var myRole = roles[role];
                    if (myRole.count != myRole.max && myRole.count <= myRole.max) {
                        var creepBody = generateBody(energyAvailable);
                        if (allowCreepCreation) {
                            var newName = Game.spawns['Spawn1'].createCreep(creepBody, undefined, {
                                role: myRole.name,
                                working: false,
                            });
                            console.log('[' + myRole.name + "] [count: " + myRole.count + " max: " + myRole.max + "] +1" );
                            // created a new creep
                            break;
                        } else {
                            console.log('[', myRole.name, "] count: ", myRole.count, " max: ", myRole.max, "] ?", myRole.max - myRole.count );
                            // Will Create when I have Energy Available
                        }
                    } else {
                        console.log('[' + myRole.name + "] c: " + myRole.count + " m: " + myRole.max, "]");
                        // Not Creating
                    }
                }
            }
        }
    }
};

module.exports = dispatcher;
