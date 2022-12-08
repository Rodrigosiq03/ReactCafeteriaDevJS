import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_vAPlfBpLO",
    ClientId: "4mp33fkpvbphhso49s1svcibfj"
}

export default new CognitoUserPool(poolData);