import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--md-sys-color-surface)] border-t border-[var(--md-sys-color-outline)]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--md-sys-color-primary)] via-[var(--md-sys-color-secondary)] to-[var(--md-sys-color-tertiary)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">GDG</span>
              </div>
              <span className="text-lg font-medium text-[var(--md-sys-color-on-surface)]">GDG Community</span>
            </div>
            <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] leading-relaxed">
              Building a stronger developer community through collaboration and learning.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[var(--md-sys-color-on-surface)] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#events" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Events</a></li>
              <li><a href="#speakers" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Speakers</a></li>
              <li><a href="#join" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--md-sys-color-on-surface)] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors">Code of Conduct</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[var(--md-sys-color-on-surface)] mb-4">Connect</h3>
            <div className="flex space-x-2">
              <a href="#" className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface-variant)] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface-variant)] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface-variant)] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-surface-variant)] hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--md-sys-color-outline)]/20 text-center">
          <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
            © 2025 GDG Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
