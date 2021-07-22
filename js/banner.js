$(function(){
		var index=0;
		var timer;
		function move(obj,attr){
			index=index+attr;
			if(index>obj.length-1){
				index=0;
			}
			if(index<0){
				index=obj.length-1;
			}
			obj.eq(index).animate({'opacity':1},500);
			obj.not(obj.eq(index)).animate({'opacity':0},500);	
		};
		function sec(){
				// clearInterval(timer);
				timer=setInterval(function(){
				move($('.banner li'),1)
				},2000)};
		
		sec();

		
});