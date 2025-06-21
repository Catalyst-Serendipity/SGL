import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/id';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale('id');

document.querySelectorAll('.time-ago[data-date]').forEach(el => {
  const str = el.getAttribute('data-date');
  const parts = str.split(/[\s,.:]+/);
  const day = parts[0], month = parts[1], year = parts[2], hour = parts[3] || '00', minute = parts[4] || '00';

  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', Mei: '05', Jun: '06',
    Jul: '07', Agu: '08', Sep: '09', Okt: '10', Nov: '11', Des: '12'
  };

  const formatted = `${year}-${months[month]}-${day}T${hour}:${minute}`;
  const parsed = dayjs.tz(formatted, 'Asia/Jakarta');
  el.textContent = parsed.fromNow();
});
