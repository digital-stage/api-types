import Stage from '../Stage';

interface OvStage extends Stage {
  // 3D Room specific

  ambientSoundUrl?: string;
  ambientLevel: number;

  ovServer?: {
    router: string;
    ipv4: string;
    ipv6?: string;
    port: number;
    pin: number;
    serverJitter?: number;

    latency?: {
      [srcOvStageDeviceId: number]: {
        [desOvStageDeviceId: number]: {
          latency: number;
          jitter: number;
        };
      };
    };
  };
}
export default OvStage;
