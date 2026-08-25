# Camagru

Aplicação web para captura ou upload de imagens, composição com overlays e publicação em uma galeria.

## Requisitos

- Docker
- Docker Compose

## Como executar

1. Crie o arquivo de ambiente:

```bash
cp .env.example .env
```

2. Ajuste os valores de `.env` conforme necessário.

3. Suba o ambiente:

```bash
docker compose up --build
```

A aplicação estará disponível em `http://localhost:${APP_PORT}`.

## Serviços

- `app`: aplicação web do Camagru.
- `db`: banco de dados PostgreSQL.

## Estrutura inicial

```text
.
├── app/                 # código da aplicação
│   ├── src/             # código-fonte
│   └── public/          # arquivos públicos
├── docker/
│   └── app/             # configuração da imagem da aplicação
├── .env.example         # variáveis de ambiente de exemplo
├── .gitignore
├── compose.yaml         # orquestração dos serviços
└── README.md
```

## Desenvolvimento

A primeira etapa do projeto é acompanhada pela issue #1. A estrutura atual prepara o repositório para as próximas etapas: banco de dados, autenticação, editor e galeria.
