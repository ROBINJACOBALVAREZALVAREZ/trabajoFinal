let arregloConTareas = [];

document
  .getElementById("form-tareas")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    agregarTarea(event);
  });

document
  .getElementById("task-list")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("complete-btn")) {
      var taskItem = event.target.closest(".task-item");
      taskItem.querySelector(".form-check-input").checked = true;
    } else if (event.target.classList.contains("delete-btn")) {
      var taskItem = event.target.closest(".task-item");
      taskItem.remove();
    }
  });

function agregarTarea(data) {  
  let inputTarea = document.getElementById("tarea");
  let listaTareas = document.getElementById("lista-tareas");
  let item = document.createElement("li");  
  let encontrado = arregloConTareas.find((elemento)=>{
    return elemento == inputTarea.value;
  });
  if(!encontrado){
    arregloConTareas.push(inputTarea.value);    
    item.innerHTML = `
    <div class='elemento-tarea'>
    <div class='elemento-nombre-fecha'>
    <span>Nombre: ${inputTarea.value}</span>
    <span>Fecha: ${new Date().toLocaleDateString()}</span>
    </div>
    <button type="button" class="btn btn-success" id="${
      inputTarea.value
    }">Completar</button>
    <button type="button" class="btn btn-danger" id="eliminar-${
      inputTarea.value
    }">Eliminar</button>
    </div>`;
  item.id = `elemento-${inputTarea.value}`;
  listaTareas.appendChild(item);
  let buttom = document.getElementById(inputTarea.value);
  buttom.addEventListener("click", (event) => {
    buttom.innerHTML = `Completado`;
    buttom.className = "btn btn-info";
  });

  let botonDelete = document.getElementById("eliminar-" + inputTarea.value);
  botonDelete.addEventListener("click", (event) => {
    item.remove();
  });
  }else {
    alert("Tarea ya existe")
  }

  
  inputTarea.value = null;
}
