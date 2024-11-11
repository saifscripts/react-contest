import Toggle from '../Toggle';
import './App.css';

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Active>Active</Toggle.Active>
        <Toggle.Inactive>Inactive</Toggle.Inactive>
        <Toggle.ToggleButton />
      </Toggle>
    </>
  );
}

export default App;
