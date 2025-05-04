import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const committee = [
  {
    id: 1,
    name: "Filler",
    role: "President",
    avatar: "/committee/avatar-1.jpg",
    bio: "Filler"
  },
  {
    id: 2,
    name: "Filler",
    role: "Vice President",
    avatar: "/committee/avatar-1.jpg",
    bio: "Filler"
  },
  {
    id: 3,
    name: "Filler",
    role: "Treasurer",
    avatar: "/committee/avatar-1.jpg",
    bio: "Filler"
  },
  {
    id: 4,
    name: "Filler",
    role: "Social Secretary",
    avatar: "/committee/avatar-1.jpg",
    bio: "Filler"
  }
];

export default function CommitteePage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-10 md:px-24 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-12 whitespace-nowrap">Our Committee</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {committee.map(member => (
          <Card key={member.id} className="text-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-lg text-center whitespace-nowrap">
                  {member.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground text-center">
                  {member.role}
                </p>
              </CardHeader>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
