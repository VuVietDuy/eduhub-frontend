export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  avatar: string | null;
}

export interface IAccountInfo {
  data: any;
  accessToken?: string;
  refreshToken?: string;
  userInformationDto?: {
    fullName: string;
    phoneNumber: string | null;
    roleName: string;
    dateOfBirth: string;
    defaultAddress: string | null;
    avatar: string | null;
    isNewUser: boolean;
  };
}
