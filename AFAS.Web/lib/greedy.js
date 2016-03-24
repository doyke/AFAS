var Greedy = function () {
    var self = this;
    var sort = function(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    };
    
    self.get_compatibility_matrix = function (data, size) {
        var C = math.zeros([size,size]);
        var pointer = 0, c = 0;
        for (var j=c; j<size; j++) {
            for (var i=c; i<size; i++) {
                if (i != j) {
                    C[i][j] = C[j][i] = data[pointer++];
                }
            }
            c++;
        }
        return C;
    };
    
    self.min_degree_assignment = function (A, C) {
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
}

Greedy.prototype.test = function (data, size) {
    var self = this;
    console.log(data.length);
    var C = self.get_compatibility_matrix(data, size);
    console.log(JSON.stringify(C));
    var L = self.min_degree_assignment(A, C);
};

Greedy.prototype.solve = function (A, C, F) {
    
};