# Happy - BACKEND

# 😃 O que é o Happy?

---

A Next Level Week é um evento online gratuito promovido pela Rocketsat, em que durante 5 dias desenvolvemos uma aplicação completa. Na trilha Omni, a proposta foi criar uma aplicação web e mobile em que lares adotivos podem cadastrar seus endereços e informações para pessoas visitarem.

# 🛠️ Como usar?

---

## 🏋🏽‍♂️ Pré-requisitos

É necessário ter instalado na sua máquina para execução desse projeto:

- NodeJS
- Gerenciador de pacotes (Npm ou Yarn)

## ♊ Clonando o Rositório (frontend, backend e mobile)

Repositório [FRONTEND](https://github.com/RodrigoSaantos/happy-web).

Repositório [BACKEND](https://github.com/RodrigoSaantos/happy-backend).

Repositório [MOBILE](https://github.com/RodrigoSaantos/happy-mobile).

```bash
$ git clone https://github.com/RodrigoSaantos/happy-web.git
$ git clone https://github.com/RodrigoSaantos/happy-backend.git
$ git clone https://github.com/RodrigoSaantos/happy-mobile.git

# entre na pasta do projeto
```

## 💻 Rodando o Happy web

Entre na pasta

```bash
$ cd web
```

Instale as dependências

```bash
$ yarn

# ou, caso use npm

$ npm install
```

Rode a aplicação

```bash
$ yarn start

# ou, caso use npm

$ npm start
```

# 🌎 Mapbox ou Openstreetmap

---

## 🗺️ Mapbox

Siga as instruções para usar o mapbox no lugar do openstreetmap.

- Caso você tenha uma conta no [mapbox](https://www.mapbox.com/), pode usar seu token para utilizar o mapa da aplicação. No entanto, se você não quiser ter este trabalho, sem problemas, por padrão já tem um mapa configurado para uso.
- Em "[https://account.mapbox.com/](https://account.mapbox.com/)", copie seu token.
- Na raiz do projeto web crie um arquivo chamado ".env"
- Dentro desse arquivo, digite "REACT_APP_MAPBOX_TOKEN =" e cole seu token logo depois.

## 🗾 Openstreetmap

Se você não quer ter esse trabalho de criar uma conta no mapbox, sem problemas.

- Entre no arquivo "OrphanagesMap.tsx", descomente o trecho de código correspondente a linha 46.
- No mesmo arquivo, comente a linha 47.

## **📱 Rodando o Happy mobile**

Entre na pasta

```bash
$ cd mobile
```

Instale as dependências

```bash
$ yarn
# ou, caso use npm
$ npm install
```

Rode o mobile

```bash
$ yarn start
# ou, caso use npm
$ npm start
```

Depois de fazer isso, irá abrir o metro bundler no seu navegador. A partir de agora você tem algumas opções para acessar o app.

### **1 - Emulador Android**

Na página do metro bundler, clique em "Run on Android device/emulator" e espere carregar. Tenha em mente que é necessário ter passado pelo processo de instalação do android sdk, etc.

### **2 - Emulador IOS**

Na página do metro bundler, clique em "Run on iOS simulator" e espere carregar.

### **3 - Seu smartphone**

Baixe o aplicativo do Expo:

- [iOS](https://itunes.apple.com/app/apple-store/id982107779)
- [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

Depois de baixar, volte a página do metro bundler e escaneie o QR Code com o app do Expo.

Se tudo deu certo, o app deve estar disponível agora! 👩🏽‍🔧

## 🌐 Rodando o Servidor

---

Entre na pasta

```bash
$ cd backend
```

Instale as dependências

```bash
$ yarn

# ou, caso use npm

$ npm install
```

Rode o servidor

```bash
$ yarn dev

# ou, caso use npm

$ npm dev
```

# 📖 Resultado
---
![Alt Text](https://raw.githubusercontent.com/RodrigoSaantos/gifs/main/happy_web.gif)

![Alt Text](https://raw.githubusercontent.com/RodrigoSaantos/gifs/main/happy-mobile-v1.gif)
