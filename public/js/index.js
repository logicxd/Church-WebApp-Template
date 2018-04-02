var vue = new Vue({
    el: '#app',
    data: {
        upcomingEvents: JSON.parse(upcomingEvents)
    },
});


var scrollFireOptions = [
    {
        selector: '#upcoming-events', offset: 200, callback: function (el) {
            Materialize.showStaggeredList($(el));
        }
    }
];

$(window).scroll(function() {
    var height = $(window).scrollTop();
    var stopVideoHeight = $('#header').outerHeight() + $('#introduction').outerHeight();
    var video = $('#home-page-video').get(0);
    if (video === 'undefined' || video === null)
        return;

    if(!video.paused && height >= stopVideoHeight) {
        video.pause();
        // console.log("Video paused");
    } else if (video.paused && height < stopVideoHeight) {
        video.play();
        // console.log("Video playing");
    }
});
