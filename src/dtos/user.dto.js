class UserDto {
  constructor(user) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName ? user.lastName : "-";
    this.status = user.status;
    this.email = user.email;
    this.roles = user.roles;
    this.createdAt = user.createdAt
      ? new Date(user.createdAt).toLocaleString()
      : "Not Availaible";
  }
}

module.exports = UserDto;
