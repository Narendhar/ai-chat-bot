import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(timezone);

/**
 * Retrieves the current time in Indian Standard Time (IST).
 *
 * This function uses the dayjs library to get the current time and formats it 
 * in a 12-hour clock format (hh:mm AM/PM).
 *
 * @returns {string} The current time in IST formatted as "hh:mm A".
 * 
 * @throws {Error} Will throw an error if there is an issue with timezone retrieval or formatting.
 */
export function getISTTime(): string {
    return dayjs().tz("Asia/Kolkata").format("hh:mm A");
}
