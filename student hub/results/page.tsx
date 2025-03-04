import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function ResultsPage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Results</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Results
            </Button>
          </div>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="previous">Previous Semesters</TabsTrigger>
            <TabsTrigger value="cgpa">CGPA Calculation</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Semester Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Credits</TableHead>
                      <TableHead>Midterm</TableHead>
                      <TableHead>Assignments</TableHead>
                      <TableHead>Final</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Grade</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Data Structures</TableCell>
                      <TableCell>CS201</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>25/30</TableCell>
                      <TableCell>18/20</TableCell>
                      <TableCell>42/50</TableCell>
                      <TableCell>85/100</TableCell>
                      <TableCell>
                        <Badge>A</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Database Systems</TableCell>
                      <TableCell>CS202</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>28/30</TableCell>
                      <TableCell>19/20</TableCell>
                      <TableCell>45/50</TableCell>
                      <TableCell>92/100</TableCell>
                      <TableCell>
                        <Badge>A+</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Computer Networks</TableCell>
                      <TableCell>CS203</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>22/30</TableCell>
                      <TableCell>16/20</TableCell>
                      <TableCell>40/50</TableCell>
                      <TableCell>78/100</TableCell>
                      <TableCell>
                        <Badge>B+</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Software Engineering</TableCell>
                      <TableCell>CS204</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>27/30</TableCell>
                      <TableCell>18/20</TableCell>
                      <TableCell>47/50</TableCell>
                      <TableCell>92/100</TableCell>
                      <TableCell>
                        <Badge>A+</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Artificial Intelligence</TableCell>
                      <TableCell>CS205</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>24/30</TableCell>
                      <TableCell>17/20</TableCell>
                      <TableCell>43/50</TableCell>
                      <TableCell>84/100</TableCell>
                      <TableCell>
                        <Badge>A</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Technical Writing</TableCell>
                      <TableCell>HUM201</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>25/30</TableCell>
                      <TableCell>18/20</TableCell>
                      <TableCell>40/50</TableCell>
                      <TableCell>83/100</TableCell>
                      <TableCell>
                        <Badge>A</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-6 p-4 bg-muted rounded-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold">Semester GPA</h3>
                      <p className="text-2xl font-bold">3.83</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Total Credits</h3>
                      <p className="text-2xl font-bold">18</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="previous" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Previous Semester Results</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="sem1">
                  <TabsList className="mb-4">
                    <TabsTrigger value="sem1">Semester 1</TabsTrigger>
                    <TabsTrigger value="sem2">Semester 2</TabsTrigger>
                    <TabsTrigger value="sem3">Semester 3</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sem1">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subject</TableHead>
                          <TableHead>Code</TableHead>
                          <TableHead>Credits</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Introduction to Programming</TableCell>
                          <TableCell>CS101</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge>A</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Calculus I</TableCell>
                          <TableCell>MTH101</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge>B+</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Physics I</TableCell>
                          <TableCell>PHY101</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge>A-</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">English Composition</TableCell>
                          <TableCell>ENG101</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge>A</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Introduction to Computing</TableCell>
                          <TableCell>CS102</TableCell>
                          <TableCell>3</TableCell>
                          <TableCell>
                            <Badge>A+</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-4 p-4 bg-muted rounded-md">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold">Semester GPA</h3>
                          <p className="text-2xl font-bold">3.80</p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Total Credits</h3>
                          <p className="text-2xl font-bold">15</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="sem2">
                    <div className="text-center p-8">
                      <p className="text-muted-foreground">Semester 2 results will be displayed here</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="sem3">
                    <div className="text-center p-8">
                      <p className="text-muted-foreground">Semester 3 results will be displayed here</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cgpa" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>CGPA Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Semester 1</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.80</div>
                        <p className="text-xs text-muted-foreground">15 credits</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Semester 2</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.75</div>
                        <p className="text-xs text-muted-foreground">18 credits</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Semester 3</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.90</div>
                        <p className="text-xs text-muted-foreground">15 credits</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-primary/5">
                    <CardHeader>
                      <CardTitle>Cumulative GPA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-3xl font-bold">3.85</div>
                          <p className="text-sm text-muted-foreground">Total Credits: 48</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">Standing</p>
                          <p className="text-lg font-bold text-primary">Excellent</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

