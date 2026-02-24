"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  LogOut,
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  Phone,
  MapPin,
  Clock,
  Car,
  Mail,
  FileText,
  Search,
  X,
  SortAsc,
  SortDesc,
} from "lucide-react"
import { isAuthenticated, logout } from "@/lib/auth"

interface Booking {
  id: string
  contactName: string
  phone: string
  email: string
  location: string
  vehicleMake: string
  vehicleModel: string
  vehicleYear: string
  rimSize?: string
  serviceType: string
  preferredDate: string
  preferredTime: string
  additionalNotes: string
  status: string
  createdAt: string
  amount: string
}

// Sample booking data for fallback
const sampleBookings: Booking[] = [
  {
    id: "BK001",
    contactName: "John Smith",
    phone: "+1 (780) 555-0123",
    email: "john.smith@email.com",
    location: "Downtown Edmonton",
    vehicleMake: "Toyota",
    vehicleModel: "Camry",
    vehicleYear: "2020",
    rimSize: "17\"",
    serviceType: "tire-replacement",
    preferredDate: "2025-01-15",
    preferredTime: "morning",
    additionalNotes: "Front left tire needs replacement",
    status: "completed",
    createdAt: "2025-01-14T10:30:00Z",
    amount: "$79.00",
  },
  {
    id: "BK002",
    contactName: "Sarah Johnson",
    phone: "+1 (780) 555-0456",
    email: "sarah.j@email.com",
    location: "West Edmonton Mall",
    vehicleMake: "Honda",
    vehicleModel: "Civic",
    vehicleYear: "2019",
    rimSize: "16\"",
    serviceType: "tire-repair",
    preferredDate: "2025-01-15",
    preferredTime: "afternoon",
    additionalNotes: "Small puncture in rear tire",
    status: "in-progress",
    createdAt: "2025-01-15T14:15:00Z",
    amount: "$49.00",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 hover:bg-green-100"
    case "in-progress":
      return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    case "confirmed":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
    case "pending":
      return "bg-orange-100 text-orange-800 hover:bg-orange-100"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }
}

const getServiceName = (serviceType: string) => {
  const services = {
    "tire-replacement": "Tire Replacement",
    "tire-repair": "Tire Repair",
    "seasonal-swap": "Seasonal Tire Swap",
    emergency: "Emergency Service",
    fleet: "Fleet Service",
    other: "Other Service",
  }
  return services[serviceType as keyof typeof services] || serviceType
}

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [serviceFilter, setServiceFilter] = useState("all")
  const [dateFromFilter, setDateFromFilter] = useState("")
  const [dateToFilter, setDateToFilter] = useState("")
  const [sortBy, setSortBy] = useState("createdAt")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const router = useRouter()

  useEffect(() => {
    // Check authentication
    if (!isAuthenticated()) {
      router.push("/login")
      return
    }

    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]")
    const allBookings = [...sampleBookings, ...storedBookings].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    setBookings(allBookings)
    setFilteredBookings(allBookings)
    setIsLoading(false)
  }, [router])

  useEffect(() => {
    let filtered = [...bookings]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (booking) =>
          booking.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.phone.includes(searchTerm) ||
          booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((booking) => booking.status === statusFilter)
    }

    // Service filter
    if (serviceFilter !== "all") {
      filtered = filtered.filter((booking) => booking.serviceType === serviceFilter)
    }

    // Date range filter
    if (dateFromFilter) {
      filtered = filtered.filter((booking) => booking.preferredDate >= dateFromFilter)
    }
    if (dateToFilter) {
      filtered = filtered.filter((booking) => booking.preferredDate <= dateToFilter)
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue: any = a[sortBy as keyof Booking]
      let bValue: any = b[sortBy as keyof Booking]

      if (sortBy === "createdAt" || sortBy === "preferredDate") {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    setFilteredBookings(filtered)
  }, [bookings, searchTerm, statusFilter, serviceFilter, dateFromFilter, dateToFilter, sortBy, sortOrder])

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  const updateBookingStatus = (bookingId: string, newStatus: string) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? { ...booking, status: newStatus } : booking,
    )
    setBookings(updatedBookings)

    // Update localStorage for user-created bookings
    const userBookings = updatedBookings.filter((b) => !sampleBookings.find((s) => s.id === b.id))
    localStorage.setItem("bookings", JSON.stringify(userBookings))
  }

  const clearFilters = () => {
    setSearchTerm("")
    setStatusFilter("all")
    setServiceFilter("all")
    setDateFromFilter("")
    setDateToFilter("")
    setSortBy("createdAt")
    setSortOrder("desc")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Calculate stats based on filtered results
  const totalBookings = bookings.length
  const filteredTotal = filteredBookings.length
  const completedBookings = bookings.filter((b) => b.status === "completed").length
  const totalRevenue = bookings
    .filter((b) => b.status === "completed" && b.amount !== "Custom Quote" && b.amount !== "TBD")
    .reduce((sum, b) => sum + Number.parseFloat(b.amount.replace("$", "")), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">🚐 TirePitStop Dashboard</h1>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Admin Panel
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-primary-foreground/80">Welcome back</p>
                <p className="font-medium">Administrator</p>
              </div>
              <Avatar>
                <AvatarFallback className="bg-accent text-accent-foreground">AD</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalBookings}</div>
              <p className="text-xs text-muted-foreground">All time bookings</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedBookings}</div>
              <p className="text-xs text-muted-foreground">Successfully completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">From completed services</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {totalBookings > 0 ? Math.round((completedBookings / totalBookings) * 100) : 0}%
              </div>
              <p className="text-xs text-muted-foreground">Service completion rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Search & Filter Bookings
            </CardTitle>
            <CardDescription>
              Find specific bookings using search and filters. Showing {filteredTotal} of {totalBookings} bookings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Search Input */}
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Name, ID, phone, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Service Filter */}
              <div className="space-y-2">
                <Label>Service Type</Label>
                <Select value={serviceFilter} onValueChange={setServiceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Services</SelectItem>
                    <SelectItem value="tire-replacement">Tire Replacement</SelectItem>
                    <SelectItem value="tire-repair">Tire Repair</SelectItem>
                    <SelectItem value="seasonal-swap">Seasonal Tire Swap</SelectItem>
                    <SelectItem value="emergency">Emergency Service</SelectItem>
                    <SelectItem value="fleet">Fleet Service</SelectItem>
                    <SelectItem value="other">Other Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Sort Options */}
              <div className="space-y-2">
                <Label>Sort By</Label>
                <div className="flex space-x-2">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="createdAt">Created Date</SelectItem>
                      <SelectItem value="preferredDate">Service Date</SelectItem>
                      <SelectItem value="contactName">Customer Name</SelectItem>
                      <SelectItem value="status">Status</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="px-3"
                  >
                    {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>

            {/* Date Range Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor="dateFrom">Service Date From</Label>
                <Input
                  id="dateFrom"
                  type="date"
                  value={dateFromFilter}
                  onChange={(e) => setDateFromFilter(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateTo">Service Date To</Label>
                <Input id="dateTo" type="date" value={dateToFilter} onChange={(e) => setDateToFilter(e.target.value)} />
              </div>
              <div className="flex items-end">
                <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || statusFilter !== "all" || serviceFilter !== "all" || dateFromFilter || dateToFilter) && (
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="text-xs">
                    Search: {searchTerm}
                  </Badge>
                )}
                {statusFilter !== "all" && (
                  <Badge variant="secondary" className="text-xs">
                    Status: {statusFilter}
                  </Badge>
                )}
                {serviceFilter !== "all" && (
                  <Badge variant="secondary" className="text-xs">
                    Service: {getServiceName(serviceFilter)}
                  </Badge>
                )}
                {dateFromFilter && (
                  <Badge variant="secondary" className="text-xs">
                    From: {dateFromFilter}
                  </Badge>
                )}
                {dateToFilter && (
                  <Badge variant="secondary" className="text-xs">
                    To: {dateToFilter}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
            <CardDescription>Manage and track all customer bookings and service requests</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No bookings found matching your criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.contactName}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {booking.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Car className="w-3 h-3 mr-1 text-muted-foreground" />
                          {booking.vehicleYear} {booking.vehicleMake} {booking.vehicleModel}
                          {booking.rimSize && (
                            <span className="text-muted-foreground ml-1">· {booking.rimSize}</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getServiceName(booking.serviceType)}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{booking.preferredDate}</div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {booking.preferredTime}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{booking.amount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <DropdownMenuItem
                                  onSelect={(e) => {
                                    e.preventDefault()
                                    setSelectedBooking(booking)
                                  }}
                                >
                                  View Details
                                </DropdownMenuItem>
                              </DialogTrigger>
                            </Dialog>
                            <DropdownMenuItem onClick={() => updateBookingStatus(booking.id, "confirmed")}>
                              Mark Confirmed
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateBookingStatus(booking.id, "in-progress")}>
                              Mark In Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => updateBookingStatus(booking.id, "completed")}>
                              Mark Completed
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Booking Details Dialog */}
        {selectedBooking && (
          <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Booking Details - {selectedBooking.id}</DialogTitle>
                <DialogDescription>Complete information for this booking request</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Customer Information
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>Name:</strong> {selectedBooking.contactName}
                      </p>
                      <p className="flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {selectedBooking.phone}
                      </p>
                      <p className="flex items-center">
                        <Mail className="w-3 h-3 mr-1" />
                        {selectedBooking.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      Vehicle Information
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>Vehicle:</strong> {selectedBooking.vehicleYear} {selectedBooking.vehicleMake}{" "}
                        {selectedBooking.vehicleModel}
                      </p>
                      {selectedBooking.rimSize && (
                        <p>
                          <strong>Rim Size (Jant):</strong> {selectedBooking.rimSize}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Service Details
                    </h4>
                    <div className="space-y-1 text-sm">
                      <p>
                        <strong>Service:</strong> {getServiceName(selectedBooking.serviceType)}
                      </p>
                      <p>
                        <strong>Location:</strong> {selectedBooking.location}
                      </p>
                      <p>
                        <strong>Date:</strong> {selectedBooking.preferredDate}
                      </p>
                      <p>
                        <strong>Time:</strong> {selectedBooking.preferredTime}
                      </p>
                      <p>
                        <strong>Amount:</strong> {selectedBooking.amount}
                      </p>
                    </div>
                  </div>

                  {selectedBooking.additionalNotes && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Additional Notes
                      </h4>
                      <p className="text-sm bg-muted p-3 rounded">{selectedBooking.additionalNotes}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <Badge className={getStatusColor(selectedBooking.status)}>
                  {selectedBooking.status.charAt(0).toUpperCase() + selectedBooking.status.slice(1)}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Created: {new Date(selectedBooking.createdAt).toLocaleString()}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  )
}
