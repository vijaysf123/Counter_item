const counters = document.querySelectorAll(".counter")

counters.forEach(function(counter){
    counter.innerHTML = 0;

    function updateCounter(){
        const targetCount = +counter.getAttribute('data-target')

        const startCount = +counter.innerHTML

        const incr = targetCount / 100

        if (startCount < targetCount) {
            counter.innerHTML = `${Math.round(startCount + incr)}`
            setTimeout(updateCounter, 10)
        }
    }
    updateCounter();
})