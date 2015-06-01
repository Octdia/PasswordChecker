<!--
var PassCheck ={};
	
	
(function(){

	PassCheck.Password = function(){
		var pass = document.Checker_form.textbox.value;
		var length = pass.length;
		
		if(length ==0){
			document.getElementById("result").innerHTML = "パスワードを入力してください。";
	
		}else if(length <8){
			document.getElementById("result").innerHTML = "8字以上入力してください。";
		}else{
		
			var point = 0;
			var Lower =false;
			var Upper = false;
			var Number = false;
			var Symbol = false;
			var Alpha = false;
			
			Lower = pass.match(/[a-z]/);//小文字
			Upper = pass.match(/[A-Z]/);//大文字
			Number = pass.match(/[0-9]/);//数字
			Symbol = pass.match(/[!-\/:-@\[-`{-~]/);//記号
			Alpha = pass.match(/[a-z][A-Z]/);//英字
			
			if(Lower !=null){
				Lower = true;
			}else{
				Lower = false;
			}
			
			if(Upper !=null){
				Upper = true;
			}else{
				Upper = false;
			}
			
			if(Number !=null){
				Number = true;
			}else{
				Number = false;
			}
			
			if(Symbol !=null){
				Symbol = true;
			}else{
				Symbol = false;
			}
			
			if(Alpha != null){
				Alpha = true;
			}else{
				Alpha = false;
			}
			
			
			
			
			if(Lower && Upper){
				point += 20;
			}
			
			if(!Alpha && Number && Symbol){
				point += 30;
			}
			
			if(Alpha&& Number && !Symbol){
				point += 30;
			}
			
			if(Alpha && Number && Symbol){
				point += 40;
			}
			
			
			
			if(length<8){
				point = 0;
			}else{
				point += length
			}
			
			var flag = false;
			
			for(var i=0;i<(length-2);i++){
				var str1 = pass.charCodeAt(i);
				var str2 = pass.charCodeAt(i+1);
				var str3 = pass.charCodeAt(i+2);
				if(str1==(str2-1)){
					if(str2==(str3-1)){
						flag =true;
						point = 0;
					}
				}
			}
			
			
			console.log(point);
		
			
			
			if(point <=40){
				document.getElementById("result").innerHTML = "つよさ：弱い";
				document.getElementById("error").innerHTML="";
				if(flag){
					document.getElementById("error").innerHTML = "3つ以上連続する文字列があります。";
				}
			}else if(point <=65){
				document.getElementById("result").innerHTML = "つよさ：普通";
				document.getElementById("error").innerHTML=""
			}else{
				document.getElementById("result").innerHTML = "つよさ：強い";
				document.getElementById("error").innerHTML="";
			}
		}
	}

	

	document.addEventListener("DOMContentLoaded", function(){
			PassCheck.Password();
	}, false);
	
})();
	
	



//-->
