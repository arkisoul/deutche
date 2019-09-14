/*Mobile Menu*/
$("#mobile-menu, .dash-menu-inner").click(function(e) {
    $(this).next("ul").slideToggle();
});

/*Custome select*/
$(".collapse-btn").click(function(e) {
    $(this).next(".drop-wrapp").slideToggle();
});

/*View CAlender*/
$(".view-calender").click(function(e) {
	e.preventDefault();
    $(this).parents(".detail").next(".calender-wrapp").slideToggle();
	$(this).toggleClass("active");
});

/*radio button*/
$(".button-group input").click(function(e) {
    $(this).parent(".btn").siblings().removeClass("active");
	$(this).parent(".btn").addClass("active");
});

/*Add day*/
$(".select-day-open").click(function(e) {
    e.preventDefault();
	$(this).slideUp();
	$(".select-day-wrapp").slideDown();
});

/*Adv search*/
$(".adv-search-open").click(function(e) {
    e.preventDefault();
	$(this).toggleClass("active");
	$(".adv-search-wrapp").slideToggle();
});


/*Modal box*/
$('.payment-modal, .student-dash, .add-bank-account, .add-bank-account2 , .cancel-class-pop').fancybox({
	width: 500
});

$('.login').fancybox({
  width: 360
});

$('.prof-register').fancybox({
  width: 370,
  topRatio: 0.8
});

$('.prof-register-op, .prof-profile-op').fancybox({
  width: 370,
  topRatio: 0.7
});

$('.classfile-modal').fancybox({
  width: 480,
  topRatio: 0.4
});

$('.choose-schedule-modal').fancybox({
  minWidth: 980,
  topRatio: 0.5,
  overlayShow: true,
  overlayOpacity: 0
});

$('.choose-tip-modal').fancybox({
  width: 150,
});

/* Tab Toggle */
$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

$('ul.tabs-u li').click(function(){
  var tab_id = $(this).attr('data-tab');
  var btn_link_id = document.getElementById('btn-link');

  if(tab_id == 'tab-u-2') {
    $(btn_link_id).attr('style', 'display:none');
  }
  else {
    $(btn_link_id).attr('style', 'display:inherit');
  }

  $('ul.tabs-u li').removeClass('current');
  $('.tab-content-u').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

// Avail Time
$(".onoffswitch-label").mouseover(function(e) {
  if($('#myonoffswitch').is(":checked")) {
    $(this).next(".time-wrap").slideToggle();
  }
});

$(".onoffswitch-label").mouseout(function(e) {
  if($('#myonoffswitch').is(":checked")) {
    $(this).next(".time-wrap").attr('style', 'display:none');
  }
});

// Side Bar Accord
$('ul.accord li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.accord li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

//Side Bar Sub Menu
$('ul.accord li .sub-menu li').click(function(){
  if($(this).hasClass("active")) {
    $(this).removeClass('active');
  }
  else {
    $(this).addClass('active');
  }
});

/*Show File*/
$(".show-file").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("expanded");

  if ($(this).hasClass("expanded")) {
    this.innerHTML = "- ocultar archivos";
  } else {
    this.innerHTML = "+ ver archivos";
  }

  $(".show-file-wrap").slideToggle();
});

/*Add File*/
$(".add-file").click(function(e) {
  e.preventDefault();
  $(".add-file-box").slideToggle();
});

$(".add-other-file").click(function(e) {
  e.preventDefault();
  $(".add-other-file-box").slideToggle();
});

/*Task Delivered*/
$(".task-delivered").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("delivered");
  var id = [];
  id[0] = document.getElementById("del1");
  id[1] = document.getElementById("del2");
  id[2] = document.getElementById("del3");

  if ($(this).hasClass("delivered")) {
    id.forEach(function () {
      $(id).toggleClass("display-none");
    });
  } else {
    id.forEach(function () {
      $(id).removeClass("display-none");
    });
  }

  $(".correction").slideToggle();
});

// My Account Side Bar
$('ul.acc-tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.acc-tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

// My Account Transaction Tabs
$('ul.transact-tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.transact-tabs li').removeClass('current');
  $('.tab-tr-content').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

$('#odc').click(function(e) {
  e.preventDefault();
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    this.innerHTML = '<i class="fa fa-lock"></i> Solicitar cobro';
  }
  else {
    this.innerHTML = '<i class="fa fa-unlock-alt"></i> Solicitar cobro';
    $(this).addClass("active");
  }
});

//Save Bank Account Detail: Professor
$('#save-acc-detail').click(function () {
  console.debug("Swfit Value");
  if (!$('#swift').val()) {
    console.debug("Empty Value");
    $('.err-msg').attr('style', 'display:inherit');
    $('#swift').attr('style', 'border-color: #FF1C5A');
  }
  else {
    $('.err-msg').attr('style', 'display:none');
  }
});

// Signup Side Bar
$('ul.reg-tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.reg-tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("."+tab_id).addClass('current');
});

$('.btn-tog').click(function (e) {
  e.preventDefault();
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.fa-check').hide();
  }
  else {
    $(this).addClass("active");
    $(this).children('.fa-check').show();
  }
});

// See More Policies - Class File
$('.btn-more').click(function (e) {
  e.preventDefault();
  var tab_id = $(this).attr('data-tab');
  $("."+tab_id).slideToggle(350);
});

// Accordion
$(".accordion > li > span").click(function() {
    $(this).closest('li').siblings().find('span').removeClass('active').next('.ac-body').slideUp(250);
    $(this).toggleClass("active").next('.ac-body').slideToggle(250);
});

//Calendar
    $.datepicker.regional['it'] = {
    closeText: 'Chiudi', // set a close button text
    currentText: 'Oggi', // set today text
    monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',   'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'], // set month names
    monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'], // set short month names
    dayNames: ['Domenica','Luned&#236','Marted&#236','Mercoled&#236','Gioved&#236','Venerd&#236','Sabato'], // set days names
    dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'], // set short day names
    dayNamesMin: ['D','L','M','X','J','V','S'], // set more short days names
    dateFormat: 'dd/mm/yy' // set format date
};

$.datepicker.setDefaults($.datepicker.regional['it']);

$( "#datepicker-2" ).datepicker();

// I have a problem
$('ul.side-links li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.side-links li').removeClass('active');
  $('.tab-content').removeClass('active');

  $(this).addClass('active');
  $("."+tab_id).addClass('active');
});

// See Resolution
$('.see-solution').click(function (e) {
  e.preventDefault();
  var cap = document.getElementById('cap');
  console.debug(cap);
  $('#ihave-profilesec').hide();
  $('#ihave-optsec').hide();
  cap.innerText = "Tus resoluciones";
  $('.resolution-sec').slideDown();
});

// Popups
$('.report-inci').fancybox({
  width: 500
});
