export const validarFormularioDepoimento = ({ nome, mensagem, avaliacao }) => {
  const errors = {};

  if (!nome) {
    errors.nome = "Nome é obrigatório.";
  } else if (nome.length < 3) {
    errors.nome = "Nome deve ter pelo menos 3 caracteres.";
  }
  if (!mensagem) {
    errors.mensagem = "Mensagem é obrigatória.";
  } else if (mensagem.length < 10) {
    errors.mensagem = "Mensagem deve ter pelo menos 10 caracteres.";
  }
  if (!avaliacao) {
    errors.avaliacao = "Avaliação é obrigatória.";
  }

  return {
    success: Object.keys(errors).length === 0, // Se não houver erros, retorna true
    errors,
  };
};
