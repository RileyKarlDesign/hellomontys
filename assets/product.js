
const atcBtn = document.querySelector('.js-atc')
const content = document.querySelector('#content')


console.log('product')

atcBtn.addEventListener('click', () => {
	
	document.body.classList.add('atc-animation')
	content.classList.add('content-animation')

})


