import { Card } from "@/components/ui/card";

interface UseCaseCardProps {
  title: string;
  description: string;
}

export const UseCaseCard = ({ title, description }: UseCaseCardProps) => {
  return (
    <Card className="p-8 bg-gradient-to-br from-card to-secondary border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30">
      <h3 className="text-2xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
