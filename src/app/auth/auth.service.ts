import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService{
  private user?:User | null;

  registerUser(authData:AuthData){
    this.user={
      email:authData.email,
      userId: Math.round(Math.random()*10000).toString()
    }
  }

  login(authData:AuthData){
    this.user={
      email:authData.email,
      userId: Math.round(Math.random()*10000).toString()
    }
  }

  logout(){
    this.user = null
  }

  getUser(){
    // returning a new object with whatever is container inside
    //  the 'this.user' property. it separates 'this.user' from this method's 
    // return value.
    return {...this.user}
  }

  isAuth(){
    return this.user != null
  }
}