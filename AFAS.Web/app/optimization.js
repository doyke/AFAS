app.controller('OptimizationController', ['$scope', '$location', 'afas.mock', 'afas.service', function($scope, $location, factory, service) {
    var data = service.confirmedData;
    var radios = factory.get("radios");
    var helper = new Helper();
    
    var self = this;
    self.priorities = {
        0: { name:'high', style:'alert', value:0 },
        1: { name:'medium', style: 'warning', value:1 },
        2: { name:'low', style: 'primary', value:2 },
        3: { name:'none', style: 'hollow secondary', value:3}
    }
    self.locations = factory.get("locations");
    
    self.view = {
        radios: [],
        channels: [],
        selectedNewFrequencies: [],
        selectedUsedFrequencies: [],
        refAntenna: null,
        contour: 0,
        selectedPriority: self.priorities[2]
    }
    
    helper.onJsonChanged('newUpload', radios)
    
    angular.forEach(factory.get("civil-frequencies"), function(f, i) {
        var ch = { frequency: f, priority: self.priorities[3] };
        self.view.channels.push(ch);
    });
    
    self.addNewRadio = function (radio) {
        radio.frequency = 0;
        self.view.radios.push(angular.copy(radio));
    }
    
    self.removeRadio = function (index) {
        self.view.radios.splice(index, 1);
    }
    
    self.selectChannel = function(ch) {
        ch.priority = self.view.selectedPriority;
    }
    
    self.selectAllChannels = function () {
        angular.forEach(self.view.channels, function (ch, i) {
            ch.priority = self.view.selectedPriority;
        });
    }
    
    self.countChannels = function (p) {
        return _.filter(self.view.channels, function (ch) {
            return ch.priority === p;
        }).length;
    }
    
    self.getCoordinate = function (radio) {
        return '(' + radio.latitude + ', ' + radio.longitude + ')';
    }
    
    self.submit = function () {
        data.radios = angular.copy(self.view.radios);
        data.channels = angular.copy(_.filter(self.view.channels, function (ch) {
            return ch.priority.value < 3;
        }));
        data.refAntenna = self.view.refAntenna;
        data.contour = self.view.contour;
        $location.path('/optimization/confirmation.html');
    }
}]);