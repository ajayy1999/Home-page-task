import React from 'react'
import './BlogCard.css';

const BlogCard = ({ image, title, date, author, seo }) => {
    return (
        <div className="blog-card">
            <div className="blog-image-container">
                <img src={image} alt={title} className="blog-image" />
            </div>
            <div className="blog-content">
                <h3 className="blog-post-title">{title}</h3>
                <div className="blog-meta">
                    <span className="blog-date">{date}</span>
                    <span className="blog-by">by</span>
                    <span className="blog-author">{author}</span>
                </div>
                <p className="blog-seo">{seo}</p>
            </div>
        </div>
    )
}

export default BlogCard