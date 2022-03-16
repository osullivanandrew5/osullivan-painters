var width = $(window).width();
window.onscroll = function(){
	if ((width >= 1000)){
		if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			$("#header").css("background","#fff");
			$("#header").css("color","#000");
			$("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
			$("#header").css("padding","4vh 4vw");
			$("#navigation a").hover(function(){
			    $(this).css("border-bottom","2px solid rgb(44, 98, 255)");
			},function(){
			    $(this).css("border-bottom","2px solid transparent");
			});
		}else{
			$("#header").css("background","transparent");
			$("#header").css("color","#fff");
			$("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
			$("#header").css("padding","6vh 4vw");
			$("#navigation a").hover(function(){
			    $(this).css("border-bottom","2px solid #fff");
			},function(){
			    $(this).css("border-bottom","2px solid transparent");
			});
		}
	}
}

function magnify(imglink){
	$("#img_here").css("background",`url('${imglink}') center center`);
	$("#magnify").css("display","flex");
	$("#magnify").addClass("animated fadeIn");
	setTimeout(function(){
		$("#magnify").removeClass("animated fadeIn");
	},800);
}

function closemagnify(){
	$("#magnify").addClass("animated fadeOut");
	setTimeout(function(){
		$("#magnify").css("display","none");
		$("#magnify").removeClass("animated fadeOut");
		$("#img_here").css("background",`url('') center center`);
	},800);
}

setTimeout(function(){
	$("#loading").addClass("animated fadeOut");
	setTimeout(function(){
	  $("#loading").removeClass("animated fadeOut");
	  $("#loading").css("display","none");
	},800);
},1650);

$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('body,html').animate({
				scrollTop: $(hash).offset().top
			}, 1800, function(){
				window.location.hash = hash;
	   		});
	   	}
	  });
	myStart();
});

function myStart() {
	// Change first main image
	$("#rightImage").css("background", "linear-gradient(0deg, rgba(44, 98, 255, 0) 60%, rgba(44, 98, 255, 0.8) 80%), url('./media/pics/2021/12/img_20211208_150545-1.jpg')");
	$("#rightImage").css("background-size", "cover");
	$("#rightImage").css("background-repeat", "no-repeat");

	// Populate the portifolio part of it
	let listImages = [
		"2020/11/84500920_3121883371173642_3940626051629056000_n_3121883367840309.jpg",
		"2020/11/92369509_3293748020653842_2226434449799643136_n_3293748007320510.jpg",
		"2020/11/90785475_3266174256744552_8704346336012533760_n_3266174250077886.jpg",
		"2020/11/92354389_3293747550653889_1128781503480725504_n_3293747543987223.jpg",
		"2020/11/92057738_3293747737320537_4215054086518603776_n_3293747733987204.jpg",
		"2022/03/received_2848915518744003-1.jpeg",
		"2022/03/received_2848915518744003.jpeg",
		"2020/11/91495316_3271628979532413_3749427074117402624_n_3271628972865747.jpg",
		"2020/11/91495316_3271628979532413_3749427074117402624_n_3271628972865747-1.jpg",
		"2021/12/fb_img_1638999820504.jpg",
		"2021/01/received_175788500555651.jpeg",
		"2020/12/img_20201201_111334.jpg",
		"2020/11/84311700_3151324358229543_5397436240687529984_n_3151324344896211.jpg",
		"2020/11/83358198_3121883311173648_8085175917816578048_n_3121883297840316.jpg",
		"2020/11/120939502_3808850172476955_8117664769045174258_n_3808850169143622.jpg",
		"2021/01/received_220815019705110.jpeg",
		"2020/11/83423054_3121882704507042_1725872508420227072_n_3121882697840376.jpg",
		"2021/12/fb_img_1638997208595.jpg",
		"2021/12/fb_img_1638999792196.jpg",
		"2021/12/received_1124725221668404-1.jpeg",
		"2021/12/fb_img_1638999635602.jpg",
		"2021/12/received_1124725221668404.jpeg",
		"2021/12/fb_img_1638999756788.jpg",
		"2021/12/received_2424193387719230.jpeg",
		"2020/11/118286639_3677031605658813_5289216806877054119_n_3677031598992147.jpg",
		"2021/12/fb_img_1638999644996.jpg",
		"2021/12/received_283870333693688.jpeg",
		"2021/01/received_466773561151395.jpeg",
		"2021/12/received_237055995204662.jpeg",
		"2020/11/72636138_2877792242249424_2478904271114862592_n_2877792238916091.jpg",
		"2021/12/fb_img_1638999638333.jpg",
		"2021/12/received_448899266850357.jpeg",
		"2021/12/received_448899266850357-1.jpeg",
		"2021/12/fb_img_1638999729437.jpg",
		"2020/11/92676378_3293746617320649_985176926886821888_n_3293746610653983.jpg",
		"2020/11/71553778_2847483938613588_2837571294877188096_n_2847483935280255.jpg",
		"2020/11/86192999_3168690593159586_7187417745955225600_n_3168690586492920.jpg",
		"2022/03/received_650929439493097.jpeg",
		"2021/12/fb_img_1638999824975.jpg",
		"2021/12/fb_img_1638999736499.jpg",
		"2021/12/fb_img_1638999673122.jpg",
		"2021/12/fb_img_1638999733926.jpg",
		"2020/11/120820178_3808850905810215_188187135841200899_n_3808850895810216.jpg",
		"2020/11/84283774_3151324761562836_4039356268748472320_n_3151324758229503.jpg",
		"2020/11/120919893_3808851039143535_4163803241018217776_n_3808851022476870.jpg",
		"2021/12/fb_img_1638999726224.jpg",
		"2021/01/received_529119434663116.jpeg",
		"2021/12/fb_img_1638999775823.jpg",
		"2020/12/img_20201201_1113237e2.jpg",
		"2020/11/119740521_3751738954854744_8946269714090660554_n_3751738948188078.jpg",
		"2021/12/fb_img_1638999648125.jpg",
		"2020/11/103775836_3464095596952416_3311181876337306809_n_3464095593619083.jpg",
		"2021/12/received_453223999735486.jpeg",
		"2021/12/fb_img_1638999936482.jpg",
		"2021/12/fb_img_1638999667822.jpg",
		"2021/12/received_950314379194110.jpeg",
		"2021/12/fb_img_1638999701718.jpg",
		"2021/12/received_1609983959359339.jpeg",
		"2020/12/img_20201201_1147057e2.jpg",
		"2020/11/120930839_3808850755810230_4116562398089309209_n_3808850749143564.jpg",
		"2021/01/received_919910132097169-1.jpeg",
		"2021/12/fb_img_1638999720998.jpg",
		"2021/12/fb_img_1638999670380.jpg",
		"2021/12/received_486636256069693.jpeg",
		"2020/12/fb_img_1606854248517.jpg",
		"2021/12/fb_img_1638999662460.jpg",
		"2021/12/received_1247529099102682.jpeg",
		"2021/12/fb_img_1638999651176.jpg",
		"2021/12/fb_img_1638999770121.jpg",
		"2021/12/fb_img_1638999713541.jpg",
		"2021/12/fb_img_1638999759356.jpg",
		"2020/12/img_20201130_124251.jpg",
		"2021/01/received_417362836169896-2.jpeg",
		"2021/01/received_417362836169896-1.jpeg",
		"2020/11/117943429_3677031522325488_1195595757246861497_n_3677031515658822.jpg",
		"2022/01/fb_img_1643491143557.jpg",
		"2020/11/107377896_3541552385873403_3508995654889230601_n_3541552379206737.jpg",
		"2020/11/91992143_3293746973987280_1107015794635571200_n_3293746963987281.jpg",
		"2020/11/92811797_3293747323987245_4966350759735066624_n_3293747320653912.jpg",
		"2020/11/86439224_3168690473159598_7892474852802560000_n_3168690459826266.jpg",
		"2020/11/119711635_3751739034854736_6414808547232279525_n_3751739031521403.jpg",
		"2020/11/91992143_3293746973987280_1107015794635571200_n_3293746963987281-1.jpg",
		"2020/11/107377896_3541552385873403_3508995654889230601_n_3541552379206737-1.jpg",
		"2021/12/fb_img_1638999705369.jpg",
		"2021/12/fb_img_1638999675793.jpg",
		"2021/12/received_282449160492869.jpeg",
		"2020/11/122555380_3862532773775361_9071482122570502610_n_3862532767108695.jpg",
		"2020/11/72251110_2877792325582749_947696602720501760_n_2877792322249416.jpg",
		"2020/11/107389542_3541550269206948_8503843214918711721_n_3541550265873615-1.jpg",
		"2020/11/90920038_3271629112865733_6845414091494785024_n_3271629106199067-1.jpg",
		"2020/11/107389542_3541550269206948_8503843214918711721_n_3541550265873615.jpg",
		"2020/11/90976758_3271629406199037_2668037949177724928_n_3271629402865704.jpg",
		"2020/11/90920038_3271629112865733_6845414091494785024_n_3271629106199067.jpg",
		"2020/11/90976758_3271629406199037_2668037949177724928_n_3271629402865704-1.jpg",
		"2021/01/received_2702067280103805-1.jpeg",
		"2021/12/received_2039285369573649.jpeg",
		"2020/11/118248207_3677030942325546_3903700352043892728_n_3677030938992213.jpg",
		"2020/12/img_20201130_124328.jpg",
		"2020/11/107380422_3541552225873419_5044006580496394045_n_3541552209206754-1.jpg",
		"2020/11/107380422_3541552225873419_5044006580496394045_n_3541552209206754.jpg",
		"2021/12/received_922375748410158.jpeg",
		"2021/12/received_922375748410158-1.jpeg",
		"2020/11/91003292_3271629592865685_2510597251403874304_n_3271629582865686.jpg",
		"2020/11/91003292_3271629592865685_2510597251403874304_n_3271629582865686-1.jpg",
		"2021/01/received_881772009311508-2.jpeg",
		"2021/01/received_881772009311508-1.jpeg",
		"2020/11/92280067_3293746707320640_6382713961866854400_n_3293746703987307.jpg",
		"2020/12/img_20201201_1129507e3.jpg",
		"2020/11/118407981_3677031062325534_8760907141473942078_n_3677031052325535.jpg",
		"2020/11/107419557_3541551259206849_639769946390530304_n_3541551252540183.jpg",
		"2021/12/fb_img_1638999834628.jpg",
		"2020/12/img_20201201_1129357e2.jpg",
		"2020/12/img_20201201_1146437e2.jpg",
		"2020/12/img_20201201_1146127e2.jpg",
		"2020/11/107385503_3541551442540164_1660795526530337715_n_3541551429206832.jpg",
		"2020/11/107385503_3541551442540164_1660795526530337715_n_3541551429206832-1.jpg",
		"2020/11/120836021_3808849942476978_7998665458968742705_n_3808849935810312.jpg",
		"2020/11/124802355_3916838191678152_1695834869338527072_n_3916838188344819.jpg",
		"2021/01/received_118180410124423-2.jpeg",
		"2021/01/received_118180410124423-1.jpeg",
		"2021/12/fb_img_1638999828552.jpg",
		"2021/12/received_993766014509245.jpeg",
		"2021/12/received_2128798917275953.jpeg",
		"2021/12/received_2128798917275953-1.jpeg",
		"2020/11/91526096_3271629699532341_5211934086322454528_n_3271629696199008-1.jpg",
		"2020/11/127236494_3958815194147118_665907926562957455_o_3958815190813785.jpg",
		"2020/11/91526096_3271629699532341_5211934086322454528_n_3271629696199008.jpg",
		"2020/12/fb_img_1606854466102.jpg",
		"2020/11/127808284_3958815827480388_3015162811268216893_o_3958815820813722.jpg",
		"2021/12/received_324718292567275.jpeg",
		"2020/11/107393389_3541549692540339_5377242900020109386_n_3541549682540340-1.jpg",
		"2020/11/107393389_3541549692540339_5377242900020109386_n_3541549682540340.jpg",
		"2020/12/img_20201130_124343.jpg",
		"2020/12/img_20201201_112709.jpg",
		"2020/11/109768499_3572331109462197_1444476394630992394_n_3572331096128865.jpg",
		"2021/12/received_1364728447281080.jpeg",
		"2021/12/fb_img_1638999696106.jpg",
		"2020/11/91559624_3271629056199072_972563054615068672_n_3271629049532406.jpg",
		"2020/11/91559624_3271629056199072_972563054615068672_n_3271629049532406-1.jpg",
		"2020/12/img_20201130_124255.jpg",
		"2020/12/img_20201201_112759.jpg",
		"2020/11/100093731_3409407465754563_8099988894948261888_n_3409407462421230.jpg",
		"2020/12/img_20201201_1129437e3.jpg",
		"2020/12/img_20201130_124415.jpg",
		"2022/01/fb_img_1643491129242.jpg",
		"2020/12/fb_img_1606854468847.jpg",
		"2020/11/91652603_3271629506199027_9113610230595321856_n_3271629502865694.jpg",
		"2020/11/91652603_3271629506199027_9113610230595321856_n_3271629502865694-1.jpg",
		"2020/12/img_20201130_124410.jpg",
		"2020/12/img_20201201_1129237e2.jpg",
		"2020/11/92290048_3293747803987197_4941491604989935616_n_3293747797320531.jpg",
		"2021/12/fb_img_1638999665234.jpg",
		"2020/12/img_20201130_124300.jpg",
		"2020/11/107420264_3541552675873374_3278205778645518957_n_3541552672540041.jpg",
		"2020/11/118250338_3677031212325519_8088027149627481037_n_3677031208992186.jpg",
		"2021/12/fb_img_1638999831342.jpg",
		"2020/12/img_20201201_112712.jpg",
		"2020/12/img_20201201_112602.jpg",
		"2021/01/received_175261924381753.jpeg",
		"2021/12/fb_img_1638999653903.jpg",
		"2020/11/107398631_3541550189206956_694040470185611_n_3541550185873623.jpg",
		"2020/11/107398631_3541550189206956_694040470185611_n_3541550185873623-1.jpg",
		"2020/12/img_20201201_113003.jpg",
		"2020/12/img_20201201_112657.jpg",
		"2020/12/img_20201201_1127097e2.jpg",
		"2020/11/118270682_3677031315658842_5698132895612731623_n_3677031308992176.jpg",
		"2020/12/img_20201201_1113127e2.jpg",
		"2020/11/119721689_3751738784854761_4602486840425804805_n_3751738781521428.jpg",
		"2020/11/124552403_3916838271678144_33251244745447704_n_3916838268344811.jpg",
		"2022/01/fb_img_1643491116443.jpg",
		"2020/11/107384434_3541549819206993_5929450205170633049_n_3541549809206994.jpg",
		"2020/11/107384434_3541549819206993_5929450205170633049_n_3541549809206994-1.jpg",
		"2020/11/78158989_2988631001165547_4535002005877293056_n_2988630997832214.jpg",
		"2020/12/img_20201201_1126577e2.jpg",
		"2020/12/img_20201201_1126397e2.jpg",
		"2020/12/img_20201201_112754.jpg",
		"2020/12/img_20201201_111318.jpg",
		"2020/11/84665332_3151324258229553_6550941431349903360_n_3151324248229554.jpg",
		"2020/11/121307484_3828152953880010_7224809832815101769_n_3828152940546678.jpg",
		"2020/11/71578365_2863924260302889_1594697777634344960_n_2863924256969556.jpg",
		"2020/11/122322763_3862532633775375_6330851313080123569_n_3862532627108709.jpg",
		"2020/11/84781345_3151324468229532_4601684856366170112_n_3151324464896199.jpg",
		"2020/11/121256599_3828148920547080_3483671440655959167_n_3828148907213748.jpg",
		"2020/11/86424920_3170438049651507_3135333491948912640_n_3170438042984841.jpg",
		"2020/11/118244300_3677030672325573_6110120812583481968_n_3677030648992242.jpg",
		"2020/11/83602255_3121882857840360_7404697585954324480_n_3121882847840361.jpg",
		"2021/12/fb_img_1638999641405.jpg",
		"2021/12/fb_img_1638999808692.jpg",
		"2021/12/fb_img_1638999778701.jpg",
		"2021/12/fb_img_1638999783969.jpg",
		"2021/12/fb_img_1638999928136.jpg",
		"2021/12/fb_img_1638999659742.jpg",
		"2021/12/fb_img_1638999707824.jpg",
		"2021/12/fb_img_1638999781395.jpg",
		"2020/11/86864379_3170438142984831_2301962686650384384_n_3170438136318165.jpg",
		"2020/12/img_20201201_1126267e2.jpg",
		"2020/11/127690538_3958814397480531_8089449057691095000_o_3958814390813865.jpg",
		"2021/12/fb_img_1638999943124.jpg",
		"2021/12/received_425249389192148.jpeg",
		"2021/10/img_20211012_102321.jpg",
		"2020/11/86870192_3168690126492966_476256674206711808_n_3168690123159633.jpg",
		"2020/12/img_20201201_1125557e2.jpg",
		"2020/11/83747391_3121883571173622_2617361243505164288_n_3121883567840289.jpg",
		"2022/03/received_644273623302832.jpeg",
		"2020/12/img_20201201_112750.jpg",
		"2021/12/fb_img_1638999741946.jpg",
		"2020/11/86190953_3168690349826277_548042895031009280_n_3168690343159611.jpg",
		"2020/12/img_20201201_112955.jpg",
		"2022/01/fb_img_1643491121298.jpg",
		"2020/11/84727561_3151324658229513_7484149412868915200_n_3151324654896180.jpg",
		"2020/12/img_20201201_112923.jpg",
		"2020/11/120799554_3808850329143606_6371890346284841305_n_3808850319143607.jpg",
		"2021/12/fb_img_1638999690192.jpg",
		"2021/12/received_1056237728564422.jpeg",
		"2021/10/img_20211004_172457.jpg",
		"2020/11/79413911_3031108780251102_3176113098322870272_n_3031108770251103.jpg",
		"2021/12/fb_img_1638999772945.jpg",
		"2021/12/received_1284481195335155.jpeg",
		"2021/10/img_20211004_172510.jpg",
		"2020/12/img_20201201_1127507e2.jpg",
		"2020/11/72490136_2877792182249430_4493479666513870848_n_2877792175582764.jpg",
		"2020/11/84939734_3151324888229490_7560942994329698304_n_3151324878229491.jpg",
		"2020/11/109748086_3572330999462208_1051794260167683948_n_3572330996128875.jpg",
		"2022/03/received_648024512949750.jpeg",
		"2021/12/fb_img_1638999762078.jpg",
		"2020/11/91060956_3271629856198992_4775815118447443968_n_3271629846198993.jpg",
		"2020/11/79383248_3033113696717277_5033335473410408448_n_3033113690050611.jpg",
		"2022/03/received_1127633728001294-1.jpeg",
		"2022/03/received_1127633728001294.jpeg",
		"2021/12/fb_img_1638999815797.jpg",
		"2020/11/91516797_3271629202865724_5198670802110644224_n_3271629196199058.jpg",
		"2020/12/img_20201201_1126347e2.jpg",
		"2022/01/fb_img_1643491151288.jpg",
		"2021/12/fb_img_1638999698533.jpg",
		"2021/12/wp-1638992944191.jpg",
		"2021/10/img_20211012_102510.jpg",
		"2021/12/fb_img_1638999767330.jpg",
		"2021/12/fb_img_1638999789617.jpg",
		"2020/11/86292285_3168690219826290_5399937234503729152_n_3168690216492957.jpg",
		"2020/11/124581294_3916838098344828_1674256644009243481_n_3916838088344829.jpg",
		"2020/11/83687604_3121883037840342_3574226630740017152_n_3121883034507009.jpg",
		"2020/11/97041962_3392105480818095_4882230389269069824_n_3392105470818096.jpg",
		"2020/11/77355961_2988630684498912_4235258768025190400_n_2988630681165579.jpg",
		"2022/03/received_480440717073617-1.jpeg",
		"2022/03/received_393406732119570-1.jpeg",
		"2022/03/received_480440717073617.jpeg",
		"2022/03/received_393406732119570.jpeg",
		"2021/01/img_20210123_133636-1.jpg",
		"2021/01/img_20210123_133636-2.jpg",
		"2021/12/fb_img_1638999795150.jpg",
		"2020/11/78589814_2988630471165600_1370118516161642496_n_2988630467832267.jpg",
		"2020/11/91680939_3271629279532383_9165239697453088768_n_3271629276199050.jpg",
		"2022/03/received_3007866409524613.jpeg",
		"2021/01/img_20210123_133648-2.jpg",
		"2021/01/img_20210123_133648-1.jpg",
		"2020/11/79799090_3031109006917746_4169273420225183744_n_3031109000251080.jpg",
		"2020/11/90712207_3266174423411202_1399207951700328448_n_3266174420077869.jpg",
		"2021/10/img_20211012_102239.jpg",
		"2020/12/img_20201201_1130137e4.jpg",
		"2022/01/fb_img_1643491162166.jpg",
		"2022/01/fb_img_1643491190406.jpg",
		"2022/01/fb_img_1643491190406-1.jpg",
		"2021/12/fb_img_1638999803759.jpg",
		"2020/11/83629971_3121882751173704_2157848958863409152_n_3121882747840371.jpg",
		"2020/11/128862461_2968327950055485_1195997497969121800_n.jpg",
		"2020/11/90869044_3266174330077878_3967213763207102464_n_3266174323411212.jpg",
		"2021/10/img_20211012_102336.jpg",
		"2021/10/img_20211012_102212.jpg",
		"2020/11/cropped-128862461_2968327950055485_1195997497969121800_n.jpg",
		"2020/11/72153080_2877792465582735_6860897083524644864_n_2877792462249402.jpg",
		"2020/11/121307833_3828147767213862_6211134408623358865_n_3828147763880529.jpg",
		"2021/01/img_20210123_133643-1.jpg",
		"2020/11/121455609_3828152573880048_5284772665433377029_n_3828152557213383.jpg",
		"2020/11/120820178_3808850475810258_495045380664558625_n_3808850472476925.jpg",
		"2021/12/wp-1638992504253.jpg",
		"2021/12/fb_img_1638997205523.jpg",
		"2021/12/fb_img_1638997205523-1.jpg",
		"2020/11/72225789_2877792582249390_7439060433878646784_n_2877792575582724.jpg",
		"2020/11/119648752_3751738268188146_5154560661112466403_n_3751738261521480.jpg",
		"2022/03/received_504025014646796.jpeg",
		"2022/03/received_691641542254452.jpeg",
		"2020/11/109748084_3572329566129018_970517326449742046_n_3572329546129020.jpg",
		"2020/11/120811311_3808850052476967_6105703218589912300_n_3808850045810301.jpg",
		"2020/11/82788903_3121882947840351_974356267885658112_n_3121882934507019.jpg",
		"2022/01/fb_img_1643491186090-1.jpg",
		"2022/01/fb_img_1643491186090.jpg",
		"2022/01/fb_img_1643491157263.jpg",
		"2022/01/fb_img_1643491186090-2.jpg",
		"2022/03/received_533446171430428.jpeg",
		"2022/03/received_533446171430428-1.jpeg",
		"2021/12/fb_img_1638999923326.jpg",
		"2021/12/wp-1638992394638.jpg",
		"2021/12/wp-1638992394638-1.jpg",
		"2020/11/119788556_3751738448188128_1004699220668173094_n_3751738438188129.jpg",
		"2021/12/img_20211208_150850.jpg",
		"2020/11/72705449_2877792942249354_7906708962832023552_n_2877792938916021.jpg",
		"2021/12/img_20211208_150936.jpg",
		"2021/12/wp-1638992415414.jpg",
		"2020/11/72859692_2877792995582682_1060730027303239680_n_2877792992249349.jpg",
		"2021/12/img_20211208_150733.jpg",
		"2021/12/wp-1638992489191.jpg",
		"2021/12/fb_img_1638999811340.jpg",
		"2020/11/97133973_3392105574151419_6427221818897072128_n_3392105570818086.jpg",
		"2022/03/received_354520463232131.jpeg",
		"2021/12/img_20211208_150644.jpg",
		"2020/11/121425469_3828148070547165_1418537993776879160_n_3828148067213832.jpg",
		"2021/12/fb_img_1638999801120.jpg",
		"2020/11/119621984_3751738538188119_2523727222024690188_n_3751738531521453.jpg",
		"2020/11/122407746_3862532537108718_4056056392255780731_n_3862532533775385.jpg",
		"2021/12/img_20211208_150742.jpg",
		"2021/12/img_20211208_151003.jpg",
		"2020/11/119731553_3751738388188134_2916840517369677326_n_3751738374854802.jpg",
		"2020/11/119654715_3751738178188155_3698989115067473153_n_3751738174854822.jpg",
		"2020/11/91800691_3271629946198983_3715851051316805632_n_3271629939532317.jpg",
		"2021/12/fb_img_1638999911005.jpg",
		"2021/12/img_20211208_150545.jpg",
		"2021/12/img_20211208_150545-1.jpg",
		"2020/11/97025121_3392105364151440_7492515897492373504_n_3392105357484774.jpg",
		"2020/11/98071111_3392106087484701_3012983196674424832_n_3392106084151368.jpg",
		"2020/11/109737723_3572330522795589_2275865522415132357_n_3572330519462256.jpg",
		"2020/11/96899790_3392106017484708_5119506841084100608_n_3392106014151375.jpg",
		"2020/11/109710251_3572329712795670_2723940408794862588_n_3572329706129004.jpg",
		"2020/11/109712629_3572330789462229_8631995396403943045_n_3572330782795563.jpg",
		"2020/11/97380361_3392105707484739_8184603822308458496_n_3392105704151406.jpg",
		"2020/11/97442430_3392105634151413_1239200779038883840_n_3392105627484747.jpg",
		"2022/03/received_1830984630426024.jpeg",
		"2022/03/received_1830984630426024-1.jpeg",
		"2020/11/92331922_3293746820653962_5309515507064373248_n_3293746813987296.jpg",
		"2020/11/103748061_3464095953619047_3744210440586871923_n_3464095943619048.jpg",
		"2020/11/109738376_3572330069462301_2949524164538124006_n_3572330059462302.jpg",
		"2020/11/78602833_2988628947832419_8931252593586339840_n_2988628944499086.jpg",
		"2020/12/airbrush_20201201113729.jpg",
		"2020/12/airbrush_20201201113718.jpg",
		"2021/12/fb_img_1638997202093.jpg",
		"2021/10/img_20211012_102302.jpg",
		"2020/11/124624433_3916837895011515_1996660925454903786_n_3916837885011516.jpg",
		"2020/11/72129986_2877792402249408_1226437879991894016_n_2877792398916075.jpg"
	];

	// Iterate the pics list and populate the website
	for (let index = 0; index < listImages.length; ++index) {
		let builtTag = `<img onclick="magnify($(this).attr('src'))" src="./media/pics/${listImages[index]}"/>`
		$("#photos").append(builtTag)
	}

}
