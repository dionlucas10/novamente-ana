function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
  
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
  
  setInterval(criarCoracao, 300);
  
  const botao = document.getElementById("botaoAmor");
  const musica = document.getElementById("musica");
  
  botao.addEventListener("click", () => {
    
    // Trocar fundo
    document.body.style.background = "linear-gradient(to bottom, #ff99cc, #ffccff)";
    
    // Tocar música
    musica.play();
  });
  