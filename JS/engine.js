let statusBlender = 'turn-off'
let  Licuadora = document.getElementById('blender');
let soundoLicuadora = document.getElementById('blenderSound')
let soundBottonLicuadora = document.getElementById('blenderButtonSound')

function controlBlender() {
  if (statusBlender === 'turn-off'){
    statusBlender = 'turn-on'
    Licuadora.classList.add('active')
    sound();
    // console.log('prendida')
  }else {
    statusBlender = 'turn-off'
    Licuadora.classList.remove('active')
    sound();
    // console.log('apagada')
  }
}

function sound(){
  if(soundoLicuadora.paused){
    soundBottonLicuadora.play();
    soundoLicuadora.play();
  }else {
    soundBottonLicuadora.play();
    soundoLicuadora.pause();
    soundoLicuadora.currenTime = 0;
  }
}