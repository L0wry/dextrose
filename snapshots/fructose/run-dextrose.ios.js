const dextrose = require("../../index").default;
const path = require("path");

const config = {
    snapPath: path.join(__dirname, '../snaps'),    
    automationName: "XCUITest",
    platformName: "iOS",
    deviceName: "iPhone 7",
    platformVersion: '11.1',
    app: path.join(
        __dirname,
        "../ios/build/Build/Products/Debug-iphonesimulator/snapshots.app"
    )
}

dextrose(config);