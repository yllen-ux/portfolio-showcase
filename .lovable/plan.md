

## Adicionar endereço físico completo no site

### Endereço a exibir
**R. Buenos Aires, 444 — Batel, Curitiba/PR, 80250-070 — 6º andar, Sala 61**

### Onde apresentar

**1. Footer (rodapé) — local principal**
Hoje o rodapé só tem o copyright. Vou adicionar acima dele um bloco com:
- Ícone `MapPin` + endereço completo em uma linha legível
- Link clicável que abre no Google Maps em nova aba
- Centralizado, mesmo estilo discreto do copyright

**2. Seção "Vamos conversar?" (CTA final)**
Adicionar uma linha pequena abaixo do botão do WhatsApp com o endereço, para que quem está prestes a agendar já veja onde fica a clínica.

**3. SEO — `index.html` (JSON-LD Schema.org)**
Atualizar o `PostalAddress` do `MedicalBusiness` com os dados completos:
- `streetAddress`: "Rua Buenos Aires, 444 — 6º andar, Sala 61"
- `addressLocality`: "Curitiba"
- `addressRegion`: "PR"
- `postalCode`: "80250-070"
- `addressCountry`: "BR"
- Adicionar `"@type": "Place"` com `name: "Batel"` no bairro (via campo `addressLocality` estendido ou nota no `description`)

Isso ajuda o Google a exibir o cartão de negócio local com o endereço correto e completo.

### Arquivos editados
- `src/pages/Index.tsx` — bloco de endereço no footer + linha no CTA
- `index.html` — atualizar Schema.org com CEP, complemento e bairro

### Resultado
O endereço fica visível em dois pontos estratégicos (footer e CTA final), com link direto para o Google Maps, e o Google passa a entender a localização exata da clínica para buscas locais ("psicopedagoga Batel Curitiba").

