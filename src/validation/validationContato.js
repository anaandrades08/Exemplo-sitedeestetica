export const validarFormularioContato = ({
  nome,
  telefone,
  email,
  mensagem,
}) => {
  const errors = {};
  const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nome) {
    errors.nome = "Nome é obrigatório.";
  } else if (nome.length < 3) {
    errors.nome = "Nome deve ter pelo menos 3 caracteres.";
  }

  if (!email) {
    errors.email = "Email é obrigatório.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Email inválido.";
  }

  if (!telefone) {
    errors.telefone = "Telefone é obrigatório.";
  } else if (!telefoneRegex.test(telefone)) {
    errors.telefone = "Telefone inválido.";
  }

  if (!mensagem) {
    errors.mensagem = "Mensagem é obrigatória.";
  } else if (mensagem.length < 10) {
    errors.mensagem = "Mensagem deve ter pelo menos 10 caracteres.";
  }

  return {
    success: Object.keys(errors).length === 0, // Se não houver erros, retorna true
    errors,
  };
};
