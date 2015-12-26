function calculateMod(num) {
    return Math.floor( (num - 10)/2 );
}

function Actor() {
    this.bravery = 10;
    this.cunning = 10;
    this.wisdom = 10;

    /* null for a slot indicates nothing equipped.
        false indicates that it cannot be filled, due to race/curse/whatever restrictions. */
    this.inventory = {
        head: null,
        armor: null,
        feet: null,
        arms: null,
        primary: null,
        offhand: null,
        utility: null
    };

    this.calculatedStats = {};

    this.loot = [];

    return this;
};

Actor.prototype.equip = function(slotName, itemObj) {
    var VALID_SLOT_NAMES = ['head', 'armor', 'feet', 'arms', 'primary', 'offhand', 'utility'];

    if( typeof slotName != 'string') {
        throw new TypeError('Actor#equip requires a String for parameter slotName');
    } else {
        slotName = slotName.toLowerCase();
    }

    if(!~VALID_SLOT_NAMES.indexOf(slotName) {
        throw new Error('Actor#equip invoked with nonexistant slotName: ' + slotName);
    }

    this.inventory[slotName] = itemObj;
    this.calculateStats();
};

/**
 * @return null
 */
Actor.prototype.calculateStats = function() {
    var bravery = this.bravery,
        cunning = this.cunning,
        wisdom = this.wisdom;

    for( var item in this.inventory ) {
        if( this.inventory.hasOwnProperty(item) && this.inventory[item] !== null ) {
            //TODO: pull out stat mods .... need formal item interface
            bravery += 0;
            cunning += 0;
            wisdom += 0;
        }
    };

    //
};
