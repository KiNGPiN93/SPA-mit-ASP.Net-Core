import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VegiService } from '../../vegi.service';
import { Dish } from "../dish";
import { Category } from "../../categories/category";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
  providers: [VegiService]
})
export class AddDishComponent implements OnInit {
    private dish = new Dish();
    private categories: Category[];
    constructor(
        private vegiService: VegiService,
        private router: Router
    ) { }

    ngOnInit() {
        this.vegiService.getCategories().then(categories => this.categories = categories);
  }

  save(): void {
      this.vegiService.saveDish(this.dish).then(() => this.router.navigate(['/']));
  }

}
