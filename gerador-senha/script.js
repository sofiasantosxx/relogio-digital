function gerarSenha() {
  const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
  const tamanho = parseInt(document.getElementById("tamanho").value);
  if (isNaN(tamanho) || tamanho < 4) {
    alert("Escolha um tamanho válido (mínimo 4)");
    return;
  }

  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const index = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[index];
  }

  document.getElementById("senha").textContent = senha;
}
