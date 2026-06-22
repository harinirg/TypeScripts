function someFn() {
    const localvar = 1000;
    if (true) {
        console.log("Inside if block: " + localvar);
    }
    console.log("Inside function: " + localvar);
    function nested() {
        console.log("Inside nested function: " + localvar);
    }
    nested();
}
someFn();