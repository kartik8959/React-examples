var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.getPlayerInfo = function (name, runs) {
        return 'this is ' + name + ' My runs ' + runs;
    };
    return Player;
}());
var o = new Player();
o.getPlayerInfo('sachin', 2000);


