function someF() {
    if (true) {
        var localvar = 1000;
        console.log("Inside if block: " + localvar);
    }
    console.log("Inside " + localvar);
    function nested() {
        console.log("Inside nested function: " + localvar);
    }
    nested();
}
someF();