import { Card } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export const TeamMember = ({ name, role, image }: TeamMemberProps) => {
  return (
    <Card className="p-6 text-center bg-card border-border hover:shadow-lg transition-all duration-300">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold mb-1 text-foreground">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </Card>
  );
};
