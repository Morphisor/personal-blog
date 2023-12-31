import { allBlogs } from "contentlayer/generated"
import { FeaturedPosts, HomeCoverSection } from "../components"
import { RecentPosts } from "../components/Home/RecentPosts"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
