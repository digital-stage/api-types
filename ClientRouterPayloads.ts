import Router from './model/Router';
import Stage from './model/Stage';

namespace ClientRouterPayloads {
  // Client --> Server
  export type ChangeRouter = { _id: string } & Partial<Router>;
  export type StageServed = {
    kind: "audio" | "video" | "both";
    type: string; // "ov" | "mediasoup" | "jammer"
    update: Partial<Stage> & { _id: string };
  };
  export type StageUnServed = {
    kind: "audio" | "video" | "both";
    type: string; // "ov" | "mediasoup" | "jammer"
    update: Partial<Stage> & { _id: string };
  };
}
export default ClientRouterPayloads;
