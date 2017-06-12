let speed = 0
const train = document.getElementById('train')

const tchou = () => {
  speed++;
  train.style.marginLeft = `${Math.pow(speed, 3)/50000}%`
  if (Number((train.style.marginLeft).replace(/%/, '')) > 90) {
    alert('You lose !')
    clearInterval(refreshIntervalId);;
  }
}
const stop = () => {
  clearInterval(refreshIntervalId);
  document.getElementById("points").innerHTML = `${speed}`;
  if (speed > Number(document.getElementById("hipoints").innerHTML)) {
    document.getElementById("hipoints").innerHTML = `${speed}`;
  }
}
const reset = () => {
  train.style.marginLeft = 0;
  speed = 0;
  document.getElementById("points").innerHTML = `0`;
  refreshIntervalId = setInterval(tchou, 10)
}

document.getElementById('reset').addEventListener('click', reset)
document.getElementById('stop').addEventListener('click', stop);
let refreshIntervalId = setInterval(tchou, 10);
