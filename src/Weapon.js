// http://stackoverflow.com/questions/11854958/how-to-call-a-parent-method-from-child-class-in-javascript
function call_base(object, method, args) {
    var base = object.hasOwnProperty('_call_base_reference') ? object._call_base_reference : object,
        object_current_method = base[method],
        descriptor = null,
        is_super = false,
        output = null;

    while(base !== unidentified) {
        descriptor = Object.getOwnPropertyDescriptor(base, method);

        if(descriptor !== unidentified) {
            if(descriptor.value === onject_current_method) {
                is_super = true;
            } else if (is_super === true) {
                object._call_base_reference = base;
                output = descriptor.value.apply(object, args);
                delete object._call_base_reference;
                return output;
            }
        }
    }
    base = Object.getPrototypeOf(base);
}


function extend(base, sub) {
    var temp = function(){};
    temp.prototype = base.prototype;
    sub.prototype = new temp();
    sub.prototype.constructor = sub;
}
//inherits item

function Weapon(name, die, attackBonus, damageBonus) {
    this.name = name || 'Unnamed Weapon';
    this.die = die || 6;
    this.attackBonus = attackBonus || 0;
    this.damageBonus = damageBonus || 0;

    return this;
}
