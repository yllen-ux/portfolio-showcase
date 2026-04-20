

## Otimização de SEO para o Espaço AIOS

### Dados confirmados
- **Domínio:** espacoaios.com.br
- **Localização:** Curitiba/PR
- **Endereço:** Rua Buenos Aires, 444 — Curitiba/PR
- **Telefone:** placeholder no código (mantém WhatsApp atual até você informar o real)

### O que será feito

#### 1. `index.html` — Meta tags + Schema.org
- **Title** otimizado: `Espaço AIOS — Psicopedagoga e Neuropsicopedagoga em Curitiba | Avaliação Infantil`
- **Description** com palavras-chave fortes: avaliação neuropsicopedagógica, dificuldade de aprendizagem, TEA, TDAH, estímulo cognitivo, Curitiba + CTA
- **Keywords** relevantes (psicopedagogia Curitiba, neuropsicopedagogia clínica, ABA, TEA, TDAH, dificuldade de aprendizagem infantil, Yllen Canarines)
- **Canonical:** `https://espacoaios.com.br/`
- **Robots meta:** `index, follow`
- **Open Graph completo:** `og:url`, `og:site_name="Espaço AIOS"`, `og:locale="pt_BR"`, imagem
- **JSON-LD Schema.org** (`MedicalBusiness`):
  - Nome, endereço (Rua Buenos Aires, 444, Curitiba/PR, BR)
  - Área atendida: Curitiba e região metropolitana
  - Serviços: Avaliação Psicopedagógica, Avaliação Neuropsicopedagógica, Intervenção em Dificuldades de Aprendizagem, Estímulo Cognitivo
  - Profissional vinculada (`Person`): Yllen Canarines com credenciais (CBO 2394-25, 2394-40, ABPp 838)
  - URL e logo

#### 2. `src/pages/Index.tsx` — SEO on-page
- Adicionar **H1 textual oculto** (`sr-only`) com palavras-chave: "Espaço AIOS — Psicopedagoga e Neuropsicopedagoga Clínica em Curitiba"
- Otimizar `alt` da logo: "Espaço AIOS — Clínica de Psicopedagogia e Neuropsicopedagogia em Curitiba"
- `aria-label` nos botões de WhatsApp

#### 3. `public/robots.txt` — Apontar sitemap
- Adicionar: `Sitemap: https://espacoaios.com.br/sitemap.xml`

#### 4. `public/sitemap.xml` — Criar arquivo
- Sitemap com home (`https://espacoaios.com.br/`), `lastmod` atual, `priority 1.0`

### Resultado esperado
- Google entende que é uma clínica em **Curitiba** → rankeia em buscas locais ("psicopedagoga Curitiba", "avaliação neuropsicopedagógica Curitiba")
- Rich results no Google (cartão de negócio com endereço)
- Preview rico ao compartilhar no WhatsApp/Instagram
- Indexação mais rápida via sitemap

### Arquivos editados
- `index.html` — meta tags + JSON-LD
- `src/pages/Index.tsx` — H1 acessível + alts
- `public/robots.txt` — referência ao sitemap
- `public/sitemap.xml` — novo arquivo

