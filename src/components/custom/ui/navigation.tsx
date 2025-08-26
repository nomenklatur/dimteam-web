import { Button } from "@/components/ui/button";
import Link from "next/link";
const Navigation = () => {
  return (
    <nav className="bg-black text-primary-foreground px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-semibold">DimTeam</h1>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Product
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Solutions
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Resources
            </a>
            <a href="#" className="text-sm hover:text-accent transition-colors">
              Pricing
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:text-black cursor-pointer">
            Log in
          </Button>
          <Link href="/auth/register">
            <Button variant="secondary" size="sm" className="cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
