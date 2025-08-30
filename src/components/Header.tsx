import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full py-6 px-4 border-b flex items-center justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">ContaIA</span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-300">Automatización Contable</span>
      </div>
      <nav className="flex gap-4 items-center">
        <Link href="#servicios" className="text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400">Servicios</Link>
        <Link href="#contacto" className="text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400">Contacto</Link>
        <ThemeToggle />
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-700 dark:bg-blue-500 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer hover:bg-blue-800 dark:hover:bg-blue-600">
              Iniciar sesión
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-blue-700 dark:bg-blue-500 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer hover:bg-blue-800 dark:hover:bg-blue-600">
              Registrarse
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
