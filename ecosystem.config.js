module.exports = {
  apps: [
    {
      name: "elroichurch.com",
      exec_mode: "cluster",
      script: "./node_modules/.bin/next",
      args: "start -p 4000",
      instances: "2",
    },
  ],
};
