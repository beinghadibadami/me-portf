const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center pt-20">
      <div className="container">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Text */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-5">
              Hello, I'm Hadi.
              <span className="animate-blink ml-0.5 text-brand">|</span>
            </h1>
            <p className="text-base sm:text-xl text-foreground font-medium leading-relaxed max-w-lg">
              "No treasure is more beneficial than knowledge, and no honor is greater than wisdom."
            </p>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[hsl(var(--glass-border))]">
              <img
                src="/lift.jpg"
                alt="Hadi Badami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
