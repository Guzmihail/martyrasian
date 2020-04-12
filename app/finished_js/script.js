/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logger */ "./app/js/modules/logger.js");

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');

      if (entry.intersectionRatio > 0) {
        document.querySelector(`div ol a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`div ol a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  }); // Track all sections that have an `id` applied

  document.querySelectorAll('div[id]').forEach(div => {
    observer.observe(div);
  });
});
$(function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(" .nav-links li");
  const elem = document.querySelector('body');
  hamburger.addEventListener('click', () => {
    elem.classList.toggle("ele");
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
    $('.line').toggleClass('leni-none');
  });
  $('.services-options').click(function () {
    $(this).next().slideToggle(900);
    $(this).toggleClass("expand");
  });
  var $slider = $('.faq__slider');
  var $progressBarLabel = $('.slider__label');
  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = nextSlide / slick.slideCount * 172;
    $progressBarLabel.css('margin-left', calc + '%');
  });
  $slider.slick({
    inifinite: false,
    slidesToShow: 1,
    initialSlide: 1,
    prevArrow: '<div class="slider-arrows arrowLeft"></div>',
    nextArrow: '<div class="slider-arrows arrowRight"></div>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 774,
      settings: {
        prevArrow: false,
        nextArrow: false
      }
    }, {
      breakpoint: 600,
      settings: {
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }); // Modal Form

  $('.promo__wrapper-box').click(function () {
    $('.modal-Form').slideToggle();
    $('.modal-Form').addClass('modal-Form__pseodo');
    $('body').css('overflow', 'hidden');
  });
  $('.modal__close-fomr').click(function () {
    $('.modal-Form').fadeOut();
    $('.modal-Form').removeClass('modal-Form__pseodo');
    $('body').css('overflow', 'auto');
  }); // Modal Form
  // Modal Video

  $('.video-btn').click(function () {
    $('.modal-video').slideToggle(); // $('.modal-Form').addClass('modal-Form__pseodo');

    $('body').css('overflow', 'hidden');
  });
  $('.modal__close-video').click(function () {
    $('.modal-video').fadeOut(); // $('.modal-Form').removeClass('modal-Form__pseodo');

    $('body').css('overflow', 'auto');
  }); // Modal Video
  // Modal Slider

  $('.faq__slider-link').click(function () {
    $('.modal').slideToggle();
    $('body').addClass('no-scroll');
  });
  $('.modal__close').click(function () {
    $('.modal').fadeOut();
    $('body').removeClass('no-scroll');
  }); // Modal Slider

  Object(_modules_logger__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./app/js/modules/logger.js":
/*!**********************************!*\
  !*** ./app/js/modules/logger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return logger; });
function logger() {
  console.log('Hello world');
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map