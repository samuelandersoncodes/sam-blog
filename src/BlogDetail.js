import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-detail">
      <h2>Blog Detail - {id}</h2>
    </div>
  );
}

export default BlogDetail;