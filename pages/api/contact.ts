import { NextApiHandler, NextApiRequest } from "next";

interface CustomRequestBody {
  name: string;
  email: string;
  message: string;
}

interface CustomApiRequest extends NextApiRequest {
  body: CustomRequestBody;
}

const handler: NextApiHandler = (req: CustomApiRequest, res) => {
  // Get data submitted in request's body.
  const { body } = req;
  const { name, email, message } = body;

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for email and returns early if it is not found.
  if (!name || !email || !message) {
    // Sends a HTTP bad request error code.
    return res.status(400).json({
      error: "One or more of the following not found: name, email, message",
    });
  }

  // Here, you could send the message to a service like Supabase to read later.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.

  res.redirect(302, "/");
}

export default handler;
