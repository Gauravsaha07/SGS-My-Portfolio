import React, { useState } from 'react';
import { Phone, Mail, Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent! Thanks for reaching out.');
    setTimeout(() => setFormStatus(null), 4000);
  };

  const contactMethods = [
    {
      key: 'email',
      icon: Mail,
      label: 'Email',
      value: 'gauravsaha362@gmail.com',
      actionUrl: 'mailto:gauravsaha362@gmail.com',
      isLink: true,
      copyable: true
    },
    {
      key: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '+91 8839014534',
      actionUrl: 'tel:8839014534',
      isLink: true,
      copyable: true
    },
    {
      key: 'instagram',
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@sgs_gaurav_builds_',
      secondaryValue: '@sgs_fullstackwith_gaurav',
      actionUrl: 'https://instagram.com/sgs_gaurav_builds_',
      secondaryUrl: 'https://instagram.com/sgs_fullstackwith_gaurav',
      isLink: true,
      copyable: false
    },
    {
      key: 'linkedin',
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'Gaurav Saha',
      actionUrl: 'https://www.linkedin.com/in/gaurav-saha-2b805a36b/',
      isLink: true,
      copyable: false
    }
  ];

  return (
    <div className="max-w-4xl space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
          <MessageSquare size={13} />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Work Together
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl">
          Feel free to reach out for project inquiries, full-stack development roles, or technical collaborations.
        </p>
      </div>

      {/* Contact Methods List */}
      <div className="space-y-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold mb-4">
          Direct Channels
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {contactMethods.map((method) => {
            const IconComponent = method.icon;

            return (
              <div
                key={method.key}
                className="p-5 sm:p-6 rounded-2xl bg-[#121214] border border-white/10 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                {/* Left: Icon & Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {method.label}
                    </div>
                    {method.isLink ? (
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-0.5">
                        <a
                          href={method.actionUrl}
                          target={method.actionUrl.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                        >
                          <span>{method.value}</span>
                          <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                        </a>

                        {method.secondaryValue && (
                          <a
                            href={method.secondaryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                          >
                            <span>({method.secondaryValue})</span>
                            <ArrowUpRight size={12} className="text-zinc-500" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="text-base font-semibold text-white mt-0.5">
                        {method.value}
                      </div>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {method.copyable && (
                    <button
                      onClick={() => handleCopy(method.value, method.key)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedKey === method.key ? (
                        <>
                          <Check size={14} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} className="text-zinc-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}

                  {method.isLink && (
                    <a
                      href={method.actionUrl}
                      target={method.actionUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-semibold transition-colors"
                    >
                      <span>Open</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimal Message Form */}
      <div className="pt-6 space-y-6 border-t border-white/10">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
            Send a Quick Message
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Prefer writing directly? Leave a message below.
          </p>
        </div>

        {formStatus && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium flex items-center gap-2">
            <Check size={16} />
            <span>{formStatus}</span>
          </div>
        )}

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              required
              placeholder="Hi Gaurav, I'd like to discuss a project..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#121214] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-semibold text-sm transition-all"
          >
            <span>Send Message</span>
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
