import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}
class UserService {
  //获取
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  //添加
  addUser(user: User) {
    return apiClient.post<User[]>("/users", user);
  }
  //删除
  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }
  //更新
  updateUser(user: User) {
    return apiClient.patch("/users/" + user.id, user);
  }
}
export default new UserService();
