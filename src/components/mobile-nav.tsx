import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="xl:hidden">
        <Button variant={"ghost"} name="Abrir Menu">
          <span className="sr-only">Abrir Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-slate-900">
        <SheetHeader>
          <SheetTitle>Valentaxi</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4 py-4">
          <SheetClose asChild>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li>
              <a href="#sobre-nosotros">Sobre Nosotros</a>
            </li>
          </SheetClose>
          <SheetClose asChild>
            <li>
              <a href="#testimonios">Testimonios</a>
            </li>
          </SheetClose>
        </ul>
        <SheetFooter>
          <SheetClose asChild>
            <a
              href="https://api.whatsapp.com/send/?phone=584124791885&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="norel"
              className={buttonVariants({ variant: "brand", size: "lg" })}
            >
              Contactanos
            </a>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
