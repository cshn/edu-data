  export class School {
    school: string;
    year: number;
    phase: number;
    availability: number;
    registration: number;
    size: number;
    subrate: number;
    left: number;
  }

  export class SchoolGrc {
    school: string;
    grc: string;
  }

  export class SchoolBallot {
    _id: string;
    year: number;
    phase: number;
    school: string;
    ballot: string;
    ballotdesc: string;
  }

  export class SchoolRank {
    school: string;
    rank: number;
    gep: boolean;
    sap: boolean;
  }