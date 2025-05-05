import React from "react";
import './style.scss';
import blogsdata from "./blogsdata";

const BlogsPreview=()=>{
    return(
        <>
        <section className="blogpreviewsection">
            <div className="container">
                <div className="row">
                    {blogsdata.map((blogdata) => (                        
                        <div className="col-md-4 col-sm-6 col-12 blog-box" id={blogdata.id}>
                            <div className="imgcover">
                                <img src={blogdata.img} alt="" />
                            </div>
                            <h2>{blogdata.title}</h2>
                            <p>{blogdata.desc}</p>
                            <button className="btnprimary">Know More</button>
                        </div>
                    ))}                    
                </div>
            </div>  
        </section>
        </>
    )
}

export default BlogsPreview