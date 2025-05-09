import React from "react";
import BlogBanner from "../../../Components/Blogs/Banner";
import BlogsPreview from "../../../Components/Blogs/BlogsPreview";
import FeaturedSection from "../../../Components/Blogs/FeaturedSection";
import Insight from "../../../Components/Blogs/Insights";
import BlogCTASection from "../../../Components/Blogs/BlogCTAsection";

const Blog = () => {
    return(
        <>
            <BlogBanner/>
            <BlogsPreview/>
            <FeaturedSection/>
            <Insight/>
            <BlogCTASection/>
        </>
    )
}

export default Blog;