init = function(){
   setTimeout(function(){
	   allAnimations();
   }, 400);
}

function allAnimations() {

    var animCount = 0;
    var animTimer = setInterval(function(){ theTimer() }, 50),
	
		bg = document.getElementById('bg'),
		copy1 = document.getElementById('copy1'),
		copy2a = document.getElementById('copy2a'),
		copy2b = document.getElementById('copy2b'),
		copy3a = document.getElementById('copy3a'),
		copy3b = document.getElementById('copy3b'),
		copy3c = document.getElementById('copy3c'),
		copy4a = document.getElementById('copy4a'),
		copy4b = document.getElementById('copy4b'),
		copy5a = document.getElementById('copy5a'),
		copy5b = document.getElementById('copy5b'),
		img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),

		logo = document.getElementById('logo'),
		lockup = document.getElementById('lockup'),
		
		img2Holder = document.getElementById('img2Holder'),

		ctaHolder = document.getElementById('ctaHolder'),
		cta = document.getElementById('cta'),
		arrow = document.getElementById('arrow');
		
		hoverActive = false;
	
	
function hoverStuff(){
	
		btn.addEventListener("mouseover", hoverState);
		btn.addEventListener("mouseout", hoverState);

		function hoverState(){
			console.log ('#roll');
			if(hoverActive == false){
				arrow.setAttribute('class', 'arrowAnim');		
				hoverActive = true;
			} else{
				arrow.setAttribute('class', '');			
				hoverActive = false;
			}
		}
	}
	
	//  timings

	function theTimer() {
		if (animCount == 5) { 
			img1.setAttribute('class', 'transition-7 img1Scale');
			img2.setAttribute('class', 'transition-7 img2Scale');
		} else if(animCount == 55){
			//img2.setAttribute('class', 'moveTop');
			img2Holder.setAttribute('class', 'img2Top transition-1 holderUp');
			img1Holder.setAttribute('class', 'transition-1 img1Height');
			//img2.setAttribute('class', ' transition-1');
		} else if (animCount == 58) {
//			img2Holder.setAttribute('class', 'transition-5 holderUp');
			
			copy1.setAttribute('class', 'transition-2 fade-in copyUp');
		} else if (animCount == 90) {
			copy1.setAttribute('class', 'transition-2 copyUp copyOut');
		} else if (animCount == 92) {
			copy2a.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 93) {
			copy2b.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 150) {
			copy2a.setAttribute('class', 'transition-2 copyUp fade-out');
			copy2b.setAttribute('class', 'transition-2 copyUp fade-out');
		} else if (animCount == 152) {
			copy3a.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 153) {
			copy3b.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 154) {
			copy3c.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 204) {
			copy3a.setAttribute('class', 'transition-2 copyUp fade-out');
			copy3b.setAttribute('class', 'transition-2 copyUp fade-out');
			copy3c.setAttribute('class', 'transition-2 copyUp fade-out');	
		} else if (animCount == 206) {
			copy4a.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 207) {
			copy4b.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 254) {
			copy4a.setAttribute('class', 'transition-2 copyUp fade-out');
			copy4b.setAttribute('class', 'transition-2 copyUp fade-out');
		} else if (animCount == 256) {
			copy5a.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 257) {
			copy5b.setAttribute('class', 'transition-2 fade-in copyUp');	
		} else if (animCount == 297) {
			ctaHolder.setAttribute('class', 'transition-2 fade-in copyUp');
		} else if (animCount == 300) {
			hoverStuff();
			clearInterval(animTimer);
		}
		animCount++;
	}
}