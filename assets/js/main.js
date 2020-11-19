var addTasks = document.getElementById('addTasks');
var toDoContainer = document.getElementById('toDoContainer');
var inputTasks = document.getElementById('inputTasks');
var number = document.getElementById('count');
var count = parseInt(number.innerText)

addTasks.addEventListener('click', function() {
    var liste = document.createElement('li');

    liste.classList.add('liste-styling');

    // on va ajouter un noeud à la fin de la lsite des enfants 
    toDoContainer.appendChild(liste);

    if (inputTasks.value === '') {
        alert('Rien à ajouter ?');
        e.preventDefault();
    } else {
        liste.innerText = inputTasks.value;
    }


    var parentDiv = toDoContainer.parentNode;
    parentDiv.insertBefore(liste, toDoContainer.nextSibling);


    inputTasks.value = "";


    count = count + 1;
    number.innerText = count;
    /***************************************** */


    liste.addEventListener('click', function() {
        liste.style.textDecoration = "line-through";

    })
    liste.addEventListener('dblclick', function() {
        //  La méthode Node.removeChild() retire un nœud enfant de l'arbre DOM et retourne le nœud retiré.
        parentDiv.removeChild(liste);
        count = count - 1;
        number.innerText = count;
    })
})