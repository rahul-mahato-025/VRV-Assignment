class RoleDto {
  constructor(role) {
    this._id = role._id;
    this.roleName = role.roleName;
    this.permissions = role.permissions;
    this.createdAt = role.createdAt
      ? new Date(role.createdAt).toLocaleString()
      : "Not Availaible";
  }
}

module.exports = RoleDto;
