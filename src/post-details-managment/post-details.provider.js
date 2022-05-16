import axios from 'axios'
import { Subject } from 'rxjs';

export default class UsersProvider {
    usersData = new Subject();

    usersDataObservable() {
        axios.get('https://jsonplaceholder.typicode.com/users', {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.usersData.next(response.data);
            console.log('tuk e users', this.usersData);
        });

        return this.usersData.asObservable();
    }
}