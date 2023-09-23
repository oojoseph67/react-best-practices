export default function App() {
  <Dropdown
    items={["Item 1", "Item 2"]}
    text="Solutions"
    footerHeading="Documentations"
    footerDesc="Start Integrating Product and Tools"
    showIcons
    hasFooter
  />;
}

function Dropdown({ text, hasFooter, footerHeading, footerDesc, items }) {
  return (
    <>
      <button>{text}</button>
      <ul>
        {items.map((item) => {
          <li>
            {showIcon && <SomeIcon />} {item}
          </li>;
        })}
      </ul>

      {hasFooter && (
        <div>
          <h2>{footerHeading}</h2>
          <h2>{footerDesc}</h2>
        </div>
      )}
    </>
  );
}
