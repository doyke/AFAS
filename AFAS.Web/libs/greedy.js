var Greedy = function () {};

var get_compatibility_matrix = function (data, size) {
    var C = [];
    var pointer = 0, c = 0;
    for (var j=c; j<size; j++) {
        for (var i=c; i<size; i++) {
            if (i != j) {
                C[i, j] = C[j, i] = data[pointer]
                pointer += 1;
            }
        }
        c += 1;
    }
    return C;
}

var sort = function(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
};

var min_degree_assignment = function (A, C) {
    var slots = [];
    for (var i=0; i < A.length; i++) {
        if (!A[i]) {
            var deg = 0;
            for (var j=0; j < A.length; j++) {
                deg += C[i,j]
            }
            deg -= C[i,i]
            slots.push({ iteration: i, degree: deg });
        }
    }
    return sort(slots, 'degree').map( function (o) {
        return o.iteration;
    });
};

Greedy.prototype.test = function (data, size) {
    console.log(JSON.stringify(data));
    var C = get_compatibility_matrix(data, size);
    console.log(JSON.stringify(C));
};

Greedy.prototype.solve = function (A, C, F) {
    
};