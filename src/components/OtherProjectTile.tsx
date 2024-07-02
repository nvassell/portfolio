import React from "react";

interface ProjectProps {
  title: string;
  description: string;
}

export const OtherProjectTile: React.FC<ProjectProps> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-md">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
    </div>
  );
};
