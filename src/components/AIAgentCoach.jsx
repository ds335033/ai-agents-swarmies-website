import React, { useState } from 'react';
import { Bot, X, Send, ShieldAlert, Cpu } from 'lucide-react';

const AIAgentCoach = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Welcome to The AI Agents Academy! I'm your AI Swarm Coach. Ask me anything about multi-agent orchestration, swarm intelligence, or vector memory systems!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: `Here is an Agent Architecture insight regarding "${currentInput}": Multi-agent systems achieve resilience through decentralized task delegation. Check out Module 09 (Swarm Intelligence) and test the Interactive Swarm Simulator in your Hub!` 
      }]);
    }, 1200);
  };

  return (
    <>
      <div className="copilot-fab" onClick={() => setIsOpen(true)} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7, #818cf8)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', boxShadow: '0 0 25px rgba(56,189,248,0.5)', zIndex: 99 }}>
        <Bot color="white" size={28} />
      </div>

      <div className={`copilot-widget ${isOpen ? 'open' : ''}`} style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '360px', background: '#0b0f19', border: '1px solid var(--accent-cyan)', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.8)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 100, transform: isOpen ? 'translateY(0)' : 'translateY(120%)', transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
        <div style={{ padding: '1rem', background: 'linear-gradient(90deg, #0284c7, #818cf8)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: 'white' }} onClick={() => setIsOpen(false)}>
          <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={18} />
            <span>AI Swarm Coach</span>
          </span>
          <X size={18} />
        </div>

        <div style={{ height: '320px', padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              style={{
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                maxWidth: '85%',
                fontSize: '0.88rem',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? '#0284c7' : 'rgba(255,255,255,0.06)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--glass-border)',
                color: 'white'
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} style={{ display: 'flex', padding: '0.75rem', background: '#0b0f19' }}>
          <input 
            type="text" 
            placeholder="Ask AI Swarm Coach..." 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', borderRadius: '10px', padding: '0.6rem 0.8rem', color: 'white', outline: 'none' }}
          />
          <button type="submit" style={{ background: 'transparent', border: 'none', color: 'var(--accent-cyan)', marginLeft: '0.5rem', cursor: 'pointer' }}>
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default AIAgentCoach;
