(function(window) {

    var goodby = {};

    goodby.speak = function(name) {
        console.log("GoodBye " + name);
    }

    window.goodby = goodby;
}(window));