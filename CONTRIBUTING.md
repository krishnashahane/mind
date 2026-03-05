# Contributing to Mind

Thanks for your interest in contributing! Here's how to get started.

## How to Contribute

1. Fork this repository
2. Create a feature branch (`git checkout -b feat/your-feature`)
3. Make your changes
4. Commit using [conventional commits](https://www.conventionalcommits.org/) (e.g. `feat: add new model selector`)
5. Push and open a pull request

## Commit Format

```
type: short description

type = feat | fix | refactor | style | chore | docs | test
```

## Development Setup

```bash
git clone https://github.com/krishnashahane/mind.git
cd mind
npm install
npm run dev
```

## Reporting Issues

Open an issue with a clear description, steps to reproduce, and expected vs actual behavior.

## Code Style

- Follow existing patterns in the codebase
- Use TypeScript for all new files
- Run `npm run lint` before submitting
