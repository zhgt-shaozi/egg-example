"use strict";

const Controller = require("../core/base_controller");

class HomeController extends Controller {
  async index() {
    const { ctx, service, app, config, logger } = this;
    // console.log("config: ", this.config);
    // console.log("mysql: ", this.config.mysql);
    // console.log('ctx: ', ctx);

    // ⭐ 创建校验参数的规则
    // const createRule = {
    //   title: { type: "string" },
    //   content: { type: "string" },
    // };
    // 校验参数
    // ctx.validate(createRule);

    // 组装参数
    // const author = ctx.session.userId;
    // const req = Object.assign(ctx.request.body, { author });

    // 调用 Service 进行业务处理
    // const res = await service.post.create(req);

    // 设置响应内容和响应状态码
    // ctx.body = { id: res.id };
    // ctx.status = 201;	// 响应状态
    this.success({ id: "111" });
  }

  async addCountry() {
    const { ctx, service, app, config, logger } = this;
    // console.log('ctx: ', ctx);

    const params = ctx.request.body; // post 请求参数
    const res = await ctx.service.handledb.addCountry(params); // 通过 ctx 来调用 service 服务
    // 写入响应体
    this.success(res);
  }

  async delCountry() {
    const { ctx } = this;

    const params = ctx.request.body;
    const res = await ctx.service.handledb.delCountry(params);
    this.success(res);
  }

  async updateCountry() {
    const { ctx } = this;

    const params = ctx.request.body;
    const res = await ctx.service.handledb.updateCountry(params);
    this.success(res);
  }

  async findCountry() {
    const { ctx } = this;

    const params = ctx.request.body;
    const res = await ctx.service.handledb.findCountry(params);
    this.success(res);
  }
}

module.exports = HomeController;
