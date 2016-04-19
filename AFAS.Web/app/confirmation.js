app.controller('ConfirmationController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
    var data = service.confirmedData;
    var radios = factory.get("radios");
    
    var self = this;
    
    self.getChannelsByPriority = function (channels, p) {
        return _.map(_.filter(channels, function (ch) {
            return ch.priority.value === p;
        }), 'frequency');
    }
    
    self.view = {
        radios: data.radios,
        channels: data.channels,
        refAntenna: service.getRefAntennaName(data.refAntenna),
        contour: data.contour,
        debug: ''
    }
    self.getCoordinate = function (radio) {
        return '(' + radio.latitude + ', ' + radio.longitude + ')';
    }
    
    self.run = function () {
        
        var index = radios.length;
        var helper = new Helper();
        var gdy = new Greedy();
        var values = helper.getCompatibilityValues(radios, self.view.contour*1852);
        angular.forEach(self.view.radios, function (r, i) {
            r.frequency = 0;
            radios.push(r);
        });
        
        var A = angular.copy(_.map(radios, 'frequency'));
        var C = gdy.get_compatibility_matrix(values, radios.length);
        var F = self.getChannelsByPriority(self.view.channels, 0);
        // self.view.debug0 = 'Start with high priority required.\r\n';
        self.view.debug0 = 'Frequencies = ' + JSON.stringify(F);
        var cost = gdy.solve(A, C, F);
        
        self.view.debug1 = 'Cost = '+cost;
        self.view.debug2 = 'A = ' + JSON.stringify(A);
        self.view.debug3 = JSON.stringify(values);
        /*
        self.view.debug3 = JSON.stringify(C[381]);
        self.view.debug3 += JSON.stringify(C[382]);
        self.view.debug3 += JSON.stringify(C[383]);
        self.view.debug3 += JSON.stringify(C[384]);
        self.view.debug3 += JSON.stringify(C[385]);
        self.view.debug3 += JSON.stringify(C[386]);
        self.view.debug3 += JSON.stringify(C[387]);
        self.view.debug3 += JSON.stringify(C[388]);
        self.view.debug3 += JSON.stringify(C[389]);
        self.view.debug3 += JSON.stringify(C[390]);
        console.log(C[381]);
        */
        /*
        for (var i=index; i<radios.length; i++) {
            radios[i].frequency = A[i];
        }
        */
        /*
        if (A.indexOf(0) > -1 || (cost!=0)) {
            A = angular.copy(originalA);
            self.view.debug1 = 'Medium Priority required.\r\n';
            F = F.concat(self.getChannelsByPriority(self.view.channels, 1));
            cost = gdy.solve(A, C, F);
            for (var i=index; i<radios.length; i++) {
                radios[i].frequency = A[i];
            }
            self.view.debug1 += 'Cost='+cost;
            self.view.debug1 += JSON.stringify(A);
            self.view.debug1 += 'Frequencies=' + JSON.stringify(F);
        }
        
        if (A.indexOf(0) > -1 || (cost!=0)) {
            A = angular.copy(originalA);
            self.view.debug += 'Low Priority required.\r\n';
            F = F.concat(self.getChannelsByPriority(self.view.channels, 2));
            cost = gdy.solve(A, C, F);
        }
        self.view.debug2 = JSON.stringify(originalA);
        */
        /*
        var gdy = new Greedy();
        var helper = new TestHelper();    
        var size = 7;
        // var data = helper.getSampledData(size*(size-1)/2);
        // var data = [1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1]
        var data = [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0];
        var A = Array(size).fill(0);
        var C = gdy.get_compatibility_matrix(data, size);
        // var C = [[0,1,1,1,1,0,0],[1,0,0,1,0,1,1],[1,0,0,0,0,1,1],[1,1,0,0,0,1,1],[1,0,0,0,0,0,1],[0,1,1,1,0,0,0],[0,1,1,1,1,0,0]];
        var F = [1, 2, 3];
        var minF = 10, maxF = 100;
        var cost = Infinity;
        
        while (A.indexOf(0) > -1) {
            // f = helper.getRandomInteger(minF, maxF);
            // F.push(f);
            cost = gdy.solve(A, C, F);
            // self.outputs.push('Frequencies=[' + F + '], Assignments=[' + A + '], Total cost = '+ cost);
        }
        self.view.debug1 = cost;
        self.view.debug2 = JSON.stringify(A);
        */
    }
}]);