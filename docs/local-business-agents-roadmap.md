# Local Business Agents - Build Roadmap

**Strategic Initiative:** Expand CIS module with local business-focused agents that help small businesses create content, align strategy, and grow.

**Current Status:** 6 CIS agents built (Carson, Maya, Dr. Quinn, Victor, Sophia, Elena)

**Target:** 15+ additional specialized agents for local business needs

---

## 📊 Priority Matrix

| Priority | Agent Name                      | Effort | Impact | Base Workflow       | Status      |
| -------- | ------------------------------- | ------ | ------ | ------------------- | ----------- |
| 🔥 P0    | Marco - Social Media Sprint     | Medium | High   | Brainstorming       | Not Started |
| 🔥 P0    | Valentina - Customer Journey    | Medium | High   | Design Thinking     | Not Started |
| 🔥 P0    | Diego - Review Response Coach   | Low    | High   | New + Case Study    | Not Started |
| ⭐ P1    | Lucia - Local SEO Storyteller   | Medium | High   | Storytelling        | Not Started |
| ⭐ P1    | Jade - Email List Activator     | Medium | Medium | Brainstorming       | Not Started |
| ⭐ P1    | Marco - Local Partnership       | Medium | Medium | Innovation Strategy | Not Started |
| 📈 P2    | Amara - Seasonal Campaign       | Medium | Medium | Innovation Strategy | Not Started |
| 📈 P2    | Kenji - Pricing Psychology      | Medium | Medium | Problem Solving     | Not Started |
| 📈 P2    | Zara - Competitive Intelligence | Medium | Medium | Design Thinking     | Not Started |
| 📊 P3    | Mateo - Customer Loyalty        | Medium | Medium | Innovation Strategy | Not Started |
| 📊 P3    | Simone - Employee Onboarding    | Low    | Low    | Storytelling        | Not Started |
| 📊 P3    | Omar - Crisis Communication     | Low    | Medium | Problem Solving     | Not Started |
| 🎯 P4    | Freya - Local Event Amplifier   | Medium | Medium | New Workflow        | Not Started |
| 🎯 P4    | Iris - Brand Voice Consistency  | Low    | Medium | Case Study + Story  | Not Started |
| 🎯 P4    | Tomas - Google My Business Opt  | Low    | High   | New Workflow        | Not Started |

---

## 🔥 Priority 0 - Build First (Highest Impact)

### 1. Marco - Social Media Sprint Planner 📱

**Build Complexity:** Medium
**Expected Impact:** Very High
**Time Investment:** 45-90 minutes per business

#### Agent Definition

```yaml
agent:
  metadata:
    id: '{bmad_folder}/cis/agents/social-media-sprint-planner.md'
    name: Marco
    title: Social Media Sprint Planner
    icon: 📱
    module: cis

  persona:
    role: Social Media Strategy Coach + Content Calendar Architect
    identity: Energetic social media coach with 15+ years helping local businesses build authentic online presence. Former restaurant marketer who built 10k+ local followers on zero budget. Expert in platform-specific content, batching strategies, and local engagement tactics.
    communication_style: Fast-paced, energetic, practical. Talks in bullet points and action items. "Let's GO!" energy with realistic timelines for busy owners.
    principles: Consistency beats perfection. Batch content to save time. Platform-specific content performs better. Local tie-ins drive engagement. Show your personality, not just your products.

  menu:
    - trigger: social-sprint
      exec: '{project-root}/{bmad_folder}/cis/workflows/social-media-sprint/workflow.yaml'
      description: Create 30-day social media content calendar in 30 minutes
```

#### Workflow Structure

**Name:** `social-media-sprint`
**Output:** Social media content calendar (CSV or Notion template)

**Interview Phases (8 steps, 30-45 min):**

1. **Business Discovery** (5 min)
   - Business type, location, target audience
   - Current social media presence
   - Goals (awareness, foot traffic, sales, community)

2. **Platform Selection** (3 min)
   - Which platforms matter (Instagram, Facebook, TikTok, LinkedIn)
   - Current follower counts and engagement
   - Time available for content creation

3. **Content Pillars** (7 min)
   - What makes business unique
   - Behind-the-scenes opportunities
   - Educational content ideas
   - Community involvement
   - Product/service showcases

4. **Local & Seasonal Hooks** (5 min)
   - Upcoming local events
   - Seasonal trends
   - Holidays and awareness days
   - Business milestones/anniversaries

5. **Content Format Mix** (5 min)
   - Stories vs Posts vs Reels preferences
   - Photo vs Video capabilities
   - User-generated content opportunities
   - Testimonial integration

6. **Voice & Style** (5 min)
   - Brand personality (playful, professional, educational, inspiring)
   - Hashtag strategy
   - Caption length preference
   - Call-to-action patterns

7. **Calendar Generation** (5 min)
   - 30-day content calendar
   - Platform-specific variations
   - Batching schedule recommendations
   - Content creation workflow

8. **Template Delivery** (5 min)
   - Caption templates
   - Hashtag banks
   - Content batching checklist
   - Scheduling tool recommendations

#### CSV Technique Library: `social-media-techniques.csv`

**30+ techniques across categories:**

- Content Pillars (Educational, Entertainment, Engagement, Sales)
- Post Types (Carousel, Reel, Story, Live)
- Local Hooks (Events, Seasons, Community)
- Engagement Tactics (Questions, Polls, UGC, Contests)
- Platform-Specific Best Practices

#### Output Template: `social-calendar.csv`

```csv
date,platform,post_type,content_pillar,hook,caption_idea,hashtags,visual_idea,cta
2024-02-01,Instagram,Reel,Behind-Scenes,Valentine's Prep,"Watch us prep 100 Valentine's arrangements...","#LocalFlorist #ValentinesDay #BTS","Time-lapse arrangement","Book yours now!"
```

**Alternative:** Notion template, Google Sheets, or Airtable export

---

### 2. Valentina - Customer Journey Cartographer 🗺️

**Build Complexity:** Medium
**Expected Impact:** Very High
**Time Investment:** 60-90 minutes per business

#### Agent Definition

```yaml
agent:
  metadata:
    id: '{bmad_folder}/cis/agents/customer-journey-cartographer.md'
    name: Valentina
    title: Customer Journey Cartographer
    icon: 🗺️
    module: cis

  persona:
    role: Customer Experience Designer + Journey Mapping Specialist
    identity: UX researcher who fell in love with local retail. 12+ years mapping customer experiences for brick-and-mortar businesses. Expert in identifying friction points, designing "wow" moments, and creating loyalty loops. Believes every touchpoint is an opportunity.
    communication_style: Visual thinker who speaks in journey stages and touchpoints. Uses mapping language naturally. Empathetic to customer frustrations. Celebrates small improvements that create big impacts.
    principles: Walk in customer's shoes. Map the actual journey, not the ideal. Friction points are gold mines. Small wow moments build loyalty. First impressions and last impressions matter most.

  menu:
    - trigger: map-journey
      exec: '{project-root}/{bmad_folder}/cis/workflows/customer-journey-mapping/workflow.yaml'
      description: Map customer experience from discovery to loyalty
```

#### Workflow Structure

**Name:** `customer-journey-mapping`
**Base:** Design Thinking workflow (5 phases adapted)
**Output:** Visual customer journey map + improvement action plan

**Interview Phases (10 steps, 60-90 min):**

1. **Business Context** (5 min)
   - Business type, offerings, location
   - Target customer profile
   - Current customer acquisition methods

2. **Discovery Phase - How They Find You** (10 min)
   - Online discovery (Google, social, reviews)
   - Offline discovery (signage, word-of-mouth, drive-by)
   - Referral sources
   - First touchpoint analysis

3. **Awareness to Consideration** (10 min)
   - Website/social media experience
   - Information availability
   - Comparison to competitors
   - Decision triggers

4. **First Visit/Purchase Experience** (15 min)
   - Physical arrival (parking, entrance, first impression)
   - Greeting and welcome
   - Service/product selection process
   - Payment and checkout
   - Departure experience

5. **Friction Point Identification** (10 min)
   - Where do customers get stuck?
   - Common complaints or confusion
   - Abandonment points
   - Negative review themes

6. **Repeat Customer Differences** (10 min)
   - Loyalty drivers
   - Why customers return
   - VIP customer patterns
   - Relationship building moments

7. **Emotional Journey Mapping** (5 min)
   - Emotional highs and lows
   - Anxiety or excitement moments
   - Trust-building touchpoints
   - Delight opportunities

8. **Competitive Comparison** (5 min)
   - What competitors do better
   - What you do better
   - Unique touchpoints
   - Differentiation opportunities

9. **Journey Map Creation** (5 min)
   - Visual map across stages
   - Touchpoint inventory
   - Friction points highlighted
   - Opportunity areas marked

10. **Quick Wins & Roadmap** (10 min)
    - 10 quick improvements (0-30 days)
    - Medium-term enhancements (1-3 months)
    - Long-term transformation ideas
    - Prioritization framework

#### CSV Technique Library: `journey-mapping-techniques.csv`

**25+ techniques:**

- Discovery (Search behavior, Referral analysis, First impression audit)
- Consideration (Information design, Trust signals, Social proof)
- Experience (Touchpoint mapping, Friction analysis, Delight moments)
- Retention (Loyalty loops, Win-back strategies, VIP recognition)
- Measurement (NPS, Customer effort score, Journey analytics)

#### Output Template: `journey-map.md`

**Visual Markdown output with:**

- Mermaid diagram of customer journey
- Touchpoint inventory table
- Friction point analysis
- Opportunity matrix
- Action plan with priorities

---

### 3. Diego - Review Response Coach ⭐

**Build Complexity:** Low (fastest to build)
**Expected Impact:** Very High
**Time Investment:** 30-45 minutes per business

#### Agent Definition

```yaml
agent:
  metadata:
    id: '{bmad_folder}/cis/agents/review-response-coach.md'
    name: Diego
    title: Review Response Coach
    icon: ⭐
    module: cis

  persona:
    role: Reputation Management Expert + Review Strategy Specialist
    identity: Former hospitality manager who turned 100+ struggling businesses around through review management. Expert in crafting authentic responses that turn critics into advocates. Believes every review is an opportunity. Teaches "turn lemons into lemonade" philosophy.
    communication_style: Empathetic, solution-focused, authenticity-driven. Teaches response frameworks without sounding robotic. Celebrates the art of the genuine apology. Loves finding patterns in reviews that reveal business strengths.
    principles: Respond to ALL reviews, good and bad. Generic templates are death. Show personality. Own mistakes, share solutions. Use reviews as marketing intel. Thank critics for helping you improve.

  menu:
    - trigger: review-coach
      exec: '{project-root}/{bmad_folder}/cis/workflows/review-response-coaching/workflow.yaml'
      description: Learn to respond to reviews authentically and strategically
```

#### Workflow Structure

**Name:** `review-response-coaching`
**Base:** Hybrid of Case Study Creator (voice learning) + Problem Solving (root cause)
**Output:** Custom review responses + review generation strategy

**Interview Phases (7 steps, 30-45 min):**

1. **Review Analysis** (10 min)
   - Paste 5-10 recent reviews (mix of good and bad)
   - Pattern identification (common praises, common complaints)
   - Star rating distribution
   - Response rate current state

2. **Brand Voice Extraction** (5 min)
   - How do you naturally respond to customer feedback?
   - Formality level preference
   - Personality to showcase
   - Voice guidelines

3. **Common Complaint Deep Dive** (10 min)
   - Recurring negative themes
   - What you've done to address them
   - What's outside your control
   - How to communicate improvements

4. **Positive Review Leverage** (5 min)
   - What are you proud of that reviews mention
   - Themes to amplify
   - Testimonial opportunities
   - Marketing angle extraction

5. **Response Template Creation** (10 min)
   - **Positive reviews:** Gratitude + personality + invitation
   - **Constructive reviews:** Acknowledgment + action + resolution
   - **Negative reviews:** Empathy + ownership + solution + offline follow-up
   - **Fake/unfair reviews:** Professional, factual correction

6. **Review Generation Strategy** (5 min)
   - When to ask for reviews
   - How to ask (templates)
   - Channels (Google, Yelp, Facebook)
   - Timing strategies

7. **Practice & Refinement** (5 min)
   - Generate responses for actual reviews
   - Refine based on feedback
   - Create response workflows
   - Ongoing monitoring strategies

#### CSV Technique Library: `review-techniques.csv`

**20+ techniques:**

- Analysis (Pattern recognition, Sentiment analysis, Competitive benchmarking)
- Response (Empathy frameworks, Solution crafting, Personality injection)
- Generation (Timing, Channels, Incentives, Follow-up)
- Damage Control (Fake review handling, Crisis responses, Public vs private)

#### Output Template: `review-strategy.md`

**Includes:**

- Voice guidelines for reviews
- Response templates (4-5 scenarios)
- Actual responses for submitted reviews
- Review request templates (email, SMS, in-person)
- Monthly review monitoring checklist

---

## ⭐ Priority 1 - Build Next (High Value)

### 4. Lucia - Local SEO Storyteller 🗺️

**Base Workflow:** Storytelling + Case Study Creator
**Complexity:** Medium
**Output:** SEO-optimized service pages, blog topics, GMB posts

**Key Features:**

- Local keyword research and integration
- Service page content generation
- "About Us" page that ranks and converts
- Google My Business post templates
- Location-specific landing pages
- Local link building strategies

**Interview Flow:**

1. Services & service area mapping
2. Customer search behavior analysis
3. Local keyword extraction
4. Competitor content gaps
5. Brand story with SEO integration
6. Generate 5 blog outlines + optimized pages

---

### 5. Jade - Email List Activator 📧

**Base Workflow:** Brainstorming + Problem Solving
**Complexity:** Medium
**Output:** Email templates + 12-month calendar

**Key Features:**

- Welcome series automation
- Monthly newsletter themes
- Seasonal promotion emails
- Re-engagement campaigns
- Birthday/anniversary automations
- Segmentation strategies

**Interview Flow:**

1. Current email list audit
2. Subscriber segments identification
3. Content calendar brainstorming
4. Template generation
5. Automation sequence design
6. Deliverability optimization

---

### 6. Hector - Local Partnership Matchmaker 🤝

**Base Workflow:** Innovation Strategy + Brainstorming
**Complexity:** Medium
**Output:** Partnership prospect list + collaboration campaigns

**Key Features:**

- Complementary business identification
- Co-marketing campaign ideas
- Cross-promotion strategies
- Event collaboration concepts
- Referral program structures
- Partnership pitch templates

**Interview Flow:**

1. Business goals and ideal customer
2. Current relationships inventory
3. Partnership criteria definition
4. Local business landscape analysis
5. Collaboration opportunity brainstorming
6. Pitch and outreach template creation

---

## 📈 Priority 2 - Strategic Growth Agents

### 7. Amara - Seasonal Campaign Architect 🎄

**Base:** Innovation Strategy + Storytelling
**Output:** 12-month promotional calendar

### 8. Kenji - Pricing Psychology Guide 💰

**Base:** Problem Solving + Innovation Strategy
**Output:** Pricing strategy + menu restructure

### 9. Zara - Competitive Intelligence Scout 🔍

**Base:** Design Thinking + Problem Solving
**Output:** Competitive analysis report + positioning

---

## 📊 Priority 3 - Operations & Team Agents

### 10. Mateo - Customer Loyalty Architect 🏆

**Base:** Innovation Strategy + Design Thinking
**Output:** Loyalty program design + retention campaigns

### 11. Simone - Employee Onboarding Storyteller 👥

**Base:** Storytelling + Design Thinking
**Output:** Employee handbook + training materials

### 12. Omar - Crisis Communication Strategist 🚨

**Base:** Problem Solving + Storytelling
**Output:** Crisis response playbook

---

## 🎯 Priority 4 - Niche/Specialized Agents

### 13. Freya - Local Event Amplifier 🎉

**Base:** New Workflow
**Output:** Event blueprint + promotional calendar

### 14. Iris - Brand Voice Consistency Coach 🎭

**Base:** Case Study Creator + Storytelling
**Output:** Brand voice guide + messaging templates

### 15. Tomas - Google My Business Optimizer 📍

**Base:** New Workflow
**Output:** GMB audit + 3-month post plan

---

## 🛠 Build Patterns & Templates

### Rapid Agent Development Framework

For each agent, follow this 9-step process:

#### 1. Clone Existing Workflow

```bash
# Example: Marco (Social Media Sprint) from Brainstorming
cp -r src/modules/cis/workflows/brainstorming src/modules/cis/workflows/social-media-sprint
```

#### 2. Create Agent Definition YAML

```yaml
# Template: src/modules/cis/agents/{name}.agent.yaml
agent:
  metadata:
    id: '{bmad_folder}/cis/agents/{name}.md'
    name: AgentName
    title: Agent Title
    icon: 🔥
    module: cis
  persona:
    role: Primary Role + Specialty
    identity: Background story and expertise (30-50 words)
    communication_style: How they speak and interact
    principles: Core beliefs and approaches
  menu:
    - trigger: workflow-name
      exec: '{project-root}/{bmad_folder}/cis/workflows/{workflow-name}/workflow.yaml'
      description: What this command does
```

#### 3. Design CSV Technique Library

```csv
# Pattern: {workflow-name}-techniques.csv
phase,technique_name,description,facilitation_prompts
discovery,Technique1,What it does,Question 1|Question 2|Question 3
```

**Typical phases for local business agents:**

- discovery (understand business)
- analysis (identify patterns/gaps)
- strategy (develop approach)
- generation (create content/plans)
- refinement (polish and finalize)

#### 4. Adapt Instructions.md

**Key sections to customize:**

```xml
<workflow>
  <critical>Standard workflow.xml governance</critical>

  <agent-persona>
    <!-- Voice, mission, principles -->
  </agent-persona>

  <step n="1" goal="Setup and Discovery">
    <!-- Business context gathering -->
  </step>

  <step n="2-6" goal="Core Interview">
    <!-- Phase-specific questions -->
  </step>

  <step n="7" goal="Generation">
    <!-- Create deliverable -->
  </step>

  <step n="8" goal="Refinement">
    <!-- Polish and finalize -->
  </step>

  <step n="9" goal="Export">
    <!-- Delivery and next steps -->
  </step>
</workflow>
```

#### 5. Create Output Template

**Common formats:**

- **Markdown (.md):** Strategy documents, guides, playbooks
- **MDX (.mdx):** Blog-ready content with frontmatter
- **CSV (.csv):** Calendars, content plans, data
- **YAML (.yaml):** Configuration, structured data

#### 6. Build workflow.yaml Config

```yaml
name: 'workflow-name'
description: 'Clear description of what this workflow creates'
author: 'BMad'

config_source: '{project-root}/{bmad_folder}/cis/config.yaml'
output_folder: '{config_source}:output_folder'
user_name: '{config_source}:user_name'
communication_language: '{config_source}:communication_language'
date: system-generated

installed_path: '{project-root}/{bmad_folder}/cis/workflows/{workflow-name}'
template: '{installed_path}/template.md'
instructions: '{installed_path}/instructions.md'

techniques: '{installed_path}/{workflow-name}-techniques.csv'

default_output_file: '{output_folder}/{workflow-name}-{{date}}.md'

standalone: true

web_bundle:
  name: '{workflow-name}'
  description: 'Description'
  author: 'BMad'
  web_bundle_files:
    - '{bmad_folder}/cis/workflows/{workflow-name}/instructions.md'
    - '{bmad_folder}/cis/workflows/{workflow-name}/template.md'
    - '{bmad_folder}/cis/workflows/{workflow-name}/{workflow-name}-techniques.csv'
```

#### 7. Write Deployment README.md

**Essential sections:**

- Overview & Features
- Deployment Methods (NPM, Web Bundle, IDE)
- Usage Guide (starting session, what to expect)
- Output & Export options
- Customization options
- Troubleshooting
- Examples and best practices

#### 8. Update Module Documentation

**Files to update:**

- `src/modules/cis/readme.md` - Add to agent list, workflow count
- `src/modules/cis/agents/README.md` - Add agent description
- `src/modules/cis/workflows/README.md` - Add workflow overview

#### 9. Validate and Test

```bash
# Install dependencies
npm install

# Validate agent schema
node tools/validate-agent-schema.js

# Run full test suite
npm test

# Generate web bundles
npm run bundle
```

---

## 📦 Batch Building Strategy

### Sprint 1: Social Media & Content (Week 1-2)

**Agents:** Marco, Lucia, Jade
**Theme:** Content creation and distribution
**Shared techniques:** Content brainstorming, calendar planning, platform optimization

### Sprint 2: Customer Experience (Week 3-4)

**Agents:** Valentina, Diego, Mateo
**Theme:** Customer journey and loyalty
**Shared techniques:** Journey mapping, touchpoint analysis, retention strategies

### Sprint 3: Strategy & Growth (Week 5-6)

**Agents:** Hector, Amara, Kenji
**Theme:** Business strategy and partnerships
**Shared techniques:** Competitive analysis, pricing psychology, collaboration

### Sprint 4: Operations & Brand (Week 7-8)

**Agents:** Zara, Simone, Iris
**Theme:** Internal operations and brand consistency
**Shared techniques:** Documentation, training, voice consistency

### Sprint 5: Specialized Tools (Week 9-10)

**Agents:** Omar, Freya, Tomas
**Theme:** Niche needs and tactical execution
**Shared techniques:** Crisis management, event planning, platform optimization

---

## 🎯 Success Metrics

### Per-Agent KPIs

- **Build time:** Target 2-4 hours per agent (after first 3)
- **Interview length:** 30-90 minutes
- **Output quality:** Actionable, implementable deliverables
- **Reusability:** Can be run multiple times as business evolves
- **Client satisfaction:** Positive feedback, repeat usage

### Module-Level Goals

- **Agent portfolio:** 15-20 local business agents by end of initiative
- **Technique library:** 400+ total techniques across all agents
- **Deployment:** All agents available via NPM, web bundles, 17+ IDEs
- **Documentation:** Comprehensive guides for each agent
- **Community adoption:** 100+ local businesses using agents

---

## 💡 Innovation Opportunities

### Cross-Agent Workflows

**Example: Complete Local Business Strategy Package**

1. **Valentina** → Map customer journey
2. **Zara** → Analyze competitive landscape
3. **Marco** → Build social media plan
4. **Jade** → Create email nurture sequence
5. **Elena** → Craft case study from results

### Agent Teams & Collaboration

```yaml
# src/modules/cis/teams/local-business-complete-strategy.yaml
team:
  name: 'Local Business Complete Strategy Team'
  agents:
    - valentina # Customer journey
    - zara # Competitive intel
    - marco # Social media
    - lucia # SEO content
    - jade # Email marketing
  workflow: 'Sequential handoffs with shared context'
```

### Custom Modules for Verticals

**Future consideration:** Industry-specific modules

- **Local Food & Beverage Module** (restaurants, cafes, breweries)
- **Local Services Module** (salons, gyms, professional services)
- **Local Retail Module** (boutiques, shops, galleries)

---

## 📚 Resources & References

### Existing BMAD Patterns to Follow

- **Case Study Creator (Elena)** - Voice learning, interview techniques
- **Storytelling (Sophia)** - Narrative frameworks, content generation
- **Design Thinking (Maya)** - Human-centered approach, empathy mapping
- **Brainstorming (Carson)** - Idea generation, technique libraries
- **Innovation Strategy (Victor)** - Strategic frameworks, business models

### External Research Sources

- Small business marketing research
- Local SEO best practices
- Customer experience design patterns
- Social media platform algorithms
- Review management studies

### Technical Tools & Libraries

- **CSV parsing:** For technique libraries
- **Markdown/MDX:** For content output
- **YAML:** For configuration
- **XML workflow tags:** For step processing
- **Template variables:** For dynamic content

---

## ✅ Next Actions

### Immediate (This Week)

- [ ] Choose first agent to build (Recommendation: Marco)
- [ ] Create agent directory structure
- [ ] Draft agent persona and voice
- [ ] Design CSV technique library
- [ ] Build interview question flow

### Short-term (Next 2 Weeks)

- [ ] Complete Priority 0 agents (Marco, Valentina, Diego)
- [ ] Test with 2-3 local businesses
- [ ] Gather feedback and refine
- [ ] Document patterns and learnings
- [ ] Update CIS module documentation

### Medium-term (Next Month)

- [ ] Build Priority 1 agents (Lucia, Jade, Hector)
- [ ] Create agent team workflows
- [ ] Develop vertical-specific variations
- [ ] Generate case studies from real usage
- [ ] Build community around local business agents

### Long-term (Next Quarter)

- [ ] Complete all 15 agents
- [ ] Launch Local Business Module (standalone or CIS expansion)
- [ ] Partner with local business organizations
- [ ] Create certification program for consultants
- [ ] Build SaaS platform for non-technical users

---

## 📞 Support & Contribution

### Questions or Ideas?

- Open GitHub issue with `local-business-agents` label
- Tag discussions with `#cis-local-business`
- Contribute agent ideas to this roadmap

### Want to Build an Agent?

1. Choose from Priority matrix
2. Follow 9-step build process
3. Submit PR with agent + docs
4. Coordinate to avoid duplicate work

---

**Last Updated:** 2025-01-15
**Roadmap Owner:** BMad Team
**Contributors:** Community welcome!

---

_This roadmap is a living document. As we build and learn, we'll refine the process, add new agents, and improve existing ones. The goal is to make world-class business strategy accessible to every local business owner, regardless of budget or expertise._

**Let's help local businesses thrive! 🚀**
