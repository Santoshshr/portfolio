import { ventures } from "../data/ventures";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { VentureCard } from "../components/VentureCard";

export function Ventures() {
  return (
    <section id="ventures" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Ventures"
          title="Ventures"
          subtitle="Ideas I'm building into something bigger."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {ventures.map((venture, i) => (
            <VentureCard key={venture.name} venture={venture} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
