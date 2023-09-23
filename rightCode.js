const App = () => {
  return (
    <Modal>
      <Modal.CancelAction>
        <a className="whatever-style i-want" href="/open/some/url">
          Cancel
        </a>
      </Modal.CancelAction>
      <Modal.SaveAction>
        <button>Save</button>
      </Modal.SaveAction>
    </Modal>
  );
};

const Modal = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });
};

const CancelAction = ({ children }) => {
  return children;
};

const SaveAction = ({ children }) => {
  return children;
};

Modal.CancelAction = CancelAction;
Modal.SaveAction = SaveAction;
