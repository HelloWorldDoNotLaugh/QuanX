/***** ***** ***** ***** *****

[task_local]
*/60 * * * * yanluo.js

***** ***** ***** ***** *****/


const yanluo = new Date()+"\n时不待我,争分夺秒；";
$notify("阎王签到", "👻 签到成功 寿元已减少1小时", yanluo);
$done();
