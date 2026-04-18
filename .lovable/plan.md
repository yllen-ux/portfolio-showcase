

## Reduzir espaçamento vertical em todas as seções

### O que será feito

Aplicar redução leve (~30-40px) no padding vertical de todas as seções de `src/pages/Index.tsx`, deixando a página mais densa e fluida sem perder respiro.

### Ajustes

| Seção | Atual | Novo |
|---|---|---|
| Hero | `pt-20 pb-24` | `pt-16 pb-16` |
| Services (`<section>`) | `py-20` | `py-12` |
| Services (cabeçalho) | `mb-16` | `mb-12` |
| Profissionais | `py-20` + `mb-14` | `py-12` + `mb-10` |
| Diferencial | `py-20` | `py-12` |
| CTA | `py-20` | `py-12` |

### Resultado
Cada transição entre seções fica ~60-80px mais compacta. A página mantém hierarquia visual e respiro interno dos cards/conteúdo, mas elimina o "vazio" entre blocos.

### Arquivo editado
- `src/pages/Index.tsx` — ajustar classes Tailwind de padding/margin nas 5 seções

