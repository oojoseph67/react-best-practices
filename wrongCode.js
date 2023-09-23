function App({ user }) {
  return (
    <main>
      <Sidebar user={user} />
      <Dashboard user={user} />
    </main>
  );
}

function Sidebar({ user }) {
  return (
      <aside>
          <Heading user={user} />
    </aside>
  );
}

function Heading({ user }) {
  return (
    <main>
      <UserInfo user={user} />
    </main>
  );
}
