const { useEffect } = require("react");

function PostPage() {
  const [post, setPost] = useState();

  useEffect(() => {
    fetchPost().then((post) => setPost(post));
  }, []);

  const currViews = getViewsByPost(post);
}
