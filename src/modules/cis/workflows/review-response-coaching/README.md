# Review Response Coaching - Deployment & Usage Guide

**Diego - The Review Response Coach**
_Transform online reviews into relationship-building opportunities_

---

## Overview

The Review Response Coach is a comprehensive workflow agent that helps business owners develop authentic, effective strategies for managing online reviews. It analyzes review patterns, extracts brand voice, and creates custom response templates that turn critics into advocates while maintaining genuine communication.

### Features

- **30+ Review Management Techniques** across 5 phases (Analysis, Response, Generation, Damage Control, Strategy)
- **Brand Voice Extraction** - Captures your authentic communication style
- **6 Custom Response Templates** - For every review scenario from 5-star to fake reviews
- **Review Generation System** - Email, SMS, and in-person request templates
- **Sustainable Monitoring Framework** - Weekly rituals and accountability systems
- **Practice-Based Learning** - Hands-on coaching with actual reviews

### Interview Phases

1. **Setup** - Business basics, review platforms, current challenges
2. **Review Analysis** - Pattern recognition in positive and negative reviews
3. **Brand Voice Extraction** - Discover authentic response style
4. **Complaint Deep Dive** - Master negative review responses
5. **Positive Review Leverage** - Amplify the good and encourage more
6. **Template Creation** - Custom response templates in your voice
7. **Review Generation Strategy** - Systematic approach to getting more reviews
8. **Practice & Refinement** - Real-world coaching with your actual reviews
9. **System Design** - Sustainable monitoring and response workflows
10. **Strategy Document** - Comprehensive guide with all templates and systems
11. **Export & Next Steps** - Implementation roadmap and metrics tracking

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
   - ✅ **CIS** (Creative Intelligence Suite - includes Review Response Coach)
   - ☐ BMM (optional - software development)
   - ☐ BMB (optional - builder tools)
   - ☐ BMGD (optional - game development)

4. **Configure CIS module:**
   - Enter your name (appears as facilitator)
   - Set communication language (default: English)
   - Set output folder (where review strategies will be saved)

5. **Complete installation:**
   - Files will be installed to `./bmad/` directory
   - Agent compiled to `./bmad/cis/agents/review-response-coach.md`
   - Workflow ready at `./bmad/cis/workflows/review-response-coaching/`

#### Verification

```bash
# Check installation
ls bmad/cis/agents/review-response-coach.md
ls bmad/cis/workflows/review-response-coaching/

# Your output folder should exist
ls bmad/cis/output/
```

#### Usage with NPM Installation

**In Claude Code, Cursor, or Windsurf:**

1. Open your project folder
2. Load the agent:
   ```
   @bmad/cis/agents/review-response-coach.md
   ```
3. Start the workflow:
   ```
   /review-coach
   ```

**In other IDEs with agent support:**

- Load the compiled agent file: `bmad/cis/agents/review-response-coach.md`
- Execute the `/review-coach` command

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
   web-bundles/cis/agents/review-response-coach.xml
   ```

#### Deployment to Claude Projects (Recommended)

1. **Create a new Claude Project** at claude.ai
2. **Add the bundle as Project Knowledge:**
   - Click "Add Content"
   - Select "Upload File"
   - Upload `review-response-coach.xml`
3. **Configure project instructions:**
   ```
   You are Diego, the Review Response Coach. Load and execute the review response coaching workflow to help business owners develop authentic review management strategies.
   ```
4. **Start using:**
   - Simply start a conversation: "Help me with review responses"
   - Or explicitly invoke: "/review-coach"

#### Deployment to ChatGPT

1. **Create a Custom GPT:**
   - Go to ChatGPT → "Explore GPTs" → "Create"
   - Name: "Review Response Coach - Diego"
   - Description: "Expert review management coach for local businesses"
2. **Upload the bundle:**
   - In "Knowledge" section, upload `review-response-coach.xml`
3. **Set instructions:**
   ```
   You are Diego, a reputation management expert who helps business owners respond to reviews authentically. Follow the workflow instructions to analyze reviews, extract brand voice, and create custom response templates.
   ```
4. **Configure:**
   - Conversation starters: "Help me respond to reviews", "Create my review strategy"
   - Capabilities: Enable "Code Interpreter" for file generation

#### Deployment to Google Gemini

1. **Not yet supported** - Gemini doesn't currently support custom agents/workflows
2. **Alternative:** Copy the workflow instructions manually and use conversationally

---

### Method 3: IDE-Specific Deployment

The Review Response Coach works with 17+ IDEs. Here are the most popular:

#### Claude Code (VS Code Extension)

1. **Install BMAD via NPM** (see Method 1)
2. **Agent auto-loaded** from `bmad/cis/agents/`
3. **Usage:**
   - Open command palette: `Cmd/Ctrl + Shift + P`
   - Type: `@review-response-coach`
   - Or use slash command: `/review-coach`

#### Cursor IDE

1. **Install BMAD via NPM** (see Method 1)
2. **Open Cursor settings:**
   - Cursor → Settings → Features → AI
   - Add agent path: `bmad/cis/agents/review-response-coach.md`
3. **Usage:**
   - Press `Cmd/Ctrl + L` for AI chat
   - Reference: `@review-response-coach`
   - Command: `/review-coach`

#### Windsurf Editor

1. **Install BMAD via NPM** (see Method 1)
2. **Access agent:**
   - Open Windsurf command panel
   - Load agent from `bmad/cis/agents/review-response-coach.md`
3. **Start workflow:** `/review-coach`

#### Other Supported IDEs

Works with any IDE that supports .md agent files:

- Visual Studio Code (with agent extensions)
- JetBrains IDEs (IntelliJ, WebStorm, PyCharm, etc.)
- Sublime Text
- Vim/Neovim
- Emacs
- Atom
- And 10+ more

---

## Usage Guide

### Starting a Session

**With NPM Installation:**

```
@bmad/cis/agents/review-response-coach.md /review-coach
```

**With Web Bundle:**

Simply start the conversation with Diego and say:

- "I need help responding to reviews"
- "Create a review management strategy for my business"
- "/review-coach"

### What to Prepare

For the best experience, have ready:

1. **Business Information:**
   - Business type and location
   - Target audience
   - What makes you unique

2. **Review Samples (5-10 reviews):**
   - Mix of positive, neutral, and negative
   - From your primary review platform
   - Recent reviews (last 3-6 months)

3. **Review Platforms:**
   - Which platforms matter to you (Google, Yelp, Facebook, industry-specific)
   - Approximate review count and average rating

4. **Current Challenges:**
   - What's hardest about review management?
   - What are you avoiding?
   - What takes too much time?

**Note:** You can paste reviews directly, or Diego can work with descriptions of review themes if you don't have reviews handy.

---

### What to Expect - Session Timeline

**Total Time:** 45-60 minutes

#### Phase 1: Setup & Analysis (15 min)

- Business context gathering
- Review platform identification
- Pattern recognition in your reviews
- Competitive intelligence insights

#### Phase 2: Voice & Strategy (20 min)

- Extract your authentic brand voice
- Deep dive into handling complaints
- Leverage positive reviews strategically
- Create custom response templates

#### Phase 3: Generation & Practice (15 min)

- Design review request system
- Practice with real reviews
- Hands-on coaching and refinement

#### Phase 4: Systems & Export (10 min)

- Build sustainable monitoring workflows
- Create implementation timeline
- Generate complete strategy document
- Export with next steps

---

## Output & Export

### Generated Files

Diego creates a comprehensive Review Response Strategy guide saved as:

```
bmad/cis/output/review-strategy-YYYY-MM-DD.md
```

### What's Included

**Complete strategy document with:**

✅ **Voice Guidelines** - Your brand personality for review responses

✅ **6 Custom Templates:**

- 5-star rave reviews
- 4-star positive with minor issue
- 3-star mixed reviews
- Negative reviews (legitimate complaints)
- Negative reviews (misunderstandings)
- Fake/suspicious reviews

✅ **Review Request System:**

- Email templates
- SMS templates
- In-person scripts
- Follow-up sequences

✅ **Practice Examples:**

- Your actual review responses
- Coaching notes on what works

✅ **Monitoring System:**

- Weekly checklist
- Accountability framework
- Response time commitments
- Platform monitoring setup

✅ **Implementation Timeline:**

- Week 1: Setup
- Week 2-4: Launch
- Month 2-3: Optimize
- Ongoing: Sustain

✅ **Metrics Tracking:**

- Review volume goals
- Rating targets
- Response rate commitments

### Export Formats

**Primary format:** Markdown (.md)

- ✅ Human-readable and editable
- ✅ Easy to share with team
- ✅ Convert to PDF via any Markdown tool
- ✅ Import to Notion, Google Docs, Confluence

**To Export as PDF:**

1. Open the `.md` file in any Markdown viewer
2. Use browser "Print to PDF"
3. Or use: https://www.markdowntopdf.com/

**To Share with Team:**

- Copy to Google Docs (formatting preserved)
- Upload to Notion as Markdown import
- Share the .md file directly in Slack/Teams
- Print physical copies for training

---

## Customization Options

### Industry-Specific Adaptations

Diego adapts templates and strategies for:

- **Restaurants & Food Service** - Menu feedback, service issues, food quality
- **Retail & E-commerce** - Product quality, shipping, customer service
- **Professional Services** - Expertise, responsiveness, results
- **Health & Wellness** - Bedside manner, wait times, treatment results
- **Home Services** - Quality of work, timeliness, professionalism
- **Hospitality** - Cleanliness, amenities, staff friendliness

### Voice Customization

Supports full spectrum of brand voices:

- **Super Casual** - Friendly, emoji-friendly, conversational
- **Friendly Professional** - Warm but polished
- **Corporate Professional** - Formal and traditional
- **Bold & Edgy** - Personality-driven, distinctive
- **Humble & Authentic** - Down-to-earth, genuine

### Platform-Specific Strategies

Tailored approaches for:

- **Google Business Profile** - Local SEO optimization, GMB features
- **Yelp** - Community engagement, review generation tactics
- **Facebook** - Social proof, engagement strategies
- **TripAdvisor** - Hospitality-specific responses
- **Industry Platforms** - Zillow, Healthgrades, Avvo, etc.

---

## Best Practices

### Before Your Session

1. **Gather recent reviews** - Mix of star ratings
2. **Know your pain points** - What's hardest about reviews?
3. **Think about your voice** - How do you naturally communicate?
4. **Check competitors' reviews** - What can you learn?

### During the Session

1. **Be honest about challenges** - Diego helps troubleshoot
2. **Share actual reviews** - Real examples create better templates
3. **Express your personality** - Don't hold back your authentic voice
4. **Ask questions** - Diego is here to coach, not just template

### After the Session

1. **Implement within 48 hours** - Momentum matters
2. **Start with negative reviews** - Biggest impact first
3. **Practice before perfecting** - Done beats perfect
4. **Track your metrics** - Celebrate improvements
5. **Revisit quarterly** - Update as business evolves

---

## Troubleshooting

### "I don't have time for a full session"

**Solution:**

- Minimum viable session: 30 minutes
- Focus on templates for your biggest pain point
- Skip review generation initially
- Come back for follow-up sessions

### "I don't have many reviews yet"

**Perfect use case!**

- Diego helps you build review generation strategy
- Practice with hypothetical scenarios
- Templates ready when reviews arrive
- Proactive approach prevents issues

### "My team needs this, not just me"

**Team deployment:**

- One person completes session
- Share strategy doc with team
- Diego creates team training guidelines
- Schedule team practice sessions

### "Our reviews are mostly in another language"

**Multilingual support:**

- Set `communication_language` in config
- Diego adapts templates to your language
- Cultural nuances respected
- Works for 50+ languages

### "I have multiple locations/businesses"

**Multi-location approach:**

- Complete session for primary location
- Adapt templates for other locations
- Location-specific voice adjustments
- Centralized monitoring system

---

## FAQs

**Q: How long does a typical session take?**
A: 45-60 minutes for complete strategy. 30 minutes minimum for core templates.

**Q: Do I need to share my actual reviews?**
A: Recommended but not required. Diego can work with described themes and scenarios.

**Q: Will the templates sound robotic?**
A: No! Diego specifically extracts YOUR voice and creates templates that sound authentically you. They're starting points for personalization, not rigid scripts.

**Q: Can I update my strategy later?**
A: Yes! Run the workflow again as your business evolves, or manually edit the strategy document.

**Q: Does this work for B2B businesses?**
A: Absolutely! Works for any business with online reviews - B2C, B2B, professional services, e-commerce, brick-and-mortar.

**Q: What if I have negative reviews about things I can't control?**
A: Diego helps craft responses that acknowledge concerns while explaining constraints professionally. You'll practice these scenarios.

**Q: Can I use this for my consulting clients?**
A: Yes! Consultants use Diego to create review strategies for clients. The output is customized per business.

**Q: Do you recommend review management tools?**
A: Diego provides guidance on free and paid tools based on your needs. Not required for basic review management.

---

## Use Cases

### Restaurant Owner

**Challenge:** Overwhelmed by negative reviews about wait times and food issues
**Solution:** Diego helps craft empathetic responses that showcase commitment to quality, plus proactive review generation from happy diners
**Result:** Authentic voice, faster response time, system for generating positive reviews

### Salon Owner

**Challenge:** Great 5-star reviews but never sure how to respond
**Solution:** Custom templates that thank clients, mention team members, and invite return bookings
**Result:** Stronger client relationships, increased rebooking rate

### Consultant/Agency

**Challenge:** Managing reviews for multiple clients with different voices
**Solution:** Run Diego session for each client, create voice-specific templates
**Result:** Consistent quality across all clients, efficient response system

### E-commerce Store

**Challenge:** Product quality complaints mixed with shipping issues
**Solution:** Separate templates for controllable vs. carrier issues, with solution-focused language
**Result:** Improved customer satisfaction, clear ownership of issues

### Service Business

**Challenge:** Rare reviews, mostly from unhappy customers
**Solution:** Review generation strategy to surface happy customers, damage control for negatives
**Result:** Balanced review portfolio, proactive reputation management

---

## Examples & Samples

### Sample Template Output (Casual Restaurant)

**5-Star Response Template:**

```
{{customer_name}} - this made our day! 🌟 So glad you loved the {{specific_dish_they_mentioned}}. {{team_member}} is going to be so excited to hear this! Thanks for being awesome, and we can't wait to see you again soon!
```

### Sample Template Output (Professional Service)

**Negative Review Response Template:**

```
Thank you for sharing this feedback. I sincerely apologize that your experience didn't meet the standards we strive for at {{company_name}}. {{Specific acknowledgment of their concern}}.

Here's what we're doing to address this: {{Specific action or change}}.

I'd appreciate the opportunity to discuss this further and make things right. Please contact me directly at {{email}} or {{phone}}.

We're committed to continuous improvement, and your feedback helps us get better.

{{Your name}}
{{Title}}
```

---

## Advanced Features

### Team Training Mode

If you have staff responding to reviews:

- Diego creates team guidelines doc
- One-page voice reference
- Approval workflows
- Escalation rules

### Competitive Intelligence

During review analysis, Diego identifies:

- What competitors do well (review themes)
- Gaps you can fill
- Positioning opportunities
- Market insights from customer language

### Local SEO Optimization

Review responses can boost local search:

- Diego identifies keywords in reviews
- Suggests natural incorporation in responses
- Geo-specific language recommendations
- Review generation timing for SEO impact

### Review-to-Content Pipeline

Transform reviews into marketing:

- Testimonial harvesting from 5-star reviews
- FAQ content from common questions
- Social media content from praise
- Website copy from authentic customer language

---

## Integration with Other BMAD Agents

Diego works great standalone, but pairs well with:

- **Elena (Case Study Creator)** - Turn review transformations into case studies
- **Marco (Social Media Sprint)** - Repurpose review testimonials for social
- **Valentina (Customer Journey Mapper)** - Use review insights to improve journey
- **Sophia (Storyteller)** - Craft "about us" content using review themes

---

## Support & Resources

### Getting Help

- **Documentation:** https://docs.bmad.dev
- **GitHub Issues:** https://github.com/bmad-code-org/bmad/issues
- **Community:** https://discord.gg/bmad-dev

### Learning Resources

- **Review Management Best Practices** - In Diego's technique library
- **Platform Guidelines** - Google, Yelp, Facebook review policies
- **Voice Development** - Building authentic brand communication

### Staying Updated

- Diego's technique library is regularly updated
- New platform strategies added as review ecosystems evolve
- Voice extraction methods improve over time

---

## Version History

**v1.0** - Initial release (2025-01-15)

- 30+ review management techniques
- 6 response template types
- Multi-platform support
- Voice extraction system
- Review generation strategies
- Sustainable monitoring frameworks

---

## Credits

**Agent Designer:** BMad Team
**Workflow Type:** Hybrid (Case Study Creator + Problem Solving base)
**Module:** CIS (Creative Intelligence Suite)
**Persona:** Diego - Review Response Coach

---

## License

Part of the BMAD Creative Intelligence Suite. See project root for license details.

---

## Next Steps

1. **Install** using your preferred method (NPM recommended)
2. **Prepare** your review samples and business context
3. **Start** the workflow: `/review-coach`
4. **Implement** your custom strategy within 48 hours
5. **Track** metrics and celebrate improvements!

**Ready to turn reviews into relationships? Let's get started! 🚀**

---

_For questions, issues, or feedback about the Review Response Coach, open an issue on GitHub or reach out via Discord._
