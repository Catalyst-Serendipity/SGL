export function parseCustomDate(dateStr) {
  const months = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'Mei': 4, 'Jun': 5,
    'Jul': 6, 'Agu': 7, 'Sep': 8, 'Okt': 9, 'Nov': 10, 'Des': 11
  };
  
  const parts = dateStr.split(/[\s,.:]+/);
  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);
  const hour = parseInt(parts[3] || 0);
  const minute = parseInt(parts[4] || 0);
  
  return new Date(year, month, day, hour, minute);
}

export function timeAgo(dateInput) {
  let date;
  
  if (typeof dateInput === 'string') {
    date = isNaN(new Date(dateInput).getTime()) 
      ? parseCustomDate(dateInput) 
      : new Date(dateInput);
  } else {
    date = dateInput;
  }
  
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  const intervals = {
    tahun: 31536000,
    bulan: 2592000,
    hari: 86400,
    jam: 3600,
    menit: 60
  };
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit} lalu`;
    }
  }
  
  return 'beberapa detik lalu';
}