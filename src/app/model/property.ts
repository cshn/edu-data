export class Property {
    _id: string;
    school: string;
    pname: string;
    ptype: string;
    ptenure: string;
    numberofunit: number;
    top: string;
    psf: number;
    comment: string;
  }

export class UraProperty {
  _id: string;
  school: string;
  project: string;
  road: string;
  blk: string;
  postal: string;
  distance: number;
}

export class UraDetailProperty {
  blk: string;
  postal: string;
  distance: number;
}

export class UraMasterProperty {
  project: string;
  road: string;
  details: UraDetailProperty[];
}