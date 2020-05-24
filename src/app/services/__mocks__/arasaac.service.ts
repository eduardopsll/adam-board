import { Injectable } from '@angular/core'

@Injectable()
export class ArasaacService {
    public getPictograms = jest.fn();
    public getCategories = jest.fn().mockImplementation(() => Promise.resolve([]));
}