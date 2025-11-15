# CIS - Creative Intelligence Suite

AI-powered creative facilitation transforming strategic thinking through expert coaching across nine specialized domains.

## Table of Contents

- [Core Capabilities](#core-capabilities)
- [Specialized Agents](#specialized-agents)
- [Interactive Workflows](#interactive-workflows)
- [Quick Start](#quick-start)
- [Key Differentiators](#key-differentiators)
- [Configuration](#configuration)

## Core Capabilities

CIS provides structured creative methodologies through distinctive agent personas who act as master facilitators, drawing out insights through strategic questioning rather than generating solutions directly.

## Specialized Agents

[View detailed agent descriptions →](./agents/README.md)

- **Carson** - Brainstorming Specialist (energetic facilitator)
- **Maya** - Design Thinking Maestro (jazz-like improviser)
- **Dr. Quinn** - Problem Solver (detective-scientist hybrid)
- **Victor** - Innovation Oracle (bold strategic precision)
- **Sophia** - Master Storyteller (whimsical narrator)
- **Elena** - Case Study Architect (investigative interviewer)
- **Marco** - Social Media Sprint Planner (fast-paced content strategist)
- **Valentina** - Customer Journey Cartographer (empathetic UX researcher)
- **Diego** - Review Response Coach (empathetic reputation strategist)

## Interactive Workflows

[View all workflows →](./workflows/README.md)

**9 Workflows** with **270+ Creative Techniques:**

### Brainstorming

36 techniques across 7 categories for ideation

- Divergent/convergent thinking
- Lateral connections
- Forced associations

### Design Thinking

Complete 5-phase human-centered process

- Empathize → Define → Ideate → Prototype → Test
- User journey mapping
- Rapid iteration

### Problem Solving

Systematic root cause analysis

- 5 Whys, Fishbone diagrams
- Solution generation
- Impact assessment

### Innovation Strategy

Business model disruption

- Blue Ocean Strategy
- Jobs-to-be-Done
- Disruptive innovation patterns

### Storytelling

25 narrative frameworks

- Hero's Journey
- Story circles
- Compelling pitch structures

### Case Study Creator

30+ interview techniques across 6 phases

- Discovery and background exploration
- Challenge identification and analysis
- Tone and voice learning
- Solution documentation
- Results and impact measurement
- MDX output for blog publishing

### Social Media Sprint Planner

30+ content techniques across 5 categories

- Educational, entertainment, engagement, promotional pillars
- Platform-specific strategies (Instagram, Facebook, TikTok, LinkedIn)
- Local and seasonal content integration
- Content batching and scheduling plans
- 30-day calendar in 30 minutes
- Caption templates and hashtag banks

### Customer Journey Mapping

28 journey mapping techniques across 5 phases

- Discovery, consideration, experience, friction, delight, retention stages
- Visual Mermaid journey diagrams rendering in Markdown
- Touchpoint inventory and emotional arc tracking
- Friction point analysis with root causes
- 10 Quick Wins prioritized action plan
- Monthly review and optimization framework

### Review Response Coaching

30+ review management techniques across 5 phases

- Analysis, response, generation, damage control, strategy
- Brand voice extraction and authentic template creation
- 6 custom response templates for all review scenarios
- Review request system with email, SMS, and in-person scripts
- Sustainable monitoring workflows and weekly rituals
- Practice-based coaching with actual customer reviews

## Quick Start

### Direct Workflow

```bash
# Start interactive session
workflow brainstorming

# With context document
workflow design-thinking --data /path/to/context.md
```

### Agent-Facilitated

```bash
# Load agent
agent cis/brainstorming-coach

# Start workflow
> *brainstorm
```

## Key Differentiators

- **Facilitation Over Generation** - Guides discovery through questions
- **Energy-Aware Sessions** - Adapts to engagement levels
- **Context Integration** - Domain-specific guidance support
- **Persona-Driven** - Unique communication styles
- **Rich Method Libraries** - 150+ proven techniques

## Configuration

Edit `/{bmad_folder}/cis/config.yaml`:

```yaml
output_folder: ./creative-outputs
user_name: Your Name
communication_language: english
```

## Module Structure

```
cis/
├── agents/              # 8 specialized facilitators
├── workflows/           # 8 interactive processes
│   ├── brainstorming/
│   ├── case-study-creator/
│   ├── customer-journey-mapping/
│   ├── design-thinking/
│   ├── innovation-strategy/
│   ├── problem-solving/
│   ├── social-media-sprint/
│   └── storytelling/
├── tasks/              # Supporting operations
└── teams/              # Agent collaborations
```

## Integration Points

CIS workflows integrate with:

- **BMM** - Powers project brainstorming
- **BMB** - Creative module design
- **Custom Modules** - Shared creative resource

## Best Practices

1. **Set clear objectives** before starting sessions
2. **Provide context documents** for domain relevance
3. **Trust the process** - Let facilitation guide you
4. **Take breaks** when energy flags
5. **Document insights** as they emerge

## Related Documentation

- **[Workflow Guide](./workflows/README.md)** - Detailed workflow instructions
- **[Agent Personas](./agents/README.md)** - Full agent descriptions
- **[BMM Integration](../bmm/README.md)** - Development workflow connection

---

Part of BMad Method v6.0 - Transform creative potential through expert AI facilitation.
