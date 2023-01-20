import React from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();

  document.title = "GameCheap | Blogs";

  return (
    <div className="py-6">
      <h2 className="text-center fs-2 pt-6">All Blog Posts</h2>
      <div className="justify-center gap-4 py-6">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="text-center card w-96 m-6">
              <div className="card-body">
                <h2 className="card-title">{blog.question}</h2>
                <p>{blog.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
