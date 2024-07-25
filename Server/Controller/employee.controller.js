// UserController
const Employee = require('../Model/employee.model');
const Role = require('../Model/roles.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;
const {mailService} = require('../Services/email.services')
const Portal = require('../Model/portals.model');
const SectionModel = require('../Model/sections.model');
const WidgetModel = require('../Model/widget.model');




//Creating A User
const postEmployee = async (req, res, next) => {
  try {
    const id = req.body.id;
    let savedUser = null;

    let password = '';
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&';

    for (let i = 0; i < 6; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    if (!req.body.email) {
      res.status(400).json('Missing Field Needed!');
      return;
    }

    console.log(req.body, password)
    // const role = await Role.findOne({ roleName: 'Associate' });

    // if (!id) {
    //   // Create New User
    //   const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    //   const newUser = new Employee({
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     email: req.body.email,
    //     password: hashedPassword,
    //     role: role._id,
    //   });
    //   savedUser = await newUser.save();
    // }

    // if (id) {
    //   // Update User
    //   const updateUser = await Employee.findById(id);

    //   if (!updateUser) {
    //     res.status(400).json('No User Found!!');
    //     return;
    //   }

    //   updateUser.firstName = req.body.firstName;
    //   updateUser.lastName = req.body.lastName;
    //   updateUser.email = req.body.email;

    //   savedUser = await updateUser.save();
    // }

    // const user = await Employee.findById(savedUser._id)
    //   .select('firstName lastName _id, role')
    //   .populate({
    //     path: 'role',
    //     select: '_id roleName refCode',
    //   })
    //   .lean();

    // //get the portals
    // const userPortals = await Portal.find({ roleRefCode: role.refCode }).sort({
    //   ordinal: 1,
    // });


    // // get the dashboard widgets and sections
    // const sections = await SectionModel.find({
    //   roleRefCode: user.role.refCode,
    // })
    // .select('sectionName sectionCode roleRefCode ordinal')
    // .sort({ ordinal: 1 });

    
    // // find the widgets with each sections using their sectionCode
    // const dashboardWidgets = await Promise.all(sections.map(async (section) => {
    //   const { sectionCode } = section;
    //   const widgets = await WidgetModel.find({ sectionCode })
    //   .select('widgetName sectionWidgetName sectionCode widgetDimension ordinal widgetComponentName')
    //   .sort({ ordinal: 1 });
    //   return {
    //     section,
    //     widgets,
    //   };
    // }));

    // console.log(dashboardWidgets)

    // const token = jwt.sign({ user, userPortals, dashboardWidgets }, process.env.SECRET, {
    //   expiresIn: '24h',
    // });

    // res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json('Something went Wrong!');
  }
};

// Login a User
const getLogIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      res.status(400).json('Email or Password is Invalid!!');
      return;
    }

    // Find the user and select necessary fields
    const user = await Employee.findOne({ email })
      .select('firstName lastName email password role')
      .populate({
        path: 'role',
        select: '_id roleName refCode',
      })
      .lean();

    if (!user) {
      res.status(400).json('Email or Password is Invalid!!');
      return;
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json('Email or Password is Invalid!!');
      return;
    }

    const loggedUser = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    const userPortals = await Portal.find({
      roleRefCode: user.role.refCode,
    }).sort({ ordinal: 1 });

    // get the dashboard widgets and sections
    const sections = await SectionModel.find({
      roleRefCode: user.role.refCode,
    })
    .select('sectionName sectionCode roleRefCode ordinal')
    .sort({ ordinal: 1 });

    
    // find the widgets with each sections using their sectionCode
    const dashboardWidgets = await Promise.all(sections.map(async (section) => {
      const { sectionCode } = section;
      const widgets = await WidgetModel.find({ sectionCode })
      .select('widgetName sectionWidgetName sectionCode widgetDimension ordinal widgetComponentName')
      .sort({ ordinal: 1 });
      return {
        section,
        widgets,
      };
    }));
    console.log(dashboardWidgets)

    const token = jwt.sign(
      { user: loggedUser, userPortals, dashboardWidgets },
      process.env.SECRET,
      {
        expiresIn: '24h',
      }
    );
    // send a response to the front end
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something went Wrong!!');
  }
};


//Forgotten Password
const PostForgottenPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await Employee.findOne({ email: email });
    console.log('findUser::', user);

    if (!user) {
      res.status(400).json('User Not Found!');
      return;
    }
    var createPass = '';
    var str =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%&';

    for (let i = 0; i < 6; i++) {
      var char = Math.floor(Math.random() * str.length + 1);
      createPass += str.charAt(char);
    }

    console.log('createPass::', createPass);

    // --- content for mail --- //
    let sub = 'Reset Your Password';
    let html = `<h3>
                  Hello ${user.firstName}, 
                  <br/> You forget you password, Don't worry Here your new password <u> ${createPass} </u>
                </h3>
            <p>If you didn't request for a new password. Then you can safely ignore this email.</p>
            <br/>
            <h4>Thank You</h4>`;

    await mailService(user.email, sub, html);

    console.log('findUser._id::::', user._id);
    console.log('createPass::::', createPass);

    await Employee.updateOne(
      {
        _id: user._id,
      },
      {
        $set: {
          password: createPass,
        },
      }
    );
    res.status(200).json('Your new password has been sent on your register mail');
  } catch (error) {
    console.log('forgetPassword-Error::', error);
    res.status(400).json('Something Went Wrong!.');
  }
};

//RETRIEVE ALL USER
const getAllEmployees = async (req, res, next) => {
  try {
    const users = await Employee.find()
      .select('firstName lastName email _id')
      .lean();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

//RETRIEVE A USER BY ID
const getAnEmployeeByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await Employee.findById(id)
      .select('firstName lastName email _id')
      .lean();
    if (!user) {
      res.status(400).json('User Not Found!.');
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

//DELETING A USER
const postDeleteEmployee = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Employee.findByIdAndDelete(id);
    console.log(user);
    if (!user) {
      res.status(400).json('User Not Found!.');
      return;
    }
    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

module.exports = {
  postEmployee,
  getAllEmployees,
  getAnEmployeeByID,
  postDeleteEmployee,
  getLogIn,
  PostForgottenPassword,
};
