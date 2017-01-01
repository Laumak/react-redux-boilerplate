export default function getBaseUrl() {
    const inDevelopment = window.localtion.hostname === "localhost";
    return inDevelopment ? "http://localhost:3001/" : "/";
}
