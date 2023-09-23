import { useContext } from "react";

const DropdownContext = React.createContext();

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

const Button = ({ children }) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <button onClick={() => setIsOpen((currState) => !currState)}>
      {children} {isOpen ? "⬆️" : "⬇️"}
    </button>
  );
};

const List = ({ children }) => {
  const { isOpen } = useContext(DropdownContext);
  return <> {isOpen ? <ul>{children}</ul> : null} </>;
};

const Item = ({ children }) => {
  return <li>{children}</li>;
};

const Footer = ({ children }) => {
  return <div>{children}</div>;
};

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
Dropdown.Footer = Footer;
