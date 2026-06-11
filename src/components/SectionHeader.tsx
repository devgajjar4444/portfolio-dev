interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-3">{label}</p>
      <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-tight mb-4">{title}</h2>
      {description && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}
