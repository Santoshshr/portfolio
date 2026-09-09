import { personal } from "../data/personal";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{ borderColor: "var(--border-primary)" }}
    >
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p
              className="text-sm font-bold tracking-[0.15em] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              {personal.name}
            </p>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              {personal.tagline}
            </p>
          </div>

          <SocialLinks size={18} />

          <p
            className="text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            {personal.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
