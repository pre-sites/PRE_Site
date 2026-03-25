import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Painted Rock Enterprises
            </h3>
            <p className="text-muted text-balance max-w-sm">
              Delivering a different, useful, and thoughtful perspective across product development, public speaking, and coaching.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/product-development" className="text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                  Product Development
                  <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/public-speaking" className="text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                  Public Speaking
                  <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/consulting-coaching" className="text-muted hover:text-primary transition-colors flex items-center gap-2 group">
                  Consulting & Coaching
                  <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <a 
              href="mailto:hello@paintedrockllc.com" 
              className="text-muted hover:text-primary transition-colors inline-block"
            >
              hello@paintedrockllc.com
            </a>
          </div>
          
        </div>
        
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/60">
          <p>© {new Date().getFullYear()} Painted Rock Enterprises LLC. All rights reserved.</p>
          <p>A Different Perspective.</p>
        </div>
      </div>
    </footer>
  );
}
