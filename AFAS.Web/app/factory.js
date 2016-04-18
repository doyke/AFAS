app.factory('afas.factory', ['$resource', '$http', '$q', function ($resource, $http, $q) {
    var service = {};
    
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
    
    service.generateRadios = function (number) {
        var locations = [
            new Location(1, 'BANGKOK/DONMUENG', 'VTBD'),
            new Location(2, 'BANGKOK/SUVARNABHUMI','VTBS'),
            new Location(3, 'BURIRAM', 'VTUO'),
            new Location(4, 'CHIANG MAI', 'VTCC'),
            new Location(5, 'CHIANG RAI','VTCT'),
            new Location(7, 'CHUMPHON', 'VTSE'),
            new Location(8, 'HAT YAI', 'VTSS'),
            new Location(9, 'HUA HIN', 'VTPH')
        ]
        var radios = [
            new Radio(1, DME, AM, BKK, 124, 13.8935139, 100.5961667, 5.1816),
            new Radio(2, DME, AM, SVB, 51, 13.6700056, 100.7277722, 1.524),
            new Radio(3, DME, AM, BRM, 119, 15.2395472, 103.2588556, 170.383),
            new Radio(4, DME, AM, CMA, 116, 18.7661389, 98.96120556, 312.7248),
            new Radio(5, DME, AM, CTR, 112, 19.9488306, 99.88315833, 388.3152),
            new Radio(6, DME, AM, CMP, 76, 16.6353694, 101.9889167, 252.374),
            new Radio(7, DME, AM, CPN, 37, 10.711175, 99.36554167, 5.4864),
            new Radio(8, DME, AM, HTY, 100, 6.9340972, 100.3879833, 27.1272),
            new Radio(9, DME, AM, HHN, 80, 12.6344778, 99.95110833, 9.4488),
            new Radio(10, DME, AM, KKN, 96, 16.4708556, 102.7879639, 199.644),
            new Radio(11, DME, AM, KRT, 84, 14.9173278, 102.1398222, 207.569),
            new Radio(12, DME, AM, KBI, 47, 8.107525, 98.97745833, 27.7368),
            new Radio(13, DME, AM, LPN, 94, 18.2766583, 99.50236389, 241.097),
            new Radio(14, DME, AM, LOY, 106, 17.447, 101.7231083, 265.786),
            new Radio(15, DME, AM, MHS, 102, 19.3197389, 97.91224167, 510.8448),
            new Radio(16, DME, AM, MST, 114, 16.6987444, 98.54212222, 213.055),
            new Radio(17, DME, AM, NKP, 53, 17.3883361, 104.6382889, 177.698),
            new Radio(18, DME, AM, NKS, 121, 8.5415972, 99.94683889, 5.7912),
            new Radio(19, DME, AM, NKR, 39, 14.9466306, 102.3111806, 230.429),
            new Radio(20, DME, AM, NAN, 104, 18.8090806, 100.7826167, 212.141),
            new Radio(21, DME, AM, NTW, 110, 6.5272444, 101.7451194, 8.8392),
            new Radio(22, DME, AM, PCB, 101, 16.676, 101.1966278, 138.684),
            new Radio(23, DME, AM, PSL, 88, 16.7703056, 100.2913694, 42.9768),
            new Radio(24, DME, AM, PAE, 55, 18.1341806, 100.1662722, 165.811),
            new Radio(25, DME, AM, PUT, 116, 8.1139833, 98.30697778, 10.668),
            new Radio(26, DME, AM, RAN, 81, 9.7780083, 98.58363889, 17.0688),
            new Radio(27, DME, AM, RYN, 72, 12.7786778, 101.6763694, 4.572),
            new Radio(28, DME, AM, ROT, 49, 16.11685, 103.7720694, 137.16),
            new Radio(29, DME, AM, SKN, 89, 17.2140944, 104.1367639, 161.239),
            new Radio(30, DME, AM, SMU, 123, 9.5470139, 100.0617444, 3.048),
            new Radio(31, DME, AM, STN, 43, 9.1294667, 99.13473889, 7.0104),
            new Radio(32, DME, AM, TRN, 113, 7.5088306, 99.62603333, 15.8496),
            new Radio(33, DME, AM, TRT, 36, 12.2776778, 102.3203389, 29.8704),
            new Radio(34, DME, AM, UBL, 74, 15.2451778, 104.8658833, 124.358),
            new Radio(35, DME, AM, UDN, 90, 17.3847861, 102.7749417, 179.222),
            new Radio(36, DME, AM, BUT, 45, 12.666675, 101.0004639, 9.7536),
            new Radio(37, DME, AM, CHM, 109, 18.77164167, 98.96659167, 311),
            new Radio(38, DME, AM, HTY, 104, 6.928488889, 100.3942639, 28),
            new Radio(39, DME, AM, KPS, 92, 14.16577778, 99.95430556, 7),
            new Radio(40, DME, AM, KPS, 98, 14.09153056, 99.91264722, 13),
            new Radio(41, DME, AM, KRT, 125, 14.93498333, 102.072725, 220),
            new Radio(42, DME, AM, LOB, 115, 14.88116389, 100.6633083, 36),
            new Radio(43, DME, AM, PSL, 99, 16.79256667, 100.2746389, 46),
            new Radio(44, DME, AM, PCK, 84, 11.78586389, 99.80832222, 10),
            new Radio(45, DME, AM, SKL, 82, 7.185305556, 100.6073028, 9),
            new Radio(46, DME, AM, SRT, 79, 9.133130556, 99.13162222, 10),
            new Radio(47, DME, AM, TKL, 95, 15.27907222, 100.2974639, 29),
            new Radio(48, DME, AM, BUT, 105, 12.67471111, 101.0068056, 12),
            new Radio(49, DME, AM, UBL, 93, 15.26241944, 104.8833389, 125),
            new Radio(50, DME, AM, UDN, 86, 17.38286111, 102.7984833, 178),
        ];
        
        return radios
    }

    return service;
}]);