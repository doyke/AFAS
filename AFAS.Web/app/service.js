app.service('afas.service', ['$q', function ($q) {
    
    var findRadios = function (radios, f) {
        return radios.filter(function(radio) {
            return radio.frequency === f;
        })
    };
    
    this.getAssignments = function (radios, frequencies) {
        if ( !(radios instanceof Array) )
            throw "An argument is not Array object.";
        
        if (!(radios[0] instanceof Radio))
            throw "An argument is not a Radio object.";
        
        var assignments = [];
        
        angular.forEach(frequencies, function(f, i) {
            var results = findRadios(radios, f);
            var a = {};
            if (results.length) {
                angular.forEach(results, function(r, i) {
                    a = { frequency: r.frequency, radioId: r.id };
                    assignments.push(a);
                });
            } else {
                a = { frequency: f, radioId: 0 };
                assignments.push(a);
            }
        });
        
        return assignments;
    };
    
    this.getRadioMode = function (value) {
        return Mode.properties[value].name;
    };
    
    this.getRadioType = function (value) {
        return RadioType.properties[value].name;
    };
    
    return this;
}]);