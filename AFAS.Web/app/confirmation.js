app.controller('ConfirmationController', ['$scope', 'afas.mock', 'afas.service', function($scope, factory, service) {
    var data = service.confirmedData;
    var radios = factory.get("radios");
    
    var getFrequenciesByPriority = function (channels, p) {
        return _.map(_.filter(channels, function (ch) {
            return ch.priority.value === p;
        }), 'frequency');
    }
    
    var self = this;
    
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
        var helper = new Helper();
        var gdy = new Greedy();
        var values = helper.getCompatibilityValues(radios, self.view.contour*1852);
        angular.forEach(self.view.radios, function (r, i) {
            radios.push(r);
        });
        
        var A = _.map(radios, 'frequency');
        var C = gdy.get_compatibility_matrix(values, radios.length);
        var cost = 0;
        var F = getFrequenciesByPriority(self.view.channels, 0);
        
        self.view.debug += 'Start with high priority required.\r\n';
        cost = gdy.solve(A, C, F);
        
        if (A.indexOf(0) > -1) {
            self.view.debug += 'Medium Priority required.\r\n';
            F = F.concat(getFrequenciesByPriority(self.view.channels, 1));
            cost = gdy.solve(A, C, F);
        }
        
        if (A.indexOf(0) > -1) {
            self.view.debug += 'Low Priority required.\r\n';
            F = F.concat(getFrequenciesByPriority(self.view.channels, 2));
            cost = gdy.solve(A, C, F);
        }
        
        self.view.debug += JSON.stringify(A);
        radios[381].frequency = 123;
    }
}]);