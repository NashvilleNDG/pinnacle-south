import Link from "next/link";

export default function BlogCard({ post, variant = "standard" }) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/insights/${post.slug}`}
      className={`group overflow-hidden rounded-md border border-border bg-white hover:shadow-soft transition-shadow ${
        isFeatured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`bg-gray-200 ${isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        {/*
        <img
          src={post.image}
          alt={`${post.title} featured image`}
          className="h-full w-full object-cover"
        />
        */}
      </div>
      <div className="p-6">
        <div className="text-[12px] uppercase tracking-eyebrow text-copper">{post.category}</div>
        <div className={`mt-2 font-semibold text-textDark ${isFeatured ? "text-[22px]" : "text-[18px]"}`}>
          {post.title}
        </div>
        <p className="mt-3 text-[14px] leading-6 text-textMuted">{post.excerpt}</p>
        <div className="mt-4 inline-flex items-center text-[14px] font-medium text-copper group-hover:underline">
          Read More →
        </div>
      </div>
    </Link>
  );
}

