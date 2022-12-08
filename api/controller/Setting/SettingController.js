const Setting = require("../../model/Setting/SettingModel");


//Save Setting
exports.createSetting = async (req, res) => {
  //const settings = await Setting.findOne({ name: "general_settings" });
  const settings = await Setting.findOne({ name: req.body.setting_key });
  

  if (settings) {
    settings.name = req.body.setting_key;
    settings.value = req.body.setting_value;

    try {
      const settingsave = await settings.save();
      res.json(settingsave);
    } catch (error) {
      console.log(error);
    }
  } else {
    const settings = new Setting({
      name: req.body.setting_key,
      value: req.body.setting_value,
    });

    try {
      const settingsave = await settings.save();
      res.json(settingsave);
    } catch (error) {
      console.log(error);
    }
  }
};


//Get Setting
exports.getSetting = async (req, res) => {
  console.log(req.body.setting_key);
  try {
    const setting = await Setting.findOne({ name: req.body.setting_key });
    res.json(setting);
  } catch (error) {
    res.send("Error", error);
  }
};
