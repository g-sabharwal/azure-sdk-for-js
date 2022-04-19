/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The information required to check the availability of the name for the tenant. */
export interface CheckNameAvailabilityRequestBody {
  /** The domain name to check for availability. */
  name: string;
  /** Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list. */
  countryCode: string;
}

/** Response of the CheckNameAvailability operation. */
export interface NameAvailabilityResponse {
  /** Description of the reason if name is not available. */
  message?: string;
  /** True if the name is available and can be used to create a new tenant. Otherwise false. */
  nameAvailable?: boolean;
  /** Describes the reason for the 'nameAvailable' value. */
  reason?: NameAvailabilityReasonType;
}

/** An error response for a resource management request. */
export interface CloudError {
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
  error?: ErrorResponse;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The collection of Azure AD B2C tenant resources */
export interface B2CTenantResourceList {
  /**
   * List of Azure AD B2C tenant resources
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: B2CTenantResource[];
}

export interface B2CTenantResource {
  /**
   * The type of the B2C tenant resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: TypeValue;
  /** SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling). */
  sku: B2CResourceSKU;
  /**
   * An identifier that represents the Azure AD B2C tenant resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the Azure AD B2C tenant resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information. */
  location: string;
  /** Resource Tags */
  tags?: { [propertyName: string]: string };
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The billing configuration for the tenant. */
  billingConfig?: B2CTenantResourcePropertiesBillingConfig;
  /** An identifier of the Azure AD B2C tenant. */
  tenantId?: string;
}

/** SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling). */
export interface B2CResourceSKU {
  /** The name of the SKU for the tenant. */
  name?: B2CResourceSKUName;
  /** The tier of the tenant. */
  tier?: B2CResourceSKUTier;
}

/** The billing configuration for the tenant. */
export interface B2CTenantResourcePropertiesBillingConfig {
  /** The type of billing. Will be MAU for all new customers. If 'Auths', it can be updated to 'MAU'. Cannot be changed if value is 'MAU'. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cbilling). */
  billingType?: BillingType;
  /**
   * The data from which the billing type took effect
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly effectiveStartDateUtc?: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** The information needed to create the Azure AD B2C tenant and corresponding Azure resource, which is used for billing purposes. */
export interface CreateTenantRequestBody {
  /** The location in which the resource is hosted and data resides. Can be one of 'United States', 'Europe', 'Asia Pacific', or 'Australia'. Refer to [this documentation](https://aka.ms/B2CDataResidency) for more information. */
  location: string;
  /** SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling). */
  sku: B2CResourceSKU;
  /** Resource Tags */
  tags?: { [propertyName: string]: string };
  /** The display name of the Azure AD B2C tenant. */
  displayName?: string;
  /** Country code of Azure tenant (e.g. 'US'). Refer to [aka.ms/B2CDataResidency](https://aka.ms/B2CDataResidency) to see valid country codes and corresponding data residency locations. If you do not see a country code in an valid data residency location, choose one from the list. */
  countryCode?: string;
}

/** The request body to update the Azure AD B2C tenant resource. */
export interface B2CTenantUpdateRequest {
  /** SKU properties of the Azure AD B2C tenant. Learn more about Azure AD B2C billing at [aka.ms/b2cBilling](https://aka.ms/b2cBilling). */
  sku?: B2CResourceSKU;
  /** Resource Tags */
  tags?: { [propertyName: string]: string };
  /** The billing configuration for the tenant. */
  billingConfig?: B2CTenantResourcePropertiesBillingConfig;
  /** An identifier of the Azure AD B2C tenant. */
  tenantId?: string;
}

/** Available operations of the service */
export interface AvailableOperations {
  /** Collection of available operation details */
  value?: OperationDetail[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Operation detail payload */
export interface OperationDetail {
  /** Name of the operation */
  name?: string;
  /** Indicates whether the operation is a data action */
  isDataAction?: boolean;
  /** Display of the operation */
  display?: OperationDisplay;
  /** Origin of the operation */
  origin?: string;
}

/** Operation display payload */
export interface OperationDisplay {
  /** Resource provider of the operation */
  provider?: string;
  /** Resource of the operation */
  resource?: string;
  /** Localized friendly name for the operation */
  operation?: string;
  /** Localized friendly description for the operation */
  description?: string;
}

/** Guest Usages Resource */
export interface GuestUsagesResource {
  /**
   * An identifier that represents the Guest Usages resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the Guest Usages resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the Guest Usages resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Location of the Guest Usages resource. */
  location?: string;
  /** Key-value pairs of additional resource provisioning properties. */
  tags?: { [propertyName: string]: string };
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** An identifier for the tenant for which the resource is being created */
  tenantId?: string;
}

/** Guest Usages Resource for Patch */
export interface GuestUsagesResourcePatch {
  /** Key-value pairs of additional resource provisioning properties. */
  tags?: { [propertyName: string]: string };
}

/** The collection of guest usages resources */
export interface GuestUsagesResourceList {
  /**
   * List of guest usages resources
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: GuestUsagesResource[];
}

/** Defines headers for B2CTenants_create operation. */
export interface B2CTenantsCreateHeaders {
  /** Location URI to poll for result */
  location?: string;
  /** Contains the number of seconds to wait before polling the location. */
  retryAfter?: string;
}

/** Defines headers for B2CTenants_delete operation. */
export interface B2CTenantsDeleteHeaders {
  /** Contains the URL/location which can return the deletion status. */
  location?: string;
  /** Contains the number of seconds to wait before checking the deletion status. */
  retryAfter?: string;
}

/** Known values of {@link NameAvailabilityReasonType} that the service accepts. */
export enum KnownNameAvailabilityReasonType {
  /** The name is already in use and is therefore unavailable. */
  AlreadyExists = "AlreadyExists",
  /** The name provided does not match the resource provider’s naming requirements (incorrect length, unsupported characters, etc.). */
  Invalid = "Invalid"
}

/**
 * Defines values for NameAvailabilityReasonType. \
 * {@link KnownNameAvailabilityReasonType} can be used interchangeably with NameAvailabilityReasonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AlreadyExists**: The name is already in use and is therefore unavailable. \
 * **Invalid**: The name provided does not match the resource provider’s naming requirements (incorrect length, unsupported characters, etc.).
 */
export type NameAvailabilityReasonType = string;

/** Known values of {@link TypeValue} that the service accepts. */
export enum KnownTypeValue {
  /** The resource type for Azure AD B2C tenant resource. */
  MicrosoftAzureActiveDirectoryB2CDirectories = "Microsoft.AzureActiveDirectory/b2cDirectories"
}

/**
 * Defines values for TypeValue. \
 * {@link KnownTypeValue} can be used interchangeably with TypeValue,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Microsoft.AzureActiveDirectory\/b2cDirectories**: The resource type for Azure AD B2C tenant resource.
 */
export type TypeValue = string;

/** Known values of {@link B2CResourceSKUName} that the service accepts. */
export enum KnownB2CResourceSKUName {
  /** Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model. */
  Standard = "Standard",
  /** Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing. */
  PremiumP1 = "PremiumP1",
  /** Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing. */
  PremiumP2 = "PremiumP2"
}

/**
 * Defines values for B2CResourceSKUName. \
 * {@link KnownB2CResourceSKUName} can be used interchangeably with B2CResourceSKUName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard**: Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model. \
 * **PremiumP1**: Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing. \
 * **PremiumP2**: Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
 */
export type B2CResourceSKUName = string;

/** Known values of {@link B2CResourceSKUTier} that the service accepts. */
export enum KnownB2CResourceSKUTier {
  /** The SKU tier used for all Azure AD B2C tenants. */
  A0 = "A0"
}

/**
 * Defines values for B2CResourceSKUTier. \
 * {@link KnownB2CResourceSKUTier} can be used interchangeably with B2CResourceSKUTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **A0**: The SKU tier used for all Azure AD B2C tenants.
 */
export type B2CResourceSKUTier = string;

/** Known values of {@link BillingType} that the service accepts. */
export enum KnownBillingType {
  /** Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model. */
  MAU = "MAU",
  /** Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing. */
  Auths = "Auths"
}

/**
 * Defines values for BillingType. \
 * {@link KnownBillingType} can be used interchangeably with BillingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MAU**: Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model. \
 * **Auths**: Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
 */
export type BillingType = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  User = "User",
  Application = "Application",
  ManagedIdentity = "ManagedIdentity",
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Optional parameters. */
export interface B2CTenantsCheckNameAvailabilityOptionalParams
  extends coreClient.OperationOptions {
  /** The information required to check the availability of the name for the tenant. */
  checkNameAvailabilityRequestBody?: CheckNameAvailabilityRequestBody;
}

/** Contains response data for the checkNameAvailability operation. */
export type B2CTenantsCheckNameAvailabilityResponse = NameAvailabilityResponse;

/** Optional parameters. */
export interface B2CTenantsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type B2CTenantsListByResourceGroupResponse = B2CTenantResourceList;

/** Optional parameters. */
export interface B2CTenantsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type B2CTenantsListBySubscriptionResponse = B2CTenantResourceList;

/** Optional parameters. */
export interface B2CTenantsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type B2CTenantsGetResponse = B2CTenantResource;

/** Optional parameters. */
export interface B2CTenantsCreateOptionalParams
  extends coreClient.OperationOptions {
  /** The information needed to create the Azure AD B2C tenant and corresponding Azure resource, which is used for billing purposes. */
  createTenantRequestBody?: CreateTenantRequestBody;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type B2CTenantsCreateResponse = B2CTenantResource;

/** Optional parameters. */
export interface B2CTenantsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** The request body to update the Azure AD B2C tenant resource. */
  updateTenantRequestBody?: B2CTenantUpdateRequest;
}

/** Contains response data for the update operation. */
export type B2CTenantsUpdateResponse = B2CTenantResource;

/** Optional parameters. */
export interface B2CTenantsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = AvailableOperations;

/** Optional parameters. */
export interface GuestUsagesCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Guest Usages resource to be created */
  resource?: GuestUsagesResource;
}

/** Contains response data for the create operation. */
export type GuestUsagesCreateResponse = GuestUsagesResource;

/** Optional parameters. */
export interface GuestUsagesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Guest Usages Resource to be updated */
  resourcePatch?: GuestUsagesResourcePatch;
}

/** Contains response data for the update operation. */
export type GuestUsagesUpdateResponse = GuestUsagesResource;

/** Optional parameters. */
export interface GuestUsagesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GuestUsagesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type GuestUsagesGetResponse = GuestUsagesResource;

/** Optional parameters. */
export interface GuestUsagesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type GuestUsagesListBySubscriptionResponse = GuestUsagesResourceList;

/** Optional parameters. */
export interface GuestUsagesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type GuestUsagesListByResourceGroupResponse = GuestUsagesResourceList;

/** Optional parameters. */
export interface ExternalIdentitiesConfigurationClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}