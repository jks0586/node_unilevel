const Setting = require("../../model/Setting/SettingModel");

exports.createSetting = async (req, res) => {
  const setting = new Setting({
    levels: req.body.levels,
    referrals: req.body.referrals,
    withdrawallimit: req.body.withdrawallimit,
    shortcodemessage: req.body.shortcodemessage,
    planbasedon: req.body.planbasedon,
  });

  try {
    const settingsave = await setting.save(); 
    res.json(settingsave);
  } catch (error) {
    console.log(error);
  }
};

//Getting all Setting
exports.getSetting = async (req, res) => {
  try {
    const setting = await Setting.find();
    res.json(setting);
  } catch (error) {
    res.send("Error", error);
  }
};

//Getting a single Setting by id

exports.findSingleSetting = async (req, res) => {
  try {
    const setting = await Setting.findById(req.params.id);
    res.json(setting);
  } catch (error) {
    res.send("Error", error);
  }
};

//Update All Setting
exports.updateSetting = async (req, res) => {
  // console.log(req.param.id);
  const filter = { _id: req.params.id };
  const settingUpdate = await Setting.findOneAndUpdate(filter, req.body, {
    new: true,
  });
  res.json(settingUpdate);
};

//Delete Setting
exports.deleteSetting = async (req, res) => {
  try {
    const settingdelete = await Setting.findByIdAndRemove(req.params.id);
    res.json(settingdelete);
  } catch (error) {
    res.send("Error", error);
  }
};
