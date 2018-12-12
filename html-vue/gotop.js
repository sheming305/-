window.onload = function(){
			var gobtn = document.getElementById("btn")
			var timer = null
			var pageheige = document.documentElement.clientHeight;
			console.log(pageheige)
			window.onscroll = function(){
				// alert("top")
				var back = document.documentElement.scrollTop;
				console.log(back)
				if(back >= pageheige){
					gobtn.style.display = "block"
				}else{ 
					gobtn.style.display = "none"
				}

			}
			gobtn.onclick = function(){
				timer = setInterval(function(){
					var back = document.documentElement.scrollTop
					var speed = back/5
					document.documentElement.scrollTop = back - speed
					if(back == 0){
					clearInterval(timer)
					}
				},30)
				
			}
			
		}