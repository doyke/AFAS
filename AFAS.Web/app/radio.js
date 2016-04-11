app.controller('RadioController', ['$scope', 'afas.service', 'afas.mock', function($scope, service, factory) {
	var self = this;
    var radios = factory.get("radios");
    
    self.view = {
        radios: [],
        sortType: 'frequency', // set the default sort type
        sortReverse: false, // set the default sort order
        totalRadios: radios.length,
        totalFrequencies: radios.map(function(r) {
            return r.frequency;
        }).filter(function(f, pos, values) {
            return values.indexOf(f) == pos;
        }).length
    };
    
    self.getRadioMode = function (value) {
        return Mode.properties[value].name;
    };
    
    self.getRadioType = function (value) {
        return RadioType.properties[value].name;
    };
    
    angular.forEach(radios, function (r, i) {
        r.frequencyText = r.frequency + 'X';
        r.coordinate = '( ' + r.latitude + ', ' + r.longitude + ' )';
        r.mode = self.getRadioMode(r.mode);
        r.type = self.getRadioType(r.type);
        r.locationName = r.location.name;
        self.view.radios.push(r);
    });
}]);