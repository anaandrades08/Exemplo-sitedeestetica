export const validarFormularioLogin = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = "Informe o usuário!";
  }

  if (!password) {
    errors.password = "Informe a senha!";
  }

  return {
    success: Object.keys(errors).length === 0, // Se não houver erros, retorna true
    errors,
  };
};
