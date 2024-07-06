import React from "react";
import {
  databases,
  frameworks,
  programmingLanguages,
  tools,
  uxSoftware,
} from "@/app/data/skills";
import { SkillsSection } from "./SkillsSection";

export const Skills: React.FC = () => {
  return (
    <div className="grid gap-1">
      <h3 className="text-xl font-bold">Skills</h3>
      <SkillsSection
        title="Programming Languages"
        info={programmingLanguages}
      />
      <SkillsSection title="Databases" info={databases} />
      <SkillsSection title="Frameworks" info={frameworks} />
      <SkillsSection title="Tools" info={tools} />
      <SkillsSection title="UX Software" info={uxSoftware} />
    </div>
  );
};
