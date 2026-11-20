SITE DE STREAMER — GUIA RÁPIDO

COMO PERSONALIZAR
1. Abra a pasta no VS Code.
2. Abra config.js.
3. Troque:
   - name: nome do streamer
   - brand: nome curto exibido no topo
   - bio e about: textos de apresentação
   - links: URLs oficiais das plataformas
4. Para trocar a imagem, substitua assets/avatar-streamer.png por outra imagem quadrada PNG e mantenha o mesmo nome.
5. Abra index.html no navegador ou use a extensão Live Server.

PUBLICAR
- Vercel: importe a pasta/repositório como projeto estático. O vercel.json aplica cabeçalhos de segurança.
- Netlify: publique a pasta; o arquivo _headers aplica cabeçalhos de segurança.
- Em hospedagem própria, configure os cabeçalhos equivalentes no servidor.

SEGURANÇA
- O site é estático: não possui login, banco de dados, painel administrativo nem coleta de dados.
- Não coloque senhas, tokens, chaves privadas ou credenciais em config.js.
- Os links externos são aceitos apenas com protocolo HTTP/HTTPS e abrem com rel=noopener noreferrer.
- O JavaScript insere os textos com textContent, evitando interpretar os campos como HTML.
- Os cabeçalhos recomendados estão em vercel.json e _headers.
- O Google Fonts é carregado externamente pelo CSS. Se preferir não depender de serviço externo, remova a linha @import do styles.css.

IMPORTANTE
Os endereços de redes sociais são exemplos genéricos. Substitua pelos links reais do streamer antes de publicar.
