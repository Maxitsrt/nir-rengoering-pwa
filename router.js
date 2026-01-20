export function getRoute() {
  const hash = location.hash || "#/";
  const path = hash.replace(/^#/, "");
  const parts = path.split("/").filter(Boolean);
  // [] => home, ["kontaktpunkter"], ["kontaktpunkter","borde"]
  return parts;
}

export function go(path) {
  location.hash = "#" + path;
}
