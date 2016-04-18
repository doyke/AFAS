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
    
    var getRadioMode = function (value) {
        return Mode.properties[value].name;
    };
    
    var getRadioType = function (value) {
        return RadioType.properties[value].name;
    };
    
    angular.forEach(radios, function (r, i) {
        self.view.radios.push({
            id : r.id,
            frequency: r.frequency + 'X',
            ident: r.ident,
            coordinate: '( ' + r.latitude + ', ' + r.longitude + ' )',
            mode: getRadioMode(r.mode),
            type: getRadioType(r.type),
            location: r.location.name
        });
    });
}]);