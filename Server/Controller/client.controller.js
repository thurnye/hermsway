// UserController
const Client = require('../Model/client.model');
const Role = require('../Model/roles.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;
const {mailService} = require('../Services/email.services')

//Creating A User
const postClient = async (req, res, next) => {
  try {
    const id = req.body.id;
    let savedUser = null;
    if (!req.body.email || !req.body.password) {
      res.status(400).json('Missing Field Needed!');
      return;
    }
    if (!id) {
      // Create New User
      const role = await Role.find({roleName: 'Client'})
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

      const newUser = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        roleId: role._id
      });
      savedUser = await newUser.save();
    }
    if (id) {
      // Update User
      const updateUser = await Client.findById(id);

      if (!updateUser) {
        res.status(400).json('No User Found!!');
        return;
      }

      updateUser.firstName = req.body.firstName;
      updateUser.lastName = req.body.lastName;
      updateUser.email = req.body.email;

      savedUser = await updateUser.save();
    }

    const user = await Client.findById(savedUser._id)
      .select('firstName lastName _id')
      .lean();

    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: '24h' });
    // send a response to the front end
    res.status(200).json(token);
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
    const user = await Client.findOne({ email })
      .select('firstName lastName email password')
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
    };

    const token = jwt.sign({ user: loggedUser }, process.env.SECRET, {
      expiresIn: '24h',
    });
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
    const user = await Client.findOne({ email: email });
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

    await Client.updateOne(
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
const getAllClients = async (req, res, next) => {
  try {
    const users = await Client.find()
      .select('firstName lastName email _id')
      .lean();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something Went Wrong!.');
  }
};

//RETRIEVE A USER BY ID
const getAClientByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await Client.findById(id)
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
const postDeleteClient = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Client.findByIdAndDelete(id);
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
  postClient,
  getAllClients,
  getAClientByID,
  postDeleteClient,
  getLogIn,
  PostForgottenPassword,
};
