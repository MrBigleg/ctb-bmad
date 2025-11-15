# Local SEO Storytelling - Deployment & Usage Guide

**Lucia - The Local SEO Storyteller**
_Create content that ranks locally and converts visitors into customers_

---

## Overview

The Local SEO Storyteller helps local businesses create SEO-optimized content that attracts customers through Google search. Through a guided interview, Lucia researches keywords your customers actually use, crafts compelling service pages, and builds a complete 12-month content strategy.

### Features

- **30+ Local SEO Techniques** across 5 phases (Discovery, Research, Strategy, Creation, Optimization)
- **Customer Keyword Research** - Find the exact terms people search for
- **SEO-Optimized Service Pages** - Story-driven pages that rank and convert
- **12-Month Blog Calendar** - Strategic content topics that build authority
- **Google My Business Templates** - Weekly post framework for local visibility
- **Implementation Roadmap** - Phased approach for sustainable execution

### Interview Phases

1. **Setup** - Business context, current state, SEO goals
2. **Service & Area Mapping** - Define offerings and geographic targets
3. **Customer Keyword Research** - Discover search terms and language
4. **Competitor Analysis** - Find content gaps and opportunities
5. **Brand Voice** - Capture authentic communication style
6. **Service Page Creation** - Write SEO-optimized, story-driven pages
7. **Blog Planning** - Build 12-month editorial calendar
8. **Local Optimization** - About page, GMB strategy, citations
9. **Delivery** - Complete SEO content package with roadmap

---

## Deployment Methods

### Method 1: NPM Package Installation (Recommended)

**Prerequisites:**

- Node.js 16+
- Git repository or project folder
- Command line access

**Installation:**

```bash
cd /path/to/your/project
npx bmad-method@alpha install
```

**Select modules:**

- ✅ Core (Required)
- ✅ CIS (Creative Intelligence Suite)

**Verification:**

```bash
ls bmad/cis/agents/local-seo-storyteller.md
ls bmad/cis/workflows/local-seo-storytelling/
```

**Usage:**

```
@bmad/cis/agents/local-seo-storyteller.md /local-seo
```

---

### Method 2: Web Bundle Deployment

**Generate bundle:**

```bash
git clone https://github.com/bmad-code-org/bmad.git
cd bmad
npm install
npm run bundle
```

**Locate:** `web-bundles/cis/agents/local-seo-storyteller.xml`

**Deploy to Claude Projects:**

1. Create new Project at claude.ai
2. Upload `local-seo-storyteller.xml` as Project Knowledge
3. Set instructions: "You are Lucia, the Local SEO Storyteller. Help businesses create SEO-optimized content."
4. Start: "Help me create local SEO content"

---

### Method 3: IDE-Specific Deployment

**Claude Code / Cursor / Windsurf:**

1. Install BMAD via NPM (Method 1)
2. Load agent: `@local-seo-storyteller`
3. Command: `/local-seo`

Works with 17+ IDEs supporting .md agent files.

---

## Usage Guide

### What to Prepare

**Business Information:**

- Business type and location
- Services offered (priority order)
- Target customer demographics
- Unique value proposition

**Current Website:**

- URL if you have one
- Existing content inventory
- Current SEO efforts (if any)

**Competitor Info (helpful but not required):**

- Main competitor websites
- What they do well/poorly
- Content gaps you've noticed

**Optional but Valuable:**

- Customer questions you get frequently
- Google Analytics data
- Existing reviews or testimonials
- Photos for content

---

### Session Timeline

**Total Time:** 60-90 minutes

**Phase 1: Discovery & Research (30 min)**

- Business and service mapping
- Geographic area definition
- Customer keyword research
- Competitor analysis

**Phase 2: Strategy & Creation (30 min)**

- Brand voice extraction
- Service page outlines
- Blog content calendar
- Local optimization plan

**Phase 3: Delivery (15 min)**

- Package assembly
- Implementation roadmap
- Tracking setup
- Questions and next steps

---

## Output & Deliverables

### Generated Files

Complete SEO Content Package saved as:

```
bmad/cis/output/seo-content-package-YYYY-MM-DD.md
```

### What's Included

✅ **Keyword Research:**

- Primary service + location keywords
- Blog/FAQ question keywords
- Long-tail opportunities

✅ **Service Page Content:**

- SEO-optimized outlines for each service
- Title tags and meta descriptions
- H1/H2 headline structure
- Internal linking strategy
- Image suggestions with alt text

✅ **12-Month Blog Calendar:**

- Topics targeting customer questions
- Keyword assignments
- Content type and search intent
- Publishing schedule

✅ **About Page:**

- Local SEO-optimized outline
- Brand story integration
- Trust signal placement

✅ **Google My Business:**

- Weekly posting templates
- Content ideas by category
- Hashtag strategy

✅ **Implementation Roadmap:**

- Week-by-week action plan
- Priority sequencing
- Performance tracking setup

✅ **SEO Checklists:**

- On-page optimization
- NAP consistency
- Schema markup
- Internal linking

---

## Export Formats

**Primary:** Markdown (.md)

- Human-readable and editable
- Easy to share with team or developers
- Copy sections into CMS
- Convert to PDF for clients

**To Use Content:**

**WordPress:**

- Copy service page outlines into new Pages
- Copy blog outlines into Posts
- Install Yoast SEO plugin for optimization

**Wix/Squarespace:**

- Use page builder to add content
- Follow SEO element recommendations
- Built-in SEO fields for title/meta

**Custom Site:**

- Share package with developer
- They implement following structure
- Ensure all SEO elements included

---

## Best Practices

### Before Your Session

1. **Know your services** - List what you offer and prioritize
2. **Define your area** - Specific cities/neighborhoods you serve
3. **Think about customers** - Who they are and what they need
4. **Review competitors** - What content do they have?

### During the Session

1. **Use customer language** - How do THEY describe problems, not industry jargon
2. **Be specific** - "Emergency plumbing in North Austin" beats "plumbing services"
3. **Share examples** - Real customer questions and testimonials
4. **Think locally** - Neighborhood names, local landmarks, area-specific needs

### After the Session

1. **Start with priorities** - Publish main service pages first
2. **Write authentically** - Use outlines but inject your voice
3. **Don't keyword stuff** - Write for humans, optimize for search
4. **Track progress** - Set up Google Search Console
5. **Be patient** - SEO takes 3-6 months to show results

---

## Customization Options

### Industry-Specific Adaptations

Lucia tailors strategies for:

- **Home Services** (plumbing, HVAC, roofing, etc.)
- **Professional Services** (law, accounting, consulting, etc.)
- **Health & Wellness** (doctors, dentists, chiropractors, gyms, etc.)
- **Retail & E-commerce** (local shops with online presence)
- **Hospitality** (restaurants, hotels, salons, spas, etc.)
- **Contractors** (remodeling, landscaping, construction, etc.)

### Voice Customization

Supports all brand voices:

- Educational and informative
- Friendly and conversational
- Professional and authoritative
- Warm and reassuring
- Technical and expert

### Geographic Scope

Works for:

- Single location businesses
- Multi-location operations
- Service area businesses (travel to customers)
- Neighborhood specialists
- Regional coverage

---

## Use Cases

### Local Service Provider

**Challenge:** Plumber in competitive market needs to rank for "emergency plumber [city]"
**Solution:** Lucia helps create service pages targeting emergency + location keywords, blog answering common plumbing questions, GMB strategy for local visibility
**Result:** Content strategy targeting 15 service × location combinations, 12-month blog plan, implementation roadmap

### Professional Service Firm

**Challenge:** Law firm wants to rank for practice areas in specific city
**Solution:** Service pages for each practice area optimized for local search, thought leadership blog topics, schema markup strategy
**Result:** SEO-optimized pages for 5 practice areas, 24 blog topics establishing expertise

### Multi-Location Business

**Challenge:** Gym chain needs location-specific content that isn't duplicate
**Solution:** Template approach with unique local elements per location, centralized blog strategy, location-specific landing pages
**Result:** Scalable SEO framework adaptable to each location

### New Business Launch

**Challenge:** Startup needs SEO foundation but has no existing content
**Solution:** Keyword research from scratch, competitor gap analysis, complete content architecture
**Result:** Full SEO roadmap ready for implementation from day one

---

## Troubleshooting

### "I don't know what keywords to target"

**Solution:**

- Lucia guides you through customer language research
- Questions you get asked repeatedly become keywords
- Competitor analysis reveals opportunities
- Focus on service + location combinations first

### "I'm not a writer"

**Solution:**

- Outlines are detailed - fill-in-the-blank style
- Write how you talk - conversational is good
- Use Grammarly or similar for editing
- Hire freelance writer with YOUR outlines and knowledge

### "My industry is too technical for storytelling"

**Solution:**

- Even technical services solve human problems
- Story = problem → solution → results
- Use analogies and plain language
- Focus on customer transformation, not just features

### "How do I implement schema markup?"

**Solution:**

- Use WordPress SEO plugin (handles automatically)
- Share schema code with developer
- Use Google's Structured Data Markup Helper
- Many page builders have schema fields

### "Results are taking too long"

**Solution:**

- SEO typically shows results in 3-6 months
- Start with low-competition long-tail keywords
- Ensure technical SEO is solid (site speed, mobile, etc.)
- Promote content via social and email
- Check Google Search Console for indexing issues

---

## Advanced Features

### Competitor Intelligence

Lucia helps identify:

- What competitors rank for
- Content gaps you can fill
- Topics they cover poorly
- Unique angles for differentiation

### E-E-A-T Optimization

Build Experience, Expertise, Authoritativeness, Trust:

- Author bios with credentials
- Years in business and local history
- Customer testimonials and case studies
- Industry certifications
- Community involvement

### Local Link Building

Content ideas that earn local links:

- Local resource guides
- Neighborhood profiles
- Community event coverage
- Local expert interviews
- City-specific statistics or data

### Conversion Optimization

Beyond rankings - turn traffic into leads:

- Clear CTAs above the fold
- Multiple contact methods
- Trust signals near CTAs
- Mobile-friendly forms
- Reduce friction in contact process

---

## Integration with Other BMAD Agents

Lucia pairs well with:

- **Elena (Case Study Creator)** - Turn customer success into SEO-optimized case studies
- **Marco (Social Media Sprint)** - Promote blog content via social channels
- **Diego (Review Response Coach)** - Use review keywords in SEO content
- **Valentina (Customer Journey)** - Map content to journey stages

---

## FAQs

**Q: How long does a session take?**
A: 60-90 minutes for complete strategy. Can be done in multiple shorter sessions if needed.

**Q: Do I need an existing website?**
A: No! Lucia helps plan content for new sites or improving existing ones.

**Q: Will this work for e-commerce?**
A: Yes! Product pages follow similar principles as service pages. Works for local stores with online presence.

**Q: Can I update my strategy later?**
A: Absolutely! Run workflow again quarterly to refine based on performance and changing business needs.

**Q: How technical does my site need to be?**
A: Basic CMS (WordPress, Wix, Squarespace) is fine. Developer helpful but not required for most recommendations.

**Q: What if I serve multiple cities?**
A: Lucia helps create location-specific strategies for each area you serve with unique, non-duplicate content.

**Q: Do I need to hire an SEO expert after this?**
A: For most local businesses, this strategy is comprehensive enough to implement yourself or with a content writer. Complex technical issues may need expert help.

---

## Examples & Samples

### Sample Service Page Title/Meta

**Plumber:**

- Title: "Emergency Plumber in Austin, TX | 24/7 Service | Smith Plumbing"
- Meta: "Need an emergency plumber in Austin? Smith Plumbing offers 24/7 service, flat-rate pricing, and same-day repairs. Call (512) 555-1234!"

**Dentist:**

- Title: "Family Dentist in Portland, OR | Gentle Care | Dr. Johnson"
- Meta: "Looking for a family dentist in Portland? Dr. Johnson provides gentle, comprehensive dental care for all ages. New patients welcome!"

### Sample Blog Topics

**Home Services:**

- "5 Signs You Need Emergency Plumbing Service in Austin"
- "How Much Does AC Repair Cost in Phoenix? 2025 Guide"
- "Best Time to Replace Your Roof in Seattle (And Why)"

**Professional Services:**

- "Do I Need a Lawyer for a Car Accident in Miami? What to Know"
- "How to Choose an Accountant for Your Small Business in Denver"
- "Estate Planning Checklist for Boston Residents"

---

## Success Metrics

### What to Track

**Rankings:**

- Target keyword positions (monthly)
- Number of keywords ranking on page 1
- Featured snippet wins

**Traffic:**

- Organic sessions per month
- Top landing pages
- Geographic sources
- Mobile vs desktop

**Conversions:**

- Contact form submissions
- Phone calls (use call tracking)
- Quote requests
- Appointment bookings

**Google Business Profile:**

- Profile views
- Search vs Maps views
- Direction requests
- Call clicks

---

## Support & Resources

**Documentation:** https://docs.bmad.dev
**GitHub Issues:** https://github.com/bmad-code-org/bmad/issues
**Community:** https://discord.gg/bmad-dev

---

## Version History

**v1.0** - Initial release (2025-01-15)

- 30 local SEO techniques
- 9-step interview process
- Service page optimization framework
- 12-month blog calendar generator
- GMB posting templates
- Implementation roadmap

---

## Next Steps

1. **Install** using your preferred method (NPM recommended)
2. **Prepare** business info and competitor websites
3. **Start** workflow: `/local-seo`
4. **Implement** strategy in phases
5. **Track** results in Google Search Console!

**Ready to help local customers find you online? Let's build content that ranks! 🗺️**

---

_For questions, issues, or feedback about the Local SEO Storyteller, open an issue on GitHub or reach out via Discord._
