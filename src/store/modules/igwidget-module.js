import axios from 'axios';

const state = {
    widgets: [{}],
    widget: null,
    customers: []
};

const getters = {
    all: (state) => state.widgets,
    widget: (state) => state.widget,
    allCustomers: (state) => state.customers,
    customersWithoutWidgets: (state, getters) => {
        // Get all widgets and customers
        const widgets = getters.all;
        const customers = getters.allCustomers;

        // Extract business IDs from widgets
        const widgetBusinessIds = new Set(widgets.map(widget => widget.business_id));

        // Filter customers who do not have a widget
        return customers.filter(customer => !widgetBusinessIds.has(customer.id));
    }
};

const actions = {
    getIgWidget({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios
                .post('/get-widget-data', data)
                .then((res) => {
                    commit('SET_WIDGET', res.data);
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    getWidgetSettings({ commit }, data){
        return new Promise((resolve, reject) => {
            axios
                .post('/get-widget-settings', data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};

const mutations = {

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
