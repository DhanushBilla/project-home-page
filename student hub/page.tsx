import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { DashboardCards } from "@/components/dashboard-cards"
import { RecentResults } from "@/components/recent-results"
import { UpcomingClasses } from "@/components/upcoming-classes"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Welcome back, Student!</h2>
          <div className="flex items-center space-x-2">
            <Button>Download Timetable</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
            <TabsTrigger value="subjects">Subjects</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <DashboardCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardContent className="p-0">
                  <RecentResults />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardContent className="p-0">
                  <UpcomingClasses />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="results" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Current Semester Results</h3>
                {/* Results content will be implemented in separate component */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="timetable" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Weekly Timetable</h3>
                {/* Timetable content will be implemented in separate component */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="subjects" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Current Semester Subjects</h3>
                {/* Subjects content will be implemented in separate component */}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Student Profile</h3>
                {/* Profile content will be implemented in separate component */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

