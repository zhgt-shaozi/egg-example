"use strict";

const { Controller } = require("egg");

class BaseController extends Controller {
  // static
  //   static name = ''

  // getter
  //   get user() {}

  // 封装一些公共方法，便于继承
  success(data) {
    this.ctx.body = {
      code: 200,
      success: true,
      data,
    };
    this.ctx.status = 200;
  }

  notFound(msg) {
    msg = msg || "not found";
    this.ctx.throw(404, msg); // 抛出一个错误
  }
}

module.exports = BaseController;
