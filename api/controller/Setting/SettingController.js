const Setting = require("../../model/Setting/SettingModel");

exports.createSetting = async (req, res) => {
  const settings = await Setting.findOne({ name: "general_settings" });

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

//Getting all Setting
// exports.getSetting = async (req, res) => {
//   const setting = await Setting.save({ name: "general_settings" });
//   res.json(setting);
//   if (Object.is(setting, undefined)) {
//     const setting = new Setting({
//       name: req.body.setting_key,
//       value: req.body.setting_value,
//     });
//   } else {
//     setting.name = req.body.setting_key;
//     setting.value = req.body.setting_value;
//   }
//   try {
//     const setting = await Setting.find();
//     res.json(setting);
//   } catch (error) {
//     res.send("Error", error);
//   }
// };

// //Getting a single Setting by id

// exports.findSingleSetting = async (req, res) => {
//   try {
//     const setting = await Setting.findById(req.params.id);
//     res.json(setting);
//   } catch (error) {
//     res.send("Error", error);
//   }
// };

// //Update All Setting
// exports.updateSetting = async (req, res) => {
//   // console.log(req.param.id);
//   const filter = { _id: req.params.id };
//   const settingUpdate = await Setting.findOneAndUpdate(filter, req.body, {
//     new: true,
//   });
//   res.json(settingUpdate);
// };

// //Delete Setting
// exports.deleteSetting = async (req, res) => {
//   try {
//     const settingdelete = await Setting.findByIdAndRemove(req.params.id);
//     res.json(settingdelete);
//   } catch (error) {
//     res.send("Error", error);
//   }
//  };

