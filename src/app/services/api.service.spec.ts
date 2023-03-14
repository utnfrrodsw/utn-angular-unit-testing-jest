import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { ApiService, User, userResponse } from "./api.service";

describe('ApiService Testbed', () => {
    let service: ApiService;
    let controller: HttpTestingController;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                ApiService,
            ]
        });

        service = TestBed.inject(ApiService);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should create service', () => {
        expect(service).toBeTruthy();
    });

    it('should get user', () => {
        const result: userResponse = {
            results: [{
                name: {
                    title: 'Mr',
                    first: 'Nooa',
                    last: 'Moilanen'
                },
                picture: {
                    large: 'http://some-image.png'
                }
            }]
        }
        let user: User;
        service.getRandomUser().subscribe(response => {
            user = response.results[0]
            expect(user.name.first).toEqual('Nooa');
            expect(user.name.last).toEqual('Moilanen');
        });

        const request = controller.expectOne('https://randomuser.me/api/');
        request.flush(result);
    });
});