export default function App() {
  return (
    <>
      <Form />
      <PageContent />
    </>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");

  return (
    <form>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </form>
  );
}
