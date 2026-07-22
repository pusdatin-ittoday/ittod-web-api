const adminUserService = require("../services/admin-user.service");

// List all users
const getUsersList = async (req, res) => {
    try {
        const { page, limit, search } = req.query;
        const result = await adminUserService.getUsersList(
            parseInt(page) || 1,
            parseInt(limit) || 10,
            search
        );
        res.status(200).json({
            success: true,
            data: result.users,
            pagination: result.pagination,
        });
    } catch (error) {
        console.error("Error fetching users list:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Get User detail
const getUserDetail = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await adminUserService.getUserDetail(userId);
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error("Error fetching user detail:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Update User Profile
const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await adminUserService.updateUser(userId, req.body);
        res.status(200).json({
            success: true,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Change User Role (Superadmin Only)
const changeUserRole = async (req, res) => {
    try {
        const { userId } = req.params;
        const { role } = req.body;
        if (!role) {
            return res.status(400).json({ success: false, message: "role is required" });
        }
        const result = await adminUserService.changeUserRole(userId, role);
        res.status(200).json({
            success: true,
            message: result.message,
            data: result.data,
        });
    } catch (error) {
        console.error("Error changing user role:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

// Delete User Account (Superadmin Only)
const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await adminUserService.deleteUser(userId);
        res.status(200).json({
            success: true,
            message: result.message,
            data: result,
        });
    } catch (error) {
        console.error("Error deleting user account:", error);
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal server error",
        });
    }
};

module.exports = {
    getUsersList,
    getUserDetail,
    updateUser,
    changeUserRole,
    deleteUser,
};
