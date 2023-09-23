export default function Dropdown({ options, isOpen, children }) {
  return (
    <div className="dropdown">
      <div>{value}</div>
      {isOpen && <div className="options">{children}</div>}
    </div>
  );
}

function Option({ children }) {
  return <div className="option">{children}</div>;
}

Dropdown.Option = Option;
