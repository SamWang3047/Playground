import { NavLink } from "@/components/navigation/NavLink";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/reports", label: "历史周报" },
  { href: "/reports/new", label: "写周报" },
];

export function MainNav() {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="Main navigation">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}
    </nav>
  );
}
