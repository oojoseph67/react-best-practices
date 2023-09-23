const Button = ({ primary, outline, isDisabled }) => {
  const className = classNames(
    styles.base,
    primary && styles.primary,
    outline && styles.outline,
    isDisabled && styles.isDisabled
  );
  return <button className={classNames} />;
};

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}
