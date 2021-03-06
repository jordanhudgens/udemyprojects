"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Docs Dashboard";
        this.documents = [
            {
                title: "Hello docs",
                description: "this is a hello world doc",
                file_url: "https://www.google.com",
                updated_at: "today",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
            },
            {
                title: "Second document",
                description: "this is a second hello world doc",
                file_url: "https://www.google.com",
                updated_at: "today",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
            },
            {
                title: "Third document",
                description: "this is a third hello world doc",
                file_url: "https://www.google.com",
                updated_at: "today",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
            }
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map