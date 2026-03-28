<h1 align="center">Mind</h1>

<p align="center">
  <strong>Your personal, private AI assistant — running entirely in your browser.</strong>
</p>

<p align="center">
  <a href="https://github.com/krishnashahane/mind">
    <img src="https://img.shields.io/github/stars/krishnashahane/mind?style=flat-square" alt="Stars" />
  </a>
  <a href="https://github.com/krishnashahane/mind/fork">
    <img src="https://img.shields.io/github/forks/krishnashahane/mind?style=flat-square" alt="Forks" />
  </a>
  <a href="https://github.com/krishnashahane/mind/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/krishnashahane/mind?style=flat-square" alt="License" />
  </a>
</p>

---

## What is Mind?

Mind is a fully client-side AI chat application that uses WebGPU to run open-source large language models directly inside your browser. Nothing leaves your machine — no API keys, no cloud servers, no data collection. Just you and the model, running locally.

## Key Highlights

- **Zero data leaves your device** — every model runs on your hardware via WebGPU. Your conversations stay yours.
- **Works offline** — after the first model download, no internet connection is needed.
- **Persistent chat history** — conversations are saved in your browser's local storage across sessions.
- **Multi-model support** — switch between Gemma, Llama 2/3, Mistral, DeepSeek, Qwen, and more.
- **File conversations** — drop in PDFs, code files, or text documents and ask questions about them. Embeddings are computed locally using Xenova Transformers.
- **Custom memory** — set persistent instructions so the AI remembers your preferences across chats.
- **Export anywhere** — save conversations as JSON or Markdown with one click.
- **Voice input** — speak your prompts using the browser's built-in speech recognition.
- **Response regeneration** — not happy with an answer? Regenerate it instantly.
- **Responsive layout** — works on desktop and mobile (WebGL-capable devices).
- **Dark & light themes** — toggle between modes to suit your preference.
- **Markdown & syntax highlighting** — AI responses render rich markdown with code blocks highlighted.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS, Radix UI, Framer Motion |
| AI Runtime | WebLLM (MLC) |
| Embeddings | Xenova Transformers + LangChain |
| State | Zustand (persisted) |
| Language | TypeScript |

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A browser with WebGPU support (Chrome 113+, Edge 113+)

### Local Development

```bash
# Clone the repository
git clone https://github.com/krishnashahane/mind.git
cd mind

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start chatting.

### Production Build

```bash
npm run build
npm run start
```

### Docker

```bash
docker build -t mind .
docker run -d -p 3000:3000 mind
```

Or with Docker Compose:

```bash
docker compose up
```

## Hardware Requirements

WebGPU models need GPU memory to run:

| Model Size | GPU Memory Required |
|-----------|-------------------|
| 3B parameters | ~3 GB |
| 7B parameters | ~6 GB |

Smaller models may struggle with document embeddings compared to larger ones.

## Browser Compatibility

WebGPU is enabled by default in Chrome and Edge (113+). Firefox support is experimental — check [MDN compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API#browser_compatibility) for details.

## Project Structure

```
mind/
  src/
    app/          # Next.js app router pages & layouts
    components/   # React components (chat, sidebar, UI primitives)
    hooks/        # Custom hooks (chat store, memory, speech)
    lib/          # Utilities, model config, types, workers
    providers/    # Context providers (theme, WebLLM engine)
  public/         # Static assets (icons, model logos)
```

## Roadmap

- [ ] Multi-file embeddings per session
- [ ] Prompt template library
- [ ] Image generation support
- [ ] PWA with service worker caching

## License

[MIT]
