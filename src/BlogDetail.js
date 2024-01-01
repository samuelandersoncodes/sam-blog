import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-detail">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
    </div>
  );
}

export default BlogDetail;