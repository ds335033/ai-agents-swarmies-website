import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Cpu, Layers, ShieldCheck, Zap, BookOpen, Users, CheckCircle2 } from 'lucide-react';
import SwarmSimulator from '../components/SwarmSimulator';
import ArchitectureExplorer from '../components/ArchitectureExplorer';
import OnboardingQuiz from '../components/OnboardingQuiz';

const modulesList = [
  'Module 01: Introduction to AI & LLM Models',
  'Module 02: What is an AI Agent? (Autonomy & Memory)',
  'Module 03: How AI Agents Work (Thinking & Tool Loops)',
  'Module 04: Inside an Agentic Ecosystem (Orchestration)',
  'Module 05: AI Agent Architecture (Brain, Tools, DBs)',
  'Module 06: How AI Agents Become Intelligent (RLHF & Fine-Tuning)',
  'Module 07: Who Creates AI Agents? (Engineers & Frameworks)',
  'Module 08: Multi-Agent Systems & Collaboration',
  'Module 09: Swarm Intelligence & Leaderless Mesh',
  'Module 10: Tasks AI Agents Perform (Domain Matrix)',
  'Module 11: How Developers Build AI Agents (Vector Search)',
  'Module 12: How Much Do AI Agents Cost? (Token Economics)',
  'Module 13: AI Safety, Ethics & Governance',
  'Module 14: The Future of Autonomous AI Systems'
];

const LandingPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="container">
      {showQuiz && <OnboardingQuiz onClose={() => setShowQuiz(false)} />}

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 0 2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid var(--accent-cyan)', padding: '0.4rem 1.2rem', borderRadius: '30px', color: 'var(--accent-cyan)', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={16} /> 2026 EDITION — THE DEFINITIVE AI AGENT PLATFORM
        </div>

        <h1 className="text-gradient-cyan" style={{ fontSize: '4.2rem', fontWeight: '800', lineHeight: '1.05', maxWidth: '1000px' }}>
          THE AI AGENTS ACADEMY
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '780px', marginTop: '1.2rem', marginBottom: '2.5rem' }}>
          The World's Most Comprehensive Learning Platform for AI Agents, Multi-Agent Systems, Swarm Intelligence & Autonomous Automation.
        </p>

        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={() => setShowQuiz(true)} className="btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
            <Sparkles size={18} />
            TAKE SKILL ASSESSMENT
          </button>
          <Link to="/checkout" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem', border: '1px solid var(--accent-cyan)' }}>
            START 3-DAY FREE TRIAL ($6.00 AUD/mo)
          </Link>
        </div>

        {/* Hero Visual Asset */}
        <div style={{ marginTop: '3.5rem', width: '100%', maxWidth: '1050px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(56,189,248,0.3)', border: '1px solid var(--glass-border)' }}>
          <img src="/hero.png" alt="The AI Agents Academy Platform" style={{ width: '100%', display: 'block' }} />
        </div>
      </section>

      {/* Official Architecture Diagrams Showcase */}
      <section style={{ margin: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="text-gradient-purple" style={{ fontSize: '2.8rem' }}>AI AGENTS ANATOMY & TYPES</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>Master the core structural components and classification models of modern AI agents.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Components of AI Agents</h3>
            <img src="/agent_components.png" alt="What are the Components of AI Agents?" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
          </div>
          <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '24px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1rem' }}>Classification Types of AI Agents</h3>
            <img src="/agent_types.jpg" alt="Types of AI Agents" style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Embedded Video Masterclass */}
      <section style={{ margin: '4rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="text-gradient-cyan" style={{ fontSize: '2.5rem' }}>FEATURED VIDEO MASTERCLASS</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Explore how autonomous agents and vibe coding transform modern development.</p>
        </div>
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', aspectRatio: '16/9', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(129,140,248,0.3)', border: '1px solid var(--glass-border)' }}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/gMYR-JkmIFc?autoplay=0&rel=0" 
            title="AI Agents & Swarm Intelligence Masterclass" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{ display: 'block' }}
          ></iframe>
        </div>
      </section>

      {/* Interactive Swarm Simulator Demo */}
      <section style={{ margin: '5rem 0' }}>
        <SwarmSimulator />
      </section>

      {/* Architecture Explorer Demo */}
      <section style={{ margin: '5rem 0' }}>
        <ArchitectureExplorer />
      </section>

      {/* 14 Modules Overview Grid */}
      <section style={{ margin: '5rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="text-gradient-cyan" style={{ fontSize: '2.8rem' }}>14 UNIVERSITY-GRADE MODULES</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>From core LLM logic to leaderless swarm intelligence.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.2rem' }}>
          {modulesList.map((m, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <CheckCircle2 size={20} color="var(--accent-emerald)" />
              <span style={{ fontSize: '0.92rem', color: 'white', fontWeight: '500' }}>{m}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Banner */}
      <section style={{ margin: '5rem 0' }}>
        <div className="glass-panel" style={{ textAlign: 'center', padding: '3.5rem 2rem', border: '1px solid var(--accent-cyan)' }}>
          <span style={{ background: 'rgba(56,189,248,0.2)', color: 'var(--accent-cyan)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>UNBEATABLE VALUE</span>
          <h2 style={{ fontSize: '3rem', marginTop: '0.8rem' }} className="text-gradient-gold">JOIN FOR JUST $6.00 AUD / MONTH</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0.8rem auto 2rem auto', fontSize: '1.05rem' }}>
            Pay $0.00 today with our 3-Day Free Trial. Unlock full unlimited access to all 14 Modules, Swarm Labs, Architecture Explorers & AI Swarm Coaching. Cancel anytime.
          </p>
          <Link to="/checkout" className="btn-primary" style={{ padding: '1.1rem 2.8rem', fontSize: '1.1rem' }}>
            START 3-DAY FREE TRIAL ($0 TODAY)
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '6rem', padding: '3rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Academic & Legal Notice:</strong> Independent research and learning platform dedicated to AI Agents, Multi-Agent Systems, and Swarm Intelligence.
        </p>
        <p>© {new Date().getFullYear()} THE AI AGENTS ACADEMY (2026 Edition). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
