# Astro Clarity

Astro Clarity is a lightweight wrapper that seamlessly integrates Clarity analytics with Astro, making it effortless to track user interactions and performance metrics on your Astro-powered websites.

## Installation

### npm
```bash
npm install @kbyte-tech/astro-clarity
```

### Yarn
```bash
yarn add @kbyte-tech/astro-clarity
```

### pnpm
```bash
pnpm add @kbyte-tech/astro-clarity
```

## Usage

```astro
---
// file: src/layouts/Layout.astro
import Clarity from '@kbyte-tech/astro-clarity';
---
<head>
    <Clarity projectId="YOUR_PROJECT_ID" />
</head>
```