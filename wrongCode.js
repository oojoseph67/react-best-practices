const App = () => {
  return (
    <Modal cancelText="Exit" saveText="Accept changes">
      I'm a modal
    </Modal>
  );
};

const Modal = ({
  children,
  cancelText,
  saveText,
  cancelClasses,
  saveClasses,
}) => {
  return (
    <aside>
      {children}
      <button className={cancelClasses}>{cancelText}</button>
      <button className={saveClasses}>{saveText}</button>
    </aside>
  );
};
