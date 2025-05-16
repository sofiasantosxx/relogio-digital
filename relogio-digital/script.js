function atualizarRelogio() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, '0');
  const minutos = agora.getMinutes().toString().padStart(2, '0');
  const segundos = agora.getSeconds().toString().padStart(2, '0');

  document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
