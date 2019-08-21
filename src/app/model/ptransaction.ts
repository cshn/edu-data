export class PTransaction {
    pname: string;
    date: Date;
    floor: string;
    areasize: number;
    price: number;
    psf: number;
  }

export class UraTransaction {
    project: string;
    street: string;
    area: string;
    transaction: any;
  }

export class UraTranDetail {
  propertyType: string;
  district: string;
  tenure: string;
  typeOfSale: string;
  noOfUnits: string;
  price: string;
  area: string;
  typeOfArea: string;
  floorRange: string;
  contractDate: string;
  cDate: Date;
}