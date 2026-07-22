import React, { useState } from 'react';
import { Sparkles, ArrowRight, Trophy, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const OnboardingQuiz = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState(null);
  const [experience, setExperience] = useState(null);
  const [goal, setGoal] = useState(null);
  const [score, setScore] = useState(null);

  const handleFinish = () => {
    let base = 65;
    if (experience === 'Built AI Agents') base += 25;
    else if (experience === 'Prompt Engineering') base += 15;
    setScore(base);
    localStorage.setItem('agentSkillScore', base.toString());
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  return (
    <div className="quiz-overlay">
      <div className="quiz-modal animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>
            STEP {step} OF 3 — AI AGENTS SKILL ASSESSMENT
          </span>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>Your Current Background</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>Select the category that best describes your profile:</p>
            {['Software Engineer / AI Builder', 'Product Manager / Designer', 'Founder / Entrepreneur', 'Complete AI Beginner'].map((r, idx) => (
              <button key={idx} className={`quiz-option-btn ${role === r ? 'selected' : ''}`} onClick={() => setRole(r)}>
                {r}
              </button>
            ))}
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!role} onClick={() => setStep(2)}>
              Next Step <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>AI & Prompting Experience</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>What is your experience level with AI frameworks?</p>
            {['Built AI Agents (LangChain, AutoGen)', 'Prompt Engineering & ChatGPT User', 'Casual Explorer', 'First Time Learning'].map((exp, idx) => (
              <button key={idx} className={`quiz-option-btn ${experience === exp ? 'selected' : ''}`} onClick={() => setExperience(exp)}>
                {exp}
              </button>
            ))}
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!experience} onClick={() => setStep(3)}>
              Next Step <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
        )}

        {step === 3 && !score && (
          <div>
            <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '0.5rem' }}>Primary Learning Objective</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>What is your #1 goal for this academy?</p>
            {['Master Multi-Agent & Swarm Architecture', 'Build Autonomous SaaS Products', 'Deploy AI Agents for Enterprise Automation', 'Understand the Future of AI Systems'].map((g, idx) => (
              <button key={idx} className={`quiz-option-btn ${goal === g ? 'selected' : ''}`} onClick={() => setGoal(g)}>
                {g}
              </button>
            ))}
            <button className="btn-primary" style={{ width: '100%', marginTop: '1rem' }} disabled={!goal} onClick={handleFinish}>
              Calculate Architecture Score <Sparkles size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
          </div>
        )}

        {score && (
          <div style={{ textAlign: 'center' }}>
            <Trophy size={50} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
            <h2 className="text-gradient-gold" style={{ fontSize: '2.5rem' }}>ARCHITECTURE SCORE: {score}/100</h2>
            <p style={{ color: 'var(--accent-cyan)', fontWeight: 'bold', margin: '0.5rem 0 1.5rem 0' }}>
              Personalized Learning Path Activated for: {role}
            </p>
            <button onClick={onClose} className="btn-primary" style={{ width: '100%' }}>
              EXPLORE ACADEMY HUB
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingQuiz;
