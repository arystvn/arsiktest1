import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b border-border bg-card">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-serif font-light tracking-[0.2em] text-foreground">
            avishu
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="/new"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Новинки
            </Link>
          </li>
          <li>
            <Link
              href="/women"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Женщинам
            </Link>
          </li>
          <li>
            <Link
              href="/men"
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
            >
              Мужчинам
            </Link>
          </li>
          <li>
            <Link
              href="/sale"
              className="text-sm uppercase tracking-wider text-accent hover:text-accent/80 transition-colors"
            >
              Sale
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Поиск"
          >
            <Search size={20} />
          </button>
          <Link
            href="/account"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Аккаунт"
          >
            <User size={20} />
          </Link>
          <Link
            href="/cart"
            className="relative text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Корзина"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-card text-[10px] rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
