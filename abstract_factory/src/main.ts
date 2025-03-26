import { AndroidButton, iOSButton } from "./components/button";
import { AndroidTextBox, iOSTextBox } from "./components/textbox";
import { AndroidGUIFactory, GUIFactory, IosGUIFactory } from "./GUIFactory";

class Application {
  private factory: GUIFactory;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  renderUI(): void {
    this.factory.criarButton().render();
    this.factory.criarTextBox().render();
  }
}

function getOs(): GUIFactory {
  const os = process.env.OS;
  if (os === "Android") {
    return new AndroidGUIFactory();
  }

  if (os === "iOS") {
    return new IosGUIFactory();
  }

  throw new Error("OS não suportado")
}

const app = new Application(getOs());

app.renderUI();
