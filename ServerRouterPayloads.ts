import Router from './model/Router';
import Stage from './model/Stage';

namespace ServerRouterPayloads {
  // Server --> Client

  export type Ready = Router;
  export type ServeStage = {
    kind: 'audio' | 'video' | 'both';
    type: string; // "ov" | "mediasoup" | "jammer"
    stage: Stage;
  };
  export type UnServeStage = {
    kind: 'audio' | 'video' | 'both';
    type: string; // "ov" | "mediasoup" | "jammer"
    stageId: string;
  };
  export type RouterAdded = Router;
  export type RouterChanged = { _id: string } & Partial<Router>;
  export type RouterRemoved = string;
}
export default ServerRouterPayloads;
