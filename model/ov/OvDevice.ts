import Device from "../Device";

interface OvDevice extends Device {
  type: "ov";

  canOv: true;
}

export default OvDevice;
