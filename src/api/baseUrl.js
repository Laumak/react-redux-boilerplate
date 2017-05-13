export default () => {
  const inDevelopment = window.localtion.hostname === "localhost"

  return inDevelopment ? "http://localhost:3001/" : "/"
}
