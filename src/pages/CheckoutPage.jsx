import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('hasAccess_ai_agents_academy', 'true');
      navigate('/academy');
    }, 1800);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ padding: '1.2rem', background: 'rgba(3, 7, 18, 0.95)', borderRadius: '14px', border: '1px solid var(--glass-border)', marginBottom: '1.5rem' }}>
        <CardElement options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#fff',
              '::placeholder': { color: '#9ca3af' },
              iconColor: '#38bdf8'
            },
            invalid: { color: '#ff4d4f' }
          }
        }} />
      </div>
      
      {error && <div style={{ color: '#ff4d4f', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

      <button type="submit" disabled={!stripe || loading} className="btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
        {loading ? 'Activating 3-Day Free Trial...' : (
          <>
            <Lock size={18} />
            START 3-DAY FREE TRIAL ($0 TODAY)
          </>
        )}
      </button>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.2rem', color: 'var(--accent-gold)', fontSize: '0.88rem', fontWeight: 'bold' }}>
        $0.00 charged today. $6.00 AUD/month after 3-day trial. Cancel anytime.
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
        <ShieldCheck size={16} color="var(--accent-cyan)" />
        256-Bit Encrypted Secure Stripe Subscription Payment
      </div>
    </form>
  );
};

const CheckoutPage = () => {
  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2rem 0' }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '540px', padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Zap size={42} color="var(--accent-cyan)" style={{ marginBottom: '0.5rem' }} />
          <h2 className="text-gradient-cyan" style={{ fontSize: '2.4rem' }}>ACTIVATE 3-DAY FREE TRIAL</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Full unlimited access to The AI Agents Academy. Pay $0.00 today, then $6.00 AUD/month. Cancel anytime.
          </p>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'white', marginBottom: '0.4rem' }}>
            <CheckCircle2 size={16} color="var(--accent-emerald)" /> 14 Complete University Modules
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'white', marginBottom: '0.4rem' }}>
            <CheckCircle2 size={16} color="var(--accent-emerald)" /> Interactive AI Swarm Simulator & Architecture Explorer
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'white' }}>
            <CheckCircle2 size={16} color="var(--accent-emerald)" /> AI Swarm Coach & Real-Time XP Gamification
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default CheckoutPage;
