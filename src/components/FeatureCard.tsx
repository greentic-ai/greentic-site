import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import greenticLogo from "@/assets/greentic-logo.png";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div 
        className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-cover bg-center overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: `url(${greenticLogo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-glow/60 rounded-lg" />
        <Icon className="relative w-6 h-6 text-primary-foreground z-10" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
