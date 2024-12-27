import dayjs from "dayjs";

export function useTime() {
    const hour = new Date().getHours();
    const timeText =
        hour < 6
            ? '凌晨好'
            : hour < 9
                ? '早上好'
                : hour < 11
                    ? '上午好'
                    : hour < 13
                        ? '中午好'
                        : hour < 17
                            ? '下午好'
                            : hour < 19
                                ? '傍晚好'
                                : '晚上好';

    return { timeText };
};
// 显示指定实行的时间间隔:传入的是时间戳
export function getTimeBetween(time) {
    const now = new Date().getTime();
    let betweenSecond = Math.floor((now - time) / 1000); // 换算成秒
    let betweenMinute = Math.floor(betweenSecond / 60);
    let betweenHour = Math.floor(betweenMinute / 60);

    let hour = new Date(time).getHours();
    let minutes = new Date(time).getMinutes();
    const timeText =
    betweenSecond < 60
            ? `${betweenSecond} 秒前`
            : betweenMinute < 60
                ? `${betweenMinute} 分前`
                : betweenHour < 24
                    ? `${betweenHour} 小时前`
                    : betweenHour < 48
                        ? `昨天 ${hour} : ${minutes}`
                        : `${hour}`;

    return { timeText };
};

export function getTimeFormat(time) {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss');
}