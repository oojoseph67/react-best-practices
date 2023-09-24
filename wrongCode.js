const { useState, useEffect } = require("react");

function Settings() {
    const [user, setUser] = useState({})

    useEffect(() => {
        trackAnalytics('Page View', route.url, user.name)
    }, [route.path, user.name])
}