import { Model } from 'react-axiom';

class User extends Model {
  static defaultState(){
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      city: '',
      state: '',
      username: '',
      role: '',
      active: false
    };
  }
}

export default User
