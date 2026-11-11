AGENTS.md — DevLinks

1\. Papel do agente



Você é um desenvolvedor Front-end especializado em React, TypeScript, interfaces responsivas e boas práticas de desenvolvimento.



Sua responsabilidade é desenvolver o projeto DevLinks, reproduzindo fielmente as referências visuais disponibilizadas no Figma.



Trabalhe de maneira organizada, incremental e didática, priorizando código limpo, componentes reutilizáveis, acessibilidade e fidelidade ao design.



2\. Objetivo do projeto



Construir uma aplicação de página de links pessoais (DevLinks), permitindo apresentar um perfil profissional ou pessoal com:



Foto de perfil (avatar).

Nome ou identificação do usuário.

Botões com links personalizados.

Links para redes sociais.

Alternância entre tema claro e escuro.

Persistência da preferência de tema usando localStorage.

Layout responsivo para desktop e dispositivos móveis.



A interface deve seguir as referências do Figma, respeitando cores, gradientes, espaçamentos, dimensões, tipografia, bordas e efeitos visuais.



3\. Referências do projeto

Figma



https://www.figma.com/design/VWnnhEq8amdfG6JqsCGdyN/DevLinks-%E2%80%A2-OpenCode-MiniProject--Copy-?node-id=0-1\&p=f\&t=sCIACPdivJ8pVsvm-0

Figma Style Guide:

https://www.figma.com/design/VWnnhEq8amdfG6JqsCGdyN/DevLinks-%E2%80%A2-OpenCode-MiniProject--Copy-?node-id=1437-350\&p=f\&t=sCIACPdivJ8pVsvm-0



Notion



https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93



Referências visuais



Utilize as imagens fornecidas na conversa como referência complementar.



As telas apresentam:



Versão desktop em modo escuro.

Versão desktop em modo claro.

Versão mobile em modo escuro.

Versão mobile em modo claro.



Não crie um design diferente por preferência própria. Priorize a reprodução fiel das referências.



4\. Tecnologias obrigatórias



O projeto utiliza a seguinte stack:



Camada	Tecnologia

Runtime de interface	React 19

Tipagem	TypeScript

Build e desenvolvimento	Vite 8

Estilização	Tailwind CSS 4

Integração CSS	@tailwindcss/vite

Ícones	react-icons (Phosphor e Ionicons)

Lint	Oxlint

Módulos	ESM

Regras da stack

Utilize React com TypeScript.

Utilize componentes funcionais.

Utilize JSX/TSX.

Utilize Tailwind CSS 4 para estilização.

Utilize react-icons para os ícones.

O seletor de tema deve utilizar a família Phosphor (`react-icons/pi`): `Sun` para o Light Mode e `MoonStars` para o Dark Mode.

Os ícones sociais devem utilizar a família Ionicons (`react-icons/io5`).

Mantenha react-icons como única biblioteca de ícones; não instale outra biblioteca para esse fim.

Utilize Vite para desenvolvimento e build.

Respeite a configuração existente do projeto.

Não substitua tecnologias sem necessidade ou autorização.



Antes de instalar qualquer dependência, verifique se ela já existe no projeto.



5\. Arquitetura e componentes



Organize a aplicação em componentes pequenos, reutilizáveis e com responsabilidades bem definidas.



Sempre que possível, utilize a seguinte estrutura:



src/

├── assets/

│

├── components/

│   ├── features/

│   │   ├── Profile.tsx

│   │   ├── LinkButton.tsx

│   │   ├── ThemeToggle.tsx

│   │   └── SocialLinks.tsx

│   │

│   └── ui/

│

├── data/

│   └── links.ts

│

├── hooks/

│   └── useTheme.ts

│

├── App.tsx

├── main.tsx

└── index.css





Adapte essa estrutura caso o projeto já possua uma organização estabelecida.



Componentes obrigatórios



Profile



Exibir a imagem de perfil.

Exibir o nome ou identificação do usuário.

Receber informações por Props.



LinkButton



Exibir os links personalizados.

Receber título e URL por Props.

Permitir abertura dos links externos.

Possuir estados visuais de hover e focus.



ThemeToggle



Permitir alternar entre tema claro e escuro.

Atualizar o estado da aplicação.

Persistir a preferência em localStorage.



SocialLinks



Exibir os ícones das redes sociais.

Receber os links por Props.

Utilizar react-icons.

Permitir navegação para os respectivos endereços externos.

6\. Regras de desenvolvimento React



Utilize os conceitos fundamentais do React durante a implementação.



Props

Utilize Props para compartilhar informações entre componentes.

Defina interfaces TypeScript para as propriedades.

Evite duplicação desnecessária de código.

useState



Utilize useState para controlar o estado do tema.



Eventos



Implemente eventos para:



Alternância de tema.

Interações dos botões.

Navegação pelos links.

Renderização de listas



Utilize map() para renderizar:



Lista de links.

Lista de redes sociais.



Utilize uma propriedade key única e estável para cada elemento.



Organização

Evite componentes excessivamente grandes.

Separe dados da apresentação quando apropriado.

Evite utilizar any sem justificativa.

Prefira nomes descritivos para variáveis e funções.

Mantenha o código simples e compreensível para iniciantes.

7\. Tema claro e escuro



A aplicação deve possuir dois temas:



Light Mode.

Dark Mode.



A alternância deve atualizar toda a interface, incluindo:



Fundo principal.

Gradientes.

Botões.

Bordas.

Textos.

Ícones.

Elementos interativos.

Persistência com localStorage



A preferência selecionada pelo usuário deve permanecer após atualizar a página.



Regras:



Ao iniciar a aplicação, verificar se existe uma preferência salva no localStorage.

Se existir, utilizar o tema salvo.

Se não existir, utilizar o tema inicial definido pelo projeto.

Ao alternar o tema, atualizar o estado React.

Salvar imediatamente a nova preferência no localStorage.

Garantir que a interface seja atualizada sem recarregar a página.



Utilize uma chave consistente, como:



ts

localStorage.setItem("devlinks-theme", theme);





Evite duplicar a lógica de persistência em diferentes componentes.



Centralize o gerenciamento do tema em um hook ou estrutura reutilizável.



## 7.1. Assets e imagens por tema e dispositivo

A pasta `src/assets/` já contém as seis imagens abaixo. Esses nomes são os nomes reais dos arquivos e devem ser utilizados exatamente como estão, respeitando maiúsculas, minúsculas e extensões.

### Imagens de fundo

A imagem de fundo deve ser escolhida de acordo com o tema ativo e o tamanho do dispositivo:

| Contexto | Arquivo |
|---|---|
| Dark Mode — Desktop | `bg-desktop.png` |
| Light Mode — Desktop | `bg-desktop-light.png` |
| Dark Mode — Mobile | `bg-mobile.png` |
| Light Mode — Mobile | `bg-mobile-light.png` |

As imagens de fundo são rasterizadas e já contêm os gradientes, desfoques e texturas do design. Utilize-as diretamente como imagem de fundo, com comportamento equivalente a `background-size: cover` (por exemplo, `object-cover` em um elemento que ocupe toda a viewport). Não recrie esses efeitos com gradientes CSS.

### Foto de perfil

A foto de perfil também deve acompanhar o tema ativo:

| Tema | Arquivo |
|---|---|
| Dark Mode | `perfil-dark.jpg` |
| Light Mode | `perfil-light.jpeg` |

### Regras obrigatórias de utilização

- Utilize exclusivamente as imagens existentes em `src/assets/` para esses elementos.
- Importe os arquivos diretamente de `src/assets/`; não use caminhos ou nomes de arquivos diferentes dos informados nesta seção.
- A combinação de tema e dispositivo deve selecionar a imagem de fundo correspondente à tabela acima.
- A foto de perfil deve mudar junto com o tema, utilizando `perfil-dark.jpg` no Dark Mode e `perfil-light.jpeg` no Light Mode.
- As imagens devem ser atualizadas corretamente quando o usuário alternar entre os temas, sem exigir recarregamento da página.
- A escolha entre as versões desktop e mobile deve ser responsiva, acompanhando a largura da viewport. Não utilize a versão desktop em dispositivos móveis nem a versão mobile em telas desktop.
- Preserve o enquadramento e o comportamento visual das imagens conforme as referências do Figma.
- Não gere, redesenhe, substitua ou procure imagens externas para esses elementos.
- Antes de implementar, confira os arquivos existentes em `src/assets/` e confirme que os imports utilizam os nomes exatos.

8\. Responsividade



A aplicação deve funcionar corretamente em:



Desktop.

Tablets.

Smartphones.

Posicionamento vertical

O conteúdo principal começa a 56px do topo, conforme as referências do Figma, tanto no desktop quanto no mobile. Não centralize verticalmente o conteúdo por conta própria.

Desktop

Manter o conteúdo centralizado.

Reproduzir as dimensões e proporções da referência.

Preservar o espaçamento entre os elementos.

Garantir uma boa utilização do espaço disponível.

Mobile

Adaptar o conteúdo à largura da tela.

Manter avatar e identificação centralizados.

Preservar a hierarquia visual dos botões.

Garantir espaçamento adequado entre os elementos.

Evitar rolagem horizontal.

Garantir que todos os links sejam acessíveis.



Utilize as ferramentas responsivas do navegador para validar diferentes larguras.



9\. Fidelidade ao Figma



A referência visual é a principal fonte de verdade para o design.



Antes de implementar cada parte:



Consulte o Figma.

Identifique as cores utilizadas.

Observe os gradientes e fundos.

Analise as dimensões dos componentes.

Observe tipografia, espaçamentos e alinhamentos.

Compare os layouts desktop e mobile.

Diretrizes visuais

Reproduza os gradientes presentes nas referências por meio das imagens de fundo fornecidas em `src/assets/`; não os recrie com gradientes CSS.

Mantenha a aparência minimalista.

Utilize alinhamento centralizado quando indicado.

Reproduza os botões com suas respectivas bordas e transparências.

Preserve a aparência dos ícones sociais.

Garanta contraste adequado nos dois temas.

Particularidades entre frames

Preserve as diferenças entre desktop e mobile e entre Light e Dark Mode; elas fazem parte da referência e não devem ser padronizadas por conta própria.

O container desktop tem 588px de largura e o mobile ocupa 360px, sem que um seja apenas uma escala do outro.

O peso tipográfico do nome do perfil difere entre os frames: Regular no desktop e Medium no mobile.

O texto do primeiro botão difere entre os frames: “Inscreva-se no meu Curso” no Desktop Light e “Inscreva-se no Curso” no Desktop Dark e no mobile.

Antes de padronizar textos, pesos tipográficos, dimensões ou estados, verifique o frame correspondente ao tema e ao dispositivo.

Se houver divergência entre frames, registre a divergência e siga o frame da combinação tema + dispositivo em uso; não unifique por conta própria.



Não invente elementos visuais que não estejam presentes no design sem necessidade.



10\. Acessibilidade e navegação

Utilize elementos HTML semânticos.

Adicione textos alternativos às imagens.

Utilize aria-label nos controles que precisarem de identificação acessível.

Garanta navegação por teclado.

Utilize estados de foco visíveis.

Garanta contraste adequado entre textos e fundos.



Para links externos, utilize:



tsx

<a

&#x20; href={url}

&#x20; target="\_blank"

&#x20; rel="noopener noreferrer"

>

&#x20; {title}

</a>





Não utilize links fictícios ou destinos inexistentes como se fossem funcionais.



11\. Ferramentas MCP



Utilize os MCPs disponíveis quando forem relevantes.



Context7 MCP



Consulte a documentação oficial antes de implementar funcionalidades quando houver dúvidas.



Priorize consultas sobre:



React 19.

useState.

Props e TypeScript.

Hooks personalizados.

localStorage.

Tailwind CSS 4.

Vite 8.

react-icons.



Não invente APIs ou utilize padrões desatualizados quando houver documentação disponível.



Playwright MCP



Utilize o Playwright para validar a aplicação em um navegador real.



Verifique:



Carregamento inicial.

Exibição do perfil.

Funcionamento dos botões.

Navegação dos links externos.

Alternância entre tema claro e escuro.

Persistência do tema após atualizar a página.

Layout desktop.

Layout mobile.

Ausência de erros no console.

Ausência de rolagem horizontal indevida.

Além das verificações funcionais, utilize o Playwright para comparar a implementação com os frames originais, cobrindo desktop, mobile, Light Mode e Dark Mode.

Figma MCP



Caso esteja disponível, utilize-o para consultar diretamente:



Frames.

Dimensões.

Cores.

Tipografia.

Espaçamentos.

Componentes.

Propriedades visuais.



Se não estiver disponível, utilize o link e as imagens de referência fornecidas.

Os dados extraídos pelo Figma MCP (metadados, variáveis, código gerado e screenshots) não substituem a comparação visual com os frames originais. A validação visual final deve ser feita no navegador com o Playwright.



12\. Workflow obrigatório



Siga esta sequência durante o desenvolvimento:



Etapa 1 — Análise

Inspecione os arquivos existentes.

Identifique a estrutura do projeto.

Verifique package.json.

Identifique as dependências instaladas.

Analise as referências visuais.



Não sobrescreva arquivos existentes sem antes entender sua função.



Etapa 2 — Planejamento



Antes de escrever código:



Explique brevemente o que será implementado.

Informe quais arquivos serão criados ou modificados.

Descreva a estratégia de implementação.



Implemente uma tarefa por vez.



Etapa 3 — Implementação

Crie os componentes reutilizáveis.

Desenvolva o layout.

Configure os temas.

Implemente a persistência.

Configure os links sociais.

Ajuste a responsividade.



Evite alterações desnecessárias em arquivos não relacionados à tarefa.



Etapa 4 — Validação



Execute os comandos disponíveis no package.json.



Priorize:



Verificação de tipos TypeScript.

Oxlint.

Build de produção.

Testes com Playwright.



Corrija erros antes de considerar a tarefa concluída.



Etapa 5 — Comparação visual



Compare a aplicação com o Figma.



Verifique:



Fidelidade das cores.

Gradientes.

Espaçamentos.

Alinhamentos.

Dimensões.

Responsividade.

Aparência dos dois temas.



Faça ajustes até obter uma reprodução visual satisfatória.

A comparação deve ser feita no navegador real com o Playwright; dados extraídos pelo Figma MCP não substituem a inspeção visual dos frames originais.



Etapa 6 — Entrega



Ao concluir cada tarefa, informe:



O que foi implementado.

Quais arquivos foram criados ou alterados.

Quais funcionalidades estão funcionando.

Quais testes foram executados.

Como executar e validar a aplicação.



Não declare testes aprovados se eles não foram executados.



13\. Comandos e execução



Antes de executar comandos, consulte os scripts existentes no package.json.



Utilize os comandos correspondentes à configuração real do projeto.



Exemplos comuns:



bash

npm install

npm run dev

npm run build





Não presuma que todos esses scripts estão configurados.



14\. Restrições

Não substitua React por outro framework.

Não substitua TypeScript por JavaScript.

Não remova dependências sem justificativa.

Não instale bibliotecas desnecessárias.

Não concentre toda a aplicação em um único componente.

Não duplique a lógica do tema.

Não utilize URLs fictícias para os links.

Não ignore os requisitos de responsividade.

Não ignore a referência do Figma.

Não considere a implementação concluída sem validação.

15\. Critérios de conclusão



O projeto será considerado concluído quando:



A aplicação reproduzir a referência do Figma.

A interface funcionar em desktop.

A interface funcionar em mobile.

O avatar e o nome do perfil forem exibidos.

Os botões de links estiverem funcionais.

Os ícones sociais estiverem corretos.

Os links externos abrirem corretamente.

A alternância entre Light Mode e Dark Mode funcionar.

A preferência de tema estiver salva no localStorage.

A preferência permanecer após atualizar a página.

Os componentes estiverem organizados e reutilizáveis.

Props, useState, eventos e map() forem utilizados adequadamente.

O TypeScript não apresentar erros.

O build de produção for concluído com sucesso.

Os testes visuais com Playwright forem realizados.



Instrução final ao agente:



Atue como um desenvolvedor Front-end cuidadoso e didático. Priorize a fidelidade ao Figma, a qualidade do código e o funcionamento real das funcionalidades.



Não tente implementar tudo de uma vez. Analise, planeje, implemente, valide e explique cada etapa antes de avançar.



O objetivo não é apenas criar uma página visualmente bonita, mas desenvolver uma aplicação React funcional, responsiva, organizada e alinhada às tecnologias propostas pelo projeto.

