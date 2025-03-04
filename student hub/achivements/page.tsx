import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink, Github, Linkedin, Medal, Trophy, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AchievementsPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Achievements & Profiles</h2>
          <div className="flex items-center space-x-2">
            <Button>Add Achievement</Button>
          </div>
        </div>

        <Tabs defaultValue="achievements" className="space-y-4">
          <TabsList>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="profiles">Social Profiles</TabsTrigger>
          </TabsList>

          <TabsContent value="achievements" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Dean's List</CardTitle>
                    <Trophy className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardDescription>Academic Excellence Award</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Spring 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Awarded for maintaining a GPA above 3.8 for the semester.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Academic
                  </Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Hackathon Winner</CardTitle>
                    <Medal className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardDescription>First Place - University Hackathon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">October 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developed an innovative solution for campus navigation using AR technology.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Technical
                  </Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Research Publication</CardTitle>
                    <Award className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardDescription>International Conference on AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">December 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Co-authored a paper on "Machine Learning Applications in Education" that was accepted at ICAI
                      2023.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Research
                  </Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Coding Competition</CardTitle>
                    <Medal className="h-5 w-5 text-slate-400" />
                  </div>
                  <CardDescription>Second Place - Regional Coding Challenge</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">November 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Solved complex algorithmic problems in a timed competition against 50 other students.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Technical
                  </Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Community Service</CardTitle>
                    <Award className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardDescription>100+ Hours of Volunteer Work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">2023 Academic Year</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Volunteered for teaching programming to underprivileged high school students.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Service
                  </Badge>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Project Showcase</CardTitle>
                    <Trophy className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardDescription>Best Project Award - Software Engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Fall 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developed a comprehensive student management system that was selected as the best project in the
                      class.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge variant="outline" className="ml-auto">
                    Academic
                  </Badge>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Web Development Certification</CardTitle>
                  <CardDescription>Full Stack Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">June 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Completed a comprehensive course on modern web development technologies.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Machine Learning Specialization</CardTitle>
                  <CardDescription>Advanced AI Techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">August 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mastered machine learning algorithms and their practical applications.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Cloud Computing</CardTitle>
                  <CardDescription>AWS Solutions Architect</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">October 2023</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Certified in designing and deploying scalable systems on AWS.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profiles" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Profiles</CardTitle>
                  <CardDescription>Connect with me on professional networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                      <div>
                        <h4 className="font-medium">LinkedIn</h4>
                        <p className="text-sm text-muted-foreground">linkedin.com/in/johndoe</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <Github className="h-6 w-6" />
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <p className="text-sm text-muted-foreground">github.com/johndoe</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <Twitter className="h-6 w-6 text-blue-400" />
                      <div>
                        <h4 className="font-medium">Twitter</h4>
                        <p className="text-sm text-muted-foreground">twitter.com/johndoe</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio & Projects</CardTitle>
                  <CardDescription>Showcase of my work and projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        P
                      </div>
                      <div>
                        <h4 className="font-medium">Personal Portfolio</h4>
                        <p className="text-sm text-muted-foreground">johndoe.dev</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                        B
                      </div>
                      <div>
                        <h4 className="font-medium">Technical Blog</h4>
                        <p className="text-sm text-muted-foreground">johndoe.blog</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                        D
                      </div>
                      <div>
                        <h4 className="font-medium">Design Portfolio</h4>
                        <p className="text-sm text-muted-foreground">behance.net/johndoe</p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

