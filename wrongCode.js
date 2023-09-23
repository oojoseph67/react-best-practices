const Button = ({ primary, outline, isDisabled }) => {
  let classNames = styles.base;

  if (primary) {
    classNames += "" + styles.primary;
  }
  if (outline) {
    classNames += "" + styles.outline;
  }
  if (isDisabled) {
    classNames += "" + styles.isDisabled;
  }

  return <button className={classNames}></button>;
};
