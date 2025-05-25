const authService = require("../services/auth.service.js");

exports.register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.verifyEmail = async (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).send('Token is required');
    }

    try {
        await authService.verifyEmail(token);
        // If verification succeeds, show success message and redirect
        const frontendBaseUrl = process.env.APP_FRONTEND_URL || 'http://localhost:5173';
        res.send(`
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8" />
              <title>Email Verified</title>
              <meta http-equiv="refresh" content="2;url=${frontendBaseUrl}/login" />
              <style>
                body {
                  font-family: sans-serif;
                  background: linear-gradient(to bottom right, #4a148c, #880e4f);
                  color: #ffffff;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                  margin: 0;
                  text-align: center;
                }
                .container {
                  background-color: rgba(0, 0, 0, 0.3);
                  padding: 40px;
                  border-radius: 15px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                h1 {
                  color: white;
                }
                  a,
                a:visited,
                a:active {
                color: #ffffff;
                text-decoration: none;
                font-weight: 500;
                transition: color 0.3s ease, text-decoration 0.3s ease;
                }

                a:hover,
                a:focus {
                color: #ffccff;
                text-decoration: underline;
                }
              </style>
              <script>
                setTimeout(function() {
                  window.location.href = "${frontendBaseUrl}/login";
                }, 3000);
              </script>
            </head>
            <body>
              <div class="container">
                <h1>Email Verified Successfully!</h1>
                <p>You will be redirected to login shortly.</p>
                <p>If not, <a href="${frontendBaseUrl}/login">click here</a>.</p>
              </div>
            </body>
            </html>
          `);
    } catch (err) {
        // If verification fails, show error message without redirect
        res.status(400).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Verification Failed</title>
                <style>
                    body {
                        font-family: sans-serif;
                        background: linear-gradient(to bottom right, #4a148c, #880e4f);
                        color: #ffffff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                        text-align: center;
                    }
                    .container {
                        background-color: rgba(0, 0, 0, 0.3);
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                     h1 {
                        color:rgb(255, 255, 255); /* A color for errors */
                    }
                    p {
                        color: #ffffff;
                    }
                    .error {
                        color:rgb(255, 104, 104);
                    }
                        a {
  color:rgb(255, 255, 255);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

a,
a:visited,
a:active {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

a:hover,
a:focus {
  color: #ffccff;
  text-decoration: underline;
}
                </style>
            </head>
            <body>
                 <div class="container">
                    <h1>Verification Failed</h1>
                    <p class="error">${err.message}</p>
                    <p>Please try again or contact support if the problem persists.</p>
                 </div>
            </body>
            </html>
        `);
    }
};

exports.login = (req, res) => {
    const { id, email, name, role } = req.user;
    res.json({
        message: "Login successful",
        user: { id, email, name, role },
    });
};

exports.loginAdmin = (req, res) => {
    const { id, email, name, role } = req.user;
    res.json({
        message: "Admin login successful",
        user: { id, email, name, role },
    });
};

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email || !email.trim()) {
            return res.status(400).json({ error: "Email is required" });
        }
        await authService.sendPasswordResetEmail(email);
        res.json({ message: "Password reset instructions have been sent to your email" });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !token.trim()) {
            return res.status(400).json({ error: "Token is required" });
        }
        if (!newPassword) {
            return res.status(400).json({ error: "New password is required" });
        }
        await authService.resetPassword(token, newPassword);
        res.json({ message: "Password has been reset successfully" });
    } catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
};