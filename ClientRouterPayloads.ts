import Router from './model/Router';
import Stage from './model/Stage';

namespace ClientRouterPayloads {
  // Client --> Server
  export type ChangeRouter = { _id: string } & Partial<Router>;
  export type StageServed<StageType = Stage> = {
    kind: 'audio' | 'video' | 'both';
    type: string; // "ov" | "mediasoup" | "jammer"
    update: Partial<StageType> & { _id: string };
  };
  export type ChangeStage<StageType = Stage> = Partial<StageType> & {
    _id: string;
  };
  export type StageUnServed<StageType = Stage> = {
    kind: 'audio' | 'video' | 'both';
    type: string; // "ov" | "mediasoup" | "jammer"
    update: Partial<StageType> & { _id: string };
  };
}
export default ClientRouterPayloads;
