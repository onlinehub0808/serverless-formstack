export const validations = {
  firstname: {
    presence: true,
    length: {
      minimum: 2,
      message: "Please First Name must not be less than 2 characters"
    }
  },
  lastname: {
    presence: true,
    length: {
      minimum: 2,
      message: "Please enter your Last Name"
    }
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: "Must be at least 8 characters"
    }
  }
};