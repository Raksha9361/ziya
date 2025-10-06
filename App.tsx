/* tslint:disable */
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Copyright 2025 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {useState, useEffect, FormEvent} from 'react';

const ZiyaLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent-blue)" />
          <stop offset="50%" stopColor="var(--accent-purple)" />
          <stop offset="100%" stopColor="var(--accent-pink)" />
        </linearGradient>
      </defs>
      <path
        d="M20,10 L80,10 C90,10 90,20 80,20 L30,20 C20,20 20,30 30,30 L70,30 C60,30 60,40 70,40 L20,40 C10,40 10,50 20,50 L80,50 C90,50 90,60 80,60 L30,60 C20,60 20,70 30,70 L70,70 C60,70 60,80 70,80 L20,80 C10,80 10,90 20,90 L80,90"
        stroke="url(#logoGradient)"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-2xl font-bold text-[var(--text-primary)]">Ziya</span>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border-color)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" aria-label="Ziya Homepage">
            <ZiyaLogo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {[] // Links removed as per request
              .map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  {item}
                </a>
              ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="#cta" className="secondary-button !px-6 !py-2">
              Login
            </a>
            <a href="#cta" className="cta-button !px-6 !py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = ({onOpenModal}: {onOpenModal: () => void}) => (
  <section
    id="hero"
    className="hero-section text-center pt-24 pb-32 overflow-hidden"
  >
    <div className="relative z-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
        Your 24/7 AI <span className="gradient-text">Voice Agent</span>
      </h1>
      <p className="mt-4 text-md font-medium text-[var(--text-secondary)]">
        Powered by Ziya
      </p>
      <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)]">
        Create AI agents that answer phone calls, book appointments, qualify leads, and handle customer support - all in your brand's voice.
      </p>
      <p className="mt-2 max-w-3xl mx-auto text-lg sm:text-xl text-[var(--text-secondary)]">
        From sales to support. Available 24/7. Never tired, never off.
      </p>
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <button onClick={onOpenModal} className="cta-button text-lg">
          ⚡ Experience Now
        </button>
        <p className="text-sm text-[var(--text-secondary)]">
          5 free agents • No credit card required
        </p>
      </div>
    </div>
  </section>
);

const metrics = [
  {
    value: '10,000+',
    label: 'Active Agents',
    description: 'Handling calls 24/7 worldwide',
  },
  {
    value: '2M+',
    label: 'Calls Handled',
    description: 'Successfully completed every month',
  },
  {
    value: '99.9%',
    label: 'Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    value: '45 sec',
    label: 'Setup Time',
    description: 'From call to live agent',
  },
];

const Metrics = () => (
  <section className="py-20 bg-[var(--background-card)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-5xl font-extrabold gradient-text">{metric.value}</p>
            <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{metric.label}</p>
            <p className="mt-1 text-base text-[var(--text-secondary)]">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const useCasesData = [
    {
        title: 'Salon & Spa',
        description: 'Never miss a booking. Your AI agent schedules appointments, sends reminders, and handles rescheduling 24/7.',
        prompt: '"I need an agent that books appointments for my salon"',
        features: [
            'Syncs with your booking calendar',
            'Sends SMS appointment reminders',
            'Handles cancellations & rescheduling',
            'Collects customer preferences',
            'Manages waitlists automatically',
        ]
    },
    {
        title: 'Sales & Lead Qualification',
        description: 'Qualify leads instantly. Your AI agent asks the right questions, captures information, and prioritizes hot leads.',
        prompt: '"A sales agent that qualifies leads 24/7"',
        features: [
            'Custom qualification questions',
            'Lead scoring & prioritization',
            'CRM integration ready',
            'Instant lead notifications',
            'Follow-up scheduling',
        ]
    },
    {
        title: 'Elder Care & Check-ins',
        description: 'Peace of mind for families. Daily wellness calls, medication reminders, and instant alerts for concerns.',
        prompt: '"A caring voice to check on elderly parents daily"',
        features: [
            'Scheduled daily check-in calls',
            'Medication reminders',
            'Emergency detection & alerts',
            'Mood & wellness tracking',
            'Family notification system',
        ]
    },
    {
        title: 'Restaurant Reservations',
        description: 'Fill your tables automatically. Handle reservations, special requests, and waitlist management round the clock.',
        prompt: '"Take reservations for my restaurant 24/7"',
        features: [
            'Real-time table availability',
            'Special request handling',
            'Waitlist management',
            'Party size optimization',
            'No-show reduction system',
        ]
    },
    {
        title: 'Healthcare & Medical',
        description: 'Reduce no-shows, manage appointments, answer patient questions, and handle prescription refill requests.',
        prompt: '"Handle patient appointments and inquiries"',
        features: [
            'HIPAA-compliant handling',
            'Appointment scheduling & reminders',
            'Prescription refill requests',
            'Insurance verification',
            'After-hours patient support',
        ]
    },
    {
        title: 'Real Estate',
        description: 'Schedule property viewings, qualify buyers, provide listing details, and capture lead information automatically.',
        prompt: '"Schedule property viewings and qualify buyers"',
        features: [
            'Property information & pricing',
            'Viewing schedule management',
            'Buyer pre-qualification',
            'Virtual tour booking',
            'Lead capture & follow-up',
        ]
    },
];

const UseCases = () => (
    <section id="use-cases" className="section-container">
        <div className="text-center mb-12">
            <h2 className="section-title">
                Built for <span className="gradient-text">Every Business</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-[var(--text-secondary)]">
                Whatever your industry, Ziya creates the perfect AI voice agent for your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {useCasesData.map((useCase) => (
                <div key={useCase.title} className="use-case-card">
                    <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-4">{useCase.description}</p>
                    <div className="prompt-quote">
                        <p>{useCase.prompt}</p>
                    </div>
                    <ul className="use-case-features">
                        {useCase.features.map(feature => (
                            <li key={feature}>
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <a href="#cta" className="use-case-link">
                        Get Started →
                    </a>
                </div>
            ))}
        </div>
    </section>
);

const howItWorksSteps = [
  {
    title: 'Connect with Ziya',
    description: 'Describe your business needs in plain English through a simple call or form.',
  },
  {
    title: 'Instant AI Creation',
    description: 'Advanced AI builds your custom voice agent tailored to your exact requirements.',
  },
  {
    title: 'Deploy & Scale',
    description: 'Your agent goes live instantly, ready to handle unlimited calls 24/7.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-container how-it-works-bg">
    <div className="text-center mb-16">
      <h2 className="section-title">
        How It <span className="gradient-text">Works</span>
      </h2>
    </div>
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 text-center relative how-it-works-steps-container">
        {howItWorksSteps.map((step, index) => (
          <div key={step.title} className="how-it-works-step">
            <div className="step-number">{index + 1}</div>
            <h3 className="text-xl font-bold mt-6 mb-2">{step.title}</h3>
            <p className="text-[var(--text-secondary)]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-16">
      <a href="#cta" className="cta-button text-lg">
        Get Started Now
      </a>
    </div>
  </section>
);

const faqData = [
    { q: "How quickly can I get my AI agent up and running?", a: "You can go from describing your business needs to having a live AI voice agent in under a minute. Our instant AI creation process is designed for speed and efficiency." },
    { q: "Do I need any technical knowledge?", a: "Not at all. You can create and deploy your agent by describing your needs in plain English. Our platform is completely no-code, making it accessible for everyone." },
    { q: "Can I customize my agent after creation?", a: "Yes, you can easily update your agent's responses, business logic, and integrations at any time through our simple dashboard. Your agent evolves with your business." },
    { q: "How many calls can my agent handle?", a: "Your Ziya agent can handle a virtually unlimited number of calls simultaneously. It scales automatically to meet your demand, ensuring no customer ever hears a busy signal." },
    { q: "Is my business data secure?", a: "Absolutely. We use bank-level 256-bit encryption and are SOC 2 compliant. For healthcare applications, we also offer HIPAA-compliant options to ensure the highest level of data privacy." },
    { q: "Can my agent integrate with my existing systems?", a: "Yes, Ziya is designed to integrate seamlessly with your existing CRM, booking calendars, and other business systems to automate your workflows from end to end." },
    { q: "What languages does Ziya support?", a: "Ziya supports a wide range of languages and dialects, allowing you to serve a global customer base in their native language with a natural-sounding voice." },
    { q: "What if I need help or support?", a: "We're always here to help. We offer 24/7 support to ensure your business runs smoothly. Our team is ready to assist you whenever you need it." }
];

interface FaqItemProps {
  faq: { q: string; a: string; };
  isOpen: boolean;
  onClick: () => void;
}
// FIX: Corrected typo from `FqItemProps` to `FaqItemProps`.
const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-[var(--border-color)]">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6">
            <span className="text-lg font-medium">{faq.q}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" /></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="pb-6 text-[var(--text-secondary)]">{faq.a}</p>
        </div>
    </div>
);


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="section-container">
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <div className="max-w-3xl mx-auto">
                {faqData.map((faq, index) => (
                    <FaqItem
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </section>
    );
};

const enterpriseFeatures = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Z" />
      </svg>
    ),
    title: 'Bank-Level Security',
    description: '256-bit encryption, SOC 2 compliant',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.516l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: '99.9% Uptime',
    description: 'Guaranteed reliability SLA',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Global Infrastructure',
    description: 'Low latency worldwide',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.05 1.05 0 0 0-1.485 0L12 15.25l-2.066-2.067a1.05 1.05 0 0 0-1.485 0L4.725 16.93a2.101 2.101 0 0 1-1.98-2.193v-4.286c0-.97.616-1.813 1.5-2.097m16.5 0c.884-.284 1.5-1.128 1.5-2.097V6.286c0-1.135-.847-2.1-1.98-2.193l-3.72 3.72a1.05 1.05 0 0 0-1.485 0L12 5.75l-2.066 2.067a1.05 1.05 0 0 0-1.485 0L4.725 4.093A2.101 2.101 0 0 1 2.745 6.286v4.286c0 .97.616 1.813 1.5 2.097" />
      </svg>
    ),
    title: '24/7 Support',
    description: 'Always here when you need us',
  },
    {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    ),
    title: 'HIPAA Compliant',
    description: 'Healthcare-grade privacy',
  },
];

const EnterprisePlatform = () => (
    <section id="enterprise" className="section-container">
        <div className="text-center mb-12">
            <h2 className="section-title">
                Enterprise-Grade <span className="gradient-text">Platform</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto text-center">
            {enterpriseFeatures.map(feature => (
                <div key={feature.title} className="enterprise-feature-card">
                    <div className="icon-container">
                        {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mt-4 mb-1">{feature.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);


const CTA = () => (
  <section
    id="cta"
    className="section-container text-center cta-bg rounded-2xl max-w-6xl mx-auto my-24 py-16">
    <h2 className="text-4xl font-extrabold tracking-tight">
      Ready to Transform Your Business?
    </h2>
    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
      Join industry leaders using AI to scale their customer interactions.
    </p>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <div>
            <p className="text-4xl font-bold">10M+</p>
            <p className="text-sm text-white/80">Calls Handled</p>
        </div>
        <div>
            <p className="text-4xl font-bold">98%</p>
            <p className="text-sm text-white/80">Resolution Rate</p>
        </div>
        <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="text-sm text-white/80">Availability</p>
        </div>
    </div>
    <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="#cta" className="cta-button text-lg">
        Start Building Now
      </a>
      <a href="#cta" className="secondary-button text-lg bg-white/20 !border-white !text-white hover:bg-white/30">
        Sign In to Dashboard
      </a>
    </div>
    <p className="mt-6 text-sm text-white/80">
      Start with 5 agents free • No credit card required • Deploy in minutes
    </p>
  </section>
);

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Use Cases', 'Pricing', 'Docs'],
    Solutions: [
      'Customer Support',
      'Sales & Marketing',
      'Internal Automation',
      'E-commerce',
    ],
    Company: ['About Us', 'Careers', 'Blog', 'Contact Us'],
    Legal: ['Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="border-t border-[var(--border-color)] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="col-span-2 lg:col-span-2">
            <ZiyaLogo />
            <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-xs">
              The AI agent platform for building human-like conversational
              experiences.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm tracking-wider uppercase text-[var(--text-primary)]">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] text-center text-sm text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} Ziya, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { name: string; phone: string }) => Promise<void>;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+91 ');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');


    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value.startsWith('+91 ')) {
            setPhone('+91 ');
        } else {
            setPhone(e.target.value);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('idle');
        try {
            await onSubmit({ name, phone });
            setSubmissionStatus('success');
        } catch (error) {
            setSubmissionStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submissionStatus === 'success') {
        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content text-center" onClick={(e) => e.stopPropagation()}>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-[var(--text-secondary)] mb-6">Your form has been submitted successfully. We will be in touch shortly.</p>
                    <button onClick={onClose} className="cta-button w-full">Close</button>
                </div>
            </div>
        )
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button">&times;</button>
                <h2 className="text-2xl font-bold mb-4">Experience Ziya Now</h2>
                <p className="text-[var(--text-secondary)] mb-6">Enter your details and our team will get in touch.</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="modal-input"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={phone}
                            onChange={handlePhoneChange}
                            className="modal-input"
                        />
                    </div>
                    {submissionStatus === 'error' && (
                        <p className="text-red-500 text-sm text-center mb-4">
                            There was an error submitting the form. Please try again.
                        </p>
                    )}
                    <button type="submit" className="cta-button w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleFormSubmit = async (formData: { name: string, phone: string }) => {
        // ===================================================================================
        // FINAL SCRIPT AND INSTRUCTIONS TO FIX YOUR GOOGLE SHEET
        // This script will only save Name and Phone, and it fixes all errors.
        // ===================================================================================

        // STEP 1: Go to your Google Sheet, then Extensions > Apps Script.
        //
        // STEP 2: Replace the entire script in the editor with the code below.
        /*
            function doPost(e) {
              try {
                var sheetId = "10rwDvYQk5cPs3bXakoU5NpOLdTXYMWanWiOrNDTcvfI";
                var sheet = SpreadsheetApp.openById(sheetId).getSheets()[0];
                
                var name = e.parameter.name;
                var phone = e.parameter.phone;
                
                // This prepends a single quote to the phone number to force
                // Google Sheets to treat it as text, fixing the #ERROR!
                var phoneAsText = "'" + phone;
                
                // This now only appends the name and the corrected phone number.
                // Before running, clear your sheet and set column A header to "Name" and column B to "Phone".
                sheet.appendRow([name, phoneAsText]);
                
                return ContentService
                  .createTextOutput(JSON.stringify({ "result": "success" }))
                  .setMimeType(ContentService.MimeType.JSON);
              } catch (error) {
                return ContentService
                  .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
                  .setMimeType(ContentService.MimeType.JSON);
              }
            }
        */
        //
        // STEP 3: Click the "Save project" (floppy disk) icon.
        //
        // STEP 4: Click the blue "Deploy" button > "Manage deployments".
        //
        // STEP 5: In the pop-up, click the pencil (edit) icon.
        //
        // STEP 6: Change the "Version" dropdown to "New version".
        //
        // STEP 7: Click "Deploy". Your form is now permanently fixed. You do not need a new URL.

        const scriptURL = 'https://script.google.com/macros/s/AKfycby5o691FVMZTU6w1Ve2-4BhvqyxFYEspG-W4aNRAOvON1vQbjR_-7DQghqwTzu0-Z3b/exec';

        const body = new FormData();
        body.append('name', formData.name);
        // The logic to fix the phone number has been moved to the Apps Script for reliability.
        body.append('phone', formData.phone);
        
        try {
            const response = await fetch(scriptURL, { method: 'POST', body });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${errorText}`);
            }
        } catch (error) {
            console.error('Error!', (error as Error).message);
            throw error;
        }
    };

    return (
        <div className="bg-[var(--background)] text-[var(--text-primary)] font-sans">
            <Header />
            <main>
                <Hero onOpenModal={handleOpenModal} />
                <Metrics />
                <UseCases />
                <HowItWorks />
                <FAQ />
                <EnterprisePlatform />
                <CTA />
            </main>
            <Footer />
            <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default App;