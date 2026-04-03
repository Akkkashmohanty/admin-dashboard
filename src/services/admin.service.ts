import api from "@/utils/axios";

export const getReportedPosts = async () => {
    const res = await api.get("/admin/reported-posts");
    return res.data;
};

export const getReportedComments = async () => {
    const res = await api.get("/admin/reported-comments");
    return res.data;
};

export const getStats = async () => {
    const res = await api.get("/admin/stats");
    return res.data;
};

export const hidePost = async (postId: string) => {
    await api.patch(`/admin/posts/${postId}/hide`);
};

export const hideComment = async (commentId: string) => {
    await api.patch(`/admin/comments/${commentId}/hide`);
};

export const getUsers = async (status: string) => {
    const res = await api.get(`/admin/users?status=${status}`);
    return res.data;
};

export const suspendUser = async (userId: string) => {
    await api.patch(`/admin/users/${userId}/suspend`);
};

export const activateUser = async (userId: string) => {
    await api.patch(`/admin/users/${userId}/activate`);
};

