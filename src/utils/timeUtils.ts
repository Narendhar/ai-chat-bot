import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Retrieves the current time in Indian Standard Time (IST).
 * @returns {string} The current time in IST formatted as "hh:mm A".
 */
export function getISTTime(): string {
    return dayjs().tz("Asia/Kolkata").format("hh:mm A");
}
