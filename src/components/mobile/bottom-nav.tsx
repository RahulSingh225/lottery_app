import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, User, Settings } from "lucide-react";
import Link from "next/link";

export function BottomNav({ className }: { className?: string }) {
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 border-t bg-background px-4 pb-safe-area-inset-bottom",
      className
    )}>
      <div className="flex justify-around py-2">
        <Link href="/mobile/home" passHref>
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/mobile/profile" passHref>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/mobile/settings" passHref>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}