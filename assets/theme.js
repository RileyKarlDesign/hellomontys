const header = document.querySelector('.header');
const headerHeight = document.querySelector('.header').clientHeight;
const sectionOne= document.querySelector('.spacer');

const sectionOneOptions = { rootMargin:  "-10% 0px 0px 0px"};


const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){

    entries.forEach( entry => {

        if(!entry.isIntersecting){
            header.classList.add('header-scrolled')
            console.log('class added')
        }else{
            header.classList.remove('header-scrolled') 
        }
     



    })
}, sectionOneOptions )

sectionOneObserver.observe( sectionOne )



function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector('#content').classList.remove('.content-load');
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

 

