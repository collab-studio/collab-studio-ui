import { UAParser } from "ua-parser-js";
import { v4 as uuid4 } from "uuid";

const generateDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = uuid4();
    localStorage.setItem("deviceId", deviceId);
  }
  return deviceId;
};

const getDeviceType = (userAgent?: string) => {
  const parser = new UAParser(userAgent);
  const deviceType = parser.getDevice().type || "desktop";

  return deviceType;
};

const getDeviceInfo = () => {
  const parser = new UAParser();
  const result = parser.getResult();

  return {
    deviceId: generateDeviceId(),
    browser: result.browser.name || "",
    os: result.os.name || "",
    deviceType: getDeviceType(result.ua),
  };
};

const AccessToken = "accessToken";

const authUtils = { generateDeviceId, getDeviceInfo, AccessToken };

export default authUtils;
