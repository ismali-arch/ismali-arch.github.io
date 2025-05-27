AOS.init();

const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const target = counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      if (count < target) {
        count++;
        counter.innerText = count;
        setTimeout(update, 20); // atur kecepatan animasi
      }
    };

    update();
});