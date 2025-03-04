export const validarFormularioTrabalheConosco = (formData, files) => {
  const errors = {};
  const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const dtnascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;

  // Validação de Nome
  if (!formData.nomeCompleto) {
    errors.nomeCompleto = "Nome é obrigatório.";
  } else if (formData.nomeCompleto.length < 3) {
    errors.nomeCompleto = "Nome deve ter pelo menos 3 caracteres.";
  }
  // Validação de CPF
  if (!formData.cpf) {
    errors.cpf = "CPF é obrigatório.";
  } else if (!cpfRegex.test(formData.cpf)) {
    errors.cpf = "Informe um CPF válido.";
  }
  // Validação de Data de Nascimento
  if (!formData.dataNascimento) {
    errors.dataNascimento = "Data de Nascimento é obrigatória.";
  } else if (!dtnascimentoRegex.test(formData.dataNascimento)) {
    errors.dataNascimento = "Informe uma Data de Nascimento válida.";
  } else {
    // Calcular a idade
    const dataNascimento = new Date(
      formData.dataNascimento.split("/").reverse().join("-")
    ); // converte para o formato YYYY-MM-DD
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const m = hoje.getMonth() - dataNascimento.getMonth();

    if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }

    // Verifica se tem 18 anos ou mais
    if (idade < 18) {
      errors.dataNascimento =
        "Você precisa ter 18 anos ou mais para se inscrever.";
    }
  }

  // Validação de Telefone
  if (!formData.telefone) {
    errors.telefone = "Telefone é obrigatório.";
  } else if (!telefoneRegex.test(formData.telefone)) {
    errors.telefone = "Informe um telefone válido.";
  }
  // Validação de Email
  if (!formData.email) {
    errors.email = "Email é obrigatório.";
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Informe um email válido.";
  }

  // Validação de outros campos...
  if (!formData.cep) {
    errors.cep = "CEP é obrigatório.";
  }
  if (!formData.genero) {
    errors.genero = "Gênero é obrigatório.";
  }
  if (!formData.endereco) {
    errors.endereco = "Endereço é obrigatório.";
  }
  if (!formData.numero) {
    errors.numero = "Número é obrigatório.";
  }
  if (!formData.bairro) {
    errors.bairro = "Bairro é obrigatório.";
  }
  if (!formData.cidade) {
    errors.cidade = "Cidade é obrigatória.";
  }
  if (!formData.uf) {
    errors.uf = "UF é obrigatório.";
  }
  if (!formData.escolaridade) {
    errors.escolaridade = "Nível de escolaridade é obrigatório.";
  }
  if (!formData.cargo) {
    errors.cargo = "Cargo é obrigatório.";
  }
  if (!formData.experiencia) {
    errors.experiencia = "Experiência é obrigatória.";
  } else if (formData.experiencia.length < 10) {
    errors.experiencia = "Experiência deve ter pelo menos 10 caracteres.";
  }

  // Validação de Currículo
  const arquivo = files ? files[0] : null; // Pega o primeiro arquivo
  if (!formData.curriculo) {
    errors.curriculo = "Currículo em formato PDF obrigatório.";
  } else {
    const tiposPermitidos = [
      "application/pdf",
      "application/x-pdf", // Adicionando outro tipo MIME de PDF
    ];
    const tamanhoMaximo = 5 * 1024 * 1024; // 5MB
    const tamanhoarquivo = formData.curriculo ? formData.curriculo : null;

    // Verifica o tipo MIME do arquivo
    if (arquivo && !tiposPermitidos.includes(arquivo.type)) {
      errors.curriculo = "O arquivo do currilo deve ser PDF.";
    } else if (tamanhoarquivo.size > tamanhoMaximo) {
      errors.curriculo = "O tamanho do arquivo deve ser menor que 5MB.";
    }
  }

  return { success: Object.keys(errors).length === 0, errors };
};
