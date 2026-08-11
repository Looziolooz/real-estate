"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/components/lang-context";
import { Icon } from "@/components/icons";
import { scrollToSection, gsap, prefersReducedMotion } from "@/lib/motion";

/** The one breakpoint the mobile menu owns. Kept in sync with the
 *  `max-width: 1023px` blocks in globals.css — above it the header is the
 *  original single row and nothing here is allowed to touch it. */
const DESKTOP_QUERY = "(min-width: 1024px)";

export default function Nav() {
  const { t } = useLang();
  const [active, setActive] = useState("nav.home");
  const [open, setOpen] = useState(false);
  /* Every link now names a real destination. They were all href="#" — six
     controls that highlighted themselves and moved nobody. Anything without a
     section on this page keeps "#" honestly rather than pretending. */
  const links: { key: string; href: string }[] = [
    { key: "nav.home", href: "#top" },
    { key: "nav.search", href: "#bostader" },
    { key: "nav.sell", href: "#kontakt" },
    { key: "nav.philosophy", href: "#filosofi" },
    { key: "nav.about", href: "#filosofi" },
    { key: "nav.journal", href: "#bostader" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  /* The bar starts transparent over the plate and only takes a ground once the
     page has moved under it. Read from a passive scroll listener rather than a
     ScrollTrigger: this is one boolean, and a trigger would add a pin-spacer
     measurement to every refresh for nothing. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* The header drops in once, on load. */
  useEffect(() => {
    const el = headerRef.current;
    if (!el || prefersReducedMotion()) return;
    const tw = gsap.fromTo(
      el,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.15 },
    );
    return () => {
      tw.kill();
      gsap.set(el, { clearProps: "transform,opacity" });
    };
  }, []);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /** Focus goes back to the control that opened the panel, always. */
  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Scroll lock. Both elements, because Lenis smooth-scrolls the window and
     which of the two is the scrolling box depends on the browser. The cleanup
     runs on close AND on unmount, so the page can never be left locked. */
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const body = document.body;
    const prevRoot = root.style.overflow;
    const prevBody = body.style.overflow;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      root.style.overflow = prevRoot;
      body.style.overflow = prevBody;
    };
  }, [open]);

  /* Escape closes; Tab is trapped inside the panel while it is modal. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (e.shiftKey && (current === first || !panel.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  /* Move focus into the panel once it is open. */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  /* Resizing past the breakpoint drops the panel — otherwise the desktop bar
     comes back with the scroll still locked behind an invisible overlay. */
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const pick = useCallback(
    (e: React.MouseEvent, key: string, href?: string) => {
      e.preventDefault();
      setActive(key);
      if (!href || href === "#") return;
      if (href === "#top") {
        scrollToSection("body");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      scrollToSection(href);
    },
    [],
  );

  return (
    <>
      <header ref={headerRef} className={scrolled ? "nav is-scrolled" : "nav"}>
        <div className="wrap nav-inner">
          <a href="#top" className="logo" onClick={(e) => pick(e, "nav.home", "#top")}>
            Meridia<span className="dot"></span>
          </a>
          <nav className="nav-links">
            {links.map((l) => (
              <a
                key={l.key}
                href={l.href}
                className={active === l.key ? "active" : ""}
                onClick={(e) => pick(e, l.key, l.href)}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="btn btn-primary">
              {t("nav.consultation")}
              <Icon name="arrow" size={14} />
            </button>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="nav-burger"
            aria-label={t("nav.menuOpen")}
            aria-expanded={open}
            aria-controls="nav-mobile-panel"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      {/* Outside <header> on purpose: .nav carries a backdrop-filter, which
          makes it the containing block for any fixed-position descendant and
          would pin this overlay inside the 82px bar. */}
      <div
        id="nav-mobile-panel"
        ref={panelRef}
        className={open ? "nav-panel is-open" : "nav-panel"}
        role="dialog"
        aria-modal="true"
        aria-label={t("nav.menu")}
        aria-hidden={!open}
      >
        <div className="wrap nav-panel-top">
          <span className="logo">
            Meridia<span className="dot"></span>
          </span>
          <div className="nav-panel-top-actions">
            <button
              ref={closeRef}
              type="button"
              className="nav-burger"
              aria-label={t("nav.menuClose")}
              onClick={close}
            >
              <Icon name="close" size={22} />
            </button>
          </div>
        </div>

        <div className="wrap nav-panel-body">
          <nav className="nav-panel-links">
            {links.map((l, i) => (
              <a
                key={l.key}
                href={l.href}
                style={{ "--i": i } as React.CSSProperties}
                className={active === l.key ? "active" : ""}
                onClick={(e) => {
                  // Close first: the panel locks body scroll, and scrolling to
                  // a section while it is still locked goes nowhere.
                  close();
                  pick(e, l.key, l.href);
                }}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="nav-panel-foot">
            <button className="btn btn-primary nav-panel-cta" onClick={close}>
              {t("nav.consultation")}
              <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
