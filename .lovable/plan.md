

## Alterações na Landing Page

### O que será feito

1. **Substituir o texto "Espaço AIOS" pela imagem do logo** no hero section — a imagem enviada será usada diretamente como logo no topo da página.

2. **Trocar as fontes** para se aproximar do estilo da imagem:
   - **"Espaço"** na imagem usa uma fonte cursiva/script elegante — usaremos **Dancing Script** (Google Fonts) como equivalente web.
   - **Subtítulo/corpo** na imagem usa uma sans-serif arredondada e suave — usaremos **Quicksand** (Google Fonts), que tem esse mesmo feeling leve e amigável.
   - Remover Playfair Display e Nunito atuais.

### Arquivos editados
- `src/index.css` — trocar imports de fontes
- `src/pages/Index.tsx` — substituir o h1 textual pela imagem do logo, ajustar tamanho
- Copiar a imagem do logo para `public/logo.jpeg`

### Resultado
O topo mostrará a logo original com a lâmpada/cérebro, e toda a página terá fontes mais próximas da identidade visual da imagem.

