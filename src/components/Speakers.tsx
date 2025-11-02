import { Linkedin, Twitter } from 'lucide-react';

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  topic: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Senior Engineer',
    company: 'Google',
    topic: 'Cloud Native Development',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 2,
    name: 'Alex Rivera',
    role: 'Tech Lead',
    company: 'Microsoft',
    topic: 'AI & Machine Learning',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name: 'Maya Patel',
    role: 'Principal Developer',
    company: 'Meta',
    topic: 'Mobile Development',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Solutions Architect',
    company: 'Amazon',
    topic: 'Scalable Systems',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    linkedin: '#',
    twitter: '#'
  }
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--md-sys-color-primary-container)]/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--md-sys-color-on-surface)] mb-4">
            Past Speakers
          </h2>
          <p className="text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl mx-auto">
            Industry experts who shared their knowledge with our community
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group bg-white rounded-3xl p-6 md3-elevation-1 hover:md3-elevation-3 transition-all duration-300 text-center"
            >
              <div className="relative mb-4 inline-block">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-[var(--md-sys-color-primary-container)] group-hover:ring-[var(--md-sys-color-primary)] transition-all duration-300">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-lg font-bold text-[var(--md-sys-color-on-surface)] mb-1">
                {speaker.name}
              </h3>
              <p className="text-sm text-[var(--md-sys-color-primary)] font-medium mb-1">
                {speaker.role}
              </p>
              <p className="text-xs text-[var(--md-sys-color-on-surface-variant)] mb-3">
                {speaker.company}
              </p>

              <div className="pt-3 border-t border-[var(--md-sys-color-outline)]/20">
                <p className="text-sm text-[var(--md-sys-color-on-surface-variant)] mb-3">
                  {speaker.topic}
                </p>

                <div className="flex justify-center space-x-2">
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] hover:text-white text-[var(--md-sys-color-on-surface-variant)] transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {speaker.twitter && (
                    <a
                      href={speaker.twitter}
                      className="p-2 rounded-full bg-[var(--md-sys-color-surface-variant)] hover:bg-[var(--md-sys-color-primary)] hover:text-white text-[var(--md-sys-color-on-surface-variant)] transition-all duration-300 transform hover:scale-110 active:scale-95"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
