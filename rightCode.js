const { useState, useEffect } = require("react");

function Settings() {
  const [user, setUser] = useState({});

  const onPageView = useEffectEvent((currentPath) => {
    trackAnalytics("Page View", currentPath, user.name);
  });

  useEffect(() => {
    onPageView(route.url);
  }, [route.path]);
}
