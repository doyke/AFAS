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
                    var d = data[pointer++];
                    C[i][j] = d;
                    C[j][i] = d;
                }
            }
            c++;
        }
        console.log(pointer + '-->' + data.length);
        return C;
    };
    
    self.min_degree_assignment = function (A, C) {
        var slots = [];
        for (var i=0; i < A.length; i++) {
            if (!A[i]) {
                var deg = 0;
                for (var j=0; j < A.length; j++) {
                    deg += C[i][j];
                }
                deg -= C[i][i]
                slots.push({ iteration: i, degree: deg });
            }
        }
        
        slots = sort(slots, 'iteration').reverse();
        slots = sort(slots, 'degree');
        
        return slots.map( function (o) {
            return o.iteration;
        }).reverse();
    };
}

Greedy.prototype.test = function (data, size) {
    var self = this;
    var C = self.get_compatibility_matrix(data, size);
    var A = Array(size).fill(0);
    var L = self.min_degree_assignment(A, C);
    
    return {
        C: C,
        L: L,
    }
    
};

Greedy.prototype.solve = function (A, C, F) {
    var self = this;
    var L = self.min_degree_assignment(A, C);
    var result = Infinity;
    
    for (var i in L) {
        costs = [];
        
        for (var f in F) {
            cost = 0;
            for (var j=0; j<A.length; j++) {
                if ((A[j] != 0) && (Math.abs(F[f]-A[j]) < C[L[i]][j])) {
                    cost += C[L[i]][j] - (Math.abs(F[f]-A[j]) * C[L[i]][j]);
                }
            }
            if (result >= cost) {
                result = cost;
                A[L[i]] = F[f];
            }
            costs.push(cost)
        }
    }
    return result;
};