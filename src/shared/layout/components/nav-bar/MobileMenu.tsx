import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { menuItems } from "./MenuItem";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden ml-auto text-2xl">☰</SheetTrigger>
      <SheetContent side="left" className="bg-[#0B2650] text-white">
        <ul className="flex flex-col space-y-4 mt-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-gray-300 text-lg cursor-pointer">
                  {item.title}
                </DropdownMenuTrigger>
                {item.subItems.length > 0 && (
                  <DropdownMenuContent align="start" className="bg-white text-black">
                    {item.subItems.map((sub, i) => (
                      <DropdownMenuItem key={i} className="hover:bg-gray-100 px-4 py-2">
                        {sub.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
