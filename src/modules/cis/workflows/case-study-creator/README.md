# Case Study Creator - Deployment & Usage Guide

**Elena - The Case Study Architect**
_Create compelling, authentic case studies through guided interview processes_

---

## Overview

The Case Study Creator is a comprehensive workflow agent that interviews users about their business or personal history to craft compelling case studies. It combines investigative interviewing techniques, empathy methods, and storytelling frameworks to extract authentic stories and capture the subject's unique voice and style.

### Features

- **30+ Interview Techniques** across 6 phases (Discovery, Challenge, Solution, Results, Reflection, Tone Learning)
- **Voice Learning** - Captures and mirrors the subject's communication style
- **5 Narrative Frameworks** - Adaptable story structures for different goals
- **Blog-Ready MDX Output** - Includes SEO metadata, frontmatter, and structured content
- **Guided 11-Step Process** - From initial setup through final export
- **Encouraging Facilitation** - Warm, curious interview style that draws out the best stories

### Interview Phases

1. **Setup** - Context, type, audience, goals
2. **Discovery** - Background, origin story, timeline, stakeholders
3. **Challenge** - Problems, pain points, emotional impact, failed attempts
4. **Tone Learning** - Voice analysis, language patterns, values
5. **Solution** - Decision points, actions taken, behind-the-scenes strategy
6. **Results** - Metrics, transformation, testimonials, impact
7. **Reflection** - Lessons learned, advice, patterns, future vision
8. **Framework Selection** - Choose narrative structure
9. **Framing** - Title, excerpt, tags, metadata
10. **Drafting** - Generate and refine the case study
11. **Export** - Save MDX file with export instructions

---

## Deployment Methods

### Method 1: NPM Package Installation (Recommended)

**For development teams and recurring use**

#### Prerequisites

- Node.js 16+ installed
- Git repository or project folder
- Command line access

#### Installation Steps

1. **Navigate to your project directory:**

   ```bash
   cd /path/to/your/project
   ```

2. **Run the BMAD installer:**

   ```bash
   npx bmad-method@alpha install
   ```

3. **Select modules during interactive setup:**
   - ✅ **Core** (Required - always select)
   - ✅ **CIS** (Creative Intelligence Suite - includes Case Study Creator)
   - ☐ BMM (optional - software development)
   - ☐ BMB (optional - builder tools)
   - ☐ BMGD (optional - game development)

4. **Configure CIS module:**
   - Enter your name (appears as facilitator)
   - Set communication language (default: English)
   - Set output folder (where case studies will be saved)

5. **Complete installation:**
   - Files will be installed to `./bmad/` directory
   - Agent compiled to `./bmad/cis/agents/case-study-architect.md`
   - Workflow ready at `./bmad/cis/workflows/case-study-creator/`

#### Verification

```bash
# Check installation
ls bmad/cis/agents/case-study-architect.md
ls bmad/cis/workflows/case-study-creator/

# Your output folder should exist
ls bmad/cis/output/
```

#### Usage with NPM Installation

**In Claude Code, Cursor, or Windsurf:**

1. Open your project folder
2. Load the agent:
   ```
   @bmad/cis/agents/case-study-architect.md
   ```
3. Start the workflow:
   ```
   /case-study
   ```

**In other IDEs with agent support:**

- Load the compiled agent file: `bmad/cis/agents/case-study-architect.md`
- Execute the `/case-study` command

---

### Method 2: Web Bundle Deployment

**For web-based AI platforms (Claude.ai Projects, ChatGPT, Gemini)**

#### Generate the Web Bundle

1. **Clone the BMAD repository:**

   ```bash
   git clone https://github.com/bmad-code-org/bmad.git
   cd bmad
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Generate bundles:**

   ```bash
   npm run bundle
   ```

4. **Locate the bundle:**
   ```
   web-bundles/cis/agents/case-study-architect.xml
   ```

#### Deployment to Claude Projects (Recommended)

1. **Create a new Claude Project** at claude.ai
2. **Add the bundle as Project Knowledge:**
   - Click "Add Content"
   - Select "Upload File"
   - Upload `case-study-architect.xml`
3. **Configure project instructions:**
   ```
   You are Elena, the Case Study Architect. Load and execute the case study creator workflow to help users craft compelling case studies.
   ```
4. **Start using:**
   - Simply start a conversation: "Let's create a case study"
   - Or explicitly invoke: "/case-study"

#### Deployment to ChatGPT

1. **Create a Custom GPT:**
   - Go to ChatGPT → "Explore GPTs" → "Create"
   - Name: "Case Study Creator - Elena"
   - Description: "Expert interviewer who creates compelling case studies"
2. **Upload the bundle:**
   - In "Knowledge" section, upload `case-study-architect.xml`
3. **Set instructions:**
   ```
   You are Elena, a master case study architect. Follow the workflow instructions in the uploaded file to interview users and create compelling, authentic case studies in MDX format.
   ```
4. **Configure:**
   - Conversation starters: "Create my case study", "Interview me for a case study"
   - Capabilities: Enable "Code Interpreter" for file generation

#### Deployment to Google Gemini

1. **Not yet supported** - Gemini doesn't currently support custom agents/workflows
2. **Alternative:** Copy the workflow instructions manually and use conversationally

---

### Method 3: IDE-Specific Deployment

The Case Study Creator works with 17+ IDEs. Here are the most popular:

#### Claude Code (VS Code Extension)

1. **Install BMAD via NPM** (see Method 1)
2. **Agent auto-loaded** from `bmad/cis/agents/`
3. **Usage:**
   - Open command palette: `Cmd/Ctrl + Shift + P`
   - Type: `@case-study-architect`
   - Or use slash command: `/case-study`

#### Cursor IDE

1. **Install BMAD via NPM** (see Method 1)
2. **Open Cursor settings:**
   - Cursor → Settings → Features → AI
   - Add agent path: `bmad/cis/agents/case-study-architect.md`
3. **Usage:**
   - Press `Cmd/Ctrl + L` for AI chat
   - Type: `@bmad/cis/agents/case-study-architect`
   - Execute: `/case-study`

#### Windsurf

1. **Install BMAD via NPM** (see Method 1)
2. **Agents auto-discovered** in `bmad/` folder
3. **Usage:**
   - Open Cascade (AI panel)
   - Select "Case Study Architect - Elena"
   - Type: `/case-study`

#### Cline (VS Code Extension)

1. **Install BMAD via NPM**
2. **Add to Cline config:**
   - Open `.cline/config.json`
   - Add:
     ```json
     {
       "customInstructions": "Load agents from ./bmad/cis/agents/",
       "agents": ["case-study-architect.md"]
     }
     ```
3. **Usage:** Type `/case-study` in Cline chat

#### GitHub Copilot Chat

1. **Install BMAD via NPM**
2. **Reference in chat:**
   ```
   Use the agent defined in bmad/cis/agents/case-study-architect.md to create a case study
   ```
3. **Note:** Less seamless - requires manual prompting

---

## Usage Guide

### Starting a Case Study Session

**Option 1: Direct Command**

```
/case-study
```

**Option 2: With Context**
If you have background documents (company info, product specs, existing content):

```
/case-study data=path/to/context-document.md
```

**Option 3: Conversational**

```
I'd like to create a case study about my business
```

### What to Expect

Elena will guide you through **11 interactive steps**:

1. **Setup** (2-3 minutes)
   - Type of case study
   - Target audience
   - Goals and desired length

2. **Discovery Interview** (5-10 minutes)
   - Origin story
   - Timeline of key events
   - Background context

3. **Challenge Exploration** (5-10 minutes)
   - Main problems you faced
   - Impact and metrics
   - Emotional experience

4. **Voice Learning** (3-5 minutes)
   - Your communication style
   - Distinctive phrases
   - Core values

5. **Solution Details** (10-15 minutes)
   - What you did and why
   - Step-by-step process
   - Obstacles overcome

6. **Results Documentation** (5-10 minutes)
   - Quantitative outcomes
   - Qualitative transformation
   - Stakeholder feedback

7. **Reflection** (5-10 minutes)
   - Lessons learned
   - Key success factors
   - Future vision

8. **Framework Selection** (2 minutes)
   - Choose narrative structure
   - Elena recommends based on your story

9. **Title & Framing** (3-5 minutes)
   - Craft compelling title
   - Write excerpt
   - Add metadata

10. **Draft Review** (5-15 minutes)
    - Elena presents draft
    - You provide feedback
    - Iterate until perfect

11. **Export & Delivery**
    - MDX file saved
    - Export instructions provided

**Total Time:** 45-90 minutes (varies by case study length)

### Tips for Best Results

**Be Specific**

- Numbers make stories credible (metrics, timelines, quantities)
- Concrete details are more memorable than generalities
- Examples and anecdotes bring concepts to life

**Be Honest**

- Share real challenges, not sanitized versions
- Failed attempts make success more impressive
- Vulnerability creates connection

**Be Yourself**

- Use your natural language and phrases
- Don't try to sound corporate if that's not you
- Your authentic voice is most compelling

**Ask Follow-Up Questions**

- If Elena's questions seem unclear, ask for clarification
- If you want to dive deeper on a topic, say so
- Guide the conversation to what matters most

**Take Your Time**

- No need to rush through questions
- Think about your answers
- It's okay to pause and reflect

---

## Output & Export

### MDX File Structure

Your case study will be saved as an MDX file with this structure:

```mdx
---
title: 'Your Case Study Title'
date: '2024-01-15'
author: 'Your Name'
authorTitle: 'Your Title'
excerpt: 'Compelling 2-3 sentence summary...'
tags: [business, transformation, success-story]
category: 'case-study'
published: true
---

[Full case study content with headings, sections, quotes, metrics...]
```

### Export Options

#### 1. Use as Blog Post (Easiest)

**Next.js, Gatsby, Astro, Hugo:**

```bash
# Copy to your blog's content folder
cp bmad/cis/output/case-study-2024-01-15.mdx src/content/blog/
```

**WordPress:**

- Install "Markdown Block" plugin
- Create new post
- Paste MDX content
- Frontmatter becomes post metadata

**Medium, Substack, LinkedIn:**

- Copy content (skip frontmatter)
- Paste into editor
- Format will be preserved

#### 2. Convert to PDF

**Method A: Browser Print**

1. Open MDX in VS Code with Markdown preview
2. Right-click preview → "Open in Browser"
3. Browser → Print → "Save as PDF"

**Method B: Online Converter**

1. Visit https://www.markdowntopdf.com/
2. Upload your MDX file (or copy/paste)
3. Download PDF
4. Pro tip: Remove frontmatter first for cleaner PDF

**Method C: Pandoc (Advanced)**

```bash
# Install Pandoc
brew install pandoc  # Mac
# or download from pandoc.org

# Convert to PDF
pandoc case-study.mdx -o case-study.pdf --pdf-engine=pdflatex
```

#### 3. Convert to HTML

```bash
# Using Pandoc
pandoc case-study.mdx -o case-study.html -s --metadata title="Your Title"

# Using online converter
# Visit: https://markdowntohtml.com/
```

#### 4. Convert to Google Docs

**Method A: Copy/Paste**

1. Open MDX in Markdown viewer (VS Code, Typora, etc.)
2. Select all → Copy
3. Open Google Docs → Paste
4. Formatting preserved automatically

**Method B: Upload & Convert**

1. Go to Google Drive
2. Upload the MDX file
3. Right-click → "Open with" → "Google Docs"
4. Will convert to editable document

#### 5. Convert to Word (.docx)

```bash
# Using Pandoc
pandoc case-study.mdx -o case-study.docx
```

---

## Customization Options

### Modify Interview Questions

Edit the techniques CSV to add your own questions:

```bash
# Open in your editor
code bmad/cis/workflows/case-study-creator/case-study-techniques.csv
```

Add rows following this format:

```csv
phase,technique_name,description,facilitation_prompts
discovery,Your Technique,Description here,Question 1|Question 2|Question 3
```

### Adjust Elena's Persona

Edit the agent file to change her style:

```bash
code bmad/cis/agents/case-study-architect.agent.yaml
```

Modify these sections:

- `communication_style` - How she speaks
- `principles` - Her guiding philosophy
- `identity` - Her background and expertise

Then recompile:

```bash
npx bmad-method@alpha build case-study-architect
```

### Change Output Template

Edit the MDX template structure:

```bash
code bmad/cis/workflows/case-study-creator/template.mdx
```

- Reorder sections
- Add new sections using `{{variable_name}}` placeholders
- Modify frontmatter fields
- Add custom components (if your blog supports MDX components)

### Configure Output Location

Edit the CIS config file:

```bash
code bmad/cis/config.yaml
```

Change `output_folder` to your preferred location:

```yaml
output_folder: "{project-root}/content/case-studies"
# or
output_folder: "/Users/yourname/Documents/case-studies"
```

---

## Sharing with Clients

### Option 1: Web Bundle Link

**Best for:** One-time client use, no installation needed

1. **Host the web bundle:**
   - Upload `case-study-architect.xml` to your website
   - Or use GitHub raw URL
   - Example: `https://yoursite.com/case-study-creator.xml`

2. **Share with client:**

   ```
   Hi [Client],

   I'd like to create a compelling case study about your success with [product/service].

   I've set up an AI interview agent that will guide you through questions to capture your story authentically.

   To use it:
   1. Go to Claude.ai and create a free account
   2. Create a new Project
   3. Upload this file as Project Knowledge: [your-bundle-link]
   4. Type: "Let's create a case study"

   The interview takes about 45-60 minutes. You'll get a blog-ready case study at the end!

   Let me know if you have questions.
   ```

### Option 2: Guided Session

**Best for:** High-value clients, complex stories

1. **Schedule a video call** with the client
2. **You run the agent** during the call
3. **Read Elena's questions** to the client
4. **Type their responses** or have them dictate
5. **Show them the draft** for real-time feedback
6. **Deliver final MDX** after the call

### Option 3: Collaborative Document

**Best for:** Async collaboration

1. **Run the workflow** to generate initial questions
2. **Copy questions** into a Google Doc or Notion page
3. **Share with client** to fill out at their pace
4. **Import responses** back into the workflow
5. **Generate draft** and share for review

### Option 4: Custom Client Portal

**Best for:** Agencies, recurring client work

1. **Clone the BMAD repo**
2. **Build a simple web UI** (Next.js, React, etc.)
3. **Integrate with Claude API** or OpenAI
4. **Load the case-study-creator workflow**
5. **Brand it** with your agency's identity
6. **Client fills out form** → AI generates case study

Example tech stack:

- Frontend: Next.js
- Backend: Claude API (Anthropic) or GPT-4 (OpenAI)
- Workflow: Load from `case-study-creator/instructions.md`
- Output: MDX → convert to client's preferred format

---

## Troubleshooting

### Installation Issues

**Problem:** `npx bmad-method@alpha install` fails

**Solutions:**

- Update Node.js: `node --version` (need 16+)
- Clear NPX cache: `npx clear-npx-cache`
- Try specific version: `npx bmad-method@6.0.0-alpha.9 install`

**Problem:** Files not appearing in `bmad/` folder

**Solutions:**

- Check you're in the correct directory: `pwd`
- Look for error messages during installation
- Verify write permissions: `ls -la`

### Workflow Issues

**Problem:** `/case-study` command not recognized

**Solutions:**

- Ensure agent is loaded: `@case-study-architect`
- Check file exists: `ls bmad/cis/agents/case-study-architect.md`
- Reload IDE/restart AI extension
- Try full path: `@bmad/cis/agents/case-study-architect.md /case-study`

**Problem:** Workflow stops mid-interview

**Solutions:**

- Type "continue" to resume
- Or: "Go to step 5" to jump to specific step
- Check for errors in AI response
- Try: "Let's pick up where we left off"

**Problem:** Output file not saved

**Solutions:**

- Check output folder exists: `ls bmad/cis/output/`
- Create if missing: `mkdir -p bmad/cis/output`
- Check config: `cat bmad/cis/config.yaml`
- Manual save: Ask Elena to "show me the MDX content" then copy/paste

### Output Issues

**Problem:** MDX frontmatter not rendering properly

**Solutions:**

- Ensure your blog supports MDX/frontmatter
- Try removing frontmatter and using as plain Markdown
- Check for syntax errors (missing quotes, commas)
- Validate YAML: https://www.yamllint.com/

**Problem:** PDF export looks bad

**Solutions:**

- Use a Markdown-specific PDF converter
- Try Typora (paid app but excellent export)
- Use Pandoc with custom styling:
  ```bash
  pandoc case-study.mdx -o output.pdf --pdf-engine=wkhtmltopdf --css style.css
  ```

---

## Advanced Usage

### Batch Case Studies

Create multiple case studies efficiently:

```bash
# Create a context folder
mkdir case-study-contexts

# Add context files
# case-study-contexts/client-a.md
# case-study-contexts/client-b.md

# Run workflow with each
/case-study data=case-study-contexts/client-a.md
# Complete interview...

/case-study data=case-study-contexts/client-b.md
# Complete interview...
```

### Integration with Other BMAD Workflows

**Use with BMM (Software Development):**

- Create case study about a product you built with BMM
- Reference PRD, architecture docs as context
- Showcase the development process and results

**Use with CIS Brainstorming:**

- Brainstorm case study angles first: `/brainstorm`
- Then create the case study: `/case-study`

**Use with Storytelling Workflow:**

- Craft narrative framework first: `/story`
- Import into case study for structure

### API Integration

Use the workflow programmatically:

```javascript
// Example: Node.js script
const { exec } = require('child_process');
const fs = require('fs');

// Load workflow
const workflow = fs.readFileSync('./bmad/cis/workflows/case-study-creator/workflow.yaml', 'utf8');
const instructions = fs.readFileSync('./bmad/cis/workflows/case-study-creator/instructions.md', 'utf8');

// Send to Claude API
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    model: 'claude-3-5-sonnet-20241022',
    messages: [
      {
        role: 'user',
        content: `Load this workflow: ${instructions}\n\nNow let's create a case study. Here's the context: ${contextData}`,
      },
    ],
    max_tokens: 4096,
  }),
});

// Process response...
```

---

## Support & Resources

### Documentation

- **Main BMAD Docs:** https://github.com/bmad-code-org/bmad
- **CIS Module Guide:** `bmad/modules/cis/README.md`
- **Workflow Reference:** `bmad/core/tasks/workflow.xml`

### Community

- **GitHub Issues:** Report bugs, request features
- **Discussions:** Share case studies, tips, customizations

### Updates

Check for new versions:

```bash
npm view bmad-method@alpha version
```

Update to latest:

```bash
npx bmad-method@alpha install --update
```

---

## License & Credits

**Case Study Creator** is part of the **BMAD (Breakthrough Method of Agile AI-driven Development)** framework.

- **License:** MIT
- **Author:** BMad Team
- **Version:** 1.0.0
- **Module:** CIS (Creative Intelligence Suite)

Built on the C.O.R.E. Framework (Collaboration Optimized Reflection Engine).

---

## Changelog

### Version 1.0.0 (2024-01-15)

- Initial release
- 30+ interview techniques across 6 phases
- 5 narrative frameworks
- MDX output with SEO frontmatter
- Voice learning and tone matching
- 11-step guided workflow
- Multi-platform deployment support

---

**Ready to create compelling case studies?**

Install now:

```bash
npx bmad-method@alpha install
```

Then load Elena and type:

```
/case-study
```

Your story deserves to be told. Let's craft it together! 📝✨
