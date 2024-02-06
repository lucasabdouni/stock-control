import { TestBed } from '@angular/core/testing';

import { ProductDataTransferService } from './product-data-transfer.service';

describe('ProductDataTransferService', () => {
  let service: ProductDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
