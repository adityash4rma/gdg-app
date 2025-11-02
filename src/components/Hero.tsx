import { Calendar, Users, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--md-sys-color-primary-container)]/30 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)] px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Building the future together</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[var(--md-sys-color-on-surface)] mb-6 tracking-tight">
          Welcome to
          <span className="block bg-gradient-to-r from-[var(--md-sys-color-primary)] via-[var(--md-sys-color-secondary)] to-[var(--md-sys-color-tertiary)] bg-clip-text text-transparent">
            GDG Community
          </span>
        </h1>

        <p className="text-xl text-[var(--md-sys-color-on-surface-variant)] max-w-2xl mx-auto mb-12 leading-relaxed">
          Connect, learn, and grow with fellow developers through workshops, talks, and hands-on learning experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full md3-elevation-1">
            <Calendar className="w-5 h-5 text-[var(--md-sys-color-primary)]" />
            <span className="text-sm font-medium text-[var(--md-sys-color-on-surface)]">50+ Events Yearly</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full md3-elevation-1">
            <Users className="w-5 h-5 text-[var(--md-sys-color-secondary)]" />
            <span className="text-sm font-medium text-[var(--md-sys-color-on-surface)]">1000+ Members</span>
          </div>
        </div>
      </div>
    </section>
  );
}
