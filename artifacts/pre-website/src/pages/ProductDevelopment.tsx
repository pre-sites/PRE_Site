import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket, Shield } from "lucide-react";

export default function ProductDevelopment() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src={`${import.meta.env.BASE_URL}rocks/PaintedRock2_193_1773695319321.jpg`} 
            alt="Group of painted rocks forming a foundation" 
            className="w-full h-full object-cover opacity-15 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-wide text-sm mb-6">
              INNOVATION & R&D
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 max-w-4xl mx-auto">
              Building Solutions from <br/>a <span className="text-primary">Different Perspective</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We own, develop, and acquire products, SaaS applications, and intellectual property. 
              Our R&D incubator transforms rough ideas into viable standalone businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Focus */}
      <section className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">The R&D Incubator</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Painted Rock Enterprises functions as a Research and Development hub. We maintain a running list of ideas for products and services—even the bad or non-viable ones—for immediate and future reference.
              </p>
              <p className="text-lg text-muted-foreground">
                Promising concepts are developed in-house, brought to market, and then converted into sole proprietorships or LLCs to be sold, developed further, or owned and operated independently.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, title: "Ideation", desc: "Generating and cataloging viable concepts." },
                { icon: Code, title: "SaaS Dev", desc: "Building scalable software applications." },
                { icon: Shield, title: "IP Protection", desc: "Securing patents and trademarks." },
                { icon: Rocket, title: "Spin-offs", desc: "Launching mature products as LLCs." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-background p-6 rounded-2xl border border-border shadow-sm"
                >
                  <item.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-6">Have an Idea to Develop?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're looking for a technical partner or seeking to acquire one of our developed properties, let's connect.
          </p>
          <a 
            href="mailto:hello@paintedrockenterprises.com"
            className="inline-flex px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact the R&D Team
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
