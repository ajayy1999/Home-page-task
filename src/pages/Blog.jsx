import React, { useState, useEffect } from 'react';
import BlogCard from '../component/common/BlogCard';
import Button from '../component/common/Button';

const Blog = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const pageSize = 3;

    useEffect(() => {
        getAllBlogs();
    }, [page]);

    const getAllBlogs = async () => {
        try {
            const response = await fetch(`http://3.7.81.243:3253/api/blog/?page=${page}&limit=${pageSize}`);
            const data = await response.json();
            if (data) {
                setBlogPosts(data?.data);
                setTotal(data.total || 0);
            } else {
                setBlogPosts([]);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h2 className="blog-title">Blogs</h2>
                    <a href="/blogs" className="view-all">
                        View All <span className="arrow">→</span>
                    </a>
                </div>

                <div className="blog-grid">
                    {blogPosts?.length > 0 ? (
                        blogPosts?.map(post => (
                            <BlogCard
                                key={post?.id}
                                title={post?.name}
                                image={post?.image_url}
                                date={post?.createdAt}
                                seo={post?.seo_description}
                            />
                        ))
                    ) : (
                        <p style={{ color: "#000" }}>No blogs available</p>
                    )}
                </div>

                <div className="pagination-controls">
                    <Button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        text="Previous"
                    />
                    <span>Page {page}</span>
                    <Button
                        onClick={() => setPage(page + 1)}
                        disabled={page * pageSize >= total}
                        text="Next"
                    />
                </div>
            </div>
        </section>
    );
};

export default Blog;
