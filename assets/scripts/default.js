
export async function defaultAction(bot, msg) {
    await bot.sendPhoto(msg.chat.id, "./assets/images/image.jpg", {
        caption: `${msg.from.first_name},\n\nДобро пожаловать в онлайн Анализатор рулетки!\n\n
Ты уже в шаге от своего выигрыша! Для того чтобы получать эксклюзивные сигналы, с помощью которых ты сможешь делать крупные выигрыши, необходимо привязать ваш аккаунт к боту. Это улучшит анализ статистики и выдаст наиболее подходящие сигналы именно под ваш аккаунт.\n\n
Нажимай на кнопку "Пройти регистрацию" для продолжения и зарегистрируй новый аккаунт, используя промокод <b>GPTABUZ</b>.`,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: "Пройти регистрацию", url: "https://1wzvro.top/casino/list?open=register&p=vs1b" }],
                [{ text: "Перейти к бесплатному доступу", callback_data: "getfree" }]
            ]
        })
    });
}