import Stage from '../Stage';

interface OvStage<IdType = string> extends Stage<IdType> {
  ambientSoundUrl?: string;
  ambientLevel: number;

  ovIpv4: string;
  ovIpv6?: string;
  ovPort: number;
  ovPin: number;
  ovJitter?: number;
  latency?: {
    [srcOvStageDeviceId: number]: {
      [desOvStageDeviceId: number]: {
        latency: number;
        jitter: number;
      };
    };
  };
}
export default OvStage;
