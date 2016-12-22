import $ from 'jquery';

function ApiController(URLs) {
    this.URL_PREFIX = URLs.prefix;
    this.URL_GET = URLs.get;
    this.URL_CREATE = URLs.create;
    this.URL_LIST = URLs.list;
    this.URL_ROOT = "/api";
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

    this.get = (id, callback) => {
        let url = this.getUrl(this.URL_GET + '/' + id);
        this.log(url);
        $.get(url, callback);
    };

    this.create = (data, callback) => {
        let url = this.getUrl(this.URL_CREATE);
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
        let url = this.getUrl(this.URL_LIST);
        this.log(url);
        $.get(url, callback);
    };
}

export {ApiController};
