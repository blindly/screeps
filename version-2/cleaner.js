var cleaner = {

    /** @param {Creep} creep **/
    run: function(Game) {

      for(var name in Memory.creeps) {
          if(!Game.creeps[name]) {
              delete Memory.creeps[name];
              //console.log('Clearing non-existing creep memory:', name);
          }
      }
	}
};

module.exports = cleaner;
