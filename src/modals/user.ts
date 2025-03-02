export type UserProfileToken = {
  userName: string;
  email: string;
  token: string;
};

export type UserProfile = {
  userId:number;
  userName: string;
  email: string;
  gender: number;
  firstName: string;
  lastName: string;
  role: number;
  retry: number;
  tenantId: number;
  isSystemUser: boolean;
  userType: number;
  mobileNo: number;
  alternativeNo: number;
  createdOn: Date;
  modifiedOn: Date;
  lastLogin: Date;
  profileImage: string;
  active: boolean;
};
