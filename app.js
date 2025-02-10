/////////   SOAT Ishlashi
function UpdateClock() {
    const yuq = new Date()
    const hour= yuq.getHours().toString().padStart(1,0)
    const minut= yuq.getMinutes().toString().padStart(1,0)
    const secund = yuq.getSeconds().toString().padStart(1,0)

    const timer=`${hour}:${minut}:${secund}😅`
    document.getElementById("clock").textContent=timer
}
UpdateClock()
setInterval(UpdateClock)
