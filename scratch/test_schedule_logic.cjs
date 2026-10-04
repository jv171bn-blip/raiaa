const SCHEDULED_TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const start = String(i).padStart(2, '0');
  const end = String((i + 1) % 24).padStart(2, '0');
  return {
    id: `${start}-${end}`,
    startHour: i,
    label: `${start}:00 - ${end}:00`,
  };
});

function getAvailableScheduledSlots(currentHour, day) {
  const minAllowedHour = currentHour + 5;

  if (day === 'hoje') {
    return SCHEDULED_TIME_SLOTS.filter((s) => s.startHour >= minAllowedHour);
  }

  // day === 'amanha'
  if (minAllowedHour >= 24) {
    const minTomorrowHour = minAllowedHour - 24;
    return SCHEDULED_TIME_SLOTS.filter((s) => s.startHour >= minTomorrowHour);
  }

  return SCHEDULED_TIME_SLOTS;
}

console.log("=== Testing 15h (User's Example) ===");
const hoje15 = getAvailableScheduledSlots(15, 'hoje');
const amanha15 = getAvailableScheduledSlots(15, 'amanha');
console.log("Hoje às 15h:", hoje15.map(s => s.label));
console.log("Primeiro horário hoje:", hoje15[0]?.label);
console.log("Amanhã às 15h count:", amanha15.length);

console.log("\n=== Testing 18h ===");
const hoje18 = getAvailableScheduledSlots(18, 'hoje');
console.log("Hoje às 18h (deve ser 23h):", hoje18.map(s => s.label));

console.log("\n=== Testing 20h ===");
const hoje20 = getAvailableScheduledSlots(20, 'hoje');
const amanha20 = getAvailableScheduledSlots(20, 'amanha');
console.log("Hoje às 20h (deve ser vazio pois 20+5=25):", hoje20.map(s => s.label));
console.log("Amanhã às 20h (deve começar às 01h):", amanha20[0]?.label, "até", amanha20[amanha20.length - 1]?.label);

console.log("\n=== Testing 22h ===");
const amanha22 = getAvailableScheduledSlots(22, 'amanha');
console.log("Amanhã às 22h (deve começar às 03h):", amanha22[0]?.label);

console.log("\n=== Testing 02h ===");
const hoje02 = getAvailableScheduledSlots(2, 'hoje');
console.log("Hoje às 02h (deve começar às 07h):", hoje02[0]?.label);
