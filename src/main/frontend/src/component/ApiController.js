import $ from 'jquery';
// import $ from './apiMock';

function ApiController(URLs) {
    this.URL_ROOT = "/api";
    this.URL_PREFIX = URLs.prefix;

    this.getUrl = (url) => {
        return this.URL_ROOT
            + this.URL_PREFIX
            + url
            ;
    };

    this.URL_GET = this.getUrl("/one");
    this.URL_CREATE = this.getUrl("/new");
    this.URL_LIST = this.getUrl("/all");


    this.get = (id, callback) => {
        let url = this.URL_GET + '/' + id;
        $.get(url, callback);
    };

    this.create = (object, callback) => {
        let url = this.URL_CREATE;
        // $.put(url, object, callback);
        $.ajax({
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            type: "PUT",
            url: url,
            data: JSON.stringify(object),
            success: callback,
            error: callback
        });
    };

    this.list = (callback) => {
        let url = this.URL_LIST;
        $.get(url, callback);
    };

    this.remove = (id, callback) => {
        let url = this.URL_DELETE + '/' + id;
        $.get(url, callback);
    };
}

export {ApiController};
