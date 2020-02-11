/**
 * Copyright 2014-2019 the original author or authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.webank.webase.front.rabbitmq.entity.message;

import com.alibaba.fastjson.JSONArray;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.fisco.bcos.web3j.tx.txdecode.LogResult;

import java.util.List;

/**
 * @author marsli
 */
@Data
@NoArgsConstructor
public class EventLogPushMessage implements MQObject {
    /**
     * related with
     */
    private int status;

    private List<LogResult> logs;

    @Override
    public String toString() {
        return "EventLogPushMessage:{" + "status:" + status + ","
                + "logs:" + JSONArray.toJSONString(logs) + "}";
    }
}