import { useState, useEffect, useRef } from 'react';
import { Typewriter } from './Typewriter';
import { motion } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  type: 'system' | 'user' | 'prompt';
}

interface Workflow {
  name: string;
  description: string;
  category: string;
}

const workflows: Workflow[] = [
  { name: 'Brainstorming', description: 'Interactive brainstorming session with creative techniques', category: 'Creative' },
  { name: 'Party Mode', description: 'Fun and energetic collaboration session', category: 'Creative' },
  { name: 'Problem Solving', description: 'Structured approach to solving complex problems', category: 'Strategy' },
  { name: 'Storytelling', description: 'Craft compelling narratives and stories', category: 'Creative' },
  { name: 'Innovation Strategy', description: 'Develop innovative strategies for your projects', category: 'Strategy' },
  { name: 'Game Development', description: 'Plan and design your game projects', category: 'Development' },
  { name: 'Code Review', description: 'Comprehensive code review and improvement', category: 'Development' },
];

export const Terminal = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message
    const timer = setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: '> BMAD Method - AI Workflow Orchestrator',
          type: 'system'
        },
      ]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const addMessage = (text: string, type: Message['type']) => {
    setMessages(prev => [...prev, { id: Date.now(), text, type }]);
  };

  const handleTypewriterComplete = () => {
    if (currentStep === 0) {
      setTimeout(() => {
        addMessage('\nHi! What would you like to build today?', 'prompt');
        addMessage('\nI can help you with various workflows. Type "list" to see available options, or describe what you\'d like to do:', 'system');
        setCurrentStep(1);
      }, 300);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(`\n> ${userInput}`, 'user');

    const input = userInput.toLowerCase().trim();

    if (input === 'list' || input === 'help') {
      addMessage('\n📋 Available Workflows:\n', 'system');

      const categories = [...new Set(workflows.map(w => w.category))];
      categories.forEach(category => {
        const categoryWorkflows = workflows.filter(w => w.category === category);
        addMessage(`\n${category}:`, 'system');
        categoryWorkflows.forEach((wf, idx) => {
          addMessage(`  ${idx + 1}. ${wf.name} - ${wf.description}`, 'system');
        });
      });

      addMessage('\n\nSelect a workflow by typing its name or number, or describe what you want to do:', 'prompt');
    } else {
      // Check if input matches a workflow
      const matchedWorkflow = workflows.find(
        wf => wf.name.toLowerCase() === input ||
        workflows.indexOf(wf) + 1 === parseInt(input)
      );

      if (matchedWorkflow) {
        addMessage(`\n✓ Starting ${matchedWorkflow.name} workflow...`, 'system');
        addMessage(`\n${matchedWorkflow.description}`, 'system');
        addMessage('\n\nThis is a demo interface. In a full implementation, this would launch the selected workflow with the BMAD orchestrator.', 'system');
        addMessage('\n\nType "list" to see workflows again, or "clear" to start over.', 'prompt');
      } else if (input === 'clear') {
        setMessages([]);
        setCurrentStep(0);
        setTimeout(() => {
          addMessage('> BMAD Method - AI Workflow Orchestrator', 'system');
        }, 100);
      } else {
        // AI would analyze the request and suggest workflows
        addMessage('\n🤔 Analyzing your request...', 'system');
        setTimeout(() => {
          addMessage('\nBased on your input, I recommend the following workflows:', 'system');
          addMessage('  1. Brainstorming - for creative ideation', 'system');
          addMessage('  2. Problem Solving - for structured analysis', 'system');
          addMessage('\nWould you like to start one of these? Type the name or number, or type "list" for all options.', 'prompt');
        }, 1000);
      }
    }

    setUserInput('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-terminal-bg border-2 border-terminal-green rounded-lg shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-terminal-green/20 to-terminal-blue/20 border-b border-terminal-green/50 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center text-terminal-cyan font-semibold">
            BMAD Terminal v1.0
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 h-[600px] overflow-y-auto font-mono text-sm">
          {messages.map((message, index) => (
            <div key={message.id} className="mb-2">
              {index === 0 ? (
                <Typewriter
                  text={message.text}
                  speed={30}
                  onComplete={handleTypewriterComplete}
                  className={
                    message.type === 'system' ? 'text-terminal-green' :
                    message.type === 'user' ? 'text-terminal-blue' :
                    'text-terminal-purple'
                  }
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    message.type === 'system' ? 'text-terminal-green' :
                    message.type === 'user' ? 'text-terminal-blue' :
                    'text-terminal-purple'
                  }
                >
                  {message.text}
                </motion.div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {currentStep > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border-t border-terminal-green/30 p-4"
          >
            <form onSubmit={handleUserInput} className="flex gap-2">
              <span className="text-terminal-purple">❯</span>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-terminal-text placeholder-terminal-text/40"
                placeholder="Type your command..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
