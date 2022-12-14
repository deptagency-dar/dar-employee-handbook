// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin, handleLogout } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    // Add your own custom logger
    await handleLogin(req, res);
  },
  async onError(req, res, error) {
    console.log("hola", error.message);
    await handleLogout(req, res);
    res.status(200);
  },
});
