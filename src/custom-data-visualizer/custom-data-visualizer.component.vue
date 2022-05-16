<template>
    <div>
        Test
        {{property1}}
        <div v-if="accountData" class="custom-component-roles">
            Roles in class based component - {{accountData.roles}}
            <v-btn @click="testClick()">click me for alert</v-btn>
        </div>
    </div>
</template>

<script src="./custom-data-visualizer.component.js">
</script>
<style scoped>
    @import './custom-data-visualizer.component.scss';
</style>
