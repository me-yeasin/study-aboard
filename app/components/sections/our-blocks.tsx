import { LuChevronRight } from "react-icons/lu";

interface BlogCardProps {
  image: string;
  date: string;
  author: string;
  title: string;
  link: string;
}

function BlogCard({ image, date, author, title, link }: BlogCardProps) {
  return (
    <div className="bg-white p-4 rounded-[32px] shadow-sm border border-gray-100/50">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-2xl"
      />
      <div className="px-2 mt-5">
        <div className="flex justify-between items-center">
          <span className="font-sans text-[13px] font-medium text-primary-700">
            {date}
          </span>
          <span className="font-sans text-[13px] text-gray-500">
            By: <span className="text-gray-800 font-medium">{author}</span>
          </span>
        </div>
        <h3 className="font-sans text-xl font-medium text-gray-900 mt-3 leading-snug">
          {title}
        </h3>
        <hr className="border-gray-100 my-5" />
        <a
          href={link}
          className="inline-flex items-center gap-1 font-sans text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors mb-2"
        >
          <span className="underline decoration-1 underline-offset-4">Read More</span>
          <LuChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}

const BLOCKS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    date: "September 18, 2025",
    author: "Admin",
    title: "Top Courses in Australia That Lead to Permanent Residency",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    date: "October 5, 2025",
    author: "Sarah Chen",
    title: "Student Visa Requirements: What You Need to Know Before Applying",
    link: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
    date: "October 12, 2025",
    author: "Michael Park",
    title: "Living Costs in Australian Cities: A Comprehensive Guide for Students",
    link: "#",
  },
];

export default function OurBlocksSection() {
  return (
    <section className="w-full mt-20 px-4 pb-16">
      <div className="max-w-xl mx-auto text-center">
        <span className="font-sans text-xs font-medium text-primary-800 uppercase tracking-wide">
          Our Blogs
        </span>
        <h2 className="font-heading text-2xl font-medium text-gray-900 mt-2 leading-tight">
          Insights and guidance for your Australian journey
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOCKS.map((block) => (
          <BlogCard
            key={block.id}
            image={block.image}
            date={block.date}
            author={block.author}
            title={block.title}
            link={block.link}
          />
        ))}
      </div>
    </section>
  );
}