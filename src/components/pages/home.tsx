import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  Settings,
  User,
  Play,
  PlusCircle,
  Trophy,
  Clock,
  Users,
  LogIn,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/VercelAuthProvider";
import UserMenu from "@/components/ui/user-menu";

export default function LandingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#46178F] to-[#7B2CBF] text-white flex flex-col">
      <div className="fixed top-4 right-4 z-50">
        <UserMenu />
      </div>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Interactive Quiz Platform
          </h1>
          <h2 className="text-2xl font-medium mb-2">
            Create, host, and play engaging quizzes in real-time
          </h2>
          <p className="text-white/80 text-sm mb-12">Made by Nimesh Patel</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
          <Link to={user ? "/create" : "/signup"} className="w-full sm:w-auto">
            <Button className="w-full rounded-full bg-white text-[#46178F] hover:bg-gray-100 text-lg px-8 py-6 h-auto">
              Create a Quiz
            </Button>
          </Link>

          <Link to="/join" className="w-full sm:w-auto">
            <Button className="w-full rounded-full bg-[#FF3355] hover:bg-[#e02e4d] text-white text-lg px-8 py-6 h-auto">
              Join a Game
            </Button>
          </Link>

          {!user && (
            <Link to="/login" className="w-full sm:w-auto mt-4 sm:mt-0">
              <Button className="w-full rounded-full bg-[#7B2CBF] hover:bg-[#6a24a5] text-white text-lg px-8 py-6 h-auto">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </main>

      <footer className="py-4 text-center text-white/60">
        <p>Copyright © 2025 QuizMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}
