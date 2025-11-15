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
  { name: 'ระดมความคิด', description: 'อำนวยความสะดวกในการประชุมระดมความคิดแบบโต้ตอบโดยใช้เทคนิคการสร้างสรรค์ที่หลากหลาย', category: 'สร้างสรรค์' },
  { name: 'การเล่าเรื่อง', description: 'สร้างเรื่องเล่าที่น่าสนใจโดยใช้กรอบการทำงานเรื่องเล่าที่พิสูจน์แล้ว', category: 'สร้างสรรค์' },
  { name: 'โหมดปาร์ตี้', description: 'จัดการการอภิปรายกลุ่มระหว่างตัวแทนหลายตัวเพื่อการทำงานร่วมกันที่มีพลวัต', category: 'สร้างสรรค์' },
  { name: 'ดีไซน์ทิงกิ้ง', description: 'แนะนำกระบวนการออกแบบที่เน้นมนุษย์เป็นศูนย์กลางโดยใช้วิธีการที่ขับเคลื่อนด้วยความเห็นอกเห็นใจ', category: 'วิธีการ' },
  { name: 'การแก้ปัญหา', description: 'ประยุกต์ใช้วิธีการแก้ปัญหาอย่างเป็นระบบเพื่อถอดรหัสความท้าทายที่ซับซ้อน', category: 'วิธีการ' },
  { name: 'กลยุทธ์นวัตกรรม', description: 'ระบุโอกาสในการสร้างการเปลี่ยนแปลงและสถาปัตยกรรมนวัตกรรมโมเดลธุรกิจ', category: 'กลยุทธ์' },
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
          text: '> วิธีการ BMAD - ระบบจัดการเวิร์กโฟลว์ AI',
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
        addMessage('\nสวัสดี! วันนี้คุณอยากสร้างอะไร?', 'prompt');
        addMessage('\nฉันสามารถช่วยคุณด้วยเวิร์กโฟลว์ต่างๆ พิมพ์ "รายการ" เพื่อดูตัวเลือกที่มี หรือบอกเราว่าคุณต้องการทำอะไร:', 'system');
        setCurrentStep(1);
      }, 300);
    }
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    addMessage(`\n> ${userInput}`, 'user');

    const input = userInput.toLowerCase().trim();

    if (input === 'รายการ' || input === 'ช่วยเหลือ' || input === 'list' || input === 'help') {
      addMessage('\n📋 เวิร์กโฟลว์ที่มี:\n', 'system');

      const categories = [...new Set(workflows.map(w => w.category))];
      categories.forEach(category => {
        const categoryWorkflows = workflows.filter(w => w.category === category);
        addMessage(`\n${category}:`, 'system');
        categoryWorkflows.forEach((wf, idx) => {
          addMessage(`  ${idx + 1}. ${wf.name} - ${wf.description}`, 'system');
        });
      });

      addMessage('\n\nเลือกเวิร์กโฟลว์โดยพิมพ์ชื่อหรือหมายเลข หรือบอกเราว่าคุณต้องการทำอะไร:', 'prompt');
    } else {
      // Check if input matches a workflow
      const matchedWorkflow = workflows.find(
        wf => wf.name.toLowerCase() === input ||
        workflows.indexOf(wf) + 1 === parseInt(input)
      );

      if (matchedWorkflow) {
        addMessage(`\n✓ กำลังเริ่ม ${matchedWorkflow.name}...`, 'system');
        addMessage(`\n${matchedWorkflow.description}`, 'system');
        addMessage('\n\nนี่คืออินเทอร์เฟซสาธิต ในการใช้งานจริง จะเป็นการเปิดเวิร์กโฟลว์ที่เลือกด้วย BMAD orchestrator', 'system');
        addMessage('\n\nพิมพ์ "รายการ" เพื่อดูเวิร์กโฟลว์อีกครั้ง หรือ "ล้าง" เพื่อเริ่มใหม่', 'prompt');
      } else if (input === 'ล้าง' || input === 'clear') {
        setMessages([]);
        setCurrentStep(0);
        setTimeout(() => {
          addMessage('> วิธีการ BMAD - ระบบจัดการเวิร์กโฟลว์ AI', 'system');
        }, 100);
      } else {
        // AI would analyze the request and suggest workflows
        addMessage('\n🤔 กำลังวิเคราะห์คำขอของคุณ...', 'system');
        setTimeout(() => {
          addMessage('\nจากข้อมูลของคุณ ฉันขอแนะนำเวิร์กโฟลว์ต่อไปนี้:', 'system');
          addMessage('  1. ระดมความคิด - สำหรับการสร้างไอเดีย', 'system');
          addMessage('  2. การแก้ปัญหา - สำหรับการวิเคราะห์อย่างเป็นระบบ', 'system');
          addMessage('\nคุณต้องการเริ่มต้นหนึ่งในนี้หรือไม่? พิมพ์ชื่อหรือหมายเลข หรือพิมพ์ "รายการ" สำหรับตัวเลือกทั้งหมด', 'prompt');
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
                placeholder="พิมพ์คำสั่งของคุณ..."
                autoFocus
              />
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
