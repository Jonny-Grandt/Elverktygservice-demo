import React, { useState } from 'react';
import { Newspaper, ExternalLink } from 'lucide-react';
import { facebookPosts, instagramPosts } from '../../data/socialData';

export function SocialSection() {
  const [activeTab, setActiveTab] = useState('facebook'); // 'facebook' | 'instagram'

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-sky-500/[0.015] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Nyheter & Aktuellt</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-[var(--text-main)] tracking-tight">
            Följ oss på Sociala Medier
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
            Glimtar från verkstaden i Jönköping, serviceråd för dina maskiner och aktuella nyheter på Facebook och Instagram.
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <a
              href="https://www.facebook.com/Elverktygsservice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-xs font-bold text-[var(--text-main)] hover:border-amber-500 hover:text-amber-500 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.25.19 2.25.19v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
              <span>Besök Facebook</span>
            </a>

            <a
              href="https://www.instagram.com/elverktygsserviceijonkopingab?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-glass)] text-xs font-bold text-[var(--text-main)] hover:border-amber-500 hover:text-amber-500 transition"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span>Besök Instagram</span>
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('facebook')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'facebook'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.25.19 2.25.19v2.47h-1.27c-1.23 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
            </svg>
            <span>Facebook Inlägg</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'instagram'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-[var(--bg-card)] border border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram Galleri</span>
          </button>
        </div>

        {/* Facebook Grid */}
        {activeTab === 'facebook' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in">
            {facebookPosts.map((post) => (
              <div
                key={post.id}
                className="card-panel rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                      EV
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[var(--text-main)] leading-snug">
                        {post.author}
                      </h4>
                      <span className="text-[10px] text-[var(--text-subtle)]">{post.time}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {post.text}
                  </p>

                  <div className="rounded-xl overflow-hidden border border-[var(--border-glass)] mb-4 aspect-video bg-black/20">
                    <img src={post.image} alt="Facebook post" className="w-full h-full object-cover" />
                  </div>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 transition pt-2"
                >
                  <span>Visa på Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Instagram Grid */}
        {activeTab === 'instagram' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-slide-in">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="card-panel rounded-2xl p-5 flex flex-col justify-between hover:-translate-y-1 transition duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                      IG
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs text-[var(--text-main)] leading-snug">
                        {post.handle}
                      </h4>
                      <span className="text-[10px] text-[var(--text-subtle)]">{post.tag}</span>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-[var(--border-glass)] mb-4 aspect-[4/3] bg-black/20">
                    <img src={post.image} alt="Instagram post" className="w-full h-full object-cover" />
                  </div>

                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {post.text}
                  </p>
                </div>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-500 hover:text-amber-400 transition pt-2"
                >
                  <span>Visa på Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
