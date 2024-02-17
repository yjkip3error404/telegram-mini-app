const tgApp = window.Telegram.WebApp;

const initData = tgApp.initData;

tgApp.MainButton.show();

tgApp.MainButton.onClick(() => {
    tgApp.HapticFeedback.impactOccurred('heavy');
});