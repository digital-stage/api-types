import Stage from "../Stage";

interface JammerStage extends Stage {
  jammer: {
    ipv4: string;
    ipv6: string;
    port: number;
  };
}
