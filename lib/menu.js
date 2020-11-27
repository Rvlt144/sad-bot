exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *!sticker* <kirim gambar + !sticker>
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *!ytmp3* <!ytmp3 link youtube>
║│2. *!ytmp4* <!ytmp4 link youtube>
║│3. *!tiktok* <!tiktok link Tiktok>
║│4. *!ig* <!ig link Ig>
║│5. *!fb* <!fb link Fb>
║│6. *!twt* <!twt link Tweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *!wiki* <mencari info dari Wikipedia>
║│2. *!nulis* <!nulis Rico Gans>
║│3. *!pantun*
║│4. *!nama* <!nama Rico>
║│5. *!pasangan* <!pasangan Budi dan Vio>
║│6. *!lirik* <!lirik boan au marsada band>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *!covid*
║│2. *!infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *!owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *!info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *!tts* <contoh !tts Rico Gans>
║│2. *!quotes*
║│3. *!donasi*
║│4. *!foto cewek* <foto cecan>
║│5. *!foto cowok* <foto cogan>
║│6. *!pokemon* 
║│7. *!loli*
║│8. *!fotoanime*
║│9. *!alay*  <contoh !alay Aku sayang kamu>
║│10. *!say*  <contoh !say Aku Sayang Rico>
║│11. *!infoig* <contoh !infoig @revolt_144>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY R I C O*
╚════════════════════`
}
