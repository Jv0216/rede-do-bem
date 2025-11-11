// =========================
// BLOG — REDE DO BEM
// =========================

// Seleciona os elementos principais
const postForm = document.getElementById("postForm");
const postsSection = document.getElementById("posts");

// Carrega os posts salvos no localStorage
document.addEventListener("DOMContentLoaded", loadPosts);

// Evento do formulário
postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Por favor, preencha todos os campos antes de publicar.");
    return;
  }

  const newPost = {
    id: Date.now(),
    title,
    content,
    date: new Date().toLocaleDateString("pt-BR"),
  };

  savePost(newPost);
  addPostToDOM(newPost);
  postForm.reset();
});

// Salva post no localStorage
function savePost(post) {
  const posts = getPosts();
  posts.unshift(post); // adiciona no início (mais recente primeiro)
  localStorage.setItem("blogPosts", JSON.stringify(posts));
}

// Pega os posts do localStorage
function getPosts() {
  return JSON.parse(localStorage.getItem("blogPosts")) || [];
}

// Carrega posts salvos
function loadPosts() {
  const posts = getPosts();
  postsSection.innerHTML = ""; // limpa área antes de carregar
  posts.forEach((post) => addPostToDOM(post));
}

// Adiciona o post na tela
function addPostToDOM(post) {
  const postDiv = document.createElement("article");
  postDiv.classList.add("post");
  postDiv.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
    <small>Publicado em ${post.date}</small>
    <button class="delete-btn" data-id="${post.id}">Excluir</button>
  `;

  postsSection.appendChild(postDiv);

  // Evento de exclusão
  postDiv.querySelector(".delete-btn").addEventListener("click", (e) => {
    deletePost(e.target.dataset.id);
  });
}

// Deleta o post
function deletePost(id) {
  let posts = getPosts();
  posts = posts.filter((p) => p.id != id);
  localStorage.setItem("blogPosts", JSON.stringify(posts));
  loadPosts();
}
