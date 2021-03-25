window.onload = function(){
  let emailModal = document.getElementsByClassName('email-modal')[0]
  
  let closeModal = document.getElementsByClassName('email-modal__close-btn')[0]

  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible')
  })

  document.body.addEventListener('mouseleave', () => {
    emailModal.classList.add('email-modal--visible')
  })
}