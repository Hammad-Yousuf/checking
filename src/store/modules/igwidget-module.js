import axios from 'axios';

const state = {
    widgets: [{}],
    widget: null,
    customers: []
};


const actions = {
    getIgWidget({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios
                .post('/get-widget-data', data)
                .then((res) => {
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
                    resolve(res.data.widget);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
};


export default {
    namespaced: true,
    state,
    actions,
};
