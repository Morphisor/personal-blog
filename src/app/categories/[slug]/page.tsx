import { BlogLayoutThree } from "@/src/components"
import { Categories } from "@/src/components/Blog/Categories"
import { distinct } from "@/src/utils"
import { allBlogs } from "contentlayer/generated"
import GithubSlugger, { slug } from "github-slugger"

const slugger = new GithubSlugger()
export async function generateStaticParams() {
    const categories: string[] = []
    const paths = [{ slug: "all" }]
    allBlogs.map(blog => {
        if (blog.isPublished) {
            blog.tags?.map(tag => {
                const slugified = slugger.slug(tag)
                if (!categories.includes(slugified)) {
                    categories.push(slugified)
                    paths.push({ slug: slugified })
                }
            })
        }
    })
    return paths
}

export async function generateMetadata({ params }: { params: {slug: string} }) {
    return {
        title: `${params.slug.replaceAll('-', ' ')} Blogs`,
        description: `Learn more about ${params.slug.replaceAll('-', ' ')}`,
    }
}

export default function CategoryPage({ params }: { params: {slug: string} }) {
    const blogTags = allBlogs.flatMap(b => b.tags as string[]).filter(distinct)
    const allCategories = ["all", ...blogTags]
    const blogs = allBlogs.filter(
        blog => {
            return blog.tags?.some(t => {
                const slugified = slug(t)
                if (params.slug.toLowerCase() === "all")
                    return true
                return slugified.toLowerCase() === params.slug.toLowerCase()
            })
        })

    return (
        <article className="mt-12 flex flex-col text-dark dark:text-light">
            <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
                <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
                <span className="mt-2 inline-block">Discover more categories and expand your knowledge!</span>
            </div>
            <Categories categories={allCategories} currentSlug={params.slug} />
            <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
                {blogs.map((blog, index) => 
                <article key={index} className="col-span-1 row-span-1 relative">
                    <BlogLayoutThree blog={blog} />
                </article>)}
            </div>
        </article>
    )
}