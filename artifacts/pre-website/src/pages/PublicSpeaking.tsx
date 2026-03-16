import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function PublicSpeaking() {
  const topics = [
    "The Power of a Different Perspective",
    "Authentic & Effective Networking",
    "Product Development Lifecycles",
    "Finding the Hidden Value in 'Bad' Ideas"
  ];

  return (
    <PageLayout>
      <section className="relative py-20 lg:py-28 overflow-hidden bg-accent text-accent-foreground">
        <div className="absolute inset-0">
          <img 
            src={`${import.meta.env.BASE_URL}rocks/PaintedRock2_169_1773695635731.JPG`} 
            alt="Row of rocks standing out" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold tracking-wide text-sm mb-6">
              PUBLIC SPEAKING
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Inspiring Audiences to Shift Their View
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We bring the "Painted Rock" philosophy to the stage, challenging audiences to reconsider their assumptions about business, networking, and product creation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-8">Speaking Topics</h2>
              <div className="space-y-6 mb-12">
                {topics.map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg font-medium text-foreground">{topic}</p>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-muted rounded-3xl border border-border">
                <h3 className="font-display font-bold text-xl mb-4 text-foreground">Why Book PRE?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Decades of hands-on experience in business development combined with a unique, story-driven approach ensures that audiences don't just leave with notes—they leave with a fundamentally shifted mindset ready to tackle challenges from a fresh angle.
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
    </PageLayout>
  );
}
