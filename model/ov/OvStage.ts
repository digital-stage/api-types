import Stage from "../Stage";

interface OvStage extends Stage {
  ov: {
    ipv4: string;
    ipv6: string;
    port: number;
  };
}
