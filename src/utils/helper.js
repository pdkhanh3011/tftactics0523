export function clearSelected() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

export function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
