$("ul").on("click","span",function (event){
	$(this).parent().fadeOut("fast",function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("ul").on("click","li",function(){
	$(this).toggleClass("strike")
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){

		var task=$(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span>"+task+"</li>");
	}
});
$("h1 span").on("click",function(){
	$("input").fadeToggle();
})