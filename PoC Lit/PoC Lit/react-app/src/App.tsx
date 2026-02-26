import { useState } from "react";
import { Button } from "./button";
import { Card } from "./card";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card open={open}>
        <div slot="header">Titulo card</div>
        <div slot="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div slot="footer">
          <Button
            label={open ? "Fechar" : "Abrir"}
            onAction={() => {
              setOpen(!open);
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default App;
