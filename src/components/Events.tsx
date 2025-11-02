import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  color: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Web Development Workshop',
    date: 'Dec 15, 2025',
    time: '2:00 PM',
    location: 'Tech Hub',
    type: 'Workshop',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Cloud Architecture Talk',
    date: 'Dec 22, 2025',
    time: '4:00 PM',
    location: 'Innovation Center',
    type: 'Talk',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Mobile Dev Meetup',
    date: 'Dec 29, 2025',
    time: '3:00 PM',
    location: 'Startup Campus',
    type: 'Meetup',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    date: 'Jan 5, 2026',
    time: '5:00 PM',
    location: 'Digital Lab',
    type: 'Workshop',
    color: 'from-yellow-500 to-yellow-600'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--md-sys-color-background)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--md-sys-color-on-surface)] mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-[var(--md-sys-color-on-surface-variant)] max-w-2xl mx-auto">
            Join our community events and expand your knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-3xl p-6 md3-elevation-1 hover:md3-elevation-3 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${event.color} opacity-10 rounded-bl-full transition-all duration-300 group-hover:w-40 group-hover:h-40`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${event.color}`}>
                    {event.type}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[var(--md-sys-color-outline)] transform transition-transform group-hover:translate-x-1" />
                </div>

                <h3 className="text-xl font-bold text-[var(--md-sys-color-on-surface)] mb-4 group-hover:text-[var(--md-sys-color-primary)] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-[var(--md-sys-color-on-surface-variant)]">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
