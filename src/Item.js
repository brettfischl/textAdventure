function ItemName(prefix, baseName, suffix) {
    this.prefix = prefix;
    this.baseName = baseName;
    this.suffix = suffix;

    return this;
}

ItemName.prototype.toString = function() {
    return [this.prefix, this.baseName, this.suffix].join(' ');
};

function Item(slot, prefix, baseItem, suffix) {
    this.name = new ItemName(prefix, baseItem, suffix);
    this.slot = slot;

    return this;
}

Item.prototype.getName = function() {
    return '' + this.name;
}

function pullBaseItemData(baseItemName) {


    return {};
}

function pullPrefixData(prefixName) {
    var

    return {};
}
