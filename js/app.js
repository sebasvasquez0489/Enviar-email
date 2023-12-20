// Utilizamos el DOMContentLoaded para que se ejecute el codigo cuando todo el HTML haya descargado.
document.addEventListener('DOMContentLoaded', function() {

  // Seleccionamos los elementos de la interfaz.
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');

  // Asignamos eventos. 
  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  //Creamos funciones para su validación.
  function validar(e){
    if (e.target.value.trim() === '') {
      mostrarAlerta();
    } else {
      console.log('si hay algo');
    }
  }

  function mostrarAlerta() {
    //Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = 'Hubo un herror';
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

    //Inyectar el error al formulario
    formulario.appendChild(error)
  }
});
