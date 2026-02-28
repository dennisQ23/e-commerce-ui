import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Badge, BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import AppLineChart from "@/components/AppLineChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashoard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* User Badges Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 blorder-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1>Verified User</h1>
                  <p>This user has been verified by the admin.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 blorder-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1>Admin</h1>
                  <p>
                    Admin users have acces to all features and can manage users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 blorder-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1>Awarded</h1>
                  <p>This user has been awarded for their contributions.</p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1>Popular</h1>
                  <p>This user has been popular in the community.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* User Card Container */}
          <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-bold mt-2">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Software Engineer at Example Inc.
            </p>
          </div>
          {/* Information Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex item-center justify-between">
              <h1 className="text-xl font-semibold">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <p>Profile completion</p>
              <Progress value={66} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">Full Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">Email:</span>
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">Phone:</span>
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">Address:</span>
              <span>123 Main Street, Apt 4B</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">City:</span>
              <span>New York, NY</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span className="text-smm text-muted-foreground">Role:</span>
              <Badge>Admin</Badge>
            </div> */}
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 01/01/2023
            </p>
          </div>
          {/* Card List Container */}
          {/* <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div> */}
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          {/* Chart Container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div>
              <h1 className="text-xl font-semibold">User Activity</h1>
              <AppLineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
