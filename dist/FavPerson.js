"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.FavsPersons = void 0;
var typeorm_1 = require("typeorm");
var PostPersons_1 = require("./PostPersons");
var User_1 = require("./User");
var FavsPersons = /** @class */ (function (_super) {
    __extends(FavsPersons, _super);
    function FavsPersons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], FavsPersons.prototype, "id");
    __decorate([
        typeorm_1.ManyToOne(function () { return PostPersons_1.PostPersons; }, function (postpersons) { return postpersons.favspersons; }),
        __metadata("design:type", PostPersons_1.PostPersons)
    ], FavsPersons.prototype, "postpersons");
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }, function (user) { return user.favspersons; }),
        __metadata("design:type", User_1.User)
    ], FavsPersons.prototype, "user");
    FavsPersons = __decorate([
        typeorm_1.Entity()
    ], FavsPersons);
    return FavsPersons;
}(typeorm_1.BaseEntity));
exports.FavsPersons = FavsPersons;
