export default function Dropdown({
  options,
  isOpen,
  showOptionIcon,
  showOptionBadge,
}) {
  return (
    <div className="dropdown">
      <div>{value}</div>
      {isOpen && (
        <div className="options">
          {options.map((option) => {
            return (
              <div className="option">
                {showOptionIcon && <img src={option.icon} />}
                <span>{option.title}</span>
                {showOptionBadge && <img src={option.icon} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
