
var options = {  
    resGetPath: 'locale/__lng__.json',
};

i18n.init(options, function(t){
    var lang = 'es-ES';

    if(i18n.lng().indexOf('gl') === 0) {
        lang = 'gl-ES';
    }
    
    i18n.setLng(lang,function(){
        $("#page-title").text(i18n.t("page-title"));
        $("#head-title").text(i18n.t("head-title"));
        $("#head-date").text(i18n.t("head-date"));
        $("#head-city").text(i18n.t("head-city"));

        $("#nav-first").text(i18n.t("nav-first"));
        $("#nav-second").text(i18n.t("nav-second"));
        $("#nav-third").text(i18n.t("nav-third"));
        $("#nav-fourth").text(i18n.t("nav-fourth"));
        $("#nav-fifth").text(i18n.t("nav-fifth"));
        $("#nav-sixth").text(i18n.t("nav-sixth"));
        $("#nav-seventh").text(i18n.t("nav-seventh"));

        $("#principles-title").text(i18n.t("principles-title"));
        $("#principles-h-title").text(i18n.t("principles-h-title"));
        $("#principles-h-txt").text(i18n.t("principles-h-txt"));
        $("#btn-first").text(i18n.t("btn-first"));
        $("#principles-s-title").text(i18n.t("principles-s-title"));
        $("#principles-s-txt").text(i18n.t("principles-s-txt"));
        $("#btn-second").text(i18n.t("btn-second"));
        $("#principles-c-title").text(i18n.t("principles-c-title"));
        $("#principles-c-txt").text(i18n.t("principles-c-txt"));
        $("#btn-third").text(i18n.t("btn-third"));
        $("#principles-m-title").text(i18n.t("principles-m-title"));
        $("#principles-m-txt").text(i18n.t("principles-m-txt"));
        $("#btn-fourth").text(i18n.t("btn-fourth"));

        $("#about-title").text(i18n.t("about-title"));
        $("#about-txt-first").text(i18n.t("about-txt-first"));
        $("#about-txt-second").text(i18n.t("about-txt-second"));
        $("#about-txt-third").text(i18n.t("about-txt-third"));
        $("#about-speakers").text(i18n.t("about-speakers"));
        $("#about-speak-txt-first").text(i18n.t("about-speak-txt-first"));
        $("#about-speak-txt-second").text(i18n.t("about-speak-txt-second"));
        $("#about-speak-txt-third").text(i18n.t("about-speak-txt-third"));
        $("#about-workshops").text(i18n.t("about-workshops"));
        $("#about-work-txt-first").text(i18n.t("about-work-txt-first"));
        $("#about-work-txt-second").text(i18n.t("about-work-txt-second"));
        $("#about-work-txt-third").text(i18n.t("about-work-txt-third"));
        $("#about-work-txt-fourth").text(i18n.t("about-work-txt-fourth"));
        $("#about-networking").text(i18n.t("about-networking"));
        $("#about-net-txt-first").text(i18n.t("about-net-txt-first"));
        $("#about-net-txt-second").text(i18n.t("about-net-txt-second"));
        $("#about-cc-txt").text(i18n.t("about-cc-txt"));
        $("#about-btn").text(i18n.t("about-btn"));

        $("#program-title").text(i18n.t("program-title"));
        $("#program-btn").text(i18n.t("program-btn"));

        $("#arrive-title").text(i18n.t("arrive-title"));
        $("#map-txt").text(i18n.t("map-txt"));

        $("#contact-title").text(i18n.t("contact-title"));
        $("#contact-dir-first").text(i18n.t("contact-dir-first"));
        $("#contact-dir-second").text(i18n.t("contact-dir-second"));
        $("#contact-tlf").text(i18n.t("contact-tlf"));
        $("#contact-txt").text(i18n.t("contact-txt"));
        $("#contact-email").text(i18n.t("contact-email"));

        $("#collaborators-title").text(i18n.t("collaborators-title"));

        $("#license-txt-first").text(i18n.t("license-txt-first"));
        $("#license-txt-second").text(i18n.t("license-txt-second"));
        $("#license-txt-third").text(i18n.t("license-txt-third"));
        $("#license-txt-fourth").text(i18n.t("license-txt-fourth"));
       
        $("#train-title").text(i18n.t("train-title"));
        $("#train-txt-first").text(i18n.t("train-txt-first"));
        $("#train-txt-second").text(i18n.t("train-txt-second"));
        $("#train-txt-third").text(i18n.t("train-txt-third"));
        $("#train-txt-fourth").text(i18n.t("train-txt-fourth"));
       
        $("#bus-title").text(i18n.t("bus-title"));
        $("#bus-txt-first").text(i18n.t("bus-txt-first"));
        $("#bus-txt-second").text(i18n.t("bus-txt-second"));
        $("#bus-txt-third").text(i18n.t("bus-txt-third"));
        $("#bus-txt-fourth").text(i18n.t("bus-txt-fourth"));
       
        $("#car-title").text(i18n.t("car-title"));
        $("#car-txt-first").text(i18n.t("car-txt-first"));
        $("#car-txt-second").text(i18n.t("car-txt-second"));
        $("#car-txt-third").text(i18n.t("car-txt-third"));
        $("#car-txt-fourth").text(i18n.t("car-txt-fourth"));
        $("#car-txt-fifth").text(i18n.t("car-txt-fifth"));
        $("#car-txt-sixth").text(i18n.t("car-txt-sixth"));
        $("#car-txt-seventh").text(i18n.t("car-txt-seventh"));
        $("#car-txt-eighth").text(i18n.t("car-txt-eighth"));
       
        $("#plane-title").text(i18n.t("plane-title"));
        $("#plane-txt-first").text(i18n.t("plane-txt-first"));
        $("#plane-txt-second").text(i18n.t("plane-txt-second"));
        $("#plane-txt-third").text(i18n.t("plane-txt-third"));
        $("#plane-txt-fourth").text(i18n.t("plane-txt-fourth"));
        $("#plane-txt-fifth").text(i18n.t("plane-txt-fifth"));

        $("#btn-info-first").text(i18n.t("btn-info-first"));
        $("#btn-info-second").text(i18n.t("btn-info-second"));
        $("#btn-info-third").text(i18n.t("btn-info-third"));
    });
});

$('#gallego').click(function(){
    document.cookie = 'i18next=gl-ES';
    location.reload();
});

$('#castellano').click(function(){
    document.cookie = 'i18next=es-ES';
    location.reload();
});

