import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentResults() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Results</CardTitle>
        <CardDescription>Your latest test and assignment scores</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Grade</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Data Structures</TableCell>
              <TableCell>
                <Badge variant="outline">Quiz</Badge>
              </TableCell>
              <TableCell>18/20</TableCell>
              <TableCell>A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Database Systems</TableCell>
              <TableCell>
                <Badge variant="outline">Assignment</Badge>
              </TableCell>
              <TableCell>28/30</TableCell>
              <TableCell>A+</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Computer Networks</TableCell>
              <TableCell>
                <Badge variant="outline">Mid-term</Badge>
              </TableCell>
              <TableCell>42/50</TableCell>
              <TableCell>B+</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Software Engineering</TableCell>
              <TableCell>
                <Badge variant="outline">Project</Badge>
              </TableCell>
              <TableCell>95/100</TableCell>
              <TableCell>A+</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Artificial Intelligence</TableCell>
              <TableCell>
                <Badge variant="outline">Lab</Badge>
              </TableCell>
              <TableCell>24/25</TableCell>
              <TableCell>A</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

