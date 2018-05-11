import { Model } from 'react-axiom';


export default class User extends Model {
    static defaultState(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            birthDate: '',
            instruments:[],
            state: '',
            city: '',
            userName: '',
            password: '',
            role: 'User',
            active: false
        };
    }
}
