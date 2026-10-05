import { ArrowUp } from "lucide-react";
export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>Have a role or project in mind?</p>
        <a href="mailto:roshan.razak@outlook.com">roshan.razak@outlook.com</a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Roshan Razak</span>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "auto"
                : "smooth",
            })
          }
        >
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
