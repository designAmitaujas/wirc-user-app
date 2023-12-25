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

export type Businesslisting = {
  __typename?: 'Businesslisting';
  _id: Scalars['String']['output'];
  cms: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  sponserimg: Scalars['String']['output'];
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
  externalRegistration: Scalars['String']['output'];
  flyer: Scalars['String']['output'];
  flyerArr?: Maybe<Array<MultiFlyerImage>>;
  igst: Scalars['Float']['output'];
  igstState?: Maybe<State>;
  img: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isArchived: Scalars['Boolean']['output'];
  isForStudent: Scalars['Boolean']['output'];
  isRegistrationOn: Scalars['Boolean']['output'];
  lati: Scalars['String']['output'];
  location: Scalars['String']['output'];
  longi: Scalars['String']['output'];
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

export type EventAttendence = {
  __typename?: 'EventAttendence';
  _id: Scalars['String']['output'];
  attendanceStatus: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  currentdate: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  membershipId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EventQrRegistrationMember = {
  __typename?: 'EventQRRegistrationMember';
  _id: Scalars['String']['output'];
  associatedUser?: Maybe<User>;
  contactNo: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  membershipNo: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EventRegistrationMember = {
  __typename?: 'EventRegistrationMember';
  _id: Scalars['String']['output'];
  addresss: Scalars['String']['output'];
  associatedUser?: Maybe<User>;
  birthdate: Scalars['String']['output'];
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

export type EventSpeaker = {
  __typename?: 'EventSpeaker';
  _id: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  detailsimg: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  speakerimg: Scalars['String']['output'];
};

export type EventTopic = {
  __typename?: 'EventTopic';
  _id: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  faculty: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  topic: Scalars['String']['output'];
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
  isEmailSent: Scalars['Boolean']['output'];
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

export type Gender = {
  __typename?: 'Gender';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
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
  offlinecheck: Scalars['Boolean']['input'];
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

export type IClassFeedback = {
  answer: Scalars['String']['input'];
  topic: Scalars['String']['input'];
};

export type ICombineState = {
  __typename?: 'ICombineState';
  state: Array<IVisitorState>;
  visitor: Array<IVisitorCounter>;
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

export type ICreateBusinesslisting = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cms: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  sponserimg: Scalars['String']['input'];
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
  externalRegistration: Scalars['String']['input'];
  flyer: Scalars['String']['input'];
  flyerArr: Array<Scalars['String']['input']>;
  igst: Scalars['Float']['input'];
  igstCity: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isArchived: Scalars['Boolean']['input'];
  isForStudent: Scalars['Boolean']['input'];
  isRegistrationOn: Scalars['Boolean']['input'];
  lati: Scalars['String']['input'];
  location: Scalars['String']['input'];
  longi: Scalars['String']['input'];
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

export type ICreateEventQrRegistrationMember = {
  _id?: InputMaybe<Scalars['String']['input']>;
  contactNo: Scalars['String']['input'];
  cpeEvent: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  membershipNo: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ICreateEventSpeaker = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cpeEvent: Scalars['String']['input'];
  detailsimg: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  speakerimg: Scalars['String']['input'];
};

export type ICreateEventTopic = {
  _id?: InputMaybe<Scalars['String']['input']>;
  cpeEvent: Scalars['String']['input'];
  faculty: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  topic: Scalars['String']['input'];
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

export type ICreateGender = {
  _id?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
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
  gender: Scalars['String']['input'];
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
  cms: Scalars['String']['input'];
  contact: Scalars['String']['input'];
  email: Scalars['String']['input'];
  img: Scalars['String']['input'];
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

export type ICreateSkills = {
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
  zoomvideo: Scalars['String']['input'];
};

export type ICreateStudentDownloadCategory = {
  _id?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type ICreateStudentDownloadCode = {
  _id?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  videocode: Scalars['String']['input'];
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
  birthdate: Scalars['String']['input'];
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

export type IFeedBackForm = {
  academicContent: Scalars['String']['input'];
  arrangementByPOU: Scalars['String']['input'];
  cpeEvent: Scalars['String']['input'];
  feedbackForm: Array<IClassFeedback>;
  professionalExperience: Scalars['String']['input'];
  programDesign: Scalars['String']['input'];
  readingMaterial: Scalars['String']['input'];
  remarks: Scalars['String']['input'];
};

export type IForgotPasswordInput = {
  email: Scalars['String']['input'];
  membershipNumber: Scalars['String']['input'];
};

export type IForgotPasswordUpdateInput = {
  jwt: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type IGetAllMemberSkills = {
  event: Scalars['String']['input'];
  skills: Scalars['String']['input'];
};

export type IGetAllMemberSkillsV2 = {
  city: Scalars['String']['input'];
  event: Scalars['String']['input'];
  skills: Scalars['String']['input'];
};

export type IGetAllTransactionId = {
  ids: Array<Scalars['String']['input']>;
};

export type IGetAttendanceDetails = {
  endDate: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type IGetById = {
  id: Scalars['String']['input'];
};

export type IGetEmailInput = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type IGetMemberAttendanceDetails = {
  endDate: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  startDate: Scalars['String']['input'];
};

export type IGetMemberSkill = {
  arr: Array<Scalars['String']['input']>;
  membershipNumber: Scalars['String']['input'];
};

export type IGetMyList = {
  __typename?: 'IGetMyList';
  city: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firebaseId: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  skill: Array<Scalars['String']['output']>;
  userid: Scalars['String']['output'];
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

export type INetworkingSearch = {
  category: Scalars['String']['input'];
  firmName: Scalars['String']['input'];
  location: Scalars['String']['input'];
};

export type IPaymentField = {
  __typename?: 'IPaymentField';
  CALLBACK_URL: Scalars['String']['output'];
  CHANNEL_ID: Scalars['String']['output'];
  CHECKSUMHASH: Scalars['String']['output'];
  CUST_ID: Scalars['String']['output'];
  EMAIL: Scalars['String']['output'];
  EventHistoryID: Scalars['String']['output'];
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

export type IStudentInput = {
  id: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
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

export type IUserInfoByMembershipNumber2 = {
  __typename?: 'IUserInfoByMembershipNumber2';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  contactInfo: Scalars['String']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gst: Scalars['String']['output'];
  isData: Scalars['Boolean']['output'];
  membershipNo: Scalars['String']['output'];
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

export type IVisitorCounter = {
  __typename?: 'IVisitorCounter';
  count: Scalars['Float']['output'];
  visitorDate: Scalars['String']['output'];
};

export type IVisitorState = {
  __typename?: 'IVisitorState';
  count: Scalars['Float']['output'];
  title: Scalars['String']['output'];
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
  query: Scalars['String']['input'];
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

export type MemberInfo = {
  __typename?: 'MemberInfo';
  contactNo: Scalars['String']['output'];
  email: Scalars['String']['output'];
  membershipNo: Scalars['String']['output'];
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
  gender?: Maybe<Gender>;
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

export type MemberSkill = {
  __typename?: 'MemberSkill';
  _id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  membershipNumber: Scalars['String']['output'];
  skills?: Maybe<Skills>;
};

export type MemberWithAttendanceStatus = {
  __typename?: 'MemberWithAttendanceStatus';
  attendanceStatus?: Maybe<EventAttendence>;
  member: MemberRegistration;
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

export type MultiFlyerImage = {
  __typename?: 'MultiFlyerImage';
  _id: Scalars['String']['output'];
  img: Scalars['String']['output'];
  parent?: Maybe<CpeEvent>;
};

export type Mutation = {
  __typename?: 'Mutation';
  GetAllPaymentDetailsByDateRange: Array<EventRegistrationMember>;
  GetAllPublicationPaymentDetailsByDateRange: Array<PublicationBilling>;
  GetPaymentDetails: Array<EventRegistrationMember>;
  GetPaymentDetailsByStudyGroup: Array<EventRegistrationMember>;
  IsInvitateAccepted: Scalars['Boolean']['output'];
  acceptInvite: Scalars['Boolean']['output'];
  addAttendence: IStatusResponse;
  addEventQRRegistrationMembers: IStatusResponse;
  addFeedBackFrom: IStatusResponse;
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
  createOrUpdateBusinesslisting: IStatusResponse;
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
  createOrUpdateEventQRRegistrationMember: IStatusResponse;
  createOrUpdateEventSpeaker: IStatusResponse;
  createOrUpdateEventTopic: IStatusResponse;
  createOrUpdateFooterCateogry: IStatusResponse;
  createOrUpdateFooterLink: IStatusResponse;
  createOrUpdateGalleryEvent: IStatusResponse;
  createOrUpdateGalleryImage: IStatusResponse;
  createOrUpdateGalleryYear: IStatusResponse;
  createOrUpdateGender: IStatusResponse;
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
  createOrUpdateMemberSkill: IStatusResponse;
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
  createOrUpdateSkills: IStatusResponse;
  createOrUpdateState: IStatusResponse;
  createOrUpdateStudentDownload: IStatusResponse;
  createOrUpdateStudentDownloadCategory: IStatusResponse;
  createOrUpdateStudentDownloadCode: IStatusResponse;
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
  deleteBusinesslisting: IStatusResponse;
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
  deleteEventQRRegistrationMember: IStatusResponse;
  deleteEventSpeaker: IStatusResponse;
  deleteEventTopic: IStatusResponse;
  deleteFooterCateogry: IStatusResponse;
  deleteFooterLink: IStatusResponse;
  deleteGalleryEvent: IStatusResponse;
  deleteGalleryImage: IStatusResponse;
  deleteGalleryYear: IStatusResponse;
  deleteGender: IStatusResponse;
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
  deleteMemberSkill: IStatusResponse;
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
  deleteSkills: IStatusResponse;
  deleteState: IStatusResponse;
  deleteStudentDownload: IStatusResponse;
  deleteStudentDownloadCategory: IStatusResponse;
  deleteStudentDownloadCode: IStatusResponse;
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
  getAttendanceDetailsByDateRange: Array<EventAttendence>;
  getFilterdSkillMember: Array<IGetMyList>;
  getFilterdSkillMemberV2: Array<IGetMyList>;
  getMemberInfoByMembershipNumber?: Maybe<IUserInfoByMembershipNumber>;
  getMemberInfoByMembershipNumber2?: Maybe<IUserInfoByMembershipNumber2>;
  getPublicaLibraryRegistration: IStatusResponse;
  getRedeamCode: IStatusResponse;
  getRedeemDownloadCode: IStatusResponse;
  getmemberattendancedetails: Array<MemberWithAttendanceStatus>;
  initiativeMail: IStatusResponse;
  memberRegistrationAuthResolver: IAuthResoverResponse;
  mentorshipPlacementSearch: Array<MentorshipZone>;
  networkingZoneSearch: Array<NetworkingZone>;
  noneMemberRegistrationAuthResolver: IAuthResoverResponse;
  prenaSearch: Array<Prerna>;
  rejectInvite: Scalars['Boolean']['output'];
  sendInvitation: IStatusResponse;
  setFirebaseId: Scalars['Boolean']['output'];
  speakerMail: IStatusResponse;
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


export type MutationIsInvitateAcceptedArgs = {
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
};


export type MutationAcceptInviteArgs = {
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
};


export type MutationAddAttendenceArgs = {
  options: IAddAttendenceInput;
};


export type MutationAddEventQrRegistrationMembersArgs = {
  data: Array<ICreateEventQrRegistrationMember>;
  eventId: Scalars['String']['input'];
};


export type MutationAddFeedBackFromArgs = {
  options: IFeedBackForm;
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


export type MutationCreateOrUpdateBusinesslistingArgs = {
  options: ICreateBusinesslisting;
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


export type MutationCreateOrUpdateEventQrRegistrationMemberArgs = {
  options: ICreateEventQrRegistrationMember;
};


export type MutationCreateOrUpdateEventSpeakerArgs = {
  options: ICreateEventSpeaker;
};


export type MutationCreateOrUpdateEventTopicArgs = {
  options: ICreateEventTopic;
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


export type MutationCreateOrUpdateGenderArgs = {
  options: ICreateGender;
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


export type MutationCreateOrUpdateMemberSkillArgs = {
  options: IGetMemberSkill;
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


export type MutationCreateOrUpdateSkillsArgs = {
  options: ICreateSkills;
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


export type MutationCreateOrUpdateStudentDownloadCodeArgs = {
  options: ICreateStudentDownloadCode;
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


export type MutationDeleteBusinesslistingArgs = {
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


export type MutationDeleteEventQrRegistrationMemberArgs = {
  options: IGetById;
};


export type MutationDeleteEventSpeakerArgs = {
  options: IGetById;
};


export type MutationDeleteEventTopicArgs = {
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


export type MutationDeleteGenderArgs = {
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


export type MutationDeleteMemberSkillArgs = {
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


export type MutationDeleteSkillsArgs = {
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


export type MutationDeleteStudentDownloadCodeArgs = {
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


export type MutationGetAttendanceDetailsByDateRangeArgs = {
  options: IGetAttendanceDetails;
};


export type MutationGetFilterdSkillMemberArgs = {
  options: IGetAllMemberSkills;
};


export type MutationGetFilterdSkillMemberV2Args = {
  options: IGetAllMemberSkillsV2;
};


export type MutationGetMemberInfoByMembershipNumberArgs = {
  options: IGetById;
};


export type MutationGetMemberInfoByMembershipNumber2Args = {
  options: IGetById;
};


export type MutationGetPublicaLibraryRegistrationArgs = {
  options: ICreateLibraryRegistrationForm;
};


export type MutationGetRedeamCodeArgs = {
  options: IGetById;
};


export type MutationGetRedeemDownloadCodeArgs = {
  options: IStudentInput;
};


export type MutationGetmemberattendancedetailsArgs = {
  options: IGetMemberAttendanceDetails;
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
  options: INetworkingSearch;
};


export type MutationNoneMemberRegistrationAuthResolverArgs = {
  options: IAuthMember;
};


export type MutationPrenaSearchArgs = {
  options: IPrernaSearch;
};


export type MutationRejectInviteArgs = {
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
};


export type MutationSendInvitationArgs = {
  eventId: Scalars['String']['input'];
  firebaseId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
};


export type MutationSetFirebaseIdArgs = {
  firebaseId: Scalars['String']['input'];
};


export type MutationSpeakerMailArgs = {
  options: QnaMailInput;
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

export type NetworkingInvite = {
  __typename?: 'NetworkingInvite';
  _id: Scalars['String']['output'];
  cpeEvent?: Maybe<CpeEvent>;
  inviteFrom?: Maybe<User>;
  inviteTo?: Maybe<User>;
  isAccepted: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
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

export type OfflineRegistrationEventList = {
  __typename?: 'OfflineRegistrationEventList';
  endDate: Scalars['String']['output'];
  eventAddress: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  isEventOff: Scalars['Boolean']['output'];
  membershipnumber: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type OfflineResponse = {
  __typename?: 'OfflineResponse';
  data: MemberInfo;
  msg: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
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
  cms: Scalars['String']['output'];
  contact: Scalars['String']['output'];
  email: Scalars['String']['output'];
  img: Scalars['String']['output'];
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

export type QnaMailInput = {
  email: Scalars['String']['input'];
  eventid: Scalars['String']['input'];
  eventname: Scalars['String']['input'];
  name: Scalars['String']['input'];
  query: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  approveMemberRegistrationById: IStatusResponse;
  checkExhibition: OfflineResponse;
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
  getAllBusinessListing: Array<Businesslisting>;
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
  getAllEventQRRegistrationMember: Array<EventQrRegistrationMember>;
  getAllEventSpeaker: Array<EventSpeaker>;
  getAllEventTopic: Array<EventTopic>;
  getAllFooterCateogry: Array<FooterLinkGroup>;
  getAllFooterLink: Array<FooterLink>;
  getAllGalleryEvent: Array<GalleryEvent>;
  getAllGalleryImage: Array<GalleryImage>;
  getAllGalleryYear: Array<GalleryYear>;
  getAllGender: Array<Gender>;
  getAllGmcs: Array<Gmcs>;
  getAllHelpDeskCategory: Array<HelpDeskCategory>;
  getAllHelpDeskQA: Array<HelpDeskQa>;
  getAllHighLights: Array<HighLights>;
  getAllHomeCounter: Array<HomeCounter>;
  getAllHomePortal: Array<HomePortal>;
  getAllHomePortalCategory: Array<HomePortalCategory>;
  getAllImages: Array<Images>;
  getAllInvitation: Array<NetworkingInvite>;
  getAllLawUpdate: Array<LawUpdate>;
  getAllLawUpdateCategory: Array<LawUpdateCategory>;
  getAllLibrary: Array<Library>;
  getAllLibraryRegistrationForm: Array<LibraryRegistrationForm>;
  getAllLibraryRegistrationLocation: Array<LibraryRegistrationLocation>;
  getAllMcs: Array<Mcs>;
  getAllMember: Array<Member>;
  getAllMemberDesignation: Array<MemberDesignation>;
  getAllMemberRegistration: Array<MemberRegistration>;
  getAllMemberSkill: Array<MemberSkill>;
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
  getAllSkills: Array<Skills>;
  getAllState: Array<State>;
  getAllStudentDownload: Array<StudentDownload>;
  getAllStudentDownloadCategory: Array<StudentDownloadCategory>;
  getAllStudentDownloadCode: Array<StudentDownloadCode>;
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
  getBusinesslistingById: Businesslisting;
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
  getCounter: ICombineState;
  getCountryById: Country;
  getCoworkingZoneById: CoworkingZone;
  getCpeByPaymentReciptById: EventRegistrationMember;
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
  getEventQRRegistrationMemberById: EventQrRegistrationMember;
  getEventSpeakerById: EventSpeaker;
  getEventTopicById: EventTopic;
  getFooterCateogryById: FooterLinkGroup;
  getFooterLinkById: FooterLink;
  getGalleryEventById: GalleryEvent;
  getGalleryImageById: GalleryImage;
  getGalleryYearById: GalleryYear;
  getGenderById: Gender;
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
  getMemberAttendanceList: Array<MemberRegistration>;
  getMemberById: Member;
  getMemberDesignationById: MemberDesignation;
  getMemberRegistrationById: MemberRegistration;
  getMemberSkillById: MemberSkill;
  getMentorshipZoneById: MentorshipZone;
  getMyAttendedEvent: Array<EventAttendence>;
  getMyEventList: Array<RegistrationList>;
  getMyEventList2: Array<RegistrationList>;
  getMyMemberListByhistoryId: Array<EventRegistrationMember>;
  getMyMobileEventList: Array<RegistrationEventList>;
  getMyMobileEventList2: Array<RegistrationEventList2>;
  getMyOfflineMobileEventList2: Array<OfflineRegistrationEventList>;
  getMySkillList: Array<MemberSkill>;
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
  getSkillsById: Skills;
  getStateById: State;
  getStudentCodeAccessById: IStatusResponse;
  getStudentDownloadById: StudentDownload;
  getStudentDownloadCategoryById: StudentDownloadCategory;
  getStudentDownloadCodeById: StudentDownloadCode;
  getStudentWicasaCommunityById: StudentWicasaCommunity;
  getStudyCircleMettingById: StudyCircleMetting;
  getStudyGroupById: StudyGroup;
  getStudyGroupCategoryById: StudyGroupCategory;
  getTaxById: Tax;
  getTitleById: Title;
  getTodayCpeEvent: Array<CpeEvent>;
  getUserInformation?: Maybe<User>;
  getVideoGallaryById: VideoGallary;
  getWebCastById: WebCast;
  getWhatWeBrignToYouById: WhatWeBrignToYou;
  getWicasaNewsLatterById: WicasaNewsLatter;
  getWircdirectoryById: WircDirectory;
  getWorkTypeById: WorkType;
  getYoutubeLinksById: YoutubeLinks;
  getrecepitsentEmails: Array<SentEmailResponse>;
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


export type QueryCheckExhibitionArgs = {
  cpeEvent: Scalars['String']['input'];
  membershipNo: Scalars['String']['input'];
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


export type QueryGetBusinesslistingByIdArgs = {
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


export type QueryGetCpeByPaymentReciptByIdArgs = {
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


export type QueryGetEventQrRegistrationMemberByIdArgs = {
  options: IGetById;
};


export type QueryGetEventSpeakerByIdArgs = {
  options: IGetById;
};


export type QueryGetEventTopicByIdArgs = {
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


export type QueryGetGenderByIdArgs = {
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


export type QueryGetMemberAttendanceListArgs = {
  eventId: Scalars['String']['input'];
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


export type QueryGetMemberSkillByIdArgs = {
  options: IGetById;
};


export type QueryGetMentorshipZoneByIdArgs = {
  options: IGetById;
};


export type QueryGetMyMemberListByhistoryIdArgs = {
  historyId: Scalars['String']['input'];
};


export type QueryGetMySkillListArgs = {
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


export type QueryGetSkillsByIdArgs = {
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


export type QueryGetStudentDownloadCodeByIdArgs = {
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

export type RegistrationEventList = {
  __typename?: 'RegistrationEventList';
  endDate: Scalars['String']['output'];
  eventAddress: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type RegistrationEventList2 = {
  __typename?: 'RegistrationEventList2';
  endDate: Scalars['String']['output'];
  eventAddress: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  isEventOff: Scalars['Boolean']['output'];
  registrationDate: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
};

export type RegistrationList = {
  __typename?: 'RegistrationList';
  email: Scalars['String']['output'];
  eventAddress: Scalars['String']['output'];
  eventDate: Scalars['String']['output'];
  eventId: Scalars['String']['output'];
  eventName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  personCount: Scalars['String']['output'];
  registrationDate: Scalars['String']['output'];
  totalPay: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
};

export type SentEmailResponse = {
  __typename?: 'SentEmailResponse';
  email: Scalars['String']['output'];
  eventname: Scalars['String']['output'];
  ismailsent: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
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

export type Skills = {
  __typename?: 'Skills';
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
  zoomvideo: Scalars['String']['output'];
};

export type StudentDownloadCategory = {
  __typename?: 'StudentDownloadCategory';
  _id: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type StudentDownloadCode = {
  __typename?: 'StudentDownloadCode';
  _id: Scalars['String']['output'];
  category?: Maybe<StudentDownload>;
  isActive: Scalars['Boolean']['output'];
  videocode: Scalars['String']['output'];
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

export type AddFeedBackFromMutationVariables = Exact<{
  options: IFeedBackForm;
}>;


export type AddFeedBackFromMutation = { __typename?: 'Mutation', addFeedBackFrom: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type GetFilterdSkillMemberV2MutationVariables = Exact<{
  options: IGetAllMemberSkillsV2;
}>;


export type GetFilterdSkillMemberV2Mutation = { __typename?: 'Mutation', getFilterdSkillMemberV2: Array<{ __typename?: 'IGetMyList', name: string, city: string, email: string, mobile: string, gender: string, skill: Array<string>, firebaseId: string, userid: string }> };

export type GetMemberInfoByMembershipNumberMutationVariables = Exact<{
  options: IGetById;
}>;


export type GetMemberInfoByMembershipNumberMutation = { __typename?: 'Mutation', getMemberInfoByMembershipNumber?: { __typename?: 'IUserInfoByMembershipNumber', isData: boolean, name: string, organization: string, email: string, contactInfo: string, gst: string, address: string, country: string, state: string, city: string, pincode: string } | null };

export type GenEventPaymnetMutationVariables = Exact<{
  options: IEventRegistrationInput;
}>;


export type GenEventPaymnetMutation = { __typename?: 'Mutation', genEventPaymnet: { __typename?: 'IPaymentResponse', success: boolean, msg: string, data?: { __typename?: 'IPaymentField', MID: string, WEBSITE: string, CHANNEL_ID: string, CUST_ID: string, ORDER_ID: string, TXN_AMOUNT: string, CALLBACK_URL: string, EMAIL: string, CHECKSUMHASH: string, TOKEN: string, EventHistoryID: string } | null } };

export type AddAttendenceMutationVariables = Exact<{
  options: IAddAttendenceInput;
}>;


export type AddAttendenceMutation = { __typename?: 'Mutation', addAttendence: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type CreateOrUpdateMemberSkillMutationVariables = Exact<{
  options: IGetMemberSkill;
}>;


export type CreateOrUpdateMemberSkillMutation = { __typename?: 'Mutation', createOrUpdateMemberSkill: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type DeleteMemberSkillMutationVariables = Exact<{
  options: IGetById;
}>;


export type DeleteMemberSkillMutation = { __typename?: 'Mutation', deleteMemberSkill: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type SendInvitationMutationVariables = Exact<{
  firebaseId: Scalars['String']['input'];
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
}>;


export type SendInvitationMutation = { __typename?: 'Mutation', sendInvitation: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type GenEmailWithMembershipNumberMutationVariables = Exact<{
  options: IForgotPasswordInput;
}>;


export type GenEmailWithMembershipNumberMutation = { __typename?: 'Mutation', genEmailWithMembershipNumber: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type VerifyEmailWithMembershipNumberMutationVariables = Exact<{
  options: IGetEmailInput;
}>;


export type VerifyEmailWithMembershipNumberMutation = { __typename?: 'Mutation', verifyEmailWithMembershipNumber: { __typename?: 'IAuthResoverResponse', success: boolean, msg: string, jwt: string, email: string, name: string } };

export type CreateMemberRegistrationMutationVariables = Exact<{
  options: ICreateMemberRegistration;
}>;


export type CreateMemberRegistrationMutation = { __typename?: 'Mutation', createMemberRegistration: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type SetFirebaseIdMutationVariables = Exact<{
  firebaseId: Scalars['String']['input'];
}>;


export type SetFirebaseIdMutation = { __typename?: 'Mutation', setFirebaseId: boolean };

export type IsInvitateAcceptedMutationVariables = Exact<{
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
}>;


export type IsInvitateAcceptedMutation = { __typename?: 'Mutation', IsInvitateAccepted: boolean };

export type AcceptInviteMutationVariables = Exact<{
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
}>;


export type AcceptInviteMutation = { __typename?: 'Mutation', acceptInvite: boolean };

export type RejectInviteMutationVariables = Exact<{
  eventId: Scalars['String']['input'];
  inviteTo: Scalars['String']['input'];
}>;


export type RejectInviteMutation = { __typename?: 'Mutation', rejectInvite: boolean };

export type SpeakerMailMutationVariables = Exact<{
  options: QnaMailInput;
}>;


export type SpeakerMailMutation = { __typename?: 'Mutation', speakerMail: { __typename?: 'IStatusResponse', success: boolean, msg: string, data: string } };

export type GetMemberInfoByMembershipNumber2MutationVariables = Exact<{
  options: IGetById;
}>;


export type GetMemberInfoByMembershipNumber2Mutation = { __typename?: 'Mutation', getMemberInfoByMembershipNumber2?: { __typename?: 'IUserInfoByMembershipNumber2', isData: boolean, name: string, organization: string, membershipNo: string, email: string, contactInfo: string, gst: string, address: string, country: string, state: string, city: string, pincode: string } | null };

export type GetAllCpeEventQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCpeEventQuery = { __typename?: 'Query', getAllCpeEvent: Array<{ __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, lati: string, longi: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean, igstState?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null }> };

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

export type GetAllGenderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGenderQuery = { __typename?: 'Query', getAllGender: Array<{ __typename?: 'Gender', _id: string, name: string, isActive: boolean }> };

export type GetGenderByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetGenderByIdQuery = { __typename?: 'Query', getGenderById: { __typename?: 'Gender', _id: string, name: string, isActive: boolean } };

export type GetMyMobileEventListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyMobileEventListQuery = { __typename?: 'Query', getMyMobileEventList: Array<{ __typename?: 'RegistrationEventList', registrationDate: string, eventName: string, startDate: string, endDate: string, eventAddress: string, eventId: string }> };

export type GetEventTopicByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetEventTopicByIdQuery = { __typename?: 'Query', getEventTopicById: { __typename?: 'EventTopic', _id: string, topic: string, faculty: string, isActive: boolean, cpeEvent?: { __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, lati: string, longi: string, capacity: string, cutoffDate?: any | null, cms: string, externalRegistration: string, price: number, igst: number, cgst: number, sgst: number, isRegistrationOn: boolean, isForStudent: boolean, isArchived: boolean, isActive: boolean } | null } };

export type GetAllEventTopicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventTopicQuery = { __typename?: 'Query', getAllEventTopic: Array<{ __typename?: 'EventTopic', _id: string, topic: string, faculty: string, isActive: boolean, cpeEvent?: { __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, lati: string, longi: string, capacity: string, cutoffDate?: any | null, cms: string, externalRegistration: string, price: number, igst: number, cgst: number, sgst: number, isRegistrationOn: boolean, isForStudent: boolean, isArchived: boolean, isActive: boolean } | null }> };

export type GetMemberAttendanceListQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
}>;


export type GetMemberAttendanceListQuery = { __typename?: 'Query', getMemberAttendanceList: Array<{ __typename?: 'MemberRegistration', _id: string, firstName: string, lastName: string, middleName: string, hash: string, email: string, userType: string, membershipNo: string, username: string, gstNo: string, tradeName: string, address1: string, address2: string, pinCode: string, phone: string, isApproved: boolean, isActive: boolean, gender?: { __typename?: 'Gender', _id: string, name: string, isActive: boolean } | null }> };

export type MyProfileInformationQueryVariables = Exact<{ [key: string]: never; }>;


export type MyProfileInformationQuery = { __typename?: 'Query', myProfileInformation?: { __typename?: 'MemberRegistration', _id: string, firstName: string, lastName: string, middleName: string, hash: string, email: string, userType: string, membershipNo: string, username: string, gstNo: string, tradeName: string, address1: string, address2: string, pinCode: string, phone: string, isApproved: boolean, isActive: boolean, regionType?: { __typename?: 'Region', _id: string, name: string, isActive: boolean } | null, gender?: { __typename?: 'Gender', _id: string, name: string, isActive: boolean } | null, title?: { __typename?: 'Title', _id: string, name: string, isActive: boolean } | null, country?: { __typename?: 'Country', _id: string, name: string, isActive: boolean } | null, state?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null, city?: { __typename?: 'City', _id: string, name: string, isActive: boolean } | null, approvedBy?: { __typename?: 'User', _id: string, name: string, isActive: boolean } | null } | null };

export type GetMyAttendedEventQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyAttendedEventQuery = { __typename?: 'Query', getMyAttendedEvent: Array<{ __typename?: 'EventAttendence', _id: string, membershipId: string, updatedAt: any, isActive: boolean, cpeEvent?: { __typename?: 'CpeEvent', _id: string, name: string, img: string, lati: string, longi: string, date1: any, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean } | null }> };

export type GetTodayCpeEventQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodayCpeEventQuery = { __typename?: 'Query', getTodayCpeEvent: Array<{ __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, lati: string, longi: string, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean }> };

export type GetCpeEventByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCpeEventByIdQuery = { __typename?: 'Query', getCpeEventById: { __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, cpehrs: string, date2: any, lati: string, longi: string, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean, igstState?: { __typename?: 'State', _id: string, name: string, isActive: boolean } | null } };

export type GetCpeEventRangeByCpeIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCpeEventRangeByCpeIdQuery = { __typename?: 'Query', getCpeEventRangeByCpeId: Array<{ __typename?: 'CpeEventRange', _id: string, name: string, description: string, price: string, isForMember: boolean, isForNonMember: boolean, isForstudent: boolean, isActive: boolean }> };

export type GetPaymentReciptByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetPaymentReciptByIdQuery = { __typename?: 'Query', getPaymentReciptById: { __typename?: 'EventTransactionHistory', _id: string, customId: string, billingEmail: string, billingGst: string, billingName: string, isSameCity: boolean, CALLBACK_URL: string, CHANNEL_ID: string, CHECKSUMHASH: string, CUST_ID: string, EMAIL: string, MID: string, ORDER_ID: string, TXN_AMOUNT: string, WEBSITE: string, isPaymnetPaid: boolean, isActive: boolean, createdAt: any, cpeEvnet?: { __typename?: 'CpeEvent', _id: string, name: string, img: string, date1: any, lati: string, longi: string, cpehrs: string, date2: any, time1: string, time2: string, location: string, flyer: string, capacity: string, cutoffDate?: any | null, cms: string, price: number, igst: number, cgst: number, sgst: number, isForStudent: boolean, isArchived: boolean, isActive: boolean, igstState?: { __typename?: 'State', _id: string, isActive: boolean, name: string } | null } | null } };

export type GetCountByCpeEventQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCountByCpeEventQuery = { __typename?: 'Query', getCountByCpeEvent: { __typename?: 'IEventRegistrationCount', eventId: string, occupied: string } };

export type GetAllSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSkillsQuery = { __typename?: 'Query', getAllSkills: Array<{ __typename?: 'Skills', _id: string, name: string, isActive: boolean }> };

export type GetMemberSkillByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetMemberSkillByIdQuery = { __typename?: 'Query', getMemberSkillById: { __typename?: 'MemberSkill', _id: string, membershipNumber: string, isActive: boolean, skills?: { __typename?: 'Skills', _id: string, name: string, isActive: boolean } | null } };

export type GetAllMemberSkillQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMemberSkillQuery = { __typename?: 'Query', getAllMemberSkill: Array<{ __typename?: 'MemberSkill', _id: string, membershipNumber: string, isActive: boolean, skills?: { __typename?: 'Skills', _id: string, name: string, isActive: boolean } | null }> };

export type GetMySkillListQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetMySkillListQuery = { __typename?: 'Query', getMySkillList: Array<{ __typename?: 'MemberSkill', _id: string, membershipNumber: string, isActive: boolean, skills?: { __typename?: 'Skills', _id: string, name: string, isActive: boolean } | null }> };

export type GetAllPodcastQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPodcastQuery = { __typename?: 'Query', getAllPodcast: Array<{ __typename?: 'Podcast', _id: string, name: string, contact: string, cms: string, email: string, img: string, isActive: boolean }> };

export type GetPodcastByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetPodcastByIdQuery = { __typename?: 'Query', getPodcastById: { __typename?: 'Podcast', _id: string, name: string, contact: string, cms: string, email: string, img: string, isActive: boolean } };

export type GetBusinesslistingByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetBusinesslistingByIdQuery = { __typename?: 'Query', getBusinesslistingById: { __typename?: 'Businesslisting', _id: string, sponserimg: string, name: string, cms: string, isActive: boolean } };

export type GetAllBusinessListingQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBusinessListingQuery = { __typename?: 'Query', getAllBusinessListing: Array<{ __typename?: 'Businesslisting', _id: string, cms: string, sponserimg: string, name: string, isActive: boolean }> };

export type GetAllEventSpeakerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventSpeakerQuery = { __typename?: 'Query', getAllEventSpeaker: Array<{ __typename?: 'EventSpeaker', _id: string, speakerimg: string, detailsimg: string, isActive: boolean, cpeEvent?: { __typename?: 'CpeEvent', _id: string, img: string, name: string } | null }> };

export type GetAllWhatWeBrignToYouQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWhatWeBrignToYouQuery = { __typename?: 'Query', getAllWhatWeBrignToYou: Array<{ __typename?: 'WhatWeBrignToYou', _id: string, name: string, image: string, description: string, redirectLink: string, icon: string, isWIRC: boolean, isActive: boolean }> };

export type GetAllYoutubeLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllYoutubeLinksQuery = { __typename?: 'Query', getAllYoutubeLinks: Array<{ __typename?: 'YoutubeLinks', _id: string, name: string, redirectlink: string, isActive: boolean, category?: { __typename?: 'WhatWeBrignToYou', _id: string, name: string, isActive: boolean, isWIRC: boolean } | null }> };

export type GetAllWicasaNewsLatterQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWicasaNewsLatterQuery = { __typename?: 'Query', getAllWicasaNewsLatter: Array<{ __typename?: 'WicasaNewsLatter', _id: string, name: string, date: any, redirectlink: string, img: string, pdf: string, iswirc: boolean, showIndex: string, isActive: boolean }> };

export type GetWhatWeBrignToYouByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetWhatWeBrignToYouByIdQuery = { __typename?: 'Query', getWhatWeBrignToYouById: { __typename?: 'WhatWeBrignToYou', _id: string, name: string, image: string, description: string, redirectLink: string, icon: string, isWIRC: boolean, isActive: boolean } };

export type GetEventSpeakerByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetEventSpeakerByIdQuery = { __typename?: 'Query', getEventSpeakerById: { __typename?: 'EventSpeaker', _id: string, speakerimg: string, detailsimg: string, isActive: boolean, cpeEvent?: { __typename?: 'CpeEvent', _id: string, img: string, name: string } | null } };

export type GetAllInvitationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInvitationQuery = { __typename?: 'Query', getAllInvitation: Array<{ __typename?: 'NetworkingInvite', _id: string, isAccepted: boolean, isActive: boolean, inviteFrom?: { __typename?: 'User', memberRegistration: { __typename?: 'MemberRegistration', _id: string, firstName: string, middleName: string, lastName: string } } | null, inviteTo?: { __typename?: 'User', memberRegistration: { __typename?: 'MemberRegistration', _id: string, firstName: string, middleName: string, lastName: string } } | null, cpeEvent?: { __typename?: 'CpeEvent', _id: string, name: string } | null }> };

export type GetAllCpeResourceCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCpeResourceCategoryQuery = { __typename?: 'Query', getAllCpeResourceCategory: Array<{ __typename?: 'CpeResourceCategory', _id: string, name: string, date: any, isActive: boolean }> };

export type GetCpeResourceByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCpeResourceByIdQuery = { __typename?: 'Query', getCpeResourceById: { __typename?: 'CpeResource', _id: string, name: string, speaker: string, uri: string, urllink: string, isActive: boolean, cpeResourceCategory?: { __typename?: 'CpeResourceCategory', _id: string, date: any, name: string } | null } };

export type GetAllCpeResourceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCpeResourceQuery = { __typename?: 'Query', getAllCpeResource: Array<{ __typename?: 'CpeResource', _id: string, name: string, speaker: string, uri: string, urllink: string, isActive: boolean, cpeResourceCategory?: { __typename?: 'CpeResourceCategory', _id: string, date: any, isActive: boolean, name: string } | null }> };

export type GetMyMobileEventList2QueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyMobileEventList2Query = { __typename?: 'Query', getMyMobileEventList2: Array<{ __typename?: 'RegistrationEventList2', registrationDate: string, eventName: string, startDate: string, endDate: string, eventAddress: string, eventId: string, isEventOff: boolean }> };

export type GetCityByIdQueryVariables = Exact<{
  options: IGetById;
}>;


export type GetCityByIdQuery = { __typename?: 'Query', getCityById: { __typename?: 'City', _id: string, name: string, isActive: boolean } };

export type CheckExhibitionQueryVariables = Exact<{
  membershipNo: Scalars['String']['input'];
  cpeEvent: Scalars['String']['input'];
}>;


export type CheckExhibitionQuery = { __typename?: 'Query', checkExhibition: { __typename?: 'OfflineResponse', success: boolean, msg: string, data: { __typename?: 'MemberInfo', name: string, email: string, contactNo: string, membershipNo: string } } };

export type GetMyOfflineMobileEventList2QueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyOfflineMobileEventList2Query = { __typename?: 'Query', getMyOfflineMobileEventList2: Array<{ __typename?: 'OfflineRegistrationEventList', registrationDate: string, eventName: string, startDate: string, endDate: string, eventAddress: string, eventId: string, isEventOff: boolean, membershipnumber: string }> };


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
export const AddFeedBackFromDocument = gql`
    mutation AddFeedBackFrom($options: IFeedBackForm!) {
  addFeedBackFrom(options: $options) {
    success
    msg
    data
  }
}
    `;
export type AddFeedBackFromMutationFn = Apollo.MutationFunction<AddFeedBackFromMutation, AddFeedBackFromMutationVariables>;

/**
 * __useAddFeedBackFromMutation__
 *
 * To run a mutation, you first call `useAddFeedBackFromMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFeedBackFromMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFeedBackFromMutation, { data, loading, error }] = useAddFeedBackFromMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAddFeedBackFromMutation(baseOptions?: Apollo.MutationHookOptions<AddFeedBackFromMutation, AddFeedBackFromMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFeedBackFromMutation, AddFeedBackFromMutationVariables>(AddFeedBackFromDocument, options);
      }
export type AddFeedBackFromMutationHookResult = ReturnType<typeof useAddFeedBackFromMutation>;
export type AddFeedBackFromMutationResult = Apollo.MutationResult<AddFeedBackFromMutation>;
export type AddFeedBackFromMutationOptions = Apollo.BaseMutationOptions<AddFeedBackFromMutation, AddFeedBackFromMutationVariables>;
export const GetFilterdSkillMemberV2Document = gql`
    mutation GetFilterdSkillMemberV2($options: IGetAllMemberSkillsV2!) {
  getFilterdSkillMemberV2(options: $options) {
    name
    city
    email
    mobile
    gender
    skill
    firebaseId
    userid
  }
}
    `;
export type GetFilterdSkillMemberV2MutationFn = Apollo.MutationFunction<GetFilterdSkillMemberV2Mutation, GetFilterdSkillMemberV2MutationVariables>;

/**
 * __useGetFilterdSkillMemberV2Mutation__
 *
 * To run a mutation, you first call `useGetFilterdSkillMemberV2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetFilterdSkillMemberV2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getFilterdSkillMemberV2Mutation, { data, loading, error }] = useGetFilterdSkillMemberV2Mutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetFilterdSkillMemberV2Mutation(baseOptions?: Apollo.MutationHookOptions<GetFilterdSkillMemberV2Mutation, GetFilterdSkillMemberV2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetFilterdSkillMemberV2Mutation, GetFilterdSkillMemberV2MutationVariables>(GetFilterdSkillMemberV2Document, options);
      }
export type GetFilterdSkillMemberV2MutationHookResult = ReturnType<typeof useGetFilterdSkillMemberV2Mutation>;
export type GetFilterdSkillMemberV2MutationResult = Apollo.MutationResult<GetFilterdSkillMemberV2Mutation>;
export type GetFilterdSkillMemberV2MutationOptions = Apollo.BaseMutationOptions<GetFilterdSkillMemberV2Mutation, GetFilterdSkillMemberV2MutationVariables>;
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
      EventHistoryID
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
export const CreateOrUpdateMemberSkillDocument = gql`
    mutation CreateOrUpdateMemberSkill($options: IGetMemberSkill!) {
  createOrUpdateMemberSkill(options: $options) {
    success
    msg
    data
  }
}
    `;
export type CreateOrUpdateMemberSkillMutationFn = Apollo.MutationFunction<CreateOrUpdateMemberSkillMutation, CreateOrUpdateMemberSkillMutationVariables>;

/**
 * __useCreateOrUpdateMemberSkillMutation__
 *
 * To run a mutation, you first call `useCreateOrUpdateMemberSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrUpdateMemberSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrUpdateMemberSkillMutation, { data, loading, error }] = useCreateOrUpdateMemberSkillMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateOrUpdateMemberSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrUpdateMemberSkillMutation, CreateOrUpdateMemberSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrUpdateMemberSkillMutation, CreateOrUpdateMemberSkillMutationVariables>(CreateOrUpdateMemberSkillDocument, options);
      }
export type CreateOrUpdateMemberSkillMutationHookResult = ReturnType<typeof useCreateOrUpdateMemberSkillMutation>;
export type CreateOrUpdateMemberSkillMutationResult = Apollo.MutationResult<CreateOrUpdateMemberSkillMutation>;
export type CreateOrUpdateMemberSkillMutationOptions = Apollo.BaseMutationOptions<CreateOrUpdateMemberSkillMutation, CreateOrUpdateMemberSkillMutationVariables>;
export const DeleteMemberSkillDocument = gql`
    mutation DeleteMemberSkill($options: IGetByID!) {
  deleteMemberSkill(options: $options) {
    success
    msg
    data
  }
}
    `;
export type DeleteMemberSkillMutationFn = Apollo.MutationFunction<DeleteMemberSkillMutation, DeleteMemberSkillMutationVariables>;

/**
 * __useDeleteMemberSkillMutation__
 *
 * To run a mutation, you first call `useDeleteMemberSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberSkillMutation, { data, loading, error }] = useDeleteMemberSkillMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useDeleteMemberSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMemberSkillMutation, DeleteMemberSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMemberSkillMutation, DeleteMemberSkillMutationVariables>(DeleteMemberSkillDocument, options);
      }
export type DeleteMemberSkillMutationHookResult = ReturnType<typeof useDeleteMemberSkillMutation>;
export type DeleteMemberSkillMutationResult = Apollo.MutationResult<DeleteMemberSkillMutation>;
export type DeleteMemberSkillMutationOptions = Apollo.BaseMutationOptions<DeleteMemberSkillMutation, DeleteMemberSkillMutationVariables>;
export const SendInvitationDocument = gql`
    mutation SendInvitation($firebaseId: String!, $eventId: String!, $inviteTo: String!) {
  sendInvitation(firebaseId: $firebaseId, eventId: $eventId, inviteTo: $inviteTo) {
    success
    msg
    data
  }
}
    `;
export type SendInvitationMutationFn = Apollo.MutationFunction<SendInvitationMutation, SendInvitationMutationVariables>;

/**
 * __useSendInvitationMutation__
 *
 * To run a mutation, you first call `useSendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInvitationMutation, { data, loading, error }] = useSendInvitationMutation({
 *   variables: {
 *      firebaseId: // value for 'firebaseId'
 *      eventId: // value for 'eventId'
 *      inviteTo: // value for 'inviteTo'
 *   },
 * });
 */
export function useSendInvitationMutation(baseOptions?: Apollo.MutationHookOptions<SendInvitationMutation, SendInvitationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendInvitationMutation, SendInvitationMutationVariables>(SendInvitationDocument, options);
      }
export type SendInvitationMutationHookResult = ReturnType<typeof useSendInvitationMutation>;
export type SendInvitationMutationResult = Apollo.MutationResult<SendInvitationMutation>;
export type SendInvitationMutationOptions = Apollo.BaseMutationOptions<SendInvitationMutation, SendInvitationMutationVariables>;
export const GenEmailWithMembershipNumberDocument = gql`
    mutation GenEmailWithMembershipNumber($options: IForgotPasswordInput!) {
  genEmailWithMembershipNumber(options: $options) {
    success
    msg
    data
  }
}
    `;
export type GenEmailWithMembershipNumberMutationFn = Apollo.MutationFunction<GenEmailWithMembershipNumberMutation, GenEmailWithMembershipNumberMutationVariables>;

/**
 * __useGenEmailWithMembershipNumberMutation__
 *
 * To run a mutation, you first call `useGenEmailWithMembershipNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenEmailWithMembershipNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [genEmailWithMembershipNumberMutation, { data, loading, error }] = useGenEmailWithMembershipNumberMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGenEmailWithMembershipNumberMutation(baseOptions?: Apollo.MutationHookOptions<GenEmailWithMembershipNumberMutation, GenEmailWithMembershipNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenEmailWithMembershipNumberMutation, GenEmailWithMembershipNumberMutationVariables>(GenEmailWithMembershipNumberDocument, options);
      }
export type GenEmailWithMembershipNumberMutationHookResult = ReturnType<typeof useGenEmailWithMembershipNumberMutation>;
export type GenEmailWithMembershipNumberMutationResult = Apollo.MutationResult<GenEmailWithMembershipNumberMutation>;
export type GenEmailWithMembershipNumberMutationOptions = Apollo.BaseMutationOptions<GenEmailWithMembershipNumberMutation, GenEmailWithMembershipNumberMutationVariables>;
export const VerifyEmailWithMembershipNumberDocument = gql`
    mutation VerifyEmailWithMembershipNumber($options: IGetEmailInput!) {
  verifyEmailWithMembershipNumber(options: $options) {
    success
    msg
    jwt
    email
    name
  }
}
    `;
export type VerifyEmailWithMembershipNumberMutationFn = Apollo.MutationFunction<VerifyEmailWithMembershipNumberMutation, VerifyEmailWithMembershipNumberMutationVariables>;

/**
 * __useVerifyEmailWithMembershipNumberMutation__
 *
 * To run a mutation, you first call `useVerifyEmailWithMembershipNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailWithMembershipNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailWithMembershipNumberMutation, { data, loading, error }] = useVerifyEmailWithMembershipNumberMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useVerifyEmailWithMembershipNumberMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailWithMembershipNumberMutation, VerifyEmailWithMembershipNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailWithMembershipNumberMutation, VerifyEmailWithMembershipNumberMutationVariables>(VerifyEmailWithMembershipNumberDocument, options);
      }
export type VerifyEmailWithMembershipNumberMutationHookResult = ReturnType<typeof useVerifyEmailWithMembershipNumberMutation>;
export type VerifyEmailWithMembershipNumberMutationResult = Apollo.MutationResult<VerifyEmailWithMembershipNumberMutation>;
export type VerifyEmailWithMembershipNumberMutationOptions = Apollo.BaseMutationOptions<VerifyEmailWithMembershipNumberMutation, VerifyEmailWithMembershipNumberMutationVariables>;
export const CreateMemberRegistrationDocument = gql`
    mutation CreateMemberRegistration($options: ICreateMemberRegistration!) {
  createMemberRegistration(options: $options) {
    success
    msg
    data
  }
}
    `;
export type CreateMemberRegistrationMutationFn = Apollo.MutationFunction<CreateMemberRegistrationMutation, CreateMemberRegistrationMutationVariables>;

/**
 * __useCreateMemberRegistrationMutation__
 *
 * To run a mutation, you first call `useCreateMemberRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberRegistrationMutation, { data, loading, error }] = useCreateMemberRegistrationMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateMemberRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberRegistrationMutation, CreateMemberRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberRegistrationMutation, CreateMemberRegistrationMutationVariables>(CreateMemberRegistrationDocument, options);
      }
export type CreateMemberRegistrationMutationHookResult = ReturnType<typeof useCreateMemberRegistrationMutation>;
export type CreateMemberRegistrationMutationResult = Apollo.MutationResult<CreateMemberRegistrationMutation>;
export type CreateMemberRegistrationMutationOptions = Apollo.BaseMutationOptions<CreateMemberRegistrationMutation, CreateMemberRegistrationMutationVariables>;
export const SetFirebaseIdDocument = gql`
    mutation SetFirebaseId($firebaseId: String!) {
  setFirebaseId(firebaseId: $firebaseId)
}
    `;
export type SetFirebaseIdMutationFn = Apollo.MutationFunction<SetFirebaseIdMutation, SetFirebaseIdMutationVariables>;

/**
 * __useSetFirebaseIdMutation__
 *
 * To run a mutation, you first call `useSetFirebaseIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFirebaseIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFirebaseIdMutation, { data, loading, error }] = useSetFirebaseIdMutation({
 *   variables: {
 *      firebaseId: // value for 'firebaseId'
 *   },
 * });
 */
export function useSetFirebaseIdMutation(baseOptions?: Apollo.MutationHookOptions<SetFirebaseIdMutation, SetFirebaseIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetFirebaseIdMutation, SetFirebaseIdMutationVariables>(SetFirebaseIdDocument, options);
      }
export type SetFirebaseIdMutationHookResult = ReturnType<typeof useSetFirebaseIdMutation>;
export type SetFirebaseIdMutationResult = Apollo.MutationResult<SetFirebaseIdMutation>;
export type SetFirebaseIdMutationOptions = Apollo.BaseMutationOptions<SetFirebaseIdMutation, SetFirebaseIdMutationVariables>;
export const IsInvitateAcceptedDocument = gql`
    mutation IsInvitateAccepted($eventId: String!, $inviteTo: String!) {
  IsInvitateAccepted(eventId: $eventId, inviteTo: $inviteTo)
}
    `;
export type IsInvitateAcceptedMutationFn = Apollo.MutationFunction<IsInvitateAcceptedMutation, IsInvitateAcceptedMutationVariables>;

/**
 * __useIsInvitateAcceptedMutation__
 *
 * To run a mutation, you first call `useIsInvitateAcceptedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useIsInvitateAcceptedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [isInvitateAcceptedMutation, { data, loading, error }] = useIsInvitateAcceptedMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      inviteTo: // value for 'inviteTo'
 *   },
 * });
 */
export function useIsInvitateAcceptedMutation(baseOptions?: Apollo.MutationHookOptions<IsInvitateAcceptedMutation, IsInvitateAcceptedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IsInvitateAcceptedMutation, IsInvitateAcceptedMutationVariables>(IsInvitateAcceptedDocument, options);
      }
export type IsInvitateAcceptedMutationHookResult = ReturnType<typeof useIsInvitateAcceptedMutation>;
export type IsInvitateAcceptedMutationResult = Apollo.MutationResult<IsInvitateAcceptedMutation>;
export type IsInvitateAcceptedMutationOptions = Apollo.BaseMutationOptions<IsInvitateAcceptedMutation, IsInvitateAcceptedMutationVariables>;
export const AcceptInviteDocument = gql`
    mutation AcceptInvite($eventId: String!, $inviteTo: String!) {
  acceptInvite(eventId: $eventId, inviteTo: $inviteTo)
}
    `;
export type AcceptInviteMutationFn = Apollo.MutationFunction<AcceptInviteMutation, AcceptInviteMutationVariables>;

/**
 * __useAcceptInviteMutation__
 *
 * To run a mutation, you first call `useAcceptInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInviteMutation, { data, loading, error }] = useAcceptInviteMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      inviteTo: // value for 'inviteTo'
 *   },
 * });
 */
export function useAcceptInviteMutation(baseOptions?: Apollo.MutationHookOptions<AcceptInviteMutation, AcceptInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(AcceptInviteDocument, options);
      }
export type AcceptInviteMutationHookResult = ReturnType<typeof useAcceptInviteMutation>;
export type AcceptInviteMutationResult = Apollo.MutationResult<AcceptInviteMutation>;
export type AcceptInviteMutationOptions = Apollo.BaseMutationOptions<AcceptInviteMutation, AcceptInviteMutationVariables>;
export const RejectInviteDocument = gql`
    mutation RejectInvite($eventId: String!, $inviteTo: String!) {
  rejectInvite(eventId: $eventId, inviteTo: $inviteTo)
}
    `;
export type RejectInviteMutationFn = Apollo.MutationFunction<RejectInviteMutation, RejectInviteMutationVariables>;

/**
 * __useRejectInviteMutation__
 *
 * To run a mutation, you first call `useRejectInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectInviteMutation, { data, loading, error }] = useRejectInviteMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      inviteTo: // value for 'inviteTo'
 *   },
 * });
 */
export function useRejectInviteMutation(baseOptions?: Apollo.MutationHookOptions<RejectInviteMutation, RejectInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectInviteMutation, RejectInviteMutationVariables>(RejectInviteDocument, options);
      }
export type RejectInviteMutationHookResult = ReturnType<typeof useRejectInviteMutation>;
export type RejectInviteMutationResult = Apollo.MutationResult<RejectInviteMutation>;
export type RejectInviteMutationOptions = Apollo.BaseMutationOptions<RejectInviteMutation, RejectInviteMutationVariables>;
export const SpeakerMailDocument = gql`
    mutation SpeakerMail($options: QNAMailInput!) {
  speakerMail(options: $options) {
    success
    msg
    data
  }
}
    `;
export type SpeakerMailMutationFn = Apollo.MutationFunction<SpeakerMailMutation, SpeakerMailMutationVariables>;

/**
 * __useSpeakerMailMutation__
 *
 * To run a mutation, you first call `useSpeakerMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSpeakerMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [speakerMailMutation, { data, loading, error }] = useSpeakerMailMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useSpeakerMailMutation(baseOptions?: Apollo.MutationHookOptions<SpeakerMailMutation, SpeakerMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SpeakerMailMutation, SpeakerMailMutationVariables>(SpeakerMailDocument, options);
      }
export type SpeakerMailMutationHookResult = ReturnType<typeof useSpeakerMailMutation>;
export type SpeakerMailMutationResult = Apollo.MutationResult<SpeakerMailMutation>;
export type SpeakerMailMutationOptions = Apollo.BaseMutationOptions<SpeakerMailMutation, SpeakerMailMutationVariables>;
export const GetMemberInfoByMembershipNumber2Document = gql`
    mutation GetMemberInfoByMembershipNumber2($options: IGetByID!) {
  getMemberInfoByMembershipNumber2(options: $options) {
    isData
    name
    organization
    membershipNo
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
export type GetMemberInfoByMembershipNumber2MutationFn = Apollo.MutationFunction<GetMemberInfoByMembershipNumber2Mutation, GetMemberInfoByMembershipNumber2MutationVariables>;

/**
 * __useGetMemberInfoByMembershipNumber2Mutation__
 *
 * To run a mutation, you first call `useGetMemberInfoByMembershipNumber2Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetMemberInfoByMembershipNumber2Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getMemberInfoByMembershipNumber2Mutation, { data, loading, error }] = useGetMemberInfoByMembershipNumber2Mutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMemberInfoByMembershipNumber2Mutation(baseOptions?: Apollo.MutationHookOptions<GetMemberInfoByMembershipNumber2Mutation, GetMemberInfoByMembershipNumber2MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetMemberInfoByMembershipNumber2Mutation, GetMemberInfoByMembershipNumber2MutationVariables>(GetMemberInfoByMembershipNumber2Document, options);
      }
export type GetMemberInfoByMembershipNumber2MutationHookResult = ReturnType<typeof useGetMemberInfoByMembershipNumber2Mutation>;
export type GetMemberInfoByMembershipNumber2MutationResult = Apollo.MutationResult<GetMemberInfoByMembershipNumber2Mutation>;
export type GetMemberInfoByMembershipNumber2MutationOptions = Apollo.BaseMutationOptions<GetMemberInfoByMembershipNumber2Mutation, GetMemberInfoByMembershipNumber2MutationVariables>;
export const GetAllCpeEventDocument = gql`
    query GetAllCpeEvent {
  getAllCpeEvent {
    _id
    name
    img
    date1
    cpehrs
    lati
    longi
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
export function useGetAllCpeEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCpeEventQuery, GetAllCpeEventQueryVariables>(GetAllCpeEventDocument, options);
        }
export type GetAllCpeEventQueryHookResult = ReturnType<typeof useGetAllCpeEventQuery>;
export type GetAllCpeEventLazyQueryHookResult = ReturnType<typeof useGetAllCpeEventLazyQuery>;
export type GetAllCpeEventSuspenseQueryHookResult = ReturnType<typeof useGetAllCpeEventSuspenseQuery>;
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
export function useGetAllStateSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllStateQuery, GetAllStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllStateQuery, GetAllStateQueryVariables>(GetAllStateDocument, options);
        }
export type GetAllStateQueryHookResult = ReturnType<typeof useGetAllStateQuery>;
export type GetAllStateLazyQueryHookResult = ReturnType<typeof useGetAllStateLazyQuery>;
export type GetAllStateSuspenseQueryHookResult = ReturnType<typeof useGetAllStateSuspenseQuery>;
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
export function useGetAllCountrySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCountryQuery, GetAllCountryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCountryQuery, GetAllCountryQueryVariables>(GetAllCountryDocument, options);
        }
export type GetAllCountryQueryHookResult = ReturnType<typeof useGetAllCountryQuery>;
export type GetAllCountryLazyQueryHookResult = ReturnType<typeof useGetAllCountryLazyQuery>;
export type GetAllCountrySuspenseQueryHookResult = ReturnType<typeof useGetAllCountrySuspenseQuery>;
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
export function useGetAllCitySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCityQuery, GetAllCityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCityQuery, GetAllCityQueryVariables>(GetAllCityDocument, options);
        }
export type GetAllCityQueryHookResult = ReturnType<typeof useGetAllCityQuery>;
export type GetAllCityLazyQueryHookResult = ReturnType<typeof useGetAllCityLazyQuery>;
export type GetAllCitySuspenseQueryHookResult = ReturnType<typeof useGetAllCitySuspenseQuery>;
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
export function useGetTitleByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTitleByIdQuery, GetTitleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTitleByIdQuery, GetTitleByIdQueryVariables>(GetTitleByIdDocument, options);
        }
export type GetTitleByIdQueryHookResult = ReturnType<typeof useGetTitleByIdQuery>;
export type GetTitleByIdLazyQueryHookResult = ReturnType<typeof useGetTitleByIdLazyQuery>;
export type GetTitleByIdSuspenseQueryHookResult = ReturnType<typeof useGetTitleByIdSuspenseQuery>;
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
export function useGetRegionByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRegionByIdQuery, GetRegionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRegionByIdQuery, GetRegionByIdQueryVariables>(GetRegionByIdDocument, options);
        }
export type GetRegionByIdQueryHookResult = ReturnType<typeof useGetRegionByIdQuery>;
export type GetRegionByIdLazyQueryHookResult = ReturnType<typeof useGetRegionByIdLazyQuery>;
export type GetRegionByIdSuspenseQueryHookResult = ReturnType<typeof useGetRegionByIdSuspenseQuery>;
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
export function useGetAllRegionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllRegionQuery, GetAllRegionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllRegionQuery, GetAllRegionQueryVariables>(GetAllRegionDocument, options);
        }
export type GetAllRegionQueryHookResult = ReturnType<typeof useGetAllRegionQuery>;
export type GetAllRegionLazyQueryHookResult = ReturnType<typeof useGetAllRegionLazyQuery>;
export type GetAllRegionSuspenseQueryHookResult = ReturnType<typeof useGetAllRegionSuspenseQuery>;
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
export function useGetAllTitleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTitleQuery, GetAllTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTitleQuery, GetAllTitleQueryVariables>(GetAllTitleDocument, options);
        }
export type GetAllTitleQueryHookResult = ReturnType<typeof useGetAllTitleQuery>;
export type GetAllTitleLazyQueryHookResult = ReturnType<typeof useGetAllTitleLazyQuery>;
export type GetAllTitleSuspenseQueryHookResult = ReturnType<typeof useGetAllTitleSuspenseQuery>;
export type GetAllTitleQueryResult = Apollo.QueryResult<GetAllTitleQuery, GetAllTitleQueryVariables>;
export const GetAllGenderDocument = gql`
    query GetAllGender {
  getAllGender {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetAllGenderQuery__
 *
 * To run a query within a React component, call `useGetAllGenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGenderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGenderQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGenderQuery, GetAllGenderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGenderQuery, GetAllGenderQueryVariables>(GetAllGenderDocument, options);
      }
export function useGetAllGenderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGenderQuery, GetAllGenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGenderQuery, GetAllGenderQueryVariables>(GetAllGenderDocument, options);
        }
export function useGetAllGenderSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllGenderQuery, GetAllGenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllGenderQuery, GetAllGenderQueryVariables>(GetAllGenderDocument, options);
        }
export type GetAllGenderQueryHookResult = ReturnType<typeof useGetAllGenderQuery>;
export type GetAllGenderLazyQueryHookResult = ReturnType<typeof useGetAllGenderLazyQuery>;
export type GetAllGenderSuspenseQueryHookResult = ReturnType<typeof useGetAllGenderSuspenseQuery>;
export type GetAllGenderQueryResult = Apollo.QueryResult<GetAllGenderQuery, GetAllGenderQueryVariables>;
export const GetGenderByIdDocument = gql`
    query GetGenderById($options: IGetByID!) {
  getGenderById(options: $options) {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetGenderByIdQuery__
 *
 * To run a query within a React component, call `useGetGenderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenderByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetGenderByIdQuery(baseOptions: Apollo.QueryHookOptions<GetGenderByIdQuery, GetGenderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenderByIdQuery, GetGenderByIdQueryVariables>(GetGenderByIdDocument, options);
      }
export function useGetGenderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenderByIdQuery, GetGenderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenderByIdQuery, GetGenderByIdQueryVariables>(GetGenderByIdDocument, options);
        }
export function useGetGenderByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenderByIdQuery, GetGenderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenderByIdQuery, GetGenderByIdQueryVariables>(GetGenderByIdDocument, options);
        }
export type GetGenderByIdQueryHookResult = ReturnType<typeof useGetGenderByIdQuery>;
export type GetGenderByIdLazyQueryHookResult = ReturnType<typeof useGetGenderByIdLazyQuery>;
export type GetGenderByIdSuspenseQueryHookResult = ReturnType<typeof useGetGenderByIdSuspenseQuery>;
export type GetGenderByIdQueryResult = Apollo.QueryResult<GetGenderByIdQuery, GetGenderByIdQueryVariables>;
export const GetMyMobileEventListDocument = gql`
    query GetMyMobileEventList {
  getMyMobileEventList {
    registrationDate
    eventName
    startDate
    endDate
    eventAddress
    eventId
  }
}
    `;

/**
 * __useGetMyMobileEventListQuery__
 *
 * To run a query within a React component, call `useGetMyMobileEventListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyMobileEventListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyMobileEventListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyMobileEventListQuery(baseOptions?: Apollo.QueryHookOptions<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>(GetMyMobileEventListDocument, options);
      }
export function useGetMyMobileEventListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>(GetMyMobileEventListDocument, options);
        }
export function useGetMyMobileEventListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>(GetMyMobileEventListDocument, options);
        }
export type GetMyMobileEventListQueryHookResult = ReturnType<typeof useGetMyMobileEventListQuery>;
export type GetMyMobileEventListLazyQueryHookResult = ReturnType<typeof useGetMyMobileEventListLazyQuery>;
export type GetMyMobileEventListSuspenseQueryHookResult = ReturnType<typeof useGetMyMobileEventListSuspenseQuery>;
export type GetMyMobileEventListQueryResult = Apollo.QueryResult<GetMyMobileEventListQuery, GetMyMobileEventListQueryVariables>;
export const GetEventTopicByIdDocument = gql`
    query GetEventTopicById($options: IGetByID!) {
  getEventTopicById(options: $options) {
    _id
    cpeEvent {
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
      lati
      longi
      capacity
      cutoffDate
      cms
      externalRegistration
      price
      igst
      cgst
      sgst
      isRegistrationOn
      isForStudent
      isArchived
      isActive
    }
    topic
    faculty
    isActive
  }
}
    `;

/**
 * __useGetEventTopicByIdQuery__
 *
 * To run a query within a React component, call `useGetEventTopicByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventTopicByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventTopicByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetEventTopicByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>(GetEventTopicByIdDocument, options);
      }
export function useGetEventTopicByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>(GetEventTopicByIdDocument, options);
        }
export function useGetEventTopicByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>(GetEventTopicByIdDocument, options);
        }
export type GetEventTopicByIdQueryHookResult = ReturnType<typeof useGetEventTopicByIdQuery>;
export type GetEventTopicByIdLazyQueryHookResult = ReturnType<typeof useGetEventTopicByIdLazyQuery>;
export type GetEventTopicByIdSuspenseQueryHookResult = ReturnType<typeof useGetEventTopicByIdSuspenseQuery>;
export type GetEventTopicByIdQueryResult = Apollo.QueryResult<GetEventTopicByIdQuery, GetEventTopicByIdQueryVariables>;
export const GetAllEventTopicDocument = gql`
    query GetAllEventTopic {
  getAllEventTopic {
    _id
    cpeEvent {
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
      lati
      longi
      capacity
      cutoffDate
      cms
      externalRegistration
      price
      igst
      cgst
      sgst
      isRegistrationOn
      isForStudent
      isArchived
      isActive
    }
    topic
    faculty
    isActive
  }
}
    `;

/**
 * __useGetAllEventTopicQuery__
 *
 * To run a query within a React component, call `useGetAllEventTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventTopicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEventTopicQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>(GetAllEventTopicDocument, options);
      }
export function useGetAllEventTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>(GetAllEventTopicDocument, options);
        }
export function useGetAllEventTopicSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>(GetAllEventTopicDocument, options);
        }
export type GetAllEventTopicQueryHookResult = ReturnType<typeof useGetAllEventTopicQuery>;
export type GetAllEventTopicLazyQueryHookResult = ReturnType<typeof useGetAllEventTopicLazyQuery>;
export type GetAllEventTopicSuspenseQueryHookResult = ReturnType<typeof useGetAllEventTopicSuspenseQuery>;
export type GetAllEventTopicQueryResult = Apollo.QueryResult<GetAllEventTopicQuery, GetAllEventTopicQueryVariables>;
export const GetMemberAttendanceListDocument = gql`
    query GetMemberAttendanceList($eventId: String!) {
  getMemberAttendanceList(eventId: $eventId) {
    _id
    firstName
    lastName
    middleName
    hash
    email
    userType
    gender {
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
    pinCode
    phone
    isApproved
    isActive
  }
}
    `;

/**
 * __useGetMemberAttendanceListQuery__
 *
 * To run a query within a React component, call `useGetMemberAttendanceListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberAttendanceListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberAttendanceListQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */
export function useGetMemberAttendanceListQuery(baseOptions: Apollo.QueryHookOptions<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>(GetMemberAttendanceListDocument, options);
      }
export function useGetMemberAttendanceListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>(GetMemberAttendanceListDocument, options);
        }
export function useGetMemberAttendanceListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>(GetMemberAttendanceListDocument, options);
        }
export type GetMemberAttendanceListQueryHookResult = ReturnType<typeof useGetMemberAttendanceListQuery>;
export type GetMemberAttendanceListLazyQueryHookResult = ReturnType<typeof useGetMemberAttendanceListLazyQuery>;
export type GetMemberAttendanceListSuspenseQueryHookResult = ReturnType<typeof useGetMemberAttendanceListSuspenseQuery>;
export type GetMemberAttendanceListQueryResult = Apollo.QueryResult<GetMemberAttendanceListQuery, GetMemberAttendanceListQueryVariables>;
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
    gender {
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
export function useMyProfileInformationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MyProfileInformationQuery, MyProfileInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MyProfileInformationQuery, MyProfileInformationQueryVariables>(MyProfileInformationDocument, options);
        }
export type MyProfileInformationQueryHookResult = ReturnType<typeof useMyProfileInformationQuery>;
export type MyProfileInformationLazyQueryHookResult = ReturnType<typeof useMyProfileInformationLazyQuery>;
export type MyProfileInformationSuspenseQueryHookResult = ReturnType<typeof useMyProfileInformationSuspenseQuery>;
export type MyProfileInformationQueryResult = Apollo.QueryResult<MyProfileInformationQuery, MyProfileInformationQueryVariables>;
export const GetMyAttendedEventDocument = gql`
    query GetMyAttendedEvent {
  getMyAttendedEvent {
    _id
    cpeEvent {
      _id
      name
      img
      lati
      longi
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
      igst
      cgst
      sgst
      isForStudent
      isArchived
      isActive
    }
    membershipId
    updatedAt
    isActive
  }
}
    `;

/**
 * __useGetMyAttendedEventQuery__
 *
 * To run a query within a React component, call `useGetMyAttendedEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyAttendedEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyAttendedEventQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyAttendedEventQuery(baseOptions?: Apollo.QueryHookOptions<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>(GetMyAttendedEventDocument, options);
      }
export function useGetMyAttendedEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>(GetMyAttendedEventDocument, options);
        }
export function useGetMyAttendedEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>(GetMyAttendedEventDocument, options);
        }
export type GetMyAttendedEventQueryHookResult = ReturnType<typeof useGetMyAttendedEventQuery>;
export type GetMyAttendedEventLazyQueryHookResult = ReturnType<typeof useGetMyAttendedEventLazyQuery>;
export type GetMyAttendedEventSuspenseQueryHookResult = ReturnType<typeof useGetMyAttendedEventSuspenseQuery>;
export type GetMyAttendedEventQueryResult = Apollo.QueryResult<GetMyAttendedEventQuery, GetMyAttendedEventQueryVariables>;
export const GetTodayCpeEventDocument = gql`
    query GetTodayCpeEvent {
  getTodayCpeEvent {
    _id
    name
    img
    date1
    lati
    longi
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
 * __useGetTodayCpeEventQuery__
 *
 * To run a query within a React component, call `useGetTodayCpeEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodayCpeEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodayCpeEventQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodayCpeEventQuery(baseOptions?: Apollo.QueryHookOptions<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>(GetTodayCpeEventDocument, options);
      }
export function useGetTodayCpeEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>(GetTodayCpeEventDocument, options);
        }
export function useGetTodayCpeEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>(GetTodayCpeEventDocument, options);
        }
export type GetTodayCpeEventQueryHookResult = ReturnType<typeof useGetTodayCpeEventQuery>;
export type GetTodayCpeEventLazyQueryHookResult = ReturnType<typeof useGetTodayCpeEventLazyQuery>;
export type GetTodayCpeEventSuspenseQueryHookResult = ReturnType<typeof useGetTodayCpeEventSuspenseQuery>;
export type GetTodayCpeEventQueryResult = Apollo.QueryResult<GetTodayCpeEventQuery, GetTodayCpeEventQueryVariables>;
export const GetCpeEventByIdDocument = gql`
    query GetCpeEventById($options: IGetByID!) {
  getCpeEventById(options: $options) {
    _id
    name
    img
    date1
    cpehrs
    date2
    lati
    longi
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
export function useGetCpeEventByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCpeEventByIdQuery, GetCpeEventByIdQueryVariables>(GetCpeEventByIdDocument, options);
        }
export type GetCpeEventByIdQueryHookResult = ReturnType<typeof useGetCpeEventByIdQuery>;
export type GetCpeEventByIdLazyQueryHookResult = ReturnType<typeof useGetCpeEventByIdLazyQuery>;
export type GetCpeEventByIdSuspenseQueryHookResult = ReturnType<typeof useGetCpeEventByIdSuspenseQuery>;
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
export function useGetCpeEventRangeByCpeIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>(GetCpeEventRangeByCpeIdDocument, options);
        }
export type GetCpeEventRangeByCpeIdQueryHookResult = ReturnType<typeof useGetCpeEventRangeByCpeIdQuery>;
export type GetCpeEventRangeByCpeIdLazyQueryHookResult = ReturnType<typeof useGetCpeEventRangeByCpeIdLazyQuery>;
export type GetCpeEventRangeByCpeIdSuspenseQueryHookResult = ReturnType<typeof useGetCpeEventRangeByCpeIdSuspenseQuery>;
export type GetCpeEventRangeByCpeIdQueryResult = Apollo.QueryResult<GetCpeEventRangeByCpeIdQuery, GetCpeEventRangeByCpeIdQueryVariables>;
export const GetPaymentReciptByIdDocument = gql`
    query GetPaymentReciptById($options: IGetByID!) {
  getPaymentReciptById(options: $options) {
    _id
    customId
    billingEmail
    billingGst
    billingName
    cpeEvnet {
      _id
      name
      img
      date1
      lati
      longi
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
        isActive
        name
      }
      igst
      cgst
      sgst
      isForStudent
      isArchived
      isActive
    }
    isSameCity
    CALLBACK_URL
    CHANNEL_ID
    CHECKSUMHASH
    CUST_ID
    EMAIL
    MID
    ORDER_ID
    TXN_AMOUNT
    WEBSITE
    isPaymnetPaid
    isActive
    createdAt
  }
}
    `;

/**
 * __useGetPaymentReciptByIdQuery__
 *
 * To run a query within a React component, call `useGetPaymentReciptByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentReciptByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentReciptByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPaymentReciptByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>(GetPaymentReciptByIdDocument, options);
      }
export function useGetPaymentReciptByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>(GetPaymentReciptByIdDocument, options);
        }
export function useGetPaymentReciptByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>(GetPaymentReciptByIdDocument, options);
        }
export type GetPaymentReciptByIdQueryHookResult = ReturnType<typeof useGetPaymentReciptByIdQuery>;
export type GetPaymentReciptByIdLazyQueryHookResult = ReturnType<typeof useGetPaymentReciptByIdLazyQuery>;
export type GetPaymentReciptByIdSuspenseQueryHookResult = ReturnType<typeof useGetPaymentReciptByIdSuspenseQuery>;
export type GetPaymentReciptByIdQueryResult = Apollo.QueryResult<GetPaymentReciptByIdQuery, GetPaymentReciptByIdQueryVariables>;
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
export function useGetCountByCpeEventSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>(GetCountByCpeEventDocument, options);
        }
export type GetCountByCpeEventQueryHookResult = ReturnType<typeof useGetCountByCpeEventQuery>;
export type GetCountByCpeEventLazyQueryHookResult = ReturnType<typeof useGetCountByCpeEventLazyQuery>;
export type GetCountByCpeEventSuspenseQueryHookResult = ReturnType<typeof useGetCountByCpeEventSuspenseQuery>;
export type GetCountByCpeEventQueryResult = Apollo.QueryResult<GetCountByCpeEventQuery, GetCountByCpeEventQueryVariables>;
export const GetAllSkillsDocument = gql`
    query GetAllSkills {
  getAllSkills {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetAllSkillsQuery__
 *
 * To run a query within a React component, call `useGetAllSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSkillsQuery, GetAllSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSkillsQuery, GetAllSkillsQueryVariables>(GetAllSkillsDocument, options);
      }
export function useGetAllSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSkillsQuery, GetAllSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSkillsQuery, GetAllSkillsQueryVariables>(GetAllSkillsDocument, options);
        }
export function useGetAllSkillsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllSkillsQuery, GetAllSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllSkillsQuery, GetAllSkillsQueryVariables>(GetAllSkillsDocument, options);
        }
export type GetAllSkillsQueryHookResult = ReturnType<typeof useGetAllSkillsQuery>;
export type GetAllSkillsLazyQueryHookResult = ReturnType<typeof useGetAllSkillsLazyQuery>;
export type GetAllSkillsSuspenseQueryHookResult = ReturnType<typeof useGetAllSkillsSuspenseQuery>;
export type GetAllSkillsQueryResult = Apollo.QueryResult<GetAllSkillsQuery, GetAllSkillsQueryVariables>;
export const GetMemberSkillByIdDocument = gql`
    query GetMemberSkillById($options: IGetByID!) {
  getMemberSkillById(options: $options) {
    _id
    membershipNumber
    skills {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useGetMemberSkillByIdQuery__
 *
 * To run a query within a React component, call `useGetMemberSkillByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberSkillByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberSkillByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMemberSkillByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>(GetMemberSkillByIdDocument, options);
      }
export function useGetMemberSkillByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>(GetMemberSkillByIdDocument, options);
        }
export function useGetMemberSkillByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>(GetMemberSkillByIdDocument, options);
        }
export type GetMemberSkillByIdQueryHookResult = ReturnType<typeof useGetMemberSkillByIdQuery>;
export type GetMemberSkillByIdLazyQueryHookResult = ReturnType<typeof useGetMemberSkillByIdLazyQuery>;
export type GetMemberSkillByIdSuspenseQueryHookResult = ReturnType<typeof useGetMemberSkillByIdSuspenseQuery>;
export type GetMemberSkillByIdQueryResult = Apollo.QueryResult<GetMemberSkillByIdQuery, GetMemberSkillByIdQueryVariables>;
export const GetAllMemberSkillDocument = gql`
    query GetAllMemberSkill {
  getAllMemberSkill {
    _id
    membershipNumber
    skills {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useGetAllMemberSkillQuery__
 *
 * To run a query within a React component, call `useGetAllMemberSkillQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMemberSkillQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMemberSkillQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMemberSkillQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>(GetAllMemberSkillDocument, options);
      }
export function useGetAllMemberSkillLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>(GetAllMemberSkillDocument, options);
        }
export function useGetAllMemberSkillSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>(GetAllMemberSkillDocument, options);
        }
export type GetAllMemberSkillQueryHookResult = ReturnType<typeof useGetAllMemberSkillQuery>;
export type GetAllMemberSkillLazyQueryHookResult = ReturnType<typeof useGetAllMemberSkillLazyQuery>;
export type GetAllMemberSkillSuspenseQueryHookResult = ReturnType<typeof useGetAllMemberSkillSuspenseQuery>;
export type GetAllMemberSkillQueryResult = Apollo.QueryResult<GetAllMemberSkillQuery, GetAllMemberSkillQueryVariables>;
export const GetMySkillListDocument = gql`
    query GetMySkillList($options: IGetByID!) {
  getMySkillList(options: $options) {
    _id
    membershipNumber
    skills {
      _id
      name
      isActive
    }
    isActive
  }
}
    `;

/**
 * __useGetMySkillListQuery__
 *
 * To run a query within a React component, call `useGetMySkillListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMySkillListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMySkillListQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetMySkillListQuery(baseOptions: Apollo.QueryHookOptions<GetMySkillListQuery, GetMySkillListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMySkillListQuery, GetMySkillListQueryVariables>(GetMySkillListDocument, options);
      }
export function useGetMySkillListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMySkillListQuery, GetMySkillListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMySkillListQuery, GetMySkillListQueryVariables>(GetMySkillListDocument, options);
        }
export function useGetMySkillListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMySkillListQuery, GetMySkillListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMySkillListQuery, GetMySkillListQueryVariables>(GetMySkillListDocument, options);
        }
export type GetMySkillListQueryHookResult = ReturnType<typeof useGetMySkillListQuery>;
export type GetMySkillListLazyQueryHookResult = ReturnType<typeof useGetMySkillListLazyQuery>;
export type GetMySkillListSuspenseQueryHookResult = ReturnType<typeof useGetMySkillListSuspenseQuery>;
export type GetMySkillListQueryResult = Apollo.QueryResult<GetMySkillListQuery, GetMySkillListQueryVariables>;
export const GetAllPodcastDocument = gql`
    query GetAllPodcast {
  getAllPodcast {
    _id
    name
    contact
    cms
    email
    img
    isActive
  }
}
    `;

/**
 * __useGetAllPodcastQuery__
 *
 * To run a query within a React component, call `useGetAllPodcastQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPodcastQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPodcastQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPodcastQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPodcastQuery, GetAllPodcastQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPodcastQuery, GetAllPodcastQueryVariables>(GetAllPodcastDocument, options);
      }
export function useGetAllPodcastLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPodcastQuery, GetAllPodcastQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPodcastQuery, GetAllPodcastQueryVariables>(GetAllPodcastDocument, options);
        }
export function useGetAllPodcastSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllPodcastQuery, GetAllPodcastQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllPodcastQuery, GetAllPodcastQueryVariables>(GetAllPodcastDocument, options);
        }
export type GetAllPodcastQueryHookResult = ReturnType<typeof useGetAllPodcastQuery>;
export type GetAllPodcastLazyQueryHookResult = ReturnType<typeof useGetAllPodcastLazyQuery>;
export type GetAllPodcastSuspenseQueryHookResult = ReturnType<typeof useGetAllPodcastSuspenseQuery>;
export type GetAllPodcastQueryResult = Apollo.QueryResult<GetAllPodcastQuery, GetAllPodcastQueryVariables>;
export const GetPodcastByIdDocument = gql`
    query GetPodcastById($options: IGetByID!) {
  getPodcastById(options: $options) {
    _id
    name
    contact
    cms
    email
    img
    isActive
  }
}
    `;

/**
 * __useGetPodcastByIdQuery__
 *
 * To run a query within a React component, call `useGetPodcastByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPodcastByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPodcastByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetPodcastByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>(GetPodcastByIdDocument, options);
      }
export function useGetPodcastByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>(GetPodcastByIdDocument, options);
        }
export function useGetPodcastByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>(GetPodcastByIdDocument, options);
        }
export type GetPodcastByIdQueryHookResult = ReturnType<typeof useGetPodcastByIdQuery>;
export type GetPodcastByIdLazyQueryHookResult = ReturnType<typeof useGetPodcastByIdLazyQuery>;
export type GetPodcastByIdSuspenseQueryHookResult = ReturnType<typeof useGetPodcastByIdSuspenseQuery>;
export type GetPodcastByIdQueryResult = Apollo.QueryResult<GetPodcastByIdQuery, GetPodcastByIdQueryVariables>;
export const GetBusinesslistingByIdDocument = gql`
    query GetBusinesslistingById($options: IGetByID!) {
  getBusinesslistingById(options: $options) {
    _id
    sponserimg
    name
    cms
    isActive
  }
}
    `;

/**
 * __useGetBusinesslistingByIdQuery__
 *
 * To run a query within a React component, call `useGetBusinesslistingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBusinesslistingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBusinesslistingByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetBusinesslistingByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>(GetBusinesslistingByIdDocument, options);
      }
export function useGetBusinesslistingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>(GetBusinesslistingByIdDocument, options);
        }
export function useGetBusinesslistingByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>(GetBusinesslistingByIdDocument, options);
        }
export type GetBusinesslistingByIdQueryHookResult = ReturnType<typeof useGetBusinesslistingByIdQuery>;
export type GetBusinesslistingByIdLazyQueryHookResult = ReturnType<typeof useGetBusinesslistingByIdLazyQuery>;
export type GetBusinesslistingByIdSuspenseQueryHookResult = ReturnType<typeof useGetBusinesslistingByIdSuspenseQuery>;
export type GetBusinesslistingByIdQueryResult = Apollo.QueryResult<GetBusinesslistingByIdQuery, GetBusinesslistingByIdQueryVariables>;
export const GetAllBusinessListingDocument = gql`
    query GetAllBusinessListing {
  getAllBusinessListing {
    _id
    cms
    sponserimg
    name
    isActive
  }
}
    `;

/**
 * __useGetAllBusinessListingQuery__
 *
 * To run a query within a React component, call `useGetAllBusinessListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBusinessListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBusinessListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBusinessListingQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>(GetAllBusinessListingDocument, options);
      }
export function useGetAllBusinessListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>(GetAllBusinessListingDocument, options);
        }
export function useGetAllBusinessListingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>(GetAllBusinessListingDocument, options);
        }
export type GetAllBusinessListingQueryHookResult = ReturnType<typeof useGetAllBusinessListingQuery>;
export type GetAllBusinessListingLazyQueryHookResult = ReturnType<typeof useGetAllBusinessListingLazyQuery>;
export type GetAllBusinessListingSuspenseQueryHookResult = ReturnType<typeof useGetAllBusinessListingSuspenseQuery>;
export type GetAllBusinessListingQueryResult = Apollo.QueryResult<GetAllBusinessListingQuery, GetAllBusinessListingQueryVariables>;
export const GetAllEventSpeakerDocument = gql`
    query GetAllEventSpeaker {
  getAllEventSpeaker {
    _id
    cpeEvent {
      _id
      img
      name
    }
    speakerimg
    detailsimg
    isActive
  }
}
    `;

/**
 * __useGetAllEventSpeakerQuery__
 *
 * To run a query within a React component, call `useGetAllEventSpeakerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventSpeakerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventSpeakerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEventSpeakerQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>(GetAllEventSpeakerDocument, options);
      }
export function useGetAllEventSpeakerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>(GetAllEventSpeakerDocument, options);
        }
export function useGetAllEventSpeakerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>(GetAllEventSpeakerDocument, options);
        }
export type GetAllEventSpeakerQueryHookResult = ReturnType<typeof useGetAllEventSpeakerQuery>;
export type GetAllEventSpeakerLazyQueryHookResult = ReturnType<typeof useGetAllEventSpeakerLazyQuery>;
export type GetAllEventSpeakerSuspenseQueryHookResult = ReturnType<typeof useGetAllEventSpeakerSuspenseQuery>;
export type GetAllEventSpeakerQueryResult = Apollo.QueryResult<GetAllEventSpeakerQuery, GetAllEventSpeakerQueryVariables>;
export const GetAllWhatWeBrignToYouDocument = gql`
    query GetAllWhatWeBrignToYou {
  getAllWhatWeBrignToYou {
    _id
    name
    image
    description
    redirectLink
    icon
    isWIRC
    isActive
  }
}
    `;

/**
 * __useGetAllWhatWeBrignToYouQuery__
 *
 * To run a query within a React component, call `useGetAllWhatWeBrignToYouQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWhatWeBrignToYouQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWhatWeBrignToYouQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWhatWeBrignToYouQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>(GetAllWhatWeBrignToYouDocument, options);
      }
export function useGetAllWhatWeBrignToYouLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>(GetAllWhatWeBrignToYouDocument, options);
        }
export function useGetAllWhatWeBrignToYouSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>(GetAllWhatWeBrignToYouDocument, options);
        }
export type GetAllWhatWeBrignToYouQueryHookResult = ReturnType<typeof useGetAllWhatWeBrignToYouQuery>;
export type GetAllWhatWeBrignToYouLazyQueryHookResult = ReturnType<typeof useGetAllWhatWeBrignToYouLazyQuery>;
export type GetAllWhatWeBrignToYouSuspenseQueryHookResult = ReturnType<typeof useGetAllWhatWeBrignToYouSuspenseQuery>;
export type GetAllWhatWeBrignToYouQueryResult = Apollo.QueryResult<GetAllWhatWeBrignToYouQuery, GetAllWhatWeBrignToYouQueryVariables>;
export const GetAllYoutubeLinksDocument = gql`
    query GetAllYoutubeLinks {
  getAllYoutubeLinks {
    _id
    name
    redirectlink
    category {
      _id
      name
      isActive
      isWIRC
    }
    isActive
  }
}
    `;

/**
 * __useGetAllYoutubeLinksQuery__
 *
 * To run a query within a React component, call `useGetAllYoutubeLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllYoutubeLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllYoutubeLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllYoutubeLinksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>(GetAllYoutubeLinksDocument, options);
      }
export function useGetAllYoutubeLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>(GetAllYoutubeLinksDocument, options);
        }
export function useGetAllYoutubeLinksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>(GetAllYoutubeLinksDocument, options);
        }
export type GetAllYoutubeLinksQueryHookResult = ReturnType<typeof useGetAllYoutubeLinksQuery>;
export type GetAllYoutubeLinksLazyQueryHookResult = ReturnType<typeof useGetAllYoutubeLinksLazyQuery>;
export type GetAllYoutubeLinksSuspenseQueryHookResult = ReturnType<typeof useGetAllYoutubeLinksSuspenseQuery>;
export type GetAllYoutubeLinksQueryResult = Apollo.QueryResult<GetAllYoutubeLinksQuery, GetAllYoutubeLinksQueryVariables>;
export const GetAllWicasaNewsLatterDocument = gql`
    query GetAllWicasaNewsLatter {
  getAllWicasaNewsLatter {
    _id
    name
    date
    redirectlink
    img
    pdf
    iswirc
    showIndex
    isActive
  }
}
    `;

/**
 * __useGetAllWicasaNewsLatterQuery__
 *
 * To run a query within a React component, call `useGetAllWicasaNewsLatterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWicasaNewsLatterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWicasaNewsLatterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWicasaNewsLatterQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>(GetAllWicasaNewsLatterDocument, options);
      }
export function useGetAllWicasaNewsLatterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>(GetAllWicasaNewsLatterDocument, options);
        }
export function useGetAllWicasaNewsLatterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>(GetAllWicasaNewsLatterDocument, options);
        }
export type GetAllWicasaNewsLatterQueryHookResult = ReturnType<typeof useGetAllWicasaNewsLatterQuery>;
export type GetAllWicasaNewsLatterLazyQueryHookResult = ReturnType<typeof useGetAllWicasaNewsLatterLazyQuery>;
export type GetAllWicasaNewsLatterSuspenseQueryHookResult = ReturnType<typeof useGetAllWicasaNewsLatterSuspenseQuery>;
export type GetAllWicasaNewsLatterQueryResult = Apollo.QueryResult<GetAllWicasaNewsLatterQuery, GetAllWicasaNewsLatterQueryVariables>;
export const GetWhatWeBrignToYouByIdDocument = gql`
    query GetWhatWeBrignToYouById($options: IGetByID!) {
  getWhatWeBrignToYouById(options: $options) {
    _id
    name
    image
    description
    redirectLink
    icon
    isWIRC
    isActive
  }
}
    `;

/**
 * __useGetWhatWeBrignToYouByIdQuery__
 *
 * To run a query within a React component, call `useGetWhatWeBrignToYouByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWhatWeBrignToYouByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWhatWeBrignToYouByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetWhatWeBrignToYouByIdQuery(baseOptions: Apollo.QueryHookOptions<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>(GetWhatWeBrignToYouByIdDocument, options);
      }
export function useGetWhatWeBrignToYouByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>(GetWhatWeBrignToYouByIdDocument, options);
        }
export function useGetWhatWeBrignToYouByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>(GetWhatWeBrignToYouByIdDocument, options);
        }
export type GetWhatWeBrignToYouByIdQueryHookResult = ReturnType<typeof useGetWhatWeBrignToYouByIdQuery>;
export type GetWhatWeBrignToYouByIdLazyQueryHookResult = ReturnType<typeof useGetWhatWeBrignToYouByIdLazyQuery>;
export type GetWhatWeBrignToYouByIdSuspenseQueryHookResult = ReturnType<typeof useGetWhatWeBrignToYouByIdSuspenseQuery>;
export type GetWhatWeBrignToYouByIdQueryResult = Apollo.QueryResult<GetWhatWeBrignToYouByIdQuery, GetWhatWeBrignToYouByIdQueryVariables>;
export const GetEventSpeakerByIdDocument = gql`
    query GetEventSpeakerById($options: IGetByID!) {
  getEventSpeakerById(options: $options) {
    _id
    cpeEvent {
      _id
      img
      name
    }
    speakerimg
    detailsimg
    isActive
  }
}
    `;

/**
 * __useGetEventSpeakerByIdQuery__
 *
 * To run a query within a React component, call `useGetEventSpeakerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventSpeakerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventSpeakerByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetEventSpeakerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>(GetEventSpeakerByIdDocument, options);
      }
export function useGetEventSpeakerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>(GetEventSpeakerByIdDocument, options);
        }
export function useGetEventSpeakerByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>(GetEventSpeakerByIdDocument, options);
        }
export type GetEventSpeakerByIdQueryHookResult = ReturnType<typeof useGetEventSpeakerByIdQuery>;
export type GetEventSpeakerByIdLazyQueryHookResult = ReturnType<typeof useGetEventSpeakerByIdLazyQuery>;
export type GetEventSpeakerByIdSuspenseQueryHookResult = ReturnType<typeof useGetEventSpeakerByIdSuspenseQuery>;
export type GetEventSpeakerByIdQueryResult = Apollo.QueryResult<GetEventSpeakerByIdQuery, GetEventSpeakerByIdQueryVariables>;
export const GetAllInvitationDocument = gql`
    query GetAllInvitation {
  getAllInvitation {
    _id
    inviteFrom {
      memberRegistration {
        _id
        firstName
        middleName
        lastName
      }
    }
    inviteTo {
      memberRegistration {
        _id
        firstName
        middleName
        lastName
      }
    }
    cpeEvent {
      _id
      name
    }
    isAccepted
    isActive
  }
}
    `;

/**
 * __useGetAllInvitationQuery__
 *
 * To run a query within a React component, call `useGetAllInvitationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllInvitationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllInvitationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllInvitationQuery(baseOptions?: Apollo.QueryHookOptions<GetAllInvitationQuery, GetAllInvitationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllInvitationQuery, GetAllInvitationQueryVariables>(GetAllInvitationDocument, options);
      }
export function useGetAllInvitationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllInvitationQuery, GetAllInvitationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllInvitationQuery, GetAllInvitationQueryVariables>(GetAllInvitationDocument, options);
        }
export function useGetAllInvitationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllInvitationQuery, GetAllInvitationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllInvitationQuery, GetAllInvitationQueryVariables>(GetAllInvitationDocument, options);
        }
export type GetAllInvitationQueryHookResult = ReturnType<typeof useGetAllInvitationQuery>;
export type GetAllInvitationLazyQueryHookResult = ReturnType<typeof useGetAllInvitationLazyQuery>;
export type GetAllInvitationSuspenseQueryHookResult = ReturnType<typeof useGetAllInvitationSuspenseQuery>;
export type GetAllInvitationQueryResult = Apollo.QueryResult<GetAllInvitationQuery, GetAllInvitationQueryVariables>;
export const GetAllCpeResourceCategoryDocument = gql`
    query GetAllCpeResourceCategory {
  getAllCpeResourceCategory {
    _id
    name
    date
    isActive
  }
}
    `;

/**
 * __useGetAllCpeResourceCategoryQuery__
 *
 * To run a query within a React component, call `useGetAllCpeResourceCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCpeResourceCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCpeResourceCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCpeResourceCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>(GetAllCpeResourceCategoryDocument, options);
      }
export function useGetAllCpeResourceCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>(GetAllCpeResourceCategoryDocument, options);
        }
export function useGetAllCpeResourceCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>(GetAllCpeResourceCategoryDocument, options);
        }
export type GetAllCpeResourceCategoryQueryHookResult = ReturnType<typeof useGetAllCpeResourceCategoryQuery>;
export type GetAllCpeResourceCategoryLazyQueryHookResult = ReturnType<typeof useGetAllCpeResourceCategoryLazyQuery>;
export type GetAllCpeResourceCategorySuspenseQueryHookResult = ReturnType<typeof useGetAllCpeResourceCategorySuspenseQuery>;
export type GetAllCpeResourceCategoryQueryResult = Apollo.QueryResult<GetAllCpeResourceCategoryQuery, GetAllCpeResourceCategoryQueryVariables>;
export const GetCpeResourceByIdDocument = gql`
    query GetCpeResourceById($options: IGetByID!) {
  getCpeResourceById(options: $options) {
    _id
    name
    speaker
    uri
    urllink
    cpeResourceCategory {
      _id
      date
      name
    }
    isActive
  }
}
    `;

/**
 * __useGetCpeResourceByIdQuery__
 *
 * To run a query within a React component, call `useGetCpeResourceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCpeResourceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCpeResourceByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCpeResourceByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>(GetCpeResourceByIdDocument, options);
      }
export function useGetCpeResourceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>(GetCpeResourceByIdDocument, options);
        }
export function useGetCpeResourceByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>(GetCpeResourceByIdDocument, options);
        }
export type GetCpeResourceByIdQueryHookResult = ReturnType<typeof useGetCpeResourceByIdQuery>;
export type GetCpeResourceByIdLazyQueryHookResult = ReturnType<typeof useGetCpeResourceByIdLazyQuery>;
export type GetCpeResourceByIdSuspenseQueryHookResult = ReturnType<typeof useGetCpeResourceByIdSuspenseQuery>;
export type GetCpeResourceByIdQueryResult = Apollo.QueryResult<GetCpeResourceByIdQuery, GetCpeResourceByIdQueryVariables>;
export const GetAllCpeResourceDocument = gql`
    query GetAllCpeResource {
  getAllCpeResource {
    _id
    name
    speaker
    uri
    urllink
    cpeResourceCategory {
      _id
      date
      isActive
      name
    }
    isActive
  }
}
    `;

/**
 * __useGetAllCpeResourceQuery__
 *
 * To run a query within a React component, call `useGetAllCpeResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCpeResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCpeResourceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCpeResourceQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>(GetAllCpeResourceDocument, options);
      }
export function useGetAllCpeResourceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>(GetAllCpeResourceDocument, options);
        }
export function useGetAllCpeResourceSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>(GetAllCpeResourceDocument, options);
        }
export type GetAllCpeResourceQueryHookResult = ReturnType<typeof useGetAllCpeResourceQuery>;
export type GetAllCpeResourceLazyQueryHookResult = ReturnType<typeof useGetAllCpeResourceLazyQuery>;
export type GetAllCpeResourceSuspenseQueryHookResult = ReturnType<typeof useGetAllCpeResourceSuspenseQuery>;
export type GetAllCpeResourceQueryResult = Apollo.QueryResult<GetAllCpeResourceQuery, GetAllCpeResourceQueryVariables>;
export const GetMyMobileEventList2Document = gql`
    query GetMyMobileEventList2 {
  getMyMobileEventList2 {
    registrationDate
    eventName
    startDate
    endDate
    eventAddress
    eventId
    isEventOff
  }
}
    `;

/**
 * __useGetMyMobileEventList2Query__
 *
 * To run a query within a React component, call `useGetMyMobileEventList2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetMyMobileEventList2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyMobileEventList2Query({
 *   variables: {
 *   },
 * });
 */
export function useGetMyMobileEventList2Query(baseOptions?: Apollo.QueryHookOptions<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>(GetMyMobileEventList2Document, options);
      }
export function useGetMyMobileEventList2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>(GetMyMobileEventList2Document, options);
        }
export function useGetMyMobileEventList2SuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>(GetMyMobileEventList2Document, options);
        }
export type GetMyMobileEventList2QueryHookResult = ReturnType<typeof useGetMyMobileEventList2Query>;
export type GetMyMobileEventList2LazyQueryHookResult = ReturnType<typeof useGetMyMobileEventList2LazyQuery>;
export type GetMyMobileEventList2SuspenseQueryHookResult = ReturnType<typeof useGetMyMobileEventList2SuspenseQuery>;
export type GetMyMobileEventList2QueryResult = Apollo.QueryResult<GetMyMobileEventList2Query, GetMyMobileEventList2QueryVariables>;
export const GetCityByIdDocument = gql`
    query GetCityById($options: IGetByID!) {
  getCityById(options: $options) {
    _id
    name
    isActive
  }
}
    `;

/**
 * __useGetCityByIdQuery__
 *
 * To run a query within a React component, call `useGetCityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCityByIdQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useGetCityByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
      }
export function useGetCityByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
export function useGetCityByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCityByIdQuery, GetCityByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCityByIdQuery, GetCityByIdQueryVariables>(GetCityByIdDocument, options);
        }
export type GetCityByIdQueryHookResult = ReturnType<typeof useGetCityByIdQuery>;
export type GetCityByIdLazyQueryHookResult = ReturnType<typeof useGetCityByIdLazyQuery>;
export type GetCityByIdSuspenseQueryHookResult = ReturnType<typeof useGetCityByIdSuspenseQuery>;
export type GetCityByIdQueryResult = Apollo.QueryResult<GetCityByIdQuery, GetCityByIdQueryVariables>;
export const CheckExhibitionDocument = gql`
    query CheckExhibition($membershipNo: String!, $cpeEvent: String!) {
  checkExhibition(membershipNo: $membershipNo, cpeEvent: $cpeEvent) {
    success
    data {
      name
      email
      contactNo
      membershipNo
    }
    msg
  }
}
    `;

/**
 * __useCheckExhibitionQuery__
 *
 * To run a query within a React component, call `useCheckExhibitionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckExhibitionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckExhibitionQuery({
 *   variables: {
 *      membershipNo: // value for 'membershipNo'
 *      cpeEvent: // value for 'cpeEvent'
 *   },
 * });
 */
export function useCheckExhibitionQuery(baseOptions: Apollo.QueryHookOptions<CheckExhibitionQuery, CheckExhibitionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckExhibitionQuery, CheckExhibitionQueryVariables>(CheckExhibitionDocument, options);
      }
export function useCheckExhibitionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckExhibitionQuery, CheckExhibitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckExhibitionQuery, CheckExhibitionQueryVariables>(CheckExhibitionDocument, options);
        }
export function useCheckExhibitionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckExhibitionQuery, CheckExhibitionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckExhibitionQuery, CheckExhibitionQueryVariables>(CheckExhibitionDocument, options);
        }
export type CheckExhibitionQueryHookResult = ReturnType<typeof useCheckExhibitionQuery>;
export type CheckExhibitionLazyQueryHookResult = ReturnType<typeof useCheckExhibitionLazyQuery>;
export type CheckExhibitionSuspenseQueryHookResult = ReturnType<typeof useCheckExhibitionSuspenseQuery>;
export type CheckExhibitionQueryResult = Apollo.QueryResult<CheckExhibitionQuery, CheckExhibitionQueryVariables>;
export const GetMyOfflineMobileEventList2Document = gql`
    query GetMyOfflineMobileEventList2 {
  getMyOfflineMobileEventList2 {
    registrationDate
    eventName
    startDate
    endDate
    eventAddress
    eventId
    isEventOff
    membershipnumber
  }
}
    `;

/**
 * __useGetMyOfflineMobileEventList2Query__
 *
 * To run a query within a React component, call `useGetMyOfflineMobileEventList2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetMyOfflineMobileEventList2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyOfflineMobileEventList2Query({
 *   variables: {
 *   },
 * });
 */
export function useGetMyOfflineMobileEventList2Query(baseOptions?: Apollo.QueryHookOptions<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>(GetMyOfflineMobileEventList2Document, options);
      }
export function useGetMyOfflineMobileEventList2LazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>(GetMyOfflineMobileEventList2Document, options);
        }
export function useGetMyOfflineMobileEventList2SuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>(GetMyOfflineMobileEventList2Document, options);
        }
export type GetMyOfflineMobileEventList2QueryHookResult = ReturnType<typeof useGetMyOfflineMobileEventList2Query>;
export type GetMyOfflineMobileEventList2LazyQueryHookResult = ReturnType<typeof useGetMyOfflineMobileEventList2LazyQuery>;
export type GetMyOfflineMobileEventList2SuspenseQueryHookResult = ReturnType<typeof useGetMyOfflineMobileEventList2SuspenseQuery>;
export type GetMyOfflineMobileEventList2QueryResult = Apollo.QueryResult<GetMyOfflineMobileEventList2Query, GetMyOfflineMobileEventList2QueryVariables>;