import { LocalizationProvider } from "@mui/x-date-pickers";
import "./App.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Form from "./pages/Form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <Form />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}

export default App;
