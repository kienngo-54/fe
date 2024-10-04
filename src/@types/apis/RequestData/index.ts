export interface RDCommon {
  body?: {
    [key: string]: any;
  };
  query?:
    | {
        [key: string]: any;
      }
    | FormData;
  param?: {
    [key: string]: any;
  };
}

export interface RDGetUserInfo extends RDCommon {}

export interface RDLogin extends RDCommon {
  body: {
    email: string;
    password: string;
  };
}

export interface RDRegister extends RDCommon {
  body: {
    username: string;
    email: string;
    password: string;
  };
}

export type TCreateTeam = {
  name: string;
  sport: string;
  description?: string;
  members: string[];
};

export interface RDCreateMyTeam extends RDCommon {
  body: TCreateTeam;
}

export interface RDFindField extends RDCommon {
  query?: {
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    sport: string;
    page?: number;
    record?: number;
  };
}
