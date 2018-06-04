// I.  Variables globales + accès aux éléments du DOM
var title = 'Formation JS';
var l = console.log;

var nodeTitle = document.getElementById('title');
var nodeImg = document.getElementById('image');
var divStudents = document.getElementById('students');
var divFilters = document.getElementById('filters');
var divMessage = document.getElementById('message');
var selectCourse = divFilters.children[0]; // enfant d'indice 0

var config = {
  appVersion: 1,
  animation: false,
  afficheMessage: function(message) {
    l(message)
  },
  students: [
    {name: 'Dominique', age: 14, attendedCourses: ['PHP', 'javascript']},
    {name: 'Antonio', age: 25, attendedCourses: ['PHP']},
    {name: 'Othman', status: 'CDI', attendedCourses: []},
    {name: 'Tristan', age: 23, attendedCourses: ['Symfony', 'javascript']},
    {name: 'Nakkib', age: 30, attendedCourses: ['PHP', 'javascript', 'Angular', 'Nodejs']}
  ],
  studentsFiltered: null
};

// 2. FONCTIONS
function init() {
  nodeTitle.innerText = title;

  // on copie le tableau des étudiants non filtrés dans
  // celui des étudiants filtrés
  config.studentsFiltered = config.students;

  divStudents.innerHTML = buildStudentTable();
}

function displayImg() {
  // let display = nodeImg.style.display;
  //
  // if (display === 'none') {
  //
  //   // display = 'inline'; Problème, modifie la copie
  //   // de l'image pas l'original, pas d'impact sur le DOM
  //   nodeImg.style.display = 'inline'
  // } else {
  //   nodeImg.style.display = 'none'
  // }

  // version avec opérateur ternaire (syntaxe raccourcie)

  if (config.animation) {
    let display = nodeImg.style.display;
    nodeImg.style.display = (display === 'none')
    ? 'inline' : 'none';
  }


}

function buildStudentList() {
  let s = '<ul>'; // variable contenant balisage html

  // boucle sur le tableau des étudiants
  for (let i=0; i<config.students.length; i++) {
    s += '<li>';
    s += config.students[i].name;

    // si l'object student dispose d'une propriété age
    if (config.students[i].age) {
      s += ' (' + config.students[i].age + ' ans)'
    }

    s += '</li>';
  }

  s += '</ul>';
  return s; // retourne le balisage HTML
}

function buildStudentTable() {
  let header = '<tr><th>Nom</th><th>Age</th><th>Cours suivis</th></tr>';
  let s = '<table class="table table-bordered table-striped">'; // variable contenant balisage html
  // boucle sur le tableau des étudiants
  s += header;

  for (let i=0; i<config.studentsFiltered.length; i++) {
    s += '<tr>';

    // Colonne Nom
    s += '<td>';
    s += config.studentsFiltered[i].name;
    s += '</td>';

    // Colonne Age
    s += '<td>';
    // if syntaxe rapide (valable pour une seule instruction)
    if (config.studentsFiltered[i].age) s += config.studentsFiltered[i].age;
    s += '</td>';

    // Colonne cours suivis
    s += '<td>';
    s += config.studentsFiltered[i].attendedCourses;
    s += '</td>';

    s += '</tr>';
  }

  s += '</table>';
  return s; // retourne le balisage HTML
}

// 3. Evenements
// nodeTitle.addEventListener('click', function() {
//   console.log('OK');
// })

nodeTitle.addEventListener('mouseover', displayImg);

selectCourse.addEventListener('change', function() {
  let selectedCourse = this.value;

  if (selectedCourse == '0') {
    config.studentsFiltered = config.students;
    divMessage.innerText = '';  // retrait du message
  } else {
    // modifier la source de données par rapport à l'option choisie
    let studentsFiltered = config.students.filter(function(student) {
      return student.attendedCourses.indexOf(selectedCourse) != -1;
    })
    config.studentsFiltered = studentsFiltered;

    // affichage du message
    divMessage.innerText =
      config.studentsFiltered.length + ' étudiant(s) trouvé(s)';
  }

  // on recrée le DOM (tableau des étudiants filtrés)
  divStudents.innerHTML = buildStudentTable();
})


// Initialisation
init();
