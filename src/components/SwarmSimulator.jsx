import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, Plus, RefreshCw, Zap, ShieldAlert, Cpu } from 'lucide-react';

const SwarmSimulator = () => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [agentCount, setAgentCount] = useState(24);
  const [activeTask, setActiveTask] = useState('Parallel Task Processing');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Generate Swarm Agents
    const agents = Array.from({ length: agentCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      radius: Math.random() * 3 + 3,
      color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#818cf8' : '#10b981',
      role: i % 3 === 0 ? 'Coder' : i % 3 === 1 ? 'Researcher' : 'Tester'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Connection Lines between neighboring agents (Swarm Network)
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          const dx = agents[i].x - agents[j].x;
          const dy = agents[i].y - agents[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(agents[i].x, agents[i].y);
            ctx.lineTo(agents[j].x, agents[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - dist / 110})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render Agents
      agents.forEach(agent => {
        if (isRunning) {
          agent.x += agent.vx;
          agent.y += agent.vy;

          if (agent.x < 0 || agent.x > width) agent.vx *= -1;
          if (agent.y < 0 || agent.y > height) agent.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(agent.x, agent.y, agent.radius, 0, Math.PI * 2);
        ctx.fillStyle = agent.color;
        ctx.shadowColor = agent.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isRunning, agentCount]);

  return (
    <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={20} /> INTERACTIVE AI SWARM SIMULATOR
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Simulating leaderless multi-agent swarm coordination and parallel task execution.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button className="btn-secondary" onClick={() => setIsRunning(!isRunning)} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            {isRunning ? <Pause size={14} /> : <Play size={14} />} {isRunning ? 'Pause' : 'Resume'}
          </button>
          <button className="btn-secondary" onClick={() => setAgentCount(prev => Math.min(prev + 6, 48))} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            <Plus size={14} /> Add Agents ({agentCount})
          </button>
          <button className="btn-secondary" onClick={() => setAgentCount(24)} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
            <RefreshCw size={14} /> Reset
          </button>
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '320px', background: '#030712', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
        
        <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(11, 15, 25, 0.85)', padding: '0.4rem 0.8rem', borderRadius: '8px', border: '1px solid var(--glass-border)', fontSize: '0.75rem', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Zap size={13} color="var(--accent-gold)" /> Swarm State: Autonomous Mesh Active ({agentCount} Nodes)
        </div>
      </div>
    </div>
  );
};

export default SwarmSimulator;
