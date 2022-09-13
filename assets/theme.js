
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




//  filters ----------------

const filterForm = document.querySelector('.filter-form')
const filterLabel = document.querySelector('.filter-label')

filterLabel.addEventListener('click', () => {
	
if(filterForm.classList.contains('open') ){
	
	filterForm.classList.remove('open')
	filterLabel.innerHTML=" Filters +"
} else{
	filterForm.classList.add('open')
	filterLabel.innerHTML=" Filters -"
}
	
})



