$(function(){
	$(".header").load("header.html");
	$(".footer").load("footer.html");
	
	(function(){
		var top_one=$("#top_wrap .top_one")
		var top_two=$("#top_wrap .top_two")
		
		setTimeout(function(){
			top_one.slideDown(1000)
		},1000)
		setTimeout(function(){
			top_one.slideUp(1000)
		},6000)
		setTimeout(function(){
			top_two.slideDown(100)
		},7100)
	})();
	
	
	
	(function(){
		var oImg=$(".banner_pic img")
		var oImg2=$("._banner_spic img")
		var nowIndex=0;
		var t=setInterval(zd,5000);
		function zd(){
			oImg.eq(nowIndex).fadeIn().siblings().fadeOut();
			oImg2.removeClass("col").eq(nowIndex).addClass("col");
			nowIndex++;
			nowIndex=nowIndex<oImg.length?nowIndex:0;
		}
		oImg2.hover(function(){
			clearInterval(t)
			nowIndex=oImg2.index($(this));
			oImg.stop();
			oImg.eq(nowIndex).fadeIn(300).siblings().fadeOut(0);
			oImg2.removeClass("col").eq(nowIndex).addClass("col")
		},function(){
			t=setInterval(zd,5000);
		})
	})();
		
		
				
//		提示滚动
		var oSrcoll=$(".scroll_con");
		var oleft = null
		var olef = null
		var speed=1;
		moveul()
		function moveul(){
			var liOne=$(".scroll_con li").eq(0);
			var w=parseInt(liOne.width())+65;
			oleft=$(".scroll_con").css("left");
			olef=parseInt(oleft);
			oSrcoll.animate({left:(olef-speed)+"px"},100,function(){
				oleft=$(".scroll_con").css("left");
				olef=parseInt(oleft);
				if(olef%w==0){
					$(".scroll_con li:lt(1)").appendTo(oSrcoll);
					$(".scroll_con").css("left","0px")
				}
				moveul()
			})
		}
	
	(function(){
		var Tit=$(".cut_tit")
		var oLi=$(".cut_tit li")
		var oWrap=$(".cut_wrap")
		var conPic=$(".cut_con_one")
		nowIndex=0;
		var t=setInterval(zd,5000);
		function zd(){
			oLi.eq(nowIndex).animate({"display":" none"},5000,"backIn")
		}
	})();
		
		
			
		
		$(window).scroll(function(){
			var header=$(".btn_bar_wrap")
			var oLi=header.find("li")
			var oA=oLi.find("a")
			if($(window).scrollTop()>=194){
				header.css({"position":"fixed","top":"0","background":"#000","z-index":"999"})
				oLi.addClass("top")
				oA.css("color","#fff")
			}else{
				header.css({"position":"relative","top":"0","background":"#fff","z-index":"-1"})
				oLi.removeClass("top");
				oA.css("color","#666")
			}
		});
		
		(function(){
			var oWrap=$(".cut_wrap");
			var oLi=oWrap.find(".cut_tit li");
			var move=$(".conPic_wrap");
			var nowIndex=0;
			var w=$(".conPic").width()
			var t=setInterval(zd,5000);
			function zd(){
				if(nowIndex>5){
					nowIndex=0
				}else{
					nowIndex++;
				}
				move.animate({"left":"-"+w*nowIndex+"px"},300,function(){
					oLi.removeClass("black").eq(nowIndex).addClass("black");
				})
			}
			oLi.each(function(i,elem){
				$(this).hover(function(){
					clearInterval(t)
					oLi.removeClass("black").eq(i).addClass("black");
					nowIndex=i;
					move.animate({"left":"-"+w*nowIndex+"px"},300);
				},function(){
					t=setInterval(zd,5000);
				});
			});
		})();
		
		var bycWrap=(".content_byc")
		var byc=$(".pics")
		
		byc.hover(function(){
			nowIndex=byc.index($(this))
			byc.removeClass("big").eq(nowIndex).addClass("big")
			
		})
//		byc.each(function(index,element){
//			var $this=$(this);
//			$this.hover(function(){
//				console.log(index)
//				byc.removeClass("big").eq(index).addClass("big")
//				$this.animate({"width":"780px"}).siblings().animate({"width":"140px"},500);
//				$this.find(".bigpic").eq(index).animate({"width":"0","display":"block","height":"465px"}).siblings().animate({"width":"-780px","display":"none","height":"465px"},500)
//				$this.find(".spic").eq(index).animate({"width":"-140px","display":"none"}).siblings().animate({"width":"0","display":"block"},300)
//				$this.find(".content_byc_box").eq(index).animate({"width":"378px","height":"140px","padding-top":"20px"}).siblings().animate({"width":"378px","height":"160px","padding-top":"20px"},500)
//			})
//			
//		})
		
})
