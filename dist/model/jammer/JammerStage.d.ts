import Stage from '../Stage';
interface JammerStage extends Stage {
    jammerIpv4: string;
    jammerIpv6?: string;
    jammerPort: number;
    jammerKey: string;
}
export default JammerStage;
