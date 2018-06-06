(function() {

  // I Déclaration des variables globales
  var config = {
    anim: null
  };
  const divMessage    = document.getElementById('message');
  const btnStart      = document.getElementById('btnStart');
  const btnStop       = document.getElementById('btnStop');
  const imgColisee    = document.getElementById('imgColisee');
  const btnAjax       = document.getElementById('btnAjax');
  const divTeams      = document.getElementById('teams');


  // II Fonctions
  function init() {}

  function startAnim() {
    let w = imgColisee.width;
    //let opa = 1;
    let opa =  imgColisee.style.opacity;
    console.log(opa);

    config.anim = setInterval(function() {
      //divMessage.innerHTML += '<p>Blabla</p>';
      w += 10;
      if (opa > 0.5) opa -= 0.025;
      imgColisee.style.left = w + 'px';
      imgColisee.style.width = w + 'px';
      imgColisee.style.opacity = opa;
    }, 100)
  }

  function stopAnim() {
    clearInterval(config.anim);
  }

  // III Evenements
  btnStart.addEventListener('click', startAnim);
  btnStop.addEventListener('click', stopAnim);

  btnAjax.addEventListener('click', () => {
    //if (fetch) console.log('fetch dispo');
    divTeams.innerHTML = ''; // clear
    divTeams.classList.remove('alert-danger');
    
    fetch('http://localhost:5000/teams')
      .then(res => res.json())
      .then(teams => {

        // ici les données sont reçues et parsées en tableau JS
        // la chaine de caractères JSON correspondant à la réponse
        // serveur a été convertie en tableau JS
        teams.forEach(team => {
          let s = '<p><img class="logo" src="'+team.logo+'" alt="">';
          s += '<span>'+team.name+'</span></p>';
          divTeams.innerHTML += s;
        })

      })
      .catch((err) => {
        divTeams.innerHTML +=
        'Erreur: impossible de charger les équipes';
        divTeams.classList.add('alert-danger');
      })

  })



})()
