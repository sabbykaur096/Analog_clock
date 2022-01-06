setInterval(() => {
    dt = new Date();
    ht = dt.getHours();
    mt = dt.getMinutes();
    st = dt.getSeconds();
    hrot = 30*ht + mt/2;
    mrot = 6*mt;
    srot = 6*st;

    hour.style.transform = `rotate(${hrot}deg)`;
    minute.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
}, 1000);