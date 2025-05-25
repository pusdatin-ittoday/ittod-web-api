/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param {string} str - The string to escape
 * @returns {string} The escaped string
 */
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

exports.successTemplate = (frontendBaseUrl) => {
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
      window.location.href = ${JSON.stringify(loginUrl)};
    }, 3000);
  </script>
</head>
<body>
  <div class="container">
    <h1>Email Verified Successfully!</h1>
    <p>You will be redirected to login shortly.</p>
    <p>If not, <a href="${htmlEncodedUrl}">click here</a>.</p>
  </div>
</body>
</html>
`;
};

exports.errorTemplate = (safeMessage) => `
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
            color: #ffccbc;
        }
        p {
            color: #ffffff;
        }
        .error {
            color: #ffccbc;
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
        <p class="error">${escapeHtml(safeMessage)}</p>
        <p>Please try again or contact support if the problem persists.</p>
    </div>
</body>
</html>
`; 