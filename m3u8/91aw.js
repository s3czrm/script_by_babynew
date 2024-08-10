/*
91暗网
111

[rewrite_local]

https:\/\/\S+\.m3u8\?(token=[^&]+&c=https:\/\/\S+|auth_key=[^&]) url script-request-header https://raw.githubusercontent.com/s3czrm/script_by_babynew/main/m3u8/91anwang.js

[mitm]
hostname = *.cloudfront.net, *.ninghaixin.club,10play.shjtokj.cn
*/
