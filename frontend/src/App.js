import "./App.css";
import { Badge } from "./components/base/badge/badge.component";

function App() {
  return (
    <>
      <Badge
        textsize="m"
        textcolor="black"
        size="xl"
        text="badget 1"
        borderradius="m"
        backgroundcolor="blue"
        bordertype="dashed"
        bordercolor="blue"
        borderweigth="xl"
        fontweigth="normal"
        display="inlineblock"
      />
        <Badge
        textsize="xs"
        textcolor="white"
        size="xs"
        text="badget 2"
        borderradius="xl"
        backgroundcolor="yellow"
        bordertype="dotted"
        bordercolor="yellow"
        borderweigth="xs"
        fontweigth="bold"
        display="inlineblock"
        />
        <Badge
        textsize="s"
        textcolor="black"
        size="s"
        text="badget 3"
        borderradius="s"
        backgroundcolor="green"
        bordertype="double"
        bordercolor="green"
        borderweigth="s"
        fontweigth="normal"
        display="inlineblock"
        />
        <Badge
        textsize="l"
        textcolor="white"
        size="l"
        text="badget 4"
        borderradius="l"
        backgroundcolor="red"
        bordertype="doted"
        bordercolor="red"
        borderweigth="l"
        fontweigth="bold"
        display="inlineblock"
        />

    </>
  );
}

export default App;
