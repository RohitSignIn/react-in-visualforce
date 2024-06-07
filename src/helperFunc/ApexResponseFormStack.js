const a = [
    {
        "statusCode": 200,
        "type": "rpc",
        "tid": 10,
        "ref": false,
        "action": "VisualAntidote.FormCreatorController",
        "method": "createNewForm",
        "result": {
            "id": "a0fGB000015axo9YAA",
            "isCommunity": false,
            "name": "check",
            "primaryObject": "Account",
            "relatedObjectInXML": "<relobjects><relobject repeat=\"false\" relObjectType=\"detail\"><objectMappingKey>K-4390<\/objectMappingKey><objectMappingParentKey>K-4362<\/objectMappingParentKey><mappingPosition>2<\/mappingPosition><objName>Account<\/objName><objLabel>Account<\/objLabel><relationshipName>ChildAccounts<\/relationshipName><refToRec>(Account)<\/refToRec><refToRecTrim>Account<\/refToRecTrim><refIdName>ParentId<\/refIdName><refIdLabel>Parent Account ID<\/refIdLabel><relatedFieldType>Lookup<\/relatedFieldType><relatedFieldAccess>F<\/relatedFieldAccess><sfObjectName>Account<\/sfObjectName><\/relobject><relobject relObjectType=\"lookup\"><objectMappingKey>K-559<\/objectMappingKey><objectMappingParentKey>K-4390<\/objectMappingParentKey><mappingPosition>3<\/mappingPosition><objName>DandbCompanyId<\/objName><objLabel>D&amp;B Company<\/objLabel><relationshipName>DandbCompany<\/relationshipName><refToRec>(DandBCompany)<\/refToRec><refToRecTrim>DandBCompany<\/refToRecTrim><refIdName><\/refIdName><refIdLabel><\/refIdLabel><relatedFieldType>Lookup<\/relatedFieldType><relatedFieldAccess>F<\/relatedFieldAccess><sfObjectName>DandBCompany<\/sfObjectName><\/relobject><relobject repeat=\"false\" relObjectType=\"detail\"><objectMappingKey>K-4161<\/objectMappingKey><objectMappingParentKey>K-4362<\/objectMappingParentKey><mappingPosition>4<\/mappingPosition><objName>AlternativePaymentMethod<\/objName><objLabel>Alternative Payment Method<\/objLabel><relationshipName>AlternativePaymentMethods<\/relationshipName><refToRec>(Account)<\/refToRec><refToRecTrim>Account<\/refToRecTrim><refIdName>AccountId<\/refIdName><refIdLabel>Account ID<\/refIdLabel><relatedFieldType>Lookup<\/relatedFieldType><relatedFieldAccess>F<\/relatedFieldAccess><sfObjectName>Alternative Payment Method<\/sfObjectName><\/relobject><\/relobjects>",
            "userContext": "Admin"
        }
    }
]


<relobjects>

<relobject repeat="false" relObjectType="detail">
<objectMappingKey>K-4390</objectMappingKey>
<objectMappingParentKey>K-4362</objectMappingParentKey>
<mappingPosition>2</mappingPosition>
<objName>Account</objName>
<objLabel>Account</objLabel>
<relationshipName>ChildAccounts</relationshipName>
<refToRec>(Account)</refToRec>
<refToRecTrim>Account</refToRecTrim>
<refIdName>ParentId</refIdName>
<refIdLabel>Parent Account ID</refIdLabel>
<relatedFieldType>Lookup</relatedFieldType>
<relatedFieldAccess>F</relatedFieldAccess>
<sfObjectName>Account</sfObjectName>
</relobject>

<relobject relObjectType="lookup">
<objectMappingKey>K-559</objectMappingKey>
<objectMappingParentKey>K-4390</objectMappingParentKey>
<mappingPosition>3</mappingPosition>
<objName>DandbCompanyId</objName>
<objLabel>D&amp;B Company</objLabel>
<relationshipName>DandbCompany</relationshipName>
<refToRec>(DandBCompany)</refToRec>
<refToRecTrim>DandBCompany</refToRecTrim>
<refIdName></refIdName>
<refIdLabel></refIdLabel>
<relatedFieldType>Lookup</relatedFieldType>
<relatedFieldAccess>F</relatedFieldAccess>
<sfObjectName>DandBCompany</sfObjectName>
</relobject>

<relobject repeat="false" relObjectType="detail">
<objectMappingKey>K-4161</objectMappingKey>
<objectMappingParentKey>K-4362</objectMappingParentKey>
<mappingPosition>4</mappingPosition>
<objName>AlternativePaymentMethod</objName>
<objLabel>Alternative Payment Method</objLabel>
<relationshipName>AlternativePaymentMethods</relationshipName>
<refToRec>(Account)</refToRec><refToRecTrim>Account</refToRecTrim>
<refIdName>AccountId</refIdName>
<refIdLabel>Account ID</refIdLabel>
<relatedFieldType>Lookup</relatedFieldType>
<relatedFieldAccess>F</relatedFieldAccess>
<sfObjectName>Alternative Payment Method</sfObjectName>
</relobject>

</relobjects>




const payload = {
    "action":"VisualAntidote.FormCreatorController",
    "method":"createNewForm",
    "data": [
            {
                "id":"",
                "name":"one",
                "userContext":"Admin",
                "isCommunity":false,
                "primaryObject":"Account",
                "relatedObjectInXML":"
                <relobjects><relobject repeat=\"false\" relObjectType=\"detail\">
                <objectMappingKey>K-428</objectMappingKey>
                <objectMappingParentKey>K-4893</objectMappingParentKey>
                <mappingPosition>2</mappingPosition>
                <objName>Account</objName><objLabel>Account</objLabel><relationshipName>ChildAccounts</relationshipName><refToRec>(Account)</refToRec><refToRecTrim>Account</refToRecTrim><refIdName>ParentId</refIdName><refIdLabel>Parent Account ID</refIdLabel><relatedFieldType>Lookup</relatedFieldType><relatedFieldAccess>F</relatedFieldAccess><sfObjectName>Account</sfObjectName></relobject><relobject relObjectType=\"lookup\"><objectMappingKey>K-4956</objectMappingKey><objectMappingParentKey>K-428</objectMappingParentKey><mappingPosition>3</mappingPosition><objName>OwnerId</objName><objLabel>Owner</objLabel><relationshipName>Owner</relationshipName><refToRec>(User)</refToRec><refToRecTrim>User</refToRecTrim><refIdName></refIdName><refIdLabel></refIdLabel><relatedFieldType>Lookup</relatedFieldType><relatedFieldAccess>F</relatedFieldAccess><sfObjectName>User</sfObjectName></relobject><relobject repeat=\"false\" relObjectType=\"detail\"><objectMappingKey>K-4212</objectMappingKey><objectMappingParentKey>K-428</objectMappingParentKey><mappingPosition>4</mappingPosition><objName>AccountPartner</objName><objLabel>Account Partner</objLabel><relationshipName>AccountPartnersFrom</relationshipName><refToRec>(Account)</refToRec><refToRecTrim>Account</refToRecTrim><refIdName>AccountFromId</refIdName><refIdLabel>Account ID</refIdLabel><relatedFieldType>Lookup</relatedFieldType><relatedFieldAccess>I</relatedFieldAccess><sfObjectName>Account Partner</sfObjectName></relobject></relobjects>"
            }
        ],
        "type":"rpc",
        "tid":9,
        "ctx":
        {
            "csrf":"VmpFPSxNakF5TkMwd05pMHhNRlF4TURvd09Eb3dOeTR3TlRaYSxneVlERnRYR2hPRmRDcTZOWjJELXVRS3JJX3lHc2k3Rk1XTW84UVlreEN3PSxNbVZrTjJGag==",
            "vid":"066GB00000ABOv7",
            "ns":"VisualAntidote",
            "ver":60,"authorization":"eyJub25jZSI6IlZ3Mmg2MjBZSGJDVlUwZVVoOVcwaUlRcVY5RG1lRUxVbDB5VTc4dnhtX1VcdTAwM2QiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IntcInRcIjpcIjAwREdCMDAwMDAyRm5ZTlwiLFwidlwiOlwiMDJHR0IwMDAwMDBkUEJKXCIsXCJhXCI6XCJ2ZnJlbW90aW5nc2lnbmluZ2tleVwiLFwidVwiOlwiMDA1R0IwMDAwMGFWOVlQXCJ9IiwiY3JpdCI6WyJpYXQiXSwiaWF0IjoxNzE3NzU0ODg3MDU3LCJleHAiOjB9.Q2pKV2FYTjFZV3hCYm5ScFpHOTBaUzVHYjNKdFEzSmxZWFJ2Y2tOdmJuUnliMnhzWlhJdVkzSmxZWFJsVG1WM1JtOXliUT09.24xlYNH6mF2G7roTZotjCP3udWTi0YQ4DHZDdKqyPlI="
        }
}