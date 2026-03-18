import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group relative overflow-hidden rounded-md border border-border bg-white shadow-sm hover:shadow-soft transition-shadow"
    >
      <div className="aspect-[4/3] bg-gray-200">
        {/*
        <img
          src={project.image}
          alt={`${project.name} project image`}
          className="h-full w-full object-cover"
        />
        */}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(15,39,68,0),rgba(15,39,68,0.88))] p-5">
        <div className="text-[12px] uppercase tracking-eyebrow text-copper">{project.brand}</div>
        <div className="mt-1 text-[20px] font-semibold text-white">{project.name}</div>
        <div className="mt-1 text-[14px] text-white/75">{project.location}</div>
      </div>
    </Link>
  );
}

