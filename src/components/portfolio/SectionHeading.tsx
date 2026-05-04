interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}
export const SectionHeading = ({ eyebrow, title, subtitle }: Props) => (
  <div className="text-center max-w-2xl mx-auto mb-14">
    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gradient mb-3">
      {eyebrow}
    </p>
    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
  </div>
);