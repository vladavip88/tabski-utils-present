export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  CountryName: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeISO: { input: any; output: any; }
  DeweyDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  GeoJSON: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPCPatent: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  LCCSubclass: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SESSN: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type AddPayrixCustomerCardInput = {
  email: Scalars['EmailAddress']['input'];
  payrixTokenId: Scalars['NonEmptyString']['input'];
  zip: Scalars['NonEmptyString']['input'];
};

export type AddSquareCustomerCardInput = {
  card: SquareCardInput;
  consumerName: Scalars['NonEmptyString']['input'];
  email: Scalars['EmailAddress']['input'];
};

export type AddUserEmployeeInput = {
  permissionsGroups: Array<UserPermissionsGroupsInput>;
  pin: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['EmailAddress']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  role: AdminRoles;
  updatedAt: Scalars['DateTime']['output'];
};

export enum AdminRoles {
  Admin = 'admin',
  SuperAdmin = 'superAdmin'
}

export type AdminTokenOutput = {
  __typename?: 'AdminTokenOutput';
  admin: Admin;
  refreshToken: Scalars['String']['output'];
  sessionId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type AdminsOutput = {
  __typename?: 'AdminsOutput';
  count: Scalars['Int']['output'];
  items: Array<Admin>;
};

export enum AppType {
  Consumer = 'CONSUMER',
  Kds = 'KDS',
  Kiosk = 'KIOSK',
  Online = 'ONLINE',
  Pos = 'POS'
}

export enum AuthAppType {
  Admin = 'ADMIN',
  Kds = 'KDS',
  Pos = 'POS',
  Reporting = 'REPORTING'
}

export type AuthForgotPasswordInput = {
  email: Scalars['EmailAddress']['input'];
  redirect: Scalars['String']['input'];
};

export type AuthResetPasswordInput = {
  password: Scalars['String']['input'];
  resetCode: Scalars['String']['input'];
};

export type AuthSignInInput = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type AuthSignUpInput = {
  email: Scalars['EmailAddress']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  pin: Scalars['String']['input'];
};

export type AuthUpdatePasswordInput = {
  currentPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type CashDiscountInventoryUpdateInput = {
  cashDiscountAmount: Scalars['Float']['input'];
  cashDiscountEnabled: Scalars['Boolean']['input'];
  cashDiscountRounding: MerchantCashDiscountRoundType;
};

export type ChargeOrderCheckInput_V2 = {
  discounts?: InputMaybe<Array<OrderCheckDiscountInput_V2>>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type ChargeOrderInput = {
  discounts?: InputMaybe<Array<OrderDiscountInput>>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type ChecksOutput_V2 = {
  __typename?: 'ChecksOutput_V2';
  count: Scalars['Int']['output'];
  items: Array<OrderChecks_V2>;
};

export type CloverCustomer = {
  __typename?: 'CloverCustomer';
  card?: Maybe<CloverCustomerCard>;
  cloverMerchantId: Scalars['ID']['output'];
  consumerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CloverCustomerCard = {
  __typename?: 'CloverCustomerCard';
  expMonth: Scalars['Int']['output'];
  expYear: Scalars['Int']['output'];
  first6: Scalars['Int']['output'];
  last4: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type CloverMerchant = {
  __typename?: 'CloverMerchant';
  cloverMerchantId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  employeeId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  usePosPrinting: Scalars['Boolean']['output'];
  usePrivateApp: Scalars['Boolean']['output'];
};

export type CloverMerchantsOutput = {
  __typename?: 'CloverMerchantsOutput';
  count: Scalars['Int']['output'];
  items: Array<CloverMerchant>;
};

export type ConfirmGroupOrderInput = {
  consumerAddressId?: InputMaybe<Scalars['ID']['input']>;
  deliveryFee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  deliveryQuoteId?: InputMaybe<Scalars['String']['input']>;
  discounts?: InputMaybe<Array<OrderDiscountInput>>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type ConfirmGroupOrderInput_V2 = {
  consumerAddressId?: InputMaybe<Scalars['ID']['input']>;
  deliveryFee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  deliveryQuoteId?: InputMaybe<Scalars['String']['input']>;
  discounts: Array<OrderCheckDiscountInput_V2>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type Consumer = {
  __typename?: 'Consumer';
  addresses?: Maybe<Array<ConsumerAddress>>;
  agreedWithTerms: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phone: Scalars['String']['output'];
  role: ConsumerRoles;
  updatedAt: Scalars['DateTime']['output'];
};

export type ConsumerAddress = {
  __typename?: 'ConsumerAddress';
  apartment?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  consumer: Consumer;
  consumerId: Scalars['ID']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  floor?: Maybe<Scalars['String']['output']>;
  fullAddress: Scalars['NonEmptyString']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  lat: Scalars['Latitude']['output'];
  lng: Scalars['Longitude']['output'];
  locationType: LocationType;
  postalCode: Scalars['String']['output'];
  specialInstructions?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum ConsumerRoles {
  Consumer = 'consumer'
}

export type ConsumerTokenOutput = {
  __typename?: 'ConsumerTokenOutput';
  consumer: Consumer;
  token: Scalars['String']['output'];
};

export type ConsumerUpdateInput = {
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdminInput = {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['NonEmptyString']['input'];
  lastName: Scalars['NonEmptyString']['input'];
  password: Scalars['String']['input'];
};

export type CreateCloverCustomerCardDataInput = {
  expMonth: Scalars['String']['input'];
  expYear: Scalars['String']['input'];
  first6: Scalars['String']['input'];
  last4: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateCloverCustomerCardInput = {
  card: CreateCloverCustomerCardDataInput;
  consumerName: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
};

export type CreateCloverMerchantInput = {
  cloverMerchantId: Scalars['String']['input'];
  code: Scalars['String']['input'];
  employeeId: Scalars['String']['input'];
  usePrivateApp: Scalars['Boolean']['input'];
};

export type CreateConsumerAddressInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  locationType: LocationType;
  placeId: Scalars['NonEmptyString']['input'];
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateDiscountInput = {
  amount: Scalars['Float']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForApps: Array<AppType>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isSingleUse: Scalars['Boolean']['input'];
  minimumAmount?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  promoCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  type: DiscountType;
};

export type CreateDoordashDeliveryQuoteInput = {
  consumerAddressId: Scalars['ID']['input'];
  delayTime?: InputMaybe<Scalars['Int']['input']>;
  dropoffTime?: InputMaybe<Scalars['DateTime']['input']>;
  items: Array<DeliveryQuoteItemsInput>;
  merchantId: Scalars['ID']['input'];
  orderValue: Scalars['Int']['input'];
  tip: Scalars['Int']['input'];
};

export type CreateDrawerInput = {
  name: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateDynamicPriceInput = {
  amount: Scalars['Float']['input'];
  enabled: Scalars['Boolean']['input'];
  enabledForApps: Array<AppType>;
  menuItemIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  type: DynamicPriceType;
  workingHours: MenuWorkingHoursInput;
};

export type CreateGroupOrderInput = {
  groupName: Scalars['String']['input'];
  merchantId: Scalars['ID']['input'];
  multimerchantId?: InputMaybe<Scalars['ID']['input']>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<OrderType>;
};

export type CreateGroupOrderInput_V2 = {
  groupName: Scalars['String']['input'];
  merchantId: Scalars['ID']['input'];
  multimerchantId?: InputMaybe<Scalars['ID']['input']>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<OrderTypes_V2>;
};

export type CreateKdsInput = {
  batchingTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  confirmationMessage?: InputMaybe<Scalars['String']['input']>;
  confirmationMessageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  fontSize?: InputMaybe<KdsFontSizes>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  main?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  printerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  rejectMessageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  tipReporting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateLogInput = {
  application: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type CreateMenuCategoriesInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  coursing?: InputMaybe<Scalars['Boolean']['input']>;
  deletedMenuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
  externalName?: InputMaybe<Scalars['String']['input']>;
  menuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
};

export type CreateMenuCategoryInput = {
  coursing?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<MenuCategoryMenuItemInput>>;
  menuIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateMenuInput = {
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  workingHours?: InputMaybe<MenuWorkingHoursInput>;
};

export type CreateMenuItemInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  chitName: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  imageData?: InputMaybe<Scalars['String']['input']>;
  kdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  modifierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  prepTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  price?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  priceTiered?: InputMaybe<Array<MenuItemPriceTieredInput>>;
  printerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  revenueCenterId?: InputMaybe<Scalars['ID']['input']>;
  stockCount?: InputMaybe<Scalars['Int']['input']>;
  taxIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateMenuItemsInput = {
  categoryIds: Array<InputMaybe<Scalars['ID']['input']>>;
  chitName: Scalars['String']['input'];
  deletedCategoryIds: Array<InputMaybe<Scalars['ID']['input']>>;
  deletedModifierIds: Array<InputMaybe<Scalars['ID']['input']>>;
  deletedTaxIds: Array<InputMaybe<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  externalId: Scalars['ID']['input'];
  externalName: Scalars['String']['input'];
  menuItemId?: InputMaybe<Scalars['ID']['input']>;
  modifierIds: Array<InputMaybe<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
  price: Scalars['NonNegativeInt']['input'];
  taxIds: Array<InputMaybe<Scalars['ID']['input']>>;
};

export type CreateMerchantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  businessName: Scalars['String']['input'];
  /** Only ADMIN can set this field */
  fee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Only ADMIN can set this field */
  feeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only ADMIN can set this field */
  monthlySubscription?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Only ADMIN can set this field */
  monthlySubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only ADMIN can set this field */
  ownerId?: InputMaybe<Scalars['String']['input']>;
  /** Only ADMIN can set this field */
  paymentMethodToShow?: InputMaybe<MerchantPaymentMethodToShow>;
  phone: Scalars['String']['input'];
  placeId: Scalars['NonEmptyString']['input'];
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateModifierInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  itemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxChoice: Scalars['NonNegativeInt']['input'];
  minChoice: Scalars['NonNegativeInt']['input'];
  name: Scalars['NonEmptyString']['input'];
  options: Array<CreateModifierOptionInput>;
};

export type CreateModifierOptionInput = {
  chitName: Scalars['NonEmptyString']['input'];
  enabled: Scalars['Boolean']['input'];
  name: Scalars['NonEmptyString']['input'];
  order: Scalars['NonNegativeInt']['input'];
  price: Scalars['NonNegativeInt']['input'];
};

export type CreateModifiersInput = {
  externalId: Scalars['NonEmptyString']['input'];
  externalName: Scalars['String']['input'];
  maxChoice: Scalars['NonNegativeInt']['input'];
  minChoice: Scalars['NonNegativeInt']['input'];
  name: Scalars['NonEmptyString']['input'];
  options: Array<CreateModifiersOptionInput>;
};

export type CreateModifiersOptionInput = {
  chitName: Scalars['NonEmptyString']['input'];
  enabled: Scalars['Boolean']['input'];
  externalId: Scalars['NonEmptyString']['input'];
  externalName: Scalars['NonEmptyString']['input'];
  name: Scalars['NonEmptyString']['input'];
  order: Scalars['NonNegativeInt']['input'];
  price: Scalars['NonNegativeInt']['input'];
};

export type CreateMultimerchantGroupInput = {
  merchantIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  type: MultimerchantGroupType;
};

export type CreateOrderAdditionalInfoInput = {
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderAdditionalInfoInput_V2 = {
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderCheckConsumerItemInput = {
  itemAmount: Scalars['Float']['input'];
  itemId: Scalars['ID']['input'];
};

export type CreateOrderCheckInput = {
  checks: Array<CreateOrderCheckItemInput>;
  orderId: Scalars['ID']['input'];
};

export type CreateOrderCheckInput_V2 = {
  consumerId: Scalars['ID']['input'];
  items: Array<CreateOrderCheckItemInput_V2>;
  referenceId: Scalars['String']['input'];
};

export type CreateOrderCheckItemInput = {
  consumerId: Scalars['ID']['input'];
  items: Array<CreateOrderCheckConsumerItemInput>;
  referenceId: Scalars['String']['input'];
};

export type CreateOrderCheckItemInput_V2 = {
  amount: Scalars['Float']['input'];
  discounts?: InputMaybe<Array<OrderCheckDiscountInput_V2>>;
  orderItemId: Scalars['ID']['input'];
};

export type CreateOrderChecksInput_V2 = {
  checks: Array<CreateOrderCheckInput_V2>;
  orderId: Scalars['ID']['input'];
};

export type CreateOrderInput = {
  additionalInfo?: InputMaybe<CreateOrderAdditionalInfoInput>;
  consumerAddressId?: InputMaybe<Scalars['ID']['input']>;
  consumerId: Scalars['ID']['input'];
  consumerName: Scalars['String']['input'];
  deliveryFee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  deliveryQuoteId?: InputMaybe<Scalars['String']['input']>;
  discounts?: InputMaybe<Array<OrderDiscountInput>>;
  employeeId?: InputMaybe<Scalars['ID']['input']>;
  employeeName?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  isOpenTab: Scalars['Boolean']['input'];
  items: Array<OrderItemInput>;
  merchantId: Scalars['ID']['input'];
  multimerchantId?: InputMaybe<Scalars['ID']['input']>;
  posId?: InputMaybe<Scalars['String']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderInput_V2 = {
  additionalInfo?: InputMaybe<CreateOrderAdditionalInfoInput_V2>;
  consumerAddressId?: InputMaybe<Scalars['ID']['input']>;
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  consumerName?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  deliveryQuoteId?: InputMaybe<Scalars['String']['input']>;
  employeeId?: InputMaybe<Scalars['ID']['input']>;
  employeeName?: InputMaybe<Scalars['String']['input']>;
  isOpenTab: Scalars['Boolean']['input'];
  items: Array<OrderItemInput_V2>;
  merchantId: Scalars['ID']['input'];
  multimerchantId?: InputMaybe<Scalars['ID']['input']>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOrderPosInput = {
  check: CreateOrderCheckInput;
  order: CreateOrderInput;
};

export type CreateOrderPosInput_V2 = {
  checks: CreateOrderChecksInput_V2;
  order: CreateOrderInput_V2;
};

export type CreateOrderPosOutput = {
  __typename?: 'CreateOrderPosOutput';
  check: OrderCheck;
  order: Order;
};

export type CreateOrderPosOutput_V2 = {
  __typename?: 'CreateOrderPosOutput_V2';
  checks: OrderChecks_V2;
  order: Order_V2;
};

export type CreateOrderThrottlingRuleInput = {
  levelOneAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelOneEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelOneItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelOneMessage?: InputMaybe<Scalars['String']['input']>;
  levelThreeAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelThreeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelThreeItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelThreeMessage?: InputMaybe<Scalars['String']['input']>;
  levelTwoAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelTwoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelTwoItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelTwoMessage?: InputMaybe<Scalars['String']['input']>;
  menuIds: Array<Scalars['ID']['input']>;
};

export type CreatePaymentTransactionInput = {
  amount: Scalars['Int']['input'];
  employeeId: Scalars['ID']['input'];
  last4?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  paymentMethod: PaymentMethod;
  paymentProvider: MerchantPaymentMethod;
  tip?: InputMaybe<Scalars['Int']['input']>;
  transactionId: Scalars['ID']['input'];
  type: PaymentTransactionType;
};

export type CreatePayrixMerchantInput = {
  merchantId: Scalars['ID']['input'];
  payrixMerchantId: Scalars['String']['input'];
  status?: InputMaybe<PayrixMerchantStatus>;
};

export type CreatePayrixTxnSessionKeyOutput = {
  __typename?: 'CreatePayrixTxnSessionKeyOutput';
  txnSessionKey: Scalars['String']['output'];
};

export type CreatePosInput = {
  name: Scalars['String']['input'];
  posId: Scalars['ID']['input'];
};

export type CreatePrinterInput = {
  macAddress: Scalars['MAC']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  series: Scalars['String']['input'];
  ticketSize?: InputMaybe<PrinterTicketSize>;
  vendor: PrinterVendor;
};

export type CreatePrintersInput = {
  ipAddress?: InputMaybe<Scalars['IP']['input']>;
  macAddress: Scalars['MAC']['input'];
  vendor: PrinterVendor;
};

export type CreateRevenueCenterInput = {
  name: Scalars['String']['input'];
};

export type CreateSquareMerchantInput = {
  permissions: Scalars['NonEmptyString']['input'];
};

export type CreateTableInput = {
  kdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  menuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  orderTypeId: Scalars['ID']['input'];
  printerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectionId: Scalars['ID']['input'];
};

export type CreateTableOrderTypeInput = {
  name: Scalars['String']['input'];
};

export type CreateTableSectionInput = {
  name: Scalars['String']['input'];
};

export type CreateTaxInput = {
  isInclusive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['NonEmptyString']['input'];
  rate: Scalars['NonNegativeFloat']['input'];
  type: TaxType;
};

export type CreateTaxesInput = {
  externalId: Scalars['NonEmptyString']['input'];
  externalName: Scalars['NonEmptyString']['input'];
  name: Scalars['NonEmptyString']['input'];
  rate: Scalars['NonNegativeFloat']['input'];
  type: TaxType;
};

export type CreateUberDeliveryQuoteInput = {
  consumerAddressId: Scalars['ID']['input'];
  delayTime?: InputMaybe<Scalars['Int']['input']>;
  dropoffTime?: InputMaybe<Scalars['DateTime']['input']>;
  merchantId: Scalars['ID']['input'];
};

export type CreateUserEmployeeInput = {
  email: Scalars['EmailAddress']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  permissionsGroups: Array<UserPermissionsGroupsInput>;
  phone: Scalars['String']['input'];
  pin: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['EmailAddress']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: CreateUserRoles;
};

export type CreateUserPermissionsGroupInput = {
  name: Scalars['String']['input'];
  permissions: Array<UserPermissions>;
};

export enum CreateUserRoles {
  Employee = 'EMPLOYEE',
  Owner = 'OWNER',
  Reseller = 'RESELLER'
}

export type CreateUserTipsReportInput = {
  shiftEnd: Scalars['DateTime']['input'];
  shiftStart: Scalars['DateTime']['input'];
  tips: Scalars['Int']['input'];
  userId: Scalars['ID']['input'];
};

export enum DeliveryProvider {
  DoorDash = 'DOOR_DASH',
  None = 'NONE',
  UberEats = 'UBER_EATS'
}

export type DeliveryQuote = {
  __typename?: 'DeliveryQuote';
  currency: Scalars['String']['output'];
  deliveryStatus?: Maybe<OrderDeliveryStatus>;
  dropoffTimeEstimated: Scalars['String']['output'];
  externalDeliveryId: Scalars['ID']['output'];
  fee: Scalars['Int']['output'];
  feeComponents?: Maybe<Array<FeeComponent>>;
  pickupReferenceTag?: Maybe<Scalars['String']['output']>;
  pickupTimeEstimated: Scalars['String']['output'];
  supportReference?: Maybe<Scalars['String']['output']>;
  tip?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DeliveryQuoteItemsInput = {
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
};

export type Discount = {
  __typename?: 'Discount';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  enabledForApps: Array<AppType>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isSingleUse: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  minimumAmount?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  promoCode?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  type: DiscountType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum DiscountType {
  FixedAmountOff = 'FIXED_AMOUNT_OFF',
  FixedPercentageOff = 'FIXED_PERCENTAGE_OFF',
  OpenAmountOff = 'OPEN_AMOUNT_OFF',
  OpenPercentageOff = 'OPEN_PERCENTAGE_OFF'
}

export type DiscountsOutput = {
  __typename?: 'DiscountsOutput';
  count: Scalars['Int']['output'];
  items: Array<Discount>;
};

export type Drawer = {
  __typename?: 'Drawer';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DrawerOutput = {
  __typename?: 'DrawerOutput';
  count: Scalars['Int']['output'];
  items: Array<Drawer>;
};

export type DynamicPrice = {
  __typename?: 'DynamicPrice';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  enabledForApps: Array<AppType>;
  id: Scalars['ID']['output'];
  menuItems: Array<MenuItem>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: DynamicPriceType;
  updatedAt: Scalars['DateTime']['output'];
  workingHours: MenuWorkingHours;
};

export enum DynamicPriceType {
  DecreasedAmount = 'DECREASED_AMOUNT',
  DecreasedPercentage = 'DECREASED_PERCENTAGE',
  IncreasedAmount = 'INCREASED_AMOUNT',
  IncreasedPercentage = 'INCREASED_PERCENTAGE'
}

export type DynamicPricesOutput = {
  __typename?: 'DynamicPricesOutput';
  count: Scalars['Int']['output'];
  items: Array<DynamicPrice>;
};

export type EntityChange = {
  __typename?: 'EntityChange';
  data: Array<EntityChangeData>;
  type: EntityChangeEnum;
};

export type EntityChangeData = Kds | KdsMessage | Menu | MenuCategory | MenuItem | Merchant | MerchantConfiguration | Modifier | Order | OrderCheck | OrderThrottlingRule | OrderVoid | Printer | RevenueCenter | Table | TableOrderType | TableSection | Tax | User | UserPermissionsGroup;

export enum EntityChangeEnum {
  CashDiscountInventoryUpdate = 'CASH_DISCOUNT_INVENTORY_UPDATE',
  CreateDiscount = 'CREATE_DISCOUNT',
  CreateDynamicPrice = 'CREATE_DYNAMIC_PRICE',
  CreateKds = 'CREATE_KDS',
  CreateMenu = 'CREATE_MENU',
  CreateMenuCategory = 'CREATE_MENU_CATEGORY',
  CreateMenuItem = 'CREATE_MENU_ITEM',
  CreateModifier = 'CREATE_MODIFIER',
  CreateOrder = 'CREATE_ORDER',
  CreateOrderCheck = 'CREATE_ORDER_CHECK',
  CreateOrderThrottlingRule = 'CREATE_ORDER_THROTTLING_RULE',
  CreateOrderVoid = 'CREATE_ORDER_VOID',
  CreatePrinter = 'CREATE_PRINTER',
  CreatePrinters = 'CREATE_PRINTERS',
  CreateRevenueCenter = 'CREATE_REVENUE_CENTER',
  CreateTable = 'CREATE_TABLE',
  CreateTableOrderType = 'CREATE_TABLE_ORDER_TYPE',
  CreateTableSection = 'CREATE_TABLE_SECTION',
  CreateTax = 'CREATE_TAX',
  CreateUserEmployee = 'CREATE_USER_EMPLOYEE',
  CreateUserPermissionsGroup = 'CREATE_USER_PERMISSIONS_GROUP',
  DeleteDiscount = 'DELETE_DISCOUNT',
  DeleteDynamicPrice = 'DELETE_DYNAMIC_PRICE',
  DeleteKds = 'DELETE_KDS',
  DeleteMenu = 'DELETE_MENU',
  DeleteMenuCategory = 'DELETE_MENU_CATEGORY',
  DeleteMenuItem = 'DELETE_MENU_ITEM',
  DeleteModifier = 'DELETE_MODIFIER',
  DeleteOrderThrottlingRule = 'DELETE_ORDER_THROTTLING_RULE',
  DeleteOrderVoid = 'DELETE_ORDER_VOID',
  DeletePrinter = 'DELETE_PRINTER',
  DeleteRevenueCenter = 'DELETE_REVENUE_CENTER',
  DeleteTable = 'DELETE_TABLE',
  DeleteTableOrderType = 'DELETE_TABLE_ORDER_TYPE',
  DeleteTableSection = 'DELETE_TABLE_SECTION',
  DeleteTax = 'DELETE_TAX',
  DeleteUserEmployee = 'DELETE_USER_EMPLOYEE',
  DeleteUserPermissionsGroup = 'DELETE_USER_PERMISSIONS_GROUP',
  UpdateDiscount = 'UPDATE_DISCOUNT',
  UpdateDynamicPrice = 'UPDATE_DYNAMIC_PRICE',
  UpdateKds = 'UPDATE_KDS',
  UpdateKdsMessages = 'UPDATE_KDS_MESSAGES',
  UpdateMenu = 'UPDATE_MENU',
  UpdateMenus = 'UPDATE_MENUS',
  UpdateMenuCategories = 'UPDATE_MENU_CATEGORIES',
  UpdateMenuCategory = 'UPDATE_MENU_CATEGORY',
  UpdateMenuCategoryAppAvailability = 'UPDATE_MENU_CATEGORY_APP_AVAILABILITY',
  UpdateMenuCategoryItemAppAvailability = 'UPDATE_MENU_CATEGORY_ITEM_APP_AVAILABILITY',
  UpdateMenuItem = 'UPDATE_MENU_ITEM',
  UpdateMenuItems = 'UPDATE_MENU_ITEMS',
  UpdateMerchant = 'UPDATE_MERCHANT',
  UpdateMerchantConfiguration = 'UPDATE_MERCHANT_CONFIGURATION',
  UpdateModifier = 'UPDATE_MODIFIER',
  UpdateOrder = 'UPDATE_ORDER',
  UpdateOrders = 'UPDATE_ORDERS',
  UpdateOrderCheck = 'UPDATE_ORDER_CHECK',
  UpdateOrderThrottlingRule = 'UPDATE_ORDER_THROTTLING_RULE',
  UpdateOrderVoid = 'UPDATE_ORDER_VOID',
  UpdatePrinter = 'UPDATE_PRINTER',
  UpdateRevenueCenter = 'UPDATE_REVENUE_CENTER',
  UpdateTable = 'UPDATE_TABLE',
  UpdateTables = 'UPDATE_TABLES',
  UpdateTableOrderType = 'UPDATE_TABLE_ORDER_TYPE',
  UpdateTableSection = 'UPDATE_TABLE_SECTION',
  UpdateTax = 'UPDATE_TAX',
  UpdateUserEmployee = 'UPDATE_USER_EMPLOYEE',
  UpdateUserPermissionsGroup = 'UPDATE_USER_PERMISSIONS_GROUP'
}

export type FeeComponent = {
  __typename?: 'FeeComponent';
  amount: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type GooglePlacesOutput = {
  __typename?: 'GooglePlacesOutput';
  predictions?: Maybe<Array<Maybe<PredictionOutput>>>;
  status: GoogleResponseStatus;
};

export enum GoogleResponseStatus {
  InvalidRequest = 'INVALID_REQUEST',
  Ok = 'OK',
  OverQueryLimit = 'OVER_QUERY_LIMIT',
  RequestDenied = 'REQUEST_DENIED',
  UnknownError = 'UNKNOWN_ERROR',
  ZeroResults = 'ZERO_RESULTS'
}

export type GroupOrder = {
  __typename?: 'GroupOrder';
  createdAt: Scalars['DateTime']['output'];
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  merchantId: Scalars['ID']['output'];
  multimerchantId?: Maybe<Scalars['ID']['output']>;
  orderId?: Maybe<Scalars['ID']['output']>;
  participants: Array<GroupOrderParticipant>;
  scheduleAt?: Maybe<Scalars['DateTime']['output']>;
  specialInstructions: Scalars['String']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupOrderParticipant = {
  __typename?: 'GroupOrderParticipant';
  consumerId: Scalars['String']['output'];
  consumerName: Scalars['String']['output'];
  isOrganizer: Scalars['Boolean']['output'];
  isReady: Scalars['Boolean']['output'];
  items: Array<OrderItem>;
};

export type GroupOrderParticipant_V2 = {
  __typename?: 'GroupOrderParticipant_V2';
  consumerId: Scalars['String']['output'];
  consumerName: Scalars['String']['output'];
  isOrganizer: Scalars['Boolean']['output'];
  isReady: Scalars['Boolean']['output'];
  items: Array<OrderItem_V2>;
};

export type GroupOrder_V2 = {
  __typename?: 'GroupOrder_V2';
  createdAt: Scalars['DateTime']['output'];
  groupName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isConfirmed: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  merchantId: Scalars['ID']['output'];
  multimerchantId?: Maybe<Scalars['ID']['output']>;
  orderId?: Maybe<Scalars['ID']['output']>;
  participants: Array<GroupOrderParticipant_V2>;
  scheduleAt?: Maybe<Scalars['DateTime']['output']>;
  specialInstructions: Scalars['String']['output'];
  type: OrderTypes_V2;
  updatedAt: Scalars['DateTime']['output'];
};

export type ImportCloverMerchantCategoriesOutput = {
  __typename?: 'ImportCloverMerchantCategoriesOutput';
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sortOrder?: Maybe<Scalars['String']['output']>;
};

export type ImportCloverMerchantItemsCategoriesItemElementOutput = {
  __typename?: 'ImportCloverMerchantItemsCategoriesItemElementOutput';
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type ImportCloverMerchantItemsCategoriesItemOutput = {
  __typename?: 'ImportCloverMerchantItemsCategoriesItemOutput';
  elements?: Maybe<Array<ImportCloverMerchantItemsCategoriesItemElementOutput>>;
};

export type ImportCloverMerchantItemsModifierGroupsItemElementOutput = {
  __typename?: 'ImportCloverMerchantItemsModifierGroupsItemElementOutput';
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  modifierIds?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  showByDefault: Scalars['Boolean']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type ImportCloverMerchantItemsModifierGroupsItemOutput = {
  __typename?: 'ImportCloverMerchantItemsModifierGroupsItemOutput';
  elements?: Maybe<Array<ImportCloverMerchantItemsModifierGroupsItemElementOutput>>;
};

export type ImportCloverMerchantItemsOutput = {
  __typename?: 'ImportCloverMerchantItemsOutput';
  autoManage: Scalars['Boolean']['output'];
  available?: Maybe<Scalars['Boolean']['output']>;
  categories?: Maybe<ImportCloverMerchantItemsCategoriesItemOutput>;
  cost?: Maybe<Scalars['Int']['output']>;
  defaultTaxRates: Scalars['Boolean']['output'];
  deleted: Scalars['Boolean']['output'];
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isRevenue: Scalars['Boolean']['output'];
  modifiedTime: Scalars['Timestamp']['output'];
  modifierGroups?: Maybe<ImportCloverMerchantItemsModifierGroupsItemOutput>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceType: Scalars['String']['output'];
  taxRates?: Maybe<ImportCloverMerchantItemsTaxRatesItemOutput>;
};

export type ImportCloverMerchantItemsTaxRatesItemElementOutput = {
  __typename?: 'ImportCloverMerchantItemsTaxRatesItemElementOutput';
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Int']['output'];
  taxAmount?: Maybe<Scalars['Int']['output']>;
};

export type ImportCloverMerchantItemsTaxRatesItemOutput = {
  __typename?: 'ImportCloverMerchantItemsTaxRatesItemOutput';
  elements?: Maybe<Array<ImportCloverMerchantItemsTaxRatesItemElementOutput>>;
};

export type ImportCloverMerchantModifierGroupsItemElementModifierGroupOutput = {
  __typename?: 'ImportCloverMerchantModifierGroupsItemElementModifierGroupOutput';
  id: Scalars['ID']['output'];
};

export type ImportCloverMerchantModifierGroupsItemElementOutput = {
  __typename?: 'ImportCloverMerchantModifierGroupsItemElementOutput';
  available?: Maybe<Scalars['Boolean']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  modifiedTime: Scalars['Timestamp']['output'];
  modifierGroup?: Maybe<ImportCloverMerchantModifierGroupsItemElementModifierGroupOutput>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type ImportCloverMerchantModifierGroupsItemOutput = {
  __typename?: 'ImportCloverMerchantModifierGroupsItemOutput';
  elements?: Maybe<Array<ImportCloverMerchantModifierGroupsItemElementOutput>>;
};

export type ImportCloverMerchantModifierGroupsOutput = {
  __typename?: 'ImportCloverMerchantModifierGroupsOutput';
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  maxAllowed?: Maybe<Scalars['Int']['output']>;
  minRequired?: Maybe<Scalars['Int']['output']>;
  modifierIds?: Maybe<Scalars['String']['output']>;
  modifiers?: Maybe<ImportCloverMerchantModifierGroupsItemOutput>;
  name: Scalars['String']['output'];
  showByDefault: Scalars['Boolean']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type ImportCloverMerchantTaxesOutput = {
  __typename?: 'ImportCloverMerchantTaxesOutput';
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Int']['output'];
  taxAmount?: Maybe<Scalars['Int']['output']>;
};

export type Kds = {
  __typename?: 'Kds';
  batchingTime: Scalars['Int']['output'];
  confirmationMessage: Scalars['String']['output'];
  confirmationMessageEnabled: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  fontSize: KdsFontSizes;
  id: Scalars['ID']['output'];
  inUse: Scalars['Boolean']['output'];
  kdsMessages?: Maybe<Array<KdsMessage>>;
  main: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  printers: Array<Maybe<Printer>>;
  rejectMessageEnabled: Scalars['Boolean']['output'];
  tipReporting: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum KdsFontSizes {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type KdsMessage = {
  __typename?: 'KdsMessage';
  id: Scalars['ID']['output'];
  kdsId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  messageEnabled: Scalars['Boolean']['output'];
  tableOrderType: TableOrderType;
  tableOrderTypeId: Scalars['ID']['output'];
};

export type KdsesOutput = {
  __typename?: 'KdsesOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<Kds>>;
};

export enum LocationType {
  Apartment = 'APARTMENT',
  House = 'HOUSE',
  Office = 'OFFICE',
  Other = 'OTHER'
}

export type Log = {
  __typename?: 'Log';
  application: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  merchantId: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  categories: Array<MenuCategory>;
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  enabledForApps: Array<AppType>;
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['NonNegativeInt']['output'];
  tables: Array<Table>;
  updatedAt: Scalars['DateTime']['output'];
  workingHours: MenuWorkingHours;
};


export type MenuCategoriesArgs = {
  filter?: InputMaybe<MenuCategoriesFilter>;
};

export type MenuCategoriesFilter = {
  enabledForApps?: InputMaybe<Array<AppType>>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuCategoriesOutput = {
  __typename?: 'MenuCategoriesOutput';
  count: Scalars['Int']['output'];
  items: Array<MenuCategory>;
};

export type MenuCategory = {
  __typename?: 'MenuCategory';
  coursing: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  /** Available only on menu  */
  enabledForApps: Array<AppType>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  menuItems: Array<MenuItem>;
  menus: Array<Menu>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Available only on menu  */
  order: Scalars['NonNegativeInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type MenuCategoryMenuItemsArgs = {
  filter?: InputMaybe<MenuCategoryMenuItemsFilter>;
};

export type MenuCategoryMenuItemInput = {
  id: Scalars['ID']['input'];
  order: Scalars['NonNegativeInt']['input'];
};

export type MenuCategoryMenuItemsFilter = {
  enabledForApps?: InputMaybe<Array<AppType>>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuItem = {
  __typename?: 'MenuItem';
  cashDiscount: Scalars['NonNegativeInt']['output'];
  categories: Array<MenuCategory>;
  chitName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dynamicPrices: Array<DynamicPrice>;
  enabled: Scalars['Boolean']['output'];
  /** Available only on category  */
  enabledForApps: Array<AppType>;
  externalId?: Maybe<Scalars['ID']['output']>;
  externalName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  kdses: Array<Kds>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  modifiers: Array<Modifier>;
  name: Scalars['String']['output'];
  /** Available only on menu category */
  order: Scalars['NonNegativeInt']['output'];
  prepTime?: Maybe<Scalars['NonNegativeInt']['output']>;
  price?: Maybe<Scalars['NonNegativeInt']['output']>;
  priceTiered?: Maybe<Array<Maybe<MenuItemPriceTiered>>>;
  printers: Array<Printer>;
  revenueCenter?: Maybe<RevenueCenter>;
  revenueCenterId?: Maybe<Scalars['ID']['output']>;
  stockCount: Scalars['Int']['output'];
  taxes: Array<Tax>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MenuItemPriceTiered = {
  __typename?: 'MenuItemPriceTiered';
  cashDiscount?: Maybe<Scalars['NonNegativeInt']['output']>;
  chitName: Scalars['String']['output'];
  default: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['NonNegativeInt']['output'];
};

export type MenuItemPriceTieredInput = {
  chitName: Scalars['String']['input'];
  default: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  price: Scalars['NonNegativeInt']['input'];
};

export type MenuItemsOutput = {
  __typename?: 'MenuItemsOutput';
  count: Scalars['Int']['output'];
  items: Array<MenuItem>;
};

export type MenuWorkingHour = {
  __typename?: 'MenuWorkingHour';
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type MenuWorkingHourInput = {
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
};

export type MenuWorkingHours = {
  __typename?: 'MenuWorkingHours';
  friday: Array<MenuWorkingHour>;
  monday: Array<MenuWorkingHour>;
  saturday: Array<MenuWorkingHour>;
  sunday: Array<MenuWorkingHour>;
  thursday: Array<MenuWorkingHour>;
  tuesday: Array<MenuWorkingHour>;
  wednesday: Array<MenuWorkingHour>;
};

export type MenuWorkingHoursInput = {
  friday?: InputMaybe<Array<MenuWorkingHourInput>>;
  monday?: InputMaybe<Array<MenuWorkingHourInput>>;
  saturday?: InputMaybe<Array<MenuWorkingHourInput>>;
  sunday?: InputMaybe<Array<MenuWorkingHourInput>>;
  thursday?: InputMaybe<Array<MenuWorkingHourInput>>;
  tuesday?: InputMaybe<Array<MenuWorkingHourInput>>;
  wednesday?: InputMaybe<Array<MenuWorkingHourInput>>;
};

export type MenusOutput = {
  __typename?: 'MenusOutput';
  count: Scalars['Int']['output'];
  items: Array<Menu>;
};

export type Merchant = {
  __typename?: 'Merchant';
  address?: Maybe<Scalars['String']['output']>;
  branding?: Maybe<MerchantBranding>;
  businessDescription?: Maybe<Scalars['String']['output']>;
  businessName: Scalars['String']['output'];
  clover?: Maybe<CloverMerchant>;
  configuration: MerchantConfiguration;
  createdAt: Scalars['DateTime']['output'];
  fee?: Maybe<Scalars['Int']['output']>;
  feeEnabled: Scalars['Boolean']['output'];
  groups: Array<MultimerchantGroup>;
  id: Scalars['String']['output'];
  isInMultimerchant: Scalars['Boolean']['output'];
  /** Only ADMIN AND USER can see this field */
  isInitiallySynced: Scalars['Boolean']['output'];
  merchantAddress?: Maybe<MerchantAddress>;
  /** Available only in Multimerchant Group */
  merchantOrder: Scalars['Int']['output'];
  /** Only ADMIN AND USER can see this field */
  monthlySubscription?: Maybe<Scalars['Int']['output']>;
  /** Only ADMIN AND USER can see this field */
  monthlySubscriptionEnabled: Scalars['Boolean']['output'];
  /** Only ADMIN AND USER can see this field */
  owner: User;
  /** Only ADMIN AND USER can see this field */
  ownerId: Scalars['String']['output'];
  paymentMethod: MerchantPaymentMethod;
  /** Only ADMIN AND USER can see this field */
  paymentMethodToShow: MerchantPaymentMethodToShow;
  payrix?: Maybe<PayrixMerchant>;
  phone: Scalars['String']['output'];
  poses: Array<Pos>;
  social?: Maybe<MerchantSocial>;
  square?: Maybe<SquareMerchant>;
  tables: Array<Table>;
  taxes: Array<Tax>;
  type: MerchantType;
  updatedAt: Scalars['DateTime']['output'];
  website?: Maybe<Scalars['String']['output']>;
};


export type MerchantTablesArgs = {
  filter?: InputMaybe<MerchantTablesFilter>;
};

export type MerchantAddress = {
  __typename?: 'MerchantAddress';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  fullAddress: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  merchantId: Scalars['String']['output'];
  placeId: Scalars['String']['output'];
  postalCode: Scalars['String']['output'];
  specialInstructions?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
  streetNumber?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MerchantBranding = {
  __typename?: 'MerchantBranding';
  buttonBgColor?: Maybe<Scalars['String']['output']>;
  buttonTextColor?: Maybe<Scalars['String']['output']>;
  coverBrightness?: Maybe<Scalars['Int']['output']>;
  coverUrl?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
};

export enum MerchantCashDiscountRoundType {
  None = 'NONE',
  PointZeroFive = 'POINT_ZERO_FIVE'
}

export enum MerchantConfigPaymentMethod {
  OpenTab = 'OPEN_TAB',
  PayNow = 'PAY_NOW'
}

export type MerchantConfiguration = {
  __typename?: 'MerchantConfiguration';
  cashDiscountAmount: Scalars['Float']['output'];
  cashDiscountEnabled: Scalars['Boolean']['output'];
  cashDiscountRounding: MerchantCashDiscountRoundType;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  defaultPaymentMethod: MerchantConfigPaymentMethod;
  deliveryEnabled: Scalars['Boolean']['output'];
  deliveryProvider: DeliveryProvider;
  id: Scalars['ID']['output'];
  isOrderingAgeRestrictedConsumer: Scalars['Boolean']['output'];
  isOrderingAgeRestrictedOnline: Scalars['Boolean']['output'];
  isQuickAccessEnabled: Scalars['Boolean']['output'];
  isSelectingAllMenusEnabled: Scalars['Boolean']['output'];
  isStockCountEnabled: Scalars['Boolean']['output'];
  maximumScheduleTime: Scalars['Int']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  minAuthAmount: Scalars['Int']['output'];
  noteEnabled: Scalars['Boolean']['output'];
  onlineOrderingEnabled: Scalars['Boolean']['output'];
  openTab: Scalars['Boolean']['output'];
  payNow: Scalars['Boolean']['output'];
  preparationTime: Scalars['Int']['output'];
  qrCodeOrderingEnabled: Scalars['Boolean']['output'];
  schedulingEnabled: Scalars['Boolean']['output'];
  specialInstructions?: Maybe<Scalars['String']['output']>;
  specialInstructionsEnabled: Scalars['Boolean']['output'];
  specialInstructionsRequired: Scalars['Boolean']['output'];
  timeToShowTicket: Scalars['Int']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  tip1: Scalars['Int']['output'];
  tip2: Scalars['Int']['output'];
  tip3: Scalars['Int']['output'];
  tip4: Scalars['Int']['output'];
  tipsEnabled: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MerchantInMultimerchantGroup = {
  __typename?: 'MerchantInMultimerchantGroup';
  id: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  multimerchantGroupId: Scalars['String']['output'];
  multimerchantId: Scalars['String']['output'];
};

export enum MerchantPaymentMethod {
  Clover = 'CLOVER',
  None = 'NONE',
  Payrix = 'PAYRIX',
  Square = 'SQUARE'
}

export enum MerchantPaymentMethodToShow {
  Clover = 'CLOVER',
  Payrix = 'PAYRIX',
  Square = 'SQUARE'
}

export type MerchantSocial = {
  __typename?: 'MerchantSocial';
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  tiktok?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type MerchantTablesFilter = {
  multimerchantGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export enum MerchantType {
  Merchant = 'MERCHANT',
  Multimerchant = 'MULTIMERCHANT'
}

export type MerchantsFilter = {
  paymentMethod?: InputMaybe<MerchantPaymentMethod>;
  type?: InputMaybe<Array<MerchantType>>;
};

export type MerchantsOutput = {
  __typename?: 'MerchantsOutput';
  count: Scalars['Int']['output'];
  items: Array<Merchant>;
};

export type Modifier = {
  __typename?: 'Modifier';
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  externalName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  maxChoice: Scalars['Int']['output'];
  menuItems: Array<Maybe<MenuItem>>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  minChoice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  options: Array<Maybe<ModifierOptions>>;
  /** Available only on menu item  */
  order: Scalars['NonNegativeInt']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ModifierOptions = {
  __typename?: 'ModifierOptions';
  cashDiscount: Scalars['Int']['output'];
  chitName: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  externalName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['NonNegativeInt']['output'];
  price: Scalars['Int']['output'];
};

export type ModifiersOutput = {
  __typename?: 'ModifiersOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<Modifier>>;
};

export type MultimerchantGroup = {
  __typename?: 'MultimerchantGroup';
  id: Scalars['ID']['output'];
  merchants: Array<Merchant>;
  multimerchant: Merchant;
  multimerchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: MultimerchantGroupType;
};

export enum MultimerchantGroupType {
  DineIn = 'DINE_IN',
  Online = 'ONLINE'
}

export type MultimerchantMerchant = {
  __typename?: 'MultimerchantMerchant';
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  multimerchantId: Scalars['ID']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  acceptOrderDelivery: Order;
  acceptOrderDelivery_V2: Order_V2;
  addMerchantToMultimerchant: MultimerchantMerchant;
  addPayrixCustomerCard?: Maybe<PayrixCard>;
  addSquareCustomerCard?: Maybe<SquareCard>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_EMPLOYEES */
  addUserEmployee?: Maybe<User>;
  authAdminSignIn?: Maybe<AdminTokenOutput>;
  authRefreshToken?: Maybe<RefreshTokenOutput>;
  authSignOut?: Maybe<Scalars['Boolean']['output']>;
  authUserForgotPassword?: Maybe<Scalars['Boolean']['output']>;
  authUserPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  authUserPinIn?: Maybe<UserTokenOutput>;
  authUserPinOut?: Maybe<UserPinOutOutput>;
  authUserQuickAccess?: Maybe<UserTokenOutput>;
  authUserSignIn?: Maybe<UserTokenOutput>;
  authUserSignInMerchant?: Maybe<UserTokenOutput>;
  authUserSignInPermission?: Maybe<UserTokenOutput>;
  authUserSignUp?: Maybe<Scalars['Boolean']['output']>;
  cashDiscountInventoryUpdate?: Maybe<MerchantConfiguration>;
  /** **consumerId** should be provided only/ by organizer of group order if he wants to take consumer out of group order */
  chargeOrder?: Maybe<Order>;
  chargeOrderCheck_V2?: Maybe<OrderChecks_V2>;
  clockIn?: Maybe<TimeClock>;
  clockOut?: Maybe<TimeClock>;
  confirmGroupOrder?: Maybe<GroupOrder>;
  confirmGroupOrder_V2?: Maybe<GroupOrder_V2>;
  convertMerchantToMultimerchant?: Maybe<Merchant>;
  createAdmin?: Maybe<Admin>;
  createCloverCustomerCard?: Maybe<CloverCustomerCard>;
  createCloverMerchant?: Maybe<CloverMerchant>;
  createConsumerAddress?: Maybe<ConsumerAddress>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DISCOUNTS */
  createDiscount?: Maybe<Discount>;
  createDoordashDeliveryQuote?: Maybe<DeliveryQuote>;
  createDrawer?: Maybe<Drawer>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DYNAMIC_PRICING */
  createDynamicPrice?: Maybe<DynamicPrice>;
  createGroupOrder: GroupOrder;
  createGroupOrder_V2: GroupOrder_V2;
  /** Required permissions: SETTINGS_HARDWARE */
  createKds: Kds;
  createLog?: Maybe<Log>;
  /** Required permissions: INVENTORY_CREATE_EDIT_MENUS */
  createMenu: Menu;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES
   */
  createMenuCategories: Array<MenuCategory>;
  /** Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES */
  createMenuCategory: MenuCategory;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  createMenuItem: MenuItem;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS
   */
  createMenuItems: Array<MenuItem>;
  createMerchant: Merchant;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  createModifier?: Maybe<Modifier>;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS
   */
  createModifiers: Array<Modifier>;
  createMultimerchantGroup: MultimerchantGroup;
  createOrder: Order;
  createOrderCheck?: Maybe<OrderCheck>;
  createOrderChecks_V2?: Maybe<OrderChecks_V2>;
  createOrderPOS: CreateOrderPosOutput;
  createOrderPOS_V2: CreateOrderPosOutput_V2;
  /** Required permissions: SETTINGS_ORDER_THROTTLING */
  createOrderThrottlingRule?: Maybe<OrderThrottlingRule>;
  /** Required permissions: SETTINGS_CREATE_EDIT_VOIDS */
  createOrderVoid: OrderVoid;
  createOrder_V2: Order_V2;
  createPaymentTransaction?: Maybe<PaymentTransaction>;
  createPayrixCustomer?: Maybe<PayrixCustomer>;
  createPayrixMerchant?: Maybe<PayrixMerchant>;
  createPayrixTxnSessionKey: CreatePayrixTxnSessionKeyOutput;
  /** Required permissions: SETTINGS_HARDWARE */
  createPos: Pos;
  /** Required permissions: SETTINGS_HARDWARE */
  createPrinter: Printer;
  createPrinters: Printer;
  createRevenueCenter: RevenueCenter;
  createSquareMerchant?: Maybe<Merchant>;
  createTable: Table;
  /** Required permissions: SETTINGS_CREATE_EDIT_ORDER_TYPES */
  createTableOrderType: TableOrderType;
  createTableSection: TableSection;
  createTax?: Maybe<Tax>;
  /** Only LAMBDA needs to provide the merchantId */
  createTaxes: Array<Tax>;
  createUberDeliveryQuote?: Maybe<UberDeliveryQuote>;
  createUser?: Maybe<User>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_EMPLOYEES */
  createUserEmployee?: Maybe<User>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_ROLES_PERMISSIONS */
  createUserPermissionsGroup?: Maybe<UserPermissionsGroup>;
  createUserTipsReport?: Maybe<UserTipsReport>;
  deleteAdmin?: Maybe<Admin>;
  deleteConsumerAddress?: Maybe<ConsumerAddress>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DISCOUNTS */
  deleteDiscount?: Maybe<Discount>;
  deleteDrawer?: Maybe<Drawer>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DYNAMIC_PRICING */
  deleteDynamicPrice?: Maybe<DynamicPrice>;
  deleteGroupOrder?: Maybe<GroupOrder>;
  deleteGroupOrder_V2?: Maybe<GroupOrder_V2>;
  /** Required permissions: SETTINGS_HARDWARE */
  deleteKds?: Maybe<Kds>;
  /** Required permissions: INVENTORY_CREATE_EDIT_MENUS */
  deleteMenu?: Maybe<Menu>;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES
   */
  deleteMenuCategories: BatchPayload;
  /** Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES */
  deleteMenuCategory?: Maybe<MenuCategory>;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  deleteMenuItem?: Maybe<MenuItem>;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS
   */
  deleteMenuItems: BatchPayload;
  deleteMerchant?: Maybe<Merchant>;
  deleteMerchantFromMultimerchant: MultimerchantMerchant;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  deleteModifier?: Maybe<Modifier>;
  /**
   * Only LAMBDA needs to provide the merchantId
   * Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS
   */
  deleteModifiers: RemoveModifiersOutput;
  deleteMultimerchantGroup: MultimerchantGroup;
  /** Required permissions: SETTINGS_ORDER_THROTTLING */
  deleteOrderThrottlingRule?: Maybe<OrderThrottlingRule>;
  /** Required permissions: SETTINGS_CREATE_EDIT_VOIDS */
  deleteOrderVoid?: Maybe<OrderVoid>;
  deletePayrixCustomerCard?: Maybe<Array<Maybe<PayrixCard>>>;
  /** Required permissions: SETTINGS_HARDWARE */
  deletePos?: Maybe<Pos>;
  /** Required permissions: SETTINGS_HARDWARE */
  deletePrinter?: Maybe<Printer>;
  deleteRevenueCenter?: Maybe<RevenueCenter>;
  deleteTable?: Maybe<Table>;
  /** Required permissions: SETTINGS_CREATE_EDIT_ORDER_TYPES */
  deleteTableOrderType?: Maybe<TableOrderType>;
  deleteTableSection?: Maybe<TableSection>;
  deleteTax?: Maybe<Tax>;
  /** Only LAMBDA needs to provide the merchantId */
  deleteTaxes: RemoveTaxesOutput;
  deleteTimeClock?: Maybe<TimeClock>;
  deleteUser?: Maybe<User>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_EMPLOYEES */
  deleteUserEmployee?: Maybe<UsersOnMerchants>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_ROLES_PERMISSIONS */
  deleteUserPermissionsGroup?: Maybe<UserPermissionsGroup>;
  deleteUserTipsReport?: Maybe<UserTipsReport>;
  disconnectMerchant?: Maybe<Merchant>;
  endBreak?: Maybe<TimeClock>;
  generateUberOAuthToken?: Maybe<Scalars['Boolean']['output']>;
  joinGroupOrder?: Maybe<GroupOrder>;
  joinGroupOrder_V2?: Maybe<GroupOrder_V2>;
  leaveGroupOrder?: Maybe<GroupOrder>;
  leaveGroupOrder_V2?: Maybe<GroupOrder_V2>;
  onboardDoordashMerchant?: Maybe<Merchant>;
  onboardUberMerchant?: Maybe<Merchant>;
  refundOrderItems?: Maybe<Order>;
  refundOrderItems_V2: RefundOrderItemsOutput_V2;
  removeOrderTaxes?: Maybe<Order>;
  removeOrderTaxes_V2?: Maybe<Order_V2>;
  restoreOrderTaxes?: Maybe<Order>;
  restoreOrderTaxes_V2?: Maybe<Order_V2>;
  retryRefundOrderItems?: Maybe<Order>;
  retryRefundOrderItems_V2: RetryRefundOrderItemsOutput_V2;
  sendConsumerSms: Scalars['Boolean']['output'];
  /** merchantId is required when user is not authenticated */
  sendReceipt: Scalars['Boolean']['output'];
  sendSmsVerification: Scalars['Boolean']['output'];
  sendSmsVerificationCheck: ConsumerTokenOutput;
  squareMerchantRefreshToken?: Maybe<Scalars['Boolean']['output']>;
  startBreak?: Maybe<TimeClock>;
  updateAdmin?: Maybe<Admin>;
  updateCloverCustomerCard?: Maybe<CloverCustomerCard>;
  updateConsumer?: Maybe<Consumer>;
  updateConsumerAddress?: Maybe<ConsumerAddress>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DISCOUNTS */
  updateDiscount?: Maybe<Discount>;
  updateDrawer?: Maybe<Drawer>;
  /** Required permissions: DISCOUNTS_CREATE_EDIT_DYNAMIC_PRICING */
  updateDynamicPrice?: Maybe<DynamicPrice>;
  updateGroupOrder?: Maybe<GroupOrder>;
  updateGroupOrder_V2?: Maybe<GroupOrder_V2>;
  updateKds?: Maybe<Kds>;
  updateKdsMessages?: Maybe<Array<Maybe<KdsMessage>>>;
  /** Required permissions: INVENTORY_CREATE_EDIT_MENUS */
  updateMenu?: Maybe<Menu>;
  /** Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES */
  updateMenuCategoriesOrder: Menu;
  /** Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES */
  updateMenuCategory?: Maybe<MenuCategory>;
  /** Required permissions: INVENTORY_CREATE_EDIT_CATEGORIES */
  updateMenuCategoryAppAvailability: Menu;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  updateMenuCategoryItemAppAvailability: MenuCategory;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  updateMenuItem?: Maybe<MenuItem>;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  updateMenuItems: Array<MenuItem>;
  /** Required permissions: INVENTORY_CREATE_EDIT_MENUS */
  updateMenusOrder: Array<Menu>;
  /** id is required for admins */
  updateMerchant: Merchant;
  /** merchantId is required for admins */
  updateMerchantConfiguration: MerchantConfiguration;
  updateMerchantsOrderInMultimerchantGroup: MultimerchantGroup;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  updateModifier?: Maybe<Modifier>;
  /** Required permissions: INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS */
  updateModifierOption?: Maybe<ModifierOptions>;
  updateMultimerchantGroup: MultimerchantGroup;
  updateOrder?: Maybe<Order>;
  updateOrderCheck?: Maybe<OrderCheck>;
  updateOrderCheck_V2?: Maybe<OrderChecks_V2>;
  updateOrderChecks_V2?: Maybe<OrderChecks_V2>;
  updateOrderDeliveryStatus?: Maybe<Order>;
  updateOrderDeliveryStatus_V2?: Maybe<Order_V2>;
  updateOrderPOS?: Maybe<UpdateOrderPosOutput>;
  updateOrderPOS_V2?: Maybe<UpdateOrderPosOutput_V2>;
  /** Required permissions: SETTINGS_ORDER_THROTTLING */
  updateOrderThrottlingRule?: Maybe<OrderThrottlingRule>;
  /** Required permissions: SETTINGS_CREATE_EDIT_VOIDS */
  updateOrderVoid?: Maybe<OrderVoid>;
  updateOrder_V2?: Maybe<Order_V2>;
  updateOrders: Array<Maybe<Order>>;
  updateOrders_V2: Array<Maybe<Order_V2>>;
  updatePayrixCustomerCard?: Maybe<Array<Maybe<PayrixCard>>>;
  updatePayrixMerchant?: Maybe<PayrixMerchant>;
  /** Required permissions: SETTINGS_HARDWARE */
  updatePos?: Maybe<Pos>;
  /** Required permissions: SETTINGS_HARDWARE */
  updatePrinter?: Maybe<Printer>;
  updateRevenueCenter?: Maybe<RevenueCenter>;
  updateSquareCustomerCard?: Maybe<Array<Maybe<SquareCard>>>;
  updateSquareMerchant?: Maybe<SquareMerchant>;
  updateTable?: Maybe<Table>;
  /** Required permissions: SETTINGS_CREATE_EDIT_ORDER_TYPES */
  updateTableOrderType?: Maybe<TableOrderType>;
  updateTableSection?: Maybe<TableSection>;
  updateTables?: Maybe<Array<Maybe<Table>>>;
  updateTax?: Maybe<Tax>;
  updateTimeClock?: Maybe<TimeClock>;
  updateUser?: Maybe<User>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_EMPLOYEES */
  updateUserEmployee?: Maybe<User>;
  updateUserPassword?: Maybe<Scalars['Boolean']['output']>;
  /** Required permissions: EMPLOYEES_CREATE_EDIT_ROLES_PERMISSIONS */
  updateUserPermissionsGroup?: Maybe<UserPermissionsGroup>;
  voidOrderDelivery: Order;
  voidOrderDelivery_V2: Order_V2;
  /** Required permissions: SETTINGS_VOID_ITEMS */
  voidOrderItems?: Maybe<Order>;
  /** Required permissions: SETTINGS_VOID_ITEMS */
  voidOrderItems_V2?: Maybe<VoidOrderItemsOutput_V2>;
  voidOrdersItems: Array<Order>;
  voidOrdersItems_V2: Array<VoidOrdersItemsOutput_V2>;
};


export type MutationAcceptOrderDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAcceptOrderDelivery_V2Args = {
  id: Scalars['ID']['input'];
};


export type MutationAddMerchantToMultimerchantArgs = {
  merchantId: Scalars['ID']['input'];
};


export type MutationAddPayrixCustomerCardArgs = {
  input: AddPayrixCustomerCardInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationAddSquareCustomerCardArgs = {
  input: AddSquareCustomerCardInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationAddUserEmployeeArgs = {
  input: AddUserEmployeeInput;
};


export type MutationAuthAdminSignInArgs = {
  authAppType: AuthAppType;
  input: AuthSignInInput;
};


export type MutationAuthRefreshTokenArgs = {
  authAppType: AuthAppType;
  refreshToken: Scalars['String']['input'];
  sessionId: Scalars['ID']['input'];
  token: Scalars['String']['input'];
};


export type MutationAuthSignOutArgs = {
  authAppType: AuthAppType;
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserForgotPasswordArgs = {
  input: AuthForgotPasswordInput;
};


export type MutationAuthUserPasswordResetArgs = {
  input: AuthResetPasswordInput;
};


export type MutationAuthUserPinInArgs = {
  authAppType: AuthAppType;
  pin: Scalars['String']['input'];
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserPinOutArgs = {
  authAppType: AuthAppType;
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserQuickAccessArgs = {
  authAppType: AuthAppType;
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserSignInArgs = {
  authAppType: AuthAppType;
  input: AuthSignInInput;
};


export type MutationAuthUserSignInMerchantArgs = {
  authAppType: AuthAppType;
  merchantId: Scalars['ID']['input'];
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserSignInPermissionArgs = {
  authAppType: AuthAppType;
  permissionsGroupId: Scalars['ID']['input'];
  sessionId: Scalars['ID']['input'];
};


export type MutationAuthUserSignUpArgs = {
  input: AuthSignUpInput;
};


export type MutationCashDiscountInventoryUpdateArgs = {
  input: CashDiscountInventoryUpdateInput;
};


export type MutationChargeOrderArgs = {
  input?: InputMaybe<ChargeOrderInput>;
  merchantId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationChargeOrderCheck_V2Args = {
  id: Scalars['ID']['input'];
  input?: InputMaybe<ChargeOrderCheckInput_V2>;
  orderId: Scalars['ID']['input'];
};


export type MutationConfirmGroupOrderArgs = {
  id: Scalars['ID']['input'];
  input: ConfirmGroupOrderInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationConfirmGroupOrder_V2Args = {
  id: Scalars['ID']['input'];
  input: ConfirmGroupOrderInput_V2;
  merchantId: Scalars['ID']['input'];
};


export type MutationConvertMerchantToMultimerchantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateCloverCustomerCardArgs = {
  input?: InputMaybe<CreateCloverCustomerCardInput>;
  merchantId: Scalars['ID']['input'];
};


export type MutationCreateCloverMerchantArgs = {
  input: CreateCloverMerchantInput;
};


export type MutationCreateConsumerAddressArgs = {
  input: CreateConsumerAddressInput;
};


export type MutationCreateDiscountArgs = {
  input: CreateDiscountInput;
};


export type MutationCreateDoordashDeliveryQuoteArgs = {
  input: CreateDoordashDeliveryQuoteInput;
};


export type MutationCreateDrawerArgs = {
  input: CreateDrawerInput;
};


export type MutationCreateDynamicPriceArgs = {
  input: CreateDynamicPriceInput;
};


export type MutationCreateGroupOrderArgs = {
  input: CreateGroupOrderInput;
};


export type MutationCreateGroupOrder_V2Args = {
  input: CreateGroupOrderInput_V2;
};


export type MutationCreateKdsArgs = {
  input: CreateKdsInput;
};


export type MutationCreateLogArgs = {
  input: CreateLogInput;
};


export type MutationCreateMenuArgs = {
  input: CreateMenuInput;
};


export type MutationCreateMenuCategoriesArgs = {
  input: Array<CreateMenuCategoriesInput>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMenuCategoryArgs = {
  input: CreateMenuCategoryInput;
};


export type MutationCreateMenuItemArgs = {
  input: CreateMenuItemInput;
};


export type MutationCreateMenuItemsArgs = {
  input: Array<CreateMenuItemsInput>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMerchantArgs = {
  input: CreateMerchantInput;
};


export type MutationCreateModifierArgs = {
  input: CreateModifierInput;
};


export type MutationCreateModifiersArgs = {
  input: Array<CreateModifiersInput>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMultimerchantGroupArgs = {
  input: CreateMultimerchantGroupInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreateOrderCheckArgs = {
  input: CreateOrderCheckInput;
};


export type MutationCreateOrderChecks_V2Args = {
  input: CreateOrderChecksInput_V2;
};


export type MutationCreateOrderPosArgs = {
  input: CreateOrderPosInput;
};


export type MutationCreateOrderPos_V2Args = {
  input: CreateOrderPosInput_V2;
};


export type MutationCreateOrderThrottlingRuleArgs = {
  input: CreateOrderThrottlingRuleInput;
};


export type MutationCreateOrderVoidArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateOrder_V2Args = {
  input: CreateOrderInput_V2;
};


export type MutationCreatePaymentTransactionArgs = {
  input: CreatePaymentTransactionInput;
};


export type MutationCreatePayrixMerchantArgs = {
  input: CreatePayrixMerchantInput;
};


export type MutationCreatePayrixTxnSessionKeyArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationCreatePosArgs = {
  input: CreatePosInput;
};


export type MutationCreatePrinterArgs = {
  input: CreatePrinterInput;
};


export type MutationCreatePrintersArgs = {
  input: Array<CreatePrintersInput>;
};


export type MutationCreateRevenueCenterArgs = {
  input: CreateRevenueCenterInput;
};


export type MutationCreateSquareMerchantArgs = {
  code: Scalars['NonEmptyString']['input'];
  input: CreateSquareMerchantInput;
};


export type MutationCreateTableArgs = {
  input: CreateTableInput;
};


export type MutationCreateTableOrderTypeArgs = {
  input: CreateTableOrderTypeInput;
};


export type MutationCreateTableSectionArgs = {
  input: CreateTableSectionInput;
};


export type MutationCreateTaxArgs = {
  input: CreateTaxInput;
};


export type MutationCreateTaxesArgs = {
  input: Array<CreateTaxesInput>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateUberDeliveryQuoteArgs = {
  input: CreateUberDeliveryQuoteInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserEmployeeArgs = {
  input: CreateUserEmployeeInput;
};


export type MutationCreateUserPermissionsGroupArgs = {
  input: CreateUserPermissionsGroupInput;
};


export type MutationCreateUserTipsReportArgs = {
  input: CreateUserTipsReportInput;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteConsumerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDiscountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDrawerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDynamicPriceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupOrderArgs = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationDeleteGroupOrder_V2Args = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationDeleteKdsArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuCategoriesArgs = {
  ids: Array<Scalars['ID']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteMenuCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuItemsArgs = {
  ids: Array<Scalars['ID']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteMerchantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMerchantFromMultimerchantArgs = {
  merchantId: Scalars['ID']['input'];
};


export type MutationDeleteModifierArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModifiersArgs = {
  ids: Array<Scalars['ID']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteMultimerchantGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderThrottlingRuleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePayrixCustomerCardArgs = {
  cardId: Scalars['String']['input'];
};


export type MutationDeletePosArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePrinterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRevenueCenterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTableOrderTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTableSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxesArgs = {
  ids: Array<Scalars['ID']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteTimeClockArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserEmployeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserPermissionsGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserTipsReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDisconnectMerchantArgs = {
  deleteInventory: Scalars['Boolean']['input'];
  deleteTables: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};


export type MutationJoinGroupOrderArgs = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationJoinGroupOrder_V2Args = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationLeaveGroupOrderArgs = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationLeaveGroupOrder_V2Args = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationRefundOrderItemsArgs = {
  input: RefundOrderItemsInput;
  orderId: Scalars['ID']['input'];
};


export type MutationRefundOrderItems_V2Args = {
  input: RefundOrderItemsInput_V2;
  orderCheckId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationRemoveOrderTaxesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveOrderTaxes_V2Args = {
  id: Scalars['ID']['input'];
};


export type MutationRestoreOrderTaxesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRestoreOrderTaxes_V2Args = {
  id: Scalars['ID']['input'];
};


export type MutationRetryRefundOrderItemsArgs = {
  input: RefundOrderItemsInput;
  merchantId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationRetryRefundOrderItems_V2Args = {
  input: RefundOrderItemsInput_V2;
  merchantId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationSendConsumerSmsArgs = {
  consumerIds: Array<Scalars['ID']['input']>;
  message: Scalars['String']['input'];
};


export type MutationSendReceiptArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  orderIds: Array<Scalars['ID']['input']>;
};


export type MutationSendSmsVerificationArgs = {
  to: Scalars['String']['input'];
};


export type MutationSendSmsVerificationCheckArgs = {
  agreedWithTerms: Scalars['Boolean']['input'];
  code: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  to: Scalars['String']['input'];
};


export type MutationSquareMerchantRefreshTokenArgs = {
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateAdminArgs = {
  id: Scalars['ID']['input'];
  input: UpdateAdminInput;
};


export type MutationUpdateCloverCustomerCardArgs = {
  input?: InputMaybe<UpdateCloverCustomerCardInput>;
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateConsumerArgs = {
  input: ConsumerUpdateInput;
};


export type MutationUpdateConsumerAddressArgs = {
  id: Scalars['ID']['input'];
  input: UpdateConsumerAddressInput;
};


export type MutationUpdateDiscountArgs = {
  id: Scalars['ID']['input'];
  input: UpdateDiscountInput;
};


export type MutationUpdateDrawerArgs = {
  id: Scalars['ID']['input'];
  input: UpdateDrawerInput;
};


export type MutationUpdateDynamicPriceArgs = {
  id: Scalars['ID']['input'];
  input: UpdateDynamicPriceInput;
};


export type MutationUpdateGroupOrderArgs = {
  id: Scalars['ID']['input'];
  input: UpdateGroupOrderInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateGroupOrder_V2Args = {
  id: Scalars['ID']['input'];
  input: UpdateGroupOrderInput_V2;
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateKdsArgs = {
  id: Scalars['ID']['input'];
  input: UpdateKdsInput;
};


export type MutationUpdateKdsMessagesArgs = {
  input: Array<UpdateKdsMessageInput>;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenuInput;
};


export type MutationUpdateMenuCategoriesOrderArgs = {
  id: Scalars['ID']['input'];
  input: Array<UpdateMenuCategoriesOrderInput>;
};


export type MutationUpdateMenuCategoryArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenuCategoryInput;
};


export type MutationUpdateMenuCategoryAppAvailabilityArgs = {
  input: UpdateAppAvailabilityInput;
  menuId: Scalars['ID']['input'];
};


export type MutationUpdateMenuCategoryItemAppAvailabilityArgs = {
  input: UpdateAppAvailabilityInput;
  menuCategoryId: Scalars['ID']['input'];
};


export type MutationUpdateMenuItemArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMenuItemInput;
};


export type MutationUpdateMenuItemsArgs = {
  input: UpdateMenuItemsInput;
};


export type MutationUpdateMenusOrderArgs = {
  input: Array<UpdateMenuOrderInput>;
};


export type MutationUpdateMerchantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: UpdateMerchantInput;
};


export type MutationUpdateMerchantConfigurationArgs = {
  input: UpdateMerchantConfigurationInput;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMerchantsOrderInMultimerchantGroupArgs = {
  id: Scalars['ID']['input'];
  input: Array<UpdateMerchantsOrderInMultimerchantGroupInput>;
};


export type MutationUpdateModifierArgs = {
  id: Scalars['ID']['input'];
  input: UpdateModifierInput;
};


export type MutationUpdateModifierOptionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateModifierOptionInput;
};


export type MutationUpdateMultimerchantGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMultimerchantGroupInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrderInput;
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateOrderCheckArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrderCheckInput;
};


export type MutationUpdateOrderCheck_V2Args = {
  id: Scalars['ID']['input'];
  input: UpdateOrderCheckInput_V2;
  orderId: Scalars['ID']['input'];
};


export type MutationUpdateOrderChecks_V2Args = {
  id: Scalars['ID']['input'];
  input: UpdateOrderChecksInput_V2;
  orderId: Scalars['ID']['input'];
};


export type MutationUpdateOrderDeliveryStatusArgs = {
  deliveryId: Scalars['String']['input'];
  input: UpdateOrderDeliveryStatusInput;
};


export type MutationUpdateOrderDeliveryStatus_V2Args = {
  deliveryId: Scalars['String']['input'];
  input: UpdateOrderDeliveryStatusInput_V2;
};


export type MutationUpdateOrderPosArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrderPosInput;
};


export type MutationUpdateOrderPos_V2Args = {
  id: Scalars['ID']['input'];
  input: UpdateOrderPosInput_V2;
};


export type MutationUpdateOrderThrottlingRuleArgs = {
  id: Scalars['ID']['input'];
  input: UpdateOrderThrottlingRuleInput;
};


export type MutationUpdateOrderVoidArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateOrder_V2Args = {
  id: Scalars['ID']['input'];
  input: UpdateOrderInput_V2;
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdateOrdersArgs = {
  input: UpdateOrdersInput;
};


export type MutationUpdateOrders_V2Args = {
  input: UpdateOrdersInput_V2;
};


export type MutationUpdatePayrixCustomerCardArgs = {
  cardId: Scalars['String']['input'];
  merchantId: Scalars['ID']['input'];
};


export type MutationUpdatePayrixMerchantArgs = {
  input: UpdatePayrixMerchantInput;
  merchantId: Scalars['ID']['input'];
  payrixMerchantId: Scalars['ID']['input'];
};


export type MutationUpdatePosArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePosInput;
};


export type MutationUpdatePrinterArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePrinterInput;
};


export type MutationUpdateRevenueCenterArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRevenueCenterInput;
};


export type MutationUpdateSquareCustomerCardArgs = {
  defaultCardId?: InputMaybe<Scalars['ID']['input']>;
  deleteCardId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateSquareMerchantArgs = {
  input: UpdateSquareMerchantInput;
};


export type MutationUpdateTableArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTableInput;
};


export type MutationUpdateTableOrderTypeArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTableOrderTypeInput;
};


export type MutationUpdateTableSectionArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTableSectionInput;
};


export type MutationUpdateTablesArgs = {
  input: UpdateTablesInput;
};


export type MutationUpdateTaxArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTaxInput;
};


export type MutationUpdateTimeClockArgs = {
  id: Scalars['ID']['input'];
  input: TimeClockUpdateInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateUserEmployeeArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserEmployeeInput;
};


export type MutationUpdateUserPasswordArgs = {
  input: AuthUpdatePasswordInput;
};


export type MutationUpdateUserPermissionsGroupArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserPermissionsGroupInput;
};


export type MutationVoidOrderDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVoidOrderDelivery_V2Args = {
  id: Scalars['ID']['input'];
};


export type MutationVoidOrderItemsArgs = {
  input: VoidOrderItemsInput;
  orderId: Scalars['ID']['input'];
};


export type MutationVoidOrderItems_V2Args = {
  input: VoidOrderItemsInput_V2;
  orderId: Scalars['ID']['input'];
};


export type MutationVoidOrdersItemsArgs = {
  input: VoidOrdersItemsInput;
};


export type MutationVoidOrdersItems_V2Args = {
  input: VoidOrdersItemsInput_V2;
};

export type Order = {
  __typename?: 'Order';
  additionalInfo: OrderAdditionalInfo;
  application: AppType;
  clover?: Maybe<OrderClover>;
  consumerId: Scalars['ID']['output'];
  consumerName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deliveryInfo?: Maybe<OrderDeliveryInfo>;
  discounts?: Maybe<Array<OrderDiscount>>;
  employeeId?: Maybe<Scalars['ID']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isOpenTab: Scalars['Boolean']['output'];
  isReceiptSent: Scalars['Boolean']['output'];
  items: Array<OrderItem>;
  merchantId: Scalars['ID']['output'];
  multimerchantId?: Maybe<Scalars['ID']['output']>;
  orderCheck?: Maybe<OrderCheck>;
  paymentMethod: OrderPaymentMethods;
  paymentStatus: OrderPaymentStatuses;
  paymentTransactions?: Maybe<Array<PaymentTransaction>>;
  payrix?: Maybe<OrderPayrix>;
  posId?: Maybe<Scalars['ID']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
  refundStatus?: Maybe<OrderRefundStatuses>;
  square?: Maybe<OrderSquare>;
  tip?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<OrderType>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderAdditionalInfo = {
  __typename?: 'OrderAdditionalInfo';
  scheduleAt?: Maybe<Scalars['DateTime']['output']>;
  specialInstructions?: Maybe<Scalars['String']['output']>;
};

export type OrderAdditionalInfo_V2 = {
  __typename?: 'OrderAdditionalInfo_V2';
  scheduleAt?: Maybe<Scalars['DateTime']['output']>;
  specialInstructions?: Maybe<Scalars['String']['output']>;
};

export type OrderCheck = {
  __typename?: 'OrderCheck';
  checks: Array<OrderCheckItem>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  paymentTransactions: Array<PaymentTransaction>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderCheckClover_V2 = {
  __typename?: 'OrderCheckClover_V2';
  meteredId: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
};

export type OrderCheckConsumerItem = {
  __typename?: 'OrderCheckConsumerItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  itemAmount: Scalars['Float']['output'];
  itemId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderCheckDiscountInput_V2 = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: OrderChecksDiscountTypes_V2;
};

export type OrderCheckDiscount_V2 = {
  __typename?: 'OrderCheckDiscount_V2';
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: OrderChecksDiscountTypes_V2;
};

export type OrderCheckItem = {
  __typename?: 'OrderCheckItem';
  consumerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isPaid: Scalars['Boolean']['output'];
  items: Array<OrderCheckConsumerItem>;
  referenceId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderCheckItem_V2 = {
  __typename?: 'OrderCheckItem_V2';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  discounts: Array<OrderCheckDiscount_V2>;
  id: Scalars['ID']['output'];
  orderItemId: Scalars['ID']['output'];
  refundAmount: Scalars['Float']['output'];
  refundFailedAmount: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  voidAmount: Scalars['Float']['output'];
  voidPaidAmount: Scalars['Float']['output'];
};

export enum OrderCheckPaymentStatuses_V2 {
  Authorized = 'AUTHORIZED',
  None = 'NONE',
  Paid = 'PAID',
  Voided = 'VOIDED'
}

export type OrderCheck_V2 = {
  __typename?: 'OrderCheck_V2';
  clover?: Maybe<OrderCheckClover_V2>;
  consumerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  discounts: Array<OrderCheckDiscount_V2>;
  id: Scalars['ID']['output'];
  isPaid: Scalars['Boolean']['output'];
  items: Array<OrderCheckItem_V2>;
  paymentProvider?: Maybe<PaymentProviders>;
  paymentStatus?: Maybe<OrderCheckPaymentStatuses_V2>;
  paymentTransactions: Array<PaymentTransaction>;
  referenceId: Scalars['String']['output'];
  tip?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderChecksDiscountTypes_V2 {
  FixedAmountOff = 'FIXED_AMOUNT_OFF',
  FixedPercentageOff = 'FIXED_PERCENTAGE_OFF',
  OpenAmountOff = 'OPEN_AMOUNT_OFF',
  OpenPercentageOff = 'OPEN_PERCENTAGE_OFF'
}

export type OrderChecks_V2 = {
  __typename?: 'OrderChecks_V2';
  checks: Array<OrderCheck_V2>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderClover = {
  __typename?: 'OrderClover';
  meteredId?: Maybe<Scalars['ID']['output']>;
  orderId?: Maybe<Scalars['ID']['output']>;
};

/**
 * **Doordash delivery cancelation statuses:** [
 *   "cancel_by_dispatch",
 *   "cancel_by_merchant",
 *   "cancel_by_order_placer",
 *   "customer_requested_other",
 *   "dasher_cannot_fulfill_other",
 *   "dasher_not_responding",
 *   "drive_order_picked_up_by_customer",
 *   "duplicate_order",
 *   "fraudulent_order",
 *   "items_temp_unavailable",
 *   "no_available_dashers",
 *   "nontablet_protocol_issue",
 *   "other",
 *   "picked_up_by_other_dasher",
 *   "store_cannot_fulfill_other",
 *   "store_closed",
 *   "test_order",
 *   "too_busy",
 *   "too_late",
 *   "wrong_delivery_address",
 *   "package_needs_redelivery",
 *   "package_never_received",
 *   "package_lost_at_facility",
 * ]
 *
 * **Uber delivery cancelation statuses:** [
 * "CANNOT_ACCESS_CUSTOMER_LOCATION",
 * "CANNOT_FIND_CUSTOMER_ADDRESS",
 * "CUSTOMER_REJECTED_ORDER",
 * "CUSTOMER_UNAVAILABLE",
 * "COURIER_CANCEL",
 * "MERCHANT_CANCEL",
 * "UBER_CANCEL",
 * ]
 */
export enum OrderDeliveryCancelationReason {
  CannotAccessCustomerLocation = 'CANNOT_ACCESS_CUSTOMER_LOCATION',
  CannotFindCustomerAddress = 'CANNOT_FIND_CUSTOMER_ADDRESS',
  CourierCancel = 'COURIER_CANCEL',
  CustomerRejectedOrder = 'CUSTOMER_REJECTED_ORDER',
  CustomerUnavailable = 'CUSTOMER_UNAVAILABLE',
  MerchantCancel = 'MERCHANT_CANCEL',
  UberCancel = 'UBER_CANCEL',
  CancelByDispatch = 'cancel_by_dispatch',
  CancelByMerchant = 'cancel_by_merchant',
  CancelByOrderPlacer = 'cancel_by_order_placer',
  CustomerRequestedOther = 'customer_requested_other',
  DasherCannotFulfillOther = 'dasher_cannot_fulfill_other',
  DasherNotResponding = 'dasher_not_responding',
  DriveOrderPickedUpByCustomer = 'drive_order_picked_up_by_customer',
  DuplicateOrder = 'duplicate_order',
  FraudulentOrder = 'fraudulent_order',
  ItemsTempUnavailable = 'items_temp_unavailable',
  NoAvailableDashers = 'no_available_dashers',
  NontabletProtocolIssue = 'nontablet_protocol_issue',
  Other = 'other',
  PackageLostAtFacility = 'package_lost_at_facility',
  PackageNeedsRedelivery = 'package_needs_redelivery',
  PackageNeverReceived = 'package_never_received',
  PickedUpByOtherDasher = 'picked_up_by_other_dasher',
  StoreCannotFulfillOther = 'store_cannot_fulfill_other',
  StoreClosed = 'store_closed',
  TestOrder = 'test_order',
  TooBusy = 'too_busy',
  TooLate = 'too_late',
  WrongDeliveryAddress = 'wrong_delivery_address'
}

/**
 * **Doordash delivery cancelation statuses:** [
 *   "cancel_by_dispatch",
 *   "cancel_by_merchant",
 *   "cancel_by_order_placer",
 *   "customer_requested_other",
 *   "dasher_cannot_fulfill_other",
 *   "dasher_not_responding",
 *   "drive_order_picked_up_by_customer",
 *   "duplicate_order",
 *   "fraudulent_order",
 *   "items_temp_unavailable",
 *   "no_available_dashers",
 *   "nontablet_protocol_issue",
 *   "other",
 *   "picked_up_by_other_dasher",
 *   "store_cannot_fulfill_other",
 *   "store_closed",
 *   "test_order",
 *   "too_busy",
 *   "too_late",
 *   "wrong_delivery_address",
 *   "package_needs_redelivery",
 *   "package_never_received",
 *   "package_lost_at_facility",
 * ]
 *
 * **Uber delivery cancelation statuses:** [
 * "CANNOT_ACCESS_CUSTOMER_LOCATION",
 * "CANNOT_FIND_CUSTOMER_ADDRESS",
 * "CUSTOMER_REJECTED_ORDER",
 * "CUSTOMER_UNAVAILABLE",
 * "COURIER_CANCEL",
 * "MERCHANT_CANCEL",
 * "UBER_CANCEL",
 * ]
 */
export enum OrderDeliveryCancelationReasons_V2 {
  CannotAccessCustomerLocation = 'CANNOT_ACCESS_CUSTOMER_LOCATION',
  CannotFindCustomerAddress = 'CANNOT_FIND_CUSTOMER_ADDRESS',
  CourierCancel = 'COURIER_CANCEL',
  CustomerRejectedOrder = 'CUSTOMER_REJECTED_ORDER',
  CustomerUnavailable = 'CUSTOMER_UNAVAILABLE',
  MerchantCancel = 'MERCHANT_CANCEL',
  UberCancel = 'UBER_CANCEL',
  CancelByDispatch = 'cancel_by_dispatch',
  CancelByMerchant = 'cancel_by_merchant',
  CancelByOrderPlacer = 'cancel_by_order_placer',
  CustomerRequestedOther = 'customer_requested_other',
  DasherCannotFulfillOther = 'dasher_cannot_fulfill_other',
  DasherNotResponding = 'dasher_not_responding',
  DriveOrderPickedUpByCustomer = 'drive_order_picked_up_by_customer',
  DuplicateOrder = 'duplicate_order',
  FraudulentOrder = 'fraudulent_order',
  ItemsTempUnavailable = 'items_temp_unavailable',
  NoAvailableDashers = 'no_available_dashers',
  NontabletProtocolIssue = 'nontablet_protocol_issue',
  Other = 'other',
  PackageLostAtFacility = 'package_lost_at_facility',
  PackageNeedsRedelivery = 'package_needs_redelivery',
  PackageNeverReceived = 'package_never_received',
  PickedUpByOtherDasher = 'picked_up_by_other_dasher',
  StoreCannotFulfillOther = 'store_cannot_fulfill_other',
  StoreClosed = 'store_closed',
  TestOrder = 'test_order',
  TooBusy = 'too_busy',
  TooLate = 'too_late',
  WrongDeliveryAddress = 'wrong_delivery_address'
}

export type OrderDeliveryInfo = {
  __typename?: 'OrderDeliveryInfo';
  consumerAddressId?: Maybe<Scalars['ID']['output']>;
  deliveryCancelationReason?: Maybe<OrderDeliveryCancelationReason>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryProvider?: Maybe<DeliveryProvider>;
  deliveryQuoteId?: Maybe<Scalars['String']['output']>;
  deliveryStatus?: Maybe<OrderDeliveryStatus>;
  deliveryTip?: Maybe<Scalars['Int']['output']>;
  dropoffTime?: Maybe<Scalars['DateTime']['output']>;
  pickupTime?: Maybe<Scalars['DateTime']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
  supportReference?: Maybe<Scalars['String']['output']>;
};

export type OrderDeliveryInfo_V2 = {
  __typename?: 'OrderDeliveryInfo_V2';
  consumerAddressId?: Maybe<Scalars['ID']['output']>;
  deliveryCancelationReason?: Maybe<OrderDeliveryCancelationReasons_V2>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  deliveryId?: Maybe<Scalars['String']['output']>;
  deliveryProvider?: Maybe<DeliveryProvider>;
  deliveryQuoteId?: Maybe<Scalars['String']['output']>;
  deliveryStatus?: Maybe<OrderDeliveryStatuses_V2>;
  deliveryTip?: Maybe<Scalars['Int']['output']>;
  dropoffTime?: Maybe<Scalars['DateTime']['output']>;
  pickupTime?: Maybe<Scalars['DateTime']['output']>;
  referenceId?: Maybe<Scalars['String']['output']>;
  supportReference?: Maybe<Scalars['String']['output']>;
};

/**
 * **Doordash delivery statuses:** ['quote', 'created', 'confirmed', 'enroute_to_pickup', 'arrived_at_pickup', 'picked_up', 'enroute_to_dropoff', 'arrived_at_dropoff', 'delivered', 'enroute_to_return', 'arrived_at_return', 'returned', 'cancelled']
 *
 * **Uber delivery statuses:** ['pending', 'pickup', 'pickup_complete', 'dropoff', 'delivered', 'canceled', 'returned']
 */
export enum OrderDeliveryStatus {
  ArrivedAtDropoff = 'arrived_at_dropoff',
  ArrivedAtPickup = 'arrived_at_pickup',
  ArrivedAtReturn = 'arrived_at_return',
  Canceled = 'canceled',
  Cancelled = 'cancelled',
  Confirmed = 'confirmed',
  Created = 'created',
  Delivered = 'delivered',
  Dropoff = 'dropoff',
  EnrouteToDropoff = 'enroute_to_dropoff',
  EnrouteToPickup = 'enroute_to_pickup',
  EnrouteToReturn = 'enroute_to_return',
  Pending = 'pending',
  PickedUp = 'picked_up',
  Pickup = 'pickup',
  PickupComplete = 'pickup_complete',
  Quote = 'quote',
  Returned = 'returned'
}

/**
 * **Doordash delivery statuses:** ['quote', 'created', 'confirmed', 'enroute_to_pickup', 'arrived_at_pickup', 'picked_up', 'enroute_to_dropoff', 'arrived_at_dropoff', 'delivered', 'enroute_to_return', 'arrived_at_return', 'returned', 'cancelled']
 *
 * **Uber delivery statuses:** ['pending', 'pickup', 'pickup_complete', 'dropoff', 'delivered', 'canceled', 'returned']
 */
export enum OrderDeliveryStatuses_V2 {
  ArrivedAtDropoff = 'arrived_at_dropoff',
  ArrivedAtPickup = 'arrived_at_pickup',
  ArrivedAtReturn = 'arrived_at_return',
  Canceled = 'canceled',
  Cancelled = 'cancelled',
  Confirmed = 'confirmed',
  Created = 'created',
  Delivered = 'delivered',
  Dropoff = 'dropoff',
  EnrouteToDropoff = 'enroute_to_dropoff',
  EnrouteToPickup = 'enroute_to_pickup',
  EnrouteToReturn = 'enroute_to_return',
  Pending = 'pending',
  PickedUp = 'picked_up',
  Pickup = 'pickup',
  PickupComplete = 'pickup_complete',
  Quote = 'quote',
  Returned = 'returned'
}

export type OrderDiscount = {
  __typename?: 'OrderDiscount';
  amount?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  subtype: OrderDiscountSubtype;
  type: OrderDiscountType;
};

export type OrderDiscountInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Int']['input']>;
  subtype: OrderDiscountSubtype;
  type: OrderDiscountType;
};

export enum OrderDiscountSubtype {
  DecreasedAmount = 'DECREASED_AMOUNT',
  DecreasedPercentage = 'DECREASED_PERCENTAGE',
  FixedAmountOff = 'FIXED_AMOUNT_OFF',
  FixedPercentageOff = 'FIXED_PERCENTAGE_OFF',
  IncreasedAmount = 'INCREASED_AMOUNT',
  IncreasedPercentage = 'INCREASED_PERCENTAGE',
  OpenAmountOff = 'OPEN_AMOUNT_OFF',
  OpenPercentageOff = 'OPEN_PERCENTAGE_OFF'
}

export enum OrderDiscountType {
  Discount = 'DISCOUNT',
  DynamicPrice = 'DYNAMIC_PRICE'
}

export enum OrderDiscountTypes_V2 {
  Discount = 'DISCOUNT',
  DynamicPrice = 'DYNAMIC_PRICE'
}

export type OrderItem = {
  __typename?: 'OrderItem';
  acceptedKdsId?: Maybe<Scalars['ID']['output']>;
  amount: Scalars['Int']['output'];
  category: Scalars['String']['output'];
  chitName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  delayedUntil?: Maybe<Scalars['DateTime']['output']>;
  discounts: Array<OrderDiscount>;
  externalItemId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  itemKdsIds: Array<Scalars['ID']['output']>;
  itemPrinterIds: Array<Scalars['ID']['output']>;
  menuCategoryId?: Maybe<Scalars['ID']['output']>;
  menuId?: Maybe<Scalars['ID']['output']>;
  menuItemId?: Maybe<Scalars['ID']['output']>;
  modifiers: Array<OrderItemModifier>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  orderedByConsumerId?: Maybe<Scalars['ID']['output']>;
  orderedByConsumerName?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  priceTieredName?: Maybe<Scalars['String']['output']>;
  refundAmount: Scalars['Int']['output'];
  refundFailedAmount?: Maybe<Scalars['Int']['output']>;
  revenueCenter: Scalars['String']['output'];
  status: OrderItemStatuses;
  tableKdsIds: Array<Scalars['ID']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
  tableOrderType: Scalars['String']['output'];
  tablePrinterIds: Array<Scalars['ID']['output']>;
  tableSection?: Maybe<Scalars['String']['output']>;
  /** @deprecated No longer supported */
  tax?: Maybe<Scalars['Int']['output']>;
  /** @deprecated No longer supported */
  taxName?: Maybe<Scalars['String']['output']>;
  taxes: Array<OrderItemTaxes>;
  updatedAt: Scalars['DateTime']['output'];
  voidAmount?: Maybe<Scalars['Int']['output']>;
  voidPaidAmount?: Maybe<Scalars['Int']['output']>;
  voidReason?: Maybe<Scalars['String']['output']>;
};

export type OrderItemDynamicPriceInput_V2 = {
  amount: Scalars['Float']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  type: OrderItemDynamicPriceTypes_V2;
};

export enum OrderItemDynamicPriceTypes_V2 {
  DecreasedAmount = 'DECREASED_AMOUNT',
  DecreasedPercentage = 'DECREASED_PERCENTAGE',
  IncreasedAmount = 'INCREASED_AMOUNT',
  IncreasedPercentage = 'INCREASED_PERCENTAGE'
}

export type OrderItemDynamicPrice_V2 = {
  __typename?: 'OrderItemDynamicPrice_V2';
  amount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: OrderItemDynamicPriceTypes_V2;
};

export type OrderItemInput = {
  amount: Scalars['Int']['input'];
  category: Scalars['String']['input'];
  chitName: Scalars['String']['input'];
  delayedUntil?: InputMaybe<Scalars['DateTime']['input']>;
  discounts: Array<OrderDiscountInput>;
  externalItemId?: InputMaybe<Scalars['ID']['input']>;
  itemKdsIds: Array<Scalars['ID']['input']>;
  itemPrinterIds: Array<Scalars['ID']['input']>;
  menuCategoryId: Scalars['ID']['input'];
  menuId: Scalars['ID']['input'];
  menuItemId: Scalars['ID']['input'];
  modifiers: Array<OrderItemModifierInput>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderedByConsumerId?: InputMaybe<Scalars['ID']['input']>;
  orderedByConsumerName?: InputMaybe<Scalars['String']['input']>;
  prepTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  price: Scalars['NonNegativeInt']['input'];
  priceTieredName?: InputMaybe<Scalars['String']['input']>;
  revenueCenter: Scalars['String']['input'];
  tableKdsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  tableOrderType: Scalars['String']['input'];
  tablePrinterIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tableSection?: InputMaybe<Scalars['String']['input']>;
  taxes: Array<OrderItemTaxesInput>;
};

export type OrderItemInput_V2 = {
  amount: Scalars['Int']['input'];
  chitName: Scalars['String']['input'];
  delayedUntil?: InputMaybe<Scalars['DateTime']['input']>;
  dynamicPrice?: InputMaybe<OrderItemDynamicPriceInput_V2>;
  externalItemId?: InputMaybe<Scalars['ID']['input']>;
  itemKdsIds: Array<Scalars['ID']['input']>;
  itemPrinterIds: Array<Scalars['ID']['input']>;
  menuCategoryId: Scalars['ID']['input'];
  menuCategoryName: Scalars['String']['input'];
  menuId: Scalars['ID']['input'];
  menuItemId: Scalars['ID']['input'];
  modifiers: Array<OrderItemModifierInput_V2>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderedByConsumerId?: InputMaybe<Scalars['ID']['input']>;
  orderedByConsumerName?: InputMaybe<Scalars['String']['input']>;
  prepTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  price: Scalars['NonNegativeInt']['input'];
  priceTieredName?: InputMaybe<Scalars['String']['input']>;
  revenueCenter: Scalars['String']['input'];
  tableKdsIds: Array<Scalars['ID']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  tableOrderType: Scalars['String']['input'];
  tablePrinterIds: Array<Scalars['ID']['input']>;
  tableSection?: InputMaybe<Scalars['String']['input']>;
  taxes: Array<OrderItemTaxesInput_V2>;
};

export type OrderItemModifier = {
  __typename?: 'OrderItemModifier';
  amount?: Maybe<Scalars['Int']['output']>;
  chitName: Scalars['String']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  groupExternalId?: Maybe<Scalars['ID']['output']>;
  groupName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export type OrderItemModifierInput = {
  amount: Scalars['Int']['input'];
  chitName: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['ID']['input']>;
  groupExternalId?: InputMaybe<Scalars['ID']['input']>;
  groupName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type OrderItemModifierInput_V2 = {
  amount: Scalars['Int']['input'];
  cashDiscount?: InputMaybe<Scalars['Int']['input']>;
  chitName: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['ID']['input']>;
  groupExternalId?: InputMaybe<Scalars['ID']['input']>;
  groupName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
};

export type OrderItemModifier_V2 = {
  __typename?: 'OrderItemModifier_V2';
  amount: Scalars['Int']['output'];
  cashDiscount: Scalars['Int']['output'];
  chitName: Scalars['String']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  groupExternalId?: Maybe<Scalars['ID']['output']>;
  groupName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
};

export enum OrderItemStatuses {
  Accepted = 'ACCEPTED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  /** @deprecated No longer supported */
  MissingTablet = 'MISSING_TABLET',
  Pending = 'PENDING',
  /** @deprecated No longer supported */
  Rejected = 'REJECTED',
  /** @deprecated No longer supported */
  RejectedWithRefund = 'REJECTED_WITH_REFUND',
  /** @deprecated No longer supported */
  RejectedWithVoid = 'REJECTED_WITH_VOID',
  /** @deprecated No longer supported */
  VoidedAndRefunded = 'VOIDED_AND_REFUNDED'
}

export enum OrderItemStatuses_V2 {
  Accepted = 'ACCEPTED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type OrderItemTaxes = {
  __typename?: 'OrderItemTaxes';
  amount?: Maybe<Scalars['Float']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  isInclusive?: Maybe<Scalars['Boolean']['output']>;
  isRemoved?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  rate?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<TaxType>;
};

export type OrderItemTaxesInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isInclusive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  rate?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<TaxType>;
};

export type OrderItemTaxesInput_V2 = {
  amount: Scalars['Int']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isInclusive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  type: TaxType;
};

export type OrderItemTaxes_V2 = {
  __typename?: 'OrderItemTaxes_V2';
  amount: Scalars['Float']['output'];
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isInclusive: Scalars['Boolean']['output'];
  isRemoved: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: TaxType;
};

export type OrderItem_V2 = {
  __typename?: 'OrderItem_V2';
  acceptedKdsId?: Maybe<Scalars['ID']['output']>;
  amount: Scalars['Int']['output'];
  cashDiscount: Scalars['Int']['output'];
  chitName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  delayedUntil?: Maybe<Scalars['DateTime']['output']>;
  dynamicPrice?: Maybe<OrderItemDynamicPrice_V2>;
  externalItemId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  itemKdsIds: Array<Scalars['ID']['output']>;
  itemPrinterIds: Array<Scalars['ID']['output']>;
  menuCategoryId: Scalars['ID']['output'];
  menuCategoryName: Scalars['String']['output'];
  menuId: Scalars['ID']['output'];
  menuItemId: Scalars['ID']['output'];
  modifiers: Array<OrderItemModifier_V2>;
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  orderedByConsumerId?: Maybe<Scalars['ID']['output']>;
  orderedByConsumerName?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  priceTieredName?: Maybe<Scalars['String']['output']>;
  revenueCenter: Scalars['String']['output'];
  status: OrderItemStatuses_V2;
  tableKdsIds: Array<Scalars['ID']['output']>;
  tableName?: Maybe<Scalars['String']['output']>;
  tableOrderType: Scalars['String']['output'];
  tablePrinterIds: Array<Scalars['ID']['output']>;
  tableSection?: Maybe<Scalars['String']['output']>;
  taxes: Array<OrderItemTaxes_V2>;
  updatedAt: Scalars['DateTime']['output'];
  voidReason?: Maybe<Scalars['String']['output']>;
};

export enum OrderPaymentMethods {
  Clover = 'CLOVER',
  Payrix = 'PAYRIX',
  Square = 'SQUARE'
}

export enum OrderPaymentMethods_V2 {
  Clover = 'CLOVER',
  Payrix = 'PAYRIX'
}

export enum OrderPaymentStatuses {
  Authorized = 'AUTHORIZED',
  Completed = 'COMPLETED',
  None = 'NONE',
  /** @deprecated No longer supported */
  Rejected = 'REJECTED'
}

export type OrderPayrix = {
  __typename?: 'OrderPayrix';
  transactionId?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<PayrixTransactionType>;
};

export enum OrderRefundStatuses {
  FullyRefunded = 'FULLY_REFUNDED',
  NotRefunded = 'NOT_REFUNDED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Voided = 'VOIDED'
}

export type OrderSquare = {
  __typename?: 'OrderSquare';
  orderId?: Maybe<Scalars['ID']['output']>;
  paymentId?: Maybe<Scalars['ID']['output']>;
};

export type OrderThrottlingItemsCountOutput = {
  __typename?: 'OrderThrottlingItemsCountOutput';
  count: Scalars['Int']['output'];
  menuId: Scalars['ID']['output'];
};

export type OrderThrottlingRule = {
  __typename?: 'OrderThrottlingRule';
  id: Scalars['ID']['output'];
  levelOneAdditionalWaitingTime?: Maybe<Scalars['Int']['output']>;
  levelOneEnabled: Scalars['Boolean']['output'];
  levelOneItemsReceived?: Maybe<Scalars['Int']['output']>;
  levelOneMessage?: Maybe<Scalars['String']['output']>;
  levelThreeAdditionalWaitingTime?: Maybe<Scalars['Int']['output']>;
  levelThreeEnabled: Scalars['Boolean']['output'];
  levelThreeItemsReceived?: Maybe<Scalars['Int']['output']>;
  levelThreeMessage?: Maybe<Scalars['String']['output']>;
  levelTwoAdditionalWaitingTime?: Maybe<Scalars['Int']['output']>;
  levelTwoEnabled: Scalars['Boolean']['output'];
  levelTwoItemsReceived?: Maybe<Scalars['Int']['output']>;
  levelTwoMessage?: Maybe<Scalars['String']['output']>;
  menus: Array<Menu>;
  merchantId: Scalars['ID']['output'];
};

export enum OrderType {
  DineIn = 'DINE_IN',
  /** @deprecated No longer supported */
  Online = 'ONLINE',
  OnlineDelivery = 'ONLINE_DELIVERY',
  OnlinePickup = 'ONLINE_PICKUP'
}

export enum OrderTypes_V2 {
  DineIn = 'DINE_IN',
  OnlineDelivery = 'ONLINE_DELIVERY',
  OnlinePickup = 'ONLINE_PICKUP'
}

export type OrderVoid = {
  __typename?: 'OrderVoid';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderVoidsOutput = {
  __typename?: 'OrderVoidsOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<OrderVoid>>;
};

export type Order_V2 = {
  __typename?: 'Order_V2';
  additionalInfo: OrderAdditionalInfo_V2;
  application: AppType;
  consumerId?: Maybe<Scalars['ID']['output']>;
  consumerName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deliveryInfo?: Maybe<OrderDeliveryInfo_V2>;
  employeeId?: Maybe<Scalars['ID']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  fee: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isOpenTab: Scalars['Boolean']['output'];
  items: Array<OrderItem_V2>;
  merchantId: Scalars['ID']['output'];
  multimerchantId?: Maybe<Scalars['ID']['output']>;
  orderChecks?: Maybe<OrderChecks_V2>;
  referenceId: Scalars['String']['output'];
  type: OrderTypes_V2;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrdersOutput = {
  __typename?: 'OrdersOutput';
  count: Scalars['Int']['output'];
  items: Array<Order>;
};

export type OrdersOutput_V2 = {
  __typename?: 'OrdersOutput_V2';
  count: Scalars['Int']['output'];
  items: Array<Order_V2>;
};

export type OrdersSalesOverviewOutput = {
  __typename?: 'OrdersSalesOverviewOutput';
  date: Scalars['String']['output'];
  grossSale: Scalars['Int']['output'];
  netSale: Scalars['Int']['output'];
  ordersCount: Scalars['Int']['output'];
  totalCollected: Scalars['Int']['output'];
  totalDiscounts: Scalars['Int']['output'];
  totalRefunds: Scalars['Int']['output'];
  totalTips: Scalars['Int']['output'];
};

export type OrdersSalesOverviewOutput_V2 = {
  __typename?: 'OrdersSalesOverviewOutput_V2';
  date: Scalars['String']['output'];
  grossSale: Scalars['Int']['output'];
  netSale: Scalars['Int']['output'];
  ordersCount: Scalars['Int']['output'];
  totalCollected: Scalars['Int']['output'];
  totalDiscounts: Scalars['Int']['output'];
  totalRefunds: Scalars['Int']['output'];
  totalTips: Scalars['Int']['output'];
};

export type OrdersSalesProductMixOutput = {
  __typename?: 'OrdersSalesProductMixOutput';
  grossSale: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  netSale: Scalars['Int']['output'];
  sold: Scalars['Int']['output'];
};

export type OrdersSalesProductMixOutput_V2 = {
  __typename?: 'OrdersSalesProductMixOutput_V2';
  grossSale: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  netSale: Scalars['Int']['output'];
  sold: Scalars['Int']['output'];
};

export type OrdersSalesTaxesOutput = {
  __typename?: 'OrdersSalesTaxesOutput';
  label: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type OrdersSalesTaxesOutput_V2 = {
  __typename?: 'OrdersSalesTaxesOutput_V2';
  label: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type OrdersSalesTipsOutput = {
  __typename?: 'OrdersSalesTipsOutput';
  amount: Scalars['Int']['output'];
  orderId: Scalars['ID']['output'];
  refund: Scalars['Int']['output'];
  tableName: Array<Maybe<Scalars['String']['output']>>;
  tableSection: Array<Maybe<Scalars['String']['output']>>;
  tip: Scalars['Int']['output'];
};

export type OrdersSalesTipsOutput_V2 = {
  __typename?: 'OrdersSalesTipsOutput_V2';
  amount: Scalars['Int']['output'];
  orderId: Scalars['ID']['output'];
  refund: Scalars['Int']['output'];
  tableName: Array<Maybe<Scalars['String']['output']>>;
  tableSection: Array<Maybe<Scalars['String']['output']>>;
  tip: Scalars['Int']['output'];
};

export enum PaymentMethod {
  Card = 'CARD',
  Cash = 'CASH',
  GiftCard = 'GIFT_CARD'
}

export enum PaymentProviders {
  Clover = 'CLOVER',
  Payrix = 'PAYRIX'
}

export type PaymentTransaction = {
  __typename?: 'PaymentTransaction';
  amount: Scalars['Int']['output'];
  cardId?: Maybe<Scalars['String']['output']>;
  consumerId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deliveryFee: Scalars['Int']['output'];
  employeeId?: Maybe<Scalars['ID']['output']>;
  externalMerchantId: Scalars['ID']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  merchantId: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  paymentMethod: PaymentMethod;
  paymentProvider: MerchantPaymentMethod;
  referenceId?: Maybe<Scalars['String']['output']>;
  tip: Scalars['Int']['output'];
  transactionId: Scalars['ID']['output'];
  type: PaymentTransactionType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PaymentTransactionType {
  Auth = 'AUTH',
  Capture = 'CAPTURE',
  Refund = 'REFUND',
  ReverseAuth = 'REVERSE_AUTH',
  Sale = 'SALE'
}

export type PaymentTransactionsOutput = {
  __typename?: 'PaymentTransactionsOutput';
  count: Scalars['Int']['output'];
  items?: Maybe<Array<Maybe<PaymentTransaction>>>;
};

export type PayrixCard = {
  __typename?: 'PayrixCard';
  cardId: Scalars['String']['output'];
  expMonth: Scalars['String']['output'];
  expYear: Scalars['String']['output'];
  first6: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  last4?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type PayrixCustomer = {
  __typename?: 'PayrixCustomer';
  cards?: Maybe<Array<Maybe<PayrixCard>>>;
  consumerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PayrixMerchant = {
  __typename?: 'PayrixMerchant';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  payrixMerchantId: Scalars['String']['output'];
  status: PayrixMerchantStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PayrixMerchantStatus {
  Boarded = 'BOARDED',
  Denied = 'DENIED',
  Manual = 'MANUAL',
  NotReady = 'NOT_READY',
  Ready = 'READY'
}

export type PayrixPayout = {
  __typename?: 'PayrixPayout';
  amount: Scalars['Float']['output'];
  created: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  description: Scalars['String']['output'];
  events?: Maybe<Array<Maybe<PayrixPayoutEvent>>>;
  id: Scalars['String']['output'];
  modified: Scalars['String']['output'];
  secondaryDescriptor?: Maybe<Scalars['String']['output']>;
  status: Scalars['Int']['output'];
};

export type PayrixPayoutEntriesOutput = {
  __typename?: 'PayrixPayoutEntriesOutput';
  count: Scalars['Int']['output'];
  items: Array<PayrixPayoutEntry>;
};

export type PayrixPayoutEntry = {
  __typename?: 'PayrixPayoutEntry';
  amount: Scalars['Float']['output'];
  amountUsed: Scalars['Float']['output'];
  created: Scalars['String']['output'];
  description: Scalars['String']['output'];
  disbursement: Scalars['String']['output'];
  event: Scalars['Int']['output'];
  eventId?: Maybe<Scalars['String']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  modified: Scalars['String']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
};

export type PayrixPayoutEntryReport = {
  __typename?: 'PayrixPayoutEntryReport';
  amount: Scalars['Float']['output'];
  amountUsed: Scalars['Float']['output'];
  cardNumber?: Maybe<Scalars['String']['output']>;
  cardholder?: Maybe<Scalars['String']['output']>;
  created: Scalars['String']['output'];
  description: Scalars['String']['output'];
  disbursement: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  event: Scalars['Int']['output'];
  eventId?: Maybe<Scalars['String']['output']>;
  fees?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  modified: Scalars['String']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type PayrixPayoutEvent = {
  __typename?: 'PayrixPayoutEvent';
  count: Scalars['Int']['output'];
  credit: Scalars['Float']['output'];
  debit: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  disbursed: Scalars['Float']['output'];
  event: Scalars['Int']['output'];
};

export type PayrixPayoutsOutput = {
  __typename?: 'PayrixPayoutsOutput';
  count: Scalars['Int']['output'];
  items: Array<PayrixPayout>;
};

export enum PayrixTransactionType {
  Auth = 'AUTH',
  Capture = 'CAPTURE',
  Refund = 'REFUND',
  ReverseAuth = 'REVERSE_AUTH',
  Sale = 'SALE'
}

export type Pos = {
  __typename?: 'Pos';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  posId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PosOutput = {
  __typename?: 'PosOutput';
  count: Scalars['Int']['output'];
  items: Array<Pos>;
};

export type PredictionOutput = {
  __typename?: 'PredictionOutput';
  description: Scalars['String']['output'];
  placeId: Scalars['String']['output'];
};

export type PrintTicketInput = {
  consumerId: Scalars['ID']['input'];
  createdAt: Scalars['DateTime']['input'];
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  items: Array<PrintTicketItemInput>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  tableName?: InputMaybe<Scalars['String']['input']>;
  tableOrderType: Scalars['String']['input'];
  tableSection?: InputMaybe<Scalars['String']['input']>;
  ticketNumber: Scalars['NonNegativeInt']['input'];
};

export type PrintTicketItemInput = {
  amount: Scalars['NonNegativeInt']['input'];
  chitName: Scalars['String']['input'];
  consumerName: Scalars['String']['input'];
  modifiers?: InputMaybe<Array<InputMaybe<PrintTicketItemModifierInput>>>;
  note?: InputMaybe<Scalars['String']['input']>;
  priceTieredName?: InputMaybe<Scalars['String']['input']>;
  showConsumerName: Scalars['Boolean']['input'];
  showSpecialInstructions: Scalars['Boolean']['input'];
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type PrintTicketItemModifierInput = {
  chitName: Scalars['String']['input'];
};

export type Printer = {
  __typename?: 'Printer';
  batchingTime?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ipAddress?: Maybe<Scalars['IP']['output']>;
  isOnline: Scalars['Boolean']['output'];
  kdses: Array<Maybe<Kds>>;
  macAddress: Scalars['MAC']['output'];
  menuItems: Array<Maybe<MenuItem>>;
  merchant?: Maybe<Merchant>;
  merchantId?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  ticketSize: PrinterTicketSize;
  updatedAt: Scalars['DateTime']['output'];
  vendor?: Maybe<PrinterVendor>;
};

export enum PrinterTicketSize {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export enum PrinterVendor {
  Epson = 'EPSON',
  Star = 'STAR'
}

export type PrintersOutput = {
  __typename?: 'PrintersOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<Printer>>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  admin?: Maybe<Admin>;
  adminMe?: Maybe<Admin>;
  admins?: Maybe<AdminsOutput>;
  checks_V2: ChecksOutput_V2;
  cloverCustomer?: Maybe<CloverCustomer>;
  cloverCustomerCards?: Maybe<Array<Maybe<CloverCustomerCard>>>;
  /** This can be merchantId or cloverMerchantId */
  cloverMerchant?: Maybe<CloverMerchant>;
  cloverMerchantPosToken?: Maybe<Scalars['String']['output']>;
  cloverMerchants?: Maybe<CloverMerchantsOutput>;
  consumer?: Maybe<Consumer>;
  consumerAddresses?: Maybe<Array<Maybe<ConsumerAddress>>>;
  discount?: Maybe<Discount>;
  discountPromoCodeValidation?: Maybe<Discount>;
  discounts?: Maybe<DiscountsOutput>;
  drawer?: Maybe<Drawer>;
  drawers: DrawerOutput;
  dynamicPrice?: Maybe<DynamicPrice>;
  dynamicPrices?: Maybe<DynamicPricesOutput>;
  groupOrder?: Maybe<GroupOrder>;
  groupOrder_V2?: Maybe<GroupOrder_V2>;
  /** Only LAMBDA needs to provide the merchantId */
  importCloverMerchantCategories: Array<ImportCloverMerchantCategoriesOutput>;
  /** Only LAMBDA needs to provide the merchantId */
  importCloverMerchantItems: Array<ImportCloverMerchantItemsOutput>;
  /** Only LAMBDA needs to provide the merchantId */
  importCloverMerchantModifierGroups: Array<ImportCloverMerchantModifierGroupsOutput>;
  /** Only LAMBDA needs to provide the merchantId */
  importCloverMerchantTaxes: Array<ImportCloverMerchantTaxesOutput>;
  kds?: Maybe<Kds>;
  kdsMessages?: Maybe<Array<KdsMessage>>;
  kdses: KdsesOutput;
  logs: Array<Log>;
  /** merchantId is required when user is not authenticated */
  menu?: Maybe<Menu>;
  /** merchantId is required when user is not authenticated */
  menuCategories: MenuCategoriesOutput;
  /** merchantId is required when user is not authenticated */
  menuCategory?: Maybe<MenuCategory>;
  /** merchantId is required when user is not authenticated */
  menuItem?: Maybe<MenuItem>;
  /** merchantId is required when user is not authenticated */
  menuItems: MenuItemsOutput;
  /** merchantId is required when user is not authenticated */
  menus: MenusOutput;
  /** id is required for non authorized users and admins */
  merchant?: Maybe<Merchant>;
  merchantConfiguration: MerchantConfiguration;
  merchants: MerchantsOutput;
  modifier?: Maybe<Modifier>;
  /** Only LAMBDA needs to provide the merchantId */
  modifiers?: Maybe<ModifiersOutput>;
  multimerchantGroup: MultimerchantGroup;
  multimerchantGroups: Array<MultimerchantGroup>;
  /** id is required for admins */
  multimerchantMerchants: Array<Merchant>;
  order?: Maybe<Order>;
  orderCheck?: Maybe<OrderCheck>;
  orderChecks: Array<Maybe<OrderCheck>>;
  orderChecks_V2?: Maybe<OrderChecks_V2>;
  orderThrottlingItemsCount: Array<OrderThrottlingItemsCountOutput>;
  /** merchantId is required when user is CONSUMER */
  orderThrottlingRules: Array<OrderThrottlingRule>;
  orderVoid?: Maybe<OrderVoid>;
  orderVoids?: Maybe<OrderVoidsOutput>;
  order_V2?: Maybe<Order_V2>;
  /** **merchantId** is required when user is consumer */
  orders: OrdersOutput;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesOverview: Array<OrdersSalesOverviewOutput>;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesOverview_V2: Array<OrdersSalesOverviewOutput_V2>;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesProductMix: Array<OrdersSalesProductMixOutput>;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesProductMix_V2: Array<OrdersSalesProductMixOutput_V2>;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesTaxes: Array<OrdersSalesTaxesOutput>;
  /** Required permissions: REPORTING_VIEW_SALES_REPORTS */
  ordersSalesTaxes_V2: Array<OrdersSalesTaxesOutput_V2>;
  /** Required permissions: REPORTING_VIEW_TIPS */
  ordersSalesTips: Array<OrdersSalesTipsOutput>;
  /** Required permissions: REPORTING_VIEW_TIPS */
  ordersSalesTips_V2: Array<OrdersSalesTipsOutput_V2>;
  orders_V2: OrdersOutput_V2;
  paymentTransaction?: Maybe<PaymentTransaction>;
  paymentTransactions?: Maybe<PaymentTransactionsOutput>;
  payrixCustomer?: Maybe<PayrixCustomer>;
  payrixMerchant?: Maybe<PayrixMerchant>;
  payrixPayout?: Maybe<PayrixPayout>;
  payrixPayoutEntries: PayrixPayoutEntriesOutput;
  payrixPayoutReport?: Maybe<Array<Maybe<PayrixPayoutEntryReport>>>;
  payrixPayouts: PayrixPayoutsOutput;
  pos?: Maybe<Pos>;
  poses: PosOutput;
  printer?: Maybe<Printer>;
  printerStatus: Scalars['Boolean']['output'];
  printers: PrintersOutput;
  printersStatus: Scalars['Boolean']['output'];
  revenueCenter?: Maybe<RevenueCenter>;
  revenueCenters: RevenueCenterOutput;
  searchGooglePlaces?: Maybe<GooglePlacesOutput>;
  squareCustomerCards?: Maybe<Array<Maybe<SquareCard>>>;
  squareMerchant?: Maybe<SquareMerchant>;
  squareMerchantLocations?: Maybe<Array<Maybe<SquareMerchantLocation>>>;
  squareMerchants?: Maybe<SquareMerchantsOutput>;
  /** merchantId is required when user is not authenticated */
  table?: Maybe<Table>;
  tableOrderType?: Maybe<TableOrderType>;
  tableOrderTypes?: Maybe<TableOrderTypesOutput>;
  tableSection?: Maybe<TableSection>;
  tableSections?: Maybe<TableSectionsOutput>;
  tables?: Maybe<TablesOutput>;
  tax?: Maybe<Tax>;
  /** Only LAMBDA needs to provide the merchantId */
  taxes?: Maybe<TaxesOutput>;
  /**
   * If **id** is not provided, the query will return the active time clock if exist.
   *
   * If **id** is provided, the query will return the time clock with the specified id
   */
  timeClock?: Maybe<TimeClock>;
  /**
   * If **userIds** is not provided, the query will return time clocks for the current user.
   *
   * If **userIds** is provided, the query will return time clocks for the specified users.
   *
   * If **empty array** is provided, the query will return time clocks for all users.
   */
  timeClocks?: Maybe<TimeClocksOutput>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  userByPin?: Maybe<User>;
  userMe?: Maybe<User>;
  userPermissions: Array<UserPermissions>;
  userPermissionsGroup?: Maybe<UserPermissionsGroup>;
  userPermissionsGroups: UserPermissionsGroupsOutput;
  userTipsReport?: Maybe<UserTipsReport>;
  userTipsReports?: Maybe<UserTipsReportsOutput>;
  users?: Maybe<UsersOutput>;
};


export type QueryAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChecks_V2Args = {
  consumerId?: InputMaybe<Scalars['String']['input']>;
  createdAtFrom?: InputMaybe<Scalars['String']['input']>;
  createdAtTo?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  updatedAtFrom?: InputMaybe<Scalars['String']['input']>;
  updatedAtTo?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCloverCustomerArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QueryCloverCustomerCardsArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QueryCloverMerchantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCloverMerchantPosTokenArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCloverMerchantsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDiscountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDiscountPromoCodeValidationArgs = {
  enabledForApp: AppType;
  merchantId: Scalars['String']['input'];
  promoCode: Scalars['String']['input'];
};


export type QueryDiscountsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDrawerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDrawersArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDynamicPriceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDynamicPricesArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForApps?: InputMaybe<Array<AppType>>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupOrderArgs = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type QueryGroupOrder_V2Args = {
  id: Scalars['ID']['input'];
  merchantId: Scalars['ID']['input'];
};


export type QueryImportCloverMerchantCategoriesArgs = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryImportCloverMerchantItemsArgs = {
  itemIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryImportCloverMerchantModifierGroupsArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  modifierGroupIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryImportCloverMerchantTaxesArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryKdsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKdsMessagesArgs = {
  kdsId: Scalars['ID']['input'];
};


export type QueryKdsesArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLogsArgs = {
  createdAtFrom: Scalars['DateTime']['input'];
  merchantId: Scalars['String']['input'];
};


export type QueryMenuArgs = {
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenuCategoriesArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMenuCategoryArgs = {
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenuItemArgs = {
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenuItemsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMenusArgs = {
  enabledForApps?: InputMaybe<Array<AppType>>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  tableId?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMerchantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMerchantsArgs = {
  filter?: InputMaybe<MerchantsFilter>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['ID']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModifierArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModifiersArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMultimerchantGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMultimerchantGroupsArgs = {
  type?: InputMaybe<MultimerchantGroupType>;
};


export type QueryMultimerchantMerchantsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderCheckArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderChecksArgs = {
  consumerId?: InputMaybe<Scalars['String']['input']>;
  createdAtFrom?: InputMaybe<Scalars['String']['input']>;
  createdAtTo?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  updatedAtFrom?: InputMaybe<Scalars['String']['input']>;
  updatedAtTo?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderChecks_V2Args = {
  id?: InputMaybe<Scalars['ID']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderThrottlingItemsCountArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QueryOrderThrottlingRulesArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrderVoidArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderVoidsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrder_V2Args = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  hasFailedRefunds?: InputMaybe<Scalars['Boolean']['input']>;
  isOpenTab?: InputMaybe<Scalars['Boolean']['input']>;
  isReceiptSent?: InputMaybe<Scalars['Boolean']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  merchantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Array<InputMaybe<OrderPaymentMethods>>>;
  paymentStatus?: InputMaybe<OrderPaymentStatuses>;
  scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Array<OrderType>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAtTo?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryOrdersSalesOverviewArgs = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
};


export type QueryOrdersSalesOverview_V2Args = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
};


export type QueryOrdersSalesProductMixArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
  revenueCenter?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersSalesProductMix_V2Args = {
  category?: InputMaybe<Scalars['String']['input']>;
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
  revenueCenter?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrdersSalesTaxesArgs = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
};


export type QueryOrdersSalesTaxes_V2Args = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
};


export type QueryOrdersSalesTipsArgs = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
  paymentStatuses?: InputMaybe<Array<InputMaybe<OrderPaymentStatuses>>>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tableSections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrdersSalesTips_V2Args = {
  dateFrom: Scalars['DateTime']['input'];
  dateTo: Scalars['DateTime']['input'];
  paymentStatuses?: InputMaybe<Array<InputMaybe<OrderCheckPaymentStatuses_V2>>>;
  tableNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tableSections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrders_V2Args = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  hasFailedRefunds?: InputMaybe<Scalars['Boolean']['input']>;
  isOpenTab?: InputMaybe<Scalars['Boolean']['input']>;
  isReceiptSent?: InputMaybe<Scalars['Boolean']['input']>;
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  merchantIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  paymentMethod?: InputMaybe<Array<InputMaybe<OrderPaymentMethods_V2>>>;
  paymentStatus?: InputMaybe<OrderCheckPaymentStatuses_V2>;
  scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Array<OrderTypes_V2>>;
  updatedAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAtTo?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryPaymentTransactionArgs = {
  id: Scalars['String']['input'];
};


export type QueryPaymentTransactionsArgs = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  employeeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionIds?: InputMaybe<Array<Scalars['String']['input']>>;
  transactionType?: InputMaybe<PaymentTransactionType>;
};


export type QueryPayrixMerchantArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QueryPayrixPayoutArgs = {
  disbursementId: Scalars['String']['input'];
};


export type QueryPayrixPayoutEntriesArgs = {
  disbursementId: Scalars['String']['input'];
  event: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryPayrixPayoutReportArgs = {
  disbursementId: Scalars['String']['input'];
  event: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryPayrixPayoutsArgs = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};


export type QueryPosArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPosesArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPrinterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPrinterStatusArgs = {
  printerMacAddress: Scalars['MAC']['input'];
};


export type QueryPrintersArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRevenueCenterArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchGooglePlacesArgs = {
  place: Scalars['String']['input'];
  sessiontoken: Scalars['String']['input'];
};


export type QuerySquareMerchantArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QuerySquareMerchantLocationsArgs = {
  merchantId: Scalars['ID']['input'];
};


export type QuerySquareMerchantsArgs = {
  accessTokenExpiresAt?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTableArgs = {
  id: Scalars['ID']['input'];
  merchantId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTableOrderTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableOrderTypesArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTableSectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTableSectionsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTablesArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaxArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxesArgs = {
  merchantId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeClockArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTimeClocksArgs = {
  createdAtFrom?: InputMaybe<Scalars['DateTime']['input']>;
  createdAtTo?: InputMaybe<Scalars['DateTime']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserByPinArgs = {
  pin: Scalars['String']['input'];
};


export type QueryUserPermissionsGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserPermissionsGroupsArgs = {
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserTipsReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserTipsReportsArgs = {
  dateFrom?: InputMaybe<Scalars['DateTime']['input']>;
  dateTo?: InputMaybe<Scalars['DateTime']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput';
  refreshToken: Scalars['String']['output'];
  sessionId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type RefundItemInput = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type RefundItemInput_V2 = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type RefundOrderItemsInput = {
  items: Array<RefundItemInput>;
};

export type RefundOrderItemsInput_V2 = {
  items: Array<RefundItemInput_V2>;
};

export type RefundOrderItemsOutput_V2 = {
  __typename?: 'RefundOrderItemsOutput_V2';
  order: Order_V2;
  orderChecks: OrderChecks_V2;
};

export type RemoveModifiersOutput = {
  __typename?: 'RemoveModifiersOutput';
  count: Scalars['Int']['output'];
};

export type RemoveTaxesOutput = {
  __typename?: 'RemoveTaxesOutput';
  count: Scalars['Int']['output'];
};

export type RetryRefundOrderItemsOutput_V2 = {
  __typename?: 'RetryRefundOrderItemsOutput_V2';
  order: Order_V2;
  orderChecks: OrderChecks_V2;
};

export type RevenueCenter = {
  __typename?: 'RevenueCenter';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RevenueCenterOutput = {
  __typename?: 'RevenueCenterOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<RevenueCenter>>;
};

export type SquareCard = {
  __typename?: 'SquareCard';
  cardId: Scalars['String']['output'];
  expMonth: Scalars['String']['output'];
  expYear: Scalars['String']['output'];
  first6: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  last4: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type SquareCardInput = {
  cardId: Scalars['NonEmptyString']['input'];
  expMonth: Scalars['NonNegativeInt']['input'];
  expYear: Scalars['NonNegativeInt']['input'];
  first6: Scalars['String']['input'];
  last4: Scalars['NonEmptyString']['input'];
  token: Scalars['NonEmptyString']['input'];
  type: Scalars['NonEmptyString']['input'];
};

export type SquareCustomer = {
  __typename?: 'SquareCustomer';
  cards?: Maybe<Array<Maybe<SquareCard>>>;
  consumerId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SquareMerchant = {
  __typename?: 'SquareMerchant';
  accessTokenExpiresAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  merchantLocationId?: Maybe<Scalars['String']['output']>;
  refreshTokenExpiresAt: Scalars['DateTime']['output'];
  squareMerchantId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SquareMerchantLocation = {
  __typename?: 'SquareMerchantLocation';
  address?: Maybe<SquareMerchantLocationAddress>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type SquareMerchantLocationAddress = {
  __typename?: 'SquareMerchantLocationAddress';
  address_line_1?: Maybe<Scalars['String']['output']>;
  administrative_district_level_1?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  locality?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
};

export type SquareMerchantsOutput = {
  __typename?: 'SquareMerchantsOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<SquareMerchant>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _empty?: Maybe<Scalars['String']['output']>;
  entityChanged?: Maybe<EntityChange>;
  groupOrderUpdated?: Maybe<GroupOrder>;
  orderCreated?: Maybe<Order>;
  orderUpdated?: Maybe<Order>;
};


export type SubscriptionOrderCreatedArgs = {
  kdsId: Scalars['ID']['input'];
};


export type SubscriptionOrderUpdatedArgs = {
  kdsId?: InputMaybe<Scalars['ID']['input']>;
};

export type Table = {
  __typename?: 'Table';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  kdses: Array<Maybe<Kds>>;
  menus: Array<Maybe<Menu>>;
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  multimerchantGroupId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  orderType?: Maybe<TableOrderType>;
  orderTypeId?: Maybe<Scalars['ID']['output']>;
  printers: Array<Maybe<Printer>>;
  section?: Maybe<TableSection>;
  sectionId?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TableOrderType = {
  __typename?: 'TableOrderType';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables: Array<Maybe<Table>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TableOrderTypesOutput = {
  __typename?: 'TableOrderTypesOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<TableOrderType>>;
};

export type TableSection = {
  __typename?: 'TableSection';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tables: Array<Maybe<Table>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type TableSectionsOutput = {
  __typename?: 'TableSectionsOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<TableSection>>;
};

export type TablesOutput = {
  __typename?: 'TablesOutput';
  count: Scalars['Int']['output'];
  items: Array<Maybe<Table>>;
};

export type Tax = {
  __typename?: 'Tax';
  createdAt: Scalars['DateTime']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  externalName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isInclusive: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  type: TaxType;
  updatedAt: Scalars['DateTime']['output'];
};

export enum TaxType {
  Fixed = 'FIXED',
  Flat = 'FLAT',
  Percentage = 'PERCENTAGE'
}

export type TaxesOutput = {
  __typename?: 'TaxesOutput';
  count: Scalars['Int']['output'];
  items: Array<Tax>;
};

export type TimeClock = {
  __typename?: 'TimeClock';
  breaks: Array<TimeClockBreak>;
  clockedIn: Scalars['DateTime']['output'];
  clockedOut?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  hourlyWage: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type TimeClockBreak = {
  __typename?: 'TimeClockBreak';
  endedAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TimeClockUpdateInput = {
  clockedIn?: InputMaybe<Scalars['DateTime']['input']>;
  clockedOut?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TimeClocksOutput = {
  __typename?: 'TimeClocksOutput';
  count: Scalars['Int']['output'];
  items: Array<TimeClock>;
};

export enum User_Role {
  Admin = 'ADMIN',
  Consumer = 'CONSUMER',
  SuperAdmin = 'SUPER_ADMIN',
  UserAdmin = 'USER_ADMIN',
  UserEmployee = 'USER_EMPLOYEE',
  UserOwner = 'USER_OWNER',
  UserReseller = 'USER_RESELLER'
}

export enum User_Type {
  Admin = 'ADMIN',
  Anonymous = 'ANONYMOUS',
  Consumer = 'CONSUMER',
  Lambda = 'LAMBDA',
  User = 'USER'
}

export type UberDeliveryQuote = {
  __typename?: 'UberDeliveryQuote';
  created: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  currencyType: Scalars['String']['output'];
  dropoffDeadline: Scalars['String']['output'];
  dropoffEta: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  expires: Scalars['String']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  kind: Scalars['String']['output'];
  pickupDuration: Scalars['Int']['output'];
};

export type UpdateAdminInput = {
  firstName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  lastName?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateAppAvailabilityInput = {
  enabledForApps: Array<AppType>;
  id: Scalars['ID']['input'];
};

export type UpdateCloverCustomerCardDataInput = {
  expMonth: Scalars['String']['input'];
  expYear: Scalars['String']['input'];
  first6: Scalars['String']['input'];
  last4: Scalars['String']['input'];
  token: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type UpdateCloverCustomerCardInput = {
  card: UpdateCloverCustomerCardDataInput;
  email: Scalars['EmailAddress']['input'];
};

export type UpdateConsumerAddressInput = {
  apartment?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  locationType?: InputMaybe<LocationType>;
  placeId?: InputMaybe<Scalars['NonEmptyString']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDiscountInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForApps?: InputMaybe<Array<AppType>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isSingleUse?: InputMaybe<Scalars['Boolean']['input']>;
  minimumAmount?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<DiscountType>;
};

export type UpdateDrawerInput = {
  name: Scalars['String']['input'];
  posId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDynamicPriceInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForApps?: InputMaybe<Array<AppType>>;
  menuItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<DynamicPriceType>;
  workingHours?: InputMaybe<MenuWorkingHoursInput>;
};

export type UpdateGroupOrderInput = {
  isReady?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<OrderItemInput>>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<OrderType>;
};

export type UpdateGroupOrderInput_V2 = {
  isReady?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<OrderItemInput_V2>>;
  scheduleAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<OrderTypes_V2>;
};

export type UpdateKdsInput = {
  batchingTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  confirmationMessage?: InputMaybe<Scalars['String']['input']>;
  confirmationMessageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  deletedPrinterIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  fontSize?: InputMaybe<KdsFontSizes>;
  inUse?: InputMaybe<Scalars['Boolean']['input']>;
  main?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  printerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  rejectMessageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  tipReporting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateKdsMessageInput = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  messageEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateMenuCategoriesOrderInput = {
  id: Scalars['ID']['input'];
  order: Scalars['NonNegativeInt']['input'];
};

export type UpdateMenuCategoryInput = {
  coursing?: InputMaybe<Scalars['Boolean']['input']>;
  deletedItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedMenuIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  items?: InputMaybe<Array<MenuCategoryMenuItemInput>>;
  menuIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMenuInput = {
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  enabledForApps?: InputMaybe<Array<AppType>>;
  name?: InputMaybe<Scalars['String']['input']>;
  workingHours?: InputMaybe<MenuWorkingHoursInput>;
};

export type UpdateMenuItemInput = {
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  chitName?: InputMaybe<Scalars['String']['input']>;
  deleteImageUrl?: InputMaybe<Scalars['String']['input']>;
  deletedCategoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedKdsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedModifierIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedPrinterIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  deletedTaxIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  imageData?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  kdsIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  modifierIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  prepTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  price?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  priceTiered?: InputMaybe<Array<MenuItemPriceTieredInput>>;
  printerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  revenueCenterId?: InputMaybe<Scalars['ID']['input']>;
  stockCount?: InputMaybe<Scalars['Int']['input']>;
  taxIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateMenuItemsInput = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedCategoryIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedKdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedModifierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedPrinterIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedTaxIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  itemIds: Array<Scalars['ID']['input']>;
  kdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  modifierIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  printerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  revenueCenterId?: InputMaybe<Scalars['ID']['input']>;
  taxIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdateMenuOrderInput = {
  id: Scalars['ID']['input'];
  order: Scalars['NonNegativeInt']['input'];
};

export type UpdateMerchantBranding = {
  buttonBgColor?: InputMaybe<Scalars['String']['input']>;
  buttonTextColor?: InputMaybe<Scalars['String']['input']>;
  coverBrightness?: InputMaybe<Scalars['Int']['input']>;
  coverData?: InputMaybe<Scalars['String']['input']>;
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  deleteCoverImageUrl?: InputMaybe<Scalars['String']['input']>;
  deleteLogoImageUrl?: InputMaybe<Scalars['String']['input']>;
  logoData?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMerchantConfigurationInput = {
  cashDiscountAmount?: InputMaybe<Scalars['Float']['input']>;
  cashDiscountEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  cashDiscountRounding?: InputMaybe<MerchantCashDiscountRoundType>;
  defaultPaymentMethod?: InputMaybe<MerchantConfigPaymentMethod>;
  deliveryEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  deliveryProvider?: InputMaybe<DeliveryProvider>;
  isOrderingAgeRestrictedConsumer?: InputMaybe<Scalars['Boolean']['input']>;
  isOrderingAgeRestrictedOnline?: InputMaybe<Scalars['Boolean']['input']>;
  isQuickAccessEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectingAllMenusEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isStockCountEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  maximumScheduleTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  minAuthAmount?: InputMaybe<Scalars['Int']['input']>;
  noteEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  onlineOrderingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  openTab?: InputMaybe<Scalars['Boolean']['input']>;
  payNow?: InputMaybe<Scalars['Boolean']['input']>;
  preparationTime?: InputMaybe<Scalars['Int']['input']>;
  qrCodeOrderingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  schedulingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  specialInstructionsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  specialInstructionsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  timeToShowTicket?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  tip1?: InputMaybe<Scalars['Int']['input']>;
  tip2?: InputMaybe<Scalars['Int']['input']>;
  tip3?: InputMaybe<Scalars['Int']['input']>;
  tip4?: InputMaybe<Scalars['Int']['input']>;
  tipsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateMerchantInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  branding?: InputMaybe<UpdateMerchantBranding>;
  businessDescription?: InputMaybe<Scalars['String']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  /** Only ADMIN can set this field */
  fee?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Only ADMIN can set this field */
  feeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isInitiallySynced?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only ADMIN can set this field */
  monthlySubscription?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  /** Only ADMIN can set this field */
  monthlySubscriptionEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Only ADMIN can set this field */
  paymentMethodToShow?: InputMaybe<MerchantPaymentMethodToShow>;
  phone?: InputMaybe<Scalars['String']['input']>;
  placeId?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<UpdateMerchantSocial>;
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
  /** Only ADMIN can set this field */
  usePosPrinting?: InputMaybe<Scalars['Boolean']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMerchantSocial = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  tiktok?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMerchantsOrderInMultimerchantGroupInput = {
  merchantId: Scalars['ID']['input'];
  merchantOrder: Scalars['Int']['input'];
};

export type UpdateModifierInput = {
  deletedItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  itemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  maxChoice?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  minChoice?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  options?: InputMaybe<Array<UpdateModifierOptionInput>>;
};

export type UpdateModifierOptionInput = {
  chitName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  order?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  price?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type UpdateMultimerchantGroupInput = {
  merchants: Array<UpdateMerchantsOrderInMultimerchantGroupInput>;
  name: Scalars['String']['input'];
};

export type UpdateOrderAdditionalInfoInput = {
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderAdditionalInfoInput_V2 = {
  specialInstructions?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderCheckInput = {
  checks: Array<CreateOrderCheckItemInput>;
};

export type UpdateOrderCheckInput_V2 = {
  consumerId?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  items: Array<UpdateOrderCheckItemInput_V2>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderCheckItemInput_V2 = {
  amount: Scalars['Float']['input'];
  discounts?: InputMaybe<Array<OrderCheckDiscountInput_V2>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  orderItemId: Scalars['ID']['input'];
};

export type UpdateOrderChecksInput_V2 = {
  checks: Array<UpdateOrderCheckInput_V2>;
};

export type UpdateOrderDeliveryStatusInput = {
  deliveryCancelationReason?: InputMaybe<OrderDeliveryCancelationReason>;
  deliveryStatus: OrderDeliveryStatus;
  dropoffTime?: InputMaybe<Scalars['String']['input']>;
  pickupTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderDeliveryStatusInput_V2 = {
  deliveryCancelationReason?: InputMaybe<OrderDeliveryCancelationReasons_V2>;
  deliveryStatus: OrderDeliveryStatuses_V2;
  dropoffTime?: InputMaybe<Scalars['DateTime']['input']>;
  pickupTime?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateOrderInput = {
  additionalInfo?: InputMaybe<UpdateOrderAdditionalInfoInput>;
  items: Array<OrderItemInput>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type UpdateOrderInput_V2 = {
  additionalInfo?: InputMaybe<UpdateOrderAdditionalInfoInput_V2>;
  items: Array<OrderItemInput_V2>;
  tip?: InputMaybe<Scalars['NonNegativeInt']['input']>;
};

export type UpdateOrderPosInput = {
  check: UpdateOrderCheckInput;
  order: UpdateOrderInput;
};

export type UpdateOrderPosInput_V2 = {
  checks: Array<CreateOrderCheckInput_V2>;
  order: UpdateOrderInput_V2;
};

export type UpdateOrderPosOutput = {
  __typename?: 'UpdateOrderPosOutput';
  check: OrderCheck;
  order: Order;
};

export type UpdateOrderPosOutput_V2 = {
  __typename?: 'UpdateOrderPosOutput_V2';
  checks: OrderChecks_V2;
  order: Order;
};

export type UpdateOrderThrottlingRuleInput = {
  levelOneAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelOneEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelOneItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelOneMessage?: InputMaybe<Scalars['String']['input']>;
  levelThreeAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelThreeEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelThreeItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelThreeMessage?: InputMaybe<Scalars['String']['input']>;
  levelTwoAdditionalWaitingTime?: InputMaybe<Scalars['Int']['input']>;
  levelTwoEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  levelTwoItemsReceived?: InputMaybe<Scalars['Int']['input']>;
  levelTwoMessage?: InputMaybe<Scalars['String']['input']>;
  menuIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateOrdersInput = {
  acceptedKdsId: Scalars['ID']['input'];
  itemIds: Array<Scalars['ID']['input']>;
  orderIds: Array<Scalars['ID']['input']>;
  status: OrderItemStatuses;
};

export type UpdateOrdersInput_V2 = {
  acceptedKdsId: Scalars['ID']['input'];
  itemIds: Array<Scalars['ID']['input']>;
  orderIds: Array<Scalars['ID']['input']>;
  status: OrderItemStatuses_V2;
};

export type UpdatePayrixMerchantInput = {
  status: PayrixMerchantStatus;
};

export type UpdatePosInput = {
  name: Scalars['String']['input'];
};

export type UpdatePrinterInput = {
  batchingTime?: InputMaybe<Scalars['NonNegativeInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  series?: InputMaybe<Scalars['String']['input']>;
  ticketSize?: InputMaybe<PrinterTicketSize>;
};

export type UpdateRevenueCenterInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSquareMerchantInput = {
  merchantLocationId: Scalars['ID']['input'];
};

export type UpdateTableInput = {
  deletedKdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedMenuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedPrinterIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  kdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  menuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  orderTypeId?: InputMaybe<Scalars['ID']['input']>;
  printerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectionId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateTableOrderTypeInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateTableSectionInput = {
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateTablesInput = {
  deletedKdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedMenuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  deletedPrinterIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  kdsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  menuIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderTypeId?: InputMaybe<Scalars['ID']['input']>;
  printerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectionId?: InputMaybe<Scalars['ID']['input']>;
  tableIds: Array<Scalars['ID']['input']>;
};

export type UpdateTaxInput = {
  isInclusive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['NonEmptyString']['input']>;
  rate?: InputMaybe<Scalars['NonNegativeFloat']['input']>;
  type?: InputMaybe<TaxType>;
};

export type UpdateUserEmployeeInput = {
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  permissionsGroups?: InputMaybe<Array<UserPermissionsGroupsInput>>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  fullName?: InputMaybe<Scalars['NonEmptyString']['input']>;
  phone?: InputMaybe<Scalars['NonEmptyString']['input']>;
};

export type UpdateUserPermissionsGroupInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<UserPermissions>>;
};

export type User = {
  __typename?: 'User';
  activeMerchantId?: Maybe<Scalars['ID']['output']>;
  activePermissionsGroup?: Maybe<UserPermissionsGroup>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  merchants?: Maybe<Array<Maybe<Merchant>>>;
  permissionsGroups?: Maybe<Array<UserPermissionsGroup>>;
  phone?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  role: UserRoles;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserPermissions {
  CashManagementAccessCashDrawer = 'CASH_MANAGEMENT_ACCESS_CASH_DRAWER',
  CashManagementPerformCashInCashOut = 'CASH_MANAGEMENT_PERFORM_CASH_IN_CASH_OUT',
  DiscountsApplyDiscountsToOrders = 'DISCOUNTS_APPLY_DISCOUNTS_TO_ORDERS',
  DiscountsApplyOpenDiscounts = 'DISCOUNTS_APPLY_OPEN_DISCOUNTS',
  DiscountsCreateEditDiscounts = 'DISCOUNTS_CREATE_EDIT_DISCOUNTS',
  DiscountsCreateEditDynamicPricing = 'DISCOUNTS_CREATE_EDIT_DYNAMIC_PRICING',
  EmployeesCreateEditEmployees = 'EMPLOYEES_CREATE_EDIT_EMPLOYEES',
  EmployeesCreateEditRolesPermissions = 'EMPLOYEES_CREATE_EDIT_ROLES_PERMISSIONS',
  InventoryAdjustStockCounts = 'INVENTORY_ADJUST_STOCK_COUNTS',
  InventoryCreateEditCategories = 'INVENTORY_CREATE_EDIT_CATEGORIES',
  InventoryCreateEditItemsModifiers = 'INVENTORY_CREATE_EDIT_ITEMS_MODIFIERS',
  InventoryCreateEditMenus = 'INVENTORY_CREATE_EDIT_MENUS',
  OnlineOrderingAdjustScheduledOrders = 'ONLINE_ORDERING_ADJUST_SCHEDULED_ORDERS',
  OnlineOrderingChangePrepTimes = 'ONLINE_ORDERING_CHANGE_PREP_TIMES',
  OnlineOrderingEnableDisable = 'ONLINE_ORDERING_ENABLE_DISABLE',
  OnlineOrderingEnableDisableDelivery = 'ONLINE_ORDERING_ENABLE_DISABLE_DELIVERY',
  PaymentsIssueVoidsRefunds = 'PAYMENTS_ISSUE_VOIDS_REFUNDS',
  PaymentsManualCardEntry = 'PAYMENTS_MANUAL_CARD_ENTRY',
  ReportingAccess = 'REPORTING_ACCESS',
  ReportingViewDepositsBatches = 'REPORTING_VIEW_DEPOSITS_BATCHES',
  ReportingViewSalesReports = 'REPORTING_VIEW_SALES_REPORTS',
  ReportingViewTips = 'REPORTING_VIEW_TIPS',
  SettingsCreateEditOrderTypes = 'SETTINGS_CREATE_EDIT_ORDER_TYPES',
  SettingsCreateEditVoids = 'SETTINGS_CREATE_EDIT_VOIDS',
  SettingsEditPaymentOrderReceipts = 'SETTINGS_EDIT_PAYMENT_ORDER_RECEIPTS',
  SettingsHardware = 'SETTINGS_HARDWARE',
  SettingsOrderThrottling = 'SETTINGS_ORDER_THROTTLING',
  SettingsSalesReporting = 'SETTINGS_SALES_REPORTING',
  SettingsVoidItems = 'SETTINGS_VOID_ITEMS',
  TableServiceAdjustTableLayouts = 'TABLE_SERVICE_ADJUST_TABLE_LAYOUTS',
  TableServiceEnableServerBanking = 'TABLE_SERVICE_ENABLE_SERVER_BANKING',
  TableServiceReopenClosedChecks = 'TABLE_SERVICE_REOPEN_CLOSED_CHECKS',
  TableServiceTransferServers = 'TABLE_SERVICE_TRANSFER_SERVERS',
  TableServiceViewAllTabs = 'TABLE_SERVICE_VIEW_ALL_TABS',
  TimeClockEditTimeSheets = 'TIME_CLOCK_EDIT_TIME_SHEETS',
  TimeClockViewAllShiftReports = 'TIME_CLOCK_VIEW_ALL_SHIFT_REPORTS',
  TimeClockViewPayrollSummary = 'TIME_CLOCK_VIEW_PAYROLL_SUMMARY',
  TimeClockViewShiftReport = 'TIME_CLOCK_VIEW_SHIFT_REPORT',
  TimeClockViewTimeSheets = 'TIME_CLOCK_VIEW_TIME_SHEETS'
}

export type UserPermissionsGroup = {
  __typename?: 'UserPermissionsGroup';
  createdAt: Scalars['DateTime']['output'];
  hourlyWage: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<UserPermissions>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserPermissionsGroupsInput = {
  hourlyWage: Scalars['NonNegativeInt']['input'];
  id: Scalars['ID']['input'];
};

export type UserPermissionsGroupsOutput = {
  __typename?: 'UserPermissionsGroupsOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items: Array<UserPermissionsGroup>;
};

export type UserPinOutOutput = {
  __typename?: 'UserPinOutOutput';
  refreshToken: Scalars['String']['output'];
  sessionId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export enum UserRoles {
  Admin = 'ADMIN',
  Employee = 'EMPLOYEE',
  Owner = 'OWNER',
  Reseller = 'RESELLER'
}

export type UserTipsReport = {
  __typename?: 'UserTipsReport';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  merchant?: Maybe<Merchant>;
  merchantId: Scalars['ID']['output'];
  shiftEnd?: Maybe<Scalars['DateTime']['output']>;
  shiftStart?: Maybe<Scalars['DateTime']['output']>;
  tips?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type UserTipsReportsOutput = {
  __typename?: 'UserTipsReportsOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<UserTipsReport>>>;
};

export type UserTokenOutput = {
  __typename?: 'UserTokenOutput';
  refreshToken: Scalars['String']['output'];
  sessionId: Scalars['ID']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type UsersOnMerchants = {
  __typename?: 'UsersOnMerchants';
  createdAt: Scalars['DateTime']['output'];
  hourlyWage: Scalars['Int']['output'];
  merchantId: Scalars['ID']['output'];
  pin: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ID']['output'];
};

export type UsersOutput = {
  __typename?: 'UsersOutput';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<User>>>;
};

export type VoidOrderItemsInput = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  items: Array<VoidOrdersItemsItemInput>;
  voidReason: Scalars['String']['input'];
};

export type VoidOrderItemsInput_V2 = {
  items: Array<VoidOrdersItemsItemInput_V2>;
  voidReason: Scalars['String']['input'];
};

export type VoidOrderItemsOutput_V2 = {
  __typename?: 'VoidOrderItemsOutput_V2';
  order: Order_V2;
  orderChecks: OrderChecks_V2;
};

export type VoidOrdersItemsInput = {
  items: Array<VoidOrdersItemsItemInput>;
  orderIds: Array<Scalars['ID']['input']>;
};

export type VoidOrdersItemsInput_V2 = {
  items: Array<VoidOrdersItemsItemInput_V2>;
  orderIds: Array<Scalars['ID']['input']>;
};

export type VoidOrdersItemsItemInput = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type VoidOrdersItemsItemInput_V2 = {
  amount: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

export type VoidOrdersItemsOutput_V2 = {
  __typename?: 'VoidOrdersItemsOutput_V2';
  order: Order_V2;
  orderChecks: OrderChecks_V2;
};
