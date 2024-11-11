import { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

function Toggle({ children }) {
  const [active, setActive] = useState(false);
  return (
    <ToggleContext.Provider value={[active, setActive]}>
      {children}
    </ToggleContext.Provider>
  );
}

const Active = ({ children }) => {
  const [active] = useContext(ToggleContext);

  return active ? children : null;
};

const Inactive = ({ children }) => {
  const [active] = useContext(ToggleContext);

  return active ? null : children;
};

const ToggleButton = () => {
  const [active, setActive] = useContext(ToggleContext);
  return (
    <input
      type="checkbox"
      checked={active}
      onChange={(e) => {
        setActive(e.target.checked);
      }}
    />
  );
};

Toggle.Active = Active;
Toggle.Inactive = Inactive;
Toggle.ToggleButton = ToggleButton;

export default Toggle;
