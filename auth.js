export default async (request, context) => {
  const authHeader = request.headers.get('authorization');

  // O sistema usa criptografia Base64 padrão da web. 
  // "Y2xpZW50ZTp0YXRpY28yMDI2" é a tradução de "cliente:tatico2026"
  const credenciaisCorretas = 'Basic Y2xpZW50ZTp0YXRpY28yMDI2';

  if (authHeader !== credenciaisCorretas) {
    // Se não tiver a senha, bloqueia o acesso (Status 401: Unauthorized)
    return new Response('Cybertac - Acesso Negado. Identifique-se.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Area de Inteligencia Tática"',
      },
    });
  }

  // Se a senha estiver correta, libera o carregamento do HTML do relatório
  return context.next();
};