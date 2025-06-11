
import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const emailPermitido = "admin@teste.com";

const loginSection = document.getElementById("login-section");
const adminSection = document.getElementById("admin-section");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const projectForm = document.getElementById("projectForm");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Erro ao fazer login: " + error.message);
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user && user.email === emailPermitido) {
    loginSection.style.display = "none";
    adminSection.style.display = "block";
    logoutBtn.style.display = "inline-block";
  } else {
    alert("Acesso negado. Você não tem permissão para acessar esta página.");
    logoutBtn.style.display = "none";
    loginSection.style.display = "block";
    adminSection.style.display = "none";
    if (user) signOut(auth);
  }
});

projectForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const link = document.getElementById("link").value;
  const imagem = document.getElementById("imagem").value;

  try {
    await addDoc(collection(db, "projetos"), {
      titulo,
      descricao,
      link,
      imagem
    });
    alert("Projeto salvo com sucesso!");
    projectForm.reset();
  } catch (error) {
    alert("Erro ao salvar projeto: " + error.message);
  }
});
