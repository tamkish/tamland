// Server entry point

import {createHttpServer} from "./httpServer";
import {createSocketServer} from "./socketServer";

const PORT = 60606
const httpServer = createHttpServer()
createSocketServer(httpServer)

httpServer.listen(PORT)


console.log(`listening on http://localhost:${PORT}`)