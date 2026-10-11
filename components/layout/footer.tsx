import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerSections, site } from "@/lib/content";
import { Container } from "@/components/shared/container";
import { Placeholder } from "@/components/shared/placeholder";

const linkClass = "inline-flex min-h-11 items-center text-navy-100 transition-colors hover:text-gold-300 lg:min-h-9";

export function Footer() {
  const contacts = [
    { label: "Email", value: site.email, icon: Mail },
    { label: "Phone", value: site.phone, icon: Phone },
    { label: "Address", value: site.address, icon: MapPin },
  ];
  return (
    <footer className="on-dark relative overflow-hidden bg-navy-950 text-navy-100">
      <div aria-hidden="true" className="dots absolute inset-0 opacity-60" />
      <Container className="relative pb-8 pt-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <p className="font-serif text-4xl leading-none tracking-tight text-white">
              Vidyam de<span className="text-gold-300">Ai</span>
            </p>
            <p className="label mt-4 text-gold-300">{site.tagline}</p>
            <p className="mt-5 max-w-sm leading-relaxed">{site.description}</p>
          </div>
          {/* The four-division nav has no room for the individual programmes, so the
              footer is what keeps every page reachable. See content/site.ts. */}
          {footerSections.map((section, i) => (
            <div key={section.title} className={i === 0 ? "lg:col-span-3 lg:col-start-6" : "lg:col-span-2"}>
              <h2 className="font-display text-lg font-bold text-white">{section.title}</h2>
              <ul className="mt-3">
                {section.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="font-display text-lg font-bold text-white">Get in touch</h2>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-300">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="sr-only">{c.label}: </span>
                  <span className="text-white">{c.value ?? <Placeholder label={c.label.toLowerCase()} />}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-navy-100/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="flex gap-6">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-gold-300">
              Privacy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-gold-300">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
