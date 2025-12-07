import { blogPosts } from "@/lib/blog-data"
import BlogPostClient from "./BlogPostClient"

// This function generates static paths for all blog posts
export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

// Server component that passes data to client component
export default async function BlogPost({ params }) {
    // Await params in Next.js 15+
    const { slug } = await params

    return <BlogPostClient slug={slug} />
}