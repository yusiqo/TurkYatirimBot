/*CMD
  command: ðï¸ Wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
var button = [[{title : "ð¼ Set / Change TRX Wallet" , command : "/wallet"}]]
Bot.sendInlineKeyboard(button,"*ð¡ Your currently set TRX wallet is:* \n `"+wallet+"`\n\nð¹It will be used for *all future withdrawals.*"
);
