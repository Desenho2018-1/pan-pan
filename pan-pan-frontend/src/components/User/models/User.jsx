import { Model } from 'react-axiom';


export default class User extends Model {
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
