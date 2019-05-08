/**
 * Created by Saad Javaid on 5/8/2019.
 */

function togglenav() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$(document).ready(function () {

    var total = 0;
    $.getJSON("https://picsum.photos/v2/list", function (data) {
        $.each(data, function (key, val) {
            console.log(key);
            console.log(val.author);
            console.log(val.url);
            console.log(val.download_url);
            $('#other_articles').append('<li data-index="' + key + '"><div class="oa_img">' +
                '<a href="' + val.url + '" target="_blank">' +
                '<img src="' + val.download_url + '" class="img-responsive" alt="">' +
                '</a>' +
                '</div>' +
                '<div class="oa_text">' +
                '<a href="' + val.url + '" target="_blank">' + val.author + '</a>' +
                '</div>' +
                '</li>');
            total++;
        });
    });

    var indexMin = 0;
    var indexMax = 2;

    $('.btn_next').on('click', function () {
        indexMin += 3;
        indexMax += 3;
        changeSlide(indexMin, indexMax);
    })

    $('.btn_back').on('click', function () {
        indexMin -= 3;
        indexMax -= 3;
        changeSlide(indexMin, indexMax);
    })

})

function changeSlide(indexMin, indexMax) {
    if (indexMin <= 0) {
        indexMin = 0;
        indexMax = 2;
    }
    $("ul#other_articles li").hide();
    for (indexMin; indexMin <= indexMax; indexMin++) {
        console.log(indexMin);
        $("ul#other_articles").find("[data-index='" + indexMin + "']").show();
    }
    indexMin -= 3;
}
