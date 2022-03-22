/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CertificateListByBatchAccountOptionalParams,
  BatchManagementClient
} from "@azure/arm-batch";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all of the certificates in the specified account.
 *
 * @summary Lists all of the certificates in the specified account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/CertificateList.json
 */
async function listCertificates() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateOperations.listByBatchAccount(
    resourceGroupName,
    accountName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCertificates().catch(console.error);

/**
 * This sample demonstrates how to Lists all of the certificates in the specified account.
 *
 * @summary Lists all of the certificates in the specified account.
 * x-ms-original-file: specification/batch/resource-manager/Microsoft.Batch/stable/2022-01-01/examples/CertificateListWithFilter.json
 */
async function listCertificatesFilterAndSelect() {
  const subscriptionId = "subid";
  const resourceGroupName = "default-azurebatch-japaneast";
  const accountName = "sampleacct";
  const select = "properties/format,properties/provisioningState";
  const filter =
    "properties/provisioningStateTransitionTime gt '2017-05-01' or properties/provisioningState eq 'Failed'";
  const options: CertificateListByBatchAccountOptionalParams = {
    select,
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new BatchManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.certificateOperations.listByBatchAccount(
    resourceGroupName,
    accountName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listCertificatesFilterAndSelect().catch(console.error);