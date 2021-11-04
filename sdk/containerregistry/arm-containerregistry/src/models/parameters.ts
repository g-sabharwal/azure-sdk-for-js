/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const agentPoolName: msRest.OperationURLParameter = {
  parameterPath: "agentPoolName",
  mapper: {
    required: true,
    serializedName: "agentPoolName",
    constraints: {
      MaxLength: 20,
      MinLength: 3,
      Pattern: /^[a-zA-Z0-9-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2021-08-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-06-01-preview',
    type: {
      name: "String"
    }
  }
};
export const connectedRegistryName: msRest.OperationURLParameter = {
  parameterPath: "connectedRegistryName",
  mapper: {
    required: true,
    serializedName: "connectedRegistryName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const exportPipelineName: msRest.OperationURLParameter = {
  parameterPath: "exportPipelineName",
  mapper: {
    required: true,
    serializedName: "exportPipelineName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const importPipelineName: msRest.OperationURLParameter = {
  parameterPath: "importPipelineName",
  mapper: {
    required: true,
    serializedName: "importPipelineName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const pipelineRunName: msRest.OperationURLParameter = {
  parameterPath: "pipelineRunName",
  mapper: {
    required: true,
    serializedName: "pipelineRunName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const registryName: msRest.OperationURLParameter = {
  parameterPath: "registryName",
  mapper: {
    required: true,
    serializedName: "registryName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const replicationName: msRest.OperationURLParameter = {
  parameterPath: "replicationName",
  mapper: {
    required: true,
    serializedName: "replicationName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const runId: msRest.OperationURLParameter = {
  parameterPath: "runId",
  mapper: {
    required: true,
    serializedName: "runId",
    type: {
      name: "String"
    }
  }
};
export const scopeMapName: msRest.OperationURLParameter = {
  parameterPath: "scopeMapName",
  mapper: {
    required: true,
    serializedName: "scopeMapName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9-_]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const taskName: msRest.OperationURLParameter = {
  parameterPath: "taskName",
  mapper: {
    required: true,
    serializedName: "taskName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9-_]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const taskRunName: msRest.OperationURLParameter = {
  parameterPath: "taskRunName",
  mapper: {
    required: true,
    serializedName: "taskRunName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const tokenName: msRest.OperationURLParameter = {
  parameterPath: "tokenName",
  mapper: {
    required: true,
    serializedName: "tokenName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9-]*$/
    },
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const webhookName: msRest.OperationURLParameter = {
  parameterPath: "webhookName",
  mapper: {
    required: true,
    serializedName: "webhookName",
    constraints: {
      MaxLength: 50,
      MinLength: 5,
      Pattern: /^[a-zA-Z0-9]*$/
    },
    type: {
      name: "String"
    }
  }
};
