import { Model } from 'react-axiom';


export default class User extends Model {
    static defaultState(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            birthdate: '',
            instruments:[],
            state: '',
            city: '',
            username: '',
            password: '',
            role: 'User',
            active: false
        };
    }
}
