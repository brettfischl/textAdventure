var Room = (function() {

    function Room() {
        this.N = null;
        this.S = null;
        this.W = null;
        this.E = null;
        this.contents = new Set();
    }


    Room.prototype.attach = function(){};

    return Room;

})();

var GameMap = (function() {

    const GRID_W = 10;
    const GRID_H = 10;

    function GameMap() {
        this.grid = makeEmptyGrid(GRID_H, GRID_W, null);


    }

    function makeEmptyGrid(h, w, emptyVal) {
        let grid = [],
            row = [];

        for( let i = 0; i < w; i++) {
            row.push(emptyVal);
        }

        for( let j = 0; j < w; j++) {
            this.grid.push(row.slice());
        }

        return grid;
    }

    function buildPaths() {
        var rootX = Math.floor( Math.random() * GRID_H );
        var rootY = Math.floor( Math.random() * GRID_H );


        var rootRoom = {x: rootX, y: rootY};
        var uninterrupted = true;
        while(uninterrupted) {

        }
    }

    return GameMap;

})();