function runAnimations() {


    // EFFECTS ANIMATION
    // all elements that have fadeIn class will get the effect by getting animateFadeIn when they enter viewport
    let elementsToFade = document.querySelectorAll(".fadeIn");
    // all elements that have slideMeRight class will get the effect by getting animateSlideRight when they enter viewport
    let elementsToSlideRight = document.querySelectorAll(".slideMeRight");
    // all elements that have slideMeLeft class will get the effect by getting animateSlideLeft when they enter viewport
    let elementsToSlideLeft = document.querySelectorAll(".slideMeLeft");
    // all elements that have slideMeBottom class will get the effect by getting animateSlideBottom when they enter viewport
    let elementsToSlideBottom = document.querySelectorAll(".slideMeBottom");

    function callbackFunc(entries, observer) {
        entries.forEach((entry) => {
            // var txt = entry.target.classList[0] + " visibility: " + entry.isIntersecting;
            // console.log(entry);
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("fadeIn")) {
                    entry.target.classList.add("animateFadeIn");
                    return;
                };
                if (entry.target.classList.contains("slideMeRight")) {
                    entry.target.classList.add("animateSlideRight");
                    return
                };
                if (entry.target.classList.contains("slideMeLeft")) {
                    entry.target.classList.add("animateSlideLeft");
                    return

                };
                if (entry.target.classList.contains("slideMeBottom")) {
                    entry.target.classList.add("animateSlideBottom");

                };
            };
        });
    };

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.0, // even one pixel of the element has to enter viewport to trigger callbackFunction
    };

    let observer = new IntersectionObserver(callbackFunc, options);

    // observing fade elements
    elementsToFade.forEach(function (element) {
        observer.observe(element);
        console.log(element)
    });
    // observing slide elements
    elementsToSlideRight.forEach(function (element) {
        observer.observe(element);
    });
    elementsToSlideLeft.forEach(function (element) {
        observer.observe(element);
    });
    elementsToSlideBottom.forEach(function (element) {
        observer.observe(element);
    });


};
runAnimations();