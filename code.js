let speed = 0
const traine = document.getElementById('train')

function tchou() {
  speed++;
  train.style.marginLeft = `${Math.pow(speed, 3)/50000}%`
  if (Number((train.style.marginLeft).replace(/%/, '')) > 90) {
    alert('You lose !')
    clearInterval(refreshIntervalId);;
  }
}
function stop() {
  clearInterval(refreshIntervalId);
}

document.getElementById('stop').addEventListener('click', stop);
var refreshIntervalId = setInterval(tchou, 10);
