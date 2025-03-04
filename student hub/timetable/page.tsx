import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function TimetablePage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Timetable</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Timetable
            </Button>
          </div>
        </div>

        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">Weekly Schedule</TabsTrigger>
            <TabsTrigger value="daily">Daily View</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Timetable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-6 gap-4">
                  {/* Time column */}
                  <div className="space-y-8 pt-8">
                    <div className="text-sm font-medium">9:00 AM</div>
                    <div className="text-sm font-medium">10:00 AM</div>
                    <div className="text-sm font-medium">11:00 AM</div>
                    <div className="text-sm font-medium">12:00 PM</div>
                    <div className="text-sm font-medium">1:00 PM</div>
                    <div className="text-sm font-medium">2:00 PM</div>
                    <div className="text-sm font-medium">3:00 PM</div>
                    <div className="text-sm font-medium">4:00 PM</div>
                    <div className="text-sm font-medium">5:00 PM</div>
                  </div>

                  {/* Monday */}
                  <div className="space-y-2">
                    <div className="font-medium text-center pb-2 border-b">Monday</div>
                    <div className="relative h-full">
                      <div className="absolute top-0 left-0 right-0 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Data Structures</div>
                        <div className="text-muted-foreground">9:00 - 10:30 AM</div>
                        <div className="text-muted-foreground">Room 301</div>
                      </div>
                      <div className="absolute top-32 left-0 right-0 h-16 bg-green-100 dark:bg-green-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Database Systems</div>
                        <div className="text-muted-foreground">11:00 - 12:30 PM</div>
                        <div className="text-muted-foreground">Lab 2</div>
                      </div>
                      <div className="absolute top-80 left-0 right-0 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Computer Networks</div>
                        <div className="text-muted-foreground">2:00 - 3:30 PM</div>
                        <div className="text-muted-foreground">Room 205</div>
                      </div>
                    </div>
                  </div>

                  {/* Tuesday */}
                  <div className="space-y-2">
                    <div className="font-medium text-center pb-2 border-b">Tuesday</div>
                    <div className="relative h-full">
                      <div className="absolute top-32 left-0 right-0 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Software Engineering</div>
                        <div className="text-muted-foreground">11:00 - 12:30 PM</div>
                        <div className="text-muted-foreground">Room 102</div>
                      </div>
                      <div className="absolute top-64 left-0 right-0 h-16 bg-red-100 dark:bg-red-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Artificial Intelligence</div>
                        <div className="text-muted-foreground">1:00 - 2:30 PM</div>
                        <div className="text-muted-foreground">Lab 5</div>
                      </div>
                    </div>
                  </div>

                  {/* Wednesday */}
                  <div className="space-y-2">
                    <div className="font-medium text-center pb-2 border-b">Wednesday</div>
                    <div className="relative h-full">
                      <div className="absolute top-0 left-0 right-0 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Data Structures</div>
                        <div className="text-muted-foreground">9:00 - 10:30 AM</div>
                        <div className="text-muted-foreground">Room 301</div>
                      </div>
                      <div className="absolute top-32 left-0 right-0 h-16 bg-green-100 dark:bg-green-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Database Systems</div>
                        <div className="text-muted-foreground">11:00 - 12:30 PM</div>
                        <div className="text-muted-foreground">Lab 2</div>
                      </div>
                      <div className="absolute top-112 left-0 right-0 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Software Engineering Lab</div>
                        <div className="text-muted-foreground">4:00 - 5:30 PM</div>
                        <div className="text-muted-foreground">Lab 3</div>
                      </div>
                    </div>
                  </div>

                  {/* Thursday */}
                  <div className="space-y-2">
                    <div className="font-medium text-center pb-2 border-b">Thursday</div>
                    <div className="relative h-full">
                      <div className="absolute top-32 left-0 right-0 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Software Engineering</div>
                        <div className="text-muted-foreground">11:00 - 12:30 PM</div>
                        <div className="text-muted-foreground">Room 102</div>
                      </div>
                      <div className="absolute top-80 left-0 right-0 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Computer Networks</div>
                        <div className="text-muted-foreground">2:00 - 3:30 PM</div>
                        <div className="text-muted-foreground">Room 205</div>
                      </div>
                    </div>
                  </div>

                  {/* Friday */}
                  <div className="space-y-2">
                    <div className="font-medium text-center pb-2 border-b">Friday</div>
                    <div className="relative h-full">
                      <div className="absolute top-64 left-0 right-0 h-16 bg-red-100 dark:bg-red-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Artificial Intelligence</div>
                        <div className="text-muted-foreground">1:00 - 2:30 PM</div>
                        <div className="text-muted-foreground">Lab 5</div>
                      </div>
                      <div className="absolute top-112 left-0 right-0 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-md p-2 text-xs">
                        <div className="font-medium">Project Meeting</div>
                        <div className="text-muted-foreground">4:00 - 5:30 PM</div>
                        <div className="text-muted-foreground">Conference Room</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="daily" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-14 bg-blue-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Data Structures</h4>
                        <span className="text-sm text-muted-foreground">9:00 - 10:30 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Room 301, CS Building</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-14 bg-green-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Database Systems</h4>
                        <span className="text-sm text-muted-foreground">11:00 - 12:30 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Lab 2, IT Building</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-14 bg-purple-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Computer Networks</h4>
                        <span className="text-sm text-muted-foreground">2:00 - 3:30 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Room 205, CS Building</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-14 bg-amber-500 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Software Engineering Lab</h4>
                        <span className="text-sm text-muted-foreground">4:00 - 5:30 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Lab 3, IT Building</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Calendar View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Calendar view will be implemented soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

