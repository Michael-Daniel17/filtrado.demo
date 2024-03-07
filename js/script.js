const anioContainer = document.querySelector("#anios")
const peliculasContainer = document.querySelector(".peliculas");

document.addEventListener("DOMContentLoaded",generarAnios)
document.addEventListener("DOMContentLoaded", cargarTodasLasPeliculas)


function aplicarEstilos() {
  const aniosLi = document.querySelectorAll("#anios li")

  aniosLi.forEach(elm=> {
    elm.addEventListener("click", () => {
      // Quita la clase "active" de todos los elementos
      aniosLi.forEach(el => {
        el.classList.remove("active");
      });

      // Añade la clase "active" solo al elemento clicado
      elm.classList.add("active");
    });
  });
}

function generarAnios() {
  const max = new Date(2021, 0, 1).getFullYear(),
        min = max - 13;
  
  for (let i = max; i > min; i--) {
    const li = document.createElement("li");
    li.textContent = i;
    anioContainer.appendChild(li);
  }
  obtenerYear()
} 

function obtenerYear() {
  const aniosLi = document.querySelectorAll("#anios li")
  aniosLi.forEach((anio) => {
    anio.addEventListener("click", () => {
      filtrarPeliculas(Number(anio.textContent));
    });
  });
  aplicarEstilos()
}

function filtrarPeliculas(anio) {
  if (isNaN(anio)) {
    cargarTodasLasPeliculas();
    return;
  }
  const resultado = peliculas.filter(pelicula => pelicula ? pelicula.anioLanzamiento === anio : pelicula);
  cargarTodasLasPeliculas()

}

function cargarTodasLasPeliculas() {
  peliculas.forEach(pelicula => {
    const { nombre, img, categoria, anioLanzamiento, idioma, disponibilidadTransmision } = pelicula;
    const div = document.createElement("div");
    div.classList.add("peliculas-card");
    div.innerHTML = `
      <img src="${img}" alt="${nombre}">
      <div class="info-peli">
        <p>Titulo: <span>${nombre}</span> </p>
        <p>Categoria: <span>${categoria}</span></p>
        <p>Año de Lanzamiento: <span>${anioLanzamiento}</span></p>
        <p class="calificacion">
          Calificación: 
          <i class='bx bxs-star' ></i>
          <i class='bx bxs-star' ></i>
          <i class='bx bx-star' ></i>
          <i class='bx bx-star' ></i>
          <i class='bx bx-star' ></i>
        </p>
        <p>Idioma: <span>${idioma}</span></p>
        <p>Plataformas: <span>${disponibilidadTransmision}</span></p>

        <div class="btns-info">
          <button class="ver-ahora">Ver Ahora</button>
          <button class="mas-info">Mas Información</button>
        </div>
      </div>
    `;
    peliculasContainer.appendChild(div)
  });
}


function limpiarHTML() {
  while (peliculasContainer.firstChild) {
    peliculasContainer.removeChild(peliculasContainer.firstChild)
  }
}