function generateBody(energy) {
    var numberOfParts = Math.floor(energy / 200);
    var body = [];
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

var autocreate = {

    /** @param {Game} Game **/
    /** @param {allowCreepCreation} allowCreepCreation **/

    run: function(Game, allowCreepCreation) {

        var roles = [{
            name: 'harvester',
            group: 'harvesters',
            priority: 1,
            max: 10,
            count: _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester').length
        }, {
            name: 'upgrader',
            group: 'upgraders',
            priority: 2,
            max: 7,
            count: _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader').length
        }, {
            name: 'builder',
            group: 'builders',
            priority: 3,
            max: 5,
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

                            //console.log('Welcome new ' + myRole.name + ': ' + newName);

                            break;
                        } else {
                            console.log('Would have created ' + myRole.name + " - c: " + myRole.count + "| m: " + myRole.max);
                        }
                    } else {
                        console.log('Not creating ' + myRole.name + " - c: " + myRole.count + "| m: " + myRole.max);
                    }
                }
            }
        }
    }
};

module.exports = autocreate;
