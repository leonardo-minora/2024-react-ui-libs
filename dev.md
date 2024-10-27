## criar projeto com vite


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

## configurar shadcn

```bash
[react-shadcn-ui]$ pnpm install -D tailwindcss postcss autoprefixer
[react-shadcn-ui]$ npx tailwindcss init -p
[react-shadcn-ui]$ pnpm i -D @types/node
[react-shadcn-ui]$ pnpm dlx shadcn@latest init

# erro na validação do tailwid

# usei a configuração do site do tailwind
https://tailwindcss.com/docs/guides/vite

# necessário de configurar o arquivo /src/index.css

[react-shadcn-ui]$ pnpm dlx shadcn@latest init
# responder as perguntas

[react-shadcn-ui]$ 

```

### exemplo da rocketseat de jan/2024

https://www.youtube.com/watch?v=er_QPBldsXE

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

https://lucide.dev/icons/