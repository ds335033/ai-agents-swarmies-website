import React, { useState } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import SwarmSimulator from '../components/SwarmSimulator';
import ArchitectureExplorer from '../components/ArchitectureExplorer';
import AIAgentCoach from '../components/AIAgentCoach';
import { 
  BookOpen, Cpu, Layers, Book, CheckCircle2, Circle, Trophy, Zap, Code, ShieldCheck 
} from 'lucide-react';

const agentTasks = [
  { day: 1, title: 'Understand Agent Autonomy vs LLMs', task: 'Review Module 02 and note down key differences between passive chat and agent execution.' },
  { day: 2, title: 'Run the Interactive Swarm Simulator', task: 'Add 12 worker agents, test velocity controls, and observe leaderless mesh coordination.' },
  { day: 3, title: 'Inspect Architecture Explorer', task: 'Click through Brain, Memory, Planning, Tools, and Reflection to review system diagrams.' },
  { day: 4, title: 'Study Vector Memory Systems', task: 'Review Module 05 to understand short-term context buffers vs long-term vector DBs.' },
  { day: 5, title: 'Complete Module 09 (Swarm Intelligence)', task: 'Analyze bio-inspired coordination vs AI multi-agent orchestration.' },
  { day: 6, title: 'Review Token Cost Economics', task: 'Inspect Module 12 to calculate inference costs for single vs multi-agent loops.' },
  { day: 7, title: 'Level Up to Level 2 Swarm Architect', task: 'Check your updated XP in the header bar and unlock the advanced diploma!' }
];

const CurriculumTab = () => (
  <div className="animate-fade-in prose">
    <h2 className="text-gradient-cyan" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
      14 UNIVERSITY MODULES — 2026 EDITION
    </h2>

    <h3>MODULE 01 — INTRODUCTION TO AI & LLM FOUNDATIONS</h3>
    <p>Understand Artificial Intelligence, Machine Learning, Deep Learning, Large Language Models, Foundation Models, and specialized Reasoning Engines.</p>

    <h3>MODULE 02 — WHAT IS AN AI AGENT?</h3>
    <p>Define agent intelligence, operational autonomy, context memory, planning engines, and tool execution environments.</p>

    <h3>MODULE 03 — HOW AI AGENTS WORK</h3>
    <p>Master the execution pipeline: Input → Thinking → Planning → Decision Making → Tool Use → Action → Reflection → Learning loop.</p>

    <h3>MODULE 04 — INSIDE AN AGENTIC ECOSYSTEM</h3>
    <p>Orchestration, multi-agent communication protocols, memory sharing, task delegation, context management, and fault-tolerant recovery.</p>

    <h3>MODULE 05 — AI AGENT ARCHITECTURE</h3>
    <p>Detailed architecture: Brain, Short/Long-Term Memory, Vector Search, Planning DAGs, External APIs, and Self-Correction Feedback Loops.</p>

    <h3>MODULE 06 — HOW AI AGENTS BECOME INTELLIGENT</h3>
    <p>Explore Foundation Training, RLHF, Fine-Tuning, Reasoning Chains, Developer Workflows, and System Prompting.</p>

    <h3>MODULE 07 — WHO CREATES AI AGENTS?</h3>
    <p>AI Engineers, ML Researchers, Automation Architects, Enterprise Developers, and Open-Source Communities.</p>

    <h3>MODULE 08 — MULTI-AGENT SYSTEMS</h3>
    <p>Cooperating agents, task delegation, shared objectives, distributed processing, and conflict resolution protocols.</p>

    <h3>MODULE 09 — SWARM INTELLIGENCE</h3>
    <p>Bio-inspired coordination (ants, bees, fish schools), leaderless coordination, fault tolerance, parallel execution, and scalability.</p>

    <h3>MODULE 10 — TASKS AI AGENTS PERFORM</h3>
    <p>Enterprise applications in Software Engineering, Customer Support, Sales, Marketing, Healthcare, Finance, and Robotics.</p>

    <h3>MODULE 11 — HOW DEVELOPERS BUILD AI AGENTS</h3>
    <p>Prompting, Vector Embeddings, Tool Calling, Observability, Testing, Evaluation, and Deployment Pipelines.</p>

    <h3>MODULE 12 — HOW MUCH DO AI AGENTS COST?</h3>
    <p>Token consumption economics, model sizes, inference costs, vector database storage, and cloud infrastructure optimization.</p>

    <h3>MODULE 13 — AI SAFETY & GOVERNANCE</h3>
    <p>Hallucinations, Prompt Injection security, Human-in-the-loop oversight, Privacy, Data Governance, and Responsible AI.</p>

    <h3>MODULE 14 — THE FUTURE OF AI AGENTS</h3>
    <p>Autonomous Companies, Scientific Discovery, Digital Employees, Enterprise Automation, and realistic 2026-2030 trends.</p>
  </div>
);

const TaskTab = () => {
  const [completed, setCompleted] = useState(() => {
    return JSON.parse(localStorage.getItem('completedAgentTasks') || '[]');
  });

  const toggleTask = (day) => {
    let updated;
    if (completed.includes(day)) {
      updated = completed.filter(d => d !== day);
    } else {
      updated = [...completed, day];
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    }
    setCompleted(updated);
    localStorage.setItem('completedAgentTasks', JSON.stringify(updated));
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-gradient-gold" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        SWARM ARCHITECT MISSION CHECKLIST
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Complete practical missions to earn XP, level up your badge, and master agent architecture!
      </p>

      {agentTasks.map((t) => {
        const isDone = completed.includes(t.day);
        return (
          <div key={t.day} className="glass-panel" style={{ padding: '1.2rem', marginBottom: '1rem', border: isDone ? '1px solid var(--accent-gold)' : '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ background: isDone ? 'rgba(251,191,36,0.2)' : 'rgba(56,189,248,0.2)', color: isDone ? 'var(--accent-gold)' : 'var(--accent-cyan)', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  MISSION 0{t.day}
                </span>
                <h4 style={{ color: 'white', marginTop: '0.4rem' }}>{t.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{t.task}</p>
              </div>
              <button onClick={() => toggleTask(t.day)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                {isDone ? <CheckCircle2 size={26} color="var(--accent-gold)" /> : <Circle size={26} color="var(--text-secondary)" />}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const GlossaryTab = () => (
  <div className="animate-fade-in">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }} className="text-gradient-purple">
      AI AGENTS GLOSSARY & TERMINOLOGY
    </h2>
    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Essential definitions for modern AI systems architecture.</p>

    <div style={{ display: 'grid', gap: '1rem' }}>
      <div className="glass-panel" style={{ padding: '1.2rem' }}>
        <h4 style={{ color: 'var(--accent-cyan)' }}>Autonomous Agent</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>An AI system equipped with tools, memory, and reasoning loops capable of executing multi-step goals without continuous human intervention.</p>
      </div>
      <div className="glass-panel" style={{ padding: '1.2rem' }}>
        <h4 style={{ color: 'var(--accent-purple)' }}>Swarm Intelligence</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>Coordinated collective behavior among multiple decentralized agents operating under shared goals without a central point of failure.</p>
      </div>
      <div className="glass-panel" style={{ padding: '1.2rem' }}>
        <h4 style={{ color: 'var(--accent-gold)' }}>Vector Database</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>Specialized storage engine indexing high-dimensional mathematical embeddings for long-term agent memory and similarity search.</p>
      </div>
    </div>
  </div>
);

const AcademyDashboard = () => {
  return (
    <div className="container platform-layout">
      <aside className="sidebar glass-panel" style={{ padding: '1.5rem' }}>
        <h3 style={{ color: 'var(--accent-cyan)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>ACADEMY HUB</h3>
        <nav>
          <NavLink to="curriculum" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <BookOpen size={18} /> 14 Modules Curriculum
          </NavLink>
          <NavLink to="swarm" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Cpu size={18} /> Swarm Simulator
          </NavLink>
          <NavLink to="explorer" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Layers size={18} /> Architecture Explorer
          </NavLink>
          <NavLink to="checklist" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <CheckCircle2 size={18} /> Missions Checklist
          </NavLink>
          <NavLink to="glossary" className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}>
            <Book size={18} /> AI Glossary
          </NavLink>
        </nav>
      </aside>

      <div className="content-section glass-panel">
        <Routes>
          <Route path="/" element={<Navigate to="curriculum" replace />} />
          <Route path="curriculum" element={<CurriculumTab />} />
          <Route path="swarm" element={<SwarmSimulator />} />
          <Route path="explorer" element={<ArchitectureExplorer />} />
          <Route path="checklist" element={<TaskTab />} />
          <Route path="glossary" element={<GlossaryTab />} />
        </Routes>
      </div>

      <AIAgentCoach />
    </div>
  );
};

export default AcademyDashboard;
