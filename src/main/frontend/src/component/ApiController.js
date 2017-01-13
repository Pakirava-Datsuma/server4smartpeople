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
    this.URL_DELETE = this.getUrl("/delete");

    this.get = (id, callback) => {
        let url = this.URL_GET + '/' + id;
        console.log("get: " + url);
        // $.get(url, callback);
        $.ajax({
            headers: {
                "Accept": "application/json",
            },
            type: "GET",
            url: url,
            success: callback,
            error: callback
        });
    };

    this.create = (object, callback) => {
        let url = this.URL_CREATE;
        delete object.id;
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
        console.log("list: " + url);
        // $.get(url, callback);
        $.ajax({
            headers: {
                "Accept": "application/json",
                // "Content-Type": "application/json"
            },
            type: "GET",
            url: url,
            // data: JSON.stringify(object),
            success: callback,
            error: callback,
        });
    };

    this.remove = (id, callback) => {
        let url = this.URL_DELETE + '/' + id;
        console.log("remove: " + url);
        $.ajax({
            type: "DELETE",
            url: url,
            success: callback,
            error: function () {
                callback()
            },
        });
    };
}

export {ApiController};
