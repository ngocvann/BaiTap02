const db = require("../models/index");
const CRUDService = require("../services/CRUDService");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(".........");
    console.log(data);
    console.log(".........");
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let getFindAllCrud = async (req, res) => {
  try {
    let data = await CRUDService.getAllUser();
    return res.render("users/findAllUser.ejs", {
      datalist: data,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error getting users");
  }
};

let postCRUD = async (req, res) => {
  try {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("Post CRUD to server");
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error creating user");
  }
};

let getEditCRUD = async (req, res) => {
  try {
    let userId = req.query.id;
    if (userId) {
      let userData = await CRUDService.getUserInfoById(userId);
      return res.render("users/editUser.ejs", {
        data: userData,
      });
    } else {
      return res.send("Không lấy được ID");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error editing user");
  }
};

let putCRUD = async (req, res) => {
  try {
    let data = req.body;
    let data1 = await CRUDService.updateUser(data);
    return res.render("users/findAllUser.ejs", {
      datalist: data1,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error updating user");
  }
};

let deleteCRUD = async (req, res) => {
  try {
    let id = req.query.id;
    if (id) {
      await CRUDService.deleteUserById(id);
      return res.send("Deleted successfully!");
    } else {
      return res.send("User not found!");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send("Error deleting user");
  }
};

module.exports = {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  getFindAllCrud,
  getEditCRUD,
  putCRUD,
  deleteCRUD,
};
