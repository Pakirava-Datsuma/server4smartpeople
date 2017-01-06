import ReactTimeout from 'react-timeout';

export default class $ {
    static log = (message) => {
        console.log(message);
    };

    static delay(callback) {
        setTimeout(()=>callback(true), 2000);
    }

    static get(url, callback){
        $.log(url);
        $.delay(callback);
    }

    static ajax(data) {
        $.log(data.headers);
        $.log(data.type);
        $.log(data.url);
        $.log(data.data);
        $.delay(data.success);
        // data.error(true);
    }
}
