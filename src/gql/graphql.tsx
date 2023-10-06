import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AboutChairperson = {
  __typename?: 'AboutChairperson';
  _id: Scalars['String']['output'];
  altEmail: Scalars['String']['output'];
  altMobile: Scalars['String']['output'];
  chairpersonDescription: Scalars['String']['output'];
  chairpersonName: Scalars['String']['output'];
  contact: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  mobile: Scalars['String']['output'];
  ourVision: Scalars['String']['output'];
  title1: Scalars['String']['output'];
  title2: Scalars['String']['output'];
};

export type ActivityReport = {
  __typename?: 'ActivityReport';
  _id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  uri: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type ArticlesPlacement = {
  __typename?: 'ArticlesPlacement';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  area: Scalars['String']['output'];
  articlesVacancyCategory?: Maybe<ArticlesVacancyCategory>;
  city?: Maybe<City>;
  contactNo: Scalars['String']['output'];
  country?: Maybe<Country>;
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  frnNo: Scalars['String']['output'];
  image: Scalars['String']['output'];
  info: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  membershipNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pincode: Scalars['String']['output'];
  position: Scalars['String']['output'];
  state?: Maybe<State>;
};

export type ArticlesVacancyCategory = {
  __typename?: 'ArticlesVacancyCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type BannerGallary = {
  __typename?: 'BannerGallary';
  _id: Scalars['String']['output'];
  buttonRedirect: Scalars['String']['output'];
  buttonText: Scalars['String']['output'];
  caption: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type BranchContactInformation = {
  __typename?: 'BranchContactInformation';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  chairPerson: Scalars['String']['output'];
  city?: Maybe<City>;
  country?: Maybe<Country>;
  fax: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nominatedMembers: Scalars['String']['output'];
  secretary: Scalars['String']['output'];
  state?: Maybe<State>;
  tel: Scalars['String']['output'];
  treasurer: Scalars['String']['output'];
  viseChairPerson: Scalars['String']['output'];
  wicasaChairPerson: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type BranchManual = {
  __typename?: 'BranchManual';
  _id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type BranchV2 = {
  __typename?: 'BranchV2';
  _id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type BranchV2Details = {
  __typename?: 'BranchV2Details';
  _id: Scalars['String']['output'];
  addressInfo: Scalars['String']['output'];
  bottom: Scalars['String']['output'];
  branchName: Scalars['String']['output'];
  branchV2?: Maybe<BranchV2>;
  isActive: Scalars['Boolean']['output'];
  left: Scalars['String']['output'];
  name: Scalars['String']['output'];
  officeBearers: Scalars['String']['output'];
  right: Scalars['String']['output'];
  top: Scalars['String']['output'];
};

export type Cms = {
  __typename?: 'CMS';
  _id: Scalars['String']['output'];
  custId: Scalars['String']['output'];
  html: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Capacity = {
  __typename?: 'Capacity';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type City = {
  __typename?: 'City';
  _id: Scalars['String']['output'];
  country?: Maybe<Country>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  state?: Maybe<State>;
};

export type CommitteSubCategory = {
  __typename?: 'CommitteSubCategory';
  Committecategory?: Maybe<CommitteeCategory>;
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CommitteeCategory = {
  __typename?: 'CommitteeCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CommitteeDetails = {
  __typename?: 'CommitteeDetails';
  Chairman: Scalars['String']['output'];
  Chairmanemail: Scalars['String']['output'];
  Chairmanimg: Scalars['String']['output'];
  Chairmanmobile: Scalars['String']['output'];
  Exoffico: Scalars['String']['output'];
  Officebearers: Scalars['String']['output'];
  Regionalcouncilmember: Scalars['String']['output'];
  ViceChairman: Scalars['String']['output'];
  ViceChairmanemail: Scalars['String']['output'];
  ViceChairmanimg: Scalars['String']['output'];
  ViceChairmanmobile: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  committeCategory?: Maybe<CommitteeCategory>;
  committeSubCategory?: Maybe<CommitteSubCategory>;
  isActive: Scalars['Boolean']['output'];
};

export type CompanySetup = {
  __typename?: 'CompanySetup';
  _id: Scalars['String']['output'];
  banner: Scalars['String']['output'];
  facebook: Scalars['String']['output'];
  instagram: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  linkedin: Scalars['String']['output'];
  linkedinpost: Scalars['String']['output'];
  telegram: Scalars['String']['output'];
  twitter: Scalars['String']['output'];
  youtube: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CoworkingZone = {
  __typename?: 'CoworkingZone';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  capacity?: Maybe<Capacity>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  image: Scalars['String']['output'];
  info: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  jobType?: Maybe<JobType>;
  location: Scalars['String']['output'];
  mobileNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
  profile: Scalars['String']['output'];
  serviceType?: Maybe<ServiceType>;
  services?: Maybe<Services>;
  state?: Maybe<State>;
  subLocation: Scalars['String']['output'];
  workType?: Maybe<WorkType>;
};

export type CpeEvent = {
  __typename?: 'CpeEvent';
  _id: Scalars['String']['output'];
  capacity: Scalars['String']['output'];
  cgst: Scalars['Float']['output'];
  cms: Scalars['String']['output'];
  cpehrs: Scalars['String']['output'];
  cutoffDate?: Maybe<Scalars['DateTime']['output']>;
  date1: Scalars['DateTime']['output'];
  date2: Scalars['DateTime']['output'];
  flyer: Scalars['String']['output'];
  igst: Scalars['Float']['output'];
  igstState?: Maybe<State>;
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isArchived: Scalars['Boolean']['output'];
  isForStudent: Scalars['Boolean']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sgst: Scalars['Float']['output'];
  tax?: Maybe<Tax>;
  time1: Scalars['String']['output'];
  time2: Scalars['String']['output'];
};

export type CpeEventRange = {
  __typename?: 'CpeEventRange';
  _id: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  description: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isForMember: Scalars['Boolean']['output'];
  isForNonMember: Scalars['Boolean']['output'];
  isForstudent: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['String']['output'];
};

export type CpeResource = {
  __typename?: 'CpeResource';
  _id: Scalars['String']['output'];
  cpeResourceCategory?: Maybe<CpeResourceCategory>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  uri: Scalars['String']['output'];
  urllink: Scalars['String']['output'];
};

export type CpeResourceCategory = {
  __typename?: 'CpeResourceCategory';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CpeStudyChapterCategory = {
  __typename?: 'CpeStudyChapterCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CpeStudyChapterDetails = {
  __typename?: 'CpeStudyChapterDetails';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  altEmail: Scalars['String']['output'];
  altMobile: Scalars['String']['output'];
  cpeStudyChapterCategory?: Maybe<CpeStudyChapterCategory>;
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CpeStudyCircleCategory = {
  __typename?: 'CpeStudyCircleCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CpeStudyCircleDetails = {
  __typename?: 'CpeStudyCircleDetails';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  altEmail: Scalars['String']['output'];
  altMobile: Scalars['String']['output'];
  cpeStudyCircleCategory?: Maybe<CpeStudyCircleCategory>;
  cpeStudyCircleSubCategory?: Maybe<CpeStudyCircleSubCategory>;
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type CpeStudyCircleSubCategory = {
  __typename?: 'CpeStudyCircleSubCategory';
  _id: Scalars['String']['output'];
  cpeStudyCircleCategory?: Maybe<CpeStudyCircleCategory>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CpeStudyGroupCategory = {
  __typename?: 'CpeStudyGroupCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type CpeStudyGroupDetails = {
  __typename?: 'CpeStudyGroupDetails';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  altEmail: Scalars['String']['output'];
  altMobile: Scalars['String']['output'];
  cpeStudyGroupCategory?: Maybe<CpeStudyGroupCategory>;
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EmailCredential = {
  __typename?: 'EmailCredential';
  _id: Scalars['String']['output'];
  authPassword: Scalars['String']['output'];
  authUser: Scalars['String']['output'];
  host: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  port: Scalars['Float']['output'];
  secure: Scalars['Boolean']['output'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  _id: Scalars['String']['output'];
  customId: Scalars['String']['output'];
  emailCredentials?: Maybe<EmailCredential>;
  html: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type EventRegistrationMember = {
  __typename?: 'EventRegistrationMember';
  _id: Scalars['String']['output'];
  addresss: Scalars['String']['output'];
  associatedUser?: Maybe<User>;
  city?: Maybe<City>;
  contactNo: Scalars['String']['output'];
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  evemtTransaction?: Maybe<EventTransactionHistory>;
  gstNo: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  membershipNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organization: Scalars['String']['output'];
  postCode: Scalars['String']['output'];
  rangeID?: Maybe<CpeEventRange>;
  state?: Maybe<State>;
  type: Scalars['String']['output'];
};

export type EventTransactionHistory = {
  __typename?: 'EventTransactionHistory';
  CALLBACK_URL: Scalars['String']['output'];
  CHANNEL_ID: Scalars['String']['output'];
  CHECKSUMHASH: Scalars['String']['output'];
  CUST_ID: Scalars['String']['output'];
  EMAIL: Scalars['String']['output'];
  MID: Scalars['String']['output'];
  ORDER_ID: Scalars['String']['output'];
  TXN_AMOUNT: Scalars['String']['output'];
  WEBSITE: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  billingEmail: Scalars['String']['output'];
  billingGst: Scalars['String']['output'];
  billingName: Scalars['String']['output'];
  cpeEvnet?: Maybe<CpeEvent>;
  createdAt: Scalars['DateTime']['output'];
  customId: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isPaymnetPaid: Scalars['Boolean']['output'];
  isSameCity: Scalars['Boolean']['output'];
  studyGroup?: Maybe<StudyGroup>;
};

export type FooterLink = {
  __typename?: 'FooterLink';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  isExternal: Scalars['Boolean']['output'];
  isNewTab: Scalars['Boolean']['output'];
  linkGroup?: Maybe<FooterLinkGroup>;
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FooterLinkGroup = {
  __typename?: 'FooterLinkGroup';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type GalleryEvent = {
  __typename?: 'GalleryEvent';
  _id: Scalars['String']['output'];
  galleryYear?: Maybe<GalleryYear>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type GalleryImage = {
  __typename?: 'GalleryImage';
  _id: Scalars['String']['output'];
  galleryEvnet?: Maybe<GalleryEvent>;
  galleryYear?: Maybe<GalleryYear>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type GalleryYear = {
  __typename?: 'GalleryYear';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type Gmcs = {
  __typename?: 'Gmcs';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  downloads: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectlink: Scalars['String']['output'];
};

export type HelpDeskCategory = {
  __typename?: 'HelpDeskCategory';
  _id: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type HelpDeskQa = {
  __typename?: 'HelpDeskQA';
  _id: Scalars['String']['output'];
  answer: Scalars['String']['output'];
  category?: Maybe<HelpDeskCategory>;
  description: Scalars['String']['output'];
  file: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  question: Scalars['String']['output'];
};

export type HighLights = {
  __typename?: 'HighLights';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isExternal: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type HomeCounter = {
  __typename?: 'HomeCounter';
  _id: Scalars['String']['output'];
  count: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type HomePortal = {
  __typename?: 'HomePortal';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  homePortalCategory?: Maybe<HomePortalCategory>;
  icon: Scalars['String']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pdf: Scalars['String']['output'];
  redirectLink: Scalars['String']['output'];
};

export type HomePortalCategory = {
  __typename?: 'HomePortalCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type IAddAttendenceInput = {
  eventId: Scalars['String']['input'];
  memberId: Scalars['String']['input'];
};

export type IArticleVacancies = {
  area: Scalars['String']['input'];
  city: Scalars['String']['input'];
  firmName: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
};

export type IAuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type IAuthMember = {
  email: Scalars['String']['input'];
  memberType: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type IAuthResoverResponse = {
  __typename?: 'IAuthResoverResponse';
  email: Scalars['String']['output'];
  jwt: Scalars['String']['output'];
  msg: Scalars['String']['output'];
  name: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IChangePassword = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ICoworkingSearch = {
  capacity: Scalars['String']['input'];
  category: Scalars['String']['input'];
  categoryOfServices: Scalars['String']['input'];
  location: Scalars['String']['input'];
};

export type ICreateAboutChairperson = {
  _id?: InputMaybe<Scalars['String']['input']>;
  altEmail: Scalars['String']['input'];
  altMobile: Scalars['String']['input'];
  chairpersonDescription: Scalars['String']['input'];
  chairpersonName: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  ourVision: Scalars['String']['input'];
  title1: Scalars['String']['input'];
  title2: Scalars['String']['input'];
};

export type ICreateActivityReport = {
  _id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  uri: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type ICreateArticlesPlacement = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  area: Scalars['String']['input'];
  articlesVacancyCategory: Scalars['String']['input'];
  city: Scalars['String']['input'];
  contactNo: Scalars['String']['input'];
  country: Scalars['String']['input'];
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  frnNo: Scalars['String']['input'];
  image: Scalars['String']['input'];
  info: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  membershipNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
  position: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type ICreateArticlesVacancyCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateBannerGallary = {
  _id?: InputMaybe<Scalars['String']['input']>;
  buttonRedirect: Scalars['String']['input'];
  buttonText: Scalars['String']['input'];
  caption: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateBranchContactInformation = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  chairPerson: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  fax: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  nominatedMembers: Scalars['String']['input'];
  secretary: Scalars['String']['input'];
  state: Scalars['String']['input'];
  tel: Scalars['String']['input'];
  treasurer: Scalars['String']['input'];
  viseChairPerson: Scalars['String']['input'];
  wicasaChairPerson: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type ICreateBranchManual = {
  _id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateBranchV2 = {
  _id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateBranchV2Details = {
  _id?: InputMaybe<Scalars['String']['input']>;
  addressInfo: Scalars['String']['input'];
  bottom: Scalars['String']['input'];
  branchName: Scalars['String']['input'];
  branchV2: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  left: Scalars['String']['input'];
  name: Scalars['String']['input'];
  officeBearers: Scalars['String']['input'];
  right: Scalars['String']['input'];
  top: Scalars['String']['input'];
};

export type ICreateCapacity = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCity = {
  _id?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type ICreateCms = {
  _id?: InputMaybe<Scalars['String']['input']>;
  custId: Scalars['String']['input'];
  html: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCommitteCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCommitteSubCategory = {
  Committecategory: Scalars['String']['input'];
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCommitteeDetails = {
  Chairman: Scalars['String']['input'];
  Chairmanemail: Scalars['String']['input'];
  Chairmanimg: Scalars['String']['input'];
  Chairmanmobile: Scalars['String']['input'];
  Exoffico: Scalars['String']['input'];
  Officebearers: Scalars['String']['input'];
  Regionalcouncilmember: Scalars['String']['input'];
  ViceChairman: Scalars['String']['input'];
  ViceChairmanemail: Scalars['String']['input'];
  ViceChairmanimg: Scalars['String']['input'];
  ViceChairmanmobile: Scalars['String']['input'];
  _id?: InputMaybe<Scalars['String']['input']>;
  committeCategory: Scalars['String']['input'];
  committeSubCategory: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
};

export type ICreateCompanySetup = {
  _id?: InputMaybe<Scalars['String']['input']>;
  banner: Scalars['String']['input'];
  facebook: Scalars['String']['input'];
  instagram: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  linkedin: Scalars['String']['input'];
  linkedinpost: Scalars['String']['input'];
  telegram: Scalars['String']['input'];
  twitter: Scalars['String']['input'];
  youtube: Scalars['String']['input'];
};

export type ICreateCountry = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCoworkingZone = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  capacity: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  info: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  jobType: Scalars['String']['input'];
  location: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  services: Scalars['String']['input'];
  state: Scalars['String']['input'];
  subLocation: Scalars['String']['input'];
  workType: Scalars['String']['input'];
};

export type ICreateCpeEvent = {
  _id?: InputMaybe<Scalars['String']['input']>;
  capacity: Scalars['String']['input'];
  cgst: Scalars['Float']['input'];
  cms: Scalars['String']['input'];
  cpehrs: Scalars['String']['input'];
  cutoffDate: Scalars['String']['input'];
  date1: Scalars['String']['input'];
  date2: Scalars['String']['input'];
  flyer: Scalars['String']['input'];
  igst: Scalars['Float']['input'];
  igstCity: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isForStudent: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  sgst: Scalars['Float']['input'];
  tax: Scalars['String']['input'];
  time1: Scalars['String']['input'];
  time2: Scalars['String']['input'];
};

export type ICreateCpeEventRange = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cpeEvent: Scalars['String']['input'];
  description: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isForMember: Scalars['Boolean']['input'];
  isForNonMember: Scalars['Boolean']['input'];
  isForstudent: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['String']['input'];
};

export type ICreateCpeResource = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cpeResourceCategory: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  speaker: Scalars['String']['input'];
  uri: Scalars['String']['input'];
  urllink: Scalars['String']['input'];
};

export type ICreateCpeResourceCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCpeStudyChapterCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCpeStudyChapterDetails = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  altEmail: Scalars['String']['input'];
  altMobile: Scalars['String']['input'];
  cpeStudyChapterCategory: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ICreateCpeStudyCircleCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCpeStudyCircleDetails = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  altEmail: Scalars['String']['input'];
  altMobile: Scalars['String']['input'];
  cpeStudyCircleCategory: Scalars['String']['input'];
  cpeStudyCircleSubCategory: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ICreateCpeStudyCircleSubCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cpeStudyCircleCategory: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCpeStudyGroupCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateCpeStudyGroupDetails = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  altEmail: Scalars['String']['input'];
  altMobile: Scalars['String']['input'];
  cpeStudyGroupCategory: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ICreateEmailCredential = {
  _id?: InputMaybe<Scalars['String']['input']>;
  authPassword: Scalars['String']['input'];
  authUser: Scalars['String']['input'];
  host: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  secure: Scalars['Boolean']['input'];
};

export type ICreateEmailTemplate = {
  _id?: InputMaybe<Scalars['String']['input']>;
  customId: Scalars['String']['input'];
  emailCredentials: Scalars['String']['input'];
  html: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateFooterLink = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  isExternal: Scalars['Boolean']['input'];
  isNewTab: Scalars['Boolean']['input'];
  linkGroup: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ICreateFooterLinkGroup = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateGalleryEvent = {
  _id?: InputMaybe<Scalars['String']['input']>;
  galleryYear: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateGalleryImage = {
  _id?: InputMaybe<Scalars['String']['input']>;
  galleryEvnet: Scalars['String']['input'];
  galleryYear: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateGalleryYear = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateGmcs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  downloads: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectlink: Scalars['String']['input'];
};

export type ICreateHelpDeskCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  emailAddress: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateHelpDeskQa = {
  _id?: InputMaybe<Scalars['String']['input']>;
  answer: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  file: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  question: Scalars['String']['input'];
};

export type ICreateHighLights = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  isExternal: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type ICreateHomeCounter = {
  _id?: InputMaybe<Scalars['String']['input']>;
  count: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateHomePortal = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  homePortalCategory: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  image: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pdf: Scalars['String']['input'];
  redirectLink: Scalars['String']['input'];
};

export type ICreateHomePortalCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateImages = {
  _id?: InputMaybe<Scalars['String']['input']>;
  custID: Scalars['String']['input'];
  image: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateJobType = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateLawUpdate = {
  _id?: InputMaybe<Scalars['String']['input']>;
  author: Scalars['String']['input'];
  date: Scalars['String']['input'];
  download: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  lawUpdateCategory: Scalars['String']['input'];
};

export type ICreateLawUpdateCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateLibrary = {
  _id?: InputMaybe<Scalars['String']['input']>;
  download: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
};

export type ICreateLibraryRegistrationForm = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  isAcRoom: Scalars['Boolean']['input'];
  isActive: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  libraryLocation: Scalars['String']['input'];
  membershipNo: Scalars['String']['input'];
  middleName: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
};

export type ICreateLibraryRegistrationLocation = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  isAcRoom: Scalars['Boolean']['input'];
  isActive: Scalars['Boolean']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priceAC: Scalars['Float']['input'];
  priceNoneAC: Scalars['Float']['input'];
  totalCapacityAC: Scalars['Float']['input'];
  totalCapacityNoneAc: Scalars['Float']['input'];
};

export type ICreateMcs = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  downloads: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectlink: Scalars['String']['input'];
};

export type ICreateMember = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  isChairman: Scalars['Boolean']['input'];
  isExOfficioMember: Scalars['Boolean']['input'];
  isOfficeBearers: Scalars['Boolean']['input'];
  isRegionalCouncilMember: Scalars['Boolean']['input'];
  isWicasCommunity: Scalars['Boolean']['input'];
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  memberDesignation: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  officeAddress: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  twitter?: InputMaybe<Scalars['String']['input']>;
  uri: Scalars['String']['input'];
};

export type ICreateMemberDesignation = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateMemberRegistration = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address1: Scalars['String']['input'];
  address2: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gstNo: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isApproved: Scalars['Boolean']['input'];
  lastName: Scalars['String']['input'];
  membershipNo: Scalars['String']['input'];
  middleName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  pinCode: Scalars['String']['input'];
  regionType: Scalars['String']['input'];
  state: Scalars['String']['input'];
  title: Scalars['String']['input'];
  tradeName: Scalars['String']['input'];
  userType: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type ICreateMentorshipZone = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  capacity: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  info: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  jobType: Scalars['String']['input'];
  location: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  services: Scalars['String']['input'];
  state: Scalars['String']['input'];
  subLocation: Scalars['String']['input'];
  workType: Scalars['String']['input'];
};

export type ICreateNetworkingZone = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  capacity: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  info: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  jobType: Scalars['String']['input'];
  location: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  position: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  services: Scalars['String']['input'];
  state: Scalars['String']['input'];
  subLocation: Scalars['String']['input'];
  workType: Scalars['String']['input'];
};

export type ICreatePastChairperson = {
  _id?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  endYear: Scalars['DateTime']['input'];
  fax: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  memberDesignation: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  officeAddress: Scalars['String']['input'];
  startYear: Scalars['DateTime']['input'];
  telOffice: Scalars['String']['input'];
  telResidential: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreatePodcast = {
  _id?: InputMaybe<Scalars['String']['input']>;
  iframe: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreatePrerna = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  area: Scalars['String']['input'];
  capacity: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  date: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  info: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  jobType: Scalars['String']['input'];
  location: Scalars['String']['input'];
  mobileNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pincode: Scalars['String']['input'];
  position: Scalars['String']['input'];
  profile: Scalars['String']['input'];
  serviceType: Scalars['String']['input'];
  services: Scalars['String']['input'];
  state: Scalars['String']['input'];
  subLocation: Scalars['String']['input'];
  workType: Scalars['String']['input'];
};

export type ICreatePresidentFromWesternRegion = {
  _id?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  endYear: Scalars['String']['input'];
  fax: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  memberDesignation: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  officeAddress: Scalars['String']['input'];
  startYear: Scalars['String']['input'];
  telOffice: Scalars['String']['input'];
  telResidential: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateProfessionalTool = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
  professionalToolCategory: Scalars['String']['input'];
  uri: Scalars['String']['input'];
  versionCode: Scalars['String']['input'];
};

export type ICreateProfessionalToolCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreatePublication = {
  _id?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  cgst: Scalars['String']['input'];
  igst: Scalars['String']['input'];
  igstState: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isFree: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pdf: Scalars['String']['input'];
  price: Scalars['String']['input'];
  qty: Scalars['String']['input'];
  sgst: Scalars['String']['input'];
  tax: Scalars['String']['input'];
};

export type ICreatePublicationAndNewsLetter = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
  header: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isExternal: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectLink: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  title: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreatePublicationCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreatePublicationCode = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreatePublicationPurchase = {
  _id?: InputMaybe<Scalars['String']['input']>;
  assigendUser: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isFromAdmin: Scalars['Boolean']['input'];
  publication: Scalars['String']['input'];
  purchaseDate: Scalars['String']['input'];
};

export type ICreatePublicationUserType = {
  _id?: InputMaybe<Scalars['String']['input']>;
  courierPrice: Scalars['String']['input'];
  couriercgst: Scalars['String']['input'];
  courierigst: Scalars['String']['input'];
  couriersgst: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  publication: Scalars['String']['input'];
};

export type ICreateRedirectLinks = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  urlFrom: Scalars['String']['input'];
  urlTo: Scalars['String']['input'];
};

export type ICreateRegion = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateServiceType = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateServices = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateState = {
  _id?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateStudentDownload = {
  _id?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  date: Scalars['String']['input'];
  downloads: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  speaker: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateStudentDownloadCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateStudentWicasaCommunity = {
  _id?: InputMaybe<Scalars['String']['input']>;
  altEmail: Scalars['String']['input'];
  altPhone: Scalars['String']['input'];
  email: Scalars['String']['input'];
  facebook?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  instagram?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  linkedIn?: InputMaybe<Scalars['String']['input']>;
  memberDesignation: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  twitter?: InputMaybe<Scalars['String']['input']>;
};

export type ICreateStudyCircleMetting = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  orgenizedBy: Scalars['String']['input'];
  speakers: Scalars['String']['input'];
  subject: Scalars['String']['input'];
  time: Scalars['String']['input'];
  venue: Scalars['String']['input'];
};

export type ICreateStudyGroup = {
  _id?: InputMaybe<Scalars['String']['input']>;
  capacity: Scalars['String']['input'];
  cgst: Scalars['Float']['input'];
  cms: Scalars['String']['input'];
  cutoffDate: Scalars['String']['input'];
  date1: Scalars['String']['input'];
  date2: Scalars['String']['input'];
  igst: Scalars['Float']['input'];
  igstCity: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  sgst: Scalars['Float']['input'];
  studyGroupCategory: Scalars['String']['input'];
  tax: Scalars['String']['input'];
};

export type ICreateStudyGroupCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  capacity: Scalars['String']['input'];
  cgst: Scalars['Float']['input'];
  igst: Scalars['Float']['input'];
  igstCity: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  sgst: Scalars['Float']['input'];
};

export type ICreateTax = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ICreateTitle = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateUser = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gstin: Scalars['String']['input'];
  hash: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isAdmin: Scalars['Boolean']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  registerdNumber: Scalars['String']['input'];
};

export type ICreateVideoGallary = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateVisitingCard = {
  _id?: InputMaybe<Scalars['String']['input']>;
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  logo: Scalars['String']['input'];
  mobile: Scalars['String']['input'];
  name: Scalars['String']['input'];
  website: Scalars['String']['input'];
};

export type ICreateWebCast = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  file: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  uri: Scalars['String']['input'];
};

export type ICreateWhatWeBrignToYou = {
  _id?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  image: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isWIRC: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectLink: Scalars['String']['input'];
};

export type ICreateWicasaNewsLatter = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  iswirc: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pdf: Scalars['String']['input'];
  redirectlink: Scalars['String']['input'];
  showIndex: Scalars['String']['input'];
};

export type ICreateWircDirectory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  uri: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type ICreateWorkType = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateYoutube = {
  _id?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  redirectlink: Scalars['String']['input'];
};

export type IEventPaymentRegistration = {
  addresss: Scalars['String']['input'];
  city: Scalars['String']['input'];
  contactNo: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gstNo: Scalars['String']['input'];
  membershipNumber: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organization: Scalars['String']['input'];
  postCode: Scalars['String']['input'];
  rangeID: Scalars['String']['input'];
  state: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type IEventRegistrationCount = {
  __typename?: 'IEventRegistrationCount';
  eventId: Scalars['String']['output'];
  occupied: Scalars['String']['output'];
};

export type IEventRegistrationCountRespose = {
  __typename?: 'IEventRegistrationCountRespose';
  arr: Array<IEventRegistrationCount>;
};

export type IEventRegistrationInput = {
  billingEmail: Scalars['String']['input'];
  billingGst: Scalars['String']['input'];
  billingName: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  eventRegistration: Array<IEventPaymentRegistration>;
  studyGroupId: Scalars['String']['input'];
};

export type IForgotPasswordInput = {
  email: Scalars['String']['input'];
  membershipNumber: Scalars['String']['input'];
};

export type IForgotPasswordUpdateInput = {
  jwt: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type IGetAllTransactionId = {
  ids: Array<Scalars['String']['input']>;
};

export type IGetById = {
  id: Scalars['String']['input'];
};

export type IGetEmailInput = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type IGetPaymentDetails = {
  endDate: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type ILibraryCount = {
  __typename?: 'ILibraryCount';
  libraryCapacity: Scalars['String']['output'];
  libraryId: Scalars['String']['output'];
  libraryNonACCapacity: Scalars['String']['output'];
  libraryNoneACOccupied: Scalars['String']['output'];
  libraryOccupied: Scalars['String']['output'];
};

export type IPaymentField = {
  __typename?: 'IPaymentField';
  CALLBACK_URL: Scalars['String']['output'];
  CHANNEL_ID: Scalars['String']['output'];
  CHECKSUMHASH: Scalars['String']['output'];
  CUST_ID: Scalars['String']['output'];
  EMAIL: Scalars['String']['output'];
  MID: Scalars['String']['output'];
  ORDER_ID: Scalars['String']['output'];
  TOKEN: Scalars['String']['output'];
  TXN_AMOUNT: Scalars['String']['output'];
  WEBSITE: Scalars['String']['output'];
};

export type IPaymentResponse = {
  __typename?: 'IPaymentResponse';
  data?: Maybe<IPaymentField>;
  msg: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IPaytmIdResponseRespose = {
  __typename?: 'IPaytmIdResponseRespose';
  paytmId: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type IPrernaSearch = {
  city: Scalars['String']['input'];
  jobType: Scalars['String']['input'];
  name: Scalars['String']['input'];
  workFrom: Scalars['String']['input'];
};

export type IPublicationPaymentGenerate = {
  address: Scalars['String']['input'];
  altPhone: Scalars['String']['input'];
  city: Scalars['String']['input'];
  comment: Scalars['String']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  gst: Scalars['String']['input'];
  id: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  publicationUserType: Scalars['String']['input'];
  purchaseQty: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type ISaveBatch = {
  data: Array<TempMemberRegistration>;
};

export type IStatusResponse = {
  __typename?: 'IStatusResponse';
  data: Scalars['String']['output'];
  msg: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type IUserInfoByMembershipNumber = {
  __typename?: 'IUserInfoByMembershipNumber';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  contactInfo: Scalars['String']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gst: Scalars['String']['output'];
  isData: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organization: Scalars['String']['output'];
  pincode: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type IVacancyPost = {
  __typename?: 'IVacancyPost';
  articlesVacancy: Array<ArticlesPlacement>;
  coworkingZone: Array<CoworkingZone>;
  mentorshipPortal: Array<MentorshipZone>;
  networkingZone: Array<NetworkingZone>;
  prerna: Array<Prerna>;
};

export type Images = {
  __typename?: 'Images';
  _id: Scalars['String']['output'];
  custID: Scalars['String']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type InitiativeMailInput = {
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  number: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type JobType = {
  __typename?: 'JobType';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type LawUpdate = {
  __typename?: 'LawUpdate';
  _id: Scalars['String']['output'];
  author: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  download: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  lawUpdateCategory?: Maybe<LawUpdateCategory>;
};

export type LawUpdateCategory = {
  __typename?: 'LawUpdateCategory';
  _id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Library = {
  __typename?: 'Library';
  _id: Scalars['String']['output'];
  download: Scalars['String']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
};

export type LibraryRegistrationForm = {
  __typename?: 'LibraryRegistrationForm';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  isAcRoom: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  libraryLocation?: Maybe<LibraryRegistrationLocation>;
  membershipNo: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  mobileNo: Scalars['String']['output'];
  pincode: Scalars['String']['output'];
  registrationNo: Scalars['Float']['output'];
};

export type LibraryRegistrationLocation = {
  __typename?: 'LibraryRegistrationLocation';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  isAcRoom: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priceAC: Scalars['Float']['output'];
  priceNoneAC: Scalars['Float']['output'];
  totalCapacityAC: Scalars['Float']['output'];
  totalCapacityNoneAc: Scalars['Float']['output'];
};

export type Mcs = {
  __typename?: 'Mcs';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  downloads: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectlink: Scalars['String']['output'];
};

export type Member = {
  __typename?: 'Member';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  facebook: Scalars['String']['output'];
  instagram: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isChairman: Scalars['Boolean']['output'];
  isExOfficioMember: Scalars['Boolean']['output'];
  isOfficeBearers: Scalars['Boolean']['output'];
  isRegionalCouncilMember: Scalars['Boolean']['output'];
  isWicasCommunity: Scalars['Boolean']['output'];
  linkedIn: Scalars['String']['output'];
  memberDesignation?: Maybe<MemberDesignation>;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  officeAddress: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  twitter: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type MemberDesignation = {
  __typename?: 'MemberDesignation';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type MemberRegistration = {
  __typename?: 'MemberRegistration';
  _id: Scalars['String']['output'];
  address1: Scalars['String']['output'];
  address2: Scalars['String']['output'];
  approvedBy?: Maybe<User>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gstNo: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isApproved: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  membershipNo: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  pinCode: Scalars['String']['output'];
  regionType?: Maybe<Region>;
  state?: Maybe<State>;
  title?: Maybe<Title>;
  tradeName: Scalars['String']['output'];
  userType: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type MentorshipZone = {
  __typename?: 'MentorshipZone';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  capacity?: Maybe<Capacity>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  image: Scalars['String']['output'];
  info: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  jobType?: Maybe<JobType>;
  location: Scalars['String']['output'];
  mobileNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
  profile: Scalars['String']['output'];
  serviceType?: Maybe<ServiceType>;
  services?: Maybe<Services>;
  state?: Maybe<State>;
  subLocation: Scalars['String']['output'];
  workType?: Maybe<WorkType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  GetAllPaymentDetailsByDateRange: Array<EventRegistrationMember>;
  GetAllPublicationPaymentDetailsByDateRange: Array<PublicationBilling>;
  GetPaymentDetails: Array<EventRegistrationMember>;
  GetPaymentDetailsByStudyGroup: Array<EventRegistrationMember>;
  addAttendence: IStatusResponse;
  addHelpDeskQA: IStatusResponse;
  articleVacancySearch: Array<ArticlesPlacement>;
  authPublicationLoginResolver: IAuthResoverResponse;
  authResolver: IAuthResoverResponse;
  batchInsertMemberData: IStatusResponse;
  coWorkingSearch: Array<CoworkingZone>;
  createAdminUserResolver: IStatusResponse;
  createMemberRegistration: IStatusResponse;
  createOrUpdateAboutChairperson: IStatusResponse;
  createOrUpdateActivityReport: IStatusResponse;
  createOrUpdateArticlesPlacement: IStatusResponse;
  createOrUpdateArticlesVacancyCategory: IStatusResponse;
  createOrUpdateBannerGallary: IStatusResponse;
  createOrUpdateBranchContactInformation: IStatusResponse;
  createOrUpdateBranchManual: IStatusResponse;
  createOrUpdateBranchV2: IStatusResponse;
  createOrUpdateBranchV2Details: IStatusResponse;
  createOrUpdateCapacity: IStatusResponse;
  createOrUpdateCity: IStatusResponse;
  createOrUpdateCms: IStatusResponse;
  createOrUpdateCommitteSubCategory: IStatusResponse;
  createOrUpdateCommitteeCategory: IStatusResponse;
  createOrUpdateCommitteeDetails: IStatusResponse;
  createOrUpdateCompany: IStatusResponse;
  createOrUpdateCountry: IStatusResponse;
  createOrUpdateCoworkingZone: IStatusResponse;
  createOrUpdateCpeEvent: IStatusResponse;
  createOrUpdateCpeEventRange: IStatusResponse;
  createOrUpdateCpeResource: IStatusResponse;
  createOrUpdateCpeResourceCategory: IStatusResponse;
  createOrUpdateCpeStudyChapterCategory: IStatusResponse;
  createOrUpdateCpeStudyChapterDetails: IStatusResponse;
  createOrUpdateCpeStudyCircleCategory: IStatusResponse;
  createOrUpdateCpeStudyCircleDetails: IStatusResponse;
  createOrUpdateCpeStudyCircleSubCategory: IStatusResponse;
  createOrUpdateCpeStudyGroupCategory: IStatusResponse;
  createOrUpdateCpeStudyGroupDetails: IStatusResponse;
  createOrUpdateEmailCredential: IStatusResponse;
  createOrUpdateEmailTemplate: IStatusResponse;
  createOrUpdateFooterCateogry: IStatusResponse;
  createOrUpdateFooterLink: IStatusResponse;
  createOrUpdateGalleryEvent: IStatusResponse;
  createOrUpdateGalleryImage: IStatusResponse;
  createOrUpdateGalleryYear: IStatusResponse;
  createOrUpdateGmcs: IStatusResponse;
  createOrUpdateHelpDeskCategory: IStatusResponse;
  createOrUpdateHelpDeskQA: IStatusResponse;
  createOrUpdateHighLights: IStatusResponse;
  createOrUpdateHomeCounter: IStatusResponse;
  createOrUpdateHomePortal: IStatusResponse;
  createOrUpdateHomePortalCategory: IStatusResponse;
  createOrUpdateImages: IStatusResponse;
  createOrUpdateJobType: IStatusResponse;
  createOrUpdateLawCategory: IStatusResponse;
  createOrUpdateLawUpdate: IStatusResponse;
  createOrUpdateLibrary: IStatusResponse;
  createOrUpdateLibraryRegistrationForm: IStatusResponse;
  createOrUpdateLibraryRegistrationLocation: IStatusResponse;
  createOrUpdateMcs: IStatusResponse;
  createOrUpdateMember: IStatusResponse;
  createOrUpdateMemberDesignation: IStatusResponse;
  createOrUpdateMemberRegistration: IStatusResponse;
  createOrUpdateMentorshipZone: IStatusResponse;
  createOrUpdateNetworkingZone: IStatusResponse;
  createOrUpdatePastChairperson: IStatusResponse;
  createOrUpdatePastCpeEvent: IStatusResponse;
  createOrUpdatePodcast: IStatusResponse;
  createOrUpdatePrerna: IStatusResponse;
  createOrUpdatePresidentFromWesternRegion: IStatusResponse;
  createOrUpdateProfessionalTool: IStatusResponse;
  createOrUpdateProfessionalToolCategory: IStatusResponse;
  createOrUpdatePublication: IStatusResponse;
  createOrUpdatePublicationAndNewsLetter: IStatusResponse;
  createOrUpdatePublicationCategory: IStatusResponse;
  createOrUpdatePublicationCode: IStatusResponse;
  createOrUpdatePublicationPurchase: IStatusResponse;
  createOrUpdatePublicationUserType: IStatusResponse;
  createOrUpdateRedirectLinks: IStatusResponse;
  createOrUpdateRegion: IStatusResponse;
  createOrUpdateServiceType: IStatusResponse;
  createOrUpdateServices: IStatusResponse;
  createOrUpdateState: IStatusResponse;
  createOrUpdateStudentDownload: IStatusResponse;
  createOrUpdateStudentDownloadCategory: IStatusResponse;
  createOrUpdateStudentWicasaCommunity: IStatusResponse;
  createOrUpdateStudyCircleMetting: IStatusResponse;
  createOrUpdateStudyGroup: IStatusResponse;
  createOrUpdateStudyGroupCategory: IStatusResponse;
  createOrUpdateTax: IStatusResponse;
  createOrUpdateTitle: IStatusResponse;
  createOrUpdateVideoGallary: IStatusResponse;
  createOrUpdateVisitingCard: IStatusResponse;
  createOrUpdateWebCast: IStatusResponse;
  createOrUpdateWhatWeBrignToYou: IStatusResponse;
  createOrUpdateWicasaNewsLatter: IStatusResponse;
  createOrUpdateWircdirectory: IStatusResponse;
  createOrUpdateWorkType: IStatusResponse;
  createOrUpdateYoutubeLinks: IStatusResponse;
  createUserResolver: IStatusResponse;
  deleteActivityReport: IStatusResponse;
  deleteAdminUser: IStatusResponse;
  deleteArticlesPlacement: IStatusResponse;
  deleteArticlesVacancyCategory: IStatusResponse;
  deleteBannerGallary: IStatusResponse;
  deleteBranchContactInformation: IStatusResponse;
  deleteBranchManual: IStatusResponse;
  deleteBranchV2: IStatusResponse;
  deleteBranchV2Details: IStatusResponse;
  deleteCapacity: IStatusResponse;
  deleteCity: IStatusResponse;
  deleteCms: IStatusResponse;
  deleteCommitteSubCategory: IStatusResponse;
  deleteCommitteeCategory: IStatusResponse;
  deleteCommitteeDetails: IStatusResponse;
  deleteCountry: IStatusResponse;
  deleteCoworkingZone: IStatusResponse;
  deleteCpeEvent: IStatusResponse;
  deleteCpeEventRange: IStatusResponse;
  deleteCpeResource: IStatusResponse;
  deleteCpeResourceCategory: IStatusResponse;
  deleteCpeStudyChapterCategory: IStatusResponse;
  deleteCpeStudyChapterDetails: IStatusResponse;
  deleteCpeStudyCircleCategory: IStatusResponse;
  deleteCpeStudyCircleDetails: IStatusResponse;
  deleteCpeStudyCircleSubCategory: IStatusResponse;
  deleteCpeStudyGroupCategory: IStatusResponse;
  deleteCpeStudyGroupDetails: IStatusResponse;
  deleteEmailCredential: IStatusResponse;
  deleteEmailTemplate: IStatusResponse;
  deleteFooterCateogry: IStatusResponse;
  deleteFooterLink: IStatusResponse;
  deleteGalleryEvent: IStatusResponse;
  deleteGalleryImage: IStatusResponse;
  deleteGalleryYear: IStatusResponse;
  deleteGmcs: IStatusResponse;
  deleteHelpDeskCategory: IStatusResponse;
  deleteHelpDeskQA: IStatusResponse;
  deleteHighLights: IStatusResponse;
  deleteHomeCounter: IStatusResponse;
  deleteHomePortal: IStatusResponse;
  deleteHomePortalCategory: IStatusResponse;
  deleteImages: IStatusResponse;
  deleteJobType: IStatusResponse;
  deleteLawUpdate: IStatusResponse;
  deleteLawUpdateCategory: IStatusResponse;
  deleteLibrary: IStatusResponse;
  deleteLibraryRegistrationForm: IStatusResponse;
  deleteLibraryRegistrationLocation: IStatusResponse;
  deleteMcs: IStatusResponse;
  deleteMember: IStatusResponse;
  deleteMemberDesignation: IStatusResponse;
  deleteMemberRegistration: IStatusResponse;
  deleteMentorshipZone: IStatusResponse;
  deleteNetworkingZone: IStatusResponse;
  deletePastChairperson: IStatusResponse;
  deletePastCpeEvent: IStatusResponse;
  deletePodcast: IStatusResponse;
  deletePrerna: IStatusResponse;
  deletePresidentFromWesternRegion: IStatusResponse;
  deleteProfessionalTool: IStatusResponse;
  deleteProfessionalToolCategory: IStatusResponse;
  deletePublication: IStatusResponse;
  deletePublicationAndNewsLetter: IStatusResponse;
  deletePublicationCategory: IStatusResponse;
  deletePublicationCode: IStatusResponse;
  deletePublicationPurchase: IStatusResponse;
  deletePublicationUserType: IStatusResponse;
  deleteRedirectLinks: IStatusResponse;
  deleteRegion: IStatusResponse;
  deleteServiceType: IStatusResponse;
  deleteServices: IStatusResponse;
  deleteState: IStatusResponse;
  deleteStudentDownload: IStatusResponse;
  deleteStudentDownloadCategory: IStatusResponse;
  deleteStudentWicasaCommunity: IStatusResponse;
  deleteStudyCircleMetting: IStatusResponse;
  deleteStudyGroup: IStatusResponse;
  deleteStudyGroupCategory: IStatusResponse;
  deleteTax: IStatusResponse;
  deleteTitle: IStatusResponse;
  deleteVideoGallary: IStatusResponse;
  deleteWebCast: IStatusResponse;
  deleteWhatWeBrignToYou: IStatusResponse;
  deleteWicasaNewsLatter: IStatusResponse;
  deleteWircdirectory: IStatusResponse;
  deleteWorkType: IStatusResponse;
  deleteYoutubeLinks: IStatusResponse;
  forgotMemberPassword: IStatusResponse;
  forgotMemberPasswordPublication: IStatusResponse;
  genEmailWithMembershipNumber: IStatusResponse;
  genEventPaymnet: IPaymentResponse;
  genPayment: IPaymentResponse;
  getAllPaytmIdfromTransactionId: Array<IPaytmIdResponseRespose>;
  getAllPublicationPaymentHistory: Array<PublicationBilling>;
  getMemberInfoByMembershipNumber?: Maybe<IUserInfoByMembershipNumber>;
  getPublicaLibraryRegistration: IStatusResponse;
  getRedeamCode: IStatusResponse;
  initiativeMail: IStatusResponse;
  memberRegistrationAuthResolver: IAuthResoverResponse;
  mentorshipPlacementSearch: Array<MentorshipZone>;
  networkingZoneSearch: Array<NetworkingZone>;
  noneMemberRegistrationAuthResolver: IAuthResoverResponse;
  prenaSearch: Array<Prerna>;
  updateAdminUser: IStatusResponse;
  updateMyProfile: IStatusResponse;
  updateNewPassword: IStatusResponse;
  updateUserPassword: IStatusResponse;
  updateUserProfile: IStatusResponse;
  verifyEmailWithMembershipNumber: IAuthResoverResponse;
};


export type MutationGetAllPaymentDetailsByDateRangeArgs = {
  options: IGetPaymentDetails;
};


export type MutationGetAllPublicationPaymentDetailsByDateRangeArgs = {
  options: IGetPaymentDetails;
};


export type MutationGetPaymentDetailsArgs = {
  options: IGetPaymentDetails;
};


export type MutationGetPaymentDetailsByStudyGroupArgs = {
  options: IGetPaymentDetails;
};


export type MutationAddAttendenceArgs = {
  options: IAddAttendenceInput;
};


export type MutationAddHelpDeskQaArgs = {
  options: ICreateHelpDeskQa;
};


export type MutationArticleVacancySearchArgs = {
  options: IArticleVacancies;
};


export type MutationAuthPublicationLoginResolverArgs = {
  options: IAuthInput;
};


export type MutationAuthResolverArgs = {
  options: IAuthInput;
};


export type MutationBatchInsertMemberDataArgs = {
  options: ISaveBatch;
};


export type MutationCoWorkingSearchArgs = {
  options: ICoworkingSearch;
};


export type MutationCreateAdminUserResolverArgs = {
  options: ICreateUser;
};


export type MutationCreateMemberRegistrationArgs = {
  options: ICreateMemberRegistration;
};


export type MutationCreateOrUpdateAboutChairpersonArgs = {
  options: ICreateAboutChairperson;
};


export type MutationCreateOrUpdateActivityReportArgs = {
  options: ICreateActivityReport;
};


export type MutationCreateOrUpdateArticlesPlacementArgs = {
  options: ICreateArticlesPlacement;
};


export type MutationCreateOrUpdateArticlesVacancyCategoryArgs = {
  options: ICreateArticlesVacancyCategory;
};


export type MutationCreateOrUpdateBannerGallaryArgs = {
  options: ICreateBannerGallary;
};


export type MutationCreateOrUpdateBranchContactInformationArgs = {
  options: ICreateBranchContactInformation;
};


export type MutationCreateOrUpdateBranchManualArgs = {
  options: ICreateBranchManual;
};


export type MutationCreateOrUpdateBranchV2Args = {
  options: ICreateBranchV2;
};


export type MutationCreateOrUpdateBranchV2DetailsArgs = {
  options: ICreateBranchV2Details;
};


export type MutationCreateOrUpdateCapacityArgs = {
  options: ICreateCapacity;
};


export type MutationCreateOrUpdateCityArgs = {
  options: ICreateCity;
};


export type MutationCreateOrUpdateCmsArgs = {
  options: ICreateCms;
};


export type MutationCreateOrUpdateCommitteSubCategoryArgs = {
  options: ICreateCommitteSubCategory;
};


export type MutationCreateOrUpdateCommitteeCategoryArgs = {
  options: ICreateCommitteCategory;
};


export type MutationCreateOrUpdateCommitteeDetailsArgs = {
  options: ICreateCommitteeDetails;
};


export type MutationCreateOrUpdateCompanyArgs = {
  options: ICreateCompanySetup;
};


export type MutationCreateOrUpdateCountryArgs = {
  options: ICreateCountry;
};


export type MutationCreateOrUpdateCoworkingZoneArgs = {
  options: ICreateCoworkingZone;
};


export type MutationCreateOrUpdateCpeEventArgs = {
  options: ICreateCpeEvent;
};


export type MutationCreateOrUpdateCpeEventRangeArgs = {
  options: ICreateCpeEventRange;
};


export type MutationCreateOrUpdateCpeResourceArgs = {
  options: ICreateCpeResource;
};


export type MutationCreateOrUpdateCpeResourceCategoryArgs = {
  options: ICreateCpeResourceCategory;
};


export type MutationCreateOrUpdateCpeStudyChapterCategoryArgs = {
  options: ICreateCpeStudyChapterCategory;
};


export type MutationCreateOrUpdateCpeStudyChapterDetailsArgs = {
  options: ICreateCpeStudyChapterDetails;
};


export type MutationCreateOrUpdateCpeStudyCircleCategoryArgs = {
  options: ICreateCpeStudyCircleCategory;
};


export type MutationCreateOrUpdateCpeStudyCircleDetailsArgs = {
  options: ICreateCpeStudyCircleDetails;
};


export type MutationCreateOrUpdateCpeStudyCircleSubCategoryArgs = {
  options: ICreateCpeStudyCircleSubCategory;
};


export type MutationCreateOrUpdateCpeStudyGroupCategoryArgs = {
  options: ICreateCpeStudyGroupCategory;
};


export type MutationCreateOrUpdateCpeStudyGroupDetailsArgs = {
  options: ICreateCpeStudyGroupDetails;
};


export type MutationCreateOrUpdateEmailCredentialArgs = {
  options: ICreateEmailCredential;
};


export type MutationCreateOrUpdateEmailTemplateArgs = {
  options: ICreateEmailTemplate;
};


export type MutationCreateOrUpdateFooterCateogryArgs = {
  options: ICreateFooterLinkGroup;
};


export type MutationCreateOrUpdateFooterLinkArgs = {
  options: ICreateFooterLink;
};


export type MutationCreateOrUpdateGalleryEventArgs = {
  options: ICreateGalleryEvent;
};


export type MutationCreateOrUpdateGalleryImageArgs = {
  options: ICreateGalleryImage;
};


export type MutationCreateOrUpdateGalleryYearArgs = {
  options: ICreateGalleryYear;
};


export type MutationCreateOrUpdateGmcsArgs = {
  options: ICreateGmcs;
};


export type MutationCreateOrUpdateHelpDeskCategoryArgs = {
  options: ICreateHelpDeskCategory;
};


export type MutationCreateOrUpdateHelpDeskQaArgs = {
  options: ICreateHelpDeskQa;
};


export type MutationCreateOrUpdateHighLightsArgs = {
  options: ICreateHighLights;
};


export type MutationCreateOrUpdateHomeCounterArgs = {
  options: ICreateHomeCounter;
};


export type MutationCreateOrUpdateHomePortalArgs = {
  options: ICreateHomePortal;
};


export type MutationCreateOrUpdateHomePortalCategoryArgs = {
  options: ICreateHomePortalCategory;
};


export type MutationCreateOrUpdateImagesArgs = {
  options: ICreateImages;
};


export type MutationCreateOrUpdateJobTypeArgs = {
  options: ICreateJobType;
};


export type MutationCreateOrUpdateLawCategoryArgs = {
  options: ICreateLawUpdateCategory;
};


export type MutationCreateOrUpdateLawUpdateArgs = {
  options: ICreateLawUpdate;
};


export type MutationCreateOrUpdateLibraryArgs = {
  options: ICreateLibrary;
};


export type MutationCreateOrUpdateLibraryRegistrationFormArgs = {
  options: ICreateLibraryRegistrationForm;
};


export type MutationCreateOrUpdateLibraryRegistrationLocationArgs = {
  options: ICreateLibraryRegistrationLocation;
};


export type MutationCreateOrUpdateMcsArgs = {
  options: ICreateMcs;
};


export type MutationCreateOrUpdateMemberArgs = {
  options: ICreateMember;
};


export type MutationCreateOrUpdateMemberDesignationArgs = {
  options: ICreateMemberDesignation;
};


export type MutationCreateOrUpdateMemberRegistrationArgs = {
  options: ICreateMemberRegistration;
};


export type MutationCreateOrUpdateMentorshipZoneArgs = {
  options: ICreateMentorshipZone;
};


export type MutationCreateOrUpdateNetworkingZoneArgs = {
  options: ICreateNetworkingZone;
};


export type MutationCreateOrUpdatePastChairpersonArgs = {
  options: ICreatePastChairperson;
};


export type MutationCreateOrUpdatePastCpeEventArgs = {
  options: ICreateCpeEvent;
};


export type MutationCreateOrUpdatePodcastArgs = {
  options: ICreatePodcast;
};


export type MutationCreateOrUpdatePrernaArgs = {
  options: ICreatePrerna;
};


export type MutationCreateOrUpdatePresidentFromWesternRegionArgs = {
  options: ICreatePresidentFromWesternRegion;
};


export type MutationCreateOrUpdateProfessionalToolArgs = {
  options: ICreateProfessionalTool;
};


export type MutationCreateOrUpdateProfessionalToolCategoryArgs = {
  options: ICreateProfessionalToolCategory;
};


export type MutationCreateOrUpdatePublicationArgs = {
  options: ICreatePublication;
};


export type MutationCreateOrUpdatePublicationAndNewsLetterArgs = {
  options: ICreatePublicationAndNewsLetter;
};


export type MutationCreateOrUpdatePublicationCategoryArgs = {
  options: ICreatePublicationCategory;
};


export type MutationCreateOrUpdatePublicationCodeArgs = {
  options: ICreatePublicationCode;
};


export type MutationCreateOrUpdatePublicationPurchaseArgs = {
  options: ICreatePublicationPurchase;
};


export type MutationCreateOrUpdatePublicationUserTypeArgs = {
  options: ICreatePublicationUserType;
};


export type MutationCreateOrUpdateRedirectLinksArgs = {
  options: ICreateRedirectLinks;
};


export type MutationCreateOrUpdateRegionArgs = {
  options: ICreateRegion;
};


export type MutationCreateOrUpdateServiceTypeArgs = {
  options: ICreateServiceType;
};


export type MutationCreateOrUpdateServicesArgs = {
  options: ICreateServices;
};


export type MutationCreateOrUpdateStateArgs = {
  options: ICreateState;
};


export type MutationCreateOrUpdateStudentDownloadArgs = {
  options: ICreateStudentDownload;
};


export type MutationCreateOrUpdateStudentDownloadCategoryArgs = {
  options: ICreateStudentDownloadCategory;
};


export type MutationCreateOrUpdateStudentWicasaCommunityArgs = {
  options: ICreateStudentWicasaCommunity;
};


export type MutationCreateOrUpdateStudyCircleMettingArgs = {
  options: ICreateStudyCircleMetting;
};


export type MutationCreateOrUpdateStudyGroupArgs = {
  options: ICreateStudyGroup;
};


export type MutationCreateOrUpdateStudyGroupCategoryArgs = {
  options: ICreateStudyGroupCategory;
};


export type MutationCreateOrUpdateTaxArgs = {
  options: ICreateTax;
};


export type MutationCreateOrUpdateTitleArgs = {
  options: ICreateTitle;
};


export type MutationCreateOrUpdateVideoGallaryArgs = {
  options: ICreateVideoGallary;
};


export type MutationCreateOrUpdateVisitingCardArgs = {
  options: ICreateVisitingCard;
};


export type MutationCreateOrUpdateWebCastArgs = {
  options: ICreateWebCast;
};


export type MutationCreateOrUpdateWhatWeBrignToYouArgs = {
  options: ICreateWhatWeBrignToYou;
};


export type MutationCreateOrUpdateWicasaNewsLatterArgs = {
  options: ICreateWicasaNewsLatter;
};


export type MutationCreateOrUpdateWircdirectoryArgs = {
  options: ICreateWircDirectory;
};


export type MutationCreateOrUpdateWorkTypeArgs = {
  options: ICreateWorkType;
};


export type MutationCreateOrUpdateYoutubeLinksArgs = {
  options: ICreateYoutube;
};


export type MutationCreateUserResolverArgs = {
  options: ICreateUser;
};


export type MutationDeleteActivityReportArgs = {
  options: IGetById;
};


export type MutationDeleteAdminUserArgs = {
  options: IGetById;
};


export type MutationDeleteArticlesPlacementArgs = {
  options: IGetById;
};


export type MutationDeleteArticlesVacancyCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteBannerGallaryArgs = {
  options: IGetById;
};


export type MutationDeleteBranchContactInformationArgs = {
  options: IGetById;
};


export type MutationDeleteBranchManualArgs = {
  options: IGetById;
};


export type MutationDeleteBranchV2Args = {
  options: IGetById;
};


export type MutationDeleteBranchV2DetailsArgs = {
  options: IGetById;
};


export type MutationDeleteCapacityArgs = {
  options: IGetById;
};


export type MutationDeleteCityArgs = {
  options: IGetById;
};


export type MutationDeleteCmsArgs = {
  options: IGetById;
};


export type MutationDeleteCommitteSubCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCommitteeCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCommitteeDetailsArgs = {
  options: IGetById;
};


export type MutationDeleteCountryArgs = {
  options: IGetById;
};


export type MutationDeleteCoworkingZoneArgs = {
  options: IGetById;
};


export type MutationDeleteCpeEventArgs = {
  options: IGetById;
};


export type MutationDeleteCpeEventRangeArgs = {
  options: IGetById;
};


export type MutationDeleteCpeResourceArgs = {
  options: IGetById;
};


export type MutationDeleteCpeResourceCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyChapterCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyChapterDetailsArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyCircleCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyCircleDetailsArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyCircleSubCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyGroupCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteCpeStudyGroupDetailsArgs = {
  options: IGetById;
};


export type MutationDeleteEmailCredentialArgs = {
  options: IGetById;
};


export type MutationDeleteEmailTemplateArgs = {
  options: IGetById;
};


export type MutationDeleteFooterCateogryArgs = {
  options: IGetById;
};


export type MutationDeleteFooterLinkArgs = {
  options: IGetById;
};


export type MutationDeleteGalleryEventArgs = {
  options: IGetById;
};


export type MutationDeleteGalleryImageArgs = {
  options: IGetById;
};


export type MutationDeleteGalleryYearArgs = {
  options: IGetById;
};


export type MutationDeleteGmcsArgs = {
  options: IGetById;
};


export type MutationDeleteHelpDeskCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteHelpDeskQaArgs = {
  options: IGetById;
};


export type MutationDeleteHighLightsArgs = {
  options: IGetById;
};


export type MutationDeleteHomeCounterArgs = {
  options: IGetById;
};


export type MutationDeleteHomePortalArgs = {
  options: IGetById;
};


export type MutationDeleteHomePortalCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteImagesArgs = {
  options: IGetById;
};


export type MutationDeleteJobTypeArgs = {
  options: IGetById;
};


export type MutationDeleteLawUpdateArgs = {
  options: IGetById;
};


export type MutationDeleteLawUpdateCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteLibraryArgs = {
  options: IGetById;
};


export type MutationDeleteLibraryRegistrationFormArgs = {
  options: IGetById;
};


export type MutationDeleteLibraryRegistrationLocationArgs = {
  options: IGetById;
};


export type MutationDeleteMcsArgs = {
  options: IGetById;
};


export type MutationDeleteMemberArgs = {
  options: IGetById;
};


export type MutationDeleteMemberDesignationArgs = {
  options: IGetById;
};


export type MutationDeleteMemberRegistrationArgs = {
  options: IGetById;
};


export type MutationDeleteMentorshipZoneArgs = {
  options: IGetById;
};


export type MutationDeleteNetworkingZoneArgs = {
  options: IGetById;
};


export type MutationDeletePastChairpersonArgs = {
  options: IGetById;
};


export type MutationDeletePastCpeEventArgs = {
  options: IGetById;
};


export type MutationDeletePodcastArgs = {
  options: IGetById;
};


export type MutationDeletePrernaArgs = {
  options: IGetById;
};


export type MutationDeletePresidentFromWesternRegionArgs = {
  options: IGetById;
};


export type MutationDeleteProfessionalToolArgs = {
  options: IGetById;
};


export type MutationDeleteProfessionalToolCategoryArgs = {
  options: IGetById;
};


export type MutationDeletePublicationArgs = {
  options: IGetById;
};


export type MutationDeletePublicationAndNewsLetterArgs = {
  options: IGetById;
};


export type MutationDeletePublicationCategoryArgs = {
  options: IGetById;
};


export type MutationDeletePublicationCodeArgs = {
  options: IGetById;
};


export type MutationDeletePublicationPurchaseArgs = {
  options: IGetById;
};


export type MutationDeletePublicationUserTypeArgs = {
  options: IGetById;
};


export type MutationDeleteRedirectLinksArgs = {
  options: IGetById;
};


export type MutationDeleteRegionArgs = {
  options: IGetById;
};


export type MutationDeleteServiceTypeArgs = {
  options: IGetById;
};


export type MutationDeleteServicesArgs = {
  options: IGetById;
};


export type MutationDeleteStateArgs = {
  options: IGetById;
};


export type MutationDeleteStudentDownloadArgs = {
  options: IGetById;
};


export type MutationDeleteStudentDownloadCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteStudentWicasaCommunityArgs = {
  options: IGetById;
};


export type MutationDeleteStudyCircleMettingArgs = {
  options: IGetById;
};


export type MutationDeleteStudyGroupArgs = {
  options: IGetById;
};


export type MutationDeleteStudyGroupCategoryArgs = {
  options: IGetById;
};


export type MutationDeleteTaxArgs = {
  options: IGetById;
};


export type MutationDeleteTitleArgs = {
  options: IGetById;
};


export type MutationDeleteVideoGallaryArgs = {
  options: IGetById;
};


export type MutationDeleteWebCastArgs = {
  options: IGetById;
};


export type MutationDeleteWhatWeBrignToYouArgs = {
  options: IGetById;
};


export type MutationDeleteWicasaNewsLatterArgs = {
  options: IGetById;
};


export type MutationDeleteWircdirectoryArgs = {
  options: IGetById;
};


export type MutationDeleteWorkTypeArgs = {
  options: IGetById;
};


export type MutationDeleteYoutubeLinksArgs = {
  options: IGetById;
};


export type MutationForgotMemberPasswordArgs = {
  options: IForgotPasswordInput;
};


export type MutationForgotMemberPasswordPublicationArgs = {
  options: IForgotPasswordInput;
};


export type MutationGenEmailWithMembershipNumberArgs = {
  options: IForgotPasswordInput;
};


export type MutationGenEventPaymnetArgs = {
  options: IEventRegistrationInput;
};


export type MutationGenPaymentArgs = {
  options: IPublicationPaymentGenerate;
};


export type MutationGetAllPaytmIdfromTransactionIdArgs = {
  options: IGetAllTransactionId;
};


export type MutationGetAllPublicationPaymentHistoryArgs = {
  options: IGetPaymentDetails;
};


export type MutationGetMemberInfoByMembershipNumberArgs = {
  options: IGetById;
};


export type MutationGetPublicaLibraryRegistrationArgs = {
  options: ICreateLibraryRegistrationForm;
};


export type MutationGetRedeamCodeArgs = {
  options: IGetById;
};


export type MutationInitiativeMailArgs = {
  options: InitiativeMailInput;
};


export type MutationMemberRegistrationAuthResolverArgs = {
  options: IAuthMember;
};


export type MutationMentorshipPlacementSearchArgs = {
  options: ICoworkingSearch;
};


export type MutationNetworkingZoneSearchArgs = {
  options: ICoworkingSearch;
};


export type MutationNoneMemberRegistrationAuthResolverArgs = {
  options: IAuthMember;
};


export type MutationPrenaSearchArgs = {
  options: IPrernaSearch;
};


export type MutationUpdateAdminUserArgs = {
  options: ICreateUser;
};


export type MutationUpdateMyProfileArgs = {
  options: ICreateMemberRegistration;
};


export type MutationUpdateNewPasswordArgs = {
  options: IForgotPasswordUpdateInput;
};


export type MutationUpdateUserPasswordArgs = {
  options: IChangePassword;
};


export type MutationUpdateUserProfileArgs = {
  options: ICreateUser;
};


export type MutationVerifyEmailWithMembershipNumberArgs = {
  options: IGetEmailInput;
};

export type NetworkingZone = {
  __typename?: 'NetworkingZone';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  capacity?: Maybe<Capacity>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  image: Scalars['String']['output'];
  info: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  jobType?: Maybe<JobType>;
  location: Scalars['String']['output'];
  mobileNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  position: Scalars['String']['output'];
  profile: Scalars['String']['output'];
  serviceType?: Maybe<ServiceType>;
  services?: Maybe<Services>;
  state?: Maybe<State>;
  subLocation: Scalars['String']['output'];
  workType?: Maybe<WorkType>;
};

export type PastChairperson = {
  __typename?: 'PastChairperson';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  endYear: Scalars['DateTime']['output'];
  fax: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  memberDesignation?: Maybe<MemberDesignation>;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  officeAddress: Scalars['String']['output'];
  startYear: Scalars['DateTime']['output'];
  telOffice: Scalars['String']['output'];
  telResidential: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type PaymentStatusResponseForPublication = {
  __typename?: 'PaymentStatusResponseForPublication';
  publicationName: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  totalAmt: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type PaymentTranscation = {
  __typename?: 'PaymentTranscation';
  BANKNAME: Scalars['String']['output'];
  BANKTXNID: Scalars['String']['output'];
  CHECKSUMHASH: Scalars['String']['output'];
  CURRENCY: Scalars['String']['output'];
  GATEWAYNAME: Scalars['String']['output'];
  MID: Scalars['String']['output'];
  ORDERID: Scalars['String']['output'];
  PAYMENTMODE: Scalars['String']['output'];
  RESPCODE: Scalars['String']['output'];
  RESPMSG: Scalars['String']['output'];
  STATUS: Scalars['String']['output'];
  TXNAMOUNT: Scalars['String']['output'];
  TXNDATE: Scalars['String']['output'];
  TXNID: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
};

export type Podcast = {
  __typename?: 'Podcast';
  _id: Scalars['String']['output'];
  iframe: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Prerna = {
  __typename?: 'Prerna';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  area: Scalars['String']['output'];
  capacity?: Maybe<Capacity>;
  city?: Maybe<City>;
  country?: Maybe<Country>;
  date: Scalars['String']['output'];
  email: Scalars['String']['output'];
  image: Scalars['String']['output'];
  info: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  jobType?: Maybe<JobType>;
  location: Scalars['String']['output'];
  mobileNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pincode: Scalars['String']['output'];
  position: Scalars['String']['output'];
  profile: Scalars['String']['output'];
  serviceType?: Maybe<ServiceType>;
  services?: Maybe<Services>;
  state?: Maybe<State>;
  subLocation: Scalars['String']['output'];
  workType?: Maybe<WorkType>;
};

export type PresidentFromWesternRegion = {
  __typename?: 'PresidentFromWesternRegion';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  endYear: Scalars['String']['output'];
  fax: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  memberDesignation?: Maybe<MemberDesignation>;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  officeAddress: Scalars['String']['output'];
  startYear: Scalars['String']['output'];
  telOffice: Scalars['String']['output'];
  telResidential: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type ProfessionalTool = {
  __typename?: 'ProfessionalTool';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  professionalToolCategory?: Maybe<ProfessionalToolCategory>;
  uri: Scalars['String']['output'];
  versionCode: Scalars['String']['output'];
};

export type ProfessionalToolCategory = {
  __typename?: 'ProfessionalToolCategory';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Publication = {
  __typename?: 'Publication';
  _id: Scalars['String']['output'];
  category?: Maybe<PublicationCategory>;
  cgst: Scalars['String']['output'];
  igst: Scalars['String']['output'];
  igstState?: Maybe<State>;
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isFree: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pdf: Scalars['String']['output'];
  price: Scalars['String']['output'];
  qty: Scalars['String']['output'];
  sgst: Scalars['String']['output'];
  tax?: Maybe<Tax>;
};

export type PublicationAndNewsLetter = {
  __typename?: 'PublicationAndNewsLetter';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  header: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isExternal: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectLink: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  title: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type PublicationBilling = {
  __typename?: 'PublicationBilling';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  altPhone: Scalars['String']['output'];
  associatedUser?: Maybe<User>;
  city?: Maybe<City>;
  comment: Scalars['String']['output'];
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gst: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isDeliverd: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  publicationPurchase: PublicationPurchase;
  publicationUserType?: Maybe<PublicationUserType>;
  purchaseQty: Scalars['String']['output'];
  state?: Maybe<State>;
  transactionHistory: TransactionHistory;
  zip: Scalars['String']['output'];
};

export type PublicationCategory = {
  __typename?: 'PublicationCategory';
  _id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PublicationCode = {
  __typename?: 'PublicationCode';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  usedBy?: Maybe<User>;
};

export type PublicationPurchase = {
  __typename?: 'PublicationPurchase';
  _id: Scalars['String']['output'];
  assigendUser?: Maybe<User>;
  isActive: Scalars['Boolean']['output'];
  isFromAdmin: Scalars['Boolean']['output'];
  isPurchaseCompleted: Scalars['Boolean']['output'];
  publication?: Maybe<Publication>;
  purchaseDate: Scalars['DateTime']['output'];
};

export type PublicationUserType = {
  __typename?: 'PublicationUserType';
  _id: Scalars['String']['output'];
  courierPrice: Scalars['String']['output'];
  couriercgst: Scalars['String']['output'];
  courierigst: Scalars['String']['output'];
  couriersgst: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  publication?: Maybe<Publication>;
};

export type Query = {
  __typename?: 'Query';
  approveMemberRegistrationById: IStatusResponse;
  getAboutChairperson?: Maybe<AboutChairperson>;
  getActivityReportById: ActivityReport;
  getAdminUserById: User;
  getAllActivityReport: Array<ActivityReport>;
  getAllAdminUserInfo: Array<User>;
  getAllArticlesPlacement: Array<ArticlesPlacement>;
  getAllArticlesPlacementFront: Array<ArticlesPlacement>;
  getAllArticlesVacancyCategory: Array<ArticlesVacancyCategory>;
  getAllArticlesVacancyCategoryFront: Array<ArticlesVacancyCategory>;
  getAllBannerGallary: Array<BannerGallary>;
  getAllBranchContactInformation: Array<BranchContactInformation>;
  getAllBranchManual: Array<BranchManual>;
  getAllBranchV2: Array<BranchV2>;
  getAllBranchV2Details: Array<BranchV2Details>;
  getAllCapacity: Array<Capacity>;
  getAllCapacityFront: Array<Capacity>;
  getAllCity: Array<City>;
  getAllCms: Array<Cms>;
  getAllCommitteSubCategory: Array<CommitteSubCategory>;
  getAllCommitteeCategory: Array<CommitteeCategory>;
  getAllCommitteeDetails: Array<CommitteeDetails>;
  getAllCountry: Array<Country>;
  getAllCoworkingZone: Array<CoworkingZone>;
  getAllCoworkingZoneFront: Array<CoworkingZone>;
  getAllCpeEvent: Array<CpeEvent>;
  getAllCpeEventRange: Array<CpeEventRange>;
  getAllCpePastEvent: Array<CpeEvent>;
  getAllCpeResource: Array<CpeResource>;
  getAllCpeResourceCategory: Array<CpeResourceCategory>;
  getAllCpeStudyChapterCategory: Array<CpeStudyChapterCategory>;
  getAllCpeStudyChapterDetails: Array<CpeStudyChapterDetails>;
  getAllCpeStudyCircleCategory: Array<CpeStudyCircleCategory>;
  getAllCpeStudyCircleDetails: Array<CpeStudyCircleDetails>;
  getAllCpeStudyCircleSubCategory: Array<CpeStudyCircleSubCategory>;
  getAllCpeStudyGroupCategory: Array<CpeStudyGroupCategory>;
  getAllCpeStudyGroupDetails: Array<CpeStudyGroupDetails>;
  getAllEmailCredentials: Array<EmailCredential>;
  getAllEmailTemplate: Array<EmailTemplate>;
  getAllFooterCateogry: Array<FooterLinkGroup>;
  getAllFooterLink: Array<FooterLink>;
  getAllGalleryEvent: Array<GalleryEvent>;
  getAllGalleryImage: Array<GalleryImage>;
  getAllGalleryYear: Array<GalleryYear>;
  getAllGmcs: Array<Gmcs>;
  getAllHelpDeskCategory: Array<HelpDeskCategory>;
  getAllHelpDeskQA: Array<HelpDeskQa>;
  getAllHighLights: Array<HighLights>;
  getAllHomeCounter: Array<HomeCounter>;
  getAllHomePortal: Array<HomePortal>;
  getAllHomePortalCategory: Array<HomePortalCategory>;
  getAllImages: Array<Images>;
  getAllLawUpdate: Array<LawUpdate>;
  getAllLawUpdateCategory: Array<LawUpdateCategory>;
  getAllLibrary: Array<Library>;
  getAllLibraryRegistrationForm: Array<LibraryRegistrationForm>;
  getAllLibraryRegistrationLocation: Array<LibraryRegistrationLocation>;
  getAllMcs: Array<Mcs>;
  getAllMember: Array<Member>;
  getAllMemberDesignation: Array<MemberDesignation>;
  getAllMemberRegistration: Array<MemberRegistration>;
  getAllMentorshipZone: Array<MentorshipZone>;
  getAllMentorshipZoneFront: Array<MentorshipZone>;
  getAllNetworkingZone: Array<NetworkingZone>;
  getAllNetworkingZoneFront: Array<NetworkingZone>;
  getAllPastChairperson: Array<PastChairperson>;
  getAllPodcast: Array<Podcast>;
  getAllPrerna: Array<Prerna>;
  getAllPrernaFront: Array<Prerna>;
  getAllPresidentFromWesternRegion: Array<PresidentFromWesternRegion>;
  getAllProfessionalTool: Array<ProfessionalTool>;
  getAllProfessionalToolCategory: Array<ProfessionalToolCategory>;
  getAllPublication: Array<Publication>;
  getAllPublicationCategory: Array<PublicationCategory>;
  getAllPublicationCode: Array<PublicationCode>;
  getAllPublicationPurchase: Array<PublicationPurchase>;
  getAllPublicationUserType: Array<PublicationUserType>;
  getAllRedirectLink: Array<RedirectLinks>;
  getAllRegion: Array<Region>;
  getAllServiceType: Array<ServiceType>;
  getAllServiceTypeFront: Array<ServiceType>;
  getAllServices: Array<Services>;
  getAllServicesFront: Array<Services>;
  getAllState: Array<State>;
  getAllStudentDownload: Array<StudentDownload>;
  getAllStudentDownloadCategory: Array<StudentDownloadCategory>;
  getAllStudentWicasaCommunity: Array<StudentWicasaCommunity>;
  getAllStudyCircleMetting: Array<StudyCircleMetting>;
  getAllStudyGroup: Array<StudyGroup>;
  getAllStudyGroupCategory: Array<StudyGroupCategory>;
  getAllTax: Array<Tax>;
  getAllTitle: Array<Title>;
  getAllUser: Array<User>;
  getAllVideoGallary: Array<VideoGallary>;
  getAllWhatWeBrignToYou: Array<WhatWeBrignToYou>;
  getAllWicasaNewsLatter: Array<WicasaNewsLatter>;
  getAllWircdirectory: Array<WircDirectory>;
  getAllWorkType: Array<WorkType>;
  getAllWorkTypeFront: Array<WorkType>;
  getAllYoutubeLinks: Array<YoutubeLinks>;
  getAlljobType: Array<JobType>;
  getAlljobTypeFront: Array<JobType>;
  getAllpublicationbillingdetail: Array<PublicationBilling>;
  getAllwebCast: Array<WebCast>;
  getArticlesPlacementById: ArticlesPlacement;
  getArticlesVacancyCategoryById: ArticlesVacancyCategory;
  getBannerGallaryById: BannerGallary;
  getBranchContactInformationById: BranchContactInformation;
  getBranchManualById: BranchManual;
  getBranchV2ById: BranchV2;
  getBranchV2DetailsById: BranchV2Details;
  getCapacityById: WorkType;
  getCityById: City;
  getCmsByCustId: Cms;
  getCmsById: Cms;
  getCommitteSubCategoryById: CommitteSubCategory;
  getCommitteeCategoryById: CommitteeCategory;
  getCommitteeDetailsById: CommitteeDetails;
  getCompanyDetails?: Maybe<CompanySetup>;
  getCount: IEventRegistrationCountRespose;
  getCountByCpeEvent: IEventRegistrationCount;
  getCountByStudyEvent: IEventRegistrationCount;
  getCountryById: Country;
  getCoworkingZoneById: CoworkingZone;
  getCpeEventById: CpeEvent;
  getCpeEventPastById: CpeEvent;
  getCpeEventRangeByCpeId: Array<CpeEventRange>;
  getCpeEventRangeById: CpeEventRange;
  getCpeResourceById: CpeResource;
  getCpeResourceCategoryById: CpeResourceCategory;
  getCpeStudyChapterCategoryById: CpeStudyChapterCategory;
  getCpeStudyChapterDetailsByCategoryId: Array<CpeStudyChapterDetails>;
  getCpeStudyChapterDetailsById: CpeStudyChapterDetails;
  getCpeStudyCircleCategoryById: CpeStudyCircleCategory;
  getCpeStudyCircleDetailsById: CpeStudyCircleDetails;
  getCpeStudyCircleSubCategoryById: CpeStudyCircleSubCategory;
  getCpeStudyGroupCategoryById: CpeStudyGroupCategory;
  getCpeStudyGroupDetailsByCategoryId: Array<CpeStudyGroupDetails>;
  getCpeStudyGroupDetailsById: CpeStudyGroupDetails;
  getEmailCredentialsById: EmailCredential;
  getEmailTemplateById: EmailTemplate;
  getFooterCateogryById: FooterLinkGroup;
  getFooterLinkById: FooterLink;
  getGalleryEventById: GalleryEvent;
  getGalleryImageById: GalleryImage;
  getGalleryYearById: GalleryYear;
  getGmcsById: Gmcs;
  getHelpDeskCategoryById: HelpDeskCategory;
  getHelpDeskQAByCategoryId: Array<HelpDeskQa>;
  getHelpDeskQAById: HelpDeskQa;
  getHighLightsById: HighLights;
  getHomeCounterById: HomeCounter;
  getHomePortalById: HomePortal;
  getHomePortalCategoryById: HomePortalCategory;
  getImagesByCustId: Images;
  getImagesId: Images;
  getJobTypeById: JobType;
  getLawUpdateById: LawUpdate;
  getLawUpdateCategoryById: LawUpdateCategory;
  getLibraryById: Library;
  getLibraryCount: Array<ILibraryCount>;
  getLibraryRegistrationFormById: LibraryRegistrationForm;
  getLibraryRegistrationLocationById: LibraryRegistrationLocation;
  getMcsById: Mcs;
  getMemberById: Member;
  getMemberDesignationById: MemberDesignation;
  getMemberRegistrationById: MemberRegistration;
  getMentorshipZoneById: MentorshipZone;
  getMyEventList: Array<RegistrationList>;
  getNetworkingZoneById: NetworkingZone;
  getPastChairpersonById: PastChairperson;
  getPaymentDetailsById: PaymentTranscation;
  getPaymentDetailsPublications: PaymentStatusResponseForPublication;
  getPaymentReciptById: EventTransactionHistory;
  getPodcastById: Podcast;
  getPrernaById: Prerna;
  getPresidentFromWesternRegionById: PresidentFromWesternRegion;
  getProfessionalToolById: ProfessionalTool;
  getProfessionalToolCategoryById: ProfessionalToolCategory;
  getPublicationAndNewsLetter: Array<PublicationAndNewsLetter>;
  getPublicationAndNewsLetterById: PublicationAndNewsLetter;
  getPublicationById: Publication;
  getPublicationCategoryById: PublicationCategory;
  getPublicationCodeAccessById: IStatusResponse;
  getPublicationCodeById: PublicationCode;
  getPublicationPurchaseById: PublicationPurchase;
  getPublicationUserTypeById: PublicationUserType;
  getPublicationUserTypeByPublicationId: Array<PublicationUserType>;
  getRedirectLinksById: RedirectLinks;
  getRedirectLinksPageById?: Maybe<RedirectLinks>;
  getRegionById: Region;
  getServiceTypeById: ServiceType;
  getServicesById: Services;
  getStateById: State;
  getStudentDownloadById: StudentDownload;
  getStudentDownloadCategoryById: StudentDownloadCategory;
  getStudentWicasaCommunityById: StudentWicasaCommunity;
  getStudyCircleMettingById: StudyCircleMetting;
  getStudyGroupById: StudyGroup;
  getStudyGroupCategoryById: StudyGroupCategory;
  getTaxById: Tax;
  getTitleById: Title;
  getUserInformation?: Maybe<User>;
  getVideoGallaryById: VideoGallary;
  getWebCastById: WebCast;
  getWhatWeBrignToYouById: WhatWeBrignToYou;
  getWicasaNewsLatterById: WicasaNewsLatter;
  getWircdirectoryById: WircDirectory;
  getWorkTypeById: WorkType;
  getYoutubeLinksById: YoutubeLinks;
  hello: Scalars['String']['output'];
  isUserPurchasePublication: IStatusResponse;
  myHelpDeskPost: Array<HelpDeskQa>;
  myProfileInformation?: Maybe<MemberRegistration>;
  myVacancyPost: IVacancyPost;
  userPurchasePublication: Array<PublicationPurchase>;
};


export type QueryApproveMemberRegistrationByIdArgs = {
  options: IGetById;
};


export type QueryGetActivityReportByIdArgs = {
  options: IGetById;
};


export type QueryGetAdminUserByIdArgs = {
  options: IGetById;
};


export type QueryGetArticlesPlacementByIdArgs = {
  options: IGetById;
};


export type QueryGetArticlesVacancyCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetBannerGallaryByIdArgs = {
  options: IGetById;
};


export type QueryGetBranchContactInformationByIdArgs = {
  options: IGetById;
};


export type QueryGetBranchManualByIdArgs = {
  options: IGetById;
};


export type QueryGetBranchV2ByIdArgs = {
  options: IGetById;
};


export type QueryGetBranchV2DetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetCapacityByIdArgs = {
  options: IGetById;
};


export type QueryGetCityByIdArgs = {
  options: IGetById;
};


export type QueryGetCmsByCustIdArgs = {
  options: IGetById;
};


export type QueryGetCmsByIdArgs = {
  options: IGetById;
};


export type QueryGetCommitteSubCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCommitteeCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCommitteeDetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetCountByCpeEventArgs = {
  options: IGetById;
};


export type QueryGetCountByStudyEventArgs = {
  options: IGetById;
};


export type QueryGetCountryByIdArgs = {
  options: IGetById;
};


export type QueryGetCoworkingZoneByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeEventByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeEventPastByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeEventRangeByCpeIdArgs = {
  options: IGetById;
};


export type QueryGetCpeEventRangeByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeResourceByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeResourceCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyChapterCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyChapterDetailsByCategoryIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyChapterDetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyCircleCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyCircleDetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyCircleSubCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyGroupCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyGroupDetailsByCategoryIdArgs = {
  options: IGetById;
};


export type QueryGetCpeStudyGroupDetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetEmailCredentialsByIdArgs = {
  options: IGetById;
};


export type QueryGetEmailTemplateByIdArgs = {
  options: IGetById;
};


export type QueryGetFooterCateogryByIdArgs = {
  options: IGetById;
};


export type QueryGetFooterLinkByIdArgs = {
  options: IGetById;
};


export type QueryGetGalleryEventByIdArgs = {
  options: IGetById;
};


export type QueryGetGalleryImageByIdArgs = {
  options: IGetById;
};


export type QueryGetGalleryYearByIdArgs = {
  options: IGetById;
};


export type QueryGetGmcsByIdArgs = {
  options: IGetById;
};


export type QueryGetHelpDeskCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetHelpDeskQaByCategoryIdArgs = {
  options: IGetById;
};


export type QueryGetHelpDeskQaByIdArgs = {
  options: IGetById;
};


export type QueryGetHighLightsByIdArgs = {
  options: IGetById;
};


export type QueryGetHomeCounterByIdArgs = {
  options: IGetById;
};


export type QueryGetHomePortalByIdArgs = {
  options: IGetById;
};


export type QueryGetHomePortalCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetImagesByCustIdArgs = {
  options: IGetById;
};


export type QueryGetImagesIdArgs = {
  options: IGetById;
};


export type QueryGetJobTypeByIdArgs = {
  options: IGetById;
};


export type QueryGetLawUpdateByIdArgs = {
  options: IGetById;
};


export type QueryGetLawUpdateCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetLibraryByIdArgs = {
  options: IGetById;
};


export type QueryGetLibraryRegistrationFormByIdArgs = {
  options: IGetById;
};


export type QueryGetLibraryRegistrationLocationByIdArgs = {
  options: IGetById;
};


export type QueryGetMcsByIdArgs = {
  options: IGetById;
};


export type QueryGetMemberByIdArgs = {
  options: IGetById;
};


export type QueryGetMemberDesignationByIdArgs = {
  options: IGetById;
};


export type QueryGetMemberRegistrationByIdArgs = {
  options: IGetById;
};


export type QueryGetMentorshipZoneByIdArgs = {
  options: IGetById;
};


export type QueryGetNetworkingZoneByIdArgs = {
  options: IGetById;
};


export type QueryGetPastChairpersonByIdArgs = {
  options: IGetById;
};


export type QueryGetPaymentDetailsByIdArgs = {
  options: IGetById;
};


export type QueryGetPaymentDetailsPublicationsArgs = {
  options: IGetById;
};


export type QueryGetPaymentReciptByIdArgs = {
  options: IGetById;
};


export type QueryGetPodcastByIdArgs = {
  options: IGetById;
};


export type QueryGetPrernaByIdArgs = {
  options: IGetById;
};


export type QueryGetPresidentFromWesternRegionByIdArgs = {
  options: IGetById;
};


export type QueryGetProfessionalToolByIdArgs = {
  options: IGetById;
};


export type QueryGetProfessionalToolCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationAndNewsLetterByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationCodeByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationPurchaseByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationUserTypeByIdArgs = {
  options: IGetById;
};


export type QueryGetPublicationUserTypeByPublicationIdArgs = {
  options: IGetById;
};


export type QueryGetRedirectLinksByIdArgs = {
  options: IGetById;
};


export type QueryGetRedirectLinksPageByIdArgs = {
  options: IGetById;
};


export type QueryGetRegionByIdArgs = {
  options: IGetById;
};


export type QueryGetServiceTypeByIdArgs = {
  options: IGetById;
};


export type QueryGetServicesByIdArgs = {
  options: IGetById;
};


export type QueryGetStateByIdArgs = {
  options: IGetById;
};


export type QueryGetStudentDownloadByIdArgs = {
  options: IGetById;
};


export type QueryGetStudentDownloadCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetStudentWicasaCommunityByIdArgs = {
  options: IGetById;
};


export type QueryGetStudyCircleMettingByIdArgs = {
  options: IGetById;
};


export type QueryGetStudyGroupByIdArgs = {
  options: IGetById;
};


export type QueryGetStudyGroupCategoryByIdArgs = {
  options: IGetById;
};


export type QueryGetTaxByIdArgs = {
  options: IGetById;
};


export type QueryGetTitleByIdArgs = {
  options: IGetById;
};


export type QueryGetVideoGallaryByIdArgs = {
  options: IGetById;
};


export type QueryGetWebCastByIdArgs = {
  options: IGetById;
};


export type QueryGetWhatWeBrignToYouByIdArgs = {
  options: IGetById;
};


export type QueryGetWicasaNewsLatterByIdArgs = {
  options: IGetById;
};


export type QueryGetWircdirectoryByIdArgs = {
  options: IGetById;
};


export type QueryGetWorkTypeByIdArgs = {
  options: IGetById;
};


export type QueryGetYoutubeLinksByIdArgs = {
  options: IGetById;
};


export type QueryIsUserPurchasePublicationArgs = {
  publicationId: Scalars['String']['input'];
};

export type RedirectLinks = {
  __typename?: 'RedirectLinks';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  urlFrom: Scalars['String']['output'];
  urlTo: Scalars['String']['output'];
};

export type Region = {
  __typename?: 'Region';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type RegistrationList = {
  __typename?: 'RegistrationList';
  eventAddress: Scalars['String']['output'];
  eventDate: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  personCount: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  totalPay: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type ServiceType = {
  __typename?: 'ServiceType';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type Services = {
  __typename?: 'Services';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type State = {
  __typename?: 'State';
  _id: Scalars['String']['output'];
  country?: Maybe<Country>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type StudentDownload = {
  __typename?: 'StudentDownload';
  _id: Scalars['String']['output'];
  category?: Maybe<StudentDownloadCategory>;
  date: Scalars['DateTime']['output'];
  downloads: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  speaker: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type StudentDownloadCategory = {
  __typename?: 'StudentDownloadCategory';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type StudentWicasaCommunity = {
  __typename?: 'StudentWicasaCommunity';
  _id: Scalars['String']['output'];
  altEmail: Scalars['String']['output'];
  altPhone: Scalars['String']['output'];
  email: Scalars['String']['output'];
  facebook: Scalars['String']['output'];
  img: Scalars['String']['output'];
  instagram: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  linkedIn: Scalars['String']['output'];
  memberDesignation?: Maybe<MemberDesignation>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  twitter: Scalars['String']['output'];
};

export type StudyCircleMetting = {
  __typename?: 'StudyCircleMetting';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  orgenizedBy: Scalars['String']['output'];
  speakers: Scalars['String']['output'];
  subject: Scalars['String']['output'];
  time: Scalars['String']['output'];
  venue: Scalars['String']['output'];
};

export type StudyGroup = {
  __typename?: 'StudyGroup';
  _id: Scalars['String']['output'];
  capacity: Scalars['String']['output'];
  cgst: Scalars['Float']['output'];
  cms: Scalars['String']['output'];
  cutoffDate?: Maybe<Scalars['DateTime']['output']>;
  date1: Scalars['DateTime']['output'];
  date2: Scalars['DateTime']['output'];
  igst: Scalars['Float']['output'];
  igstState?: Maybe<State>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sgst: Scalars['Float']['output'];
  studyGroupCategory?: Maybe<StudyGroupCategory>;
  tax?: Maybe<Tax>;
};

export type StudyGroupCategory = {
  __typename?: 'StudyGroupCategory';
  _id: Scalars['String']['output'];
  capacity: Scalars['String']['output'];
  cgst: Scalars['Float']['output'];
  igst: Scalars['Float']['output'];
  igstState?: Maybe<State>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  sgst: Scalars['Float']['output'];
};

export type Tax = {
  __typename?: 'Tax';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TempMemberRegistration = {
  applicantFullName?: InputMaybe<Scalars['String']['input']>;
  membershipId?: InputMaybe<Scalars['String']['input']>;
  professionalAddress1?: InputMaybe<Scalars['String']['input']>;
  professionalAddress2?: InputMaybe<Scalars['String']['input']>;
  professionalAddress3?: InputMaybe<Scalars['String']['input']>;
  professionalAddress4?: InputMaybe<Scalars['String']['input']>;
  professionalCity?: InputMaybe<Scalars['String']['input']>;
  professionalCountry?: InputMaybe<Scalars['String']['input']>;
  professionalDistrict?: InputMaybe<Scalars['String']['input']>;
  professionalEmail?: InputMaybe<Scalars['String']['input']>;
  professionalGst1?: InputMaybe<Scalars['String']['input']>;
  professionalMobile?: InputMaybe<Scalars['String']['input']>;
  professionalPinCode?: InputMaybe<Scalars['String']['input']>;
  professionalState?: InputMaybe<Scalars['String']['input']>;
};

export type Title = {
  __typename?: 'Title';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type TransactionHistory = {
  __typename?: 'TransactionHistory';
  CALLBACK_URL: Scalars['String']['output'];
  CHANNEL_ID: Scalars['String']['output'];
  CHECKSUMHASH: Scalars['String']['output'];
  CUST_ID: Scalars['String']['output'];
  EMAIL: Scalars['String']['output'];
  MID: Scalars['String']['output'];
  ORDER_ID: Scalars['String']['output'];
  TXN_AMOUNT: Scalars['String']['output'];
  WEBSITE: Scalars['String']['output'];
  _id: Scalars['String']['output'];
  customId: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  publication?: Maybe<Publication>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  address: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gstin: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdmin: Scalars['Boolean']['output'];
  isSuperAdmin: Scalars['Boolean']['output'];
  memberRegistration: MemberRegistration;
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  registerdNumber: Scalars['String']['output'];
};

export type VideoGallary = {
  __typename?: 'VideoGallary';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type WebCast = {
  __typename?: 'WebCast';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  file: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  uri: Scalars['String']['output'];
};

export type WhatWeBrignToYou = {
  __typename?: 'WhatWeBrignToYou';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isWIRC: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectLink: Scalars['String']['output'];
};

export type WicasaNewsLatter = {
  __typename?: 'WicasaNewsLatter';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  iswirc: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pdf: Scalars['String']['output'];
  redirectlink: Scalars['String']['output'];
  showIndex: Scalars['String']['output'];
};

export type WircDirectory = {
  __typename?: 'WircDirectory';
  _id: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  uri: Scalars['String']['output'];
  year: Scalars['String']['output'];
};

export type WorkType = {
  __typename?: 'WorkType';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type YoutubeLinks = {
  __typename?: 'YoutubeLinks';
  _id: Scalars['String']['output'];
  category?: Maybe<WhatWeBrignToYou>;
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  redirectlink: Scalars['String']['output'];
};

export type UpdateMyProfileMutationVariables = Exact<{
  options: ICreateMemberRegistration;
}>;


export type UpdateMyProfileMutation = { __typename?: 'Mutation', updateMyProfile: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type MemberRegistrationAuthResolverMutationVariables = Exact<{
  options: IAuthMember;
}>;


export type MemberRegistrationAuthResolverMutation = { __typename?: 'Mutation', memberRegistrationAuthResolver: { __typename?: 'IAuthResoverResponse', success: boolean, msg: string, jwt: string, email: string, name: string } };

export type GetMemberInfoByMembershipNumberMutationVariables = Exact<{
  options: IGetById;
}>;


export type GetMemberInfoByMembershipNumberMutation = { __typename?: 'Mutation', getMemberInfoByMembershipNumber?: { __typename?: 'IUserInfoByMembershipNumber', isData: boolean, name: string, organization: string, email: string, contactInfo: string, gst: string, address: string, country: string, state: string, city: string, pincode: string } | null };

export type GenEventPaymnetMutationVariables = Exact<{
  options: IEventRegistrationInput;
}>;


export type GenEventPaymnetMutation = { __typename?: 'Mutation', genEventPaymnet: { __typename?: 'IPaymentResponse', success: boolean, msg: string, data?: { __typename?: 'IPaymentField', MID: string, WEBSITE: string, CHANNEL_ID: string, CUST_ID: string, ORDER_ID: string, TXN_AMOUNT: string, CALLBACK_URL: string, EMAIL: string, CHECKSUMHASH: string, TOKEN: string } | null } };

export type AddAttendenceMutationVariables = Exact<{
  options: IAddAttendenceInput;
}>;


export type AddAttendenceMutation = { __typename?: 'Mutation', addAttendence: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type GetAllCpeEventQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCpeEventQuery = { __typename?: 'Query', getAllCpeEvent: Array<{ __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean, igstState?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null }> };

export type GetAllStateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllStateQuery = { __typename?: 'Query', getAllState: Array<{ __typename?: 'State', _id: string, name: string, isActive: boolean, country?: { __typename?: 'Country', _id: string, name: string, isActive: boolean } | null }> };

export type GetAllCountryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountryQuery = { __typename?: 'Query', getAllCountry: Array<{ __typename?: 'Country', _id: string, name: string, isActive: boolean }> };

export type GetAllCityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCityQuery = { __typename?: 'Query', getAllCity: Array<{ __typename?: 'City', _id: string, name: string, isActive: boolean, country?: { __typename?: 'Country', _id: string, name: string, isActive: boolean } | null, state?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null }> };

export type GetTitleByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetTitleByIdQuery = { __typename?: 'Query', getTitleById: { __typename?: 'Title', _id: string, name: string, isActive: boolean } };

export type GetRegionByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetRegionByIdQuery = { __typename?: 'Query', getRegionById: { __typename?: 'Region', _id: string, name: string, isActive: boolean } };

export type GetAllRegionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRegionQuery = { __typename?: 'Query', getAllRegion: Array<{ __typename?: 'Region', _id: string, name: string, isActive: boolean }> };

export type GetAllTitleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTitleQuery = { __typename?: 'Query', getAllTitle: Array<{ __typename?: 'Title', _id: string, name: string, isActive: boolean }> };

export type MyProfileInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileInformationQuery = { __typename?: 'Query', myProfileInformation?: { __typename?: 'MemberRegistration', _id: string, firstName: string, lastName: string, middleName: string, hash: string, email: string, userType: string, membershipNo: string, username: string, gstNo: string, tradeName: string, address1: string, address2: string, pinCode: string, phone: string, isApproved: boolean, isActive: boolean, regionType?: { __typename?: 'Region', _id: string, name: string, isActive: boolean } | null, title?: { __typename?: 'Title', _id: string, name: string, isActive: boolean } | null, country?: { __typename?: 'Country', _id: string, name: string, isActive: boolean } | null, state?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null, city?: { __typename?: 'City', _id: string, name: string, isActive: boolean } | null, approvedBy?: { __typename?: 'User', _id: string, name: string, isActive: boolean } | null } | null };

export type GetCpeEventByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCpeEventByIdQuery = { __typename?: 'Query', getCpeEventById: { __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean, igstState?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null } };

export type GetCpeEventRangeByCpeIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCpeEventRangeByCpeIdQuery = { __typename?: 'Query', getCpeEventRangeByCpeId: Array<{ __typename?: 'CpeEventRange', _id: string, name: string, description: string, price: string, isForMember: boolean, isForNonMember: boolean, isForstudent: boolean, isActive: boolean }> };

export type GetCountByCpeEventQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCountByCpeEventQuery = { __typename?: 'Query', getCountByCpeEvent: { __typename?: 'IEventRegistrationCount', eventId: string, occupied: string } };


export const UpdateMyProfileDocument = gql`
    mutation UpdateMyProfile($options: ICreateMemberRegistration!) {
  updateMyProfile(options: $options) {
    success
    msg
    data
  }
}
    `;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, options);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
export const MemberRegistrationAuthResolverDocument = gql`
    mutation MemberRegistrationAuthResolver($options: IAuthMember!) {
  memberRegistrationAuthResolver(options: $options) {
    success
    msg
    jwt
    email
    name
  }
}
    `;
export type MemberRegistrationAuthResolverMutationFn = Apollo.MutationFunction<MemberRegistrationAuthResolverMutation, MemberRegistrationAuthResolverMutationVariables>;

/**
 * __useMemberRegistrationAuthResolverMutation__
 *
 * To run a mutation, you first call `useMemberRegistrationAuthResolverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMemberRegistrationAuthResolverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [memberRegistrationAuthResolverMutation, { data, loading, error }] = useMemberRegistrationAuthResolverMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useMemberRegistrationAuthResolverMutation(baseOptions?: Apollo.MutationHookOptions<MemberRegistrationAuthResolverMutation, MemberRegistrationAuthResolverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MemberRegistrationAuthResolverMutation, MemberRegistrationAuthResolverMutationVariables>(MemberRegistrationAuthResolverDocument, options);
      }
export type MemberRegistrationAuthResolverMutationHookResult = ReturnType<typeof useMemberRegistrationAuthResolverMutation>;
export type MemberRegistrationAuthResolverMutationResult = Apollo.MutationResult<MemberRegistrationAuthResolverMutation>;
export type MemberRegistrationAuthResolverMutationOptions = Apollo.BaseMutationOptions<MemberRegistrationAuthResolverMutation, MemberRegistrationAuthResolverMutationVariables>;
export const GetMemberInfoByMembershipNumberDocument = gql`
    mutation GetMemberInfoByMembershipNumber($options: IGetByID!) {
  getMemberInfoByMembershipNumber(options: $options) {
    isData
    name
    organization
    email
    contactInfo
    gst
    address
    country
    state
    city
    pincode
  }
}
    `;
export type GetMemberInfoByMembershipNumberMutationFn = Apollo.MutationFunction<GetMemberInfoByMembershipNumberMutation, GetMemberInfoByMembershipNumberMutationVariables>;

/**
 * __useGetMemberInfoByMembershipNumberMutation__
 *
 * To run a mutation, you first call `useGetMemberInfoByMembershipNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetMemberInfoByMembershipNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getMemberInfoByMembershipNumberMutation, { data, loading, error }] = useGetMemberInfoByMembershipNumberMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMemberInfoByMembershipNumberMutation(baseOptions?: Apollo.MutationHookOptions<GetMemberInfoByMembershipNumberMutation, GetMemberInfoByMembershipNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetMemberInfoByMembershipNumberMutation, GetMemberInfoByMembershipNumberMutationVariables>(GetMemberInfoByMembershipNumberDocument, options);
      }
export type GetMemberInfoByMembershipNumberMutationHookResult = ReturnType<typeof useGetMemberInfoByMembershipNumberMutation>;
export type GetMemberInfoByMembershipNumberMutationResult = Apollo.MutationResult<GetMemberInfoByMembershipNumberMutation>;
export type GetMemberInfoByMembershipNumberMutationOptions = Apollo.BaseMutationOptions<GetMemberInfoByMembershipNumberMutation, GetMemberInfoByMembershipNumberMutationVariables>;
export const GenEventPaymnetDocument = gql`
    mutation GenEventPaymnet($options: IEventRegistrationInput!) {
  genEventPaymnet(options: $options) {
    success
    msg
    data {
      MID
      WEBSITE
      CHANNEL_ID
      CUST_ID
      ORDER_ID
      TXN_AMOUNT
      CALLBACK_URL
      EMAIL
      CHECKSUMHASH
      TOKEN
    }
  }
}
    `;
export type GenEventPaymnetMutationFn = Apollo.MutationFunction<GenEventPaymnetMutation, GenEventPaymnetMutationVariables>;

/**
 * __useGenEventPaymnetMutation__
 *
 * To run a mutation, you first call `useGenEventPaymnetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenEventPaymnetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [genEventPaymnetMutation, { data, loading, error }] = useGenEventPaymnetMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGenEventPaymnetMutation(baseOptions?: Apollo.MutationHookOptions<GenEventPaymnetMutation, GenEventPaymnetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenEventPaymnetMutation, GenEventPaymnetMutationVariables>(GenEventPaymnetDocument, options);
      }
export type GenEventPaymnetMutationHookResult = ReturnType<typeof useGenEventPaymnetMutation>;
export type GenEventPaymnetMutationResult = Apollo.MutationResult<GenEventPaymnetMutation>;
export type GenEventPaymnetMutationOptions = Apollo.BaseMutationOptions<GenEventPaymnetMutation, GenEventPaymnetMutationVariables>;
export const AddAttendenceDocument = gql`
    mutation AddAttendence($options: IAddAttendenceInput!) {
  addAttendence(options: $options) {
    success
    msg
    data
  }
}
    `;
export type AddAttendenceMutationFn = Apollo.MutationFunction<AddAttendenceMutation, AddAttendenceMutationVariables>;

/**
 * __useAddAttendenceMutation__
 *
 * To run a mutation, you first call `useAddAttendenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAttendenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAttendenceMutation, { data, loading, error }] = useAddAttendenceMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAddAttendenceMutation(baseOptions?: Apollo.MutationHookOptions<AddAttendenceMutation, AddAttendenceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddAttendenceMutation, AddAttendenceMutationVariables>(AddAttendenceDocument, options);
      }
export type AddAttendenceMutationHookResult = ReturnType<typeof useAddAttendenceMutation>;
export type AddAttendenceMutationResult = Apollo.MutationResult<AddAttendenceMutation>;
export type AddAttendenceMutationOptions = Apollo.BaseMutationOptions<AddAttendenceMutation, AddAttendenceMutationVariables>;
export const GetAllCpeEventDocument = gql`
    query GetAllCpeEvent {
  getAllCpeEvent {
    _id
    name
    img
    date1
    cpehrs
    date2
    time1
    time2
    location
    flyer
    capacity
    cutoffDate
    cms
    price
    igstState {
      _id
      name
      isActive
    }
    igst
    cgst
    sgst
    isForStudent
    isArchived
    isActive
  }
}
    `;

/**
 * __useGetAllCpeEventQuery__
 *
 * To run a query within a React component, call `useGetAllCpeEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCpeEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCpeEventQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCpeEventQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>(GetAllCpeEventDocument, options);
      }
export function useGetAllCpeEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>(GetAllCpeEventDocument, options);
        }
export type GetAllCpeEventQueryHookResult = ReturnType<typeof useGetAllCpeEventQuery>;
export type GetAllCpeEventLazyQueryHookResult = ReturnType<typeof useGetAllCpeEventLazyQuery>;
export type GetAllCpeEventQueryResult = Apollo.QueryResult<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>;
export const GetAllStateDocument = gql`
    query GetAllState {
  getAllState {
    _id
    name
    country {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useGetAllStateQuery__
 *
 * To run a query within a React component, call `useGetAllStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllStateQuery(baseOptions?: Apollo.QueryHookOptions<GetAllStateQuery, GetAllStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllStateQuery, GetAllStateQueryVariables>(GetAllStateDocument, options);
      }
export function useGetAllStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllStateQuery, GetAllStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllStateQuery, GetAllStateQueryVariables>(GetAllStateDocument, options);
        }
export type GetAllStateQueryHookResult = ReturnType<typeof useGetAllStateQuery>;
export type GetAllStateLazyQueryHookResult = ReturnType<typeof useGetAllStateLazyQuery>;
export type GetAllStateQueryResult = Apollo.QueryResult<GetAllStateQuery, GetAllStateQueryVariables>;
export const GetAllCountryDocument = gql`
    query GetAllCountry {
  getAllCountry {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetAllCountryQuery__
 *
 * To run a query within a React component, call `useGetAllCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountryQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountryQuery, GetAllCountryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountryQuery, GetAllCountryQueryVariables>(GetAllCountryDocument, options);
      }
export function useGetAllCountryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountryQuery, GetAllCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountryQuery, GetAllCountryQueryVariables>(GetAllCountryDocument, options);
        }
export type GetAllCountryQueryHookResult = ReturnType<typeof useGetAllCountryQuery>;
export type GetAllCountryLazyQueryHookResult = ReturnType<typeof useGetAllCountryLazyQuery>;
export type GetAllCountryQueryResult = Apollo.QueryResult<GetAllCountryQuery, GetAllCountryQueryVariables>;
export const GetAllCityDocument = gql`
    query GetAllCity {
  getAllCity {
    _id
    name
    country {
      _id
      name
      isActive
    }
    state {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useGetAllCityQuery__
 *
 * To run a query within a React component, call `useGetAllCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCityQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCityQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCityQuery, GetAllCityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCityQuery, GetAllCityQueryVariables>(GetAllCityDocument, options);
      }
export function useGetAllCityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCityQuery, GetAllCityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCityQuery, GetAllCityQueryVariables>(GetAllCityDocument, options);
        }
export type GetAllCityQueryHookResult = ReturnType<typeof useGetAllCityQuery>;
export type GetAllCityLazyQueryHookResult = ReturnType<typeof useGetAllCityLazyQuery>;
export type GetAllCityQueryResult = Apollo.QueryResult<GetAllCityQuery, GetAllCityQueryVariables>;
export const GetTitleByIdDocument = gql`
    query GetTitleById($options: IGetByID!) {
  getTitleById(options: $options) {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetTitleByIdQuery__
 *
 * To run a query within a React component, call `useGetTitleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTitleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTitleByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetTitleByIdQuery(baseOptions: Apollo.QueryHookOptions<GetTitleByIdQuery, GetTitleByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTitleByIdQuery, GetTitleByIdQueryVariables>(GetTitleByIdDocument, options);
      }
export function useGetTitleByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTitleByIdQuery, GetTitleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTitleByIdQuery, GetTitleByIdQueryVariables>(GetTitleByIdDocument, options);
        }
export type GetTitleByIdQueryHookResult = ReturnType<typeof useGetTitleByIdQuery>;
export type GetTitleByIdLazyQueryHookResult = ReturnType<typeof useGetTitleByIdLazyQuery>;
export type GetTitleByIdQueryResult = Apollo.QueryResult<GetTitleByIdQuery, GetTitleByIdQueryVariables>;
export const GetRegionByIdDocument = gql`
    query GetRegionById($options: IGetByID!) {
  getRegionById(options: $options) {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetRegionByIdQuery__
 *
 * To run a query within a React component, call `useGetRegionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegionByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetRegionByIdQuery(baseOptions: Apollo.QueryHookOptions<GetRegionByIdQuery, GetRegionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRegionByIdQuery, GetRegionByIdQueryVariables>(GetRegionByIdDocument, options);
      }
export function useGetRegionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRegionByIdQuery, GetRegionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRegionByIdQuery, GetRegionByIdQueryVariables>(GetRegionByIdDocument, options);
        }
export type GetRegionByIdQueryHookResult = ReturnType<typeof useGetRegionByIdQuery>;
export type GetRegionByIdLazyQueryHookResult = ReturnType<typeof useGetRegionByIdLazyQuery>;
export type GetRegionByIdQueryResult = Apollo.QueryResult<GetRegionByIdQuery, GetRegionByIdQueryVariables>;
export const GetAllRegionDocument = gql`
    query GetAllRegion {
  getAllRegion {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetAllRegionQuery__
 *
 * To run a query within a React component, call `useGetAllRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRegionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRegionQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRegionQuery, GetAllRegionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRegionQuery, GetAllRegionQueryVariables>(GetAllRegionDocument, options);
      }
export function useGetAllRegionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRegionQuery, GetAllRegionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRegionQuery, GetAllRegionQueryVariables>(GetAllRegionDocument, options);
        }
export type GetAllRegionQueryHookResult = ReturnType<typeof useGetAllRegionQuery>;
export type GetAllRegionLazyQueryHookResult = ReturnType<typeof useGetAllRegionLazyQuery>;
export type GetAllRegionQueryResult = Apollo.QueryResult<GetAllRegionQuery, GetAllRegionQueryVariables>;
export const GetAllTitleDocument = gql`
    query GetAllTitle {
  getAllTitle {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetAllTitleQuery__
 *
 * To run a query within a React component, call `useGetAllTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTitleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTitleQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTitleQuery, GetAllTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTitleQuery, GetAllTitleQueryVariables>(GetAllTitleDocument, options);
      }
export function useGetAllTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTitleQuery, GetAllTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTitleQuery, GetAllTitleQueryVariables>(GetAllTitleDocument, options);
        }
export type GetAllTitleQueryHookResult = ReturnType<typeof useGetAllTitleQuery>;
export type GetAllTitleLazyQueryHookResult = ReturnType<typeof useGetAllTitleLazyQuery>;
export type GetAllTitleQueryResult = Apollo.QueryResult<GetAllTitleQuery, GetAllTitleQueryVariables>;
export const MyProfileInformationDocument = gql`
    query MyProfileInformation {
  myProfileInformation {
    _id
    firstName
    lastName
    middleName
    hash
    email
    userType
    regionType {
      _id
      name
      isActive
    }
    title {
      _id
      name
      isActive
    }
    membershipNo
    username
    gstNo
    tradeName
    address1
    address2
    country {
      _id
      name
      isActive
    }
    state {
      _id
      name
      isActive
    }
    city {
      _id
      name
      isActive
    }
    pinCode
    phone
    isApproved
    approvedBy {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useMyProfileInformationQuery__
 *
 * To run a query within a React component, call `useMyProfileInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyProfileInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyProfileInformationQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyProfileInformationQuery(baseOptions?: Apollo.QueryHookOptions<MyProfileInformationQuery, MyProfileInformationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyProfileInformationQuery, MyProfileInformationQueryVariables>(MyProfileInformationDocument, options);
      }
export function useMyProfileInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyProfileInformationQuery, MyProfileInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyProfileInformationQuery, MyProfileInformationQueryVariables>(MyProfileInformationDocument, options);
        }
export type MyProfileInformationQueryHookResult = ReturnType<typeof useMyProfileInformationQuery>;
export type MyProfileInformationLazyQueryHookResult = ReturnType<typeof useMyProfileInformationLazyQuery>;
export type MyProfileInformationQueryResult = Apollo.QueryResult<MyProfileInformationQuery, MyProfileInformationQueryVariables>;
export const GetCpeEventByIdDocument = gql`
    query GetCpeEventById($options: IGetByID!) {
  getCpeEventById(options: $options) {
    _id
    name
    img
    date1
    cpehrs
    date2
    time1
    time2
    location
    flyer
    capacity
    cutoffDate
    cms
    price
    igstState {
      _id
      name
      isActive
    }
    igst
    cgst
    sgst
    isForStudent
    isArchived
    isActive
  }
}
    `;

/**
 * __useGetCpeEventByIdQuery__
 *
 * To run a query within a React component, call `useGetCpeEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCpeEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCpeEventByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCpeEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>(GetCpeEventByIdDocument, options);
      }
export function useGetCpeEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>(GetCpeEventByIdDocument, options);
        }
export type GetCpeEventByIdQueryHookResult = ReturnType<typeof useGetCpeEventByIdQuery>;
export type GetCpeEventByIdLazyQueryHookResult = ReturnType<typeof useGetCpeEventByIdLazyQuery>;
export type GetCpeEventByIdQueryResult = Apollo.QueryResult<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>;
export const GetCpeEventRangeByCpeIdDocument = gql`
    query GetCpeEventRangeByCpeId($options: IGetByID!) {
  getCpeEventRangeByCpeId(options: $options) {
    _id
    name
    description
    price
    isForMember
    isForNonMember
    isForstudent
    isActive
  }
}
    `;

/**
 * __useGetCpeEventRangeByCpeIdQuery__
 *
 * To run a query within a React component, call `useGetCpeEventRangeByCpeIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCpeEventRangeByCpeIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCpeEventRangeByCpeIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCpeEventRangeByCpeIdQuery(baseOptions: Apollo.QueryHookOptions<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>(GetCpeEventRangeByCpeIdDocument, options);
      }
export function useGetCpeEventRangeByCpeIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>(GetCpeEventRangeByCpeIdDocument, options);
        }
export type GetCpeEventRangeByCpeIdQueryHookResult = ReturnType<typeof useGetCpeEventRangeByCpeIdQuery>;
export type GetCpeEventRangeByCpeIdLazyQueryHookResult = ReturnType<typeof useGetCpeEventRangeByCpeIdLazyQuery>;
export type GetCpeEventRangeByCpeIdQueryResult = Apollo.QueryResult<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>;
export const GetCountByCpeEventDocument = gql`
    query GetCountByCpeEvent($options: IGetByID!) {
  getCountByCpeEvent(options: $options) {
    eventId
    occupied
  }
}
    `;

/**
 * __useGetCountByCpeEventQuery__
 *
 * To run a query within a React component, call `useGetCountByCpeEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountByCpeEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountByCpeEventQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCountByCpeEventQuery(baseOptions: Apollo.QueryHookOptions<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>(GetCountByCpeEventDocument, options);
      }
export function useGetCountByCpeEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>(GetCountByCpeEventDocument, options);
        }
export type GetCountByCpeEventQueryHookResult = ReturnType<typeof useGetCountByCpeEventQuery>;
export type GetCountByCpeEventLazyQueryHookResult = ReturnType<typeof useGetCountByCpeEventLazyQuery>;
export type GetCountByCpeEventQueryResult = Apollo.QueryResult<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>;