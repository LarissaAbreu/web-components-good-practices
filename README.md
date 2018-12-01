# [Good practices for build web components](https://larissaabreu.github.io/web-components-good-practices/)

> A guide to help you remember important things when creating an web component xD

**Note:** The best practices presented here are about [polymer](polymer-project.org), but you can follow these recommendations for any [Web Components](https://www.webcomponents.org/introduction) or other type of component based on Libraries or frameworks (like [React](https://facebook.github.io/react/) or any other).

**Tip:** For open source projects [see the Open Source Checklist](https://afonsopacifer.github.io/open-source-checklist/).

## Stack

- Task manager: [Gulp](http://gulpjs.com)
- Template engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS preprocessor: [Stylus](http://stylus-lang.com/)
- JS transpiler: [Babel](https://babeljs.io/)

## Rodando o projeto localmente

**1 -** Prepare o ambiente:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone o projeto e installe as dependêcias:

```sh
$ git clone https://github.com/LarissaAbreu/web-component-good-practices.git
$ cd web-component-good-practices
$ npm install
```

**3 -** Rode o servidor estático com livereload:

```sh
$ gulp server
```

## Estrutura de pastas

    .
      ├── README.md
      ├── LICENSE.md
      ├── CONTRIBUTING.md
      ├── out/
      ├── src/
      |   ├── assets/
      |   |   └── styles/
      |   |       └── style.styl
      |   ├── partials/
      |   |   └── analytics.html
      |   ├── layouts/
      |   |   └── default.pug
      |   └── index.pug
      ├── gulpfile.js
      ├── package.json
      └── .gitignore

## Tarefas automatizadas

- `$ gulp build`: Compila, concatena e minifica todos os arquivos.
- `$ gulp server`: Escuta os arquivos buildados e inicia um servidor estático.
- `$ gulp deploy`: Faz um deploy para a branch master.

## Versionamento

Para manter uma melhor organização, seguiremos as diretrizes do [Versionamento Semântico 2.0.0](http://semver.org/).

## Contribuição

Veja no [guia](https://github.com/LarissaAbreu/web-components-good-practices/issues) os próximos passos do projeto ;)
<br>
Quer contrinuir? [Siga essas recomendações](https://github.com/LarissaAbreu/web-components-good-practices/blob/master/CONTRIBUTING.md).

## Licença

[Licença MIT](https://github.com/LarissaAbreu/web-components-good-practices/blob/master/LICENSE.md) © [Larissa Abreu](http://larissaabreu.github.io/)
