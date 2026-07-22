import React, { useState } from 'react';
import { Brain, HardDrive, GitFork, Wrench, RefreshCw, CheckCircle2 } from 'lucide-react';

const archLayers = [
  { 
    id: 'brain', 
    name: '1. Brain (LLM Reasoning Engine)', 
    icon: Brain, 
    color: '#38bdf8', 
    desc: 'The foundational neural model (e.g. Gemini 1.5 Pro, Claude 3.5 Sonnet) responsible for language understanding, step-by-step logic, and tool selection decisions.',
    code: `// Agent Brain Decision Loop\nconst action = await llm.predict({\n  prompt: taskPrompt,\n  tools: availableTools,\n  temperature: 0.2\n});`
  },
  { 
    id: 'memory', 
    name: '2. Memory Architecture', 
    icon: HardDrive, 
    color: '#818cf8', 
    desc: 'Combines short-term in-context memory buffers with long-term vector database retrieval (Pinecone, Chroma) to maintain persistent persona context.',
    code: `// Vector Memory Retrieval\nconst contextDocs = await vectorStore.similaritySearch(query, { k: 5 });`
  },
  { 
    id: 'planning', 
    name: '3. Planning & Decomposition', 
    icon: GitFork, 
    color: '#fbbf24', 
    desc: 'Breaks down complex goals into a structured DAG (Directed Acyclic Graph) of micro-tasks, assigning individual responsibilities to worker sub-agents.',
    code: `// Task Decomposition\nconst subtasks = await plannerAgent.decompose(masterGoal);`
  },
  { 
    id: 'tools', 
    name: '4. Tools & API Execution', 
    icon: Wrench, 
    color: '#10b981', 
    desc: 'Enables autonomous interaction with external environments: terminal execution, web search, SQL database queries, and REST webhooks.',
    code: `// Autonomous Tool Call\nconst searchResult = await googleSearchTool.execute({ query: "Vite build specs" });`
  },
  { 
    id: 'reflection', 
    name: '5. Reflection & Self-Correction', 
    icon: RefreshCw, 
    color: '#f43f5e', 
    desc: 'Evaluates tool execution output against expected criteria. If a tool call fails or returns an error, the agent self-corrects and retries automatically.',
    code: `// Self-Correction Feedback Loop\nif (testResult.error) {\n  await agent.patchCodeAndRetry(testResult.log);\n}`
  }
];

const ArchitectureExplorer = () => {
  const [selectedLayer, setSelectedLayer] = useState(archLayers[0]);

  return (
    <div className="glass-panel">
      <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
        🔬 AGENT ARCHITECTURE EXPLORER
      </h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
        Click any component to inspect its internal mechanics, memory flow, and execution logic.
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
        {archLayers.map((layer) => {
          const Icon = layer.icon;
          const isSelected = selectedLayer.id === layer.id;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayer(layer)}
              style={{
                background: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.03)',
                border: isSelected ? `1px solid ${layer.color}` : '1px solid var(--glass-border)',
                color: isSelected ? 'white' : 'var(--text-secondary)',
                padding: '0.75rem 1.1rem',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                whiteSpace: 'nowrap',
                fontSize: '0.88rem',
                fontWeight: '600',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={16} color={layer.color} />
              {layer.name}
            </button>
          );
        })}
      </div>

      <div style={{ background: 'rgba(3, 7, 18, 0.9)', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${selectedLayer.color}` }}>
        <h4 style={{ color: selectedLayer.color, fontSize: '1.2rem', marginBottom: '0.5rem' }}>{selectedLayer.name}</h4>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', fontSize: '0.95rem' }}>{selectedLayer.desc}</p>

        <div style={{ background: '#030712', padding: '1rem', borderRadius: '10px', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#38bdf8', overflowX: 'auto', border: '1px solid var(--glass-border)' }}>
          <pre>{selectedLayer.code}</pre>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureExplorer;
