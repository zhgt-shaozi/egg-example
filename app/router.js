"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app; //  app 是应用实例，只会有一个

  router.get("/", controller.home.index); // get 请求

  router.post("/dinos/country/add", controller.home.addCountry); // post 请求
  router.post("/dinos/country/delete", controller.home.delCountry);
  router.post("/dinos/country/update", controller.home.updateCountry);
  router.post("/dinos/country", controller.home.findCountry);
};
