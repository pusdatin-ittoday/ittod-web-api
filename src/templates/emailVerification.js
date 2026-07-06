/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 */
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}

exports.successTemplate = frontendBaseUrl => {
    const loginUrl = `${frontendBaseUrl}/login`;
    const htmlEncodedUrl = escapeHtml(loginUrl);
    const metaRefreshContent = escapeHtml(`3;url=${loginUrl}`);
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Email Verified</title>
  <meta http-equiv="refresh" content="${metaRefreshContent}" />
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      background: radial-gradient(circle at top left, #FDF5B0 0%, #E9E9F0 100%);
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      text-align: center;
    }
    .container {
      background-color: #ffffff;
      border: 3px solid #000000;
      box-shadow: 10px 10px 0px 0px #000000;
      padding: 40px;
      width: 100%;
      max-width: 420px;
      margin: 20px;
      box-sizing: border-box;
    }
    h1 {
      color: #1E3A8A;
      font-weight: 900;
      font-style: italic;
      text-transform: uppercase;
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 20px;
    }
    p {
      color: #374151;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.6;
      margin-bottom: 24px;
    }
    a.btn {
      display: inline-block;
      background-color: #1E3A8A;
      color: #ffffff;
      border: 2px solid #000000;
      box-shadow: 4px 4px 0px 0px #000000;
      font-weight: bold;
      padding: 12px 24px;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 13px;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    a.btn:hover {
      box-shadow: 2px 2px 0px 0px #000000;
      transform: translate(2px, 2px);
      background-color: #12255c;
    }
  </style>
  <script>
    setTimeout(function() {
      window.location.href = ${JSON.stringify(loginUrl)};
    }, 3000);
  </script>
</head>
<body>
  <div class="container">
    <h1>Email Verified Successfully!</h1>
    <p>You will be redirected to login shortly.</p>
    <p><a class="btn" href="${htmlEncodedUrl}">Click Here to Login</a></p>
  </div>
</body>
</html>
`;
};

exports.errorTemplate = safeMessage => `
<!DOCTYPE html>
<html>
<head>
    <title>Verification Failed</title>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            background: radial-gradient(circle at top left, #FDF5B0 0%, #E9E9F0 100%);
            color: #000000;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            text-align: center;
        }
        .container {
            background-color: #ffffff;
            border: 3px solid #000000;
            box-shadow: 10px 10px 0px 0px #000000;
            padding: 40px;
            width: 100%;
            max-width: 420px;
            margin: 20px;
            box-sizing: border-box;
        }
        h1 {
            color: #DC2626;
            font-weight: 900;
            font-style: italic;
            text-transform: uppercase;
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 20px;
        }
        p {
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        .error {
            color: #DC2626;
            font-weight: bold;
        }
        a {
            color: #1E3A8A;
            text-decoration: underline;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Verification Failed</h1>
        <p class="error">${safeMessage}</p>
        <p>Please try again or contact support if the problem persists.</p>
    </div>
</body>
</html>
`;
