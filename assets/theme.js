



const foot = document.querySelector('.footer')
const nav = document.querySelector('.nav-wrapper')




enterView({
	selector: '.ticker-bottom',
	enter: function(el) {
		 nav.classList.add('nav-bottom-fixed');
   
	},

  exit: function(el) {
		nav.classList.remove('nav-bottom-fixed');
	},
});



let headerTop = document.querySelector('.header-top');
let content = document.querySelector('#content');

const spacer = document.querySelector('.spacer')


enterView({
	
	selector: '.ticker-top',

	enter: function(el) {
		headerTop.classList.add('header-top-fixed');
		
	},
	exit: function(el) {
		headerTop.classList.remove('header-top-fixed');
		
	},
	
	offset: 1, // enter at middle of viewport
	
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

// intersection -------------------------------------------------



// headerOptions = {

// 	threshold: 0,
// 	rootMargin: "-0px 0px 0px -100%"
// };

// const headerObserver = new IntersectionObserver( function(entries, headerObserver){

// 	entries.forEach( entry => {
// 		console.log('!')
// 		if(!entry.isLeaving){
// 			headerTop.classList.add('header-top-fixed')
// 			console.log('.')
// 		}else{
// 			headerTop.classList.remove('header-top-fixed')
// 		}
		
// 	})

// }, headerOptions )


// headerObserver.observe(headerTop)

//----------------------------------------------------------
