# Aprendendo Expo

Esse é uma aplicação que mostra a utilização de uma API que gera fatos aleatórios sobre 
gatos. A API em questão é o https://catfact.ninja/.

Para usar esse aplicativo, você deve ter o nodejs instalado na sua máquina. Durante 
o desenvolvimento, foi utilizado a v23.3. Porém, qualquer versão >v20 deve funcionar bem.

Ademais, para rodar o app você deve ter instalado em seu celular o aplicativo Expo Go.

## Tech Stack

* [Expo](https://docs.expo.dev/)
* [React Native](https://reactnative.dev/docs/getting-started)

## Rodando a aplicação

1. Clone esse repositório em uma pasta vazia com o seguinte comando:
```sh
git clone https://github.com/SynesthesiaVision/app2025.git
```

2. A seguir, navegue até a pasta:
```sh
cd app2025
```

3. Instale as dependências:
```sh
npm install
```

4. Rode a aplicação para desenvolvimento:
```sh
npx expo start
```

Aguarde um momento, quando a versão de desenvolvimento estiver pronta, deve aparecer
um QR Code no seu terminal. No aplicativo Expo Go no seu smartphone, selecione
a opção "Scan QR Code" na tela inicial e aponte para esse QR Code. Uma versão de 
desenvolvimento deve estar disponível para você navegar.

## Navegando pelo código

Comece pela pasta app. A aplicação inicial está em `/app/(tabs)/index.tsx`. Há
alguns comentários lá explicando o código. Depois, dê uma olhada na pasta `/components`.

## Conceitos e Ferramentas utilizadas

* [React Native](https://reactnative.dev/docs/getting-started):
O React Native é uma framework de desenvolvimento mobile que permite a criação 
de aplicações para Android, IOS e Web com uma única base de código.

Ela é baseada na framework React (que é voltada para Web). A sacada de ambas as
frameworks é que você consegue usar HTML para dentro do código javascript, em
arquivos especiais que chamamos `.jsx` (ou `.tsx`, quando utilizamos typescript).

Isso facilita a criação de aplicações altamente dinâmicas e que possuem muitas
interações com os usuários.

* [Expo](https://docs.expo.dev/):
O expo é uma plataforma que facilita o desenvolvimento de aplicações React Native.
Basicamente, ele oferece uma série de funcionalidades que, sem ele, teríamos que
fazer totalmente "na mão". Vamos utilizá-lo, principalmente, para fazer o desenvolvimento
da aplicação e ver em tempo real as diferenças diretamente pelo nosso celular.