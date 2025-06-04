import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { ChartContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, Bar } from '@/components/ui/chart'; // Assuming shadcn chart components wrap recharts
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Home, BarChart2, Settings, Users, DollarSign, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const sampleSalesData = [
  { month: 'Jan', sales: 1200, revenue: 2400 },
  { month: 'Feb', sales: 1800, revenue: 3200 },
  { month: 'Mar', sales: 1500, revenue: 3000 },
  { month: 'Apr', sales: 2100, revenue: 4000 },
  { month: 'May', sales: 2500, revenue: 4800 },
  { month: 'Jun', sales: 2200, revenue: 4200 },
];

const sampleUsers = [
  { id: 'USR001', name: 'Alice Wonderland', email: 'alice@example.com', role: 'Admin', joined: '2023-01-15' },
  { id: 'USR002', name: 'Bob The Builder', email: 'bob@example.com', role: 'Editor', joined: '2023-02-20' },
  { id: 'USR003', name: 'Charlie Chaplin', email: 'charlie@example.com', role: 'Viewer', joined: '2023-03-10' },
  { id: 'USR004', name: 'Diana Prince', email: 'diana@example.com', role: 'Editor', joined: '2023-04-05' },
];

const sidebarNavItems = [
  { title: 'Dashboard', href: '/dashboard', icon: <Home className="h-4 w-4" /> },
  { title: 'Analytics', href: '/dashboard/analytics', icon: <BarChart2 className="h-4 w-4" /> },
  { title: 'Users', href: '/dashboard/users', icon: <Users className="h-4 w-4" /> },
  { title: 'Settings', href: '/dashboard/settings', icon: <Settings className="h-4 w-4" /> },
];

const headerNavItems = [
    { label: 'Overview', href: '/dashboard' },
    { label: 'Reports', href: '/dashboard/reports' },
    { label: 'Profile', href: '/profile' },
];


const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header navItems={headerNavItems} isLoggedIn={true} />
      <div className="flex flex-1">
        <Sidebar navItems={sidebarNavItems} />
        <main className="flex-1 p-6 space-y-6">
          <section className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            {/* Example NavigationMenu within dashboard content area */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard"
                          >
                            <Activity className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Main Dashboard
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Your central hub for all activities and metrics.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                           <Link to="/dashboard/quick-stats" className={navigationMenuTriggerStyle() + " flex flex-col items-start justify-start h-full"}>
                                <div className="text-sm font-medium leading-none">Quick Stats</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                View key performance indicators at a glance.
                                </p>
                            </Link>
                        </NavigationMenuLink>
                      </li>
                       <li>
                        <NavigationMenuLink asChild>
                           <Link to="/dashboard/recent-activity" className={navigationMenuTriggerStyle() + " flex flex-col items-start justify-start h-full"}>
                                <div className="text-sm font-medium leading-none">Recent Activity</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                See the latest updates and actions.
                                </p>
                            </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/dashboard/reports" className={navigationMenuTriggerStyle()}>
                        Reports
                    </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </section>

          {/* Stats Cards */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                 <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
                 <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">72</div>
                <p className="text-xs text-muted-foreground">-2 from yesterday</p>
              </CardContent>
            </Card>
          </section>

          {/* Chart and Table Section */}
          <section className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sales Performance</CardTitle>
                <CardDescription>Monthly sales data for the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{
                    sales: { label: 'Sales', color: 'hsl(var(--chart-1))' },
                    revenue: { label: 'Revenue', color: 'hsl(var(--chart-2))' },
                }} className="h-[300px] w-full">
                  <BarChart accessibilityLayer data={sampleSalesData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
                    <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                    <RechartsTooltip cursor={false} contentStyle={{ background: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }} />
                    <Legend />
                    <Bar dataKey="sales" fill="var(--color-sales)" radius={4} />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
                <CardDescription>A list of recently registered users.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>End of user list.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.joined}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;