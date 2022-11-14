import { fakeAsync, flush, tick } from "@angular/core/testing";
import { delay, of } from "rxjs";

describe('Async Test', () => {
    it('async test - regular', () => {
        let flag = false;

        expect(flag).toBeFalsy();
        flag = true;
        expect(flag).toBeTruthy();
    });

    it('async test - set timeout', (done: jest.DoneCallback) => {
        let flag = false;
        setTimeout(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        }, 0);


    });

    it('async test - obervables', (done: jest.DoneCallback) => {
        let flag = false;
        expect(flag).toBeFalsy();

        of(1).pipe(
            delay(1000)
        ).subscribe(() => {
            flag = true;
            expect(flag).toBeTruthy();
            done();
        });


    });


    it('async test - fakeasync - tick', fakeAsync(() => {
        let flag = false;
        expect(flag).toBeFalsy();

        setTimeout(() => {
            flag = true;
        }, 1000);

        tick(500);

        expect(flag).toBeFalsy();

        tick(501);

        expect(flag).toBeTruthy();

    }));


    it('async test - fakeasync - flush', fakeAsync(() => {
        let flag = false;
        expect(flag).toBeFalsy();

        setTimeout(() => {
            flag = true;
        }, 1000);

        flush();

        expect(flag).toBeTruthy();

    }));


})