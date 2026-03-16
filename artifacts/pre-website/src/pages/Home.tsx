import { PageLayout } from "@/components/layout/PageLayout";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Mic, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const rocks = [
    `${import.meta.env.BASE_URL}rocks/PaintedRock2_183_1773695635732.JPG`,
    `${import.meta.env.BASE_URL}rocks/~PaintedRock2_047_1773695319320.jpg`,
    `${import.meta.env.BASE_URL}rocks/~PaintedRock2_069_1773695319321.jpg`,
    `${import.meta.env.BASE_URL}rocks/PaintedRock2_050_1773695635729.JPG`,
    `${import.meta.env.BASE_URL}rocks/PaintedRock2_053_1773695635729.JPG`,
    `${import.meta.env.BASE_URL}rocks/PaintedRock2_010_1773695635729.JPG`,
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-muted/50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-foreground">
                A <span className="text-primary italic">Different</span><br/> Perspective.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">Painted Rock Enterprises specializes in providing transformative business consulting, delivering impactful public speaking, and developing innovative products.</p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/consulting-coaching" 
                  className="px-8 py-4 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Work With Us
                </Link>
                <Link 
                  href="#story" 
                  className="px-8 py-4 rounded-full font-semibold bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 border-4 border-background"
            >
              <img 
                src={`${import.meta.env.BASE_URL}rocks/~PaintedRock2_193_1773701436192.jpg`}
                alt="Four painted rocks lined up — a collection of hand-painted house rocks" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Brand Story Section */}
      <section id="story" className="py-24 bg-secondary text-secondary-foreground relative scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 text-primary-foreground">
              Why "Painted Rock?"
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-secondary-foreground/90 font-medium leading-relaxed text-left">
              <p>
                Not too long ago, as I began speaking, I was being told that people had not considered my information. That it was from a different perspective.
              </p>
              <p>
                Next, go back many decades to when I would walk the dogs with my dad. He would stop from time to time, pick up a rock along the path and bring it home. At some point after that, we would see a new 'painted rock' added to the collection.
              </p>
              <p>
                He always taught me that seeing a situation from different perspectives was a good thing. Consider different angles of what was being said or seen. Look at a building or car from a different perspective and you may have a hard time figuring out what it was.
              </p>
              <p className="text-2xl font-display text-primary-foreground italic text-center pt-6 border-t border-white/10 mt-10">
                "They represent what I strive to deliver in my work:<br/> a different, useful, thoughtful perspective."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Rock Gallery */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">The Collection</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The original rocks from my dad's collection that inspired the name and philosophy of Painted Rock Enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {rocks.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-md cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Painted Rock ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Our Focus Areas</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Operating across three distinct segments to build, inspire, and guide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Link href="/product-development">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 h-full flex flex-col group cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Product Development</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  From ideation to launch. We develop applications, SaaS platforms, and intellectual property, acting as an R&D incubator.
                </p>
                <div className="flex items-center text-primary font-semibold mt-auto">
                  Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Service Card 2 */}
            <Link href="/public-speaking">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 h-full flex flex-col group cursor-pointer"
              >
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary-foreground transition-colors duration-300">
                  <Mic size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-accent transition-colors">Public Speaking</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Engaging keynotes and workshops on networking, product development, and the power of looking from a different perspective.
                </p>
                <div className="flex items-center text-accent font-semibold mt-auto">
                  Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>

            {/* Service Card 3 */}
            <Link href="/consulting-coaching">
              <motion.div 
                whileHover={{ y: -8 }}
                className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 h-full flex flex-col group cursor-pointer"
              >
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-primary-foreground transition-colors duration-300">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">Consulting & Coaching</h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  Strategic business consulting and personalized coaching to help leaders and organizations unlock their potential.
                </p>
                <div className="flex items-center text-secondary font-semibold mt-auto">
                  Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
