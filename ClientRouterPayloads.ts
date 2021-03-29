import Router from "./model/Router";
import Stage from "./model/Stage";

namespace ClientRouterPayloads {
  // Client --> Server
  export type ChangeRouter = { _id: string } & Partial<Router>;
  export type StageServed = { _id: string } & Partial<Stage>;
  export type StageUnServed = {
    kind: "audio" | "video" | "both";
    type: string;
    stageId: string;
  };
}
export default ClientRouterPayloads;
