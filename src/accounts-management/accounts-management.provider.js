import axios from 'axios'
import { Subject } from 'rxjs';

export default class AccountsProvider {
    accountsData = new Subject();
    accountsDataAdditional = new Subject();

    accountsDataObservable() {
        axios.get('http://localhost:8080/api/accountdata', {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.accountsData.next(response.data);
        });

        return this.accountsData.asObservable();
    }

    accountsDataAdditionalObservable() {
        axios.get('http://localhost:8080/api/accountadditionaldata', {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            this.accountsDataAdditional.next(response.data);
        });

        return this.accountsDataAdditional.asObservable();
    }

    addRoleToAccount(role) {
        const observableResult = new Subject();
        axios.post('http://localhost:8080/api/addroletoaccount', {
            role: role
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            observableResult.next(response.data);
            // observableResult.complete();
        });

        return observableResult;
    }
}