var TestHelper = function() {
    
}

TestHelper.prototype.getSampledData = function (size) {
    var data = [];
    for (var i=0; i<size; i++) {
        data[i] = Math.floor(2*Math.random());
    };
    return data;
}

TestHelper.prototype.getRandomInteger = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}