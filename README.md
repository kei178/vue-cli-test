# vue-cli-test

An example of the Vue CLI app with Vue Test Utils & Jest

## Requirements

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## Explanations

* [Vue.js ユニットテストの基本まとめ - Qiita](https://qiita.com/kskinaba/items/d23259060e6e13b7353c)
* [Vue.jsの開発環境をDockerで構築する手順 - Qiita](https://qiita.com/kskinaba/items/44077529ff2abcd1fcd4)

## Running

```
docker-compose up
```

You can access the API server at `http://localhost:8080`.

If you change something, execute the following command, instead:

```
docker-compose up --build
```

## Shutdown

```
docker-compose down
```

## Run test only

```
docker-compose up test
```