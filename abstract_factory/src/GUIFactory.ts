import { AndroidButton, Button, iOSButton } from "./components/button";
import { AndroidTextBox, iOSTextBox, TextBox } from "./components/textbox";

export interface GUIFactory {
  criarButton(): Button;
  criarTextBox(): TextBox;
}

export class AndroidGUIFactory implements GUIFactory {
  criarButton(): Button {
    return new AndroidButton();
  }

  criarTextBox(): TextBox {
    return new AndroidTextBox();
  }
}

export class IosGUIFactory implements GUIFactory {
  criarButton(): Button {
    return new iOSButton();
  }
  
  criarTextBox(): TextBox {
    return new iOSTextBox();
  }
}