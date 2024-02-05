import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="w-10 h-10 rounded-sm bg-primary relative">
            <p className="absolute bottom-0 right-1 font-bold text-primary-foreground">
              LS
            </p>
          </div>
        </div>
        <nav>
          <ul className="inline-flex">
            <li>
              <Link
                href="/courses"
                className={buttonVariants({ variant: "ghost" })}
              >
                Courses
              </Link>
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                Problems
              </Link>
              <Link href="#" className={buttonVariants({ variant: "ghost" })}>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
