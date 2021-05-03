import VolumeProperties from './VolumeProperties';
interface CustomGroupVolume<IdType = string> extends VolumeProperties {
    _id: IdType;
    deviceId: IdType;
    groupId: IdType;
    userId: IdType;
    stageId: IdType;
}
export default CustomGroupVolume;
