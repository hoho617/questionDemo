var hBefore =0;
var hAfter = 0;
$('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight/14) + 'rem;overflow-y:hidden;');
  hAfter = parseInt($("#titleSearch")[0].scrollHeight);
  $(".putQuestion_tips").css("top",hAfter);
}).on('input', function () {
  this.style.height = 'auto';
	this.style.height = (this.scrollHeight/14) + 'rem';
 	hBefore = parseInt($("#titleSearch")[0].scrollHeight);
 	if(hBefore > hAfter){
 		$(".putQuestion_tips").css("top",[(hBefore+10)/14] +'rem');
 		$(".put_area").addClass("pdb");
 	}else {
 		$(".put_area").removeClass("pdb");
 		$(".putQuestion_tips").css("top",(hAfter/14)+"rem");
 	}
 	
 	
});

function mobileCategory(){
	//手机端判断各个平台浏览器及操作系统平台


  if(/android/i.test(navigator.userAgent)){

      return 0;//这是Android平台下浏览器
  }

  if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){

     return 1;//这是iOS平台下浏览器

  }

}
