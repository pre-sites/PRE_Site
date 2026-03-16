import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    // Simulate API call
    setTimeout(() => {
      setIsPending(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-card rounded-3xl p-8 shadow-xl shadow-black/5 border border-border">
      <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
      
      {isSuccess ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200 text-center"
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="text-green-600" size={24} />
          </div>
          <h4 className="font-semibold text-lg mb-2">Message Sent!</h4>
          <p className="text-green-700/80">Thank you for reaching out. We'll get back to you from a different perspective soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80 ml-1">Name</label>
              <input 
                id="name"
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80 ml-1">Email</label>
              <input 
                id="email"
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="topic" className="text-sm font-medium text-foreground/80 ml-1">Topic</label>
            <select 
              id="topic"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
            >
              <option value="speaking">Public Speaking Inquiry</option>
              <option value="consulting">Consulting / Coaching</option>
              <option value="product">Product Development</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground/80 ml-1">Message</label>
            <textarea 
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
              placeholder="How can we help you gain a different perspective?"
            />
          </div>
          
          <button 
            type="submit"
            disabled={isPending}
            className="w-full py-4 px-6 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 hover:bg-primary/95 active:translate-y-0 active:shadow-md disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 flex items-center justify-center gap-2"
          >
            {isPending ? "Sending..." : "Send Message"}
            {!isPending && <Send size={18} />}
          </button>
        </form>
      )}
    </div>
  );
}
