const $form = document.querySelector('#contact-form');

  $form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
      event.preventDefault();
      const selectedOptions = document.querySelectorAll('input[name="options[]"]:checked');

      if (selectedOptions.length === 0) {
          alert("Por favor, elija al menos una opción antes de enviar el formulario.");
          return;
      }

      const form = new FormData(this);
      const subject = `Asunto: ${getSelectedOptionsText(selectedOptions)}`;
      const body = `Nombre: ${form.get('name')}\nEmail: ${form.get('email')}`;

      const mailtoLink = `mailto:correo@destino.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
  }

  function getSelectedOptionsText(selectedOptions) {
      const optionsTextArray = Array.from(selectedOptions).map(option => option.value);
      return optionsTextArray.join(', ');
  }