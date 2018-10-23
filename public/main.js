(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./services/quotesubmission.service.ts":
/*!*********************************************!*\
  !*** ./services/quotesubmission.service.ts ***!
  \*********************************************/
/*! exports provided: QuotesubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesubmissionService", function() { return QuotesubmissionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesubmissionService = /** @class */ (function () {
    function QuotesubmissionService(http) {
        this.http = http;
    }
    QuotesubmissionService.prototype.sendquotes = function (formdata) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"](); //.set('Content-Type', 'multipart/form-data')
        headers.append('Content-Type', 'multipart/form-data');
        console.log(formdata);
        return this.http.post('http://localhost:3000/upload', formdata); //, {headers: headers })
    };
    QuotesubmissionService.prototype.sendquotes2 = function (formobj) {
        console.log(formobj);
        return this.http.post('http://localhost:3000/upload2', formobj); //, {headers: headers })
    };
    QuotesubmissionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuotesubmissionService);
    return QuotesubmissionService;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us-page/about-us-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bg-img\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-info\" align=\"center\">\n                <img class=\"icons animated zoomIn\" src=\"../../assets/quality_1.png\" />\n                <br>\n                <br>\n                <h1 class=\"fontStyle animated slideInUp font-weight-bold \">Quality Assured</h1>\n            \n                <h5 class=\"fontStyle animated slideInUp paragraph-text font-weight-bold\">\n                    Typhoon supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking\n                    products from the\n                </h5>\n            </div>\n            <div class=\"col-sm-4 col-info\" align=\"center\">\n                <img class=\"icons animated zoomIn\" style=\"width: 150px;height: 100px;\" src=\"../../assets/Quick_Ship_Delivery.png\" />\n                <br>\n                <br>\n                <h1 class=\"fontStyle animated slideInUp font-weight-bold\">Timely Delivery</h1>\n                \n                <h5 class=\"fontStyle animated slideInUp paragraph-text font-weight-bold\">\n                    Typhoon supports both original equipment and contract manufacturers in almarket segments of the electronics industry, stocking\n                    products from the\n                </h5>\n            </div>\n            <div class=\"col-sm-4 col-info\" align=\"center\">\n                <img class=\"icons animated zoomIn\" src=\"../../assets/bag-rupee.png\" />\n                <br>\n                <br>\n                <h1 class=\"fontStyle animated slideInUp font-weight-bold\">Best Price</h1>\n                \n                <h5 class=\"fontStyle animated slideInUp paragraph-text font-weight-bold\">\n                    Typhoon supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking\n                    products from the industry's leading manufacturer\n                </h5>\n            </div>\n        </div>\n    </div>\n</div>\n<section id=timeline>\n        <h1 class=\"font-weight-bold\">A Flexbox Timeline</h1>\n        <p class=\"leader grey-text font-weight-bold\">All cards must be the same height and width for space calculations on large screens.</p>\n        <div class=\"demo-card-wrapper\">\n            <div class=\"demo-card demo-card--step1\">\n                <div class=\"head\">\n                    <div class=\"number-box\">\n                        <span>01</span>\n                    </div>\n                    <h2><span class=\"small\">Subtitle</span> Technology</h2>\n                </div>\n                <div class=\"body\">\n                    <p class=\"grey-text font-weight-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>\n                    <img src=\"http://placehold.it/1000x500\" alt=\"Graphic\">\n                </div>\n            </div>\n    \n            <div class=\"demo-card demo-card--step2\">\n                <div class=\"head\">\n                    <div class=\"number-box\">\n                        <span>02</span>\n                    </div>\n                    <h2><span class=\"small\">Subtitle</span> Confidence</h2>\n                </div>\n                <div class=\"body\">\n                    <p class=\"grey-text font-weight-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>\n                    <img src=\"http://placehold.it/1000x500\" alt=\"Graphic\">\n                </div>\n            </div>\n    \n            <div class=\"demo-card demo-card--step3\">\n                <div class=\"head\">\n                    <div class=\"number-box\">\n                        <span>03</span>\n                    </div>\n                    <h2><span class=\"small\">Subtitle</span> Adaptation</h2>\n                </div>\n                <div class=\"body\">\n                    <p class=\"grey-text font-weight-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>\n                    <img src=\"http://placehold.it/1000x500\" alt=\"Graphic\">\n                </div>\n            </div>\n    \n            <div class=\"demo-card demo-card--step4\">\n                <div class=\"head\">\n                    <div class=\"number-box\">\n                        <span>04</span>\n                    </div>\n                    <h2><span class=\"small\">Subtitle</span> Consistency</h2>\n                </div>\n                <div class=\"body\">\n                    <p class=\"grey-text font-weight-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>\n                    <img src=\"http://placehold.it/1000x500\" alt=\"Graphic\">\n                </div>\n            </div>\n    \n            <div class=\"demo-card demo-card--step5\">\n                <div class=\"head\">\n                    <div class=\"number-box\">\n                        <span>05</span>\n                    </div>\n                    <h2><span class=\"small\">Subtitle</span> Conversion</h2>\n                </div>\n                <div class=\"body\">\n                    <p class=\"grey-text font-weight-bold\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.</p>\n                    <img src=\"http://placehold.it/1000x500\" alt=\"Graphic\">\n                </div>\n            </div>\n        \n        </div>\n</section>\n<br>\n<br>\n<br>\n<div class=\"container-fluid clearfix\">\n    <div class=\"row\">\n        <div class=\"col-sm-6 center-block\">\n            <div class=\"pin-board\">\n                <div class=\"div1 myCard\">\n                    <img src=\"../../assets/img/Dhanush.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n                <div class=\"div2 myCard\">\n                    <img src=\"../../assets/img/m77-howtizer.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6 vertical-center\">\n            <div class=\"text-center\">\n                <h2 class=\"grey-text font-weight-bold\">Dhanush Gun</h2>\n                <p class=\"paragraph-text grey-text font-weight-normal\">\n                    Typhoon supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking\n                    products from the industry's leading manufacturers in different component categories, with a particular\n                    focus on interconnect and elecromechanical products\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <br>\n        <br>\n        <br>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-6 vertical-center\">\n            <div class=\"text-center\">\n                <h2 class=\"grey-text font-weight-bold\">Dhanush Gun</h2>\n                <p class=\"paragraph-text grey-text font-weight-normal\">\n                    Typhoon supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking\n                    products from the industry's leading manufacturers in different component categories, with a particular\n                    focus on interconnect and elecromechanical products\n                </p>\n            </div>\n        </div>\n        <div class=\"col-sm-6 center-block\">\n            <div class=\"pin-board\">\n                <div class=\"div1 myCard\">\n                    <img src=\"../../assets/img/Dhanush.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n                <div class=\"div2 myCard\">\n                    <img src=\"../../assets/img/m77-howtizer.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <br>\n        <br>\n        <br>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-6 center-block\">\n            <div class=\"pin-board\">\n                <div class=\"div1 myCard\">\n                    <img src=\"../../assets/img/Dhanush.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n                <div class=\"div2 myCard\">\n                    <img src=\"../../assets/img/m77-howtizer.jpg\" width=\"250px\" height=\"250px\" />\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6 vertical-center\">\n            <div class=\"text-center\">\n                <h2 class=\"grey-text font-weight-bold\">Dhanush Gun</h2>\n                <p class=\"paragraph-text grey-text font-weight-normal\">\n                    Typhoon supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking\n                    products from the industry's leading manufacturers in different component categories, with a particular\n                    focus on interconnect and elecromechanical products\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n<br>\n<br>\n<br>\n\n<br>\n<br>\n<br>\n<p class=\"h4 text-center py-4 p1\">Our Testimonial</p>\n<!-- Testimonial -->\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"testimonial-card text-center\">\n                <div style=\"height: 150px\">\n                    <div style=\"background: purple;height: 90px\">\n                        <img class=\"card-img\" src=\"../../assets/img/sergey-svechnikov-189224-unsplash.jpg\" />\n                    </div>\n                </div>\n                <div>\n                        <br>\n                        <h3 class=\"grey-text font-weight-bold\">Dummy Text</h3>\n                        <br>\n                        <p class=\"grey-text font-weight-normal \">\n                            Typhoon supports both original equipment and contract manufacturers in all\n                        </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"testimonial-card text-center\">\n                <div style=\"height: 150px\">\n                    <div style=\"background: purple;height: 90px\">\n                        <img class=\"card-img\" src=\"../../assets/img/sergey-svechnikov-189224-unsplash.jpg\" />\n                    </div>\n                </div>\n                <div>\n                        <br>\n                        <h3 class=\"grey-text font-weight-bold\">Dummy Text</h3>\n                        <br>\n                        <p class=\"grey-text font-weight-normal \">\n                            Typhoon supports both original equipment and contract manufacturers in all\n                        </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"testimonial-card text-center\">\n                <div style=\"height: 150px\">\n                    <div style=\"background: purple;height: 90px\">\n                        <img class=\"card-img\" src=\"../../assets/img/sergey-svechnikov-189224-unsplash.jpg\" />\n                    </div>\n                </div>\n                <div>\n                    <br>\n                    <h3 class=\"grey-text font-weight-bold\">Dummy Text</h3>\n                    <br>\n                    <p class=\"grey-text font-weight-normal \">\n                        Typhoon supports both original equipment and contract manufacturers in all\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us-page/about-us-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-img {\n  background: url('trianglify.png') no-repeat center center;\n  background-size: cover; }\n\n.col-info {\n  margin-bottom: 50px; }\n\n.icons {\n  width: 100px;\n  height: 100px; }\n\n.fontStyle {\n  color: white; }\n\n.div1 {\n  background: white;\n  float: left;\n  -webkit-transform: rotate(7deg);\n      -ms-transform: rotate(7deg);\n          transform: rotate(7deg); }\n\n.div2 {\n  float: left;\n  background: white;\n  -webkit-transform: rotate(-8deg);\n      -ms-transform: rotate(-8deg);\n          transform: rotate(-8deg); }\n\n.myCard {\n  border: 1px solid gray;\n  padding: 5px 10px 40px 10px;\n  box-shadow: 5px 5px 10px gray; }\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.pin-board {\n  margin: 20px 30px; }\n\n.paragraph-text {\n  font-size: 17px; }\n\n.vertical-center {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.testimonial-card {\n  margin: 10%;\n  box-shadow: 5px 5px 10px gray; }\n\n.card-img {\n  margin: 5px;\n  border: 6px solid white;\n  border-radius: 50%;\n  width: 150px;\n  height: 150px; }\n\n@media only screen and (max-width: 600px) {\n  .pin-board {\n    display: none; } }\n\n/* Media Queries */\n\n/* Card sizing */\n\n/* Colors */\n\n/* Calculations */\n\n/* Placeholders */\n\n@media (min-width: 1000px) {\n  #timeline .demo-card:nth-child(odd) .head::after, #timeline .demo-card:nth-child(even) .head::after {\n    position: absolute;\n    content: \"\";\n    width: 0;\n    height: 0;\n    border-top: 15px solid transparent;\n    border-bottom: 15px solid transparent; }\n  #timeline .demo-card:nth-child(odd) .head::before, #timeline .demo-card:nth-child(even) .head::before {\n    position: absolute;\n    content: \"\";\n    width: 9px;\n    height: 9px;\n    background-color: #bdbdbd;\n    border-radius: 9px;\n    box-shadow: 0px 0px 2px 8px #f7f7f7; } }\n\n/* Some Cool Stuff */\n\n.demo-card:nth-child(1) {\n  -ms-flex-order: 1;\n      order: 1; }\n\n.demo-card:nth-child(2) {\n  -ms-flex-order: 4;\n      order: 4; }\n\n.demo-card:nth-child(3) {\n  -ms-flex-order: 2;\n      order: 2; }\n\n.demo-card:nth-child(4) {\n  -ms-flex-order: 5;\n      order: 5; }\n\n.demo-card:nth-child(5) {\n  -ms-flex-order: 3;\n      order: 3; }\n\n.demo-card:nth-child(6) {\n  -ms-flex-order: 6;\n      order: 6; }\n\n/* Border Box */\n\n* {\n  box-sizing: border-box; }\n\n/* Fonts */\n\nbody {\n  font-family: Roboto; }\n\n#timeline {\n  padding: 100px 0; }\n\n#timeline h1 {\n    text-align: center;\n    font-size: 3rem;\n    font-weight: 200;\n    margin-bottom: 20px; }\n\n#timeline p.leader {\n    text-align: center;\n    max-width: 90%;\n    margin: auto;\n    margin-bottom: 45px; }\n\n#timeline .demo-card-wrapper {\n    position: relative;\n    margin: auto; }\n\n@media (min-width: 1000px) {\n      #timeline .demo-card-wrapper {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-flow: column wrap;\n            flex-flow: column wrap;\n        width: 1170px;\n        height: 1650px;\n        margin: 0 auto; } }\n\n#timeline .demo-card-wrapper::after {\n      z-index: 1;\n      content: \"\";\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 50%;\n      border-left: 1px solid rgba(191, 191, 191, 0.4); }\n\n@media (min-width: 1000px) {\n        #timeline .demo-card-wrapper::after {\n          border-left: 1px solid #bdbdbd; } }\n\n#timeline .demo-card {\n    position: relative;\n    display: block;\n    margin: 10px auto 80px;\n    max-width: 94%;\n    z-index: 2; }\n\n@media (min-width: 480px) {\n      #timeline .demo-card {\n        max-width: 60%;\n        box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07); } }\n\n@media (min-width: 720px) {\n      #timeline .demo-card {\n        max-width: 40%; } }\n\n@media (min-width: 1000px) {\n      #timeline .demo-card {\n        max-width: 450px;\n        height: 400px;\n        margin: 90px;\n        margin-top: 45px;\n        margin-bottom: 45px; }\n        #timeline .demo-card:nth-child(odd) {\n          margin-right: 45px; }\n          #timeline .demo-card:nth-child(odd) .head::after {\n            border-left-width: 15px;\n            border-left-style: solid;\n            left: 100%; }\n          #timeline .demo-card:nth-child(odd) .head::before {\n            left: 491.5px; }\n        #timeline .demo-card:nth-child(even) {\n          margin-left: 45px; }\n          #timeline .demo-card:nth-child(even) .head::after {\n            border-right-width: 15px;\n            border-right-style: solid;\n            right: 100%; }\n          #timeline .demo-card:nth-child(even) .head::before {\n            right: 489.5px; }\n        #timeline .demo-card:nth-child(2) {\n          margin-top: 180px; } }\n\n#timeline .demo-card .head {\n      position: relative;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      color: #fff;\n      font-weight: 400; }\n\n#timeline .demo-card .head .number-box {\n        display: inline;\n        float: left;\n        margin: 15px;\n        padding: 10px;\n        font-size: 35px;\n        line-height: 35px;\n        font-weight: 600;\n        background: rgba(0, 0, 0, 0.17); }\n\n#timeline .demo-card .head h2 {\n        text-transform: uppercase;\n        font-size: 1.3rem;\n        font-weight: inherit;\n        letter-spacing: 2px;\n        margin: 0;\n        padding-bottom: 6px;\n        line-height: 1rem; }\n\n@media (min-width: 480px) {\n          #timeline .demo-card .head h2 {\n            font-size: 165%;\n            line-height: 1.2rem; } }\n\n#timeline .demo-card .head h2 span {\n          display: block;\n          font-size: 0.6rem;\n          margin: 0; }\n\n@media (min-width: 480px) {\n            #timeline .demo-card .head h2 span {\n              font-size: 0.8rem; } }\n\n#timeline .demo-card .body {\n      background: #fff;\n      border: 1px solid rgba(191, 191, 191, 0.4);\n      border-top: 0;\n      padding: 15px; }\n\n@media (min-width: 1000px) {\n        #timeline .demo-card .body {\n          height: 315px; } }\n\n#timeline .demo-card .body p {\n        font-size: 14px;\n        line-height: 18px;\n        margin-bottom: 15px; }\n\n#timeline .demo-card .body img {\n        display: block;\n        width: 100%; }\n\n#timeline .demo-card--step1 {\n      background-color: #46b8e9; }\n\n#timeline .demo-card--step1 .head::after {\n        border-color: #46b8e9; }\n\n#timeline .demo-card--step2 {\n      background-color: #3ee9d1; }\n\n#timeline .demo-card--step2 .head::after {\n        border-color: #3ee9d1; }\n\n#timeline .demo-card--step3 {\n      background-color: #ce43eb; }\n\n#timeline .demo-card--step3 .head::after {\n        border-color: #ce43eb; }\n\n#timeline .demo-card--step4 {\n      background-color: #4d92eb; }\n\n#timeline .demo-card--step4 .head::after {\n        border-color: #4d92eb; }\n\n#timeline .demo-card--step5 {\n      background-color: #46b8e9; }\n\n#timeline .demo-card--step5 .head::after {\n        border-color: #46b8e9; }\n"

/***/ }),

/***/ "./src/app/about-us-page/about-us-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about-us-page/about-us-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function() { return AboutUsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsPageComponent = /** @class */ (function () {
    function AboutUsPageComponent() {
    }
    AboutUsPageComponent.prototype.ngOnInit = function () {
    };
    AboutUsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us-page',
            template: __webpack_require__(/*! ./about-us-page.component.html */ "./src/app/about-us-page/about-us-page.component.html"),
            styles: [__webpack_require__(/*! ./about-us-page.component.scss */ "./src/app/about-us-page/about-us-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsPageComponent);
    return AboutUsPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _line_card_details_line_card_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-card-details/line-card-details.component */ "./src/app/line-card-details/line-card-details.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _products_details_products_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-details/products-details.component */ "./src/app/products-details/products-details.component.ts");
/* harmony import */ var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-page/about-us-page.component */ "./src/app/about-us-page/about-us-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'LineCards', component: _line_card_details_line_card_details_component__WEBPACK_IMPORTED_MODULE_2__["LineCardDetailsComponent"] },
    { path: 'Products', component: _products_details_products_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductsDetailsComponent"] },
    { path: 'AboutUs', component: _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navcomponent></app-navcomponent>\r\n<router-outlet></router-outlet>\r\n<app-footerblock></app-footerblock>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navcomponent_navcomponent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navcomponent/navcomponent.component */ "./src/app/navcomponent/navcomponent.component.ts");
/* harmony import */ var _productblock_productblock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productblock/productblock.component */ "./src/app/productblock/productblock.component.ts");
/* harmony import */ var _linecardblock_linecardblock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./linecardblock/linecardblock.component */ "./src/app/linecardblock/linecardblock.component.ts");
/* harmony import */ var _productenqblock_productenqblock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productenqblock/productenqblock.component */ "./src/app/productenqblock/productenqblock.component.ts");
/* harmony import */ var _footerblock_footerblock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footerblock/footerblock.component */ "./src/app/footerblock/footerblock.component.ts");
/* harmony import */ var _services_quotesubmission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/quotesubmission.service */ "./services/quotesubmission.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _navbodycomponent_navbodycomponent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbodycomponent/navbodycomponent.component */ "./src/app/navbodycomponent/navbodycomponent.component.ts");
/* harmony import */ var _contactuscomponent_contactuscomponent_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contactuscomponent/contactuscomponent.component */ "./src/app/contactuscomponent/contactuscomponent.component.ts");
/* harmony import */ var _line_card_details_line_card_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./line-card-details/line-card-details.component */ "./src/app/line-card-details/line-card-details.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _products_details_products_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./products-details/products-details.component */ "./src/app/products-details/products-details.component.ts");
/* harmony import */ var _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about-us-page/about-us-page.component */ "./src/app/about-us-page/about-us-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//import { FormBuilder } from '@angular/forms';








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navcomponent_navcomponent_component__WEBPACK_IMPORTED_MODULE_4__["NavcomponentComponent"],
                _productblock_productblock_component__WEBPACK_IMPORTED_MODULE_5__["ProductblockComponent"],
                _linecardblock_linecardblock_component__WEBPACK_IMPORTED_MODULE_6__["LinecardblockComponent"],
                _productenqblock_productenqblock_component__WEBPACK_IMPORTED_MODULE_7__["ProductenqblockComponent"],
                _footerblock_footerblock_component__WEBPACK_IMPORTED_MODULE_8__["FooterblockComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"],
                _navbodycomponent_navbodycomponent_component__WEBPACK_IMPORTED_MODULE_18__["NavbodycomponentComponent"],
                _contactuscomponent_contactuscomponent_component__WEBPACK_IMPORTED_MODULE_19__["ContactuscomponentComponent"],
                _line_card_details_line_card_details_component__WEBPACK_IMPORTED_MODULE_20__["LineCardDetailsComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_21__["HomePageComponent"],
                _products_details_products_details_component__WEBPACK_IMPORTED_MODULE_22__["ProductsDetailsComponent"],
                _about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
            providers: [_services_quotesubmission_service__WEBPACK_IMPORTED_MODULE_9__["QuotesubmissionService"]],
            // declarations: [ AppComponent ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_17__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/contactuscomponent/contactuscomponent.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/contactuscomponent/contactuscomponent.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n    \r\n  }\r\n  div{\r\n      margin-top: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/contactuscomponent/contactuscomponent.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/contactuscomponent/contactuscomponent.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"h4 text-center\">Contact Us</h2>\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-md-6 col-sm-12\">\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15563.014464264577!2d80.0229916!3d12.7944985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x750028adbb6456a5!2sTyphoon+Electronics!5e0!3m2!1sen!2sin!4v1493394792118\" width=\"100%\" height=\"350\" frameborder=\"1\" style=\"border:0;box-shadow:5px 5px 2px #aaaaaa\" allowfullscreen=\"\"></iframe>\n  </div>\n  <div class=\"col-md-6 col-sm-12\">\n    <h4 class=\"h5 text-center\">Registered Address:</h4>\n    <h4 class=\"h6 grey-text text-center\">Typhoon Electronics,</h4>\n    <h4 class=\"h6  grey-text text-center\">#9/25 Vallalar Street, NH-2,</h4>\n    <h4 class=\"h6 grey-text text-center\">Maraimalai Nagar,</h4>\n    <h4 class=\"h6 grey-text text-center\">Kanchipuram (Dist),</h4>\n    <h4 class=\"h6 grey-text text-center\">TN,Pin 603209.</h4>\n    <br>\n    <h4 class=\"h5 text-center\">Corparate Address:</h4>\n    <h4 class=\"h6 grey-text text-center\">Typhoon Electronics,</h4>\n    <h4 class=\"h6  grey-text text-center\">#572 Anna Salai, NH-1,</h4>\n    <h4 class=\"h6 grey-text text-center\">Maraimalai Nagar,</h4>\n    <h4 class=\"h6 grey-text text-center\">Kanchipuram (Dist),</h4>\n    <h4 class=\"h6 grey-text text-center\">TN,Pin 603209.</h4>\n\n\n\n    \n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contactuscomponent/contactuscomponent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/contactuscomponent/contactuscomponent.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactuscomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactuscomponentComponent", function() { return ContactuscomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactuscomponentComponent = /** @class */ (function () {
    function ContactuscomponentComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ContactuscomponentComponent.prototype.ngOnInit = function () {
    };
    ContactuscomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactuscomponent',
            template: __webpack_require__(/*! ./contactuscomponent.component.html */ "./src/app/contactuscomponent/contactuscomponent.component.html"),
            styles: [__webpack_require__(/*! ./contactuscomponent.component.css */ "./src/app/contactuscomponent/contactuscomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactuscomponentComponent);
    return ContactuscomponentComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
        this.searchresult = false;
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        var _this = this;
        this.searchresult = false;
        if (!items)
            return [];
        if (!searchText)
            return [];
        searchText = searchText.trim();
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            _this.searchresult = true;
            return it.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footerblock/footerblock.component.css":
/*!*******************************************************!*\
  !*** ./src/app/footerblock/footerblock.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mediumfont{\r\n    font-size: 18px;\r\n}\r\nfooter{\r\n    \r\n    bottom:0;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/footerblock/footerblock.component.html":
/*!********************************************************!*\
  !*** ./src/app/footerblock/footerblock.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <!--Footer-->\n<footer class=\"page-footer mdb-color text-center text-md-left pt-4 mt-4\">\n\n    <!--Footer Links-->\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <!--First column-->\n            <div class=\"col-md-3 offset-md-1\">\n                <h5 class=\"title font-weight-bold\">About Us</h5>\n                <p class=\" font-weight-normal\">Typhoon was built on the ideals of deep inventory, flexible policies, responsive systems, knowledgeable tecnical support and unsurpassed customer service.</p>\n            </div>\n            <!--/.First column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Second column-->\n            <div class=\"col-md-2 offset-md-1\">\n                <h4 class=\"title font-weight-bold\">Links</h4>\n                <ul class=\"list-unstyled\">\n                    <li class=\"font-weight-normal \">\n                        <a routerLink=\"/Home\">Home</a>\n                    </li>\n                    <li class=\"font-weight-normal\">\n                        <a routerLink=\"/LineCards\">Line Cards</a>\n                    </li>\n                    <li class=\"font-weight-normal\"> \n                        <a routerLink=\"/Products\">Products</a>\n                    </li>\n                    <li class=\"font-weight-normal\">\n                        <a routerLink=\"/AboutUs\">About us</a>\n                    </li>\n                </ul>\n            </div>\n            <!--/.Second column-->\n\n            <hr class=\"hidden-md-up\">\n\n            <!--Third column-->\n            <div class=\"col-md-4\">\n                 <h4 class=\"title font-weight-bold mediumfont\">Reach Us</h4>\n                 <div>\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span>     (044) 2745 2315</span>\n                 </div>\n                 <div>\n                    <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>  admin@typhoonelec.com</span>\n                 </div>\n                \n                \n\n            </div>\n            <!--/.Third column-->\n\n            <hr class=\"hidden-md-up\">\n\n\n        </div>\n    </div>\n    <!--/.Footer Links-->\n\n    <hr>\n\n\n    <!--Copyright-->\n    <div class=\"footer-copyright text-center py-2\">\n        <div class=\"container-fluid font-weight-bold\">\n            Copyright © 2018 Typhoon Electronics. All Rights Reserved.\n        </div>\n    </div>\n    <!--/.Copyright-->\n\n</footer>\n<!--/.Footer-->"

/***/ }),

/***/ "./src/app/footerblock/footerblock.component.ts":
/*!******************************************************!*\
  !*** ./src/app/footerblock/footerblock.component.ts ***!
  \******************************************************/
/*! exports provided: FooterblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterblockComponent", function() { return FooterblockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterblockComponent = /** @class */ (function () {
    function FooterblockComponent(fb) {
        this.fb = fb;
        this.map = { lat: 51.678418, lng: 7.809007 };
        this.modalForm = fb.group({
            modalFormNameEx: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            modalFormEmailEx: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            modalFormSubjectEx: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            modalFormTextEx: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    FooterblockComponent.prototype.ngOnInit = function () {
    };
    FooterblockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footerblock',
            template: __webpack_require__(/*! ./footerblock.component.html */ "./src/app/footerblock/footerblock.component.html"),
            styles: [__webpack_require__(/*! ./footerblock.component.css */ "./src/app/footerblock/footerblock.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FooterblockComponent);
    return FooterblockComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbodycomponent></app-navbodycomponent>\n<app-productblock></app-productblock>\n<app-linecardblock></app-linecardblock>\n<app-productenqblock></app-productenqblock>\n<app-contactuscomponent></app-contactuscomponent>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/line-card-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/line-card-data.service.ts ***!
  \*******************************************/
/*! exports provided: LineCardDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCardDataService", function() { return LineCardDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineCardDataService = /** @class */ (function () {
    function LineCardDataService(http) {
        this.http = http;
        this.url = "../assets/LineCardInfo.json";
    }
    LineCardDataService.prototype.getLineCardDetails = function () {
        return this.http.get(this.url);
    };
    LineCardDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LineCardDataService);
    return LineCardDataService;
}());



/***/ }),

/***/ "./src/app/line-card-details/line-card-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/line-card-details/line-card-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\"><br><br><br><br></div>\n  <p class=\"h4 text-center\">Line Cards</p>\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-3 col-xs-3 row-sep\" *ngFor=\"let card of lineCards\">\n      <!--Card-->\n      <div class=\"card view zoom\">\n        <!--Card image-->\n        <div class=\"hm-white-slight waves-light wow slideInUp\" mdbWavesEffect align=\"center\">\n          <img src=\"{{ card.imageUrl }}\" class=\"img-fluid img-small\" alt=\"Line Card\">\n          <a>\n            <div class=\"mask\"></div>\n          </a>\n        </div>\n        <!--Card content-->\n       <!-- <div class=\"card-body\">\n          <!--Title\n          <h4 class=\"card-title\" align=\"center\">{{ card.name }}</h4>\n        </div>-->\n        <!--/.Card-->\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/line-card-details/line-card-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/line-card-details/line-card-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-sep {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.card-font {\n  font-size: 15px; }\n\n.img-small {\n  padding: 15px; }\n"

/***/ }),

/***/ "./src/app/line-card-details/line-card-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/line-card-details/line-card-details.component.ts ***!
  \******************************************************************/
/*! exports provided: LineCardDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineCardDetailsComponent", function() { return LineCardDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _line_card_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line-card-data.service */ "./src/app/line-card-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineCardDetailsComponent = /** @class */ (function () {
    function LineCardDetailsComponent(lineCardService) {
        this.lineCardService = lineCardService;
        this.lineCards = [];
    }
    LineCardDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineCardService.getLineCardDetails()
            .subscribe(function (data) { return _this.lineCards = data; });
    };
    LineCardDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-card-details',
            template: __webpack_require__(/*! ./line-card-details.component.html */ "./src/app/line-card-details/line-card-details.component.html"),
            styles: [__webpack_require__(/*! ./line-card-details.component.scss */ "./src/app/line-card-details/line-card-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_line_card_data_service__WEBPACK_IMPORTED_MODULE_1__["LineCardDataService"]])
    ], LineCardDetailsComponent);
    return LineCardDetailsComponent;
}());



/***/ }),

/***/ "./src/app/linecardblock/linecardblock.component.css":
/*!***********************************************************!*\
  !*** ./src/app/linecardblock/linecardblock.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    margin-top: 5px;\r\n}\r\n.row{\r\n    margin-top:20px !important;\r\n    padding: 20px;\r\n\r\n}\r\n.btn-rounded1{\r\n    border-radius: 30px !important;\r\n    \r\n}\r\nimg{\r\n    padding: 10px;\r\n}\r\n/*.row{\r\n    position: relative;\r\n    margin: 10px;\r\n    -webkit-animation: mymove 3s;  /* Safari 4.0 - 8.0 \r\n    -webkit-animation-iteration-count: 10; Safari 4.0 - 8.0 \r\n    animation: mymove 3s;\r\n    animation-iteration-count: 10;\r\n}\r\n\r\n/* Safari 4.0 - 8.0 \r\n@-webkit-keyframes mymove {\r\n    from {left : 0px;}\r\n    to {left : 200px;}\r\n}\r\n\r\n@keyframes mymove {\r\n    from {left: 0px;}\r\n    to {left: 200px;}\r\n}*/\r\np{\r\n    margin-top: 60px;\r\n}\r\n.btn1 {\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    color: black;\r\n    padding: 5px 15px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n}\r\nmdb-icon{\r\n    color: white !important;\r\n    padding: 50px;\r\n    margin: 15px;\r\n}\r\n/* Green */\r\n.success {\r\n    border-color: #4CAF50;\r\n    color: green;\r\n}\r\n.success:hover {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n/* Blue */\r\n.info {\r\n    border-color: purple;\r\n    color: purple;\r\n}\r\n.info:hover {\r\n    background: purple;\r\n    color: white;\r\n}\r\n/* Orange */\r\n.warning {\r\n    border-color: #ff9800;\r\n    color: orange;\r\n}\r\n.warning:hover {\r\n    background: #ff9800;\r\n    color: white;\r\n}\r\n/* Red */\r\n.danger {\r\n    border-color: #f44336;\r\n    color: red\r\n}\r\n.danger:hover {\r\n    background: #f44336;\r\n    color: white;\r\n}\r\n/* Gray */\r\n.default {\r\n    border-color: #e7e7e7;\r\n    color: black;\r\n}\r\n.default:hover {\r\n    background: #e7e7e7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/linecardblock/linecardblock.component.html":
/*!************************************************************!*\
  !*** ./src/app/linecardblock/linecardblock.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"h4 text-center\">Line Cards</p>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <!-- Card Dark -->\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[0].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Card Dark -->\n    </div>\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <!-- Card Dark -->\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[1].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Card Dark -->\n    </div>\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <!-- Card Dark -->\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[2].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Card Dark -->\n    </div>\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <!-- Card Dark -->\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[3].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n        <!-- Card content -->\n      </div>\n      <!-- Card Dark -->\n    </div>\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <!-- Card Dark -->\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[4].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Card Dark -->\n    </div>\n    <div class=\"col-md-2 col-sm-4 col-xs-2\">\n      <div class=\"card\">\n        <!-- Card image -->\n        <div class=\"view overlay\">\n          <img class=\"card-img-top wow slideInUp\" src=\"{{ lineCards[5].imageUrl }}\" alt=\"Card image cap\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n        </div>\n      </div>\n      <!-- Card Dark -->\n    </div>\n  </div>\n  <div class=\"row \">\n    <div class=\"col-xs-4 col-sm-4 col-md-4\"></div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4 text-center\">\n      <button type=\"button\" class=\"btn btn-secondary btn-rounded1 waves-light\" mdbWavesEffect routerLink=\"/LineCards\">\n        <span>more cards</span>\n      </button>\n    </div>\n    <div class=\"col-xs-4 col-sm-4 col-md-4\"></div>\n    <!-- Card Dark-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/linecardblock/linecardblock.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/linecardblock/linecardblock.component.ts ***!
  \**********************************************************/
/*! exports provided: LinecardblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinecardblockComponent", function() { return LinecardblockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _line_card_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../line-card-data.service */ "./src/app/line-card-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LinecardblockComponent = /** @class */ (function () {
    function LinecardblockComponent(lineCardService) {
        this.lineCardService = lineCardService;
        this.lineCards = [];
    }
    LinecardblockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lineCardService.getLineCardDetails()
            .subscribe(function (data) { return _this.lineCards = data; });
    };
    LinecardblockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-linecardblock',
            template: __webpack_require__(/*! ./linecardblock.component.html */ "./src/app/linecardblock/linecardblock.component.html"),
            styles: [__webpack_require__(/*! ./linecardblock.component.css */ "./src/app/linecardblock/linecardblock.component.css")]
        }),
        __metadata("design:paramtypes", [_line_card_data_service__WEBPACK_IMPORTED_MODULE_1__["LineCardDataService"]])
    ], LinecardblockComponent);
    return LinecardblockComponent;
}());



/***/ }),

/***/ "./src/app/navbodycomponent/navbodycomponent.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/navbodycomponent/navbodycomponent.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\np{\r\n    color: gray;\r\n    font-size: 15px;\r\n  \r\n}\r\nspan{\r\n    color: gray;\r\n}\r\n.nav_banner{\r\n    margin-top: 150px;\r\n    padding: 20px;\r\n}\r\nimg{\r\n     width: 300px;\r\n}\r\n.btn{\r\n    border-radius: 30px !important;\r\n    \r\n}\r\ni{\r\n    color: purple;\r\n    cursor: pointer;\r\n    position: fixed;\r\n    top: 53%;\r\n    right: 1%;\r\n   -webkit-transform: translateY(-50%);\r\n   -ms-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    z-index: 1;\r\n   \r\n}"

/***/ }),

/***/ "./src/app/navbodycomponent/navbodycomponent.component.html":
/*!******************************************************************!*\
  !*** ./src/app/navbodycomponent/navbodycomponent.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\n\n<!--Main Layout-->\n<main class=\"text-center nav_banner\">\n\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\" col-sm-12 col-md-6\">\n          <img src=\"../../assets/img/intro.gif\" class=\"img-responsive\">\n      </div>\n      <div class=\"col-sm-12 col-md-6\">\n        <h1 class=\"text-center deep-purple-text\"><strong><span>Typhoon Electronics</span></strong></h1>\n        <p align=\"justify\"><strong>Typhoon  supports both original equipment and contract manufacturers in all market segments of the electronics industry, stocking products from the industry's leading manufacturers in different component categories, with a particular focus on interconnect and elecromechanical products.</strong></p>\n        <p align=\"justify\"><strong>Typhoon was built on the ideals of deep inventory, flexible policies, responsive systems, knowledgeable tecnical support and unsurpassed customer service.It is the philosophies that have made Typhoon the pre-eminent interconnect distributor in the world</strong></p>\n        <p align=\"justify\"><strong>Typhoon can soure components from thir international sourcing group any hard to find, obsolete and allocated parts from any part of the world through their associate offices in Malaysia, Japan, Singapore, North America, UK, Germany and France within a very short time. Typhoon can maintain excess inventory and will help liquidate excess inventory for repeaedd regular orders. Typhoon can support by supplying components for R&D department, design, prototype development requirements.</strong></p>\n        <button type=\"button\" class=\"btn btn-secondary btn-rounded1 waves-light\" mdbWavesEffect>Know more</button>\n      </div>\n    </div>\n  </div>\n  <!--Main Layout-->\n  <!--<button type=\"button\" class=\"btn waves-light btn1\" (click)=\"form.show()\" mdbWavesEffect>\n      <i class=\"fa fa-envelope fa-lg\" aria-hidden=\"true\"></i></button>-->\n      <i class=\"fa fa-envelope fa-3x sticky\" (click)=\"form.show()\"></i>\n  \n   \n      \n      <!--Modal: Contact form-->\n      <div mdbModal #form=\"mdb-modal\" class=\"modal fade\" id=\"modalContactForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog cascading-modal\" role=\"document\">\n          <!--Content-->\n          <div class=\"modal-content\">\n      \n            <!--Header--> \n            <div class=\"modal-header purple  white-text\">\n              <h4 class=\"title\">Write to us</h4>\n              <button type=\"button\" class=\"close waves-effect waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"form.hide()\">\n                <span aria-hidden=\"true\">×</span>\n              </button>\n            </div>\n            <!--Body-->\n            <div class=\"modal-body mb-0\">\n              <form [formGroup]=\"writeToUs\" (submit)=\"formSubmit(writeToUs.value)\">\n                <div class=\"md-form form-sm\">\n                  <i class=\"fa fa-envelope prefix\"></i>\n                  <input  placeholder=\"Name\" type=\"text\" id=\"modalFormNameEx\" formControlName=\"name\" class=\"form-control\">\n                \n                </div>\n      \n                <div class=\"md-form form-sm\">\n                  <i class=\"fa fa-lock prefix\"></i>\n                  <input placeholder=\"Email\" type=\"email\" id=\"modalFormEmailEx\" formControlName=\"email\" class=\"form-control\">\n               \n                </div>\n      \n                <div class=\"md-form form-sm\">\n                  <i class=\"fa fa-pencil prefix\"></i>\n                  <textarea placeholder=\"Message\" type=\"text\" id=\"modalFormTextEx\" formControlName=\"message\" class=\"md-textarea mb-0\"></textarea>\n               \n                </div>\n      \n                <div class=\"text-center mt-1-half\">\n                  <button type=\"submit\" class=\"btn  mb-2 waves-light purple\" mdbWavesEffect (click)=\"form.hide()\" [disabled]=\"!writeToUs.valid\">Send\n                    <i class=\"fa fa-send ml-1\"></i>\n                  </button>\n                </div>\n              </form>\n      \n            </div>\n          </div>\n          <!--/.Content-->\n        </div>\n      </div>\n  \n  </main>\n  \n  \n"

/***/ }),

/***/ "./src/app/navbodycomponent/navbodycomponent.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/navbodycomponent/navbodycomponent.component.ts ***!
  \****************************************************************/
/*! exports provided: NavbodycomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbodycomponentComponent", function() { return NavbodycomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbodycomponentComponent = /** @class */ (function () {
    function NavbodycomponentComponent(fb, http, toastr) {
        this.fb = fb;
        this.http = http;
        this.toastr = toastr;
        this.url = "http://localhost:3000/writeus";
        this.writeToUs = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            'message': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    NavbodycomponentComponent.prototype.ngOnInit = function () {
    };
    NavbodycomponentComponent.prototype.formSubmit = function (values) {
        var _this = this;
        var data = {
            "name": values.name,
            "email": values.email,
            "message": values.message
        };
        this.http.post(this.url, data).subscribe(function (data) {
            if (data['error_code'] == 0) {
                _this.toastr.success('Glad to hear from you. Your concerns will be addressed.', 'Message Sent!', {
                    tapToDismiss: true,
                    closeButton: true
                });
            }
            else {
                _this.toastr.error('error Occured');
            }
        });
    };
    NavbodycomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbodycomponent',
            template: __webpack_require__(/*! ./navbodycomponent.component.html */ "./src/app/navbodycomponent/navbodycomponent.component.html"),
            styles: [__webpack_require__(/*! ./navbodycomponent.component.css */ "./src/app/navbodycomponent/navbodycomponent.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavbodycomponentComponent);
    return NavbodycomponentComponent;
}());



/***/ }),

/***/ "./src/app/navcomponent/navcomponent.component.css":
/*!*********************************************************!*\
  !*** ./src/app/navcomponent/navcomponent.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.typhoonPurple{\r\n    color: purple !important;\r\n    \r\n}\r\nimg{\r\n    width: 125px !important;\r\n    height: 25px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navcomponent/navcomponent.component.html":
/*!**********************************************************!*\
  !*** ./src/app/navcomponent/navcomponent.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"h-100\">\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\n      <logo class=\"logo\">\n          <a class=\"logo\" routerLink=\"/Home\">\n              <img src=\"../../assets/img/logo.png\" />\n          </a>\n      </logo>\n      <links>\n          <ul class=\"navbar-nav ml-auto\">\n              <li class=\"nav-item waves-dark\" mdbWavesEffect >\n                  <a class=\"nav-link\" routerLink=\"/Home\">\n                      <strong class=\"typhoonPurple\" >Home</strong>\n                      <span class=\"sr-only\">(current)</span>\n                  </a>\n              </li>\n              <li class=\"nav-item waves-dark\" mdbWavesEffect >\n                  <a  class=\"nav-link\" routerLink=\"/Products\">\n                      <strong class=\"typhoonPurple\">Products</strong>\n                  </a>\n              </li>\n              <li class=\"nav-item waves-dark\" mdbWavesEffect>\n                  <a class=\"nav-link\" routerLink=\"/AboutUs\">\n                      <strong class=\"typhoonPurple\">About Us</strong>\n                  </a>\n              </li>\n          </ul>\n          <ul class=\"navbar-nav nav-flex-icons\">\n              <li class=\"nav-item waves-dark\" mdbWavesEffect>\n                  <a class=\"nav-link\">\n                      <i class=\"fa fa-facebook typhoonPurple\" mdbTooltip=\"Facebook\" placement=\"bottom\"></i>\n                  </a>\n              </li>\n              <li class=\"nav-item waves-dark\" mdbWavesEffect>\n                  <a class=\"nav-link\">\n                      <i class=\"fa fa-twitter typhoonPurple\" mdbTooltip=\"Twitter\" placement=\"bottom\"></i>\n                  </a>\n              </li>\n              <li class=\"nav-item waves-dark\" mdbWavesEffect>\n                  <a class=\"nav-link\">\n                      <i class=\"fa fa-instagram typhoonPurple\" mdbTooltip=\"Instagram\" placement=\"bottom\"></i>\n                  </a>\n              </li>\n              <li class=\"nav-item waves-dark\" mdbWavesEffect>\n                  <a class=\"nav-link\">\n                      <i class=\"fa fa-envelope typhoonPurple\" mdbTooltip=\"E-Mail\" placement=\"bottom\"></i>\n                  </a>\n              </li>\n          </ul>\n      </links>\n  </mdb-navbar>\n</header>\n"

/***/ }),

/***/ "./src/app/navcomponent/navcomponent.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navcomponent/navcomponent.component.ts ***!
  \********************************************************/
/*! exports provided: NavcomponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavcomponentComponent", function() { return NavcomponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavcomponentComponent = /** @class */ (function () {
    function NavcomponentComponent() {
    }
    NavcomponentComponent.prototype.ngOnInit = function () {
    };
    NavcomponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navcomponent',
            template: __webpack_require__(/*! ./navcomponent.component.html */ "./src/app/navcomponent/navcomponent.component.html"),
            styles: [__webpack_require__(/*! ./navcomponent.component.css */ "./src/app/navcomponent/navcomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavcomponentComponent);
    return NavcomponentComponent;
}());



/***/ }),

/***/ "./src/app/product-card.service.ts":
/*!*****************************************!*\
  !*** ./src/app/product-card.service.ts ***!
  \*****************************************/
/*! exports provided: ProductCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardService", function() { return ProductCardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardService = /** @class */ (function () {
    function ProductCardService(http) {
        this.http = http;
        this.url = "../assets/ProductsCard.json";
    }
    ProductCardService.prototype.getProductCardDetails = function () {
        return this.http.get(this.url);
    };
    ProductCardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductCardService);
    return ProductCardService;
}());



/***/ }),

/***/ "./src/app/productblock/productblock.component.css":
/*!*********************************************************!*\
  !*** ./src/app/productblock/productblock.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\r\n    margin-top: 30px;\r\n    \r\n}\r\n/*.card-body{\r\n    padding: 10px;\r\n}*/\r\nul{\r\n    list-style-type: none;\r\n}\r\n.p1{\r\n    margin-top: 100px;\r\n    \r\n}\r\nh2{\r\n    color: gray !important;\r\n    margin-bottom: 25px;\r\n    font-size: 20px;\r\n}\r\n.card p{\r\n    font-size: 15px;\r\n    color: gray;\r\n  \r\n    \r\n}\r\n.color_purple{\r\n    color: purple !important;\r\n}\r\n.text-head{\r\n    text-align: center;\r\n}\r\nbody {\r\n background: #ccc;   \r\n}\r\n.flip {\r\n  -webkit-perspective: 800;\r\n   height: 550px;\r\n   position: relative;\r\n   margin: 5px auto;\r\n}\r\n.flip .card.flipped {\r\n  -webkit-transform: rotateY(-180deg);\r\n}\r\n.heading{\r\n    margin-top: 15px;\r\n    color: gray;\r\n}\r\n.flip .card {\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transform-style: preserve-3d;\r\n  -webkit-transition: 0.5s;\r\n}\r\n.flip .card .face {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  -webkit-backface-visibility: hidden ;\r\n  z-index: 2;\r\n  text-align: center;\r\n  font-size: 20px;\r\n    \r\n}\r\n.flip .card .front {\r\n  position: absolute;\r\n  z-index: 1;\r\n    background: white;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.flip .card .back {\r\n  -webkit-transform: rotateY(-180deg);\r\n    background: blue;\r\n    background: white;\r\n    color: black;\r\n    cursor: pointer;\r\n}\r\n.view1 {\r\n  \r\n    background: url('blob-2745959.png')no-repeat center center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n}"

/***/ }),

/***/ "./src/app/productblock/productblock.component.html":
/*!**********************************************************!*\
  !*** ./src/app/productblock/productblock.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n   \n    </div>\n    <div class=\"col-md-8\">\n      <!-- Card \n    <div class=\"card card-cascade narrower\">\n           <!-- Card \n        <div class=\"card card-cascade\">\n        \n         \n        \n          <!-- Card content \n          <div class=\"card-body card-body-cascade text-center\">\n        \n            <h1 class=\"card-text color_purple\"><stong>MIL-GRADE CONNECTORS</stong></h1>\n            <hr>\n            <ul>\n              <li>MIL-DTL-5015</li>\n              <li>MIL-C-26482 Series II</li>\n              <li>MIL-DTL-83723 Series III</li>\n              <li>MIL-DTL-38999 Series I & II</li>\n              <li>MIL-DTL-38999 Series II</li>\n              <li>MIL-DTL-38999 Series III</li>\n              <li>BACKSHELLS</li>\n              <li>DUST CAPS</li>\n              <li>MIL-C-26500</li>\n            </ul>\n            <hr>\n            <button type=\"button\" class=\"btn btn-secondary btn-rounded1 waves-light\" mdbWavesEffect>know more</button>\n        \n          </div>\n    \n    </div>\n    <!-- Card \n    </div>\n    <div class=\"col-md-2\">\n \n    </div>\n  </div>-->\n  <p class=\"h4 text-center py-4 p1\">Our Products</p>\n <!-- <div class=\"view view1\">\n    <div class=\"full-bg-img\">\n        <div class=\"mask rgba-black-light flex-center\">\n        </div>    \n    </div>\n</div>-->\n  \n<div class=\"container text-center white-text\">\n    <div class=\"white-text text-center wow fadeInUp\">\n      <div class=\"container\"  id=\"product\">\n        <div class=\"row \">\n          \n           \n          \n          <div class=\"col-md-4 \">\n              <div class=\"flip\" (click)=\"onclick()\" (mouseenter)=\"onclick()\" (mouseleave)=\"onclick()\"> \n                  <div class=\"card\" [class.flipped]=\"flipindicator\"> \n                      <div class=\"face front\"> \n                          <!-- Card image -->\n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/john-carlisle-539580-unsplash.jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                              \n                                  <h2 class=\"grey-text font-weight-bold\">Active Devices</h2>\n                                  <p>AD/DA Converters</p>\n                                  <p>Logics and Linear IC's</p>\n                                  <p>EPROM's | EEPROM's</p>\n                                  <p>Microcontrollers | MicroProcessors</p>\n                                  \n                                \n                                \n                              </div>\n              \n                      </div> \n                      <div class=\"face back\"> \n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/nenad-grujic-671248-unsplash.jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                              \n                                <h2 class=\"grey-text font-weight-bold\">Active Devices</h2>  \n                                <p>MOSFET's & IGBT</p>\n                                <p>Diodes & Rectifiers</p>\n                                <p>Transistors</p>\n                                <p>and more..</p>\n                                \n                                \n                              </div>\n                      </div> \n                  </div> \n              </div> \n          </div>\n          <div class=\"col-md-4 \">\n              <div class=\"flip\" (click)=\"onclick1()\" (mouseenter)=\"onclick1()\" (mouseleave)=\"onclick1()\"> \n                  <div class=\"card\" [class.flipped]=\"flipindicator1\"> \n                      <div class=\"face front\"> \n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/alexandre-debieve-561298-unsplash.jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                                <h2 class=\"grey-text font-weight-bold\">Passive  Devices</h2>\n                                <p>Capacitors</p>\n                                <p>Connectors</p>\n                                <p>Crystal Oscillators</p>\n                                <p>Displays | LCD's</p>\n                  \n                              </div>\n                      </div> \n                      <div class=\"face back\"> \n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/victor-aznabaev-680684-unsplash.jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                              \n                                <h2 class=\"grey-text font-weight-bold\">Passive  Devices</h2>\n                                <p>Inductors</p>\n                                <p>MOV's</p>\n                                <p>Relay's</p>\n                                <p>Resistors</p>\n                                <p>and more</p>\n                                \n                              </div>\n                      </div> \n                  </div> \n              </div> \n          </div>\n          <div class=\"col-md-4 \">\n              <div class=\"flip\" (click)=\"onclick2()\" (mouseenter)=\"onclick2()\" (mouseleave)=\"onclick2()\"> \n                  <div class=\"card\" [class.flipped]=\"flipindicator2\"> \n                      <div class=\"face front\"> \n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/sergey-svechnikov-189224-unsplash.jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                              \n                                <h2 class=\"grey-text font-weight-bold\">Mil-Grade Connectors</h2>\n                                <p>MIL-DTL-5015</p>\n                                <p>MIL-C-26482 Series II</p>\n                                <p>MIL-DTL-83723 Series III</p>\n                                <p>MIL-DTL-38999 Series I & II</p>\n                               \n                                \n                                \n                              </div>\n                      </div> \n                      <div class=\"face back\"> \n                          <div class=\"view overlay\">\n                              <img class=\"card-img-top\" src=\"../../assets/img/carlos-irineu-da-costa-442504-unsplash (1).jpg\" alt=\"Card image cap\">\n                              <a>\n                                <div class=\"mask rgba-white-slight\"></div>\n                              </a>\n                            </div>\n                          \n                            <!-- Card content -->\n                            <div class=\"card-body text-center rounded-bottom\">\n                              \n                                <h2 class=\"grey-text font-weight-bold\">Mil-Grade Connectors</h2>\n                                <p>MIL-DTL-38999 Series II</p>\n                                <p>MIL-DTL-38999 Series III</p>\n                                <p>BACKSHELLS</p>\n                                <p>DUST CAPS</p>\n                                <p>MIL-C-26500</p>\n                               \n                                \n                                \n                              </div>\n                      </div> \n                  </div> \n              </div> \n          </div>\n        </div>\n      </div>\n        \n        \n\n</div>\n\n    \n\n "

/***/ }),

/***/ "./src/app/productblock/productblock.component.ts":
/*!********************************************************!*\
  !*** ./src/app/productblock/productblock.component.ts ***!
  \********************************************************/
/*! exports provided: ProductblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductblockComponent", function() { return ProductblockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductblockComponent = /** @class */ (function () {
    function ProductblockComponent() {
        this.flipindicator = false;
        this.frontindicator = true;
        this.flipindicator1 = false;
        this.frontindicator1 = true;
        this.flipindicator2 = false;
        this.frontindicator2 = true;
        this.count = 0;
    }
    ProductblockComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.onclick(); }, 1000 * 4);
    };
    ProductblockComponent.prototype.onclick = function () {
        if (this.flipindicator == false) {
            this.flipindicator = true;
        }
        else {
            this.flipindicator = false;
        }
    };
    ProductblockComponent.prototype.onclick1 = function () {
        if (this.flipindicator1 == false) {
            this.flipindicator1 = true;
        }
        else {
            this.flipindicator1 = false;
        }
    };
    ProductblockComponent.prototype.onclick2 = function () {
        if (this.flipindicator2 == false) {
            this.flipindicator2 = true;
        }
        else {
            this.flipindicator2 = false;
        }
    };
    ProductblockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productblock',
            template: __webpack_require__(/*! ./productblock.component.html */ "./src/app/productblock/productblock.component.html"),
            styles: [__webpack_require__(/*! ./productblock.component.css */ "./src/app/productblock/productblock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductblockComponent);
    return ProductblockComponent;
}());



/***/ }),

/***/ "./src/app/productenqblock/productenqblock.component.css":
/*!***************************************************************!*\
  !*** ./src/app/productenqblock/productenqblock.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-header{\r\n    margin-bottom :20px;\r\n}\r\n\r\n.flex-row{\r\n    margin-bottom: 20px;\r\n    background-color: #aa66cc;\r\n}\r\n\r\n.purple{\r\n    background-color: #aa66cc;\r\n}\r\n\r\n.tab{\r\n    color: white;\r\n    \r\n    cursor: pointer;\r\n    \r\n    \r\n}\r\n\r\nspan img{\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.tab1{\r\n    background-color: white;\r\n    color: violet;\r\n    border-bottom: 1px solid  #aa66cc;\r\n    box-shadow: 0px 2px 2px 0px rgb(212, 165, 212);\r\n    cursor: pointer;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/productenqblock/productenqblock.component.html":
/*!****************************************************************!*\
  !*** ./src/app/productenqblock/productenqblock.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n        <!-- Card body -->\n    <div class=\"card-body\">\n          \n            <!-- Default form subscription -->\n            \n                <p class=\"h4 text-center py-4\">Product Enquiry</p>\n                <div class=\"container jumbotron\">\n                <!--<div class=\"row form-header\">\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    Form1\n                                </div>\n                                <div class=\"col-md-6 col-sm-6 col-xs-6\">\n                                    Form2\n                                </div>\n                </div>-->\n                <div class=\"d-flex flex-row\">\n                        <div class=\"p-2 tab\" (click)=\"formindiupdate()\"  [class.tab1]=\"tab1value\"><strong>Form 1</strong></div>\n                        <div class=\"p-2\"></div>\n                        <div class=\"p-2 tab\" (click)=\"formindiupdate1()\"  [class.tab1]=\"tab1value1\"><strong>Form 2</strong></div>\n                </div>\n                <ng-template [ngIf]=\"formindicator\" >\n                      <!-- Default input name -->\n                      <form #myform ngNativeValidate (submit)=\"upload()\">\n                            <!-- Default input name -->\n                        \n                            <label class=\"grey-text font-weight-bold\">Your Name:</label>\n                            <input type=\"text\" #name name=\"name\" id=\"name\" class=\"form-control\" required>\n                \n                            <br>\n                \n                            <!-- Default input email -->\n                            <label class=\"grey-text font-weight-bold\">Your Email:</label>\n                            <input type=\"email\"  id=\"email\"  name=\"email\" class=\"form-control\" required>\n                            <br>\n                            <!-- Default mobile no email -->\n                            <label class=\"grey-text font-weight-bold\">Mobile No:</label>\n                            <input type=\"text\" name=\"phoneno\" id=\"phoneno\" class=\"form-control\" required>\n                            <br>\n            \n                            <label class=\"grey-text font-weight-bold\">Download Enquiry Form:</label>\n                            <br>\n                            <a href=\"../../assets/project enquiry.xlsx\"><input type=\"button\" class=\"btn btn-sm purple\" value=\"Download\"></a>\n                            <i class=\"fa fa-file-excel-o fa-2x\" aria-hidden=\"true\"></i>\n                                                                \n                            <br>\n                            <br>\n                            <label class=\"grey-text font-weight-bold\">Upload Enquiry Form:</label>\n                            <br>\n                            \n                            <input type=\"file\" name=\"file\" id=\"file\" #fileinput required style=\"margin-left:6px\">\n                            \n                            \n                            <div class=\"text-center py-4 mt-3\">\n                                <button class=\"btn btn-outline-purple\" type=\"submit\" [disabled]=\"isdisabled\" >Send<i class=\"fa fa-paper-plane-o ml-2\"></i></button><span *ngIf=\"isspinner\"><img src=\"../../assets//img/spinner.gif\"></span>\n                            </div>\n                            </form>  \n                \n            </ng-template>\n            <!-- Default form subscription -->\n            <ng-template [ngIf]=\"formindicator1\">\n                  \n                    <form ngNativeValidate #myform2 (submit)=\"form2submit()\" >\n                            <label  class=\"grey-text font-weight-bold\">Customer Name:</label>\n                            <input type=\"text\" id=\"customername\" class=\"form-control\" name=\"CustomerName\" required>\n                \n                            <br>\n                            <label class=\"grey-text font-weight-bold\">Project Name:</label>\n                            <input type=\"text\" id=\"ProjectName\" class=\"form-control\" required>\n                \n                            <br>\n                            <label class=\"grey-text font-weight-bold\">End Application:</label>\n                            <input type=\"text\" id=\"endapplication\" class=\"form-control\" required>\n                \n                            <br>\n                            <label class=\"grey-text font-weight-bold\">Date of Start Production:</label>\n                            <input type=\"Date\" id=\"startdate\"  class=\"form-control\" required>\n                \n                            <br>\n                            <label class=\"grey-text font-weight-bold\">Pilot Start Date:</label>\n                            <input type=\"Date\" id=\"pilotstart\" class=\"form-control\" required>\n                \n                            <br>\n                            <label class=\"grey-text font-weight-bold\">Quote Products:</label>\n                            <div class=\"form-row align-items-center\">\n                                <!-- Grid column -->\n                                <div class=\"col-auto\">\n                                    <!-- Default input -->\n                                    <label class=\"sr-only\" >Part Number/descripition</label>\n                                    <input type=\"text\" class=\"form-control mb-2\" name=\"PartNumber\" id=\"partno\" placeholder=\"Part Number/descripition\" required>\n                                </div>\n                                <!-- Grid column -->\n                                <div class=\"col-auto\">\n                                    <!-- Default input -->\n                                    \n                                            <label class=\"sr-only\" >Manufacture</label>\n                                            <select class=\"form-control mb-2\" name=\"Manfacture\" id=\"manfacture\">\n                                                    <option [value]=null disabled class=\"text-grey font-weight-light\">Manfacture</option>\n                                                    <option *ngFor=\"let M of Manufactures\" value={{M.name}}>{{M.name}}</option>\n                                                    \n                                            \n                                            </select>\n                                    \n                                </div>\n                                <!-- Grid column -->\n                                <div class=\"col-auto\">\n                                    <!-- Default input -->\n                                    <label class=\"sr-only\" >Annual Quantity</label>\n                                    <input type=\"text\" class=\"form-control mb-2\"  id=\"annualquantity\" placeholder=\"Annual Quantity\" required>\n                                </div>\n                                <div class=\"col-auto\">\n                                    <!-- Default input -->\n                                    <label class=\"sr-only\" >Sample Quanity</label>\n                                    <input type=\"text\" class=\"form-control mb-2\" id=\"samplequantity\" placeholder=\"Sample Quanity\" required>\n                                </div>\n                              \n                                    \n                                \n                            </div>\n                            <button class=\"btn purple btn-md \" type=\"button\" (click)=\"addProduct()\">Add</button>      \n                            <!-- Grid row -->\n                            \n                           <ng-template [ngIf]=\"producttable\">\n                               \n                               <table class=\"table\">\n                                   <tr>\n                                       <th>Select</th>\n                                       <th>Index</th>\n                                       <th>PartNumber</th>\n                                       <th>Manufacture</th>\n                                       <th>Annual Quanity</th>\n                                       <th>Sample Quanity</th>\n                                   </tr>\n                                   <tr *ngFor=\"let data of ProductList; let i = index\">\n                                       <td><input type=\"checkbox\"\n                                        name=\"{{data.PartNumber}}\" \n                                        value=\"{{i+1}}\"\n                                        (change)=\"change($event, i)\" >\n                                        \n                                     </td>\n                                       <td>{{i+1}}</td>\n                                       <td>{{data.PartNumber}}</td>\n                                       <td>{{data.Manfacture}}</td>\n                                       <td>{{data.AnnualQuantity}}</td>\n                                       <td>{{data.SampleQuantity}}</td>\n                                   </tr>\n                               </table>\n                               <button class=\"btn btn-danger btn-md\" type=\"button\" (click)=\"Deleteprod()\">Delete</button>\n                           </ng-template>\n                           \n                            <div class=\"text-center py-4 mt-3\">\n                                <button class=\"btn btn-outline-purple\" type=\"submit\" [disabled]=\"isdisabled\" >Send<i class=\"fa fa-paper-plane-o ml-2\"></i></button><span *ngIf=\"isspinner\"><img src=\"../../assets//img/spinner.gif\"></span>\n                            </div>\n                         \n                        </form>\n                            \n                    \n            </ng-template>\n            \n              </div>\n            \n            \n    \n        \n        <!-- Card body -->\n    \n    \n"

/***/ }),

/***/ "./src/app/productenqblock/productenqblock.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/productenqblock/productenqblock.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductenqblockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductenqblockComponent", function() { return ProductenqblockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var services_quotesubmission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/quotesubmission.service */ "./services/quotesubmission.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductenqblockComponent = /** @class */ (function () {
    function ProductenqblockComponent(http, el, quotesendservice, toastr) {
        this.http = http;
        this.el = el;
        this.quotesendservice = quotesendservice;
        this.toastr = toastr;
        this.tab1value = true;
        this.tab1value1 = false;
        this.formindicator = true;
        this.formindicator1 = false;
        this.Products = {};
        this.selectedValue = [];
        //PartNumber: String;
        //Manfacture: String = null;
        //AnnualQuantity: String;
        //SampleQuantity: String;
        this.producttable = false;
        this.isdisabled = false;
        this.isspinner = false;
        this.Manufactures = [
            { id: 1, name: "United States" },
            { id: 2, name: "Australia" },
            { id: 3, name: "Canada" },
            { id: 4, name: "Brazil" },
            { id: 5, name: "England" },
        ];
        this.tableheader = ['PartNumber', 'Manufacture', 'AnnualQuantity', 'SampleQuantity'];
        this.ProductList = [];
    }
    ProductenqblockComponent.prototype.ngOnInit = function () {
    };
    ProductenqblockComponent.prototype.formindiupdate = function () {
        this.formindicator = true;
        this.formindicator1 = false;
        this.tab1value1 = false;
        this.tab1value = true;
    };
    ProductenqblockComponent.prototype.formindiupdate1 = function () {
        this.formindicator = false;
        this.formindicator1 = true;
        this.tab1value1 = true;
        this.tab1value = false;
    };
    ProductenqblockComponent.prototype.form2submit = function () {
        var _this = this;
        console.log("inside a form submission");
        this.isdisabled = true;
        this.isspinner = true;
        var CustomerName = this.el.nativeElement.querySelector('#customername');
        var ProjectName = this.el.nativeElement.querySelector('#ProjectName');
        var endapplication = this.el.nativeElement.querySelector('#endapplication');
        var startdate = this.el.nativeElement.querySelector('#startdate');
        var Pilotstartdate = this.el.nativeElement.querySelector('#pilotstart');
        //let CustomerName: HTMLInputElement = this.el.nativeElement.querySelector('#file');
        console.log(CustomerName);
        var form2obj = {
            "CustomerName": CustomerName.value,
            "ProjectName": ProjectName.value,
            "endapplication": endapplication.value,
            "startdate": startdate.value,
            "Pilotstartdate": Pilotstartdate.value,
            "ProductDetails": this.ProductList
        };
        this.quotesendservice.sendquotes2(form2obj).subscribe(function (data) {
            _this.isdisabled = false;
            _this.isspinner = false;
            if (data['error_code'] == 0) {
                _this.toastr.success('we will reach you soon', 'Your Quotes has been sent successfully', {
                    tapToDismiss: true,
                    closeButton: true
                });
            }
            else {
                _this.toastr.error('error Occured');
            }
            _this.myInputVariable1.nativeElement.reset();
            _this.producttable = false;
            _this.ProductList = [];
        });
    };
    ProductenqblockComponent.prototype.change = function (e, type) {
        //console.log(e);
        console.log(e.target.checked, "dfksl");
        console.log(type);
        if (e.target.checked) {
            this.selectedValue.push(type);
        }
        else {
            var updateItem = this.selectedValue.find(this.findIndexToUpdate, type);
            var index = this.selectedValue.indexOf(updateItem);
            this.selectedValue.splice(index, 1);
        }
        console.log(this.selectedValue);
    };
    ProductenqblockComponent.prototype.findIndexToUpdate = function (type) {
        console.log('type index');
        console.log(type);
        return type === this;
    };
    ProductenqblockComponent.prototype.upload = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#file');
        var name = this.el.nativeElement.querySelector('#name');
        var email = this.el.nativeElement.querySelector('#email');
        var phoneno = this.el.nativeElement.querySelector('#phoneno');
        this.isdisabled = true;
        this.isspinner = true;
        //get the total amount of files attached to the file input.
        var fileCount = inputEl.files.length;
        //create a new fromdata instance
        var formData = new FormData();
        //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) {
            //append the key name 'photo' with the first file in the element
            formData.append('name', name.value);
            formData.append('email', email.value);
            formData.append('phoneno', phoneno.value);
            formData.append('file', inputEl.files.item(0));
            /* const uploaddata={
               'name': name.value,
               'email': email.value,
               'phoneno': phoneno.value,
             }*/
            console.log(name.value);
            //call the angular http method
            this.quotesendservice.sendquotes(formData).subscribe(function (data) {
                _this.isdisabled = false;
                _this.isspinner = false;
                console.log(data['error_code']);
                if (data['error_code'] == 0) {
                    _this.toastr.success('we will reach you soon', 'Your Quotes has been sent successfully', {
                        positionClass: 'toast-top-right',
                        tapToDismiss: true,
                        closeButton: true
                    });
                }
                else {
                    _this.toastr.error('error Occured');
                }
                _this.myInputVariable.nativeElement.reset();
            });
        }
    };
    ProductenqblockComponent.prototype.addProduct = function () {
        var PartNumber = this.el.nativeElement.querySelector('#partno');
        var Manfacture = this.el.nativeElement.querySelector('#manfacture');
        var AnnualQuantity = this.el.nativeElement.querySelector('#annualquantity');
        var SampleQuantity = this.el.nativeElement.querySelector('#samplequantity');
        var newprod = {
            "PartNumber": PartNumber.value,
            "Manfacture": Manfacture.value,
            "AnnualQuantity": AnnualQuantity.value,
            "SampleQuantity": SampleQuantity.value
        };
        this.ProductList.push(newprod);
        console.log(this.ProductList);
        if (this.ProductList.length > 0) {
            this.producttable = true;
        }
    };
    ProductenqblockComponent.prototype.Deleteprod = function () {
        var i = 0;
        var k = 0;
        var j = 0;
        var temp = 0;
        if (this.selectedValue.length == this.ProductList.length) {
            this.producttable = false;
        }
        console.log('inside the delete');
        //console.log(this.ProductList);
        console.log('selected value');
        console.log(this.selectedValue);
        //const  localselectedvalue = this.selectedValue;
        //console.log(localselectedvalue);
        /*this.ProductList.forEach(function(value){
          this.localselectedvalue.forEach(function(value1){
             if(value1 == i){
               console.log('delete');
               console.log(i);
             }
          })
          i= i+1;
        });*/
        //var sortedindex=this.selectedValue.sort();
        var sortedindex = mysort(this.selectedValue);
        for (i = sortedindex.length - 1; i > -1; i--) {
            console.log(this.selectedValue[i]);
            this.ProductList.splice(sortedindex[i], 1);
        }
        this.selectedValue = [];
        function mysort(localarray) {
            for (k = 0; k < localarray.length / 2; k++) {
                for (i = 0; i < localarray.length; i++) {
                    for (j = i + 1; j < localarray.length; j++) {
                        if (localarray[i] > localarray[j]) {
                            temp = localarray[j];
                            localarray[j] = localarray[i];
                            localarray[i] = temp;
                        }
                    }
                }
            }
            return localarray;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myform'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductenqblockComponent.prototype, "myInputVariable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myform2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductenqblockComponent.prototype, "myInputVariable1", void 0);
    ProductenqblockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productenqblock',
            template: __webpack_require__(/*! ./productenqblock.component.html */ "./src/app/productenqblock/productenqblock.component.html"),
            styles: [__webpack_require__(/*! ./productenqblock.component.css */ "./src/app/productenqblock/productenqblock.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], services_quotesubmission_service__WEBPACK_IMPORTED_MODULE_2__["QuotesubmissionService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ProductenqblockComponent);
    return ProductenqblockComponent;
}());



/***/ }),

/***/ "./src/app/products-details/products-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/products-details/products-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n <div [class.search-section]=\"normalpostion\" [class.search-section-min]=\"toppostion\">\n  <!-- Search form -->\n <!-- Search form -->\n<form class=\"form-inline md-form form-sm active-purple-2 \" [class.formblock]=\"normalpostion\" [class.formblock-min]=\"toppostion\">\n  <input class=\"form-control w-100\" [(ngModel)]=\"searchText\" (keyup)=\"transitionfun()\" name=\"searchText\" (keyup)=\"searchproduct()\" type=\"text\"  placeholder=\"  Search Product\" aria-label=\"Search\" >\n <!-- <i class=\"fa fa-search\" aria-hidden=\"true\"></i>-->\n</form>\n\n\n\n</div>\n \n<div class=\"container text-center grey-text font-weight-bold\"  style=\"top:15%;position: relative; min-height: 70vh;\" *ngIf=\"notfound && searchFlag\">No Matching Product</div>\n<div class=\"container text-center grey-text font-weight-normal display-result\" style=\"top:15%;position: relative; min-height: 70vh\" *ngIf=\"found && searchFlag\">\n    \n        <!-- Card -->\n         <div class=\"row\">\n            <div class=\"col-md-2 col-sm-3 col-xs-3 row-sep\" *ngFor=\"let c of resultproducts\">\n            {{c}}\n            </div>\n          </div>\n\n</div>\n\n<!--  <div class=\"text-center\" id=\"downmarker\">\n    <i class=\"fa fa-chevron-down fa-3x icon-ani\" style=\"color:purple\" aria-hidden=\"true\"></i>\n  </div>-->\n\n  <div class=\"container-fluid\" *ngIf=\"productFlag\">\n    <p class=\"h4 text-center py-4 p1\">Our Products</p>\n    <div class=\"container\">\n      <!-- Card -->\n       <div class=\"row\">\n          <div class=\"col-md-3 col-sm-3 col-xs-3 row-sep\" *ngFor=\"let card of productCard;let i = index\">\n              <!--Card-->\n              <div class=\"card view zoom\">\n                <!--Card image-->\n                <div class=\"hm-white-slight waves-light wow slideInUp\" mdbWavesEffect align=\"center\">\n                  <img src=\"{{ card.imageUrl }}\" class=\"img-fluid img-small\" alt=\"Line Card\">\n                  <a>\n                    <div class=\"mask\"></div>\n                  </a>\n                </div>\n                <!--Card content-->\n               <div class=\"card-body text-center\">\n                  <!--Title-->\n                  <h6 class=\"card-title grey-text font-weight-bold\" align=\"center\">{{ card.caption }}</h6>\n                  <button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" [attr.data-target]=\"card.id\">More</button>\n                  \n                </div>\n                <!--/.Card-->\n              </div>\n              <div id={{i+1}} class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog modal-lg \" >\n\n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h5 class=\"modal-title grey-text font-weight-bold\">{{ card.caption }}</h5>\n                  </div>\n                  <div class=\"modal-body\">\n                      <div class=\"container\">\n                        <!-- Card -->\n                         <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 col-xs-4 row-sep\" *ngFor=\"let products of card.Product\">\n                                <h6 class=\"grey-text font-weight-bold\">{{products.title}}</h6>\n                                <ul>\n                                  <li class=\"grey-text font-weight-normal\" *ngFor=\"let prodlist of products.list\">{{prodlist}}</li>\n                                </ul>\n                                  <!--/.Card-->\n                            </div>\n                          </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" data-dismiss=\"modal\">Close</button>\n\n                  </div>\n                </div>\n\n              </div>\n            </div>\n         <!--<div class=\"col-md-3\">\n\n            <!--<div class=\"card view zoom\">\n              <!--Card image-\n              <div class=\"hm-white-slight waves-light wow slideInUp\" mdbWavesEffect align=\"center\">\n                <img src=\"../../assets/img/alexandre-debieve-561298-unsplash.jpg\" class=\"img-fluid img-small\" alt=\"Line Card\">\n                <a>\n                  <div class=\"mask\"></div>\n                </a>\n              </div>\n              <!--Card content-\n             <div class=\"card-body\">\n               \n                <h5 class=\"card-title grey-text font-weight-bold\" align=\"center\">Wire and Cables</h5>\n              </div>\n              <!--/.Card-\n            \n         </div>\n         <div class=\"col-md-3\">\n\n         </div>\n         <div class=\"col-md-3\">\n\n         </div>-->\n\n       </div>\n    </div>\n  </div>\n  \n\n<!-- Modal -->\n\n\n"

/***/ }),

/***/ "./src/app/products-details/products-details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/products-details/products-details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-sep {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.icon-ani {\n  position: relative;\n  -webkit-animation: mymove 5s infinite;\n  /* Safari 4.0 - 8.0 */\n  animation: mymove 2s infinite; }\n\n/* Safari 4.0 - 8.0 */\n\n@-webkit-keyframes mymove {\n  from {\n    top: 0px; }\n  to {\n    top: 20px; } }\n\n@keyframes mymove {\n  from {\n    top: 0px; }\n  to {\n    top: 20px; } }\n\n.search-section {\n  height: 20vh;\n  width: 100%;\n  position: relative; }\n\n.search-section-min {\n  height: 20vh;\n  width: 100%;\n  position: relative; }\n\n.formblock {\n  top: 40%;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 35%; }\n\n.formblock-min {\n  top: 40%;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 35%; }\n\n.row-sep {\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\nbody {\n  background: #f2f2f2;\n  font-family: 'Open Sans', sans-serif; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\nul > li {\n  padding: 0;\n  margin: 0;\n  top: 0; }\n\n.active-purple-2 input[type=text]:focus:not([readonly]) {\n  border-bottom: 1px solid purple;\n  box-shadow: 0 1px 0 0 #ce93d8; }\n\n.active-purple-2 .fa {\n  color: purple; }\n"

/***/ }),

/***/ "./src/app/products-details/products-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/products-details/products-details.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsDetailsComponent", function() { return ProductsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-card.service */ "./src/app/product-card.service.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter.pipe */ "./src/app/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { FormsModule } from '@angular/forms';
//import {BrowserModule} from '@angular/platform-browser';
var ProductsDetailsComponent = /** @class */ (function () {
    function ProductsDetailsComponent(productCardService, filter) {
        this.productCardService = productCardService;
        this.filter = filter;
        this.productCard = [];
        this.allproducts = [];
        this.resultproducts = [];
        this.searchFlag = false;
        this.productFlag = true;
        this.notfound = false;
        this.normalpostion = true;
        this.toppostion = false;
        this.found = false;
    }
    ProductsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCardService.getProductCardDetails()
            .subscribe(function (data) { return _this.productCard = data; });
        setTimeout(function () {
            _this.productCard.forEach(function (value) {
                value.Product.forEach(function (lists) {
                    lists.list.forEach(function (lis) {
                        _this.allproducts.push(lis.toLowerCase());
                    });
                });
            });
        }, 2000);
    };
    // filter out all products that matches the keyword
    ProductsDetailsComponent.prototype.searchproduct = function () {
        this.notfound = false;
        if (this.searchText.length >= 1) {
            this.productFlag = false;
            this.searchFlag = true;
        }
        else {
            this.productFlag = true;
            this.searchFlag = false;
        }
        //this.found=false;
        this.resultproducts = this.filter.transform(this.allproducts, this.searchText);
        console.log(this.resultproducts);
        console.log(this.searchText.length > 4);
        console.log(this.resultproducts.length == 0);
        this.found = true;
        if (this.searchText.length >= 1 && this.resultproducts.length == 0) {
            console.log('inside the notfound');
            this.notfound = true;
            this.found = false;
        }
    };
    ProductsDetailsComponent.prototype.transitionfun = function () {
        this.normalpostion = false;
        this.toppostion = true;
    };
    ProductsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-details',
            template: __webpack_require__(/*! ./products-details.component.html */ "./src/app/products-details/products-details.component.html"),
            styles: [__webpack_require__(/*! ./products-details.component.scss */ "./src/app/products-details/products-details.component.scss")],
            providers: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]]
        }),
        __metadata("design:paramtypes", [_product_card_service__WEBPACK_IMPORTED_MODULE_1__["ProductCardService"], _filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]])
    ], ProductsDetailsComponent);
    return ProductsDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sathish\server\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map