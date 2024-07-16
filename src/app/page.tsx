import React from "react";
import Image from "next/image";
import { ProjectTile } from "@/components/ProjectTile";
import { OtherProjectTile } from "@/components/OtherProjectTile";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import * as Projects from "./data/projects";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section className="w-full min-h-screen flex items-center justify-center p-24 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-4 lg:grid-cols-2 lg:gap-4 justify-center items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Nathan Vassell
                </h1>
                <p className="max-w-[600px] md:text-xl">Software Engineer</p>
                {/* <p className="max-w-[600px] text-muted md:text-base/relaxed lg:text-base/relaxed xl:text-base/relaxed">
                  I am passionate about building modern, scalable, and
                  user-friendly web applications. My experience includes working
                  with a variety of technologies, such as React, Node.js, and
                  Tailwind CSS.
                </p> */}
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-1 text-base">
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-muted ml-4">
                      Bachelor of Science in Computer Science, University of
                      Idaho
                    </p>
                    <p className="text-muted ml-4">
                      Associates of Science in Web Design and Development,
                      Lewis-Clark State College
                    </p>
                  </div>
                  <Skills />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <Image
                src="/graduation.jpeg"
                width="400"
                height="400"
                alt="About"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                priority
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 p-24 md:py-24 lg:py-32 muted-bg min-h-screen">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects that showcase my skills
                  and expertise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {Projects.featuredProjects.map((project, index) => (
                <ProjectTile key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="additional-projects"
          className="py-20 p-24 md:py-32 min-h-screen"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Other Projects
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {Projects.otherProjects.map((project, index) => (
                <OtherProjectTile key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
