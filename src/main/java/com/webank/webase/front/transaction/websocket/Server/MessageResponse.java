/*
 * Copyright 2014-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.webank.webase.front.transaction.websocket.Server;

import lombok.Data;
import org.fisco.bcos.web3j.protocol.core.Response;

import javax.validation.constraints.NotNull;

/**
 * ReqEncodeInfoVo.
 */
@Data
public class MessageResponse {

    @NotNull
    private String frontId;
    @NotNull
    private String messageId;
    @NotNull
    private String method;

    private Response.Error error;

    private String rawResponse;
}