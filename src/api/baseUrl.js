// @flow
export default () => {
  const inDevelopment: boolean = window.localtion.hostname === "localhost"

  return inDevelopment ? "http://localhost:3001/" : "/"
}
