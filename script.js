function validarLogin() {
    const nome = document.getElementById('nome').value.toLowerCase().trim();
    const senha = document.getElementById('senha').value;
  
    // Coloque o nome exato que sua namorada deve digitar, exemplo "Bruna"
    if (nome === "bruna" && senha === "teamo1112") {
      mostrarMensagem();
    } else {
      document.getElementById('erro').innerText = "Nome ou senha incorretos 😢";
    }
    return false; // impede o envio do formulário
  }
  
  function mostrarMensagem() {
    document.body.innerHTML = `
      <link rel="stylesheet" href="style.css">
      <div class="container">
        <h1>💖 Bem-vinda, meu amor! 💖</h1>
        <p>Eu preparei isso com muito carinho. Passe o mouse nas fotos meu amor!</p>
        
        <div class="galeria">
          <div class="foto">
            <img src="foto1.jpg" alt="Foto 1">
            <div class="legenda">Essas fotos são poucas comparado ao meu sentimento por você vida😍</div>
          </div>
          <div class="foto">
            <img src="foto2.jpg" alt="Foto 2">
            <div class="legenda">Esse foi o dia em que fomos no parque SJP de noite, fomos so pra comer milho e passar frio kkkk💘</div>
          </div>
          <div class="foto">
            <img src="foto3.jpg" alt="Foto 3">
            <div class="legenda">O dia que fomos passar um tempo com a sua família no parque Naútico❤️</div>
          </div>
          <div class="foto">
            <img src="foto4.jpg" alt="Foto 4">
            <div class="legenda">Teu sorriso ilumina meu mundo ❤️</div>
          </div>
          <div class="foto">
            <img src="foto5.jpg" alt="Foto 5">
            <div class="legenda"> Sua chatisse me estressa, mas não vivo sem hehe ❤️</div>
          </div>
          <div class="foto">
            <img src="foto6.jpg" alt="Foto 6">
            <div class="legenda"> Meu ❤️ Te amo!! ❤️ </div>
          </div>
        </div>
      </div>
    `;
  
  }
  