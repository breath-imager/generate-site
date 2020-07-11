import $ from "jquery"

/**
 * 
 *
 * This is everything that was originall in scripts.js
 * I created a file called gatsby-node.js in the root of this project
 *
 * In there, I created an alias for Jquery (see: https://stackoverflow.com/questions/54468240/how-to-include-jquery-in-a-gatsby-js-project)
 * So that this file could be included with our project.
 *
 * Normally, something like this wouldn't check if '$' actually exists,
 * It would just attempt to run it no matter what.
 *
 * Gatsby won't let you do that. Specifically webpack. So we have to actually define
 * '$' as jquery so that webpack knows what to do with it.
 *
 * The other thing I did was just split up the functions that are useful elsewhere and export them
 * so that we can import them like import { applyJqueryVoodoo, debound } from '../assets/js/jquery.init.js'
 */

export const debounce = (func, wait, immediate) => {
  var timeout
  return function () {
    var context = this,
      args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)
    if (immediate && !timeout) func.apply(context, args)
  }
}

export const applyVideoListeners = () => {
  $(function () {
    $(".video").click(function () {
      const theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto =
          videoSRC +
          "?byline=0&amp;portrait=0&amp;color=3a6774&amp;autoplay=1&amp;loop=1";
      $(theModal + " iframe").attr("src", videoSRCauto);
      $(theModal + " button.close").click(function () {
        $(theModal + " iframe").attr("src", videoSRC);
      });
    });
  });
};

export const applyModalListeners = () => {
  // This just makes all bootstrap native .modals jive together
  $(".modal")
    .on("hidden.bs.modal", function (e) {
      if ($(".modal:visible").length) {
        $(".modal-backdrop")
          .first()
          .css(
            "z-index",
            parseInt($(".modal:visible").last().css("z-index")) - 10
          );
        $("body").addClass("modal-open");
      }
    })
    .on("show.bs.modal", function (e) {
      if ($(".modal:visible").length) {
        $(".modal-backdrop.in")
          .first()
          .css(
            "z-index",
            parseInt($(".modal:visible").last().css("z-index")) + 10
          );
        $(this).css(
          "z-index",
          parseInt($(".modal-backdrop.in").first().css("z-index")) + 10
        );
      }
    });
};

export const applyJqueryVoodoo = () => {
  /**
   * 
   *
   * I declared all these variables with 'let'
   *
   * They didn't have any declarations before, so again,
   * Gatsby would fail to include the file because referencing a
   * variable called $navbar before its initialized.
   *
   * So here we just initialize them
   *
   * That's pretty much the only change I made to this
   * other than wrap it in a function
   */
  let transparent = true
  let generate
  let scroll_distance
  let $navbar


  $(document).ready(function () {
    $navbar = $(".navbar[color-on-scroll]")
    scroll_distance = $navbar.attr("color-on-scroll") || 500

    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
    if ($(".navbar[color-on-scroll]").length !== 0) {
      generate.checkScrollForTransparentNavbar()
      $(window).on("scroll", generate.checkScrollForTransparentNavbar)
    }
  })

  generate = {
    misc: {
      navbar_menu_visible: 0,
    },

    checkScrollForTransparentNavbar: debounce(function () {
      if ($(document).scrollTop() > scroll_distance) {
        if (transparent) {
          transparent = false
          $(".navbar[color-on-scroll]").removeClass("navbar-transparent")
        }
      } else {
        if (!transparent) {
          transparent = true
          $(".navbar[color-on-scroll]").addClass("navbar-transparent")
        }
      }
    }, 17),
  }

}
