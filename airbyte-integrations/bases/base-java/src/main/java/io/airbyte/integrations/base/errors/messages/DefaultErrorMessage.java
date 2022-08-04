/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.base.errors.messages;

import io.airbyte.integrations.base.errors.utils.ConnectorName;

public class DefaultErrorMessage extends ErrorMessage {

  @Override
  public String getErrorMessage(String errorCode, Exception exception) {
    return getDefaultErrorMessage(errorCode, exception);
  }

  @Override
  public ConnectorName getConnectorName() {
    return ConnectorName.DEFAULT;
  }

}