function a() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0);
        if (firstLetter === 'J' || firstLetter==='j'){
            goodby.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
}
a();

