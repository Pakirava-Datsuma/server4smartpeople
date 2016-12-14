import $ from 'jquery';

function ApiController(URLs){
    this.URL_PREFIX=URLs.prefix;
    this.URL_GET=URLs.get;
    this.URL_POST=URLs.post;
    this.URL_GETALL=URLs.getAll;
    this.URL_ROOT="/api";
    this.ENABLE_LOG=true;

    this.log=(message)=>{
      if (this.ENABLE_LOG) console.log(message);
    }

    this.getUrl=(url)=>{
      return this.URL_ROOT
            +this.URL_PREFIX
            +url
      ;};

  this.get=(data, callback)=>{
      let url=this.getUrl(this.URL_GET+data);
      this.log(url);
      $.get(url, callback);
    };

  this.post=(data, callback)=>{
      let url=this.getUrl(this.URL_POST);
      this.log(url);
      $.post(url, data, callback);
    };

  this.getAll=(callback)=>{
      let url=this.getUrl(this.URL_GETALL);
      this.log(url);
      $.get(url, callback);
    };
};

export {ApiController};
