export class UserModel{
    public username: string; 
    public password: string; 
    public first_name: string; 
    public last_name: string;

    constructor(username: string, password: string, first_name: string, last_name: string){
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name
    }
}