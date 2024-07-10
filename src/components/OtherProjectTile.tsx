import React from "react";

interface ProjectProps {
  title: string;
  year: string;
  description: string;
  link: string;
}

export const OtherProjectTile: React.FC<ProjectProps> = ({
  title,
  year,
  description,
  link,
}) => {
  return (
    <a href={link} target="_blank" className="">
      <div className="bg-background   mx-auto rounded-lg overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">
            {title} -{" "}
            <span className="text-muted text-lg font-normal">{year}</span>
          </h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
      </div>
    </a>
  );
};
