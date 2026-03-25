import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <PageLayout>
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-8">
            <SearchX size={40} className="text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-foreground">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Looks like we need to look at this URL from a different perspective. The page you're searching for doesn't exist.
          </p>
          <Link 
            href="/"
            className="px-8 py-4 rounded-full font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Return Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
