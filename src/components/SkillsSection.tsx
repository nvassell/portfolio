import React from "react";
import { Badge } from "./ui/badge";

interface SkillsProps {
  title: string;
  info: string[];
}

export const SkillsSection: React.FC<SkillsProps> = ({ title, info }) => {
  return (
    <>
      <h4 className="text-sm font-semibold text-muted">{title}</h4>
      <div className="flex flex-wrap gap-2 ml-4">
        {info.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
    </>
  );
};
