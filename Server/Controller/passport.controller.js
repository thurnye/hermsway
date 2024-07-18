// UserController
const Client = require('../Model/client.model');
const jwt = require('jsonwebtoken');
const Role = require('../Model/roles.model');
const Portal = require('../Model/portals.model');

// Login a User
const getGoogleLogIn = async (req, res) => {
  try {
    const email = req.body.email;
    let user;

    console.log(req.body);

    // Find the user and select necessary fields
    user = await Client.findOne({ email })
      .select('firstName lastName email password role')
      .lean();
    const role = await Role.findOne({ roleName: 'Client' });
    
    if (!user && role) {
      console.log(role)
      // create user for google login if user not found!
      const newUser = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: '',
        googleId: req.body.googleId,
        role: role._id
      });
      user = await newUser.save();
    }

    //get the portals
    const userPortals = await Portal.find({roleRefCode : role.refCode})

    console.log(userPortals)
    await Client.populate(user, {
      path: 'role',
      select: '_id roleName refCode',
    });

    const loggedUser = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role
    };

    const token = jwt.sign({ user: loggedUser, userPortals }, process.env.SECRET, {
      expiresIn: '24h',
    });
    // send a response to the front end
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json('Something went Wrong!!');
  }
};

module.exports = {
  getGoogleLogIn,
};
