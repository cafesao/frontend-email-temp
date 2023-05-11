export default function isFocused() {
  return typeof document.hidden !== undefined ? !document.hidden : null
}
