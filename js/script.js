function generateLink(e) {
  e.preventDefault();

  const name = document.zapform.name.value;
  const email = document.zapform.email.value;
  const subject = document.zapform.subject.value;
  const message = document.zapform.mensagem.value;
  const countryCode = +document.zapform.getAttribute('data-country-code');
  const phoneNumber = +document.zapform.getAttribute('data-phone-number');
  const url = 'https://wa.me/';
  const finalUrl = `${url}${countryCode}${phoneNumber}?text=Você tem uma nova mensagem!%0a%0a*Nome:* ${name}%0a*E-mail:* ${email}%0a*Assunto:* ${subject}%0a%0a*Mensagem:* ${message}`;

  if (isNaN(countryCode) || isNaN(phoneNumber)) {
    Swal.fire('Falha ao enviar', 'O número de telefone para o envio não foi cadastrado ou está incorreto.', 'error');
    return;
  } else if (!name || !email || !subject || !message) {
    Swal.fire('Falha ao enviar', 'Por favor, preencha todos os campos.', 'error');
  } else {
    send(finalUrl);
  }
}

function send(finalUrl) {
  Swal.fire('Mensagem enviada!', 'Obrigado pelo seu contato.', 'success');

  window.open(finalUrl);

  document.zapform.reset();
}

const enviarZapForm = document.getElementById('enviar-zapform').addEventListener('click', generateLink);
