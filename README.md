# Soluções Hidráulicas - Site Institucional

Site institucional para empresa especializada em detecção e reparo de vazamentos em Florianópolis e região.

## 🚀 Tecnologias

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Componentes acessíveis
- **Wouter** - Roteamento
- **React Query** - Gerenciamento de estado

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd sitewe

# Instale as dependências
npm install
```

## 🛠️ Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

## 🏗️ Build

```bash
# Gere o build de produção
npm run build

# Visualize o build localmente
npm run preview
```

## 🚀 Deploy

### Netlify

O projeto está configurado para deploy automático no Netlify. A configuração está no arquivo `client/netlify.toml`.

### Vercel

Para deploy no Vercel, use as seguintes configurações:

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### Outros provedores

Para outros provedores de hosting estático, certifique-se de:

1. Configurar o build command como `npm run build`
2. Apontar o diretório de saída para `dist/public`
3. Configurar SPA fallback para `/index.html`

## 📁 Estrutura do Projeto

sitewe/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilitários
│   │   └── ui/            # Componentes UI (shadcn/ui)
│   ├── index.html         # HTML principal
│   └── netlify.toml       # Configuração Netlify
├── shared/                 # Código compartilhado
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração Vite
├── tailwind.config.ts     # Configuração Tailwind
└── tsconfig.json          # Configuração TypeScript

## 🎨 Componentes UI

O projeto usa [shadcn/ui](https://ui.shadcn.com/) para componentes acessíveis e customizáveis.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para dispositivos móveis.

## 🔧 Configurações
