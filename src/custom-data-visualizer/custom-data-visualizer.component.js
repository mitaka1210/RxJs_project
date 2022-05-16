import { Dependency } from "@/core/dependency";
import Component from "vue-class-component";

@Component
export default class CustomDataVisualizerComponent extends Dependency {
    constructor() {
        super(['AccountsManager']);        
    }

    data() {
        return {
            property1: 5,
            accountData: null
        }
    }

    mounted() {
        console.log(this.goshko);
        this.AccountsManager.getInitialData().subscribe(r => {
            this.$data.accountData = r;
        });
        console.log(this);
        console.log(this.AccountsManager);
    }

    // methods = {
        testClick() {
            alert('512')
        }
    // }s
}