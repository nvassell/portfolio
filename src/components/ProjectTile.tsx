import Image from "next/image";
import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ProjectTile: React.FC<ProjectProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="grid gap-4 shadow-md rounded-lg hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
      <Image
        src={imageSrc}
        width="500"
        height="300"
        alt={title}
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
      />
      <div className="space-y-2 p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
