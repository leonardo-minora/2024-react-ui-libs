# shadcn-ui - Aula Prática sobre bibliotecas de componentes de interface gráfica

- participantes: [Leonardo A. Minora](https://github.com/leonardo-minora)
- Objetivo: desenvolvimento de uma página de login com a lib ui [shadcn](https://ui.shadcn.com/)

**para executar o projeto**
```bash
npm install
npm run dev
```

**sumário**
1. Testes antes de iniciar o projeto
2. Montando a tela de login

## 1. testes antes de iniciar o projeto
1. criar projeto vite
2. configurar shadcn
3. exemplo da rocketseat de jan/2024
4. exemplo da DevClub PRO


### 1.1. criar projeto com vite


```bash
$ npm create vite@latest
> npx
> create-vite

✔ Project name: … react-shadcn-ui
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /home/minora/minora/2024/react-shadcn-ui...

Done. Now run:

  cd react-shadcn-ui
  npm install
  npm run dev

$ cd react-shadcn-ui

[react-shadcn-ui]$ code .

[react-shadcn-ui]$ pnpm i
Packages: +192
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 229, reused 179, downloaded 13, added 192, done

dependencies:
+ react 18.3.1
+ react-dom 18.3.1

devDependencies:
+ @eslint/js 9.12.0
+ @types/react 18.3.11
+ @types/react-dom 18.3.1
+ @vitejs/plugin-react 4.3.2
+ eslint 9.12.0
+ eslint-plugin-react-hooks 5.1.0-rc-fb9a90fa48-20240614
+ eslint-plugin-react-refresh 0.4.12
+ globals 15.11.0
+ typescript 5.6.3
+ typescript-eslint 8.10.0
+ vite 5.4.9

Done in 20.5s

[react-shadcn-ui]$ git init
Initialized empty Git repository in /home/minora/minora/2024/react-shadcn-ui/.git/

[react-shadcn-ui]$ git add .gitignore

[react-shadcn-ui]$ git commit -m "atualizado o gitignore com arquivos de locks"
[main (root-commit) 2b7fd85] updated gitignore with locks files
 1 file changed, 29 insertions(+)
 create mode 100644 .gitignore

[react-shadcn-ui]$ git add eslint.config.js index.html package.json public src tsconfig.* vite.config.ts 
[react-shadcn-ui]$ git commit -m "created react project with vite"
[main 52ffd56] created react project with vite
 14 files changed, 288 insertions(+)
 create mode 100644 eslint.config.js
 create mode 100644 index.html
 create mode 100644 package.json
 create mode 100644 public/vite.svg
 create mode 100644 src/App.css
 create mode 100644 src/App.tsx
 create mode 100644 src/assets/react.svg
 create mode 100644 src/index.css
 create mode 100644 src/main.tsx
 create mode 100644 src/vite-env.d.ts
 create mode 100644 tsconfig.app.json
 create mode 100644 tsconfig.json
 create mode 100644 tsconfig.node.json
 create mode 100644 vite.config.ts

[react-shadcn-ui]$ 
```

### 1.2. configurar shadcn

```bash
[react-shadcn-ui]$ pnpm install -D tailwindcss postcss autoprefixer
[react-shadcn-ui]$ npx tailwindcss init -p

[react-shadcn-ui]$ pnpm i -D @types/node
[react-shadcn-ui]$ pnpm dlx shadcn@latest init

# erro na validação do tailwind

# usei a configuração do site do tailwind
https://tailwindcss.com/docs/guides/vite

# necessário de configurar o arquivo /src/index.css

[react-shadcn-ui]$ pnpm dlx shadcn@latest init
# responder as perguntas

[react-shadcn-ui]$ 

```

### 1.3. exemplo da rocketseat de jan/2024

https://www.youtube.com/watch?v=er_QPBldsXE

instalação segue o tutorial do shadcn-ui mas apenas complementando com o tutorial de instalação do tailwind funcionou.

```bash
[react-shadcn-ui]$ pnpm dlx shadcn@latest add button table dialog input label pagination 
✔ Checking registry.
✔ Installing dependencies.
✔ Created 6 files:
  - src/components/ui/button.tsx
  - src/components/ui/table.tsx
  - src/components/ui/dialog.tsx
  - src/components/ui/input.tsx
  - src/components/ui/label.tsx
  - src/components/ui/pagination.tsx

```

links utilizados:
- https://www.radix-ui.com/
- https://lucide.dev/icons/
- https://fonts.google.com/

### 1.4. exemplo da DevClub PRO

https://www.youtube.com/watch?v=EDpnTZdQSLs

instalação segue o tutorial do shadcn-ui mas apenas complementando com o tutorial de instalação do tailwind funcionou.

```bash
[react-shadcn-ui]$ pnpm dlx shadcn@latest add card input label separator carousel

```

links utilizados:
- https://storyset.com/
- https://www.colorhexa.com/7c3aed



## 2. Montando a tela de login

1. Criar projeto com vite
2. Limpar código-fonte do projeto inicial
3. Instalar bibliotecas do shadcn-ui
4. Instalar componentes do shadcn-ui
5. Montar tela de login

### 2.1. Criar projeto com vite

já estava criado conforme subitem de **testes antes de iniciar o projeto**/**criar projeto com vite**

fiz `git checkout -b 01-pagina_de_login` para criar uma branch para trabalhar no projeto.


### 2.2. Limpar código-fonte do projeto inicial

arquivos modificados:
- `./index.html`
- `./src/App.tsx`
- `./src/main.tsx`

Arquivo apagado:
- `./src/App.css`


### 2.3. Instalar bibliotecas do shadcn-ui

https://ui.shadcn.com/docs/installation/vite

configurar o chadcn-ui:
1. `pnpm add -D tailwindcss postcss autoprefixer`
2. `npx tailwindcss init -p`
3. modificar o arquivo `./src/index.css`
4. modificar o arquivo `./tailwind.config.js`
5. modificar os arquivos `./tsconfig.json` e `./tsconfig.app.json`
6. `pnpm i -D @types/node`
7. modificar o arquivo `./vite.config.ts`
8. `pnpm dlx shadcn@latest init`

configurar fontes do google:
1. selecionar fontes no google fontes https://fonts.google.com/
2. copiar código embed / web
3. colar o código em `html`/`head` no arquivo `./index.html`
4. modificar `./src/index.css`
   `--font-family-google: "Open Sans", "DM Sans", sans-serif;`
5. modificar `./tailwind.config.js`
   `fontFamily: { sans: ['var(--font-family-google)'], },`

### 2.4. Instalar componentes do shadcn-ui

`pnpm dlx shadcn@latest add card input label separator carousel`

### 2.5. Montar tela de login

1. copiar os componentes shadcn-ui
2. adicionar estilo com tailwind
