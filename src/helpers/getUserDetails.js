const getUserDetails = user => ({
  name: user.displayName,
  phoneNumber: user.phoneNumber,
});

export default getUserDetails;
