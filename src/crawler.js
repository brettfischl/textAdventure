var ATK_BUTTON = {
    X1: 100, X2: 10, Y1: 150, Y2: 200
};

function init() {
    var canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = 600;
    canvas.height = 300;
    document.body.appendChild(canvas);


    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'gray';
    ctx.fillRect(ATK_BUTTON.Y1, ATK_BUTTON.Y2, ATK_BUTTON.X1, ATK_BUTTON.X2);

    var pc, longsword;

    pc = new Hero();
    longsword = new Weapon('Longsword', 8);

    pc.equipWeapon(longsword);

    console.log(pc.rollAttack());
    console.log(pc.rollDamage());
    console.log(pc.rollAttack());
    console.log(pc.rollDamage());

    window.addEventListener("mousedown", doMouseDown, false);

    function doMouseDown(event) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;

        if(x>0 && x<=canvas.width && y>0 && y<canvas.height) {
            console.log(x,y);

            if(x>=ATK_BUTTON.X1 && x<=ATK_BUTTON.X2 && y>=ATK_BUTTON.Y1 && y<=ATK_BUTTON.Y2) {
                console.log('attack');
            }
        }


    }
}

window.setTimeout(init, 1000);


//TODO: make randomization better!
function roll(diceFace, bonus, diceNumber) {
    if( typeof diceNumber != 'number' ) {
        diceNumber = 1;
    }

    var sum= 0;

    for( var i=0; i<diceNumber; i++) {
        sum += Math.floor( Math.random()*diceFace ) + 1;
    }

    return sum;
}
