webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <h1>\r\n    Movie Listings @ GV Cinema \r\n  </h1>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search movies...\" [(ngModel)]=\"searchText\"/>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.searchText = "";
    }
    AppComponent.prototype.onMovieSelect = function (event) {
        this.selectedMovie = event;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grid_view_grid_view_component__ = __webpack_require__("../../../../../src/app/grid-view/grid-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__movie_detail_movie_detail_component__ = __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: "movies/:id", component: __WEBPACK_IMPORTED_MODULE_7__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */] },
    { path: "search/:searchValue", component: __WEBPACK_IMPORTED_MODULE_6__grid_view_grid_view_component__["a" /* GridViewComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__grid_view_grid_view_component__["a" /* GridViewComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__grid_view_grid_view_component__["a" /* GridViewComponent */],
                __WEBPACK_IMPORTED_MODULE_7__movie_detail_movie_detail_component__["a" /* MovieDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__movie_service__["b" /* MovieService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/grid-view/grid-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-view .movie {\r\n\theight: 500px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.grid-view .movie img {\r\n\theight: 70%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid-view/grid-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Popular Movies this month</h2>\r\n<div class=\"row grid-view\">\r\n  <div *ngFor=\"let movie of getMovies()\" (click)=\"selectMovie(movie)\" class=\"col-md-3\">\r\n    <div class=\"movie\">\r\n      <img [src]=\"movie.imgPath\" />\r\n      <h3>{{movie.name}}</h3>\r\n      <p>{{movie.duration}}</p>\r\n      <p>User Rating: {{movie.userRating}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/grid-view/grid-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridViewComponent = (function () {
    function GridViewComponent(movieService, router, route) {
        var _this = this;
        this.movieService = movieService;
        this.router = router;
        this.route = route;
        this.search = "";
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.movies = [];
        var obs = movieService.getMovies();
        obs.subscribe(function (result) {
            _this.movies = result;
        }, function (err) {
            alert(JSON.stringify(err));
        });
        this.route.params.subscribe(function (result) {
            if (result["searchValue"]) {
                _this.search = result["searchValue"];
            }
        });
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    GridViewComponent.prototype.getMovies = function () {
        var _this = this;
        return this.movies.filter(function (item) {
            return item.name.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
    };
    GridViewComponent.prototype.selectMovie = function (movie) {
        this.selected.emit(movie);
        this.router.navigate(["/movies", movie.id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GridViewComponent.prototype, "search", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GridViewComponent.prototype, "selected", void 0);
    GridViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-grid-view',
            template: __webpack_require__("../../../../../src/app/grid-view/grid-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/grid-view/grid-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__movie_service__["b" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], GridViewComponent);
    return GridViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<h2>{{movie.name}}</h2>\r\n\t\t\t<p>({{movie.mpaaRating.type}}: {{movie.mpaaRating.label}})</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<hr>\r\n  \t<div class=\"row\">\r\n\t\t<div class=\"col-md-4\">\r\n\t\t\t<img [src]=\"movie.imgPath\" />\r\n\t\t</div>\r\n\t\t<div class=\"col-md-8\">\r\n\t\t\t<h3>Details</h3>\r\n      \t\t<p>Genre: {{movie.genre}}</p>\r\n      \t\t<p>Language: {{movie.language}}</p>\r\n\t\t\t    <p>Duration: {{movie.duration}} minutes</p>\r\n      \t\t<p>User Rating: {{movie.userRating}}</p>\r\n\t\t\t<hr>\r\n\t\t\t<h3>Synopsis</h3>\r\n\t\t\t<p>{{movie.description}}</p>\r\n  \t\t<hr>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/movie-detail/movie-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieDetailComponent = (function () {
    function MovieDetailComponent(movieService, route) {
        var _this = this;
        this.movieService = movieService;
        this.route = route;
        this.route.params.subscribe(function (result) {
            _this.movieService.getMovieDetail(result["id"]).subscribe(function (movie) {
                _this.movie = movie;
            }, function (err) { return alert(JSON.stringify(err)); });
        });
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__movie_service__["a" /* Movie */])
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-detail',
            template: __webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/movie-detail/movie-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__movie_service__["b" /* MovieService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MovieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovies = function () {
        return this.http.get("http://192.168.1.147:3000/api/movies/").map(function (result) {
            var data = [];
            for (var i in result) {
                data.push(new Movie(result[i]));
            }
            return data;
        });
    };
    MovieService.prototype.getMovieDetail = function (id) {
        return this.http.get("http://192.168.1.147:3000/api/movies/" + id).map(function (result) {
            return new Movie(result);
        });
    };
    MovieService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MovieService);
    return MovieService;
}());

var Movie = (function () {
    function Movie(json) {
        this.id = undefined;
        this.name = "";
        this.description = "";
        this.imgPath = "http://via.placeholder.com/230x350";
        this.duration = 0;
        this.genre = undefined;
        this.language = "English";
        this.mpaaRating = {};
        this.userRating = undefined;
        if (json) {
            for (var key in json) {
                if (key in this && json[key]) {
                    this[key] = JSON.parse(JSON.stringify(json[key]));
                }
            }
        }
    }
    return Movie;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map