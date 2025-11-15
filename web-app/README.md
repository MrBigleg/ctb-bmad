# BMAD Method - Web Interface

A beautiful, typewriter-style CLI web interface for the BMAD Method AI Workflow Orchestrator.

## Features

- 🖥️ **Terminal-style UI** - Clean, retro terminal interface with typewriter effects
- ⚡ **Fast & Modern** - Built with Vite, React, and TypeScript
- 🎨 **Beautiful Animations** - Smooth typewriter effects powered by Framer Motion
- 📱 **Responsive Design** - Works on all devices
- 🎯 **Workflow Selection** - Easy navigation through available workflows

## Tech Stack

- **Vite** - Lightning-fast build tool
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app.

### Build for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this app is using Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
# Build the app
npm run build

# Deploy the dist folder to Netlify
```

Or connect your Git repository to Netlify for automatic deployments.

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Using the Terminal Interface

1. **Start the app** - The terminal will greet you with a typewriter effect
2. **Type "list"** - See all available workflows
3. **Select a workflow** - Type the name or number of a workflow
4. **Explore** - Ask questions or describe what you want to build

### Example Commands

- `list` - Show all available workflows
- `help` - Display help information
- `clear` - Clear the terminal and start over
- Type a workflow name or number to select it

## Customization

### Modify Workflows

Edit the workflows array in `src/components/Terminal.tsx`:

```typescript
const workflows: Workflow[] = [
  { name: 'Your Workflow', description: 'Description', category: 'Category' },
  // Add more workflows
];
```

### Change Theme Colors

Edit the terminal colors in `tailwind.config.js`:

```javascript
colors: {
  terminal: {
    bg: '#0a0e14',
    text: '#b3b1ad',
    green: '#7fd962',
    // ... more colors
  },
}
```

## License

MIT
