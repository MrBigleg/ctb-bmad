# Social Media Sprint Planner - Deployment & Usage Guide

**Marco - The Social Media Sprint Planner**
_Create a complete 30-day social media content calendar in 30 minutes_

---

## Overview

The Social Media Sprint Planner is a fast-paced workflow that helps local businesses create consistent social media presence without the overwhelm. In a focused 30-45 minute session, Marco guides you through strategic questions to build a complete month of platform-specific content ideas, captions, hashtags, and batching strategies.

### Features

- **30+ Content Techniques** across 5 categories (Educational, Entertainment, Engagement, Promotional, Local Hooks)
- **Platform-Specific Strategies** for Instagram, Facebook, TikTok, and LinkedIn
- **Local & Seasonal Integration** - Tie content to community events and calendar moments
- **Content Batching Plans** - Time-saving strategies for busy business owners
- **Ready-to-Use Templates** - Caption templates and hashtag banks
- **8-Step Interview Process** - From discovery to implementation plan

### Interview Phases

1. **Business Discovery** - Type, location, audience, goals, current social presence
2. **Platform Selection** - Which platforms to focus on based on audience and time
3. **Content Pillars** - What to post (educational, entertainment, engagement, promotional)
4. **Local & Seasonal Hooks** - Timely content tied to community and calendar
5. **Content Format Mix** - How to create based on skills and assets
6. **Voice & Strategy** - Brand voice, hashtags, CTAs, engagement commitments
7. **Calendar Generation** - Complete 30-day plan with strategic content mix
8. **Batching & Implementation** - How to actually execute the plan

---

## Deployment Methods

### Method 1: NPM Package Installation (Recommended)

**For local business consultants, agencies, and recurring use**

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
   - ✅ **CIS** (Creative Intelligence Suite - includes Social Media Sprint Planner)
   - ☐ BMM (optional - software development)
   - ☐ BMB (optional - builder tools)
   - ☐ BMGD (optional - game development)

4. **Configure CIS module:**
   - Enter facilitator name
   - Set communication language (default: English)
   - Set output folder (where calendars will be saved)

5. **Complete installation:**
   - Files will be installed to `./bmad/` directory
   - Agent compiled to `./bmad/cis/agents/social-media-sprint-planner.md`
   - Workflow ready at `./bmad/cis/workflows/social-media-sprint/`

#### Verification

```bash
# Check installation
ls bmad/cis/agents/social-media-sprint-planner.md
ls bmad/cis/workflows/social-media-sprint/

# Your output folder should exist
ls bmad/cis/output/
```

#### Usage with NPM Installation

**In Claude Code, Cursor, or Windsurf:**

1. Open your project folder
2. Load the agent:
   ```
   @bmad/cis/agents/social-media-sprint-planner.md
   ```
3. Start the workflow:
   ```
   /social-sprint
   ```

**In other IDEs with agent support:**

- Load the compiled agent file: `bmad/cis/agents/social-media-sprint-planner.md`
- Execute the `/social-sprint` command

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
   web-bundles/cis/agents/social-media-sprint-planner.xml
   ```

#### Deployment to Claude Projects (Recommended)

1. **Create a new Claude Project** at claude.ai
2. **Add the bundle as Project Knowledge:**
   - Click "Add Content"
   - Select "Upload File"
   - Upload `social-media-sprint-planner.xml`
3. **Configure project instructions:**
   ```
   You are Marco, the Social Media Sprint Planner. Load and execute the social media sprint workflow to help local businesses create 30-day content calendars.
   ```
4. **Start using:**
   - Simply start a conversation: "Let's create my social media calendar"
   - Or explicitly invoke: "/social-sprint"

#### Deployment to ChatGPT

1. **Create a Custom GPT:**
   - Go to ChatGPT → "Explore GPTs" → "Create"
   - Name: "Social Media Sprint Planner - Marco"
   - Description: "Create 30-day social media calendars in 30 minutes"
2. **Upload the bundle:**
   - In "Knowledge" section, upload `social-media-sprint-planner.xml`
3. **Set instructions:**
   ```
   You are Marco, an energetic social media coach. Follow the workflow instructions in the uploaded file to interview local businesses and create complete 30-day social media content calendars with platform-specific strategies.
   ```
4. **Configure:**
   - Conversation starters: "Create my social calendar", "Plan my social media"
   - Capabilities: Enable "Code Interpreter" for file generation

---

### Method 3: IDE-Specific Deployment

The Social Media Sprint Planner works with 17+ IDEs. Here are the most popular:

#### Claude Code (VS Code Extension)

1. **Install BMAD via NPM** (see Method 1)
2. **Agent auto-loaded** from `bmad/cis/agents/`
3. **Usage:**
   - Open command palette: `Cmd/Ctrl + Shift + P`
   - Type: `@social-media-sprint-planner`
   - Or use slash command: `/social-sprint`

#### Cursor IDE

1. **Install BMAD via NPM** (see Method 1)
2. **Open Cursor settings:**
   - Cursor → Settings → Features → AI
   - Add agent path: `bmad/cis/agents/social-media-sprint-planner.md`
3. **Usage:**
   - Press `Cmd/Ctrl + L` for AI chat
   - Type: `@bmad/cis/agents/social-media-sprint-planner`
   - Execute: `/social-sprint`

---

## Usage Guide

### Starting a Social Media Sprint Session

**Option 1: Direct Command**

```
/social-sprint
```

**Option 2: With Context**
If you have brand guidelines or existing content:

```
/social-sprint data=path/to/brand-guidelines.md
```

**Option 3: Conversational**

```
Help me plan my social media for the next month
```

### What to Expect

Marco will guide you through **8 interactive steps** in 30-45 minutes:

1. **Business Discovery** (5 min)
   - Business type and location
   - Target audience
   - Current social media state
   - Goals

2. **Platform Selection** (3-5 min)
   - Which platforms to focus on
   - Time available per week
   - Priority recommendations

3. **Content Pillars** (7-10 min)
   - Educational content ideas
   - Entertainment/behind-scenes
   - Engagement tactics
   - Promotional strategy

4. **Local & Seasonal Hooks** (5 min)
   - Upcoming local events
   - Seasonal themes
   - Business milestones

5. **Content Format Mix** (5 min)
   - Comfort with photos, videos, graphics
   - Existing content assets
   - Platform-specific formats

6. **Voice & Strategy** (5 min)
   - Brand voice definition
   - Hashtag strategy
   - Call-to-action preferences
   - Engagement commitments

7. **Calendar Generation** (5 min)
   - Marco creates your 30-day calendar
   - Review and adjust
   - Strategic content distribution

8. **Batching & Implementation** (5 min)
   - Choose batching approach
   - Tool recommendations
   - First week action plan

**Total Time:** 30-45 minutes

### Tips for Best Results

**Come Prepared**

- Know your rough posting frequency goal
- Have upcoming events/promotions in mind
- Be honest about time available
- Think about what makes you unique

**Be Realistic**

- Don't overcommit on posting frequency
- Start with 1-2 platforms, not all of them
- Batching is key for consistency
- Done is better than perfect

**Think Local**

- Local tie-ins get more engagement
- Community events are content gold
- Use local hashtags for discovery
- Highlight your local identity

**Stay Flexible**

- The calendar is a guide, not a rulebook
- Adjust as you learn what works
- Repurpose high-performing content
- Seasonal adjustments are expected

---

## Output & Usage

### Calendar File Structure

Your calendar will be saved as a Markdown file with this structure:

```markdown
# 30-Day Social Media Content Calendar

**Calendar Overview**

- Platforms, frequency, content mix

**Week 1-4 Daily Plans**

- Day by day breakdown
- Platform, post type, content idea
- Caption starters, hashtags, CTAs

**Caption Templates**

- Educational, BTS, Engagement, Promotional

**Hashtag Bank**

- Local, industry, community, branded

**Batching Plan**

- Your chosen strategy and schedule

**Success Metrics**

- What to track monthly
```

### Using Your Calendar

#### With Scheduling Tools

**Recommended Tools by Platform:**

**Instagram:**

- Later (free plan)
- Meta Business Suite (free)
- Planoly (visual planning)

**Facebook:**

- Meta Business Suite (free, native)

**TikTok:**

- TikTok Creator Portal (native)

**Multi-Platform:**

- Hootsuite (paid)
- Buffer (free plan limited)

#### Batching Strategies

**Monthly Marathon** (for 30 min - 1 hour/week availability):

- One monthly content creation day
- Shoot 30-40 photos in bulk
- Write all captions in one session
- Schedule entire month
- 15 min daily for engagement

**Weekly Batch** (for 3-5 hours/week availability):

- Weekly content creation session
- Create 5-7 pieces per week
- Schedule week ahead
- 30 min daily for engagement

**Daily Fresh** (for 5+ hours/week availability):

- Create and post daily
- Most authentic and timely
- Higher engagement potential
- More time-intensive

### Tracking Success

**Monthly Metrics to Track:**

- Follower growth (net new followers)
- Engagement rate (likes + comments ÷ followers)
- Story/Reel views
- Profile visits
- Link clicks
- DMs and inquiries
- Foot traffic (if applicable)

**Adjust Based on Performance:**

- Double down on high-performing content types
- Note which days/times get best engagement
- Track which hashtags drive discovery
- Identify which CTAs get action

---

## Customization Options

### Modify Content Techniques

Edit the techniques CSV to add your own ideas:

```bash
# Open in your editor
code bmad/cis/workflows/social-media-sprint/social-media-techniques.csv
```

Add rows following this format:

```csv
category,technique_name,description,platform_fit,content_ideas
local_hooks,Your Technique,Description,All platforms,Idea1|Idea2|Idea3
```

### Adjust Marco's Persona

Edit the agent file to change his style:

```bash
code bmad/cis/agents/social-media-sprint-planner.agent.yaml
```

Modify these sections:

- `communication_style` - How he speaks
- `principles` - His guiding philosophy
- `identity` - His background and expertise

Then recompile:

```bash
npx bmad-method@alpha build social-media-sprint-planner
```

### Change Output Template

Edit the calendar template structure:

```bash
code bmad/cis/workflows/social-media-sprint/template.md
```

- Modify weekly structure
- Add/remove sections
- Customize formatting
- Change variable placeholders

---

## Sharing with Clients

### Option 1: Guided Session

**Best for:** High-touch client relationships

1. **Schedule 45-minute session** with client
2. **Run Marco yourself** during the call
3. **Ask Marco's questions** and input client responses
4. **Show them the calendar** for real-time feedback
5. **Deliver final calendar** via email after adjustments

### Option 2: Self-Service Link

**Best for:** Lead magnets, low-touch clients

1. **Host web bundle** on your website
2. **Create landing page** promoting the tool
3. **Share link** with DIY instructions
4. **Client runs Marco** independently
5. **Optional follow-up** consultation to review calendar

### Option 3: Workshop/Group Session

**Best for:** Multiple clients, community events

1. **Run Marco with one volunteer** business
2. **Group sees the process** live
3. **Everyone creates calendars** individually after
4. **Group shares insights** and ideas
5. **Follow-up support** via community group

---

## Troubleshooting

### Installation Issues

**Problem:** `npx bmad-method@alpha install` fails

**Solutions:**

- Update Node.js: `node --version` (need 16+)
- Clear NPX cache: `npx clear-npx-cache`
- Try specific version: `npx bmad-method@6.0.0-alpha.9 install`

### Workflow Issues

**Problem:** `/social-sprint` command not recognized

**Solutions:**

- Ensure agent is loaded: `@social-media-sprint-planner`
- Check file exists: `ls bmad/cis/agents/social-media-sprint-planner.md`
- Reload IDE/restart AI extension
- Try full path: `@bmad/cis/agents/social-media-sprint-planner.md /social-sprint`

**Problem:** Calendar feels too aggressive

**Solutions:**

- Reduce posting frequency in Step 2
- Choose "30 min/week" time option
- Focus on 1 platform only
- Use monthly batching strategy

**Problem:** Not enough local content ideas

**Solutions:**

- Research community calendar online
- Check local chamber of commerce events
- Follow local news and Instagram accounts
- Ask Marco for more local techniques

---

## Advanced Usage

### Integration with Other CIS Workflows

**Combine with Brainstorming:**

```
/brainstorm  # Generate content theme ideas first
/social-sprint  # Then create calendar around themes
```

**Combine with Storytelling:**

```
/story  # Craft brand narrative
/social-sprint  # Weave narrative into social calendar
```

**Combine with Case Study Creator:**

```
/case-study  # Create customer success story
# Extract quotes and angles for social content
/social-sprint  # Include case study content in calendar
```

### Vertical-Specific Calendars

**For Restaurants:**

- Heavy emphasis on food photography
- Behind-the-scenes kitchen content
- Menu highlights and specials
- Customer testimonials
- Local food events

**For Retail:**

- Product highlights and new arrivals
- Styling tips and how-to-wear
- Customer photos (UGC)
- Store events and sales
- Local shopping events

**For Service Businesses:**

- Educational tips and expertise
- Client transformations (with permission)
- Team spotlights
- Process explanations
- Local networking events

---

## Success Stories

### Sample Results

**Local Coffee Shop** (Instagram + Facebook)

- **Before:** 1-2 posts/month, 200 followers, minimal engagement
- **After 30 days:** 20 posts, +150 followers, 15% avg engagement rate
- **Key win:** Local event tie-ins drove foot traffic

**Boutique Salon** (Instagram only)

- **Before:** Inconsistent posting, 500 followers
- **After 30 days:** Daily stories + 3 posts/week, +200 followers, 20 DM inquiries
- **Key win:** Before/after content + hashtag strategy

**Professional Service** (LinkedIn)

- **Before:** Quarterly posts, 300 connections
- **After 30 days:** 2 posts/week, +75 connections, 3 client leads
- **Key win:** Educational content positioned as expert

---

## Best Practices

### Content Creation

1. **Batch shoot everything** - One photo day covers weeks of content
2. **Repurpose religiously** - One photo = Reel + Story + Static post
3. **Save high-performers** - Create "swipe file" of what works
4. **User-generated content** - Encourage and reshare customer posts
5. **Stock footage is okay** - Use Pexels, Unsplash for B-roll

### Engagement

1. **Respond within 24 hours** - To all comments and DMs
2. **Engage with others** - Comment on local accounts daily
3. **Use Stories for real-time** - Polls, questions, updates
4. **DMs for relationships** - Personal connections beat public posts
5. **Community over vanity metrics** - Engaged followers > follower count

### Sustainability

1. **Start small** - Better to nail 1 platform than fail at 3
2. **Protect your time** - Batch, schedule, set boundaries
3. **Automate wisely** - Schedule posts, but engage authentically
4. **Delegate when possible** - Team members can create content
5. **Review monthly** - Adjust what's not working

---

## Support & Resources

### Documentation

- **Main BMAD Docs:** https://github.com/bmad-code-org/bmad
- **CIS Module Guide:** `bmad/modules/cis/README.md`
- **Workflow Reference:** `bmad/core/tasks/workflow.xml`

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

**Social Media Sprint Planner** is part of the **BMAD (Breakthrough Method of Agile AI-driven Development)** framework.

- **License:** MIT
- **Author:** BMad Team
- **Version:** 1.0.0
- **Module:** CIS (Creative Intelligence Suite)

Built on the C.O.R.E. Framework (Collaboration Optimized Reflection Engine).

---

## Changelog

### Version 1.0.0 (2025-01-15)

- Initial release
- 8-step interview process (30-45 min)
- 30+ content techniques across 5 categories
- Platform-specific strategies (Instagram, Facebook, TikTok, LinkedIn)
- Local and seasonal content integration
- Content batching plans
- Caption templates and hashtag banks
- Multi-platform deployment support

---

**Ready to create consistent social content?**

Install now:

```bash
npx bmad-method@alpha install
```

Then load Marco and type:

```
/social-sprint
```

Let's build your 30-day calendar and make social media feel DOABLE! 📱🚀
