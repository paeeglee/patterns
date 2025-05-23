import Observer from "./Observer";

export default interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(msg: string): void;
}
