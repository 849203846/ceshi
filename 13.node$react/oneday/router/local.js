const USERS='USERS';
export default {
    getUsers() {
        //获取所有的用户
        let users = localStorage.getItem(USERS);

        return users ? JSON.parse(users) : []
    },
    getUser(id){
      //获取单个用户
        let users=localStorage.getItem(USERS);
        users=JSON.parse(users);
      let a=users.find(item=>item.id==id);
        return a
    },
    addUser(user){
        //增加一个新的用户
        user.id=Date.now();
        let users=this.getUsers();
     users.push(user);
     localStorage.setItem(USERS,JSON.stringify(users))
    },
    delUser (id){
        //删除一个用户
        let users=this.getUsers();
        let user=users.filter(item=>item.id!=id);
        localStorage.setItem(USERS,JSON.stringify(user));
        users=this.getUsers();
        return users
    }
};