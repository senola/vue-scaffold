import Vue from 'vue';
import Router from 'vue-router';
import componentsList from '@/components/index';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'componentsList',
            component: componentsList
        }
    ]
});
