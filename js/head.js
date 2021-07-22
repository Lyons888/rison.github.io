$(function(){
	$(document).scroll(function(){
		var a=$(document).scrollTop();
		if(a>4){
			$(".nav li a").css({"font-size":"20px","margin-top":"-16px"});
			$(".head").css({height:'96px',boxShadow:'0 3px 20px rgba(0,0,0,0.08)',background:'rgba(255,255,255,1)'});
			$(".head img").css({height:"70px",'width':'70px'});
			$(".logo").css({paddingTop:"10px"},500);
			$('.nav li a').css('color','#000');		
		}
		else{
			$(".nav li a").css({"font-size":"26px","margin-top":"0"});
			$(".head").css({height:'138px',boxShadow:'0 0 0 #fff',backgroundColor:'rgba(255,255,255,0)'});
			$(".head img").css({height:"110px",'width':'110px'});
			$(".logo").css({paddingTop:"14px"});	
			$('.nav li a').css('color','#fff');				

		}
	})
})


$(function(){
	$(document).scroll(function(){
		var a=$(document).scrollTop();
		if(a>4){
			$(".nav1 li a").css({"font-size":"20px","margin-top":"-16px"});
			$(".head1").css({height:'96px',boxShadow:'0 3px 20px rgba(0,0,0,0.08)',background:'rgba(255,255,255,1)'});
			$(".head1 img").css({height:"70px",'width':'70px'});
			$(".logo1").css({paddingTop:"10px"},500);
			$('.nav1 li a').css('color','#000');		
		}
		else{
			$(".nav1 li a").css({"font-size":"26px","margin-top":"0"});
			$(".head1").css({height:'138px',boxShadow:'0 0 0 #fff',backgroundColor:'rgba(255,255,255,0)'});
			$(".head1 img").css({height:"110px",'width':'110px'});
			$(".logo1").css({paddingTop:"14px"});	
			$('.nav1 li a').css('color','#000');				

		}
	})
})