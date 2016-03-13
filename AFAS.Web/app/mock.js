app.factory('afas.mock', function () {
    
    var service = {};
    
    var locations = [
        new Location(1,'BANGKOK/DONMUENG','VTBD'),
        new Location(2,'BANGKOK/SUVARNABHUMI','VTBS'),
        new Location(3,'BURIRAM','VTUO'),
        new Location(4,'CHIANG MAI','VTCC'),
        new Location(5,'CHIANG RAI','VTCT'),
        new Location(6,'CHUMPAE',''),
        new Location(7,'CHUMPHON','VTSE'),
        new Location(8,'HAT YAI','VTSS'),
        new Location(9,'HUA HIN','VTPH'),
        new Location(10,'KHON KAEN','VTUK'),
        new Location(11,'KHORAT','VTUN'),
        new Location(12,'KRABI','VTSG'),
        new Location(13,'LAMPANG','VTCL'),
        new Location(14,'LOEI','VTUL'),
        new Location(15,'MAE HONG SON','VTCH'),
        new Location(16,'MAE SOT','VTPM'),
        new Location(17,'NAKHON PHANOM','VTUW'),
        new Location(18,'NAKHON SI THAMMARAT','VTSF'),
        new Location(19,'NAKHON RATCHASIMA','VTUQ'),
        new Location(20,'NAN','VTCN'),
        new Location(21,'NARATHIWAT','VTSC'),
        new Location(22,'PHETCHABUN','VTPB'),
        new Location(23,'PHITSANULOK','VTPP'),
        new Location(24,'PHRAE','VTCP'),
        new Location(25,'PHUKET','VTSP'),
        new Location(26,'RANONG','VTSR'),
        new Location(27,'RAYONG',''),
        new Location(28,'ROI ET','VTUV'),
        new Location(29,'SAKON NAKHON','VTUI'),
        new Location(30,'SAMUI','VTSM'),
        new Location(31,'SURAT THANI','VTSB'),
        new Location(32,'TRANG','VTST'),
        new Location(33,'TRAT','VTBO'),
        new Location(34,'UBON RATCHATHANI','VTUU'),
        new Location(35,'UDON THANI','VTUD'),
        new Location(36,'U TAPHAO',''),
        new Location(37,'RTAF-CHIANG MAI',''),
        new Location(38,'RTAF-HAT YAI',''),
        new Location(39,'RTAF-KAMPHAENG SAEN',''),
        new Location(40,'RTAF-KHORAT',''),
        new Location(41,'RTAF-LOP BURI',''),
        new Location(42,'RTAF-PHITSANULOK',''),
        new Location(43,'RTAF-PRACHUAP',''),
        new Location(44,'RTAF-SONGKHLA',''),
        new Location(45,'RTAF-SURAT THANI',''),
        new Location(46,'RTAF-TAKHLI',''),
        new Location(47,'RTAF-U TAPHAO',''),
        new Location(48,'RTAF-UBON',''),
        new Location(49,'RTAF-UDON',''),
        new Location(50,'LUANG PHABANG',''),
        new Location(51,'PAKSE',''),
        new Location(52,'SAVANNAKHET',''),
        new Location(53,'VIENTIANE',''),
        new Location(54,'IENG KHOUANG',''),
        new Location(55,'PHNOM PENH',''),
        new Location(56,'SIEM REAP',''),
        new Location(57,'ALOR STAR',''),
        new Location(58,'BATU ARANG',''),
        new Location(59,'BINTULU',''),
        new Location(60,'BUTTERWORTH',''),
        new Location(61,'GONG KEDAK',''),
        new Location(62,'IPOH',''),
        new Location(63,'JOHOR BAHRU',''),
        new Location(64,'KERTEH',''),
        new Location(65,'KOTA BHARU',''),
        new Location(66,'KOTA KINABALU',''),
        new Location(67,'KUALA LUMPUR',''),
        new Location(68,'KUALA TERENGGANU',''),
        new Location(69,'KUANTAN',''),
        new Location(70,'KUCHING',''),
        new Location(71,'LABUAN',''),
        new Location(72,'LANGKAWI',''),
        new Location(73,'LIMBANG',''),
        new Location(74,'MALACCA',''),
        new Location(75,'MERSING',''),
        new Location(76,'MIRI',''),
        new Location(77,'MULU',''),
        new Location(78,'PENANG',''),
        new Location(79,'PULAU TIOMAN',''),
        new Location(80,'SANDAKAN',''),
        new Location(81,'SIBU',''),
        new Location(82,'TAWAU',''),
        new Location(83,'BAGO',''),
        new Location(84,'DAWEI',''),
        new Location(85,'HLEGU',''),
        new Location(86,'LASHIO',''),
        new Location(87,'MANDALAY 01',''),
        new Location(88,'MANDALAY 02',''),
        new Location(89,'PATHIEN',''),
        new Location(90,'TAUNGOO',''),
        new Location(91,'BUON MA THUOT',''),
        new Location(92,'CAM RANH',''),
        new Location(93,'CATBI',''),
        new Location(94,'DANANG',''),
        new Location(95,'DIEN BIEN',''),
        new Location(96,'NAMHA',''),
        new Location(97,'NOIBAI',''),
        new Location(98,'PHANTHIET',''),
        new Location(99,'PHUBAI',''),
        new Location(100,'PHUCAT',''),
        new Location(101,'TANSONHAT',''),
        new Location(102,'VINH',''),
    ]
    
    var radios = [
        new Radio(1, 0, 1, 'BKK', 124, 13.8935139, 100.5961667, 5.1816),
        new Radio(2, 0, 1, 'SVB', 51, 13.6700056, 100.7277722, 1.524),
        new Radio(3, 0, 1, 'BRM', 119, 15.2395472, 103.2588556, 170.383),
        new Radio(4, 0, 1, 'CMA', 116, 18.7661389, 98.96120556, 312.7248),
        new Radio(5, 0, 1, 'CTR', 112, 19.9488306, 99.88315833, 388.3152),
        new Radio(6, 0, 1, 'CMP', 76, 16.6353694, 101.9889167, 252.374),
        new Radio(7, 0, 1, 'CPN', 37, 10.711175, 99.36554167, 5.4864),
        new Radio(8, 0, 1, 'HTY', 100, 6.9340972, 100.3879833, 27.1272),
        new Radio(9, 0, 1, 'HHN', 80, 12.6344778, 99.95110833, 9.4488),
        new Radio(10, 0, 1, 'KKN', 96, 16.4708556, 102.7879639, 199.644),
        new Radio(11, 0, 1, 'KRT', 84, 14.9173278, 102.1398222, 207.569),
        new Radio(12, 0, 1, 'KBI', 47, 8.107525, 98.97745833, 27.7368),
        new Radio(13, 0, 1, 'LPN', 94, 18.2766583, 99.50236389, 241.097),
        new Radio(14, 0, 1, 'LOY', 106, 17.447, 101.7231083, 265.786),
        new Radio(15, 0, 1, 'MHS', 102, 19.3197389, 97.91224167, 510.8448),
        new Radio(16, 0, 1, 'MST', 114, 16.6987444, 98.54212222, 213.055),
        new Radio(17, 0, 1, 'NKP', 53, 17.3883361, 104.6382889, 177.698),
        new Radio(18, 0, 1, 'NKS', 121, 8.5415972, 99.94683889, 5.7912),
        new Radio(19, 0, 1, 'NKR', 39, 14.9466306, 102.3111806, 230.429),
        new Radio(20, 0, 1, 'NAN', 104, 18.8090806, 100.7826167, 212.141),
        new Radio(21, 0, 1, 'NTW', 110, 6.5272444, 101.7451194, 8.8392),
        new Radio(22, 0, 1, 'PCB', 101, 16.676, 101.1966278, 138.684),
        new Radio(23, 0, 1, 'PSL', 88, 16.7703056, 100.2913694, 42.9768),
        new Radio(24, 0, 1, 'PAE', 55, 18.1341806, 100.1662722, 165.811),
        new Radio(25, 0, 1, 'PUT', 116, 8.1139833, 98.30697778, 10.668),
        new Radio(26, 0, 1, 'RAN', 81, 9.7780083, 98.58363889, 17.0688),
        new Radio(27, 0, 1, 'RYN', 72, 12.7786778, 101.6763694, 4.572),
        new Radio(28, 0, 1, 'ROT', 49, 16.11685, 103.7720694, 137.16),
        new Radio(29, 0, 1, 'SKN', 89, 17.2140944, 104.1367639, 161.239),
        new Radio(30, 0, 1, 'SMU', 123, 9.5470139, 100.0617444, 3.048),
        new Radio(31, 0, 1, 'STN', 43, 9.1294667, 99.13473889, 7.0104),
        new Radio(32, 0, 1, 'TRN', 113, 7.5088306, 99.62603333, 15.8496),
        new Radio(33, 0, 1, 'TRT', 36, 12.2776778, 102.3203389, 29.8704),
        new Radio(34, 0, 1, 'UBL', 74, 15.2451778, 104.8658833, 124.358),
        new Radio(35, 0, 1, 'UDN', 90, 17.3847861, 102.7749417, 179.222),
        new Radio(36, 0, 1, 'BUT', 45, 12.666675, 101.0004639, 9.7536),
        new Radio(37, 3, 1, 'CHM', 109, 18.77164167, 98.96659167, 311),
        new Radio(38, 3, 1, 'HTY', 104, 6.928488889, 100.3942639, 28),
        new Radio(39, 2, 1, 'KPS', 92, 14.16577778, 99.95430556, 7),
        new Radio(40, 3, 1, 'KPS', 98, 14.09153056, 99.91264722, 13),
        new Radio(41, 3, 1, 'KRT', 125, 14.93498333, 102.072725, 220),
        new Radio(42, 3, 1, 'LOB', 115, 14.88116389, 100.6633083, 36),
        new Radio(43, 3, 1, 'PSL', 99, 16.79256667, 100.2746389, 46),
        new Radio(44, 3, 1, 'PCK', 84, 11.78586389, 99.80832222, 10),
        new Radio(45, 2, 1, 'SKL', 82, 7.185305556, 100.6073028, 9),
        new Radio(46, 3, 1, 'SRT', 79, 9.133130556, 99.13162222, 10),
        new Radio(47, 3, 1, 'TKL', 95, 15.27907222, 100.2974639, 29),
        new Radio(48, 3, 1, 'BUT', 105, 12.67471111, 101.0068056, 12),
        new Radio(49, 3, 1, 'UBL', 93, 15.26241944, 104.8833389, 125),
        new Radio(50, 3, 1, 'UDN', 86, 17.38286111, 102.7984833, 178),
        new Radio(51, 0, 1, 'LPB', 113, 19.9109722, 102.1718694, 298.094),
        new Radio(52, 0, 1, 'PAK', 97, 15.1967444, 105.7380194, 111.862),
        new Radio(53, 0, 1, 'SAV', 82, 16.56205, 104.7666917, 156.667),
        new Radio(54, 0, 1, 'VTN', 122, 18.0103972, 102.5404722, 174.955),
        new Radio(55, 0, 1, 'TH', 87, 19.4555167, 103.1810056, 1098.804),
        new Radio(56, 0, 1, 'PNH', 90, 11.5439444, 104.8439167, 13),
        new Radio(57, 0, 1, 'SRE', 85, 13.4079778, 103.8063333, 18.898),
        new Radio(58, 0, 1, 'VAS', 83, 6.1857222, 100.3970389, 4.877),
        new Radio(59, 0, 1, 'VBA', 94, 3.3251028, 101.4608944, 93),
        new Radio(60, 0, 1, 'VBU', 73, 3.1538694, 113.0131444, 5),
        new Radio(61, 3, 1, 'BTR', 82, 5.4718611, 100.3931389, 4),
        new Radio(62, 4, 1, 'VBT', 80, 5.4759361, 100.3931694, 5),
        new Radio(63, 0, 1, 'VGK', 113, 5.7969694, 102.4791083, 6),
        new Radio(64, 0, 1, 'VIH', 120, 4.5736139, 101.0939, 36.271),
        new Radio(65, 0, 1, 'VJR', 74, 1.7293639, 103.6222194, 120),
        new Radio(66, 0, 1, 'VKE', 118, 4.5483361, 103.4232028, 8.839),
        new Radio(67, 0, 1, 'VKB', 70, 6.1634528, 102.3142056, 6.096),
        new Radio(68, 0, 1, 'VJN', 78, 5.8996667, 116.0299444, 11),
        new Radio(69, 0, 1, 'VKL', 108, 2.7244028, 101.7381222, 75),
        new Radio(70, 0, 1, 'VKT', 101, 5.3854917, 103.1031194, 6.706),
        new Radio(71, 0, 1, 'VKN', 84, 3.7778583, 103.2117139, 18),
        new Radio(72, 0, 1, 'VKG', 92, 1.4733333, 110.30575, 15),
        new Radio(73, 0, 1, 'VLB', 110, 5.2927806, 115.2483222, 17),
        new Radio(74, 0, 1, 'VPL', 88, 6.3543028, 99.7453972, 8.23),
        new Radio(75, 0, 1, 'VLG', 81, 4.7972778, 115.0023306, 14),
        new Radio(76, 0, 1, 'VMK', 121, 2.2581722, 102.2460361, 11),
        new Radio(77, 0, 1, 'VMR', 115, 2.3883333, 103.8716667, 4),
        new Radio(78, 0, 1, 'VMI', 71, 4.3377639, 113.9942333, 16),
        new Radio(79, 0, 1, 'VZU', 75, 4.0327611, 114.7952139, 69),
        new Radio(80, 0, 1, 'VPG', 109, 5.2794083, 100.2607917, 5.182),
        new Radio(81, 0, 1, 'VPT', 87, 2.9086139, 104.1009028, 78),
        new Radio(82, 0, 1, 'VSN', 87, 5.9037139, 118.0748389, 3),
        new Radio(83, 0, 1, 'VSI', 59, 2.2467028, 112.00335, 46),
        new Radio(84, 0, 1, 'VTW', 103, 4.3245, 118.1398972, 17),
        new Radio(85, 0, 1, 'BGO', 73, 17.3182472, 96.5201, 9.754),
        new Radio(86, 0, 1, 'DWI', 57, 14.1005833, 98.2067917, 25),
        new Radio(87, 0, 1, 'HGU', 70, 17.0846389, 96.2481667, 6.096),
        new Radio(88, 0, 1, 'LSO', 115, 22.9842222, 97.7461944, 769),
        new Radio(89, 0, 1, 'MDY', 75, 21.9342778, 96.12975, 77),
        new Radio(90, 0, 1, 'MIA', 110, 21.7109444, 95.97475, 87),
        new Radio(91, 0, 1, 'PTN', 103, 16.8146111, 94.7766667, 5),
        new Radio(92, 0, 1, 'TGO', 98, 19.0478333, 96.3964444, 54.254),
        new Radio(93, 0, 1, 'BMT', 58, 12.6665, 108.123, 533),
        new Radio(94, 0, 1, 'CRA', 112, 11.9945111, 109.2199722, 11),
        new Radio(95, 0, 1, 'CAB', 98, 20.8182222, 106.7275, 4),
        new Radio(96, 0, 1, 'DAN', 91, 16.0527889, 108.1981667, 8),
        new Radio(97, 0, 1, 'DIB', 83, 21.396025, 103.0045139, 484),
        new Radio(98, 0, 1, 'NAH', 102, 20.3872361, 106.1177222, 3),
        new Radio(99, 0, 1, 'NOB', 108, 21.2130222, 105.8349361, 15),
        new Radio(100, 0, 1, 'PHT', 88, 10.9281417, 108.0720972, 5),
        new Radio(101, 0, 1, 'HUE', 105, 16.4022944, 107.7017806, 19),
        new Radio(102, 0, 1, 'PCA', 110, 13.9571778, 109.0426194, 31),
        new Radio(103, 0, 1, 'TSN', 114, 10.8164333, 106.6455639, 9),
        new Radio(104, 0, 1, 'VIN', 78, 18.7340472, 105.6683361, 8.839),
	];
    
    radios[0].locates(locations[0]);
    radios[1].locates(locations[1]);
    radios[2].locates(locations[2]);
    radios[3].locates(locations[3]);
    radios[4].locates(locations[4]);
    radios[5].locates(locations[5]);
    radios[6].locates(locations[6]);
    radios[7].locates(locations[7]);
    radios[8].locates(locations[8]);
    radios[9].locates(locations[9]);
    radios[10].locates(locations[10]);
    radios[11].locates(locations[11]);
    radios[12].locates(locations[12]);
    radios[13].locates(locations[13]);
    radios[14].locates(locations[14]);
    radios[15].locates(locations[15]);
    radios[16].locates(locations[16]);
    radios[17].locates(locations[17]);
    radios[18].locates(locations[18]);
    radios[19].locates(locations[19]);
    radios[20].locates(locations[20]);
    radios[21].locates(locations[21]);
    radios[22].locates(locations[22]);
    radios[23].locates(locations[23]);
    radios[24].locates(locations[24]);
    radios[25].locates(locations[25]);
    radios[26].locates(locations[26]);
    radios[27].locates(locations[27]);
    radios[28].locates(locations[28]);
    radios[29].locates(locations[29]);
    radios[30].locates(locations[30]);
    radios[31].locates(locations[31]);
    radios[32].locates(locations[32]);
    radios[33].locates(locations[33]);
    radios[34].locates(locations[34]);
    radios[35].locates(locations[35]);
    radios[36].locates(locations[36]);
    radios[37].locates(locations[37]);
    radios[38].locates(locations[38]);
    radios[39].locates(locations[38]);
    radios[40].locates(locations[39]);
    radios[41].locates(locations[40]);
    radios[42].locates(locations[41]);
    radios[43].locates(locations[42]);
    radios[44].locates(locations[43]);
    radios[45].locates(locations[44]);
    radios[46].locates(locations[45]);
    radios[47].locates(locations[46]);
    radios[48].locates(locations[47]);
    radios[49].locates(locations[48]);
    radios[50].locates(locations[49]);
    radios[51].locates(locations[50]);
    radios[52].locates(locations[51]);
    radios[53].locates(locations[52]);
    radios[54].locates(locations[53]);
    radios[55].locates(locations[54]);
    radios[56].locates(locations[55]);
    radios[57].locates(locations[56]);
    radios[58].locates(locations[57]);
    radios[59].locates(locations[58]);
    radios[60].locates(locations[59]);
    radios[61].locates(locations[59]);
    radios[62].locates(locations[60]);
    radios[63].locates(locations[61]);
    radios[64].locates(locations[62]);
    radios[65].locates(locations[63]);
    radios[66].locates(locations[64]);
    radios[67].locates(locations[65]);
    radios[68].locates(locations[66]);
    radios[69].locates(locations[67]);
    radios[70].locates(locations[68]);
    radios[71].locates(locations[69]);
    radios[72].locates(locations[70]);
    radios[73].locates(locations[71]);
    radios[74].locates(locations[72]);
    radios[75].locates(locations[73]);
    radios[76].locates(locations[74]);
    radios[77].locates(locations[75]);
    radios[78].locates(locations[76]);
    radios[79].locates(locations[77]);
    radios[80].locates(locations[78]);
    radios[81].locates(locations[79]);
    radios[82].locates(locations[80]);
    radios[83].locates(locations[81]);
    radios[84].locates(locations[82]);
    radios[85].locates(locations[83]);
    radios[86].locates(locations[84]);
    radios[87].locates(locations[85]);
    radios[88].locates(locations[86]);
    radios[89].locates(locations[87]);
    radios[90].locates(locations[88]);
    radios[91].locates(locations[89]);
    radios[92].locates(locations[90]);
    radios[93].locates(locations[91]);
    radios[94].locates(locations[92]);
    radios[95].locates(locations[93]);
    radios[96].locates(locations[94]);
    radios[97].locates(locations[95]);
    radios[98].locates(locations[96]);
    radios[99].locates(locations[97]);
    radios[100].locates(locations[98]);
    radios[101].locates(locations[99]);
    radios[102].locates(locations[100]);
    radios[103].locates(locations[101]);
    
    var resources = {
        "radios": {
            get : function (id) {
                if (id)
                    return function (radio) {
                        radio.id === id
                    };
                return radios
            },
            create : function (newRadio) {
                var maxId = Math.max.apply(Math,array.map(function(o) {
                    return o.Id;
                }));
                if (newRadio)
                    var radio = new Radio(maxId + 1, newRadio.type, newRadio.mode, newRadio.ident, newRadio.frequency, newRadio.latitude, newRadio.longitude, newRadio.altitude)
            }
        },
        "locations": {
            get : function () {
                return locations;
            },
            create : function (newLocation) {
                var maxId = Math.max.apply(Math,array.map(function(o) {
                    return o.Id;
                }));
                if (newLocation)
                    var radio = new Location(maxId + 1, newLocation.name, newLocation.icao);
            }
        },
    };

    service.get = function (key) {
        return resources[key].get(null);
    };
    
    service.get = function (key, attr) {
        return resources[key].get(attr);
    };
    
    return service;
});