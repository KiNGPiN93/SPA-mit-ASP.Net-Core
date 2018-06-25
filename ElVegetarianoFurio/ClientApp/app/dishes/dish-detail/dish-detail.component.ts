import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { VegiService } from '../../vegi.service';
import { Dish } from "../dish";
import { Category } from "../../categories/category";
import { DeleteDialogComponent } from '../../delete-dialog.component';

@Component({
    selector: 'app-dish-detail',
    templateUrl: './dish-detail.component.html',
    styleUrls: ['./dish-detail.component.css'],
    providers: [VegiService]
})
export class DishDetailComponent implements OnInit {
    private dish: Dish;
    private categories: Category[];
    constructor(
        private route: ActivatedRoute,
        private vegiService: VegiService,
        private router: Router,
        private dialog: MdDialog) { }

    ngOnInit() {
        this.vegiService.getCategories().then(categories => this.categories = categories);
        this.route.paramMap
            .switchMap((params: ParamMap) => this.vegiService.getDish(+params.get('id')))
            .subscribe(dish => this.dish = dish);


    }

    save(): void {
        this.vegiService.saveDish(this.dish).then(() => this.router.navigate(['/']));
    }

    delete(): void {
        let dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.vegiService.deleteDish(this.dish.id).then(() => this.router.navigate(['/']));
            }
        });

    }

}
