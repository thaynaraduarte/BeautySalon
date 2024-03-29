/*==== ABRE E FECHA O MENU QUANDO CLICAR NO ICONE: Hamburguer e X===*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/*==== QUANDO CLICAR EM UM ICONE DO MENU, ESCONDER O MENU ==*/ 
  const links = document.querySelectorAll('nav ul li a')

  for (const link of links) {
      link.addEventListener('click', function() {
          nav.classList.remove('show')
      })
  }

  /*=== MUDAR O HEADER DA PAGINA QUANDO DER SCROLL*/
  

  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight

 function changeHeaderWhenScroll() {
   if(this.window.scrollY >= navHeight) {
        // scroll é maior que a altura do header
        header.classList.add('scroll')
   } else {
       // menor que a altura do header
       header.classList.remove('scroll')
   }
 }

  

   /*===== TESTIMONIALS CAROUSEL SLIDER SWIPER===*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
        slidesPerView: 2,
        setWrapperSize: true
    }
  }

});

/* BOTAO VOLTAR PARA O TOPO*/
 const backToTopButton = document.querySelector('.back-to-top')

   function backToTop() {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
 }

 /* menu ativo conforme a seção visível na página */
   const sections = document.querySelectorAll('main section[id]')
  function activateMenuAtCurrentSection() {

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections ) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.add('active')

        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']' )
            .classList.remove('active')

        }
    }
  }


 /*====WHEN SCROLL===*/
 window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
   activateMenuAtCurrentSection()

   })


/*scrollreveal: MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAGINA*/
const scrollReveal = ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

ScrollReveal().reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social
     `, {interval: 100 })

