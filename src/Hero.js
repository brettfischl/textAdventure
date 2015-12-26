function Hero() {
    this.bravery = 10;
    this.cunning = 10;
    this.wisdom = 10;

    this.inventory = {
        head: null,
        armor: null,
        feet: null,
        arms: null,
        primary: null,
        offhand: null,
        utility: null
    };

    this.loot = [];

    return this;
}

Hero.prototype.equipWeapon = function(weap) {
    if(!weap instanceof Weapon) {
        throw new TypeError('Hero#equipWeapon only accepts Weapons');
    }

    //move old weapon into loot
    if(this.inventory.primary) {
        loot.push(this.inventory.primary);
    }

    this.inventory.primary = weap;
};

Hero.prototype.rollAttack = function() {
    var attackBonus = Math.floor( (this.cunning - 10)/2 ),
        weaponBonus = 0,
        weapon = this.inventory.primary,
        attackDie = 20; //d20 for attacks

    if(weapon) {
        weaponBonus = weapon.attackBonus;
    }

    return roll(attackDie, attackBonus + weaponBonus);
};

Hero.prototype.rollDamage = function() {
    var damageBonus = Math.floor( (this.bravery - 10)/2 ),
        weapon = this.inventory.primary,
        weaponDie = weapon.die || 4, //num face on dice
        weaponBonus = weapon.damageBonus || 0;

    return roll(weaponDie, damageBonus + weaponBonus);
};
