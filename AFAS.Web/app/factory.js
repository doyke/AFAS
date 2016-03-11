app.factory('afas.factory', ['$resource', '$http', '$q', function ($resource, $http, $q) {
    var service = {};
    // api/newManageNodesApi/id
    var resources = {
        "search": $resource('/Search/GetNodeData', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { searchNodeName: '@searchNodeName', searchIPAddress: '@searchIPAdress' }
            }
        }),
        "manageNode": $resource('/api/newManageNodesApi', {}, {
            get: {
                method: 'GET',
                params: { id: '@id' }
            },
            put: { method: 'PUT' }

        }),
        "operationCenters": $resource('/api/operationCentersApi', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        }),
        "areas": $resource('/api/areasApi', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { opcId: '@opcId' }
            },
            post: {
                method: 'POST',
                isArray: false
            }
        }),
        "buildings": $resource('/api/buildingsApi', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { areaId: '@areaId' }
            },
            post: {
                method: 'POST',
                isArray: false
            }
        }),
        "rooms": $resource('/api/roomsApi', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { buildingId: '@buildingId' }
            },
            post: {
                method: 'POST',
                isArray: false
            }
        }),
        "nodes": $resource('/api/nodesApi', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { areaId: '@areaId' }
            },
            post: {
                method: 'POST',
                isArray: false
            }
        }),
        "user": $resource('/TestAccount/GetUser', {}, {
            get: {
                method: 'GET'
            }
        }),
        "event": $resource('/api/eventsApi', {}, {
            get: {
                method: 'GET',
                isArray: true,
                params: { startDate: '@startDate', endDate: "@endDate" }
            }
        }),
        "manualAddNode": $resource('/api/ManualAddNodeApi', {}, {
            post: {
                method: 'POST',
                isArray: false
            }
        }),
        "gateways": $resource('/api/gatewaysApi', {}, {
            get: {
                method: 'GET',
                isArray: true
            }
        })
    };

    service.get = function (key) {
        var deferred = $q.defer();
        resources[key].get({},
            function success(response) {
                deferred.resolve(response);
            },
            function error(msg) {
                deferred.reject(msg);
            }
        );
        return deferred.promise;
    };

    service.get = function (key, item) {
        var deferred = $q.defer();
        resources[key].get(item,
            function success(response) {
                deferred.resolve(response);
            },
            function error(msg) {
                deferred.reject(msg);
            }
        );
        return deferred.promise;
    };

    service.create = function (key, newItem) {
        var deferred = $q.defer();
        resources[key].post(newItem,
            function success(response) {
                deferred.resolve(response);
            },
            function error(msg) {
                deferred.reject(msg);
            }
        );
        return deferred.promise;
    };

    service.update = function (key, newItem) {
        var deferred = $q.defer();
        resources[key].put(newItem,
            function success(response) {
                deferred.resolve(response);
            },
            function error(msg) {
                deferred.reject(msg);
            }
        );
        return deferred.promise;
    };

    service.http = function (url) {
        var deferred = $q.defer();
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (msg) {
                deferred.reject(msg);
            });
        return deferred.promise;
    };

    return service;
}]);