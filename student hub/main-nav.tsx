import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <GraduationCap className="h-6 w-6" />
        <span className="font-bold text-xl">Student Portal</span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/timetable"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Timetable
        </Link>
        <Link
          href="/results"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Results
        </Link>
        <Link
          href="/subjects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Subjects
        </Link>
        <Link
          href="/achievements"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Achievements
        </Link>
      </nav>
    </div>
  )
}

