import React from "react";
import {
  databases,
  frameworks,
  programmingLanguages,
  tools,
  uxSoftware,
} from "@/app/data/skills";
import { Badge } from "./ui/badge";

export const Skills: React.FC = () => {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold">Skills</h3>
      <h4 className="text-sm font-semibold text-muted">
        Programming Languages
      </h4>
      <div className="flex flex-wrap gap-2">
        {programmingLanguages.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
      <h4 className="text-sm font-semibold text-muted">Databases</h4>
      <div className="flex flex-wrap gap-2">
        {databases.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
      <h4 className="text-sm font-semibold text-muted">Frameworks</h4>
      <div className="flex flex-wrap gap-2">
        {frameworks.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
      <h4 className="text-sm font-semibold text-muted">Tools</h4>
      <div className="flex flex-wrap gap-2">
        {tools.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
      <h4 className="text-sm font-semibold text-muted">UX Software</h4>
      <div className="flex flex-wrap gap-2">
        {uxSoftware.map((skill, index) => (
          <Badge key={index} variant="primary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
