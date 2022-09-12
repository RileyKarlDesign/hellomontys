
console.log('heelop')
const foot = document.querySelector('.footer')
const nav = document.querySelector('.nav-wrapper')




enterView({
	selector: '.footer',
	enter: function(el) {
		 nav.classList.add('entered');
   
	},

  exit: function(el) {
		nav.classList.remove('entered');
	},
});
//  cart--------------------------------------------




