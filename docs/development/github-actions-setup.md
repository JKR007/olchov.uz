# GitHub Actions CI/CD Setup

## Overview

This project uses GitHub Actions for continuous integration (CI) to ensure code quality and catch errors before merging pull requests.

## Workflow Configuration

**File:** `.github/workflows/ci.yml`

### Triggers

The CI workflow runs automatically on:
- Pull request opened (`opened`)
- New commits pushed to an open PR (`synchronize`)
- PR reopened (`reopened`)

### Jobs

The workflow includes three parallel jobs:

1. **Lint** - Runs ESLint and Prettier checks
2. **Type Check** - Validates TypeScript types
3. **Build** - Builds the Next.js application

All jobs must pass for the PR to be mergeable.

## Local Testing

Before pushing, you can run the same checks locally:

```bash
# Run all checks
npm run lint          # ESLint
npm run format:check  # Prettier
npm run typecheck     # TypeScript
npm run build         # Build

# Auto-fix issues
npm run lint:fix      # Fix ESLint issues
npm run format        # Format code with Prettier
```

## Prettier Configuration

**File:** `.prettierrc.json`

### Settings

- **Semicolons:** Enabled
- **Trailing Commas:** ES5 style
- **Quotes:** Double quotes
- **Print Width:** 100 characters
- **Tab Width:** 2 spaces
- **Line Endings:** LF (Unix style)

### Ignored Files

See `.prettierignore` for files that are excluded from formatting (node_modules, .next, build outputs, etc.)

## ESLint + Prettier Integration

ESLint is configured to work with Prettier using `eslint-config-prettier`, which disables ESLint rules that conflict with Prettier formatting.

**File:** `eslint.config.mjs`

The Prettier config is applied last to override any conflicting ESLint rules.

## Troubleshooting

### CI Fails Locally But Passes in GitHub

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Run all checks:
   ```bash
   npm run lint && npm run format:check && npm run typecheck && npm run build
   ```

### Formatting Issues

To auto-format all files:
```bash
npm run format
```

To check formatting without changing files:
```bash
npm run format:check
```

### Type Errors

Run type checking:
```bash
npm run typecheck
```

## Next Steps

After setting up CI:
1. Install dependencies: `npm install`
2. Format existing code: `npm run format`
3. Create a test PR to verify CI works
4. Ensure all checks pass before merging

