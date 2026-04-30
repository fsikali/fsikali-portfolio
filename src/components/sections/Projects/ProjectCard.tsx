import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: Props) {
  return (
    <div className="card">
      <h3 className="font-semibold text-gray-900">{title}</h3>

      <p className="text-sm text-gray-600 mt-2">{description}</p>

      <div className="flex gap-2 flex-wrap mt-4">
        {tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 text-sm">
        <span className="text-gray-600">View on GitHub</span>
        <ArrowUpRight size={16} className="text-gray-500" />
      </div>
    </div>
  );
}
