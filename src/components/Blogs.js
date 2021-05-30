import React from "react";
import "../css/Blog.css";

const BlogCard = ({name}) => {
  return (
    <div className="blogCard">
      <div className="blogCard__header">
        <div className="blogCard__header--left">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="blogCard__middle">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, sint
          modi quae eligendi itaque ex atque culpa architecto id quasi nemo
          numquam neque fugiat quam repudiandae ratione molestiae veritatis
          provident?....Read more
        </p>
      </div>
      <div className="blogCard__footer">
        <p></p>
        <p>10 mins ago.</p>
      </div>
    </div>
  );
};


const Blogs = () => {
  return (
    <div className="blogs">
    <button onClick={() => {
       //logout code
    }}>Logout</button>

      <div className="blogContainer">
        <BlogCard name="Asad Memon" />
        <BlogCard name="Hamid Khan" />
      </div>
    </div>
  );
};

export default Blogs;
