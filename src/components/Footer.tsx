import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-muted">
        <p className="transition-colors duration-300 hover:text-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="transition-colors duration-300 hover:text-accent">{personal.name}</span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
