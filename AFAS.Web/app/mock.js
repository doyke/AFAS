app.factory('afas.mock', function () {
    
    var service = {};
    
    var frequencies = [];
    
    for ( var f=18; f<59; f++ ) { frequencies.push(f); }
    for ( var f=71; f<127; f++ ) { frequencies.push(f); }
    
    var civilFrequencies = [];
    for ( var f=18; f<59; f+=2 ) { civilFrequencies.push(f); }
    for ( var f=71; f<127; f++ ) { civilFrequencies.push(f); }
    
    var locations = [
        new Location(1, 'BANGKOK/DONMUENG', 'VTBD'),
        new Location(2, 'BANGKOK/SUVARNABHUMI', 'VTBS'),
        new Location(3, 'BURIRAM', 'VTUO'),
        new Location(4, 'CHIANG MAI', 'VTCC'),
        new Location(5, 'CHIANG RAI', 'VTCT'),
        new Location(6, 'CHUMPAE', ''),
        new Location(7, 'CHUMPHON', 'VTSE'),
        new Location(8, 'HAT YAI', 'VTSS'),
        new Location(9, 'HUA HIN', 'VTPH'),
        new Location(10, 'KHON KAEN', 'VTUK'),
        new Location(11, 'KHORAT', 'VTUN'),
        new Location(12, 'KRABI', 'VTSG'),
        new Location(13, 'LAMPANG', 'VTCL'),
        new Location(14, 'LOEI', 'VTUL'),
        new Location(15, 'MAE HONG SON', 'VTCH'),
        new Location(16, 'MAE SOT', 'VTPM'),
        new Location(17, 'NAKHON PHANOM', 'VTUW'),
        new Location(18, 'NAKHON SI THAMMARAT', 'VTSF'),
        new Location(19, 'NAKHON RATCHASIMA', 'VTUQ'),
        new Location(20, 'NAN', 'VTCN'),
        new Location(21, 'NARATHIWAT', 'VTSC'),
        new Location(22, 'PHETCHABUN', 'VTPB'),
        new Location(23, 'PHITSANULOK', 'VTPP'),
        new Location(24, 'PHRAE', 'VTCP'),
        new Location(25, 'PHUKET', 'VTSP'),
        new Location(26, 'RANONG', 'VTSR'),
        new Location(27, 'RAYONG', ''),
        new Location(28, 'ROI ET', 'VTUV'),
        new Location(29, 'SAKON NAKHON', 'VTUI'),
        new Location(30, 'SAMUI', 'VTSM'),
        new Location(31, 'SURAT THANI', 'VTSB'),
        new Location(32, 'TRANG', 'VTST'),
        new Location(33, 'TRAT', 'VTBO'),
        new Location(34, 'UBON RATCHATHANI', 'VTUU'),
        new Location(35, 'UDON THANI', 'VTUD'),
        new Location(36, 'U TAPHAO', ''),
        new Location(37, 'RTAF-CHIANG MAI', ''),
        new Location(38, 'RTAF-HAT YAI', ''),
        new Location(39, 'RTAF-KAMPHAENG SAEN', ''),
        new Location(40, 'RTAF-KHORAT', ''),
        new Location(41, 'RTAF-LOP BURI', ''),
        new Location(42, 'RTAF-PHITSANULOK', ''),
        new Location(43, 'RTAF-PRACHUAP', ''),
        new Location(44, 'RTAF-SONGKHLA', ''),
        new Location(45, 'RTAF-SURAT THANI', ''),
        new Location(46, 'RTAF-TAKHLI', ''),
        new Location(47, 'RTAF-U TAPHAO', ''),
        new Location(48, 'RTAF-UBON', ''),
        new Location(49, 'RTAF-UDON', ''),
        new Location(50, 'CHITTAGONG', ''),
        new Location(51, 'DHAKA', ''),
        new Location(52, 'PARO', ''),
        new Location(53, 'PHNOM PENH', ''),
        new Location(54, 'SIEM REAP', ''),
        new Location(55, 'ANDONG', ''),
        new Location(56, 'BAIHESI', ''),
        new Location(57, 'BAOTOU', ''),
        new Location(58, 'BEIJING', ''),
        new Location(59, 'BOSE', ''),
        new Location(60, 'CENCUN', ''),
        new Location(61, 'CHANGBEI', ''),
        new Location(62, 'CHANGSHA', ''),
        new Location(63, 'CHAOYANG', ''),
        new Location(64, 'CHONGQING', ''),
        new Location(65, 'CHONGZHOU', ''),
        new Location(66, 'CONGHUA', ''),
        new Location(67, 'DAHUSHAN', ''),
        new Location(68, 'DALIAN', ''),
        new Location(69, 'DANDONG', ''),
        new Location(70, 'DANGSHAN', ''),
        new Location(71, 'DAWANGZHUANG', ''),
        new Location(72, 'DENGKOU', ''),
        new Location(73, 'DONGMULANTOU', ''),
        new Location(74, 'ENSHI', ''),
        new Location(75, 'EREN', ''),
        new Location(76, 'FUJIACHANG', ''),
        new Location(77, 'FUKANG', ''),
        new Location(78, 'FULING', ''),
        new Location(79, 'FUQING', ''),
        new Location(80, 'FUYU', ''),
        new Location(81, 'FUZHOU', ''),
        new Location(82, 'GANLANBA', ''),
        new Location(83, 'GANZHOU', ''),
        new Location(84, 'GAOYAO', ''),
        new Location(85, 'GENGMA', ''),
        new Location(86, 'GUANLAN', ''),
        new Location(87, 'GUILIN', ''),
        new Location(88, 'GUIYANG', ''),
        new Location(89, 'HAILAR', ''),
        new Location(90, 'HAMI', ''),
        new Location(91, 'HANGZHOU', ''),
        new Location(92, 'HARBIN', ''),
        new Location(93, 'HEFEI', ''),
        new Location(94, 'HENGSHA', ''),
        new Location(95, 'HONGQIAO', ''),
        new Location(96, 'HOTAN', ''),
        new Location(97, 'HUAIROU', ''),
        new Location(98, 'HUANGCHENG', ''),
        new Location(99, 'HUAYUAN', ''),
        new Location(100, 'JIAMUSI', ''),
        new Location(101, 'JIAYUGUAN', ''),
        new Location(102, 'JINAN', ''),
        new Location(103, 'JINGNING', ''),
        new Location(104, 'JINGTAI', ''),
        new Location(105, 'JINTANG', ''),
        new Location(106, 'JIUTING', ''),
        new Location(107, 'KAIYUAN', ''),
        new Location(108, 'KASHI', ''),
        new Location(109, 'KUNMING', ''),
        new Location(110, 'KUQA', ''),
        new Location(111, 'LAIBIN', ''),
        new Location(112, 'LANZHOU', ''),
        new Location(113, 'LAOLIANGCANG', ''),
        new Location(114, 'LHASA', ''),
        new Location(115, 'LIANJIANG', ''),
        new Location(116, 'LIANSHENGWEI', ''),
        new Location(117, 'LILING', ''),
        new Location(118, 'LIUZAO', ''),
        new Location(119, 'LONGCHANG', ''),
        new Location(120, 'LONGKOU', ''),
        new Location(121, 'LONGLI', ''),
        new Location(122, 'LONGMEN', ''),
        new Location(123, 'LUANXIAN', ''),
        new Location(124, 'LUXI', ''),
        new Location(125, 'NANCHONG', ''),
        new Location(126, 'NANHUI', ''),
        new Location(127, 'NANJING', ''),
        new Location(128, 'NANLANG', ''),
        new Location(129, 'NANNING', ''),
        new Location(130, 'NANTONG', ''),
        new Location(131, 'NANXIONG', ''),
        new Location(132, 'NANYINGBINDAO', ''),
        new Location(133, 'NINGBO', ''),
        new Location(134, 'NINGSHAN', ''),
        new Location(135, 'PINGZHOU', ''),
        new Location(136, 'PIXIAN', ''),
        new Location(137, 'POTOU', ''),
        new Location(138, 'PUDONG', ''),
        new Location(139, 'QIANXI', ''),
        new Location(140, 'QIJIANG', ''),
        new Location(141, 'QINGDAO', ''),
        new Location(142, 'QIQIHAR', ''),
        new Location(143, 'SANXIA', ''),
        new Location(144, 'SANYA', ''),
        new Location(145, 'SHACHE', ''),
        new Location(146, 'SHANGRAO', ''),
        new Location(147, 'SHANTOU', ''),
        new Location(148, 'SHAZIYING', ''),
        new Location(149, 'SHEKOU', ''),
        new Location(150, 'SHENGZHOU', ''),
        new Location(151, 'SHENYANG', ''),
        new Location(152, 'SHENZHEN', ''),
        new Location(153, 'SHILONG', ''),
        new Location(154, 'SHUANGLIU', ''),
        new Location(155, 'SHUYUAN', ''),
        new Location(156, 'TAIYUAN', ''),
        new Location(157, 'TIANHE', ''),
        new Location(158, 'TIANJIN', ''),
        new Location(159, 'TIANZHEN', ''),
        new Location(160, 'TONGLIAO', ''),
        new Location(161, 'TONGLU', ''),
        new Location(162, 'TUMURTAI', ''),
        new Location(163, 'URUMQI', ''),
        new Location(164, 'WANCHANG', ''),
        new Location(165, 'WANGQING', ''),
        new Location(166, 'WEIHAI', ''),
        new Location(167, 'WEIXIAN', ''),
        new Location(168, 'WONGYUAN', ''),
        new Location(169, 'WUFENGXI', ''),
        new Location(170, 'WUXI', ''),
        new Location(171, 'XIAMEN', ''),
        new Location(172, 'XIANGTANG', ''),
        new Location(173, 'XIANYANG', ''),
        new Location(174, 'XICHANG', ''),
        new Location(175, 'XISHUANGBANNA', ''),
        new Location(176, 'XISHUI', ''),
        new Location(177, 'XUEJIADAO', ''),
        new Location(178, 'XUYONG', ''),
        new Location(179, 'YABRAI', ''),
        new Location(180, 'YANJI', ''),
        new Location(181, 'YANTAI', ''),
        new Location(182, 'YIBIN', ''),
        new Location(183, 'YIJUN', ''),
        new Location(184, 'YINCHUAN', ''),
        new Location(185, 'YINGDE', ''),
        new Location(186, 'YUANTAN', ''),
        new Location(187, 'ZHENGDING', ''),
        new Location(188, 'ZHENGZHOU', ''),
        new Location(189, 'ZHOUKOU', ''),
        new Location(190, 'ZHOUSHAN', ''),
        new Location(191, 'ZIYANG', ''),
        new Location(192, 'AGARTALA', ''),
        new Location(193, 'AGATTI', ''),
        new Location(194, 'AGRA', ''),
        new Location(195, 'AHMEDABAD', ''),
        new Location(196, 'ALIGARH', ''),
        new Location(197, 'AMRITSAR', ''),
        new Location(198, 'AURANGABAD', ''),
        new Location(199, 'BAGDOGRA', ''),
        new Location(200, 'BANGALORE', ''),
        new Location(201, 'BARAPANI', ''),
        new Location(202, 'BELGAUM', ''),
        new Location(203, 'BELLARY', ''),
        new Location(204, 'BHAVNAGAR', ''),
        new Location(205, 'BHOPAL', ''),
        new Location(206, 'BHUBANESHWAR', ''),
        new Location(207, 'BHUJ', ''),
        new Location(208, 'CALICUT', ''),
        new Location(209, 'CHANDIGARH', ''),
        new Location(210, 'CHENNAI', ''),
        new Location(211, 'CHILLERKI', ''),
        new Location(212, 'COCHIN', ''),
        new Location(213, 'COCHIN INTL 01', ''),
        new Location(214, 'COCHIN INTL 02', ''),
        new Location(215, 'COIMBATORE', ''),
        new Location(216, 'DELHI', ''),
        new Location(217, 'DIBRUGARH', ''),
        new Location(218, 'DIMAPUR', ''),
        new Location(219, 'ESDEM', ''),
        new Location(220, 'GAYA', ''),
        new Location(221, 'GOA', ''),
        new Location(222, 'GULBARGA', ''),
        new Location(223, 'GUWAHATI', ''),
        new Location(224, 'GWALIOR', ''),
        new Location(225, 'HYDERABAD', ''),
        new Location(226, 'IMPHAL', ''),
        new Location(227, 'INDORE', ''),
        new Location(228, 'JABALPUR', ''),
        new Location(229, 'JAIPUR', ''),
        new Location(230, 'JALALABAD', ''),
        new Location(231, 'JAMMU', ''),
        new Location(232, 'JAMNAGAR', ''),
        new Location(233, 'JAMSHEDPUR', ''),
        new Location(234, 'JODHPUR', ''),
        new Location(235, 'JORHAT', ''),
        new Location(236, 'KANCHEEPURAM', ''),
        new Location(237, 'KHAJURAHO', ''),
        new Location(238, 'KOLKATA', ''),
        new Location(239, 'LEH', ''),
        new Location(240, 'LENGPUI', ''),
        new Location(241, 'LILABARI', ''),
        new Location(242, 'LUCKNOW', ''),
        new Location(243, 'MABOR', ''),
        new Location(244, 'MADURAI', ''),
        new Location(245, 'MANGALORE', ''),
        new Location(246, 'MUMBAI', ''),
        new Location(247, 'NAGPUR', ''),
        new Location(248, 'PATNA', ''),
        new Location(249, 'PORT BLAIR', ''),
        new Location(250, 'PRATAPGARH', ''),
        new Location(251, 'PUNE', ''),
        new Location(252, 'RAIPUR', ''),
        new Location(253, 'RAJKOT', ''),
        new Location(254, 'RANCHI', ''),
        new Location(255, 'SAKARAS', ''),
        new Location(256, 'SAMPLA', ''),
        new Location(257, 'SIKANDRABAD', ''),
        new Location(258, 'SILCHAR', ''),
        new Location(259, 'SRINAGAR', ''),
        new Location(260, 'TEZPUR', ''),
        new Location(261, 'TIRUCHIRAPPALLI', ''),
        new Location(262, 'TIRUPATI', ''),
        new Location(263, 'TRIVANDRUM', ''),
        new Location(264, 'UDAIPUR', ''),
        new Location(265, 'VADODARA', ''),
        new Location(266, 'VARANASI', ''),
        new Location(267, 'VIJAYAWADA', ''),
        new Location(268, 'VISHAKHAPATNAM', ''),
        new Location(269, 'ACHMAD YANI', ''),
        new Location(270, 'AMBON', ''),
        new Location(271, 'BALI', ''),
        new Location(272, 'BALIKPAPAN', ''),
        new Location(273, 'BANDA ACEH', ''),
        new Location(274, 'BANDAR LAMPUNG', ''),
        new Location(275, 'BANDUNG', ''),
        new Location(276, 'BANJARMASIN', ''),
        new Location(277, 'BATAM', ''),
        new Location(278, 'BENGKULU', ''),
        new Location(279, 'BIAK', ''),
        new Location(280, 'BIMA', ''),
        new Location(281, 'BUDIARTO', ''),
        new Location(282, 'CENGKARENG', ''),
        new Location(283, 'CILACAP', ''),
        new Location(284, 'DOMINIQUE EDWARD OSOK', ''),
        new Location(285, 'GORONTALO', ''),
        new Location(286, 'HALIM PERDANAKUSUMA', ''),
        new Location(287, 'HASANUDDIN', ''),
        new Location(288, 'INDRAMAYU', ''),
        new Location(289, 'ISWAHYUDI', ''),
        new Location(290, 'JAKARTA', ''),
        new Location(291, 'JAMBI', ''),
        new Location(292, 'JAYAPURA', ''),
        new Location(293, 'KENDARI', ''),
        new Location(294, 'KETAPANG', ''),
        new Location(295, 'KUPANG', ''),
        new Location(296, 'MANADO 01', ''),
        new Location(297, 'MANADO 02', ''),
        new Location(298, 'MATARAM', ''),
        new Location(299, 'MAUMERE', ''),
        new Location(300, 'MEDAN', ''),
        new Location(301, 'MERAUKE', ''),
        new Location(302, 'MINANGKABAU', ''),
        new Location(303, 'NABIRE', ''),
        new Location(304, 'NIAS', ''),
        new Location(305, 'PADANG', ''),
        new Location(306, 'PALEMBANG', ''),
        new Location(307, 'PALU', ''),
        new Location(308, 'PANGKAL PINANG', ''),
        new Location(309, 'PANGKALAN BUN', ''),
        new Location(310, 'PATTIMURA', ''),
        new Location(311, 'PEKANBARU', ''),
        new Location(312, 'PINANG SORE', ''),
        new Location(313, 'PONTIANAK', ''),
        new Location(314, 'SOLO', ''),
        new Location(315, 'SORONG', ''),
        new Location(316, 'SURABAYA', ''),
        new Location(317, 'TANJUNG PANDAN', ''),
        new Location(318, 'TANJUNG PINANG', ''),
        new Location(319, 'TARAKAN', ''),
        new Location(320, 'TIMIKA', ''),
        new Location(321, 'TJILIK RIWUT', ''),
        new Location(322, 'YOGYAKARTA', ''),
        new Location(323, 'LUANG PHABANG', ''),
        new Location(324, 'PAKSE', ''),
        new Location(325, 'SAVANNAKHET', ''),
        new Location(326, 'VIENTIANE', ''),
        new Location(327, 'XIENG KHOUANG', ''),
        new Location(328, 'ALOR STAR', ''),
        new Location(329, 'BATU ARANG', ''),
        new Location(330, 'BINTULU', ''),
        new Location(331, 'BUTTERWORTH', ''),
        new Location(332, 'BUTTERWORTH (VORTAC),', ''),
        new Location(333, 'GONG KEDAK (VORTAC),', ''),
        new Location(334, 'IPOH', ''),
        new Location(335, 'JOHOR BAHRU', ''),
        new Location(336, 'KERTEH', ''),
        new Location(337, 'KOTA BHARU', ''),
        new Location(338, 'KOTA KINABALU', ''),
        new Location(339, 'KUALA LUMPUR', ''),
        new Location(340, 'KUALA TERENGGANU', ''),
        new Location(341, 'KUANTAN', ''),
        new Location(342, 'KUCHING', ''),
        new Location(343, 'LABUAN', ''),
        new Location(344, 'LANGKAWI', ''),
        new Location(345, 'LIMBANG', ''),
        new Location(346, 'MALACCA', ''),
        new Location(347, 'MERSING', ''),
        new Location(348, 'MIRI', ''),
        new Location(349, 'MULU', ''),
        new Location(350, 'PENANG', ''),
        new Location(351, 'PULAU TIOMAN', ''),
        new Location(352, 'SANDAKAN', ''),
        new Location(353, 'SIBU', ''),
        new Location(354, 'TAWAU', ''),
        new Location(355, 'BAGO', ''),
        new Location(356, 'DAWEI', ''),
        new Location(357, 'HLEGU', ''),
        new Location(358, 'LASHIO', ''),
        new Location(359, 'MANDALAY 01', ''),
        new Location(360, 'MANDALAY 02', ''),
        new Location(361, 'PATHIEN', ''),
        new Location(362, 'TAUNGOO', ''),
        new Location(363, 'PAPA UNIFORM', ''),
        new Location(364, 'PAYA LEBAR', ''),
        new Location(365, 'SINJON', ''),
        new Location(366, 'TEKONG', ''),
        new Location(367, 'TENGAH', ''),
        new Location(368, 'BUON MA THUOT', ''),
        new Location(369, 'CAM RANH', ''),
        new Location(370, 'CATBI', ''),
        new Location(371, 'DANANG', ''),
        new Location(372, 'DIEN BIEN', ''),
        new Location(373, 'NAMHA', ''),
        new Location(374, 'NOIBAI', ''),
        new Location(375, 'PHANTHIET', ''),
        new Location(376, 'PHUBAI', ''),
        new Location(377, 'PHUCAT', ''),
        new Location(378, 'TANSONHAT', ''),
        new Location(379, 'VINH', ''),
        new Location(380, 'AEROTHAI-TAK', 'VTPT'),
    ]
    
    var radios = [
        new Radio(1, 0, 1, 'BKK', 124, 13.8935444, 100.5962083, 5),
        new Radio(2, 0, 1, 'SVB', 51, 13.6590278, 100.7314417, 2),
        new Radio(3, 0, 1, 'BRM', 119, 15.2395778, 103.2588528, 170),
        new Radio(4, 0, 1, 'CMA', 116, 18.7661, 98.96124444, 313),
        new Radio(5, 0, 1, 'CTR', 112, 19.9488694, 99.88315556, 388),
        new Radio(6, 0, 1, 'CMP', 76, 16.6353694, 101.9889167, 252),
        new Radio(7, 0, 1, 'CPN', 37, 10.7111944, 99.36555278, 6),
        new Radio(8, 0, 1, 'HTY', 100, 6.9341028, 100.3879472, 27),
        new Radio(9, 0, 1, 'HHN', 80, 12.6344556, 99.95120278, 10),
        new Radio(10, 0, 1, 'KKN', 96, 16.4709111, 102.7879806, 200),
        new Radio(11, 0, 1, 'KRT', 84, 14.9173083, 102.1398194, 208),
        new Radio(12, 0, 1, 'KBI', 47, 8.107525, 98.97745833, 28),
        new Radio(13, 0, 1, 'LPN', 94, 18.2766278, 99.50233889, 241),
        new Radio(14, 0, 1, 'LOY', 106, 17.447, 101.7231083, 266),
        new Radio(15, 0, 1, 'MHS', 102, 19.3197528, 97.91224722, 511),
        new Radio(16, 0, 1, 'MST', 114, 16.6987444, 98.54212222, 213),
        new Radio(17, 0, 1, 'NKP', 53, 17.3883, 104.6383139, 178),
        new Radio(18, 0, 1, 'NKS', 121, 8.5416028, 99.94686111, 5),
        new Radio(19, 0, 1, 'NKR', 39, 14.9465472, 102.3112167, 231),
        new Radio(20, 0, 1, 'NAN', 104, 18.8091, 100.7826028, 212),
        new Radio(21, 0, 1, 'NTW', 110, 6.5272667, 101.7451167, 9),
        new Radio(22, 0, 1, 'PCB', 101, 16.676, 101.1966361, 139),
        new Radio(23, 0, 1, 'PSL', 88, 16.7703389, 100.2914083, 43),
        new Radio(24, 0, 1, 'PAE', 55, 18.1341417, 100.16625, 166),
        new Radio(25, 0, 1, 'PUT', 116, 8.1139167, 98.30700278, 10),
        new Radio(26, 0, 1, 'RAN', 81, 9.77795, 98.58369722, 17),
        new Radio(27, 0, 1, 'RYN', 72, 12.7786833, 101.6763722, 5),
        new Radio(28, 0, 1, 'ROT', 49, 16.11685, 103.7720694, 137),
        new Radio(29, 0, 1, 'SKN', 89, 17.2140944, 104.1367639, 161),
        new Radio(30, 0, 1, 'SMU', 123, 9.5470139, 100.0617444, 3),
        new Radio(31, 0, 1, 'STN', 43, 9.1294667, 99.13474167, 7),
        new Radio(32, 0, 1, 'TRN', 113, 7.508925, 99.62600833, 16),
        new Radio(33, 0, 1, 'TRT', 36, 12.2777139, 102.32035, 29),
        new Radio(34, 0, 1, 'UBL', 74, 15.2452139, 104.865875, 124),
        new Radio(35, 0, 1, 'UDN', 90, 17.3847667, 102.7749167, 179),
        new Radio(36, 0, 1, 'BUT', 45, 12.6666639, 101.0004611, 10),
        new Radio(37, 3, 1, 'CHM', 109, 18.77164167, 98.96659167, 311),
        new Radio(38, 3, 1, 'HTY', 104, 6.928488889, 100.3942639, 28),
        new Radio(39, 2, 1, 'KPS', 92, 14.16577778, 99.95430833, 7),
        new Radio(40, 3, 1, 'KPS', 98, 14.09153611, 99.91265, 13),
        new Radio(41, 3, 1, 'KRT', 125, 14.93501389, 102.0727333, 220),
        new Radio(42, 3, 1, 'LOB', 115, 14.88119167, 100.6633139, 36),
        new Radio(43, 3, 1, 'PSL', 99, 16.79258056, 100.2746389, 46),
        new Radio(44, 3, 1, 'PCK', 84, 11.78586389, 99.80832222, 10),
        new Radio(45, 2, 1, 'SKL', 82, 7.185327778, 100.607325, 9),
        new Radio(46, 3, 1, 'SRT', 79, 9.133, 99.13153333, 10),
        new Radio(47, 3, 1, 'TKL', 95, 15.27907222, 100.2974639, 29),
        new Radio(48, 3, 1, 'BUT', 105, 12.674725, 101.0067889, 12),
        new Radio(49, 3, 1, 'UBL', 93, 15.26246667, 104.8833389, 125),
        new Radio(50, 3, 1, 'UDN', 86, 17.38243611, 102.7988444, 178),
        new Radio(51, 0, 1, 'CTG', 81, 22.25778333, 91.82749722, 7),
        new Radio(52, 0, 1, 'DAC', 74, 23.82425, 90.41294167, 10),
        new Radio(53, 0, 1, 'PRO', 21, 27.3, 89.5, 0),
        new Radio(54, 0, 1, 'PNH', 90, 11.5439528, 104.843925, 14),
        new Radio(55, 0, 1, 'SRE', 85, 13.4080306, 103.806325, 19),
        new Radio(56, 0, 1, 'AND', 95, 30.255025, 121.2204139, 4),
        new Radio(57, 0, 1, 'BHS', 126, 30.5100278, 104.2012083, 496),
        new Radio(58, 0, 1, 'BAV', 120, 40.5580139, 109.9966083, 1008),
        new Radio(59, 0, 1, 'PEK', 94, 40.05, 116.6, 30),
        new Radio(60, 0, 1, 'BSE', 106, 23.895, 106.6483333, 138),
        new Radio(61, 0, 1, 'CEN', 93, 23.1530472, 113.41835, 68),
        new Radio(62, 0, 1, 'NCH', 98, 28.8863833, 115.91315, 25),
        new Radio(63, 0, 1, 'CSX', 80, 28.2053611, 113.2160583, 72),
        new Radio(64, 0, 1, 'CHG', 92, 41.5378778, 120.4318889, 174),
        new Radio(65, 0, 1, 'CKG', 108, 29.7454889, 106.6548639, 385),
        new Radio(66, 0, 1, 'CZH', 92, 30.6458417, 103.6853889, 533),
        new Radio(67, 0, 1, 'CON', 77, 23.589825, 113.5876528, 54),
        new Radio(68, 0, 1, 'DHN', 112, 41.6434667, 122.1158417, 14),
        new Radio(69, 0, 1, 'DLC', 70, 38.9680556, 121.5095694, 38),
        new Radio(70, 0, 1, 'DDG', 86, 40.2578, 124.2847889, 78),
        new Radio(71, 0, 1, 'DSH', 120, 30.1493694, 120.5003389, 7),
        new Radio(72, 0, 1, 'VYK', 74, 39.1932333, 116.5732583, 9),
        new Radio(73, 0, 1, 'DKO', 82, 40.3129278, 106.9990139, 1055),
        new Radio(74, 0, 1, 'MLT', 74, 20.1526111, 110.6746639, 31),
        new Radio(75, 0, 1, 'ENH', 94, 30.2927556, 109.6000972, 1108),
        new Radio(76, 0, 1, 'ERE', 96, 43.6398389, 111.9549972, 967),
        new Radio(77, 0, 1, 'FJC', 86, 29.9283889, 104.3050417, 398),
        new Radio(78, 0, 1, 'FKG', 110, 44.1711417, 87.9817333, 537),
        new Radio(79, 0, 1, 'FLG', 87, 29.69875, 107.3768389, 469),
        new Radio(80, 0, 1, 'FQG', 121, 25.7415083, 119.3861944, 158),
        new Radio(81, 0, 1, 'FYU', 84, 44.9128667, 124.8047389, 180),
        new Radio(82, 0, 1, 'FOC', 115, 25.9422944, 119.6648639, 9),
        new Radio(83, 0, 1, 'JHG', 72, 21.8633333, 100.9316667, 541),
        new Radio(84, 0, 1, 'KOW', 58, 25.8233306, 114.9150444, 110),
        new Radio(85, 0, 1, 'GYA', 112, 23.0716333, 112.4851806, 23),
        new Radio(86, 0, 1, 'GMA', 94, 23.5293639, 99.4095056, 1127),
        new Radio(87, 0, 1, 'GLN', 57, 22.7099361, 114.0345667, 73),
        new Radio(88, 0, 1, 'KWL', 96, 25.2120611, 110.036225, 169),
        new Radio(89, 0, 1, 'KWE', 90, 26.5218583, 106.7939111, 1158),
        new Radio(90, 0, 1, 'HLD', 98, 49.2041889, 119.8225917, 657),
        new Radio(91, 0, 1, 'HMI', 98, 42.8442417, 93.6672944, 833),
        new Radio(92, 0, 1, 'HGH', 77, 30.2410306, 120.4603944, 9),
        new Radio(93, 0, 1, 'HRB', 72, 45.6280222, 126.2588722, 135),
        new Radio(94, 0, 1, 'HFE', 114, 31.7760056, 117.3003194, 21),
        new Radio(95, 0, 1, 'HSH', 91, 31.3695444, 121.8453833, 3),
        new Radio(96, 0, 1, 'SHA', 119, 31.2163, 121.3346028, 4),
        new Radio(97, 0, 1, 'HTN', 78, 37.0347111, 79.8692889, 1426),
        new Radio(98, 0, 1, 'HUR', 83, 40.329175, 116.7469778, 54),
        new Radio(99, 0, 1, 'HCW', 108, 37.6534361, 120.5440778, 24),
        new Radio(100, 0, 1, 'HUY', 57, 28.5782861, 109.4511639, 344),
        new Radio(101, 0, 1, 'JMU', 82, 42.840025, 130.4638944, 78),
        new Radio(102, 0, 1, 'CHW', 92, 39.8561833, 98.3477417, 1553),
        new Radio(103, 0, 1, 'YQG', 84, 36.8320444, 117.2159806, 23),
        new Radio(104, 0, 1, 'JIG', 84, 35.5292389, 105.7219833, 1674),
        new Radio(105, 0, 1, 'JTA', 96, 37.1955917, 104.0777861, 1634),
        new Radio(106, 0, 1, 'JTG', 101, 30.8726361, 104.3912889, 473),
        new Radio(107, 0, 1, 'JTN', 33, 31.1224889, 121.3406083, 5),
        new Radio(108, 0, 1, 'KYU', 96, 42.6328056, 124.0081556, 104),
        new Radio(109, 0, 1, 'KHG', 104, 39.544625, 76.0214306, 1380),
        new Radio(110, 0, 1, 'KMG', 76, 25.0166667, 102.7333333, 1891),
        new Radio(111, 0, 1, 'KCA', 92, 41.7166667, 83, 1070),
        new Radio(112, 0, 1, 'LBN', 84, 23.7450694, 109.2094611, 92),
        new Radio(113, 0, 1, 'ZGC', 90, 36.5135278, 103.6235528, 1940),
        new Radio(114, 0, 1, 'LLC', 109, 28.06685, 112.2093889, 120),
        new Radio(115, 0, 1, 'LXA', 78, 29.2981639, 90.9970278, 3571),
        new Radio(116, 0, 1, 'LJG', 123, 26.221125, 119.5492278, 53),
        new Radio(117, 0, 1, 'ZUH', 114, 22.2231556, 113.4655917, 1),
        new Radio(118, 0, 1, 'LIG', 71, 27.6266667, 113.5266667, 110),
        new Radio(119, 0, 1, 'PDL', 31, 31.1283083, 121.7920083, 6),
        new Radio(120, 0, 1, 'LCH', 123, 40.8644806, 123.1318222, 435),
        new Radio(121, 0, 1, 'LKO', 105, 29.908375, 113.6900167, 27),
        new Radio(122, 0, 1, 'JK', 92, 26.4583333, 106.98, 1078),
        new Radio(123, 0, 1, 'LMN', 110, 23.6478139, 114.3278083, 63),
        new Radio(124, 0, 1, 'LUX', 118, 39.7406778, 118.7280139, 43),
        new Radio(125, 0, 1, 'LXI', 70, 24.540125, 103.7416556, 1734),
        new Radio(126, 0, 1, 'GAO', 121, 30.8111361, 106.1891667, 309),
        new Radio(127, 0, 1, 'NHW', 93, 31.0816667, 121.5733333, 3),
        new Radio(128, 0, 1, 'NSE', 57, 31.7472278, 118.8664194, 19),
        new Radio(129, 0, 1, 'NLG', 124, 22.5306694, 113.5632333, 70),
        new Radio(130, 0, 1, 'NNG', 92, 22.625, 108.1966667, 126),
        new Radio(131, 0, 1, 'NTG', 103, 32.0651806, 120.9825, 4),
        new Radio(132, 0, 1, 'NNX', 103, 25.0960333, 114.2723083, 137),
        new Radio(133, 0, 1, 'NYB', 80, 20.0140556, 110.1380556, 5),
        new Radio(134, 0, 1, 'NGB', 110, 29.828825, 121.462225, 3),
        new Radio(135, 0, 1, 'NSH', 110, 33.3204861, 108.3139167, 867),
        new Radio(136, 0, 1, 'POU', 88, 23.0203833, 113.1915944, 4),
        new Radio(137, 0, 1, 'PIX', 125, 34.315, 117.98, 24),
        new Radio(138, 0, 1, 'BTO', 106, 38.1065528, 116.5779694, 15),
        new Radio(139, 0, 1, 'PUD', 116, 31.1705667, 121.7824389, 5),
        new Radio(140, 0, 1, 'QNX', 78, 27.042775, 106.0292, 1301),
        new Radio(141, 0, 1, 'QJG', 74, 29.0466667, 106.6533333, 300),
        new Radio(142, 0, 1, 'TAO', 122, 36.2873583, 120.3683194, 8),
        new Radio(143, 0, 1, 'NDG', 76, 47.2440667, 123.9209056, 146),
        new Radio(144, 0, 1, 'YIH', 116, 30.5619861, 111.4774778, 200),
        new Radio(145, 0, 1, 'SYX', 72, 18.3086944, 109.1717694, 436),
        new Radio(146, 0, 1, 'SCH', 80, 38.4283333, 77.24, 1233),
        new Radio(147, 0, 1, 'SHR', 87, 28.41755, 117.9688111, 88),
        new Radio(148, 0, 1, 'SWA', 73, 23.438675, 116.7683778, 4),
        new Radio(149, 0, 1, 'SZY', 119, 40.0997722, 116.4603333, 31),
        new Radio(150, 0, 1, 'SHK', 106, 22.4982556, 113.9015417, 300),
        new Radio(151, 0, 1, 'SHZ', 81, 29.5990722, 120.8149639, 86),
        new Radio(152, 0, 1, 'SEY', 88, 41.6402694, 123.4800111, 53),
        new Radio(153, 0, 1, 'SZX', 100, 22.6512222, 113.7875778, 0),
        new Radio(154, 0, 1, 'SHL', 104, 23.0928722, 113.8508806, 27),
        new Radio(155, 0, 1, 'CTU', 104, 30.5724917, 103.9417444, 495),
        new Radio(156, 0, 1, 'SHY', 83, 30.9524222, 121.8647139, 5),
        new Radio(157, 0, 1, 'TYN', 78, 37.7498639, 112.6188278, 779),
        new Radio(158, 0, 1, 'WHA', 59, 30.783075, 114.2045444, 35),
        new Radio(159, 0, 1, 'TAJ', 58, 39.1112639, 117.3568361, 0),
        new Radio(160, 0, 1, 'TZH', 103, 40.4095472, 114.0523556, 997),
        new Radio(161, 0, 1, 'TGO', 110, 43.5585139, 122.1974917, 183),
        new Radio(162, 0, 1, 'TOL', 106, 29.76445, 119.6587972, 30),
        new Radio(163, 0, 1, 'TMR', 80, 41.8444, 113.1523833, 1493),
        new Radio(164, 0, 1, 'URC', 104, 43.9089861, 87.4734083, 639),
        new Radio(165, 0, 1, 'LJB', 106, 43.7719167, 125.8499333, 187),
        new Radio(166, 0, 1, 'WQG', 58, 43.2943333, 129.785875, 305),
        new Radio(167, 0, 1, 'WEH', 105, 37.1857861, 122.2260611, 36),
        new Radio(168, 0, 1, 'WXI', 104, 36.3621694, 114.9175361, 56),
        new Radio(169, 0, 1, 'WYN', 86, 24.3485139, 114.1132, 163),
        new Radio(170, 0, 1, 'WFX', 118, 30.6053444, 104.4906417, 453),
        new Radio(171, 0, 1, 'VMB', 86, 31.585575, 120.3321833, 5),
        new Radio(172, 0, 1, 'XMN', 92, 24.5442972, 118.1242944, 14),
        new Radio(173, 0, 1, 'KHN', 74, 28.4287417, 115.9221611, 23),
        new Radio(174, 0, 1, 'SIA', 100, 34.4488639, 108.7516361, 479),
        new Radio(175, 0, 1, 'XIC', 89, 28.0019722, 102.1822778, 1558),
        new Radio(176, 0, 1, 'BNN', 110, 21.9816194, 100.7565694, 549),
        new Radio(177, 0, 1, 'XSH', 101, 30.4363333, 115.2678472, 46),
        new Radio(178, 0, 1, 'XJT', 117, 35.9616667, 120.24, 16),
        new Radio(179, 0, 1, 'XYO', 114, 28.1707361, 105.4214722, 443),
        new Radio(180, 0, 1, 'YBL', 104, 39.4225944, 102.7734556, 1248),
        new Radio(181, 0, 1, 'YNJ', 78, 42.8846028, 129.4504944, 184),
        new Radio(182, 0, 1, 'YNT', 72, 37.3785972, 121.3521139, 18),
        new Radio(183, 0, 1, 'YBN', 112, 28.7996667, 104.5557194, 280),
        new Radio(184, 0, 1, 'YIJ', 77, 35.3812222, 109.1085, 1492),
        new Radio(185, 0, 1, 'YNC', 76, 38.3216972, 106.3959028, 1142),
        new Radio(186, 0, 1, 'YIN', 82, 24.1916944, 113.4158361, 64),
        new Radio(187, 0, 1, 'TAN', 23, 23.6694556, 113.24275, 145),
        new Radio(188, 0, 1, 'SJW', 124, 38.2812333, 114.6998333, 72),
        new Radio(189, 0, 1, 'CGO', 92, 34.5169222, 113.8418833, 151),
        new Radio(190, 0, 1, 'ZHO', 102, 33.6641583, 114.6532861, 50),
        new Radio(191, 0, 1, 'HSN', 70, 29.9326556, 122.3645806, 1),
        new Radio(192, 0, 1, 'ZYG', 58, 30.1171889, 104.6754472, 378),
        new Radio(193, 0, 1, 'AAT', 108, 23.8892361, 91.2394028, 21),
        new Radio(194, 0, 1, 'AT', 106, 10.8316111, 72.1799444, 5),
        new Radio(195, 0, 1, 'AGG', 57, 27.1504806, 77.9477806, 171),
        new Radio(196, 0, 1, 'AAE', 78, 23.0682139, 72.6290694, 54),
        new Radio(197, 0, 1, 'ALI', 126, 27.8292444, 78.1784917, 184),
        new Radio(198, 0, 1, 'AAR', 102, 31.7280444, 74.7859056, 229),
        new Radio(199, 0, 1, 'AAU', 110, 19.8611056, 75.405225, 579),
        new Radio(200, 0, 1, 'BBD', 113, 26.6881778, 88.3270417, 130),
        new Radio(201, 0, 1, 'BBG', 102, 12.9493972, 77.6808556, 886),
        new Radio(202, 0, 1, 'BPN', 107, 25.7065306, 91.9786778, 894),
        new Radio(203, 0, 1, 'BBM', 58, 15.8557861, 74.6169222, 768),
        new Radio(204, 0, 1, 'BBI', 75, 15.1650444, 76.8806917, 466),
        new Radio(205, 0, 1, 'BVR', 88, 21.7521778, 72.1903, 9),
        new Radio(206, 0, 1, 'BPL', 118, 23.2827083, 77.3359222, 524),
        new Radio(207, 0, 1, 'BBS', 82, 20.2436639, 85.8133806, 42),
        new Radio(208, 0, 1, 'BBJ', 73, 23.2750917, 69.6669222, 91),
        new Radio(209, 0, 1, 'CLC', 112, 11.1349222, 75.9550194, 103),
        new Radio(210, 0, 1, 'CHG', 112, 30.6678528, 76.8055556, 313),
        new Radio(211, 0, 1, 'MMV', 72, 13.0042972, 80.1661278, 9),
        new Radio(212, 0, 1, 'CHI', 115, 28.3475556, 76.6660278, 228),
        new Radio(213, 0, 1, 'CCN', 93, 9.9429194, 76.2744833, 0),
        new Radio(214, 0, 1, 'CIA', 82, 10.1501417, 76.3726528, 6),
        new Radio(215, 0, 1, 'CIB', 120, 10.1182333, 76.6785472, 50),
        new Radio(216, 0, 1, 'CCB', 76, 17.0335583, 77.0483139, 394),
        new Radio(217, 0, 1, 'DPN', 108, 28.5669333, 77.0935, 221),
        new Radio(218, 0, 1, 'DRG', 120, 27.4883361, 95.0206972, 112),
        new Radio(219, 0, 1, 'DMR', 92, 25.8808722, 93.7820333, 152),
        new Radio(220, 0, 1, 'LKA', 87, 28.1890083, 74.1114833, 256),
        new Radio(221, 0, 1, 'GGC', 97, 24.7418694, 84.9439083, 117),
        new Radio(222, 0, 1, 'GGO', 83, 15.3783194, 73.811325, 28),
        new Radio(223, 0, 1, 'GGB', 107, 17.3137833, 76.8030694, 454),
        new Radio(224, 0, 1, 'GGT', 123, 26.1018889, 91.5857361, 52),
        new Radio(225, 0, 1, 'GWA', 75, 26.2963944, 78.2266778, 187),
        new Radio(226, 0, 1, 'HHY', 94, 17.4542611, 78.4575361, 535),
        new Radio(227, 0, 1, 'IIM', 106, 24.7582806, 93.8977222, 776),
        new Radio(228, 0, 1, 'IID', 114, 22.7105917, 75.779475, 557),
        new Radio(229, 0, 1, 'JJB', 83, 23.1800556, 80.0591472, 497),
        new Radio(230, 0, 1, 'JJP', 76, 26.825775, 75.8380278, 378),
        new Radio(231, 0, 1, 'JAL', 105, 27.6942833, 79.6560333, 146),
        new Radio(232, 0, 1, 'JJU', 80, 32.6885056, 74.8364222, 287),
        new Radio(233, 0, 1, 'JMR', 97, 22.4686111, 70.1711111, 17),
        new Radio(234, 0, 1, 'JJS', 101, 22.8132278, 86.1739528, 144),
        new Radio(235, 0, 1, 'JJO', 70, 26.2354778, 73.0496028, 209),
        new Radio(236, 0, 1, 'JHT', 58, 26.723375, 94.1645333, 95),
        new Radio(237, 0, 1, 'KKP', 101, 12.7849306, 79.7131667, 83),
        new Radio(238, 0, 1, 'KKJ', 111, 24.8030083, 79.9129806, 225),
        new Radio(239, 0, 1, 'CEA', 72, 22.6449222, 88.45265, 4),
        new Radio(240, 0, 1, 'LEH', 104, 34.7327778, 77.5663611, 3175),
        new Radio(241, 0, 1, 'LLP', 89, 23.8305361, 92.62355, 432),
        new Radio(242, 0, 1, 'LBR', 112, 27.293, 94.0969944, 99),
        new Radio(243, 0, 1, 'LLK', 78, 26.7585778, 80.8944278, 124),
        new Radio(244, 0, 1, 'LUN', 123, 28.5703, 73.7842056, 196),
        new Radio(245, 0, 1, 'MDI', 108, 9.8308417, 78.089425, 146),
        new Radio(246, 0, 1, 'MML', 89, 12.961275, 74.9217194, 110),
        new Radio(247, 0, 1, 'BBB', 113, 19.0861917, 72.8746611, 5),
        new Radio(248, 0, 1, 'NNP', 74, 21.0812667, 79.0562028, 307),
        new Radio(249, 0, 1, 'PPT', 58, 25.5902583, 85.0897028, 54),
        new Radio(250, 0, 1, 'PPB', 104, 11.6492889, 92.7471778, 125),
        new Radio(251, 0, 1, 'PRA', 96, 24.0299, 74.7507722, 500),
        new Radio(252, 0, 1, 'PUN', 86, 18.5800528, 73.9142028, 589),
        new Radio(253, 0, 1, 'RRP', 108, 21.1808778, 81.743925, 318),
        new Radio(254, 0, 1, 'RKT', 101, 22.3125667, 70.7778417, 132),
        new Radio(255, 0, 1, 'RRC', 116, 23.3086611, 85.3267722, 641),
        new Radio(256, 0, 1, 'SKA', 119, 27.8484472, 77.0082056, 202),
        new Radio(257, 0, 1, 'SAM', 117, 28.8198639, 76.8191889, 218),
        new Radio(258, 0, 1, 'SSB', 71, 28.3934833, 77.7081111, 203),
        new Radio(259, 0, 1, 'KKU', 104, 24.9135694, 92.9777361, 106),
        new Radio(260, 0, 1, 'SNG', 106, 34.0016167, 74.7553389, 1648),
        new Radio(261, 0, 1, 'TEZ', 126, 26.7110389, 92.7821, 73),
        new Radio(262, 0, 1, 'TTR', 78, 10.7621667, 78.7136528, 89),
        new Radio(263, 0, 1, 'TTP', 104, 13.6342972, 79.5391111, 106),
        new Radio(264, 0, 1, 'TVM', 98, 8.4749861, 76.9253056, 8),
        new Radio(265, 0, 1, 'UUD', 106, 24.6127806, 73.8941111, 516),
        new Radio(266, 0, 1, 'QQZ', 120, 22.3330472, 73.2250694, 36),
        new Radio(267, 0, 1, 'BBN', 86, 25.4542, 82.8595139, 83),
        new Radio(268, 0, 1, 'BBZ', 109, 16.5220417, 80.7928083, 21),
        new Radio(269, 0, 1, 'VVZ', 87, 17.6690167, 83.2532806, 355),
        new Radio(270, 0, 1, 'ANY', 99, -6.9746889, 110.3801028, 6),
        new Radio(271, 0, 1, 'AMN', 102, -3.6146417, 128.18565, 261),
        new Radio(272, 0, 1, 'BLI', 109, -8.7509306, 115.1632583, 3),
        new Radio(273, 0, 1, 'BPN', 119, -1.2457944, 116.9403306, 4),
        new Radio(274, 0, 1, 'BAC', 81, 5.5226333, 95.4222972, 22),
        new Radio(275, 0, 1, 'TKG', 97, -5.2602722, 105.1941056, 81),
        new Radio(276, 0, 1, 'BND', 117, -6.8819889, 107.5122833, 809),
        new Radio(277, 0, 1, 'BDM', 58, -3.436775, 114.7314833, 13),
        new Radio(278, 0, 1, 'BTM', 107, 1.1413583, 104.1367972, 4),
        new Radio(279, 0, 1, 'BKL', 90, -3.8604694, 102.3329, 21),
        new Radio(280, 0, 1, 'BIK', 72, -1.1825639, 136.0861778, 13),
        new Radio(281, 0, 1, 'NMA', 98, -8.5341472, 118.6915028, 54),
        new Radio(282, 0, 1, 'BTO', 105, -6.292275, 106.5656972, 41),
        new Radio(283, 0, 1, 'CKG', 83, -6.1877806, 106.5303889, 21),
        new Radio(284, 0, 1, 'CLP', 96, -7.6446472, 109.0356583, 27),
        new Radio(285, 0, 1, 'MIL', 118, -0.8963194, 131.2898444, 3),
        new Radio(286, 0, 1, 'GTL', 82, 0.6444889, 122.8474611, 36),
        new Radio(287, 0, 1, 'HLM', 80, -6.2718806, 106.8869583, 30),
        new Radio(288, 0, 1, 'MKS', 94, -5.0376083, 119.5261611, 7),
        new Radio(289, 0, 1, 'IMU', 111, -6.3045722, 108.3400861, 1),
        new Radio(290, 3, 1, 'IWY', 95, -7.6122667, 111.4362667, 108),
        new Radio(291, 0, 1, 'DKI', 93, -5.9644806, 107.0374889, 2),
        new Radio(292, 0, 1, 'JMB', 122, -1.6359889, 103.6450944, 29),
        new Radio(293, 0, 1, 'JPA', 109, -2.5783667, 140.5164417, 89),
        new Radio(294, 0, 1, 'KDI', 97, -4.0757361, 122.4528361, 18),
        new Radio(295, 0, 1, 'KTP', 115, -1.8164917, 109.9655583, 3),
        new Radio(296, 0, 1, 'KPG', 59, -10.1739222, 123.6775444, 104),
        new Radio(297, 0, 1, 'MNO', 89, 1.5551111, 124.9279361, 87),
        new Radio(298, 0, 1, 'MWB', 95, 1.323275, 124.9549667, 1064),
        new Radio(299, 0, 1, 'MTM', 92, -8.5604778, 116.0771056, 4),
        new Radio(300, 0, 1, 'MOF', 92, -8.641075, 122.2396611, 34),
        new Radio(301, 0, 1, 'MDN', 77, 3.5046528, 98.6076417, 63),
        new Radio(302, 0, 1, 'MKE', 105, -8.5225222, 140.4171083, 7),
        new Radio(303, 0, 1, 'MKB', 94, -0.7869528, 100.2782139, 11),
        new Radio(304, 0, 1, 'NBR', 120, -3.3819583, 135.5011222, 18),
        new Radio(305, 0, 1, 'NIS', 118, 1.1686306, 97.7016583, 9),
        new Radio(306, 0, 1, 'PDG', 111, -0.8711417, 100.3531417, 4),
        new Radio(307, 0, 1, 'PLB', 102, -2.8786278, 104.6531694, 7),
        new Radio(308, 0, 1, 'PAL', 109, -0.8851611, 119.8950139, 106),
        new Radio(309, 0, 1, 'PKP', 89, -2.1566639, 106.1402389, 28),
        new Radio(310, 0, 1, 'PKN', 121, -2.7264806, 111.695975, 16),
        new Radio(311, 0, 1, 'PMA', 83, -3.715, 128.0872139, 14),
        new Radio(312, 0, 1, 'PKU', 58, 0.4255694, 101.4415333, 24),
        new Radio(313, 0, 1, 'SIX', 90, 1.5523389, 98.8915083, 12),
        new Radio(314, 0, 1, 'PNK', 79, -0.0791667, 109.3749389, 0),
        new Radio(315, 0, 1, 'SLO', 110, -7.5077222, 110.7944111, 111),
        new Radio(316, 0, 1, 'SOG', 91, -0.923125, 131.1202667, 8),
        new Radio(317, 0, 1, 'SBR', 81, -7.3739139, 112.7712528, 2),
        new Radio(318, 0, 1, 'TPN', 114, -2.7245694, 107.75325, 46),
        new Radio(319, 0, 1, 'TPG', 95, 0.9035444, 104.5145611, 25),
        new Radio(320, 0, 1, 'TRK', 113, 3.3255528, 117.562025, 5),
        new Radio(321, 0, 1, 'TMK', 74, -4.5171278, 136.8672556, 32),
        new Radio(322, 0, 1, 'PKY', 90, -2.2435139, 113.9496167, 13),
        new Radio(323, 0, 1, 'JOG', 75, -7.8003167, 110.3094139, 97),
        new Radio(324, 0, 1, 'LPB', 113, 19.9109833, 102.171925, 298),
        new Radio(325, 0, 1, 'PAK', 97, 15.1966472, 105.7380639, 112),
        new Radio(326, 0, 1, 'SAV', 82, 16.5620611, 104.7667278, 157),
        new Radio(327, 0, 1, 'VTN', 122, 18.0103306, 102.5404722, 175),
        new Radio(328, 0, 1, 'THX', 87, 19.4555111, 103.1810333, 1099),
        new Radio(329, 0, 1, 'VAS', 83, 6.1857222, 100.3970361, 5),
        new Radio(330, 0, 1, 'VBA', 94, 3.3251111, 101.4608917, 96),
        new Radio(331, 0, 1, 'VBU', 73, 3.1538778, 113.0131361, 5),
        new Radio(332, 3, 1, 'BTR', 82, 5.4718611, 100.3931389, 4),
        new Radio(333, 0, 1, 'VBT', 80, 5.4759361, 100.3931694, 5),
        new Radio(334, 0, 1, 'VGK', 113, 5.796975, 102.4791167, 6),
        new Radio(335, 0, 1, 'VIH', 120, 4.573625, 101.0939167, 36),
        new Radio(336, 0, 1, 'VJR', 74, 1.7293333, 103.6222056, 120),
        new Radio(337, 0, 1, 'VKE', 118, 4.5483528, 103.4231889, 9),
        new Radio(338, 0, 1, 'VKB', 70, 6.1634667, 102.3142056, 6),
        new Radio(339, 0, 1, 'VJN', 78, 5.8992444, 116.033975, 12),
        new Radio(340, 0, 1, 'VKL', 108, 2.7244056, 101.7381222, 75),
        new Radio(341, 0, 1, 'VKT', 101, 5.3854917, 103.1031194, 6),
        new Radio(342, 4, 1, 'VKN', 84, 3.7778667, 103.2117139, 18),
        new Radio(343, 0, 1, 'VKG', 92, 1.4732111, 110.3115722, 56),
        new Radio(344, 0, 1, 'VLB', 110, 5.2927944, 115.2483333, 17),
        new Radio(345, 0, 1, 'VPL', 88, 6.3543306, 99.7454056, 8),
        new Radio(346, 0, 1, 'VLG', 81, 4.7972889, 115.0023167, 13),
        new Radio(347, 0, 1, 'VMK', 121, 2.2581917, 102.2460389, 11),
        new Radio(348, 0, 1, 'VMR', 115, 2.3883333, 103.8716667, 4),
        new Radio(349, 0, 1, 'VMI', 71, 4.3377639, 113.9942278, 16),
        new Radio(350, 0, 1, 'VZU', 75, 4.0327667, 114.7952083, 69),
        new Radio(351, 0, 1, 'VPG', 109, 5.2794222, 100.2607917, 5),
        new Radio(352, 0, 1, 'VPT', 87, 2.908625, 104.1008889, 77),
        new Radio(353, 0, 1, 'VSN', 87, 5.9037222, 118.0747944, 3),
        new Radio(354, 0, 1, 'VSI', 59, 2.2467056, 112.0033472, 46),
        new Radio(355, 0, 1, 'VTW', 103, 4.3245028, 118.1399, 17),
        new Radio(356, 0, 1, 'BGO', 73, 17.318275, 96.5200361, 10),
        new Radio(357, 0, 1, 'DWI', 57, 14.1005833, 98.2067972, 25),
        new Radio(358, 0, 1, 'HGU', 70, 17.0846389, 96.2481667, 6),
        new Radio(359, 0, 1, 'LSO', 115, 22.9842222, 97.7461944, 769),
        new Radio(360, 0, 1, 'MDY', 75, 21.9342778, 96.12975, 77),
        new Radio(361, 0, 1, 'MIA', 110, 21.7109444, 95.97475, 87),
        new Radio(362, 0, 1, 'PTN', 103, 16.8146111, 94.7766667, 5),
        new Radio(363, 0, 1, 'TGO', 98, 19.0478333, 96.3964444, 54),
        new Radio(364, 0, 1, 'PU', 98, 1.4234278, 103.9332194, 0),
        new Radio(365, 0, 1, 'PLA', 110, 1.3759167, 103.9147833, 19),
        new Radio(366, 0, 1, 'SJ', 82, 1.2225611, 103.8543444, 45),
        new Radio(367, 0, 1, 'VTK', 112, 1.4153389, 104.0219944, 41),
        new Radio(368, 0, 1, 'TNG', 86, 1.3954444, 103.7113944, 24),
        new Radio(369, 0, 1, 'BMT', 58, 12.6665, 108.123, 543),
        new Radio(370, 0, 1, 'CRA', 112, 11.994525, 109.2199778, 11),
        new Radio(371, 0, 1, 'CAB', 98, 20.8182222, 106.7275, 4),
        new Radio(372, 0, 1, 'DAN', 91, 16.0527944, 108.1981694, 8),
        new Radio(373, 0, 1, 'DIB', 83, 21.3960306, 103.0045167, 484),
        new Radio(374, 0, 1, 'NAH', 102, 20.3872083, 106.1177306, 3),
        new Radio(375, 0, 1, 'NOB', 108, 21.2130139, 105.8349306, 15),
        new Radio(376, 0, 1, 'PHT', 88, 10.9281417, 108.0720972, 5),
        new Radio(377, 0, 1, 'HUE', 105, 16.4022972, 107.7017778, 19),
        new Radio(378, 0, 1, 'PCA', 110, 13.9571778, 109.0426194, 31),
        new Radio(379, 0, 1, 'TSN', 114, 10.8164333, 106.6455639, 9),
        new Radio(380, 0, 1, 'VIN', 78, 18.73405, 105.6683361, 9),
        new Radio(381, 1, 1, 'TAK', 47, 16.89950556, 99.25214444, 149)
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
    radios[61].locates(locations[60]);
    radios[62].locates(locations[61]);
    radios[63].locates(locations[62]);
    radios[64].locates(locations[63]);
    radios[65].locates(locations[64]);
    radios[66].locates(locations[65]);
    radios[67].locates(locations[66]);
    radios[68].locates(locations[67]);
    radios[69].locates(locations[68]);
    radios[70].locates(locations[69]);
    radios[71].locates(locations[70]);
    radios[72].locates(locations[71]);
    radios[73].locates(locations[72]);
    radios[74].locates(locations[73]);
    radios[75].locates(locations[74]);
    radios[76].locates(locations[75]);
    radios[77].locates(locations[76]);
    radios[78].locates(locations[77]);
    radios[79].locates(locations[78]);
    radios[80].locates(locations[79]);
    radios[81].locates(locations[80]);
    radios[82].locates(locations[81]);
    radios[83].locates(locations[82]);
    radios[84].locates(locations[83]);
    radios[85].locates(locations[84]);
    radios[86].locates(locations[85]);
    radios[87].locates(locations[86]);
    radios[88].locates(locations[87]);
    radios[89].locates(locations[88]);
    radios[90].locates(locations[89]);
    radios[91].locates(locations[90]);
    radios[92].locates(locations[91]);
    radios[93].locates(locations[92]);
    radios[94].locates(locations[93]);
    radios[95].locates(locations[94]);
    radios[96].locates(locations[95]);
    radios[97].locates(locations[96]);
    radios[98].locates(locations[97]);
    radios[99].locates(locations[98]);
    radios[100].locates(locations[99]);
    radios[101].locates(locations[100]);
    radios[102].locates(locations[101]);
    radios[103].locates(locations[102]);
    radios[104].locates(locations[103]);
    radios[105].locates(locations[104]);
    radios[106].locates(locations[105]);
    radios[107].locates(locations[106]);
    radios[108].locates(locations[107]);
    radios[109].locates(locations[108]);
    radios[110].locates(locations[109]);
    radios[111].locates(locations[110]);
    radios[112].locates(locations[111]);
    radios[113].locates(locations[112]);
    radios[114].locates(locations[113]);
    radios[115].locates(locations[114]);
    radios[116].locates(locations[115]);
    radios[117].locates(locations[116]);
    radios[118].locates(locations[117]);
    radios[119].locates(locations[118]);
    radios[120].locates(locations[119]);
    radios[121].locates(locations[120]);
    radios[122].locates(locations[121]);
    radios[123].locates(locations[122]);
    radios[124].locates(locations[123]);
    radios[125].locates(locations[124]);
    radios[126].locates(locations[125]);
    radios[127].locates(locations[126]);
    radios[128].locates(locations[127]);
    radios[129].locates(locations[128]);
    radios[130].locates(locations[129]);
    radios[131].locates(locations[130]);
    radios[132].locates(locations[131]);
    radios[133].locates(locations[132]);
    radios[134].locates(locations[133]);
    radios[135].locates(locations[134]);
    radios[136].locates(locations[135]);
    radios[137].locates(locations[136]);
    radios[138].locates(locations[137]);
    radios[139].locates(locations[138]);
    radios[140].locates(locations[139]);
    radios[141].locates(locations[140]);
    radios[142].locates(locations[141]);
    radios[143].locates(locations[142]);
    radios[144].locates(locations[143]);
    radios[145].locates(locations[144]);
    radios[146].locates(locations[145]);
    radios[147].locates(locations[146]);
    radios[148].locates(locations[147]);
    radios[149].locates(locations[148]);
    radios[150].locates(locations[149]);
    radios[151].locates(locations[150]);
    radios[152].locates(locations[151]);
    radios[153].locates(locations[152]);
    radios[154].locates(locations[153]);
    radios[155].locates(locations[154]);
    radios[156].locates(locations[155]);
    radios[157].locates(locations[156]);
    radios[158].locates(locations[157]);
    radios[159].locates(locations[158]);
    radios[160].locates(locations[159]);
    radios[161].locates(locations[160]);
    radios[162].locates(locations[161]);
    radios[163].locates(locations[162]);
    radios[164].locates(locations[163]);
    radios[165].locates(locations[164]);
    radios[166].locates(locations[165]);
    radios[167].locates(locations[166]);
    radios[168].locates(locations[167]);
    radios[169].locates(locations[168]);
    radios[170].locates(locations[169]);
    radios[171].locates(locations[170]);
    radios[172].locates(locations[171]);
    radios[173].locates(locations[172]);
    radios[174].locates(locations[173]);
    radios[175].locates(locations[174]);
    radios[176].locates(locations[175]);
    radios[177].locates(locations[176]);
    radios[178].locates(locations[177]);
    radios[179].locates(locations[178]);
    radios[180].locates(locations[179]);
    radios[181].locates(locations[180]);
    radios[182].locates(locations[181]);
    radios[183].locates(locations[182]);
    radios[184].locates(locations[183]);
    radios[185].locates(locations[184]);
    radios[186].locates(locations[185]);
    radios[187].locates(locations[186]);
    radios[188].locates(locations[187]);
    radios[189].locates(locations[188]);
    radios[190].locates(locations[189]);
    radios[191].locates(locations[190]);
    radios[192].locates(locations[191]);
    radios[193].locates(locations[192]);
    radios[194].locates(locations[193]);
    radios[195].locates(locations[194]);
    radios[196].locates(locations[195]);
    radios[197].locates(locations[196]);
    radios[198].locates(locations[197]);
    radios[199].locates(locations[198]);
    radios[200].locates(locations[199]);
    radios[201].locates(locations[200]);
    radios[202].locates(locations[201]);
    radios[203].locates(locations[202]);
    radios[204].locates(locations[203]);
    radios[205].locates(locations[204]);
    radios[206].locates(locations[205]);
    radios[207].locates(locations[206]);
    radios[208].locates(locations[207]);
    radios[209].locates(locations[208]);
    radios[210].locates(locations[209]);
    radios[211].locates(locations[210]);
    radios[212].locates(locations[211]);
    radios[213].locates(locations[212]);
    radios[214].locates(locations[213]);
    radios[215].locates(locations[214]);
    radios[216].locates(locations[215]);
    radios[217].locates(locations[216]);
    radios[218].locates(locations[217]);
    radios[219].locates(locations[218]);
    radios[220].locates(locations[219]);
    radios[221].locates(locations[220]);
    radios[222].locates(locations[221]);
    radios[223].locates(locations[222]);
    radios[224].locates(locations[223]);
    radios[225].locates(locations[224]);
    radios[226].locates(locations[225]);
    radios[227].locates(locations[226]);
    radios[228].locates(locations[227]);
    radios[229].locates(locations[228]);
    radios[230].locates(locations[229]);
    radios[231].locates(locations[230]);
    radios[232].locates(locations[231]);
    radios[233].locates(locations[232]);
    radios[234].locates(locations[233]);
    radios[235].locates(locations[234]);
    radios[236].locates(locations[235]);
    radios[237].locates(locations[236]);
    radios[238].locates(locations[237]);
    radios[239].locates(locations[238]);
    radios[240].locates(locations[239]);
    radios[241].locates(locations[240]);
    radios[242].locates(locations[241]);
    radios[243].locates(locations[242]);
    radios[244].locates(locations[243]);
    radios[245].locates(locations[244]);
    radios[246].locates(locations[245]);
    radios[247].locates(locations[246]);
    radios[248].locates(locations[247]);
    radios[249].locates(locations[248]);
    radios[250].locates(locations[249]);
    radios[251].locates(locations[250]);
    radios[252].locates(locations[251]);
    radios[253].locates(locations[252]);
    radios[254].locates(locations[253]);
    radios[255].locates(locations[254]);
    radios[256].locates(locations[255]);
    radios[257].locates(locations[256]);
    radios[258].locates(locations[257]);
    radios[259].locates(locations[258]);
    radios[260].locates(locations[259]);
    radios[261].locates(locations[260]);
    radios[262].locates(locations[261]);
    radios[263].locates(locations[262]);
    radios[264].locates(locations[263]);
    radios[265].locates(locations[264]);
    radios[266].locates(locations[265]);
    radios[267].locates(locations[266]);
    radios[268].locates(locations[267]);
    radios[269].locates(locations[268]);
    radios[270].locates(locations[269]);
    radios[271].locates(locations[270]);
    radios[272].locates(locations[271]);
    radios[273].locates(locations[272]);
    radios[274].locates(locations[273]);
    radios[275].locates(locations[274]);
    radios[276].locates(locations[275]);
    radios[277].locates(locations[276]);
    radios[278].locates(locations[277]);
    radios[279].locates(locations[278]);
    radios[280].locates(locations[279]);
    radios[281].locates(locations[280]);
    radios[282].locates(locations[281]);
    radios[283].locates(locations[282]);
    radios[284].locates(locations[283]);
    radios[285].locates(locations[284]);
    radios[286].locates(locations[285]);
    radios[287].locates(locations[286]);
    radios[288].locates(locations[287]);
    radios[289].locates(locations[288]);
    radios[290].locates(locations[289]);
    radios[291].locates(locations[290]);
    radios[292].locates(locations[291]);
    radios[293].locates(locations[292]);
    radios[294].locates(locations[293]);
    radios[295].locates(locations[294]);
    radios[296].locates(locations[295]);
    radios[297].locates(locations[296]);
    radios[298].locates(locations[297]);
    radios[299].locates(locations[298]);
    radios[300].locates(locations[299]);
    radios[301].locates(locations[300]);
    radios[302].locates(locations[301]);
    radios[303].locates(locations[302]);
    radios[304].locates(locations[303]);
    radios[305].locates(locations[304]);
    radios[306].locates(locations[305]);
    radios[307].locates(locations[306]);
    radios[308].locates(locations[307]);
    radios[309].locates(locations[308]);
    radios[310].locates(locations[309]);
    radios[311].locates(locations[310]);
    radios[312].locates(locations[311]);
    radios[313].locates(locations[312]);
    radios[314].locates(locations[313]);
    radios[315].locates(locations[314]);
    radios[316].locates(locations[315]);
    radios[317].locates(locations[316]);
    radios[318].locates(locations[317]);
    radios[319].locates(locations[318]);
    radios[320].locates(locations[319]);
    radios[321].locates(locations[320]);
    radios[322].locates(locations[321]);
    radios[323].locates(locations[322]);
    radios[324].locates(locations[323]);
    radios[325].locates(locations[324]);
    radios[326].locates(locations[325]);
    radios[327].locates(locations[326]);
    radios[328].locates(locations[327]);
    radios[329].locates(locations[328]);
    radios[330].locates(locations[329]);
    radios[331].locates(locations[330]);
    radios[332].locates(locations[331]);
    radios[333].locates(locations[332]);
    radios[334].locates(locations[333]);
    radios[335].locates(locations[334]);
    radios[336].locates(locations[335]);
    radios[337].locates(locations[336]);
    radios[338].locates(locations[337]);
    radios[339].locates(locations[338]);
    radios[340].locates(locations[339]);
    radios[341].locates(locations[340]);
    radios[342].locates(locations[341]);
    radios[343].locates(locations[342]);
    radios[344].locates(locations[343]);
    radios[345].locates(locations[344]);
    radios[346].locates(locations[345]);
    radios[347].locates(locations[346]);
    radios[348].locates(locations[347]);
    radios[349].locates(locations[348]);
    radios[350].locates(locations[349]);
    radios[351].locates(locations[350]);
    radios[352].locates(locations[351]);
    radios[353].locates(locations[352]);
    radios[354].locates(locations[353]);
    radios[355].locates(locations[354]);
    radios[356].locates(locations[355]);
    radios[357].locates(locations[356]);
    radios[358].locates(locations[357]);
    radios[359].locates(locations[358]);
    radios[360].locates(locations[359]);
    radios[361].locates(locations[360]);
    radios[362].locates(locations[361]);
    radios[363].locates(locations[362]);
    radios[364].locates(locations[363]);
    radios[365].locates(locations[364]);
    radios[366].locates(locations[365]);
    radios[367].locates(locations[366]);
    radios[368].locates(locations[367]);
    radios[369].locates(locations[368]);
    radios[370].locates(locations[369]);
    radios[371].locates(locations[370]);
    radios[372].locates(locations[371]);
    radios[373].locates(locations[372]);
    radios[374].locates(locations[373]);
    radios[375].locates(locations[374]);
    radios[376].locates(locations[375]);
    radios[377].locates(locations[376]);
    radios[378].locates(locations[377]);
    radios[379].locates(locations[378]);
    radios[380].locates(locations[379]);
    
    var resources = {
        "frequencies": {
            get : function () {
                return angular.copy(frequencies);
            },
        },
        "civil-frequencies": {
            get : function () {
                return angular.copy(civilFrequencies);
            },
        },
        "radios": {
            get : function (id) {
                if (id)
                    return function (radio) {
                        radio.id === id
                    };
                return angular.copy(radios)
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
                return angular.copy(locations);
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