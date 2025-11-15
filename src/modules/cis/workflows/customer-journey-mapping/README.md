# Customer Journey Mapping - Deployment & Usage Guide

**Valentina - The Customer Journey Cartographer**
_Map complete customer experiences from discovery to loyalty with visual journey maps and actionable improvements_

---

## Overview

The Customer Journey Mapping workflow helps local businesses understand and improve their customer experience by creating visual maps that trace every touchpoint from initial discovery through loyal advocacy. In a focused 60-90 minute session, Valentina guides you through systematic analysis to identify friction points, delight opportunities, and deliver 10 quick wins.

### Features

- **28 Journey Mapping Techniques** across 5 phases (Discovery, Consideration, Experience, Friction, Delight, Retention)
- **Visual Mermaid Diagrams** - Journey maps that render in any Markdown viewer
- **10 Quick Wins** - Prioritized action plan (High Impact/Easy → Medium Impact/Moderate → refinements)
- **11-Step Interview Process** - Comprehensive journey analysis from business context to implementation
- **Emotional Arc Mapping** - Track customer feelings through the journey
- **Touchpoint Inventory** - Complete catalog of customer interactions
- **Competitive Context** - Understand your journey vs alternatives

### Interview Phases

1. **Business Context** (10 min) - Business type, customer profile, current challenges
2. **Discovery** (10 min) - How customers find you, first impressions, referral patterns
3. **Consideration** (10 min) - Research behavior, trust building, decision triggers, barriers
4. **First Experience** (15 min) - Arrival, core interaction, wait times, environment, checkout, departure
5. **Friction Analysis** (10 min) - Complaints, abandonment, confusion, accessibility
6. **Delight Opportunities** (10 min) - Wow moments, personalization, emotional peaks
7. **Retention & Loyalty** (10 min) - Follow-up, repeat drivers, churn, win-back, advocacy
8. **Competitive Context** (5 min) - Competitor analysis and differentiation
9. **Journey Map Creation** (5 min) - Visual synthesis with Mermaid diagram
10. **10 Quick Wins** (10 min) - Prioritized action plan
11. **Delivery** - Export, metrics, implementation timeline

---

## Output Deliverables

### Visual Journey Map

- **Mermaid Diagram** - Renders in GitHub, VS Code, Notion, many Markdown viewers
- **4 Journey Stages** - Discovery → Consideration → Experience → Retention
- **Emotional Indicators** - Customer feelings at each touchpoint

### Comprehensive Analysis

- **Touchpoint Inventory** - Table of all customer interactions
- **Friction Point Analysis** - Prioritized by severity with root causes
- **Delight Opportunity Matrix** - Ideas ranked by impact and effort
- **Emotional Journey Arc** - Peaks, valleys, and critical moments
- **Competitive Positioning** - Your journey vs competitors

### Actionable Plan

- **10 Quick Wins** - Specific improvements prioritized by impact and ease
- **Implementation Timeline** - Week-by-week rollout (Weeks 1-4, Month 2)
- **Success Metrics** - KPIs to track improvement across all stages
- **Monthly Review Checklist** - Ongoing journey optimization framework

---

## Deployment Methods

### Method 1: NPM Package Installation

```bash
# Install BMAD with CIS module
npx bmad-method@alpha install

# Select Core + CIS during setup
# Configure output folder

# Usage
@customer-journey-cartographer
/map-journey
```

### Method 2: Web Bundle for Claude Projects

1. Generate bundle: `npm run bundle`
2. Upload `web-bundles/cis/agents/customer-journey-cartographer.xml` to Claude Project
3. Start: "Let's map my customer journey"

### Method 3: Custom GPT

Create with instructions:

```
You are Valentina, the Customer Journey Cartographer. Follow the workflow to interview users about their customer experience across discovery, consideration, experience, and retention stages. Create visual journey maps with Mermaid diagrams and deliver 10 prioritized quick wins.
```

---

## Usage Guide

### Starting a Journey Mapping Session

**Basic:**

```
/map-journey
```

**With Context:**

```
/map-journey data=path/to/business-context.md
```

### What to Expect

**Total Time:** 60-90 minutes

Valentina will guide you through:

- Business and customer context
- How customers discover you
- Research and decision-making process
- Complete first-visit walkthrough
- Friction point deep-dive
- Delight opportunity brainstorming
- Retention and loyalty analysis
- Competitive positioning
- Visual map generation
- 10 quick wins action plan

### Tips for Best Results

**Be Specific About Friction**

- Real customer complaints
- Exact moments of confusion
- Where drop-offs happen
- Accessibility challenges

**Think Through Actual Journeys**

- Walk through recent customer experiences
- Include both great and terrible examples
- Note small details that matter
- Consider different customer types

**Be Honest About Gaps**

- What you don't do well
- What competitors do better
- Where you lack systems
- Current blind spots

**Bring Data If Available**

- Reviews (good and bad)
- Customer feedback
- Analytics or metrics
- Common support questions

---

## Understanding Your Journey Map Output

### Visual Mermaid Diagram

The journey diagram shows:

- **Stages**: Discovery → Consideration → Experience → Retention
- **Actions**: What customers do at each stage
- **Emotions**: How they feel (1-5 scale in Mermaid)
- **Flow**: Natural progression through journey

**Viewing Your Diagram:**

- **GitHub**: Auto-renders in README/markdown files
- **VS Code**: Install Markdown Preview Mermaid extension
- **Notion**: Paste into code block, set language to "mermaid"
- **Online**: https://mermaid.live (paste code to visualize)

### Touchpoint Inventory

Table showing:

- Every customer interaction point
- Which channel (web, phone, in-person, email, etc.)
- Current state (working well, problematic, missing)
- Improvement opportunity

Use this to audit ALL customer interactions systematically.

### Friction Point Analysis

Prioritized list of pain points:

- **High Priority**: Fix these first (biggest impact, often easiest)
- **Medium Priority**: Important but may require more effort
- **Low Priority**: Nice-to-have improvements

Each includes:

- Where in journey it occurs
- What customers experience
- Root cause analysis
- Suggested quick fix

### Quick Wins Action Plan

**10 improvements organized by priority:**

**Tier 1 (Weeks 1-2)**: High impact, easy implementation

- These deliver immediate results
- Build momentum for bigger changes
- Often low/no cost

**Tier 2 (Weeks 3-4)**: High impact, moderate effort

- Require some planning or resources
- Significant customer experience improvement
- Worth the investment

**Tier 3 (Month 2)**: Medium impact, easy wins

- Refinements and polish
- Nice-to-haves that enhance experience
- Compound with other improvements

---

## Common Use Cases

### Local Retail (Boutique, Shop, Store)

**Journey Focus:**

- Storefront first impression
- In-store navigation and discovery
- Checkout experience
- Post-purchase follow-up

**Common Friction:**

- Unclear hours/parking
- Hard to find items
- Long checkout lines
- No loyalty program

**Quick Wins Often Include:**

- Update Google Business hours/photos
- Improve signage and wayfinding
- Add mobile checkout
- Email receipt with next-visit incentive

### Service Business (Salon, Gym, Professional Services)

**Journey Focus:**

- Online booking experience
- Arrival and check-in
- Service delivery quality
- Appointment reminders

**Common Friction:**

- Booking system complexity
- Unclear pricing
- Wait time management
- Inconsistent follow-up

**Quick Wins Often Include:**

- Simplify online booking
- Display pricing clearly
- Implement SMS reminders
- Post-service feedback loop

### Restaurant/Food Service

**Journey Focus:**

- Menu discoverability
- Ordering process (dine-in, takeout, delivery)
- Food quality consistency
- Repeat visit drivers

**Common Friction:**

- Menu confusion
- Long wait times
- Order accuracy issues
- No reservation system

**Quick Wins Often Include:**

- Optimize online menu
- Add reservation system
- Implement order tracking
- Loyalty punch card/app

### E-Commerce/Online Business

**Journey Focus:**

- Product discovery
- Checkout flow
- Shipping communication
- Returns process

**Common Friction:**

- Cart abandonment
- Unclear shipping costs
- No order tracking
- Difficult returns

**Quick Wins Often Include:**

- Reduce checkout steps
- Show shipping costs earlier
- Add progress indicators
- Simplify return policy

---

## Measuring Success

### Discovery Stage Metrics

- **Website Traffic**: New visitors per month
- **Foot Traffic**: Store visitors per week
- **Source Attribution**: Where customers come from
- **First Impression Score**: Survey first-timers

**Goal**: Increase discoverability and improve first impressions

### Consideration Stage Metrics

- **Inquiry-to-Customer Rate**: How many researchers become buyers
- **Time to First Purchase**: Days from discovery to first buy
- **Bounce Rate**: Website visitors who leave immediately
- **Price Comparison**: How often you win vs competitors

**Goal**: Reduce friction in decision-making process

### Experience Stage Metrics

- **Customer Satisfaction (CSAT)**: Post-purchase survey score
- **Net Promoter Score (NPS)**: "Would you recommend us?"
- **Service Completion Rate**: Successfully finished transactions
- **Average Transaction Value**: Revenue per customer

**Goal**: Deliver excellent first-time experience

### Retention Stage Metrics

- **Repeat Purchase Rate**: % who buy again
- **Customer Lifetime Value (CLV)**: Total revenue per customer
- **Churn Rate**: % who stop coming back
- **Referral Rate**: % who recommend you
- **Days Between Visits**: Frequency of return

**Goal**: Turn first-timers into loyal advocates

---

## Monthly Journey Review Process

**Recommended: Review journey map monthly**

### Week 1 of Month

1. **Collect Data**
   - Pull metrics from all stages
   - Gather customer feedback
   - Review recent reviews
   - Note team observations

2. **Analyze Changes**
   - What improved?
   - What got worse?
   - New patterns emerged?
   - Competitive shifts?

### Week 2 of Month

3. **Update Journey Map**
   - Add new touchpoints
   - Remove outdated friction
   - Note new opportunities
   - Adjust priorities

4. **Team Review**
   - Share findings with team
   - Celebrate wins
   - Discuss challenges
   - Get frontline insights

### Week 3 of Month

5. **Set Next Priorities**
   - Choose 1-3 quick wins for next month
   - Assign owners
   - Set implementation timeline
   - Define success metrics

6. **Document & Track**
   - Update journey map file
   - Track improvements in spreadsheet
   - Note lessons learned
   - Archive before/after data

---

## Advanced Techniques

### Multi-Persona Journey Maps

Create separate maps for different customer types:

**Example: Boutique Clothing**

- Map A: Budget-conscious young professional
- Map B: High-end fashion enthusiast
- Map C: Gift shopper (not for self)

**Why**: Friction and delight opportunities differ by persona

### Channel-Specific Journeys

Map journeys by how they start:

**Example: Restaurant**

- Journey A: Dine-in customer
- Journey B: Takeout customer
- Journey C: Delivery customer

**Why**: Each channel has unique touchpoints and friction

### Seasonal Journey Variations

Account for journey changes by season/time:

**Example: Tax Prep Service**

- Jan-Feb: Early filers (organized, proactive)
- Mar-Apr: Deadline rushers (stressed, reactive)

**Why**: Customer mindset and needs vary

### Loyalty Stage Sub-Journeys

Deep-dive into loyalty progression:

- First-timer → Second visit
- Occasional → Regular
- Regular → VIP/Advocate

**Why**: Different retention strategies needed at each stage

---

## Integration with Other Workflows

### Use with Marco (Social Media Sprint)

1. Map journey with Valentina
2. Identify key touchpoints to showcase
3. Use Marco to create social content around journey stages
4. Example: "Behind the scenes of your first visit" content series

### Use with Elena (Case Study Creator)

1. Map journey for successful customer
2. Use journey insights in case study interview
3. Highlight transformation through journey stages
4. Create before/after journey comparison

### Use with Problem Solving Workflow

1. Identify major friction point
2. Use problem-solving techniques for root cause analysis
3. Generate solutions beyond quick fixes
4. Implement and re-map journey

---

## Troubleshooting

### "I don't know how customers find us"

**Solution:**

- Survey next 10 customers: "How did you hear about us?"
- Check Google Analytics (if website)
- Review Google Business insights
- Ask team for observations

### "Our journey is too complex to map"

**Solution:**

- Start with one customer type/persona
- Focus on most common path first
- Simplify to core touchpoints
- Add complexity later as needed

### "We don't have data/metrics"

**Solution:**

- Start collecting now (survey customers)
- Use anecdotal evidence initially
- Implement simple tracking (tally sheet)
- Build measurement into improvements

### "Quick wins seem obvious, why didn't we do them?"

**Solution:**

- Mapping makes hidden problems visible
- Prioritization helps focus effort
- Having plan increases accountability
- Small fixes often overlooked without systematic review

---

## Best Practices

### Before the Session

1. **Gather existing data**
   - Recent reviews
   - Customer feedback
   - Analytics if available
   - Team observations

2. **Walk your own journey**
   - Experience your business as a customer
   - Take photos of physical touchpoints
   - Test online experience
   - Note friction as you go

3. **Involve your team**
   - Get frontline staff input
   - They see friction daily
   - Ask for improvement ideas
   - Buy-in for implementation

### During the Session

1. **Be honest about problems**
   - Don't sugarcoat friction
   - Admit what you don't know
   - Share uncomfortable truths
   - Valentina won't judge!

2. **Think specific, not generic**
   - "Checkout takes 5-7 minutes" not "checkout is slow"
   - "Customers ask where bathroom is" not "navigation unclear"
   - Real examples better than generalizations

3. **Consider all customer types**
   - First-timers vs regulars
   - Different demographics
   - Different needs/goals
   - Edge cases matter

### After the Session

1. **Share the map immediately**
   - With your team
   - Get their input
   - Add missed touchpoints
   - Validate friction points

2. **Start with Quick Win #1**
   - Don't overthink
   - Implement immediately
   - Measure impact
   - Build momentum

3. **Celebrate improvements**
   - Share wins with team
   - Thank those who helped
   - Show before/after
   - Maintain energy

---

## Support & Resources

### Example Journey Maps

**View sample maps:**

- Coffee shop journey map (in repo examples)
- Retail boutique journey map
- Professional service journey map
- E-commerce journey map

### Learning Resources

- Nielsen Norman Group (UX journey mapping)
- "The Service Innovation Handbook" by Lucy Loh
- "Mapping Experiences" by Jim Kalbach

### Updates

```bash
# Check for new versions
npm view bmad-method@alpha version

# Update
npx bmad-method@alpha install --update
```

---

## License & Credits

**Customer Journey Mapping** is part of the **BMAD** framework.

- **License:** MIT
- **Author:** BMad Team
- **Version:** 1.0.0
- **Module:** CIS (Creative Intelligence Suite)

---

**Ready to map your customer journey?**

Install now:

```bash
npx bmad-method@alpha install
```

Then load Valentina and type:

```
/map-journey
```

Every touchpoint is an opportunity. Let's find them together! 🗺️✨
