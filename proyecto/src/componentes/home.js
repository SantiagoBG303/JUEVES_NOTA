export default async function mostrarHome() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Cargando personajes de Rick and Morty...</h2>";

  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    app.innerHTML = "<h2>Rick and Morty - Personajes</h2>";

    data.results.forEach(personaje => {
      const card = document.createElement("div");

      card.style.border = "1px solid #ccc";
      card.style.padding = "15px";
      card.style.margin = "10px";
      card.style.borderRadius = "10px";
      card.style.background = "#f4f4f4";

      card.innerHTML = `
        <img src="${personaje.image}" alt="${personaje.name}" style="width:120px; border-radius:10px;">
        <h3>${personaje.name}</h3>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <p><strong>Estado:</strong> ${personaje.status}</p>
        <p><strong>Origen:</strong> ${personaje.origin.name}</p>
      `;

      app.appendChild(card);
    });

  } catch (error) {
    app.innerHTML = "<h2>Error al cargar los personajes</h2>";
  }
}
