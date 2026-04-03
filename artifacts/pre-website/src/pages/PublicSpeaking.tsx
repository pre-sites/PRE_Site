import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  "Well delivered – made easy to listen to & learn.",
  "Very real with real life examples",
  "Gave great tips on how to make networking more enjoyable",
  "Hit nail on the head for me",
  "Loved the real-life stories",
  "He had stories to back up the presentation",
  "I liked how we interacted at the end – great tips!",
  "Engaging & excellent speaker",
  "Great tips & sample conversations",
  "Love the companion. Had a nice cheerleading tone.",
  "Thank you so much for this information & training... from a stay at home mom for the past 9 years this really helped me feel I can do this and put myself out there!",
];

const photos = [
  {
    src: "KeithMcHugh_MND2017_04_1775226379196.jpg",
    alt: "Keith McHugh presenting at MND 2017 conference",
  },
  {
    src: "MidLunchLearn_1775226379196.jpg",
    alt: "Keith McHugh leading a lunch-and-learn session in a boardroom",
  },
  {
    src: "Small_Networking_Group_1775226379196.JPG",
    alt: "Attendees networking at a Painted Rock Enterprises event",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12">What Audiences Are Saying</h2>
        </motion.div>

        <div className="relative min-h-[160px] flex items-center justify-center">
          <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-white/20" size={64} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-white/95 font-medium leading-relaxed italic px-8"
            >
              "{testimonials[current]}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current ? "bg-white scale-125" : "bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PublicSpeaking() {
  const topics = [
    "Better Networking: Connecting for Rookies and Introverts",
    "Stop Working The Room: Authentic Networking for Real Connections",
    "Room Whisperer Certification: An Ambassador's Guide for Amazing Events",
    "The ROI of Hello: Why Being Here Could Change Your World.",
    "Networking workshops can be added to any presentation",
    "Customized content. Don't see something you need? Let's talk."
  ];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="overflow-hidden bg-accent text-accent-foreground">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <div className="flex items-center py-20 lg:py-28 px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold tracking-wide text-sm mb-6">
                PUBLIC SPEAKING
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Networking Reimagined: From Forced Talk to Real Connection.</h1>
              <p className="text-xl text-white/90 leading-relaxed">We bring the "Painted Rock" philosophy to the stage, challenging audiences to reconsider their assumptions about networking.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white flex items-end justify-center overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}rocks/Keith_McHugh_PresentingLAX_1775165697763.jpg`}
              alt="Keith McHugh presenting to an audience"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "50% 35%" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Speaking Topics + Contact Form */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Speaking Topics</h2>
              <div className="space-y-6 mb-12">
                {topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg font-medium text-foreground">{topic}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-muted rounded-3xl border border-border">
                <h3 className="font-bold text-xl mb-4 text-foreground">Why Book Painted Rock Enterprises?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Keith delivers a unique, story-driven approach based on his actual experiences of learning to network as a bona fide Introvert who had to change.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Keith ensures that audiences don't just leave with notes—they leave with a fundamentally shifted mindset to see connecting from a fresh angle and immediate steps to take that help everyone connect easier.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Photo Strip */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Keith in Action
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={`${import.meta.env.BASE_URL}rocks/${photo.src}`}
                  alt={photo.alt}
                  className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
