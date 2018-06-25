import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from "./categories/category";
import { Dish } from "./dishes/dish";

@Injectable()
export class VegiService {

    constructor(private http: Http) {

    }

    getCategories(): Promise<Category[]> {
        return this.http.get('api/categories')
            .toPromise()
            .then(r => r.json() as Category[]);
    }

    getDish(id: number): Promise<Dish> {
        return this.http.get(`api/dishes/${id}`)
            .toPromise()
            .then(r => r.json() as Dish);
    }

    saveDish(dish: Dish): Promise<Dish> {
        if (dish.id) {
            return this.http.put(`api/dishes/${dish.id}`, dish)
                .toPromise()
                .then(r => r.json() as Dish);
        }
        else {
            return this.http.post('api/dishes', dish)
                .toPromise()
                .then(r => r.json() as Dish);
        }
    }

    deleteDish(id: number): Promise<void> {
        return this.http.delete(`api/dishes/${id}`)
            .toPromise()
            .then(() => null);
    }
}