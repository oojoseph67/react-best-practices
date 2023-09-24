export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <>
      <form>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </form>
      <PageContent />
    </>
  );
}
