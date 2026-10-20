export default async (request) => {
  const authorization = request.headers.get("authorization");

  // LISTA DE CREDENCIAIS DE CLIENTES ATIVOS
  // Lembre-se de sempre colocar a palavra "Basic " antes do código que você gerou
  const clientesAutorizados = [
    "Basic Y2xpZW50ZTp0YXRpY28yMDI2", // cliente:tatico2026 (Exemplo antigo)
    "Basic YWxmYS0wMTpkZWx0YTIwMjY=", // alfa-01:delta2026 (Cliente 1)
    "Basic YnJhdm8tMDI6b21lZ2E3Nzc="  // bravo-02:omega777 (Cliente 2)
  ];

  // Verifica se o usuário enviou algo E se o código está na nossa lista de autorizados
  if (!authorization || !clientesAutorizados.includes(authorization)) {
    return new Response("Acesso Negado: Credenciais operacionais incorretas.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Portal de Inteligencia Cybertac"',
      },
    });
  }

  // Se a credencial for encontrada na lista, o acesso ao relatório é liberado
};