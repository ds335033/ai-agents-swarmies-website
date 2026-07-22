import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Zap, Award, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const updateXP = () => {
      const storedTasks = JSON.parse(localStorage.getItem('completedAgentTasks') || '[]');
      setXp(storedTasks.length * 60);
    };

    updateXP();
    const interval = setInterval(updateXP, 1000);
    return () => clearInterval(interval);
  }, []);

  const level = Math.floor(xp / 180) + 1;

  return (
    <nav className="container navbar animate-fade-in">
      <Link to="/" className="logo text-gradient-cyan">
        <div style={{ background: 'linear-gradient(135deg, #0284c7, #818cf8)', padding: '0.45rem 0.65rem', borderRadius: '12px', display: 'flex', alignItems: 'center', boxShadow: '0 0 20px rgba(56,189,248,0.5)' }}>
          <Cpu size={22} color="white" />
        </div>
        <div>
          <span style={{ fontSize: '1.3rem', fontWeight: '800', letterSpacing: '0.5px' }}>THE AI AGENTS</span>
          <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--accent-purple)', letterSpacing: '2.5px', fontWeight: 'bold' }}>ACADEMY 2026</span>
        </div>
      </Link>

      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Trophy size={15} /> LVL {level} SWARM ARCHITECT
        </div>

        <Link to="/academy" className="btn-secondary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.9rem' }}>
          Academy Hub
        </Link>
        <Link to="/checkout" className="btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '0.88rem' }}>
          Enroll ($6.00 AUD/mo)
        </Link>
      </div>
    </nav>
  );
};

const Trophy = ({ size }) => <Award size={size} color="var(--accent-gold)" />;

export default Navbar;
