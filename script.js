document.getElementById('form-tareas').addEventListener('submit', function(event) {
    event.preventDefault();
    agregarTarea(event)
    // var taskInput = document.getElementById('task-input');
    // var taskList = document.getElementById('task-list');
    // var taskText = taskInput.value.trim();
    // if (taskText !== '') {
    //     var taskItem = document.createElement('li');
    //     taskItem.className = 'task-item list-group-item d-flex justify-content-between align-items-center';
    //     taskItem.innerHTML = `
    //         <label class="form-check-label">
    //             <input class="form-check-input" type="checkbox" value="">
    //             <span>${taskText}</span>
    //         </label>
    //         <div>
    //             <button type="button" class="btn btn-success btn-sm complete-btn">Completar</button>
    //             <button type="button" class="btn btn-danger btn-sm delete-btn">Eliminar</button>
    //         </div>
    //     `;
    //     taskList.appendChild(taskItem);
    //     taskInput.value = '';
    // }
});

document.getElementById('task-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
        var taskItem = event.target.closest('.task-item');
        taskItem.querySelector('.form-check-input').checked = true;
    } else if (event.target.classList.contains('delete-btn')) {
        var taskItem = event.target.closest('.task-item');
        taskItem.remove();
    }
});

function agregarTarea(data){
    let inputTarea = document.getElementById("tarea");
    let listaTareas = document.getElementById("lista-tareas");
    const item = document.createElement("li");
    item.innerHTML = `
    <li class="list-group-item">
    <div>
    <span>Nombre: ${inputTarea.value}</span>
    <span>Fecha: ${new Date().toLocaleDateString()}</span>
    <button type="button" class="btn btn-success" id="${inputTarea.value}">Completar</button>
    <button type="button" class="btn btn-danger">Eliminar</button>
    </div>
    </li>`;
    listaTareas.appendChild(item);
    let buttom = document.getElementById(inputTarea.value)
    buttom.addEventListener("click", (event)=>{
        console.log(event);
        buttom.innerHTML = `<button type="button" class="btn btn-info">Completado</button>`
    });
}