import Router from './model/Router';
import Device from './model/Device';
declare namespace Payloads {
    type PayloadIdType = string;
    type RemoteAudioTrackId = PayloadIdType;
    type UserId = PayloadIdType;
    interface ConnectAsRouter {
        apiKey: string;
        router?: Omit<Router, '_id'>;
    }
    interface ConnectWithToken {
        token: string;
        device?: Partial<Omit<Device, '_id'>> & {
            uuid: string;
        };
    }
}
export default Payloads;
