## (SERÀ DESENVOLVIDO AINDA)

# repo_view

Um **CLI leve e rápido** escrito em **Go** que analisa qualquer diretório de código e exibe estatísticas úteis:
- 📊 **Contagem de linhas por linguagem**
- 🗂️ **Número total de arquivos analisados**
- ⚡ **Zero dependências externas** — só Go puro!

Feito para devs que querem entender rapidamente a composição de um projeto — ideal para revisões, portfólios ou curiosidade técnica.

> ✨ Inspirado em ferramentas como `tokei` e `scc`, mas construído do zero com simplicidade e clareza.

---

## 🚀 Funcionalidades

- Suporte a linguagens comuns: **JavaScript, Go, Python, HTML, CSS, TypeScript**
- Ignora automaticamente pastas como `node_modules`, `.git`, `dist`
- Saída limpa e legível no terminal
- Binário único, fácil de distribuir

---

## 🛠️ Instalação

### Opção 1: Compilar localmente (recomendado)
```bash
git clone https://github.com/Braian-de-Liz/repo_view.git
cd repo_view
go build -o repo_view .
