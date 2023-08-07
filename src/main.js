import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

const port = process.env.PORT || 3000

web.listen(port, "0.0.0.0", () => {
  logger.info("App Started");
});
