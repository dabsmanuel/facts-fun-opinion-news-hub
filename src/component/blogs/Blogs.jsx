import React, { useState } from "react";
import UseFetch from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import "./blogs.css";

const Blogs = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 4;

  const { error, data } = UseFetch(
    "http://localhost:1337/api/blog-posts?populate=*",
  );

  if (error) return <p className="w-4/5 m-auto">Error!!!!! :(</p>;
  if (data < 1) {
    return (
      <h2 className="w-4/5 m-auto">
        There are no current posts at the moment. Kindly check back later.
      </h2>
    );
  }

  console.log(data);

  const filteredBlogs = data.filter((blog) => {
    const title = blog.attributes.title.toLowerCase();
    return title.includes(searchTerm.toLowerCase());
  });

  const pageCount = Math.ceil(filteredBlogs.length / blogsPerPage);
  const offset = pageNumber * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(offset, offset + blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPageNumber(0); // Reset page number when the search term changes
  };

  return (
    <section className="w-4/5 mx-auto">
      <div>
        <div className="my-8 mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search articles..."
            className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-10 mb-10 ">
          {currentBlogs.map((blogPost) => {
            return (
              <div key={blogPost.id} className="">
                <div className="blog-image">
                  <img
                    src={`http://localhost:1337${blogPost.attributes.media.data[0].attributes.url}`}
                    alt="church"
                    className="w-96 h-96 object-cover"
                  />
                </div>

                <div className="pt-4 ">
                  <h2 className="font-semibold text-2xl text text-slate-700">
                    {blogPost.attributes.title}
                  </h2>
                  <small className=" text-gray-600">
                    {blogPost.attributes.date}
                  </small>
                  <p className=" text-slate-600  w-96 text text-xl">
                    {blogPost.attributes.content.substring(0, 100)}....
                  </p>
                  <Link
                    to={`/details/${blogPost.id}`}
                    className="underline text-slate-500 semibold hover:text-slate-500 text-xl">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <ReactPaginate
          previousLabel={"< previous"}
          nextLabel={"next >"}
          breakLabel={"..."}
          pageCount={pageCount}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default Blogs;
