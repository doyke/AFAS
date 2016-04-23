app.controller('ConfirmationController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
    var data = service.confirmedData;
    var radios = factory.get("radios");
    
    var self = this;
    self.progressMessages = {
        0: { text: "Calculating assignment constraints...", value:30 },
        1: { text: "Building compatibity matrix...", value:50 },
        2: { text: "Solving assignment with high priority frequencies...", value:60 },
        3: { text: "Solving assignment with medium priority frequencies...", value:70 },
        4: { text: "Solving assignment with low priority frequencies...", value:80 },
        5: { text: "Frequency assignment has been succefully done.", value:100 }
    }
    
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
        angular.forEach(self.view.radios, function (r, i) {
            r.frequency = 0;
            radios.push(r);
        });
        var values = helper.getCompatibilityValues(radios, self.view.contour*1852);
        var A = _.map(radios, 'frequency');
        var C = gdy.get_compatibility_matrix(values, radios.length);
        var F = self.getChannelsByPriority(self.view.channels, 0);
        var cost = gdy.solve(A, C, F);
        
        if (A.indexOf(0) > -1 || (cost!=0)) {
            A = _.map(radios, 'frequency');
            F = F.concat(self.getChannelsByPriority(self.view.channels, 1));
            cost = gdy.solve(A, C, F);
            for (var i=index; i<radios.length; i++) {
                radios[i].frequency = A[i];
            }
        }
        
        if (A.indexOf(0) > -1 || (cost!=0)) {
            A = _.map(radios, 'frequency');
            F = F.concat(self.getChannelsByPriority(self.view.channels, 2));
            cost = gdy.solve(A, C, F);
            for (var i=index; i<radios.length; i++) {
                radios[i].frequency = A[i];
            }
        }
        
        self.view.debug0 = 'Frequencies = ' + JSON.stringify(F);
        self.view.debug1 = 'Cost = '+cost;
        self.view.debug2 = 'A = ' + JSON.stringify(A);
    }
}]);