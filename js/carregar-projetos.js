
// carregar-projetos.js compatível com file://
document.addEventListener("DOMContentLoaded", async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDuDgrtXfwP0WL5yb86YCVYqQ-fFnT8144",
    authDomain: "viniport-9ea97.firebaseapp.com",
    projectId: "viniport-9ea97",
    storageBucket: "viniport-9ea97.firebasestorage.app",
    messagingSenderId: "741591013825",
    appId: "1:741591013825:web:1b93124a22ddd2104f3740",
    measurementId: "G-4Y3V711FWB"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  const grid = document.querySelector(".projects-grid");
  if (!grid) return;

  try {
    const snapshot = await db.collection("projetos").get();
    if (snapshot.empty) {
      console.log("Nenhum projeto encontrado.");
      return;
    }

    snapshot.forEach(doc => {
      const { titulo, descricao, link, imagem } = doc.data();

      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        ${imagem ? `<img src="${imagem}" alt="imagem do projeto" style="width:100%;border-radius:10px;margin-bottom:15px;max-height:240px;object-fit:cover;" />` : ""}
        ${titulo ? `<h3>${titulo}</h3>` : ""}
        ${descricao ? `<p>${descricao}</p>` : ""}
        ${link ? `<a href="${link}" target="_blank">Ver projeto</a>` : ""}
      `;

      grid.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
  }
});
