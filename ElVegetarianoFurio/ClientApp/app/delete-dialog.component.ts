import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'delete-dialog',
    templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent {
    constructor(public dialogRef: MdDialogRef<DeleteDialogComponent>) {

    }
}