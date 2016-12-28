import $ from 'jquery';

function ApiController(URLs) {
    this.URL_ROOT = "/api";
    this.URL_PREFIX = URLs.prefix;
    this.ENABLE_LOG = true;

    this.log = (message) => {
        if (this.ENABLE_LOG) console.log(message);
    };

    this.getUrl = (url) => {
        return this.URL_ROOT
            + this.URL_PREFIX
            + url
            ;
    };

    this.URL_GET = getUrl("/one");
    this.URL_CREATE = getUrl("/new");
    this.URL_LIST = getUrl("/all");


    this.get = (id, callback) => {
        let url = this.URL_GET + '/' + id;
        this.log(url);
        $.get(url, callback);
    };

    this.create = (data, callback) => {
        let url = this.URL_CREATE;
        this.log(url);
        // $.put(url, data, callback);
        $.ajax({
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            type: "PUT",
            url: url,
            data: JSON.stringify(data),
            success: callback,
            error: callback
        });
    };

    this.list = (callback) => {
        let url = this.URL_LIST;
        this.log(url);
        $.get(url, callback);
    };
}

export {ApiController};
