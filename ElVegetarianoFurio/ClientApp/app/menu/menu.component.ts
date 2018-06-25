import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VegiService } from '../vegi.service';
import { Category } from "../categories/category";
import { Dish } from "../dishes/dish";

@Component({
    selector: 'vegi-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [VegiService]
})
export class MenuComponent implements OnInit {

    private categories: Category[];

    constructor(private vegiService: VegiService, private router: Router) {

    }

    ngOnInit(): void {
        this.vegiService.getCategories().then(categories => this.categories = categories);
    }

    goToDish(dish: Dish): void {
        this.router.navigate(['/dish', dish.id]);
    }

    addDish(): void {
        this.router.navigate(['/dish/add']);
    }
}