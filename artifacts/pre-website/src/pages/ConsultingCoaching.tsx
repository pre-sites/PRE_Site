import { PageLayout } from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import { Compass, Target, TrendingUp } from "lucide-react";

export default function ConsultingCoaching() {
  return (
    <PageLayout>
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Guidance for the <br/>Road Ahead.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you're steering a company through growth or seeking individual executive clarity, our consulting and coaching services provide the outside perspective necessary to break through plateaus.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10"
            >
              <img 
                src={`${import.meta.env.BASE_URL}rocks/~PaintedRock2_047_1773695319320.jpg`} 
                alt="Two painted house rocks side by side representing partnership" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-background p-10 rounded-3xl shadow-sm border border-border"
            >
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Business Consulting</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We embed with your team to analyze operational inefficiencies, product bottlenecks, and strategic blind spots. By applying our "different perspective" methodology, we help companies pivot, scale, and optimize their intellectual property.
              </p>
              <ul className="space-y-3 text-foreground font-medium">
                <li className="flex items-center gap-3"><Target size={18} className="text-secondary" /> Strategy & Planning</li>
                <li className="flex items-center gap-3"><Target size={18} className="text-secondary" /> Artificial Intelligence Implementation</li>
                <li className="flex items-center gap-3"><Target size={18} className="text-secondary" /> Organizational Design</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background p-10 rounded-3xl shadow-sm border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Compass size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Executive Coaching</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Designed for founders, executives, and high-potential leaders. We focus on personal growth, advanced networking techniques, and developing the mental flexibility to see challenges from multiple angles.
              </p>
              <ul className="space-y-3 text-foreground font-medium">
                <li className="flex items-center gap-3"><Target size={18} className="text-primary" /> Leadership Development</li>
                <li className="flex items-center gap-3"><Target size={18} className="text-primary" /> Effective Networking</li>
                <li className="flex items-center gap-3"><Target size={18} className="text-primary" /> Perspective Shifting</li>
              </ul>
            </motion.div>

          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Gain a New Perspective?</h2>
              <p className="text-muted-foreground">Fill out the form below to inquire about our consulting availability.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
