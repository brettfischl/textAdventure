
var CommandLine = (function() {

    const KEYCODES = {
        BACKSPACE: 8,
        TAB: 9 ,
        ENTER: 13
    };

    const CMDS = [
      'look', 'rest', 'wait', 'inventory'
    ];

    var history = [];
    var histpos = 0;
    var histtemp = 0;

    //dom objects
    var $container,
        $cl,
        $output;

    function init(containerId) {
        //build dom elements, store references
        $container = document.getElementById(containerId);

        $container.insertAdjacentHTML('beforeEnd',
            ['<output></output>',
             '<div id="input-line" class="input-line">',
             '<div class="prompt">$&gt;</div><div><input class="cmdline" autofocus /></div>',
             '</div>'].join(''));

        $cl = $container.querySelector('#input-line .cmdline');
        $output = $container.querySelector('output');

        //set up event listeners for dom elements
        window.addEventListener('click', function(e) {
            $cl.focus();
        }, false);
        $cl.addEventListener('keydown', handleKeystroke, false);
        $cl.addEventListener('keyup', history, false);
    }

    function addHistory(entry) {
        // Save shell history.
        history.push(entry);
        histpos = history.length;
    }

    function output(str) {
        var newLine = document.createElement('p');
        newLine.innerText = str;
        $output.appendChild(newLine);
        $cl.scrollIntoView();
    }

    function history(e) {
        if(history.length) {
            if(e.keyCode == 38 || e.keyCode == 40) {

                if (history[histpos]) {
                    history[histpos] = this.value;
                } else {
                    histtemp = this.value;
                }

                if (e.keyCode == 38) { // up
                    histpos--;

                    if (histpos < 0) {
                        histpos = 0;
                    }
                } else if (e.keyCode == 40) { // down
                    histpos++;
                    if (histpos > history.length) {
                        histpos = history.length;
                    }
                }

                this.value = history[histpos] ? history[histpos] : histtemp;
                this.value = this.value; // Sets cursor to end of input.

            }
        }
    }

    function handleKeystroke(e) {
        //ignore backspace if empty
        switch (e.keyCode) {
            case KEYCODES.BACKSPACE:
                if (!this.value && e.keyCode ) {
                    //more is TODO
                    return;
                }
                break;

            case KEYCODES.TAB:
                e.preventDefault();
                //TODO: tab completion
                break;

            case KEYCODES.ENTER:
                if(this.value) {
                    var aCommand = this.value;
                    this.value = '';

                    addHistory('> ' + aCommand);
                    output(aCommand)
                    doCommand(aCommand);
                }
                break;
        }
    }

    function doCommand(command) {
        if( command && command.trim() ){
            var args = command.split(' ').filter(function(val, i) {
              return val;
            });

            var cmd = args.shift().toLowerCase();
        }

        switch (cmd) {
            case 'look':
                output('you look around.  you are in a dungeon');
                break;

            case 'rest':
                output('you take a nap.  unfortunately, you don\'t have any hp to regenerate');
                break;

            case 'wait':
                output('you wait for a few minutes.  nothing happens');
                break;

            case 'inventory':
                output('inventory contents: pocket lint, rubber band.');
                break;

            default:
                output('command unrecognized; available commands: ' + CMDS.join(', '));
        }

        this.value = ''; // Clear/setup line for next input.
    }

    return {
        init: init
    };

})();
