const decentralizationAdmin = (role) => (role === 1 ? false : true);

const roleByAdminAndManage = (role) => {
  if (role === 1 || role === 2) return true;
  return false;
};

const findRoleById = (role, id) => {
  const newRole = role.find((role) => role.id === id);
  return newRole.name;
};

export { decentralizationAdmin, roleByAdminAndManage, findRoleById };
