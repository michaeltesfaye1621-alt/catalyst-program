import { Quote } from "lucide-react";

const Specialist = () => {
  return (
    <section id="specialist" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The <span className="text-primary">Catalyst</span> Method
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A revolutionary approach to biomechanical healing that goes beyond traditional therapy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo Placeholder */}
          <div className="flex justify-center animate-fade-in-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-muted border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl mb-2">👤</div>
                  <p className="text-sm text-muted-foreground">Photo Placeholder</p>
                </div>
              </div>
              {/* Teal Accent Ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20 -z-10" />
              <div className="absolute -inset-4 rounded-full border border-primary/10 -z-10" />
            </div>
          </div>

          {/* Bio Content */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-4">Dr. Aris "The Catalyst" Thorne</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in biomechanical physiotherapy, Dr. Thorne has developed 
              a unique methodology that addresses the root cause of pain, not just the symptoms. 
              His approach combines cutting-edge diagnostics with personalized treatment protocols 
              that have helped hundreds of patients—from elite athletes to everyday individuals—achieve 
              lasting recovery and peak performance.
            </p>

            {/* Pull Quote */}
            <blockquote className="relative pl-6 border-l-2 border-primary">
              <Quote className="absolute -left-4 -top-2 h-8 w-8 text-primary/30" />
              <p className="text-lg font-medium italic text-foreground mb-2">
                "Recovery isn't just about getting back to zero; it's about exceeding your previous peak."
              </p>
            </blockquote>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                Expert Clinical Physiotherapist
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                Germany
              </span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground">
                Biomedical Approach
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialist;
