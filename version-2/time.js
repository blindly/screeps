var time = {

    /** @param {Game} Game **/
    run: function(time, amount) {

        var time = Game.time % amount;
        //console.log(time);
        return time;

    }
};

module.exports = time;
