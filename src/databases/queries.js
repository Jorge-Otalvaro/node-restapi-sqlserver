
export const queries = {
    getAllRole: 'SELECT * FROM roles',
    newRol: 'INSERT INTO roles set ?',
    GetRoleById: 'SELECT * FROM roles WHERE id = ?',
    UpdateRoleById: 'UPDATE roles set ? WHERE id = ?',
    deleteRol: 'DELETE FROM roles WHERE id = ?'
}