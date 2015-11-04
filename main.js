(function() {
    CommandLine.init('container');

    document.body.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) { // Esc
            unfocus();
            e.stopPropagation();
            e.preventDefault();
        }
    }, false);





    function unfocus() {

    }



})();