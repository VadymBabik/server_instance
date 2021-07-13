import appLoader from "./loaders";
import config from "./config";

(async function () {
  const app = await appLoader({ config });
  app.listen(config.PORT, (err) => {
    if (err) {
      console.log("Error has just happened --> ", err);
      process.exit(1);
      return;
    }
    console.log(`
        ################################################
        🛡️ Server listening on port: ${config.PORT}..."
        ################################################`);
  });
})();
