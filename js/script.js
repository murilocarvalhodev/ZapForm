function generateLink(e) {
  e.preventDefault();

  let nome = document.zapform.nome.value;
  let email = document.zapform.email.value;
  let assunto = document.zapform.assunto.value;
  let mensagem = document.zapform.mensagem.value;
  let url = 'https://wa.me/';
  let urlFinal = `${url}${5522988736353}?text=Você tem uma nova mensagem!%0a%0a*Nome:* ${nome}%0a*E-mail:* ${email}%0a*Assunto:* ${assunto}%0a%0a*Mensagem:* ${mensagem}`;

  if (!nome || !email || !assunto || !mensagem) {
    Swal.fire('Falha ao enviar', 'Por favor, preencha todos os campos.', 'error');
  } else {
    enviarLink(urlFinal);
  }
}

function enviarLink(urlFinal) {
  Swal.fire('Mensagem enviada!', 'Obrigado pelo seu contato.', 'success');

  window.open(urlFinal);

  document.zapform.reset();
}

const enviarZapForm = document.getElementById('enviar-zapform').addEventListener('click', generateLink);
