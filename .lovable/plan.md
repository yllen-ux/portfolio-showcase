## Adicionar e-mail de contato no site

### E-mail
`contato@espacoaios.com.br` (placeholder — você pode trocar depois quando definir o e-mail oficial)

### Onde aparecer

**1. Rodapé** — abaixo do endereço, antes do copyright
- Ícone `Mail` (lucide-react) + e-mail clicável
- Mesmo estilo discreto do link do endereço (texto pequeno, hover muda para a cor primária)

**2. Seção "Vamos conversar?" (CTA final)** — abaixo do botão do WhatsApp
- Linha "ou envie um e-mail:" seguida do e-mail clicável
- Apresentado como alternativa secundária ao WhatsApp, sem competir visualmente com o botão principal

### Comportamento
Ambos os links usam `mailto:contato@espacoaios.com.br?subject=Contato%20-%20Espa%C3%A7o%20AIOS` — ao clicar, abre o cliente de e-mail padrão do usuário (Gmail, Outlook, Mail do iPhone, etc.) com o destinatário e assunto já preenchidos.

### SEO (`index.html`)
Adicionar o campo `email` no JSON-LD `MedicalBusiness` para que o Google indexe o e-mail de contato junto ao cartão do negócio.

### Arquivos editados
- `src/pages/Index.tsx` — link de e-mail no rodapé e na seção CTA, importar ícone `Mail`
- `index.html` — campo `email` no Schema.org

### Resultado
Visitantes têm uma alternativa formal ao WhatsApp, e o Google passa a reconhecer o e-mail oficial da clínica nas buscas.