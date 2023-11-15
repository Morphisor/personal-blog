import { Blog } from "contentlayer/generated";
import { compareDesc, parseISO } from "date-fns";

export function sortBlogs(blogs: Blog[]) {
    return blogs.slice().sort((a, b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}