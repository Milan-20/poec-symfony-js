(function() {

  // I Déclaration des variables globales
  var config = {
    anim: null
  };
  var divMessage = document.getElementById('message');
  var btnStart = document.getElementById('btnStart');
  var btnStop = document.getElementById('btnStop');

  // setTimeout(function() {
  //   console.log('première instruction')
  // }, 8000)

  // II Fonctions
  function init() {}

  function startAnim() {
    config.anim = setInterval(function() {
      divMessage.innerHTML += '<p>Blabla</p>';
    }, 1000)
  }

  function stopAnim() {
    clearInterval(config.anim);
  }

  // III Evenements
  btnStart.addEventListener('click', startAnim);
  btnStop.addEventListener('click', stopAnim);



})()
