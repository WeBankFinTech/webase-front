/**
 * Copyright 2014-2019  the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package com.webank.webase.front.keyServer;

import com.webank.webase.front.base.ConstantCode;
import com.webank.webase.front.base.exception.FrontException;
import com.webank.webase.front.keyServer.entity.ReqSignDto;
import com.webank.webase.front.keyServer.entity.RspSignDto;
import com.webank.webase.front.keyServer.entity.RspUserInfoDto;
import com.webank.webase.front.keystore.KeyStoreInfo;
import com.webank.webase.front.util.CommonUtils;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * interface of key server.
 */
@Service
public class KeyServerService {

    @Autowired
    private KeyServerRestTools restTools;

    /**
     * new user.
     */
    public RspUserInfoDto newUser() {
        return restTools.getForJaveBean(KeyServerRestTools.URI_NEW_USER, RspUserInfoDto.class);
    }

    /**
     * get userInfo.
     */
    public RspUserInfoDto getUser(String userAddress) {
        String uri = String.format(KeyServerRestTools.URI_GET_USER, userAddress);
        return restTools.getForJaveBean(uri, RspUserInfoDto.class);
    }



    /**
     * sign by cloud.
     */
    private String cloudSign(byte[] encodedTransaction, int groupId, String address) {
        String encodedDataStr = new String(encodedTransaction);
        ReqSignDto reqSignDto = new ReqSignDto(groupId, address, encodedDataStr);
        String uri = KeyServerRestTools.URI_SIGN;
        //sign by key server
        RspSignDto signRsp = restTools.postForJaveBean(uri, reqSignDto, RspSignDto.class);
        return Optional.ofNullable(signRsp).map(RspSignDto::getSignDataStr)
            .orElseThrow(() -> new FrontException(ConstantCode.SIGN_FAIL));
    }
}
