import { mostrarAlerta, validar } from "./funciones.js";
import { obtenerCliente, editarCliente } from "./API.js";
(function () {
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const empresaInput = document.querySelector("#empresa");
  const telefonoInput = document.querySelector("#telefono");
  const idInput = document.querySelector("#id");

  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", async () => {
    formulario.addEventListener("submit", validarCliente);

    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = Number(parametrosURL.get("id"));

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);
  });

  function mostrarCliente(cliente) {
    const { nombre, empresa, email, telefono, id } = cliente;

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
    idInput.value = id;
  }

  function validarCliente(e) {
    e.preventDefault();

    const cliente = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: parseInt(idInput.value),
    };

    if (validar(cliente)) {
      mostrarAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    editarCliente(cliente);
  }
})();
