const express = require("express");
const app = express();

// Configuration from Environment Variables (12-Factor App methodology)
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "1.0-default";

app.get("/", (req, res) => {
  // Logging the hit (useful for checking logs in CloudWatch/Kibana)
  console.log(`[${new Date().toISOString()}] Handling request`);
  
  res.json({
    message: "Hello from EKS",
    version: VERSION,
    timestamp: new Date()
  });
});

// Health check endpoint for Kubernetes Liveness Probe
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/hello", (req, res) => {
  res.status(200).send("Hello from the /hello endpoint");
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, version: ${VERSION}`);
});

// Graceful Shutdown for Kubernetes
// When K8s terminates a pod, it sends SIGTERM. We need to close connections properly.
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
  });
});
