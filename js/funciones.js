export function mostrarAlerta(mensaje, tipo) {
  const alerta = document.querySelector(".alerta");

  if (!alerta) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "max-auto",
      "mt-6",
      "text-center",
      "alerta"
    );

    if (tipo === "error") {
      divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
      divMensaje.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    } else {
      divMensaje.classList.add(
        "bg-green-100",
        "border-green-400",
        "text-green-700"
      );
      divMensaje.innerHTML = `
            <strong class="font-bold">Agregado!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    }

    formulario.appendChild(divMensaje);
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

export function validar(obj) {
  return !Object.values(obj).every((input) => input !== "");
}
