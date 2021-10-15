/*
  Normally this file would not be tracked in git so the data URL and user IDs would remain hidden. However,
  for demonstration purposes it is not included in the .gitignore file.

  userDataUrl would likely live here, or somewhere similar. However, the userList would come from a database
  query rather than a stored list in a config file. For convenience that list is stored here for now.
*/

module.exports = {
  host: "localhost",
  port: 3000,
  userDataUrl: "https://s3.amazonaws.com/eight-public/challenge",
  userList: [
    { name: "sean", id: "2228b530e055401f81ba37b51ff6f81d" },
    { name: "xuandan", id: "d6c1355e38194139b8d0c870baf86365" },
    { name: "emily", id: "f9bf229fd19e4c799e8c19a962d73449" },
  ],
  STAGE_MAP: {
    out: 3,
    awake: 2,
    light: 1,
    deep: 0,
  },
  TRIM_LENGTH: ".000Z".length,
};
