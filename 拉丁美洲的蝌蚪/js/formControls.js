// Settings controls

(function($){
	
	$.fn.initChat = function() {
		var input = $(this);
		var chatText = $("#chatText");
		var hidden = true;
		var messageHistory = [];
		var messagePointer = -1;

		// var closechat = function() {
		// 	hidden = true;
		// 	input.css("opacity","0");
		// 	messagePointer = messageHistory.length;
		// 	input.val('');
		// 	chatText.text('')
		// }

		// var updateDimensions = function(){
		// 	chatText.text(input.val());
		// 	var width = chatText.width() + 30;
		// 	input.css({
		// 		width: width,
		// 		marginLeft: (width/2)*-1
		// 	});
		// };

		// input.blur(function(e) {
		// 	setTimeout(function(){input.focus()}, 0.1);
		// });
		// input.keydown(function(e){
		// 	if(input.val().length > 0) {
		// 		//set timeout because event occurs before text is entered
		// 		setTimeout(updateDimensions,0.1);
		// 		input.css("opacity","1");		
		// 	} else {
		// 		closechat();
		// 	}
			
		// 	if(!hidden) {
		
		// 		e.stopPropagation();
		// 		if(messageHistory.length > 0) {
		// 			if(e.keyCode == keys.up)
		// 			{
		// 				if(messagePointer > 0)
		// 				{
		// 					messagePointer--;
		// 					input.val(messageHistory[messagePointer]);
		// 				}
		// 			}
		// 			else if(e.keyCode == keys.down)
		// 			{
		// 				if(messagePointer < messageHistory.length-1)
		// 				{
		// 					messagePointer++;
		// 					input.val(messageHistory[messagePointer]);
		// 				}
		// 				else 
		// 				{
		// 					closechat();
		// 					return;
		// 				}
		// 			}
		// 		}
		// 	}
		// });
		// input.keyup(function(e) {

		// 	var k = e.keyCode;
		// 	if(input.val().length >= 45)
		// 	{
		// 		input.val(input.val().substr(0,45));
		// 	}

		// 	if(input.val().length > 0) {
		// 		updateDimensions();
		// 		input.css("opacity","1");
		// 		hidden = false;
		// 	} else {
		// 		closechat();
		// 	}
		// 	if(!hidden) {
		// 		if(k == keys.esc || k == keys.enter || (k == keys.space && input.val().length > 35)) {
		// 			if(k != keys.esc && input.val().length > 0) {
		// 			    	messageHistory.push(input.val());
		// 	    			messagePointer = messageHistory.length;
		// 				app.sendMessage(input.val());
		// 			}
		// 			closechat();
		// 		}
				
		// 		e.stopPropagation();

		// 	}
			
		// });
		
		// input.focus();
		$("#dazibtn").click(function(){
			// input.focus();
			// $("#dazi").focus();
			var str = $("#dazi").val();
			if(str.length!=0){
				app.sendMessage(str);
			}
			
			$("#dazi").val("");
		});
		
		
		// document.getElementById("dazi").onkeydown = function (ev){
  //               var oEvent = ev || event;
                
                
  //               //js阻止事件冒泡
  //               oEvent.cancelBubble = true;
  //               oEvent.stopPropagation();

  //               //js阻止链接默认行为，没有停止冒泡
  //               //oEvent.preventDefault(); 
  //               //return false;
  //           }

		// $("#dazi").focus(function(e){
		// 	e.preventDefault()
		// });
		// $("#dazi").blur(function(e){
		// 	document.addEventListener('keydown',    app.keydown, false);
		// 	document.addEventListener('keyup',    app.keyup, false);
		// });
		
		// $("#dazi").keyup(function(e){
		// 	document.removeEventListener('keydown',    app.keydown);
		// 	document.removeEventListener('keyup',    app.keyup);
		// });

	}
	
	$(function() {
		//$('#chat').initChat();
	});
})(jQuery);
