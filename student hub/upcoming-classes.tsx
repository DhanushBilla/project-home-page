import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Classes</CardTitle>
        <CardDescription>Your schedule for today</CardDescription>
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
  )
}

