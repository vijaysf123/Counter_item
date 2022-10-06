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


// const countersEl = document.querySelectorAll(".counter");

// countersEl.forEach((count) => {
//   count.innerText = "0";
//   incrementCounter();
//   function incrementCounter() {
//     let startCount = +count.innerText;
//     const dataCeil = count.getAttribute("data-ceil");
//     const increment = dataCeil / 15;
//     startCount = Math.ceil(startCount + increment);

//     if (startCount < dataCeil) {
//       count.innerText = startCount;
//       setTimeout(incrementCounter, 50);
//     } else {
//       count.innerText = dataCeil;
//     }
//   }
// });
