/*CMD
  command: /withtrx
  help: 
  need_reply: true
  auto_retry_time: 
  folder: TRX Withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var withdraw = Libs.ResourcesLib.userRes("withdraw")
var wallet = User.getProperty("wallet")
var balance = Libs.ResourcesLib.userRes("balance")
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*š Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}

if (message < 1) {
  Bot.sendMessage("ā Minimum amount to withdraw 1 TRX")
} else {
  if (message > balance.value()) {
    Bot.sendMessage(
      "_š« You Can Withdraw Maximum: " + balance.value().toFixed(6) + " TRX"
    )
  } else {
function canRun(){
var last_run_a = User.getProperty("last_run_a");
  if(!last_run_a){ return true }
  
  var minutes = (Date.now() - last_run_a) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours = Math.floor(next / 60)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
   Bot.sendMessage("š *To withdraw, you need to complete the following missions:\n\nā You deposited 1 TRX\n\nā You already withdraw 1 time in 24 hours come back after :- \n"+wait_hours+" hours*");
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_a", Date.now(), "integer");
    if (message >= 1 && message <= 20) {
      var amo = message
      User.setProperty("amo", amo, "string")
      Libs.CoinPayments.apiCall({
        fields: {
          cmd: "create_withdrawal",
          amount: message,
          currency: "TRX", 
          address: wallet,
          auto_confirm: 1
        },
        onSuccess: "/onPayingTRX"
      })

      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    } else {
  Bot.sendMessage(
    "*ā Withdrawal Requested\nYou will receive your payment in 24 hours*\n\n*š³ Transaction Details:*\n" +
      amo +
      " *TRX* to the wallet\n" +
      wallet
  )
Bot.sendMessageToChatWithId(1194007250, "["+user.telegramid+"](tg://user?id=" +
  user.telegramid +
  ")"+"\n\nā Withdrawal RequesteD"+"\n"+"\n"+"\nš³ Transaction Details:\n"+amo+" TRX to the wallet\n"+wallet); 
      balance.add(-message)
      withdraw.add(+message)
      userPayment.add(+message)
    }
  }
}
