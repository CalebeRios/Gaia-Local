[![Build Status](https://travis-ci.org/wendybot/Wendy-Local.svg?branch=dev)](https://travis-ci.org/wendybot/Wendy-Local)
[![Maintainability](https://api.codeclimate.com/v1/badges/4d1a87b0429c1ba7d3a4/maintainability)](https://codeclimate.com/github/wendybot/Wendy-Local/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4d1a87b0429c1ba7d3a4/test_coverage)](https://codeclimate.com/github/wendybot/Wendy-Local/test_coverage)

# Wendy-Local

## Objetivo
Esse serviço é responsável por pegar a longitude e a latitude a partir do nome de um local através da API do [Google Maps API](https://developers.google.com/maps/documentation/?hl=pt-br).

## Como usar

### Como rodar
Primeiro tem que instalar o docker e o docker compose, em seguida rode o projeto como desenvolvimento da seguinte maneira:

```$ docker-compose up --build```

Para rodar a folha de estilo, utilize este comando:

```$ docker-compose run app /bin/sh -c "cd /app; npm i; npm run lint"```

### Endpoints

Aqui se encontra todas as endpoints desse serviço.