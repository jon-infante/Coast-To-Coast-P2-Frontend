import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CategoryapiService } from './categoryapi.service';
import { Category } from '../models/category'

describe('CategoryapiService', () => {
  let service: CategoryapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryapiService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    it('should get all categories', async () => {
    let fakeData: Category[] = [ 
      {
        ID: 1,
        CategoryName: 'animal',
        WallPosts: []
      },
      {
        ID: 2,
        CategoryName: 'transportation',
        WallPosts: []
      }
    ]
      
    
    spyOn(service, 'getAllCategories').and.returnValue(Promise.resolve(fakeData))

    service.getAllCategories().then((res) => {
      //Verify that the response is what we want
      expect(service.getAllCategories).toHaveBeenCalled();
      expect(service.getAllCategories).toHaveBeenCalledTimes(1);
      expect(res).toBeTruthy();
      expect(res.length).toEqual(2);
    });
  });
  
});