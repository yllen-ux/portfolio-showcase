

## Ajustar seção "Profissionais" para suportar múltiplos profissionais

### Contexto
A seção atualmente exibe apenas a Yllen como "Sobre Mim" (já renomeada para "Profissionais"), mas precisa ser estruturada para acomodar mais profissionais no futuro.

### O que será feito

Refatorar a seção em `src/pages/Index.tsx` para usar um **array de profissionais** renderizado em loop, mantendo o visual atual mas preparado para escalar.

### Estrutura proposta

1. **Cabeçalho da seção** (centralizado, acima dos cards):
   - Título: "Profissionais" (font-heading, destaque)
   - Subtítulo curto: "Conheça quem cuida do desenvolvimento do seu filho com dedicação e técnica."

2. **Array `professionals`** no topo do arquivo (junto com `services`), com campos:
   - `name`, `photo`, `credentials`, `badge`, `bio` (array de parágrafos), `registrations` (array de strings)

3. **Card de profissional** (renderizado em `.map()`):
   - Layout atual de duas colunas (foto + texto) preservado para a Yllen
   - Quando houver mais de 1 profissional, cada um fica em seu próprio bloco com `border-t` sutil separando
   - No mobile: empilhado normalmente
   - No desktop: mantém foto à esquerda e texto à direita
   - Profissionais alternam lado da foto (esq/dir) opcionalmente para variação visual — **decisão**: manter sempre foto à esquerda para consistência e simplicidade

4. **Conteúdo da Yllen** mantido integralmente (nome, credenciais, badge ABA, 5 parágrafos, registros CBO/ABPp).

### Vantagem
Para adicionar um novo profissional no futuro, basta acrescentar um objeto ao array `professionals` — nenhuma mudança de JSX necessária.

### Arquivo editado
- `src/pages/Index.tsx` — extrair dados da Yllen para array, criar componente/loop interno de card de profissional, ajustar cabeçalho da seção

