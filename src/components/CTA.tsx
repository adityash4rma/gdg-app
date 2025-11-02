import { Send, Bell, Heart } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--md-sys-color-background)]">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-[var(--md-sys-color-primary)] via-[var(--md-sys-color-secondary)] to-[var(--md-sys-color-tertiary)] rounded-[40px] p-12 md:p-16 overflow-hidden md3-elevation-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Be part of a vibrant community of developers, innovators, and tech enthusiasts. Get access to exclusive events, workshops, and networking opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-white text-[var(--md-sys-color-primary)] px-8 py-4 rounded-full font-bold text-base md3-elevation-1 hover:md3-elevation-3 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Join Community
                </span>
                <div className="absolute inset-0 bg-[var(--md-sys-color-primary)]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>

              <button className="group relative bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center">
                  <Bell className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" />
                  Get Notified
                </span>
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span className="text-sm">Free to join</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span className="text-sm">Open to all skill levels</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2" />
                <span className="text-sm">Active community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
