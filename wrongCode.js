const { useEffect } = require("react");

function PostPage() {
  const [post, setPost] = useState();
  const [views, setViews] = useState();

  useEffect(() => {
    fetchPost().then((post) => setPost(post));
  }, []);

  useEffect(() => {
    const currViews = getViewsByPost(post);
    setViews(currViews);
  }, [post]);
}
