type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-[46rem]"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="section-copy mt-4 text-pretty">{description}</p>
    </div>
  );
}
