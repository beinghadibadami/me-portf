const ContactSection = () => {
  return (
    <section id="contact" className="py-24 pb-32 flex justify-center text-center">
      <div className="container max-w-3xl flex flex-col items-center">
        {/* Contact Badge */}
        <div className="inline-block mb-6 px-3 py-1.5 rounded-md bg-foreground text-background text-[13px] font-semibold hover:scale-105 transition-transform">
          Contact
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
          Get in Touch
        </h2>

        {/* Text */}
        <p className="text-foreground-muted text-lg md:text-xl leading-relaxed">
          Want to chat? Just shoot me a dm{' '}
          <a
            href="https://x.com/hadi_badami14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline transition-all"
          >
            DM me on X (Twitter)
          </a>{' '}
          or email me directly at{' '}
          <a
            href="mailto:hadibadami06@gmail.com"
            className="text-blue-500 hover:underline transition-all"
          >
            hadibadami06@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
