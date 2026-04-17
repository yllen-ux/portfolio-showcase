

## Mover seção "Sobre Mim" para depois de "Nossos Atendimentos"

### O que será feito

Reorganizar a ordem das seções em `src/pages/Index.tsx`:

**Ordem atual:**
1. Hero
2. Sobre Mim
3. Nossos Atendimentos
4. Diferencial
5. CTA

**Nova ordem:**
1. Hero
2. Nossos Atendimentos
3. Sobre Mim
4. Diferencial
5. CTA

### Ajuste visual necessário

Como a seção "Sobre Mim" atualmente usa `bg-gradient-to-b from-background to-[hsl(var(--warm-cream))]` e a seção "Diferencial" logo após usa `from-[hsl(var(--warm-cream))] to-background`, a transição de cores entre elas ficará natural — sem necessidade de ajustes adicionais no gradiente.

Também aproveitarei para aplicar o conteúdo profissional da Yllen (já fornecido em mensagens anteriores) na seção, caso ainda não esteja aplicado, mantendo:
- Nome: **Yllen Canarines**
- Credenciais
- Badge ABA
- Parágrafos descritivos
- Rodapé com registros (CBO 2394-25, CBO 2394-40, ABPp: 838)

### Arquivo editado
- `src/pages/Index.tsx` — trocar ordem dos blocos `<section>`

