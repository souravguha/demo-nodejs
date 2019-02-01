exports.sum = function(num1, num2) {
    return num1+num2;
}

exports.checkPrime = function(n) {
    var counter = 0;
    for(var i=0; i<=n; i++) {
        console.log(i);
        if(n%i == 0) {
            counter++;
        }
    }
    if(counter == 2) {
        return true;
    } else {
        return false;
    }
}