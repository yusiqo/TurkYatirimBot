/*CMD
  command: /ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ๐ฅ refferal
CMD*/

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let reflink = Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","ref")
let TRX = 20*refcom.value()
let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}

var key = [[{ title: "๐ Detailed Report", command: "/list"}]]

Bot.sendMessage("*๐จโ๐ฉโ๐งโ๐ฆ Referral System\n\nโ๏ธ Earn 0.01 TRX and 15% Commission Every Time Your Referral Deposit*")
Bot.sendMessage("๐ฅ *Your refer link : "+reflink+"*")
Bot.sendInlineKeyboard(
  key,"๐* Total Refer :- "+reflist.length+"*\n\n๐ฃ *Referral Deposits*: \n" +TRX.toFixed(5) + " *TRX*\n" + "\n" + "โพ *Earnings:* \n" + refcom.value().toFixed(5) + " *TRX*"
  )
