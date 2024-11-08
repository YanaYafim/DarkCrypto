const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  coins: {
    Bitcoin: {
      type: Number,
      default: 0,
    },
    Ethereum: {
      type: Number,
      default: 0,
    },
    Dogecoin: {
      type: Number,
      default: 0,
    },
    Ripple: {
      type: Number,
      default: 0,
    },
    ShibaInu: {
      type: Number,
      default: 0,
    },
  },
});


// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
}
next();
});

// static method to login user
userSchema.statics.login = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model('user', userSchema);

module.exports = User;