export default interface IProps {
  setState: (active: boolean) => void;
  setToggled: (active: boolean) => void;
  toggled: boolean;
}
