# Projeto de Desenvolvimento de Aplicação To-Do List

# Escopo do Projeto: O que Vamos Fazer

## 1. Escopo Funcional

O sistema deve:

### Gerenciar Tarefas
- Permitir que o usuário adicione, edite e remova tarefas.
- Definir prioridades (alta, média, baixa) para cada tarefa.
- Categorizar tarefas em diferentes listas ou projetos.
- Marcar tarefas como concluídas.
- Definir prazos e lembretes para tarefas.

### Autenticação e Perfil de Usuário
- Permitir que o usuário crie uma conta e faça login/logout.
- Permitir a recuperação de senha.
- Gerenciar preferências de usuário, como temas e notificações.

### Visualização e Filtros
- Exibir tarefas em uma lista, calendário ou visão em Kanban.
- Permitir filtros por status (concluído, pendente), data, prioridade e categoria.

### Integrações
- Sincronizar com calendários externos (Google Calendar, Outlook).
- Exportar listas para formatos como CSV ou PDF.

## 2. Escopo Não Funcional

O sistema deve:

### Desempenho
- Carregar a lista de tarefas com menos de 1 segundo para listas com até 100 tarefas.
- Sincronizar dados em tempo real ao adicionar, editar ou excluir uma tarefa.

### Usabilidade
- Ser intuitivo e fácil de usar, com uma curva de aprendizado baixa.
- Ser responsivo, funcionando bem em dispositivos móveis e desktops.

### Segurança
- Utilizar autenticação segura com encriptação de senhas.
- Proteger dados do usuário contra acessos não autorizados.

### Escalabilidade
- Suportar até 10.000 usuários simultâneos sem perda de desempenho.

### Compatibilidade
- Funcionar em navegadores modernos (Chrome, Firefox, Safari, Edge).
- Ser compatível com múltiplos dispositivos e sistemas operacionais.

## 3. Objetivos SMART

- **Específico (Specific)**: Implementar uma aplicação de lista de tarefas com funcionalidades de criação, edição e gerenciamento de tarefas, incluindo integração com calendários externos.
- **Mensurável (Measurable)**: O sistema deve ser capaz de suportar 1.000 usuários ativos no primeiro mês, com uma taxa de conclusão de tarefas de 70%.
- **Atingível (Achievable)**: Desenvolver a aplicação em 3 meses, utilizando tecnologias já dominadas pela equipe, como React e Node.js.
- **Relevante (Relevant)**: Melhorar a produtividade dos usuários ao fornecer uma ferramenta eficaz para o gerenciamento de tarefas diárias.
- **Temporal (Time-bound)**: Lançar a versão beta em 2 meses e a versão final em 3 meses.

## 4. Cronograma (Diagrama de Gantt)

O cronograma do projeto incluirá as seguintes etapas:

- Planejamento e Análise de Requisitos (1 semana)
- Design do Sistema (2 semanas)
- Desenvolvimento Back-end (3 semanas)
- Desenvolvimento Front-end (3 semanas)
- Integração e Testes (2 semanas)
- Documentação e Preparação para Lançamento (1 semana)
- Lançamento Beta (1 semana)
- Ajustes e Melhorias com Base no Feedback (2 semanas)
- Lançamento Final (1 semana)

![Cronograma](diagramas/cronograma_gantt.png)

## 5. Análise de Risco

- **Risco de Atraso no Desenvolvimento**: Mitigar com sprints semanais e revisões de progresso.
- **Segurança de Dados**: Implementar e testar rigorosamente medidas de segurança desde o início do desenvolvimento.
- **Compatibilidade e Usabilidade**: Realizar testes em diferentes dispositivos e navegadores durante a fase de desenvolvimento.
- **Escalabilidade**: Monitorar o desempenho do sistema com usuários simulados durante a fase de testes.

## 6. Recursos

- **Equipe**
  - **Desenvolvedores Full-Stack (2)**: Responsáveis pelo desenvolvimento do back-end e front-end da aplicação.
  - **Designer UX/UI (1)**: Responsável pela criação de interfaces intuitivas e pela experiência do usuário.
  - **Analista de Testes (1)**: Responsável por garantir a qualidade do sistema através de testes rigorosos e identificação de bugs.
  - **Especialista em Segurança (1)**: Responsável por implementar e monitorar medidas de segurança para proteger dados e assegurar a integridade do sistema.

- **Tecnologias**
  - **Front-end**: React para construção de interfaces dinâmicas e responsivas.
  - **Back-end**: Node.js e Express para desenvolvimento de APIs e lógica do servidor.
  - **Banco de Dados**: MongoDB para armazenamento de dados escalável e flexível.
  - **Contêineres**: Docker para garantir ambientes consistentes e facilitar a implantação.

- **Segurança**
  - **Autenticação e Autorização**: Utilização de JWT (JSON Web Tokens) para autenticação segura e controle de acesso.
  - **Criptografia**: Implementação de criptografia de dados sensíveis usando algoritmos robustos (por exemplo, AES).
  - **Monitoramento e Logs**: Ferramentas para monitoramento de segurança e geração de logs (por exemplo, ELK Stack).
  - **Testes de Segurança**: Ferramentas para testes de penetração e análise de vulnerabilidades (por exemplo, OWASP ZAP).
  - **Firewall e Proteção de Rede**: Configuração de firewalls e outras medidas de proteção de rede para prevenir ataques.

- **Orçamento**
  - **Desenvolvimento**: $12.000
  - **Testes**: $4.000
  - **Lançamento**: $4.000
  - **Total**: $20.000

- **Ferramentas**
  - **Versionamento**: GitHub para controle de versão e colaboração de código.
  - **Gerenciamento de Projetos**: Jira para planejamento, acompanhamento e gerenciamento de tarefas.
  - **Comunicação**: Slack para comunicação em tempo real e coordenação da equipe.
  - **Design**: Figma para prototipagem e design de interfaces.
  - **Segurança**: Ferramentas de segurança específicas e soluções de monitoramento conforme mencionado acima.



# Diagrama de Classes:
![Diagrama de Classes](diagramas/DiagramaDeClasses.png)

# Diagrama de Casos de Uso:
![Diagrama de Casos de Uso](diagramas/DiagramaDeCasosUso.png)

# Diagrama de Fluxo:
![Diagrama de Fluxo](diagramas/DiagramaDeFluxo.png)

# Prototipagem

# Login
![Login](prototipoSite/Login.png)

# Registro
![Registro](prototipoSite/Registro.png)

# Dashboard
![Dashboard](prototipoSite/Dashboard.png)