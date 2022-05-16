import { Dependency } from '@/core/dependency';
import Component from 'vue-class-component';

@Component
export default class DetailsBoardComponent extends Dependency {
    constructor() {
        super(['usersManager']);
    }

    data() {
        return {
            accountDataAdditional: null
        }
    }

    mounted() {
        this.usersManager.getInitialData().subscribe(r => {
            console.log('az sum be', r);
        });
    }
}