# A Vue 3 app for ABN

## How to run
### Installation
```
pnpm install
```
### Run dev mode
```
pnpm dev
```
### Run tests
```
pnpm test
```

### Architecture
I chose [Feature-sliced design](https://feature-sliced.design/docs) for the project. It is a new way of organizing Vue projects. It is a bit similar to the Domain-driven design. TLDR it is a way of organizing your project by features, not by layers. Each feature is a self-contained module that contains everything it needs to work.

So the folder structure within `src` folder is:
- `app` - contains the main app component and the main store
- `assets` - contains static assets
- `components` - contains shared components
- `entities` - contains entities that are shared across the app
- `pages` - app pages
- `shared` - shared utilities

### Dependencies
As few as possible:
- `Vue`, `Pinia`, `Vue Router`
- `Tailwind` for styling
- `virtua` for virtual scroll

### Styling
I am using TailwindCSS for styling. I am also using BEM methodology for class naming.

### Testing

## What i would improve:
- Add more tests
- Some LocalStorage features: favorite shows, own rating
- More extensive testing on Windows
- Nuxt.js for SSR and new APIs that would enable more fine-grained control over filtering/sorting
