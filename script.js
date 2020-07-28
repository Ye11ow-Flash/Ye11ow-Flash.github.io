
let theme = localStorage.getItem('theme');
if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		var var1 = document.getElementById('hero-area');
		var var2 = document.getElementById('about');
		var var3 = document.getElementById('services');
		var var4 = document.getElementById('resume');
		var var5 = document.getElementById('position');
		var var6 = document.getElementById('publications');
		var var7 = document.getElementById('portfolios');
		var var8 = document.getElementById('courses');
		var var9 = document.getElementById('achievements');
		var var10 = document.getElementById('sketch');
		var var11 = document.getElementById('contact');
		var var12 = document.getElementById('foot');

		var bg1 = "white";
		var bg2 = "#F0F0F0";
		var foot = "#1C1C20";
		var2.style.background = bg1;
		var3.style.background = bg2;
		var4.style.background = bg1;
		var5.style.background = bg2;
		var6.style.background = bg1;
		var7.style.background = bg2;
		var8.style.background = bg1;
		var9.style.background = bg2;
		var11.style.background = bg2;
		var12.style.background = foot;

		var var13 = document.getElementById('filter1');
		var var14 = document.getElementById('filter2');
		var var15 = document.getElementById('filter3');
		var var16 = document.getElementById('filter4');
		var var17 = document.getElementById('filter5');
		var var18 = document.getElementById('filter0');

		var bg_btn = "#00b4d9";
		var13.style.background = bg_btn;
		var14.style.background = bg_btn;
		var15.style.background = bg_btn;
		var16.style.background = bg_btn;
		var17.style.background = bg_btn;
		var18.style.background = bg_btn;
		
		var var19 = document.getElementsByClassName('portfolio_style');
		for(var i = 0; i < var19.length; i++){
			var19[i].style.borderColor = bg_btn;
		}

		// var text = "white";
		var var20 = document.getElementsByClassName('text');
		var20[0].style.color = "#666";
		var20[1].style.color = "#666";
		var20[2].style.color = "#666";
		var20[3].style.color = "#007bff";
		var20[4].style.color = "#007bff";
		var20[5].style.color = "#007bff";
		var20[6].style.color = "#007bff";
		var20[7].style.color = "#666";
		var20[8].style.color = "#666";
		var20[9].style.color = "inherit";
		var20[10].style.color = "inherit";
		var20[11].style.color = "#666";
		var20[12].style.color = "inherit";

	}

	// if(mode == 'purple'){
	// 	var var1 = document.getElementById('hero-area');
	// 	var var2 = document.getElementById('about');
	// 	var var3 = document.getElementById('services');
	// 	var var4 = document.getElementById('resume');
	// 	var var5 = document.getElementById('position');
	// 	var var6 = document.getElementById('publications');
	// 	var var7 = document.getElementById('portfolios');
	// 	var var8 = document.getElementById('courses');
	// 	var var9 = document.getElementById('achievements');
	// 	var var10 = document.getElementById('sketch');
	// 	var var11 = document.getElementById('contact');
	// 	var var12 = document.getElementById('foot');

	// 	var bg1 = "#46344E";
	// 	var bg2 = "#9774a3";
	// 	var foot = "#1e2c22";
	// 	var2.style.background = bg1;
	// 	var3.style.background = bg2;
	// 	var4.style.background = bg1;
	// 	var5.style.background = bg2;
	// 	var6.style.background = bg1;
	// 	var7.style.background = bg2;
	// 	var8.style.background = bg1;
	// 	var9.style.background = bg2;
	// 	var11.style.background = bg2;
	// 	var12.style.background = foot;

	// 	var var13 = document.getElementById('filter1');
	// 	var var14 = document.getElementById('filter2');
	// 	var var15 = document.getElementById('filter3');
	// 	var var16 = document.getElementById('filter4');
	// 	var var17 = document.getElementById('filter5');
	// 	var var18 = document.getElementById('filter0');

	// 	var bg_btn = "black";
	// 	var13.style.background = bg_btn;
	// 	var14.style.background = bg_btn;
	// 	var15.style.background = bg_btn;
	// 	var16.style.background = bg_btn;
	// 	var17.style.background = bg_btn;
	// 	var18.style.background = bg_btn;
		
	// 	var var19 = document.getElementsByClassName('portfolio_style');
	// 	for(var i = 0; i < var19.length; i++){
	// 		var19[i].style.borderColor = bg_btn;
	// 	}

	// 	var text = "white";
	// 	var var20 = document.getElementsByClassName('text');
	// 	for(var i = 0; i < var20.length; i++){
	// 		var20[i].style.color = text;
	// 	}
	// }

	if(mode == 'blue'){
		var var1 = document.getElementById('hero-area');
		var var2 = document.getElementById('about');
		var var3 = document.getElementById('services');
		var var4 = document.getElementById('resume');
		var var5 = document.getElementById('position');
		var var6 = document.getElementById('publications');
		var var7 = document.getElementById('portfolios');
		var var8 = document.getElementById('courses');
		var var9 = document.getElementById('achievements');
		var var10 = document.getElementById('sketch');
		var var11 = document.getElementById('contact');
		var var12 = document.getElementById('foot');

		var bg1 = "powderblue";
		var bg2 = "rgb(104, 176, 185)";
		var foot = "#164D56";
		var2.style.background = bg1;
		var3.style.background = bg2;
		var4.style.background = bg1;
		var5.style.background = bg2;
		var6.style.background = bg1;
		var7.style.background = bg2;
		var8.style.background = bg1;
		var9.style.background = bg2;
		var11.style.background = bg2;
		var12.style.background = foot;

		var var13 = document.getElementById('filter1');
		var var14 = document.getElementById('filter2');
		var var15 = document.getElementById('filter3');
		var var16 = document.getElementById('filter4');
		var var17 = document.getElementById('filter5');
		var var18 = document.getElementById('filter0');

		var bg_btn = "black";
		var13.style.background = bg_btn;
		var14.style.background = bg_btn;
		var15.style.background = bg_btn;
		var16.style.background = bg_btn;
		var17.style.background = bg_btn;
		var18.style.background = bg_btn;
		
		var var19 = document.getElementsByClassName('portfolio_style');
		for(var i = 0; i < var19.length; i++){
			var19[i].style.borderColor = bg_btn;
		}

		var text = "black";
		var var20 = document.getElementsByClassName('text');
		for(var i = 0; i < var20.length; i++){
			var20[i].style.color = text;
		}
	}

	if(mode == 'green'){
		var var1 = document.getElementById('hero-area');
		var var2 = document.getElementById('about');
		var var3 = document.getElementById('services');
		var var4 = document.getElementById('resume');
		var var5 = document.getElementById('position');
		var var6 = document.getElementById('publications');
		var var7 = document.getElementById('portfolios');
		var var8 = document.getElementById('courses');
		var var9 = document.getElementById('achievements');
		var var10 = document.getElementById('sketch');
		var var11 = document.getElementById('contact');
		var var12 = document.getElementById('foot');

		var bg1 = "rgb(81, 90, 72, 0.8)";
		var bg2 = "#606B56";
		var foot = "#1e2c22";
		var2.style.background = bg1;
		var3.style.background = bg2;
		var4.style.background = bg1;
		var5.style.background = bg2;
		var6.style.background = bg1;
		var7.style.background = bg2;
		var8.style.background = bg1;
		var9.style.background = bg2;
		var11.style.background = bg2;
		var12.style.background = foot;

		var var13 = document.getElementById('filter1');
		var var14 = document.getElementById('filter2');
		var var15 = document.getElementById('filter3');
		var var16 = document.getElementById('filter4');
		var var17 = document.getElementById('filter5');
		var var18 = document.getElementById('filter0');

		var bg_btn = "black";
		var13.style.background = bg_btn;
		var14.style.background = bg_btn;
		var15.style.background = bg_btn;
		var16.style.background = bg_btn;
		var17.style.background = bg_btn;
		var18.style.background = bg_btn;
		
		var var19 = document.getElementsByClassName('portfolio_style');
		for(var i = 0; i < var19.length; i++){
			var19[i].style.borderColor = bg_btn;
		}

		var text = "white";
		var var20 = document.getElementsByClassName('text');
		for(var i = 0; i < var20.length; i++){
			var20[i].style.color = text;
		}

		// var var21 = document.getElementsByClassName('proj_grouping_btn');
		// var btn_grad = "linear-gradient(90deg, #606B01, #8D846C) !important";
		// for(var i = 0; i < var21.length; i++){
		// 	var21[i].style.background = btn_grad;
		// }

	}

	if(mode == 'purple'){
		var var1 = document.getElementById('hero-area');
		var var2 = document.getElementById('about');
		var var3 = document.getElementById('services');
		var var4 = document.getElementById('resume');
		var var5 = document.getElementById('position');
		var var6 = document.getElementById('publications');
		var var7 = document.getElementById('portfolios');
		var var8 = document.getElementById('courses');
		var var9 = document.getElementById('achievements');
		var var10 = document.getElementById('sketch');
		var var11 = document.getElementById('contact');
		var var12 = document.getElementById('foot');

		var bg1 = "#46344E";
		var bg2 = "#9774a3";
		var foot = "#1e2c22";
		var2.style.background = bg1;
		var3.style.background = bg2;
		var4.style.background = bg1;
		var5.style.background = bg2;
		var6.style.background = bg1;
		var7.style.background = bg2;
		var8.style.background = bg1;
		var9.style.background = bg2;
		var11.style.background = bg2;
		var12.style.background = foot;

		var var13 = document.getElementById('filter1');
		var var14 = document.getElementById('filter2');
		var var15 = document.getElementById('filter3');
		var var16 = document.getElementById('filter4');
		var var17 = document.getElementById('filter5');
		var var18 = document.getElementById('filter0');

		var bg_btn = "black";
		var13.style.background = bg_btn;
		var14.style.background = bg_btn;
		var15.style.background = bg_btn;
		var16.style.background = bg_btn;
		var17.style.background = bg_btn;
		var18.style.background = bg_btn;
		
		var var19 = document.getElementsByClassName('portfolio_style');
		for(var i = 0; i < var19.length; i++){
			var19[i].style.borderColor = bg_btn;
		}

		var text = "white";
		var var20 = document.getElementsByClassName('text');
		for(var i = 0; i < var20.length; i++){
			var20[i].style.color = text;
		}

	}

	localStorage.setItem('theme', mode);
}