export function getErrorMessage(error: unknown): string {
  if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
    return 'Não foi possível conectar ao servidor. Verifique se o backend está rodando.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'Ocorreu um erro desconhecido.';
}
