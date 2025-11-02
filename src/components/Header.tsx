import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--md-sys-color-surface)] border-b border-[var(--md-sys-color-outline)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--md-sys-color-primary)] via-[var(--md-sys-color-secondary)] to-[var(--md-sys-color-tertiary)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">GDG</span>
            </div>
            <div>
              <h1 className="text-xl font-medium text-[var(--md-sys-color-on-surface)]">GDG Community</h1>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)]">Google Developer Groups</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">
              Events
            </a>
            <a href="#speakers" className="text-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">
              Speakers
            </a>
            <a href="#join" className="text-sm font-medium text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">
              Join Us
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-full hover:bg-[var(--md-sys-color-surface-variant)] transition-colors">
            <Menu className="w-6 h-6 text-[var(--md-sys-color-on-surface)]" />
          </button>
        </div>
      </div>
    </header>
  );
}
