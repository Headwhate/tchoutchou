function tchou() {
  console.log('aaa')
  const traine = document.getElementById('train')
  train.classList.add('go')
}
function lose() {
  alert('You lose !')
}
function stop() {
  const traine = document.getElementById('train')
  train.classList.add('pause')
}

document.getElementById('stop').addEventListener('click', stop)
document.getElementById('train').addEventListener('click', tchou)
window.addEventListener('animationend', lose)
