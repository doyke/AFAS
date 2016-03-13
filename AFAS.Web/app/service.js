app.service('afas.service', ['$q', function ($q) {
    
    this.getAssignments = function (radios) {
        if ( !(radios instanceof Array) )
            throw "An argument is not Array object.";
        
        if (!(radios[0] instanceof Radio))
            throw "An argument is not a Radio object.";
            
        var assignments = [];
            
        angular.forEach(radios, function(radio, index) {
            var a = { frequency: radio.frequency, id: radio.id }
            assignments.push(a);
        });        
        return assignments;
    }
    return this;
}]);