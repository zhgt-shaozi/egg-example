"use strict";

const { Service } = require("egg");
const { mysql } = require("../../config/plugin");

class dbService extends Service {
  // 添加国家
  async addCountry(params) {
    const { app } = this;

    const res = await app.mysql.insert("country", { ...params }); // 插入数据
    console.log("result11: ", res);

    // 判断插入是否成功
    const insertSuccess = res.affectedRows === 1;
    if (!insertSuccess) return false;

    return true;
  }

  // 删除国家（根据 id 删除）
  async delCountry(params) {
    const { app } = this;

    const res = await app.mysql.delete("country", { ...params }); // 删除数据
    console.log("result22: ", res);

    // 判断删除是否成功
    const insertSuccess = res.affectedRows === 1;
    if (!insertSuccess) return false;

    return true;
  }

  // 更新国家数据（根据 id 查找 & 更新）
  async updateCountry(params) {
    const { app } = this;

    const res = await app.mysql.update("country", { ...params }); // 更新数据
    console.log("result33: ", res);

    // 判断更新是否成功
    const insertSuccess = res.affectedRows === 1;
    if (!insertSuccess) return false;

    return true;
  }

  // 查询国家数据（查询全部、根据 keyword 参数 对 name 进行模糊查询、分页查询）
  async findCountry(params) {
    console.log("params: ", params);
    const { app } = this;

    const { keyword = "", current = 1, pageSize = 10 } = params;

    // ⭐ select 函数不支持 LIKE、OR 语句，可以使用 query 函数来代替，支持任何 sql 查询语句
    // const data = await app.mysql.select("country", {
    //   where: { ...(keyword && { name: keyword }) }, // 条件语句
    //   // columns: ["name"], // 要查询 & 展示的字段名（默认全展示 *）
    //   // orders: [] // 排序方式
    //   offset: (current - 1) * pageSize, // 偏移数量
    //   limit: pageSize, // 最大数量
    // });
    const offset = (current - 1) * pageSize;
    const data = await app.mysql.query(
      `select * from country WHERE name LIKE '%${keyword}%' LIMIT ${offset}, ${pageSize}`
    );
    console.log("result44: ", data);

    const total = await app.mysql.count("country"); // 查询总数量
    // console.log("total: ", total);

    return {
      dataSource: data,
      current,
      pageSize,
      total,
    };
  }
}

module.exports = dbService;
