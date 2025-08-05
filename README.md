
# Teste Mercado Bitcoin




Analisando o design disponibilizado em https://github.com/mb-desafio/desafio-mb-web e os requisitos técnicos, decidi quais componentes seriam criados inicialmente e os requisitos de cada um.

Tendo em mente que não poderia ser utilizado nenhuma biblioteca para validação e máscara, decidi usar a própria validação de formulários disponibilizado pelo HTML 5 em conjunto com a Constraint Validation API. Reduzindo complexidade do projeto e focando em performance.

OBS: O componente Password.vue é o único que sai um pouco fora do padrão de componentização pelo fato de ele realizar as mesmas funcionalidades na etapa da senha e etapa de revisão de informações.



OBS2: Para testar o caso de erro da api, sugiro colocar uma data futura que seja diferente de hoje.


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/ettoremarques/MB-repo.git
```

Entre no diretório do projeto

```bash
  cd MB-repo
```

Instale as dependências

```bash
  npm install
```

Inicie a aplicação

```bash
  npm run app
```

