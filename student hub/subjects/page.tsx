import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Book, Clock, FileText, GraduationCap, User } from "lucide-react"

export default function SubjectsPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Subjects</h2>
          <div className="flex items-center space-x-2">
            <Button>View All Subjects</Button>
          </div>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming Semester</TabsTrigger>
            <TabsTrigger value="completed">Completed Subjects</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Data Structures</CardTitle>
                    <Badge>CS201</Badge>
                  </div>
                  <CardDescription>Advanced data structures and algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. John Smith</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon, Wed: 9:00 - 10:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Database Systems</CardTitle>
                    <Badge>CS202</Badge>
                  </div>
                  <CardDescription>Relational databases and SQL</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. Sarah Johnson</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon, Wed: 11:00 - 12:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Computer Networks</CardTitle>
                    <Badge>CS203</Badge>
                  </div>
                  <CardDescription>Network protocols and architecture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. Michael Chen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon, Thu: 2:00 - 3:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Software Engineering</CardTitle>
                    <Badge>CS204</Badge>
                  </div>
                  <CardDescription>Software development methodologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. Emily Rodriguez</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Tue, Thu: 11:00 - 12:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Artificial Intelligence</CardTitle>
                    <Badge>CS205</Badge>
                  </div>
                  <CardDescription>Machine learning and AI algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. David Lee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Tue, Fri: 1:00 - 2:30 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Technical Writing</CardTitle>
                    <Badge>HUM201</Badge>
                  </div>
                  <CardDescription>Professional communication skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prof. Amanda Wilson</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Wed, Fri: 9:00 - 10:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">3 Credit Hours</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Syllabus
                  </Button>
                  <Button size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Materials
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Semester Subjects</CardTitle>
                <CardDescription>Subjects for the next semester</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Registration for next semester will open soon</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Completed Subjects</CardTitle>
                <CardDescription>Subjects you have completed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-muted-foreground">Your completed subjects will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

