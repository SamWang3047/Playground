import { NavLink } from "@/components/navigation/NavLink";
import { messages } from "@/i18n/messages";

const navItems = [
  { href: "/", label: messages.nav.home },
  { href: "/reports", label: messages.nav.reports },
  { href: "/reports/new", label: messages.nav.newReport },
];

export function MainNav() {
  return (
    <nav className="flex flex-wrap gap-2" aria-label={messages.nav.ariaMainNavigation}>
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
